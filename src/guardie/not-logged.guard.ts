import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router);
  if(auth.isLogged())
  {
    router.navigate(['/vietato'])
    return false;
  }
  return true;
};
