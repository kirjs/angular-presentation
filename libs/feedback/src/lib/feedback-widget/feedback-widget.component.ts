import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Message } from '../message';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'feedback-widget',
  templateUrl: './feedback-widget.component.html',
  styleUrls: ['./feedback-widget.component.css']
})
export class FeedbackWidgetComponent implements OnInit {

  messages$: Observable<Message[]>;

  formGroup: FormGroup;
  statusMessage = '';
  error = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.messages$ = this.feedbackService.getMessages(this.activatedRoute);
    });
  }

  ngOnInit() {
    let value = localStorage[`feedback-${this.router.url}-comment`] || '';
    value = value === 'null' ? '' : value;
    this.formGroup = this.fb.group({
      comment: [value, Validators.required],
      name: [localStorage.getItem('userName') || '', Validators.required],
      email: [localStorage.getItem('userEmail') || '', []]
    });

    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      localStorage[`feedback-${this.router.url}-comment`] = data.comment;
    });
  }

  submit() {
    const formValues: any = this.formGroup.getRawValue();
    localStorage.setItem('userName', formValues.name);
    localStorage.setItem('userEmail', formValues.email);
    this.feedbackService
      .addMessage(
        formValues.name,
        formValues.email,
        formValues.comment,
        this.getHeaderText()
      )
      .then(() => {
        this.formGroup.get('comment').reset();
      })
      .catch(() => {
        this.statusMessage = 'Error while sending feedback';
        this.error = true;
      });
  }

  private getHeaderText(): string {
    const el = document.body.querySelector('h1');
    return el ? el.innerHTML : '';
  }

}
