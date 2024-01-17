import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"

export const authGuardFn = () => {
  const authService = inject(AuthService);

  return authService.loggedIn();
}