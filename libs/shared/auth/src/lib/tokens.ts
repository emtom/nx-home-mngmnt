import { InjectionToken } from "@angular/core";
import { Auth } from "firebase/auth";

export const AUTH_PROVIDER = new InjectionToken<Auth>('Firebase Auth Provider');
