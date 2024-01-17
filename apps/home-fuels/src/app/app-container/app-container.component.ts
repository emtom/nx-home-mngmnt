import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@nx-home-mngmnt/auth";

@Component({
  selector: 'nx-home-mngmnt-app-container',
  templateUrl: './app-container.component.html'
})
export class AppContainerComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public logout = () => {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}