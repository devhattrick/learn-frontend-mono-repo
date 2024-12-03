import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () => import('@ats/todo/feature'),
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
];
