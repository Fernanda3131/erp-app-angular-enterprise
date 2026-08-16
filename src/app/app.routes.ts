import { Routes } from '@angular/router';
import { Layout } from './layout/pages/layout/layout';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: Layout,
    canActivate: [authGuard],

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard')
            .then(m => m.Dashboard)
      }

    ]

  }

];