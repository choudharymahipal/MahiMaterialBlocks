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
