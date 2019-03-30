import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesModule } from '@codelab/slides';
import { CodeDemoModule } from '@codelab/code-demos';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlugifyPipe } from './slugify.pipe';
import { AngularThirtySecondsRoutingModule } from './angular-thirty-seconds-routing.module';
import { CreateSnippetComponent } from './create-snippet/create-snippet.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MarkdownModule } from 'ngx-markdown';
import { SnippetOverviewComponent } from './create-snippet/snippet-modal/snippet-overview.component';
import { SnippetInfoComponent } from './create-snippet/snippet-info/snippet-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SnippetService } from './shared/services/snippet.service';
import { SnippetSpinnerComponent } from './create-snippet/snippet-spinner/snippet-spinner.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../../codelab/src/environments/environment';
import { SnippetModule } from './snippet/snippet.module';

export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);

@NgModule({
  declarations: [
    SlugifyPipe,
    CreateSnippetComponent,
    SnippetOverviewComponent,
    SnippetInfoComponent,
    SnippetSpinnerComponent
  ],
  imports: [
    angularFire,
    AngularThirtySecondsRoutingModule,
    CommonModule,
    SlidesModule,
    FormsModule,
    CodeDemoModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SnippetModule,
  ],
  providers: [
    SlugifyPipe,
    SnippetService,
    AngularFireAuth
  ],
  entryComponents: [
    SnippetOverviewComponent
  ]
})
export class AngularThirtySecondsModule {
}


