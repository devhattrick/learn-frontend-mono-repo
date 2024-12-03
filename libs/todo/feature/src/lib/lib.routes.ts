import { Route } from '@angular/router';

export const todoFeatureRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('./todo-feature.component').then((m) => m.TodoFeatureComponent),
  },
  // {
  //   path: ':id',
  //   loadChildren: () =>
  //     import('./todo-feature.component').then((m) => m.TodoFeatureComponent),
  // },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
