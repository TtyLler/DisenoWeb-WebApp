import { LoginService } from './../services/login.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export const logincheckGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const _loginService = inject(LoginService)
  
  if(_loginService.loggedIn()){
    return true
  } else {
    router.navigate(['/login'])
    return false
  } 
};
