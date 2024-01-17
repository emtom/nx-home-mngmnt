import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseConfigurationService } from './services/firebase-config.service';


@NgModule({
  imports: [CommonModule],
  providers: [FirebaseConfigurationService]
})
export class FirebaseConfigModule {}


