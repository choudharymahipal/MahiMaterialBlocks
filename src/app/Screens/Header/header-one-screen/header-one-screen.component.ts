import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-one-screen',
  templateUrl: './header-one-screen.component.html',
  styleUrls: ['./header-one-screen.component.scss'],
})
export class HeaderOneScreenComponent implements OnInit {
  htmlCode: string = `
  <mat-toolbar color="primary">
    <button mat-icon-button class="example-icon"
        aria-label="Example icon-button with menu icon">
          <mat-icon>menu</mat-icon>
    </button>
    <span>App Name here</span>
    <span class="example-spacer"></span>
    <span>Welcome User</span>
    <button mat-icon-button [matMenuTriggerFor]="menu" class="example-icon"
        aria-label="Example icon-button with menu icon">
          <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
     <button mat-menu-item>
      <mat-icon>person</mat-icon>
      <span>Profile</span>
     </button>
     <button mat-menu-item>
      <mat-icon>settings</mat-icon>
      <span>Settings</span>
     </button>
     <button mat-menu-item>
      <mat-icon>logout</mat-icon>
      <span>Logout</span>
     </button>
    </mat-menu>
  </mat-toolbar>
  `;
  tsCode: string = '';
  scssCode: string = `
  .example-spacer {
    flex: 1 1 auto;
  }
  `;

  constructor() {}

  ngOnInit(): void {}
}
