import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@nx-home-mngmnt/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'nx-home-mngmnt-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginUsingGoogle() {
    this.authService.loginUsingGoogle().subscribe({
      next: () => this.router.navigate(['app/dashboard']),
      error: () => {
        console.log('error during sign in');
      }
    })
  }
}
