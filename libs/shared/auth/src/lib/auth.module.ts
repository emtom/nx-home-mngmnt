import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AUTH_PROVIDER } from './tokens';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

const USE_EMULATOR = false;

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    {
      provide: AUTH_PROVIDER,
      useFactory: () => {
        const auth = getAuth();
        if (USE_EMULATOR) {
          connectAuthEmulator(auth, 'http://localhost:9099')
        }

        return auth;
      }
    }
  ]
})
export class AuthModule { }
