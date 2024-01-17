import { Route } from '@angular/router';

import { authGuardFn } from '@nx-home-mngmnt/auth';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppContainerComponent } from './app-container/app-container.component';

export const appRoutes: Route[] = [
  {
    title: 'login',
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    canActivate: [authGuardFn],
    component: AppContainerComponent,
    children: [
      {
        title: 'dashboard',
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app/dashboard'
  }
];
