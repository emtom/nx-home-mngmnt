import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { UiModule } from '@nx-home-mngmnt/ui';
import { FirebaseConfigModule, FirebaseConfigurationService } from '@nx-home-mngmnt/firebase-config';
import { AuthModule } from '@nx-home-mngmnt/auth';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes), 
    UiModule, 
    FirebaseConfigModule, 
    AuthModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private firebaseConfigService = inject(FirebaseConfigurationService);

  constructor() {
    this.firebaseConfigService.initalize();
  }
}
