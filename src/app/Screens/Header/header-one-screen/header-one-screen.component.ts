import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-header-one-screen',
  templateUrl: './header-one-screen.component.html',
  styleUrls: ['./header-one-screen.component.scss'],
})
export class HeaderOneScreenComponent implements OnInit {
  htmlCode: string = `
  <mat-toolbar color="primary">
    <span>App Name here</span>
    <span class="example-spacer"></span>
    <section>
       <div class="example-button-row">
            <div class="example-flex-container">
                <button mat-icon-button
                    [matMenuTriggerFor]="notifications">
                    <mat-icon matBadge="5"
                        matBadgeColor="warn">notifications</mat-icon>
                </button>
                <mat-menu #notifications="matMenu">
                    <button mat-menu-item>
                        <mat-icon>chat</mat-icon>
                        <span>3 new messages</span>
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item>
                        <mat-icon>group</mat-icon>
                        <span>8 friend requests</span>
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item>
                        <mat-icon>thumb_up</mat-icon>
                        <span>102 friends like your post</span>
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item class="textCenter"
                        routerLink="/notification">
                        <span>See All Notifications</span>
                    </button>

                </mat-menu>
                <button mat-icon-button [matMenuTriggerFor]="chat">
                    <mat-icon matBadge="3"
                        matBadgeColor="warn">chat</mat-icon>
                </button>
                <mat-menu #chat="matMenu">
                    <mat-card class="example-card cursorPointer">
                        <mat-card-header>
                            <div mat-card-avatar
                                class="example-header-image"></div>
                            <mat-card-title>Mahipal
                                Choudhary</mat-card-title>
                            <mat-card-subtitle>
                                <div>Call me whenever you
                                    can..</div>
                                <div>
                                    <mat-icon class="timerIcon"
                                        color="primary">schedule</mat-icon>4
                                    hours ago
                                </div>
                            </mat-card-subtitle>
                        </mat-card-header>
                    </mat-card>
                    <mat-divider></mat-divider>
                    <mat-card class="example-card cursorPointer">
                        <mat-card-header>
                            <div mat-card-avatar
                                class="example-header-image1"></div>
                            <mat-card-title>Alex</mat-card-title>
                            <mat-card-subtitle>
                                <div>I got your message bro..</div>
                                <div>
                                    <mat-icon class="timerIcon"
                                        color="primary">schedule</mat-icon>5
                                    hours ago
                                </div>
                            </mat-card-subtitle>
                        </mat-card-header>
                    </mat-card>
                    <mat-divider></mat-divider>
                    <button mat-menu-item class="textCenter"
                        routerLink="/inbox">
                        <span>See All Messages</span>
                    </button>
                </mat-menu>

            </div>
        </div>
    </section>             
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
  tsCode: string = 'No need to make any changes in ts file';
  scssCode: string = `
.example-spacer {
   flex: 1 1 auto;
}
.example-button-row {
  display: table-cell;
  width: 170px;
}

.example-button-row .mat-button-base {
    margin: 8px 15px 8px 0;
}

.example-flex-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 40px;
}

.textCenter {
    text-align: center;
}

.cursorPointer {
    cursor: pointer;
}

.timerIcon {
    font-size: 15px;
    vertical-align: -webkit-baseline-middle;
    color: rgba(0, 0, 0, 0.54);
    width: 17px;
}

.example-card {
    max-width: auto;
}

.example-header-image {
    background-image: url("https://avatars.githubusercontent.com/u/48117150?v=4");
    background-size: cover;
}
.example-header-image1 {
    background-image: url("https://randomuser.me/api/portraits/thumb/lego/1.jpg");
    background-size: cover;
}
.example-header-image2 {
    background-image: url("https://randomuser.me/api/portraits/thumb/lego/2.jpg");
    background-size: cover;
}

.mat-card-header .mat-card-title {
    font-size: 15px;
}

.mat-card {
    padding: 10px 10px 0px 10px;
    border-radius: 0px;
}
.mat-card:hover {
    background: rgba(0, 0, 0, 0.04);
}

.mat-card:not([class*=mat-elevation-z]) {
    box-shadow: none;
}

.mat-card-actions,
.mat-card-subtitle,
.mat-card-content {
    display: block;
    margin-bottom: 0px;
}

.mat-card-header .mat-card-title {
    margin-bottom: 8px;
}
  `;

  constructor(private commonSvc:CommonService) {}

  ngOnInit(): void {}
  
  copyCode(data:string){
    this.commonSvc.copyToClipboard(data);
  }
}
