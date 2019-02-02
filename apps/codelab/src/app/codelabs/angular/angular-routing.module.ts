import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

import { FullLayoutComponent } from '../../containers/full-layout';


let routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'create-first-app',
        loadChildren:
          './create-first-app/create-first-app.module#CreateFirstAppModule',
        name: 'Create your first Angular app',
        description:
          'Learn how to create and bootstrap your first Angular application',
        page: 'main',
        prod: true,
        translationIds: ['createFirstNgApp', 'learnHowToBootstrapApp']
      },
      {
        path: 'templates',
        loadChildren: './templates/templates.module#TemplatesModule',
        name: 'Templates',
        description: 'Learn how to use Angular templates',
        page: 'main',
        prod: true,
        translationIds: ['templates', 'learnUsingTemplates']
      },
      {
        path: 'dependency-injection',
        loadChildren:
          './dependency-injection/dependency-injection.module#DependencyInjectionModule',
        name: 'Dependency-Injection',
        description:
          'Learn how to provide dependencies to your code instead of hard-coding them',
        page: 'main',
        prod: true,
        translationIds: ['dependencyInjection', 'learnToProvideDependencies']
      },
      {
        path: 'component-tree',
        loadChildren:
          './component-tree/component-tree.module#ComponentTreeModule',
        name: 'Component-Tree',
        description: 'Learn how to structure your app with reusable components',
        page: 'main',
        prod: true,
        translationIds: [
          'componentTree',
          'learnToStructureAppWithReusableComponents'
        ]
      },
      /*
      {
        path: 'custom-events',
        loadChildren: './custom-events/custom-events.module#CustomEventsModule',
        name: 'Custom-Events (work in progress)',
        description: 'Learn to bind to events.',
        page: 'bonus',
        translationIds: ['customEvents', 'learnToBindToEvents']
      },*/
      {
        path: 'router',
        loadChildren: './router/router.module#RouterCodelabModule',
        name: 'Angular Router',
        description:
          '[🚧 Work In Progress] Learn how to add routes to your Angular application',
        page: 'main',
        prod: true
      },
      {
        path: 'material',
        loadChildren: './material/material.module#MaterialCodelabModule',
        name: 'Angular Material',
        description: '[🚧 Work In Progress] Learn how to use Angular Material',
        page: 'main',
        prod: true
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsCodelabModule',
        name: 'Forms',
        description: '[🚧 Work In Progress] Learn how to add Forms to your app',
        page: 'main',
        prod: true
      },
      {
        path: 'angular-cli',
        loadChildren: './angular-cli/angular-cli.module#AngularCliModule',
        name: 'angular-cli',
        description:
          '[🚧 Work In Progress] Learn how to quickly start working with angular',
        page: 'main',
        prod: true
      },
      {
        path: 'pipes',
        loadChildren: './pipes/pipes.module#PipesModule',
        name: 'Pipes',
        description:
          'Learn how pipes transform input values to output values for display in a view',
        page: 'bonus'
      },
      {
        path: 'structural-directives',
        loadChildren:
          './structural-directives/structural-directives.module#StructuralDirectivesModule',
        name: 'Structural Directives',
        description: 'Learn about structural directives in angular',
        page: 'bonus',
        prod: true
      }
    ]
  }
];

if (environment.production) {
  routes = routes.filter(r => r['prod']);
}


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {
}