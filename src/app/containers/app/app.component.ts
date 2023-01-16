import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <!-- <app-header -->
        <!-- [user]="user$ | async"
        (logout)="onLogout()">
      </app-header>
      <app-nav
        *ngIf="(user$ | async)?.authenticated">
      </app-nav> -->
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
