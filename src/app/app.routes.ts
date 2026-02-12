import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'aria',
    loadComponent: () => import('./angular-aria/angular-aria').then((m) => m.AngularAriaComponent),
  },
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./app-reactice-forms/app-reactice-forms').then((m) => m.AppReacticeForms),
  },
  {
    path: 'signal-forms',
    loadComponent: () =>
      import('./app-signal-forms/app-signal-forms').then((m) => m.AppSignalForms),
  },
];
