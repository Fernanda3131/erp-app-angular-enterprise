import { Routes } from '@angular/router';
import { Layout } from './layout/pages/layout/layout';
import { Login } from './features/auth/pages/login/login';
import { Forbidden } from './features/error/pages/forbidden/forbidden';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { permissionGuard } from './core/guards/permission.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard],
  },
  {
    path: 'forbidden',
    component: Forbidden,
  },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
    ],
  },
];
