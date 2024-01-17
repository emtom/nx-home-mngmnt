import { Injectable, WritableSignal, inject, signal } from "@angular/core";
import { getAuth, Auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, UserInfo } from 'firebase/auth';
import { FirebaseConfigurationService } from '@nx-home-mngmnt/firebase-config';
import { Observable, from } from "rxjs";

export interface IAuthUser extends UserInfo {};

@Injectable()
export class AuthService {
  public loggedIn: WritableSignal<boolean | undefined> = signal(undefined);
  public currentUser: WritableSignal<IAuthUser | undefined> = signal(undefined);
  private firebaseConfigService = inject(FirebaseConfigurationService);
  private googleAuthProvider = new GoogleAuthProvider();
  private authInstance: Auth;

  constructor() {
    const firebaseApp = this.firebaseConfigService.initalize()
    this.authInstance = getAuth(firebaseApp);
    
    onAuthStateChanged(this.authInstance, (user) => {
      this.loggedIn.set(!!user);

      if (user) {
        this.currentUser.set(user);
      }
    })
  }

  public isLoggedIn() {
    return true;
  }

  public loginUsingGoogle() {
    signInWithPopup(this.authInstance, this.googleAuthProvider)
  }

  public logout(): Observable<void> {
    return from(signOut(this.authInstance));
  }
}
