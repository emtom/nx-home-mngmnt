import { Route } from '@angular/router';

import { authGuardFn } from '@nx-home-mngmnt/auth';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    title: 'login',
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    canActivate: [authGuardFn],
    children: [
      {
        title: 'dashboard',
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
