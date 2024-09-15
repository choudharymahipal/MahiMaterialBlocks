"use strict";(self.webpackChunkMahiMaterialBlocks=self.webpackChunkMahiMaterialBlocks||[]).push([[32],{9032:(F,p,r)=>{r.r(p),r.d(p,{LoginModule:()=>P});var d=r(9808),m=r(1083),o=r(5e3),l=r(3075),c=r(5630),g=r(7423),s=r(8099),M=r(4834),i=r(3251),f=r(9224),T=r(7322),b=r(7531);function Z(t,e){1&t&&(o.TgZ(0,"mat-icon",15),o._uU(1,"visibility"),o.qZA(),o._uU(2," Preview "))}function C(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," The username and password were not recognized "),o.qZA())}function _(t,e){1&t&&(o.TgZ(0,"mat-icon",15),o._uU(1,"code"),o.qZA(),o._uU(2," View Code "))}function v(t,e){1&t&&o._uU(0," login.component.html ")}function U(t,e){1&t&&o._uU(0," login.component.ts ")}function S(t,e){1&t&&o._uU(0," login.component.scss ")}function h(t,e){1&t&&o._uU(0," app.module.ts ")}function A(t,e){1&t&&o._uU(0," material.module.ts ")}let L=(()=>{class t{constructor(a,n){this.fb=a,this.commonSvc=n,this.loginValid=!0,this.htmlCode='\n  <div class="container">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n          <h2>Login</h2>\n          <br>\n          <mat-error *ngIf="!loginValid">\n            The username and password were not recognized\n          </mat-error>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder="Username" formControlName="username" required>\n            <mat-error>\n              Please provide a valid username\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type="password" placeholder="Password" formControlName="password" required>\n            <mat-error>\n              Please provide a valid password\n            </mat-error>\n          </mat-form-field>\n          <br><br>\n          <div>\n            <button type="submit" mat-raised-button color="primary">Login</button>&nbsp;\n            <button type="reset" mat-raised-button color="warn">Reset</button>\n          </div>\n          <br><br>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>',this.tsCode="\n  import { Component, OnInit } from '@angular/core';\n  import { FormBuilder, FormGroup } from '@angular/forms';\n\n  @Component({\n    selector: 'mahi-login',\n    templateUrl: './login.component.html',\n    styleUrls: ['./login.component.scss']\n  })\n  export class LoginComponent implements OnInit {\n    public loginValid = true;\n    loginForm!: FormGroup;\n\n    constructor(\n      private fb: FormBuilder\n    ) {\n      this.loginForm = this.fb.group({\n        username: [null],\n        password: [null]\n      });\n    }\n\n    public onSubmit(): void {\n      //Authentication process...\n    }\n\n  }",this.scssCode="\n  mat-card {\n      max-width: 400px;\n      margin: 2em auto;\n      text-align: center;\n      border: 1px solid #3f51b5;\n  }\n\n  mat-form-field {\n      display: block;\n  }\n\n  .container {\n      margin-top: 10%;\n  }",this.appModuleCode="\n  import { NgModule } from '@angular/core';\n  import { BrowserModule } from '@angular/platform-browser';\n  import { AppRoutingModule } from './app-routing.module';\n  import { AppComponent } from './app.component';\n  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n  import { ReactiveFormsModule } from '@angular/forms';\n  import { MaterialModule } from './material.module';\n\n  @NgModule({\n    declarations: [\n      AppComponent,\n      MenusComponent\n    ],\n    imports: [\n      BrowserModule,\n      AppRoutingModule,\n      BrowserAnimationsModule,\n      ReactiveFormsModule,\n      MaterialModule\n    ],\n    providers: [],\n    bootstrap: [AppComponent]\n  })\n  export class AppModule { }\n  ",this.materialModuleCode="\n  import { NgModule } from '@angular/core';\n  import { CommonModule } from '@angular/common';\n\n  //Angular Materials modules\n  import { A11yModule } from '@angular/cdk/a11y';\n  import { CdkAccordionModule } from '@angular/cdk/accordion';\n  import { ClipboardModule } from '@angular/cdk/clipboard';\n  import { DragDropModule } from '@angular/cdk/drag-drop';\n  import { PortalModule } from '@angular/cdk/portal';\n  import { ScrollingModule } from '@angular/cdk/scrolling';\n  import { CdkStepperModule } from '@angular/cdk/stepper';\n  import { CdkTableModule } from '@angular/cdk/table';\n  import { CdkTreeModule } from '@angular/cdk/tree';\n  import { MatAutocompleteModule } from '@angular/material/autocomplete';\n  import { MatBadgeModule } from '@angular/material/badge';\n  import { MatBottomSheetModule } from '@angular/material/bottom-sheet';\n  import { MatButtonModule } from '@angular/material/button';\n  import { MatButtonToggleModule } from '@angular/material/button-toggle';\n  import { MatCardModule } from '@angular/material/card';\n  import { MatCheckboxModule } from '@angular/material/checkbox';\n  import { MatChipsModule } from '@angular/material/chips';\n  import { MatStepperModule } from '@angular/material/stepper';\n  import { MatDatepickerModule } from '@angular/material/datepicker';\n  import { MatDialogModule } from '@angular/material/dialog';\n  import { MatDividerModule } from '@angular/material/divider';\n  import { MatExpansionModule } from '@angular/material/expansion';\n  import { MatGridListModule } from '@angular/material/grid-list';\n  import { MatIconModule } from '@angular/material/icon';\n  import { MatInputModule } from '@angular/material/input';\n  import { MatListModule } from '@angular/material/list';\n  import { MatMenuModule } from '@angular/material/menu';\n  import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';\n  import { MatPaginatorModule } from '@angular/material/paginator';\n  import { MatProgressBarModule } from '@angular/material/progress-bar';\n  import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';\n  import { MatRadioModule } from '@angular/material/radio';\n  import { MatSelectModule } from '@angular/material/select';\n  import { MatSidenavModule } from '@angular/material/sidenav';\n  import { MatSliderModule } from '@angular/material/slider';\n  import { MatSlideToggleModule } from '@angular/material/slide-toggle';\n  import { MatSnackBarModule } from '@angular/material/snack-bar';\n  import { MatSortModule } from '@angular/material/sort';\n  import { MatTableModule } from '@angular/material/table';\n  import { MatTabsModule } from '@angular/material/tabs';\n  import { MatToolbarModule } from '@angular/material/toolbar';\n  import { MatTooltipModule } from '@angular/material/tooltip';\n  import { MatTreeModule } from '@angular/material/tree';\n  import { OverlayModule } from '@angular/cdk/overlay';\n\n  @NgModule({\n    declarations: [],\n    exports: [\n      CommonModule,\n      //Angular Material modules\n      A11yModule,\n      CdkAccordionModule,\n      ClipboardModule,\n      CdkStepperModule,\n      CdkTableModule,\n      CdkTreeModule,\n      DragDropModule,\n      MatAutocompleteModule,\n      MatBadgeModule,\n      MatBottomSheetModule,\n      MatButtonModule,\n      MatButtonToggleModule,\n      MatCardModule,\n      MatCheckboxModule,\n      MatChipsModule,\n      MatStepperModule,\n      MatDatepickerModule,\n      MatDialogModule,\n      MatDividerModule,\n      MatExpansionModule,\n      MatGridListModule,\n      MatIconModule,\n      MatInputModule,\n      MatListModule,\n      MatMenuModule,\n      MatNativeDateModule,\n      MatPaginatorModule,\n      MatProgressBarModule,\n      MatProgressSpinnerModule,\n      MatRadioModule,\n      MatRippleModule,\n      MatSelectModule,\n      MatSidenavModule,\n      MatSliderModule,\n      MatSlideToggleModule,\n      MatSnackBarModule,\n      MatSortModule,\n      MatTableModule,\n      MatTabsModule,\n      MatToolbarModule,\n      MatTooltipModule,\n      MatTreeModule,\n      OverlayModule,\n      PortalModule,\n      ScrollingModule\n    ],\n  })\n  export class MaterialModule {}\n  ",this.loginForm=this.fb.group({username:[null],password:[null]})}ngOnInit(){}onSubmit(){}copyCode(a){this.commonSvc.copyToClipboard(a)}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(l.qu),o.Y36(c.v))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login-one-screen"]],decls:100,vars:7,consts:[["mat-button","","color","primary","routerLink","/"],["mat-button",""],["mat-button","","color","primary","routerLink","/login/login_one"],[1,"marginBottom"],["mat-tab-label",""],[1,"mahiContainer"],[1,"container"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["matInput","","placeholder","Username","formControlName","username","required",""],["matInput","","type","password","placeholder","Password","formControlName","password","required",""],["type","submit","mat-raised-button","","color","primary"],["type","reset","mat-raised-button","","color","warn"],["mat-align-tabs","center"],["mat-flat-button","","color","primary",1,"copyCodeBtn",3,"click"],[1,"example-tab-icon"]],template:function(a,n){1&a&&(o.TgZ(0,"div")(1,"button",0)(2,"mat-icon"),o._uU(3,"home"),o.qZA()(),o.TgZ(4,"span"),o._uU(5,"/"),o.qZA(),o.TgZ(6,"button",1)(7,"mat-icon"),o._uU(8,"folder"),o.qZA(),o.TgZ(9,"span"),o._uU(10," Login"),o.qZA()(),o.TgZ(11,"span"),o._uU(12,"/"),o.qZA(),o.TgZ(13,"button",2)(14,"mat-icon"),o._uU(15,"folder"),o.qZA(),o.TgZ(16,"span"),o._uU(17," Login Example 01"),o.qZA()()(),o._UZ(18,"mat-divider",3),o.TgZ(19,"mat-tab-group")(20,"mat-tab"),o.YNc(21,Z,3,0,"ng-template",4),o.TgZ(22,"div",5)(23,"div",6)(24,"mat-card")(25,"mat-card-content")(26,"form",7),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(27,"h2"),o._uU(28,"Login"),o.qZA(),o._UZ(29,"br"),o.YNc(30,C,2,0,"mat-error",8),o._UZ(31,"br"),o.TgZ(32,"mat-form-field"),o._UZ(33,"input",9),o.TgZ(34,"mat-error"),o._uU(35," Please provide a valid username "),o.qZA()(),o.TgZ(36,"mat-form-field"),o._UZ(37,"input",10),o.TgZ(38,"mat-error"),o._uU(39," Please provide a valid password "),o.qZA()(),o._UZ(40,"br")(41,"br"),o.TgZ(42,"div")(43,"button",11),o._uU(44,"Login"),o.qZA(),o._uU(45,"\xa0 "),o.TgZ(46,"button",12),o._uU(47,"Reset"),o.qZA()(),o._UZ(48,"br")(49,"br"),o.qZA()()()()()(),o.TgZ(50,"mat-tab"),o.YNc(51,_,3,0,"ng-template",4),o.TgZ(52,"div",5)(53,"mat-tab-group",13)(54,"mat-tab"),o.YNc(55,v,1,0,"ng-template",4),o.TgZ(56,"div",5)(57,"button",14),o.NdJ("click",function(){return n.copyCode(n.htmlCode)}),o.TgZ(58,"mat-icon"),o._uU(59,"content_copy"),o.qZA(),o._uU(60," Copy code"),o.qZA(),o.TgZ(61,"pre"),o._uU(62),o._uU(63,"\n            "),o.qZA()()(),o.TgZ(64,"mat-tab"),o.YNc(65,U,1,0,"ng-template",4),o.TgZ(66,"div",5)(67,"button",14),o.NdJ("click",function(){return n.copyCode(n.tsCode)}),o.TgZ(68,"mat-icon"),o._uU(69,"content_copy"),o.qZA(),o._uU(70," Copy code"),o.qZA(),o.TgZ(71,"pre"),o._uU(72),o.qZA()()(),o.TgZ(73,"mat-tab"),o.YNc(74,S,1,0,"ng-template",4),o.TgZ(75,"div",5)(76,"button",14),o.NdJ("click",function(){return n.copyCode(n.scssCode)}),o.TgZ(77,"mat-icon"),o._uU(78,"content_copy"),o.qZA(),o._uU(79," Copy code"),o.qZA(),o.TgZ(80,"pre"),o._uU(81),o.qZA()()(),o.TgZ(82,"mat-tab"),o.YNc(83,h,1,0,"ng-template",4),o.TgZ(84,"div",5)(85,"button",14),o.NdJ("click",function(){return n.copyCode(n.appModuleCode)}),o.TgZ(86,"mat-icon"),o._uU(87,"content_copy"),o.qZA(),o._uU(88," Copy code"),o.qZA(),o.TgZ(89,"pre"),o._uU(90),o.qZA()()(),o.TgZ(91,"mat-tab"),o.YNc(92,A,1,0,"ng-template",4),o.TgZ(93,"div",5)(94,"button",14),o.NdJ("click",function(){return n.copyCode(n.materialModuleCode)}),o.TgZ(95,"mat-icon"),o._uU(96,"content_copy"),o.qZA(),o._uU(97," Copy code"),o.qZA(),o.TgZ(98,"pre"),o._uU(99),o.qZA()()()()()()()),2&a&&(o.xp6(26),o.Q6J("formGroup",n.loginForm),o.xp6(4),o.Q6J("ngIf",!n.loginValid),o.xp6(32),o.hij("              ",n.htmlCode,"\n              "),o.xp6(10),o.Oqu(n.tsCode),o.xp6(9),o.Oqu(n.scssCode),o.xp6(9),o.Oqu(n.appModuleCode),o.xp6(9),o.Oqu(n.materialModuleCode))},directives:[g.lW,m.rH,s.Hw,M.d,i.SP,i.uX,i.uD,f.a8,f.dn,l._Y,l.JL,l.sg,d.O5,T.TO,T.KE,b.Nt,l.Fj,l.JJ,l.u,l.Q7],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center;border:1px solid #3f51b5}mat-form-field[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-top:10%}"]}),t})();function y(t,e){1&t&&(o.TgZ(0,"mat-icon",7),o._uU(1,"visibility"),o.qZA(),o._uU(2," Preview "))}function q(t,e){1&t&&(o.TgZ(0,"mat-icon",7),o._uU(1,"code"),o.qZA(),o._uU(2," View Code "))}function k(t,e){1&t&&o._uU(0," login.component.html ")}function w(t,e){1&t&&o._uU(0," login.component.ts ")}function O(t,e){1&t&&o._uU(0," login.component.scss ")}const N=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:2,vars:0,consts:[[1,"mahiContainer"]],template:function(a,n){1&a&&(o.TgZ(0,"div",0),o._UZ(1,"router-outlet"),o.qZA())},directives:[m.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:""},{path:"login_one",component:L},{path:"login_two",component:(()=>{class t{constructor(a){this.commonSvc=a,this.htmlCode="",this.tsCode="",this.scssCode=""}ngOnInit(){}copyCode(a){this.commonSvc.copyToClipboard(a)}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(c.v))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login-two-screen"]],decls:40,vars:0,consts:[["mat-button","","color","primary","routerLink","/"],["mat-button",""],["mat-button","","color","primary","routerLink","/login/login_two"],[1,"marginBottom"],["mat-tab-label",""],[1,"mahiContainer"],["mat-align-tabs","center"],[1,"example-tab-icon"]],template:function(a,n){1&a&&(o.TgZ(0,"div")(1,"button",0)(2,"mat-icon"),o._uU(3,"home"),o.qZA()(),o.TgZ(4,"span"),o._uU(5,"/"),o.qZA(),o.TgZ(6,"button",1)(7,"mat-icon"),o._uU(8,"folder"),o.qZA(),o.TgZ(9,"span"),o._uU(10," Login"),o.qZA()(),o.TgZ(11,"span"),o._uU(12,"/"),o.qZA(),o.TgZ(13,"button",2)(14,"mat-icon"),o._uU(15,"folder"),o.qZA(),o.TgZ(16,"span"),o._uU(17," Login Example 02"),o.qZA()()(),o._UZ(18,"mat-divider",3),o.TgZ(19,"mat-tab-group")(20,"mat-tab"),o.YNc(21,y,3,0,"ng-template",4),o.TgZ(22,"div",5),o._uU(23," Login Content 1 "),o.qZA()(),o.TgZ(24,"mat-tab"),o.YNc(25,q,3,0,"ng-template",4),o.TgZ(26,"div",5)(27,"mat-tab-group",6)(28,"mat-tab"),o.YNc(29,k,1,0,"ng-template",4),o.TgZ(30,"div",5),o._uU(31," HTML code goes here "),o.qZA()(),o.TgZ(32,"mat-tab"),o.YNc(33,w,1,0,"ng-template",4),o.TgZ(34,"div",5),o._uU(35," TS code goes here "),o.qZA()(),o.TgZ(36,"mat-tab"),o.YNc(37,O,1,0,"ng-template",4),o.TgZ(38,"div",5),o._uU(39," SCSS code goes here "),o.qZA()()()()()())},directives:[g.lW,m.rH,s.Hw,M.d,i.SP,i.uX,i.uD],styles:[""]}),t})()}]}];let B=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[m.Bz.forChild(N)],m.Bz]}),t})();var x=r(429);let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.ez,l.UX,B,x.q]]}),t})()}}]);