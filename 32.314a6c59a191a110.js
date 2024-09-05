"use strict";(self.webpackChunkMahiMaterialBlocks=self.webpackChunkMahiMaterialBlocks||[]).push([[32],{9032:(N,c,r)=>{r.r(c),r.d(c,{LoginModule:()=>M});var p=r(9808),l=r(1083),t=r(5e3),a=r(3075),m=r(3251),s=r(8099),u=r(9224),g=r(7322),d=r(7531),f=r(7423);function T(e,n){1&e&&(t.TgZ(0,"mat-icon",10),t._uU(1,"visibility"),t.qZA(),t._uU(2," Preview "))}function b(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," The username and password were not recognized "),t.qZA())}function C(e,n){1&e&&(t.TgZ(0,"mat-icon",10),t._uU(1,"code"),t.qZA(),t._uU(2," View Code "))}function Z(e,n){1&e&&t._uU(0," HTML ")}function v(e,n){1&e&&t._uU(0," TS ")}function h(e,n){1&e&&t._uU(0," SCSS ")}let S=(()=>{class e{constructor(o){this.fb=o,this.loginValid=!0,this.htmlCode='\n  <div class="container">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n          <h2>Login</h2>\n          <br>\n          <mat-error *ngIf="!loginValid">\n            The username and password were not recognized\n          </mat-error>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder="Username" formControlName="username" required>\n            <mat-error>\n              Please provide a valid username\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type="password" placeholder="Password" formControlName="password" required>\n            <mat-error>\n              Please provide a valid password\n            </mat-error>\n          </mat-form-field>\n          <br><br>\n          <div>\n            <button type="submit" mat-raised-button color="primary">Login</button>&nbsp;\n            <button type="reset" mat-raised-button color="warn">Reset</button>\n          </div>\n          <br><br>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>',this.tsCode="\n  import { Component, OnInit } from '@angular/core';\n  import { FormBuilder, FormGroup } from '@angular/forms';\n\n  @Component({\n    selector: 'mahi-login',\n    templateUrl: './login.component.html',\n    styleUrls: ['./login.component.scss']\n  })\n  export class LoginComponent implements OnInit {\n    public loginValid = true;\n    loginForm!: FormGroup;\n\n    constructor(\n      private fb: FormBuilder\n    ) {\n      this.loginForm = this.fb.group({\n        username: [null],\n        password: [null]\n      });\n    }\n\n    public onSubmit(): void {\n      //Authentication process...\n    }\n\n  }",this.scssCode="\n  mat-card {\n      max-width: 400px;\n      margin: 2em auto;\n      text-align: center;\n      border: 1px solid #3f51b5;\n  }\n\n  mat-form-field {\n      display: block;\n  }\n\n  .container {\n      margin-top: 10%;\n  }",this.loginForm=this.fb.group({username:[null],password:[null]})}ngOnInit(){}onSubmit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-one-screen"]],decls:51,vars:5,consts:[["mat-tab-label",""],[1,"mahiContainer"],[1,"container"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["matInput","","placeholder","Username","formControlName","username","required",""],["matInput","","type","password","placeholder","Password","formControlName","password","required",""],["type","submit","mat-raised-button","","color","primary"],["type","reset","mat-raised-button","","color","warn"],["mat-align-tabs","center"],[1,"example-tab-icon"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-tab-group")(1,"mat-tab"),t.YNc(2,T,3,0,"ng-template",0),t.TgZ(3,"div",1)(4,"div",2)(5,"mat-card")(6,"mat-card-content")(7,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(8,"h2"),t._uU(9,"Login"),t.qZA(),t._UZ(10,"br"),t.YNc(11,b,2,0,"mat-error",4),t._UZ(12,"br"),t.TgZ(13,"mat-form-field"),t._UZ(14,"input",5),t.TgZ(15,"mat-error"),t._uU(16," Please provide a valid username "),t.qZA()(),t.TgZ(17,"mat-form-field"),t._UZ(18,"input",6),t.TgZ(19,"mat-error"),t._uU(20," Please provide a valid password "),t.qZA()(),t._UZ(21,"br")(22,"br"),t.TgZ(23,"div")(24,"button",7),t._uU(25,"Login"),t.qZA(),t._uU(26,"\xa0 "),t.TgZ(27,"button",8),t._uU(28,"Reset"),t.qZA()(),t._UZ(29,"br")(30,"br"),t.qZA()()()()()(),t.TgZ(31,"mat-tab"),t.YNc(32,C,3,0,"ng-template",0),t.TgZ(33,"div",1)(34,"mat-tab-group",9)(35,"mat-tab"),t.YNc(36,Z,1,0,"ng-template",0),t.TgZ(37,"div",1)(38,"pre"),t._uU(39),t._uU(40,"\n            "),t.qZA()()(),t.TgZ(41,"mat-tab"),t.YNc(42,v,1,0,"ng-template",0),t.TgZ(43,"div",1)(44,"pre"),t._uU(45),t.qZA()()(),t.TgZ(46,"mat-tab"),t.YNc(47,h,1,0,"ng-template",0),t.TgZ(48,"div",1)(49,"pre"),t._uU(50),t.qZA()()()()()()()),2&o&&(t.xp6(7),t.Q6J("formGroup",i.loginForm),t.xp6(4),t.Q6J("ngIf",!i.loginValid),t.xp6(28),t.hij("              ",i.htmlCode,"\n              "),t.xp6(6),t.Oqu(i.tsCode),t.xp6(5),t.Oqu(i.scssCode))},directives:[m.SP,m.uX,m.uD,s.Hw,u.a8,u.dn,a._Y,a.JL,a.sg,p.O5,g.TO,g.KE,d.Nt,a.Fj,a.JJ,a.u,a.Q7,f.lW],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center;border:1px solid #3f51b5}mat-form-field[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-top:10%}"]}),e})();function L(e,n){1&e&&(t.TgZ(0,"mat-icon",3),t._uU(1,"visibility"),t.qZA(),t._uU(2," Preview "))}function _(e,n){1&e&&(t.TgZ(0,"mat-icon",3),t._uU(1,"code"),t.qZA(),t._uU(2," View Code "))}function U(e,n){1&e&&t._uU(0," HTML ")}function w(e,n){1&e&&t._uU(0," TS ")}function y(e,n){1&e&&t._uU(0," SCSS ")}const x=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:2,vars:0,consts:[[1,"mahiContainer"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},directives:[l.lC],styles:[""]}),e})(),children:[{path:"",redirectTo:""},{path:"login_one",component:S},{path:"login_two",component:(()=>{class e{constructor(){this.htmlCode="",this.tsCode="",this.scssCode=""}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-two-screen"]],decls:21,vars:0,consts:[["mat-tab-label",""],[1,"mahiContainer"],["mat-align-tabs","center"],[1,"example-tab-icon"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-tab-group")(1,"mat-tab"),t.YNc(2,L,3,0,"ng-template",0),t.TgZ(3,"div",1),t._uU(4," Login Content 1 "),t.qZA()(),t.TgZ(5,"mat-tab"),t.YNc(6,_,3,0,"ng-template",0),t.TgZ(7,"div",1)(8,"mat-tab-group",2)(9,"mat-tab"),t.YNc(10,U,1,0,"ng-template",0),t.TgZ(11,"div",1),t._uU(12," HTML code goes here "),t.qZA()(),t.TgZ(13,"mat-tab"),t.YNc(14,w,1,0,"ng-template",0),t.TgZ(15,"div",1),t._uU(16," TS code goes here "),t.qZA()(),t.TgZ(17,"mat-tab"),t.YNc(18,y,1,0,"ng-template",0),t.TgZ(19,"div",1),t._uU(20," SCSS code goes here "),t.qZA()()()()()())},directives:[m.SP,m.uX,m.uD,s.Hw],styles:[""]}),e})()}]}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),e})();var O=r(1106);let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,a.UX,A,O.q]]}),e})()}}]);