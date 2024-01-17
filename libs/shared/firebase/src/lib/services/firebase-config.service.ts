import { Injectable } from "@angular/core";
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';

@Injectable()
export class FirebaseConfigurationService {
  private app: FirebaseApp | undefined = undefined;

  public initalize = (): FirebaseApp | undefined => {
    if (this.app) {
      return this.app;
    }

    this.app = initializeApp(firebaseConfig);
    console.log('firebase app initailized');
    
    return this.app;
  }
}
