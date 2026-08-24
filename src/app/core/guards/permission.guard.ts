import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth.service';

export const permissionGuard: CanActivateFn = (route) => {

  const auth = inject(Auth);
  const router = inject(Router);

  const permission = route.data['permission'];

  if (!permission) {
    return true;
  }

  if (auth.hasPermission(permission)) {
    return true;
  }

  return router.createUrlTree(['/forbidden']);

};