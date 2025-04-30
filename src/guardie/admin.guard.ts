import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) =>
{
  let router = inject(Router);
  let auth = inject(AuthService);
  if(!auth.isLogged())
  {
    router.navigate(['/vietato'])
    return false;
  }
  let roles = auth.getRoles();
  if(!roles.includes("ROLE_ADMIN")) {
    router.navigate(['/vietato'])
    return false;
  }
  return true;
};
