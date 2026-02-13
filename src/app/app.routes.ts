import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MainLayout } from './layouts/main-layout/main-layout';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { ExploreAll } from './pages/explore-all/explore-all';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: Home },
    ],
  },
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: 'explore-all',
        component: ExploreAll,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/default-explore-layout/default-explore-layout').then(
                (m) => m.DefaultExploreLayout,
              ),
          },
          {
            path: 'dropdown',
            loadComponent: () =>
              import('./components/angular-aria/angular-aria').then((m) => m.AngularAriaComponent),
          },
          {
            path: 'signal-forms',
            loadComponent: () =>
              import('./components/app-signal-forms/app-signal-forms').then(
                (m) => m.AppSignalForms,
              ),
          },
          {
            path: 'reactive-forms',
            loadComponent: () =>
              import('./components/app-reactice-forms/app-reactice-forms').then(
                (m) => m.AppReacticeForms,
              ),
          },
        ],
      },
    ],
  },
];
