import { Routes } from '@angular/router';

import { Layout } from './layout/pages/layout/layout';
import { Login } from './features/auth/pages/login/login';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: "login",
    component: Login
  },
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: Dashboard
      }
    ]
  },
];