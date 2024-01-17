import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { filter, of, switchMap } from "rxjs";

import { AuthService } from "../services/auth.service"

export const authGuardFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.initalised$.pipe(
    filter(initalised => !!initalised),
    switchMap(() => {
      if (authService.state()?.user === null) {
        router.navigate(['login']);
        return of(false);
      }

      return of(true);
    })
  )
}