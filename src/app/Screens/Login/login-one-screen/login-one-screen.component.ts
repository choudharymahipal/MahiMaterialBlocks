import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-login-one-screen',
  templateUrl: './login-one-screen.component.html',
  styleUrls: ['./login-one-screen.component.scss']
})
export class LoginOneScreenComponent implements OnInit {
  public loginValid = true;
  loginForm!: FormGroup;
  htmlCode: string = `
  <div class="container">
    <mat-card>
      <mat-card-content>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <h2>Login</h2>
          <br>
          <mat-error *ngIf="!loginValid">
            The username and password were not recognized
          </mat-error>
          <br>
          <mat-form-field>
            <input matInput placeholder="Username" formControlName="username" required>
            <mat-error>
              Please provide a valid username
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <input matInput type="password" placeholder="Password" formControlName="password" required>
            <mat-error>
              Please provide a valid password
            </mat-error>
          </mat-form-field>
          <br><br>
          <div>
            <button type="submit" mat-raised-button color="primary">Login</button>&nbsp;
            <button type="reset" mat-raised-button color="warn">Reset</button>
          </div>
          <br><br>
        </form>
      </mat-card-content>
    </mat-card>
  </div>`;

  tsCode: string = `
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';

  @Component({
    selector: 'mahi-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {
    public loginValid = true;
    loginForm!: FormGroup;

    constructor(
      private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        username: [null],
        password: [null]
      });
    }

    public onSubmit(): void {
      //Authentication process...
    }

  }`;

  scssCode: string = `
  mat-card {
      max-width: 400px;
      margin: 2em auto;
      text-align: center;
      border: 1px solid #3f51b5;
  }

  mat-form-field {
      display: block;
  }

  .container {
      margin-top: 10%;
  }`;

  appModuleCode: string =`
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule } from './material.module';

  @NgModule({
    declarations: [
      AppComponent,
      MenusComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  materialModuleCode: string =`
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  //Angular Materials modules
  import { A11yModule } from '@angular/cdk/a11y';
  import { CdkAccordionModule } from '@angular/cdk/accordion';
  import { ClipboardModule } from '@angular/cdk/clipboard';
  import { DragDropModule } from '@angular/cdk/drag-drop';
  import { PortalModule } from '@angular/cdk/portal';
  import { ScrollingModule } from '@angular/cdk/scrolling';
  import { CdkStepperModule } from '@angular/cdk/stepper';
  import { CdkTableModule } from '@angular/cdk/table';
  import { CdkTreeModule } from '@angular/cdk/tree';
  import { MatAutocompleteModule } from '@angular/material/autocomplete';
  import { MatBadgeModule } from '@angular/material/badge';
  import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
  import { MatButtonModule } from '@angular/material/button';
  import { MatButtonToggleModule } from '@angular/material/button-toggle';
  import { MatCardModule } from '@angular/material/card';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { MatChipsModule } from '@angular/material/chips';
  import { MatStepperModule } from '@angular/material/stepper';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatExpansionModule } from '@angular/material/expansion';
  import { MatGridListModule } from '@angular/material/grid-list';
  import { MatIconModule } from '@angular/material/icon';
  import { MatInputModule } from '@angular/material/input';
  import { MatListModule } from '@angular/material/list';
  import { MatMenuModule } from '@angular/material/menu';
  import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatProgressBarModule } from '@angular/material/progress-bar';
  import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
  import { MatRadioModule } from '@angular/material/radio';
  import { MatSelectModule } from '@angular/material/select';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { MatSliderModule } from '@angular/material/slider';
  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
  import { MatSortModule } from '@angular/material/sort';
  import { MatTableModule } from '@angular/material/table';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import { MatTreeModule } from '@angular/material/tree';
  import { OverlayModule } from '@angular/cdk/overlay';

  @NgModule({
    declarations: [],
    exports: [
      CommonModule,
      //Angular Material modules
      A11yModule,
      CdkAccordionModule,
      ClipboardModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      OverlayModule,
      PortalModule,
      ScrollingModule
    ],
  })
  export class MaterialModule {}
  `;

  constructor(
    private fb: FormBuilder,
    private commonSvc:CommonService
  ) {
    this.loginForm = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  public ngOnInit(): void {

  }

  onSubmit() {
    //Authentication process
  }


  copyCode(data:string){
    this.commonSvc.copyToClipboard(data);
  }

}
