import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router);

  let islogedIn = sessionStorage.getItem("islogedIn")
  if (islogedIn == 'false') {
    alert("Please Login redirect to login page !!");
    _router.navigate(['login'])
    return false
  }
  return true;
};
