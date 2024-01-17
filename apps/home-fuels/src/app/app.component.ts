import { Component, Injector, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@nx-home-mngmnt/auth';

@Component({
  selector: 'nx-home-mngmnt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public authService = inject(AuthService);
  private injector = inject(Injector);
  private router = inject(Router);

  public get initalised() {
    return this.authService.state() !== undefined;
  }
}
