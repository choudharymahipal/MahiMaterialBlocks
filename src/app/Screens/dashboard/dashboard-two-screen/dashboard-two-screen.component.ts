import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-dashboard-two-screen',
  templateUrl: './dashboard-two-screen.component.html',
  styleUrls: ['./dashboard-two-screen.component.scss']
})
export class DashboardTwoScreenComponent implements OnInit {
  htmlCode: string = `
<mat-grid-list cols="4" rowHeight="200px">
    <!-- Card1 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 1
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card2 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 2
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card3 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 3
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card4 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 4
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

</mat-grid-list>

<mat-grid-list cols="2" rowHeight="350px">
    <!-- Card1 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 5
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card2 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 6
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card3 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 7
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>

    <!-- Card4 -->
    <mat-grid-tile>
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Card 8
                    <button mat-icon-button class="more-button"
                        [matMenuTriggerFor]="menu"
                        aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu"
                        xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>Card Content Here</div>
            </mat-card-content>
        </mat-card>
    </mat-grid-tile>
</mat-grid-list>
  `;
  tsCode: string = 'No need to make any changes in ts file';
  scssCode: string = `
.dashboard-card {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
}

.more-button {
  position: absolute;
  top: 5px;
  right: 10px;
}

.dashboard-card-content {
  text-align: center;
}
  `;

  constructor(private commonSvc:CommonService) { }

  ngOnInit(): void {
  }

  copyCode(data:string){
    this.commonSvc.copyToClipboard(data);
  }

}
