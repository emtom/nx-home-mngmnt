import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiModule } from '@nx-home-mngmnt/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule],
  selector: 'nx-home-mngmnt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home-fuels';
}
