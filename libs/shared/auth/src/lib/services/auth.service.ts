import { Injectable, inject, signal, WritableSignal, computed } from "@angular/core";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { BehaviorSubject, Observable, from } from "rxjs";
import { AUTH_PROVIDER } from "../tokens";

export interface IAuthUser extends User {};

export interface IAuthState {
  user: IAuthUser | null;
}

@Injectable()
export class AuthService {
  public state: WritableSignal<IAuthState | undefined> = signal(undefined);
  public currentUserId = computed(() => this.state()?.user?.uid);
  public initalised$ = new BehaviorSubject(false);
  private auth = inject(AUTH_PROVIDER);
  private googleAuthProvider = new GoogleAuthProvider();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.state.set({ user });
      this.initalised$.next(true);
    })
  }

  public isLoggedIn() {
    return true;
  }

  public loginUsingGoogle() {
    return from(signInWithPopup(this.auth, this.googleAuthProvider));
  }

  public logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
