import { Component, Injector, OnInit, effect, inject, runInInjectionContext } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@nx-home-mngmnt/auth';

@Component({
  selector: 'nx-home-mngmnt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public authService = inject(AuthService);
  public isLoading = false;
  private injector = inject(Injector);
  private router = inject(Router);

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        if (this.authService.loggedIn() === undefined) {
          return;
        }

        this.isLoading = false;

        if (this.authService.loggedIn()) {
          this.router.navigate(['/app/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    })
  }

  public login() {
    this.authService.loginUsingGoogle();
  }

  public logout() {
    this.authService.logout().subscribe(() => {
      console.log('logged out');
    })
  }
}
