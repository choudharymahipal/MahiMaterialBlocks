"use strict";(self.webpackChunkMahiMaterialBlocks=self.webpackChunkMahiMaterialBlocks||[]).push([[531],{6531:(F,d,i)=>{i.r(d),i.d(d,{IconsModule:()=>z});var f=i(9808),l=i(1083),t=i(5e3);let h=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-icons"]],decls:2,vars:0,consts:[[1,"mahiContainer"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},directives:[l.lC],styles:[""]}),o})();var p=i(6087),m=i(4847),c=i(8279),g=i(5630),C=i(7423),Z=i(8099),T=i(4834),u=i(7322),M=i(7531);function y(o,e){1&o&&(t.TgZ(0,"th",24),t._uU(1," ID "),t.qZA())}function I(o,e){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.id," ")}}function v(o,e){1&o&&(t.TgZ(0,"th",24),t._uU(1," Name "),t.qZA())}function x(o,e){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function _(o,e){1&o&&(t.TgZ(0,"th",24),t._uU(1," Icon "),t.qZA())}function A(o,e){if(1&o&&(t.TgZ(0,"td",25)(1,"mat-icon"),t._uU(2),t.qZA()()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.icon)}}function U(o,e){1&o&&(t.TgZ(0,"th",24),t._uU(1," HTML Code "),t.qZA())}function w(o,e){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const n=e.$implicit,a=t.oxw();t.xp6(1),t.lnq("",a.startTag," ",n.icon," ",a.endTag,"")}}function N(o,e){1&o&&(t.TgZ(0,"th",24),t._uU(1," Action "),t.qZA())}function D(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"td",25)(1,"button",26),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().copyToClipboard(s.icon)}),t.TgZ(2,"mat-icon"),t._uU(3,"content_copy"),t.qZA()()()}}function S(o,e){1&o&&t._UZ(0,"tr",27)}function Y(o,e){1&o&&t._UZ(0,"tr",28)}function B(o,e){if(1&o&&(t.TgZ(0,"tr",29)(1,"td",30),t._uU(2),t.qZA()()),2&o){t.oxw();const n=t.MAs(25);t.xp6(2),t.hij('No icon matching the filter "',n.value,'"')}}const q=function(){return[5,10,25,100]},b=[{id:"1",name:"Home",icon:"home"},{id:"2",name:"Search",icon:"search"},{id:"3",name:"Option",icon:"more_vert"},{id:"4",name:"Menu",icon:"menu"},{id:"5",name:"Close",icon:"close"},{id:"6",name:"Add",icon:"add"},{id:"7",name:"Delete",icon:"delete"},{id:"8",name:"Login",icon:"login"},{id:"9",name:"Logout",icon:"logout"},{id:"10",name:"Add Circle",icon:"add_circle"},{id:"11",name:"Cancel",icon:"cancel"},{id:"12",name:"Settings",icon:"settings"},{id:"13",name:"Profile",icon:"person"},{id:"14",name:"Notifications",icon:"notifications"},{id:"15",name:"Warning",icon:"warning"}],Q=[{path:"",component:h,children:[{path:"",redirectTo:""},{path:"materialicons",component:(()=>{class o{constructor(n){this.commonSvc=n,this.startTag="<mat-icon>",this.endTag="</mat-icon>",this.displayedColumns=["id","name","icon","code","action"],this.dataSource=new c.by(b)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}copyToClipboard(n){let a=document.createElement("textarea");a.style.position="fixed",a.style.left="0",a.style.top="0",a.style.opacity="0",a.value="<mat-icon>"+n+"</mat-icon>",document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.commonSvc.openSnackBar("Copied to clipboard")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-material-icons"]],viewQuery:function(n,a){if(1&n&&(t.Gf(p.NW,5),t.Gf(m.YE,5)),2&n){let r;t.iGM(r=t.CRH())&&(a.paginator=r.first),t.iGM(r=t.CRH())&&(a.sort=r.first)}},decls:55,vars:5,consts:[["mat-button","","color","primary","routerLink","/"],["mat-button",""],["mat-button","","color","primary","routerLink","/icons/materialicons"],[1,"marginBottom"],[1,"mahiContainer"],[1,"container"],[1,"filterDiv"],["matInput","","placeholder","Ex. home",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","icon"],["matColumnDef","code"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of icons",3,"pageSizeOptions"],[2,"text-align","center"],["href","https://fonts.google.com/icons"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","title","Copy to clipboard",1,"example-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,a){1&n&&(t.TgZ(0,"div")(1,"button",0)(2,"mat-icon"),t._uU(3,"home"),t.qZA()(),t.TgZ(4,"span"),t._uU(5,"/"),t.qZA(),t.TgZ(6,"button",1)(7,"mat-icon"),t._uU(8,"folder"),t.qZA(),t.TgZ(9,"span"),t._uU(10," Icons"),t.qZA()(),t.TgZ(11,"span"),t._uU(12,"/"),t.qZA(),t.TgZ(13,"button",2)(14,"mat-icon"),t._uU(15,"folder"),t.qZA(),t.TgZ(16,"span"),t._uU(17," Material Icons"),t.qZA()()(),t._UZ(18,"mat-divider",3),t.TgZ(19,"div",4)(20,"div",5)(21,"mat-form-field",6)(22,"mat-label"),t._uU(23,"Filter"),t.qZA(),t.TgZ(24,"input",7,8),t.NdJ("keyup",function(s){return a.applyFilter(s)}),t.qZA()(),t.TgZ(26,"div",9)(27,"table",10),t.ynx(28,11),t.YNc(29,y,2,0,"th",12),t.YNc(30,I,2,1,"td",13),t.BQk(),t.ynx(31,14),t.YNc(32,v,2,0,"th",12),t.YNc(33,x,2,1,"td",13),t.BQk(),t.ynx(34,15),t.YNc(35,_,2,0,"th",12),t.YNc(36,A,3,1,"td",13),t.BQk(),t.ynx(37,16),t.YNc(38,U,2,0,"th",12),t.YNc(39,w,2,3,"td",13),t.BQk(),t.ynx(40,17),t.YNc(41,N,2,0,"th",12),t.YNc(42,D,4,0,"td",13),t.BQk(),t.YNc(43,S,1,0,"tr",18),t.YNc(44,Y,1,0,"tr",19),t.YNc(45,B,3,1,"tr",20),t.qZA(),t._UZ(46,"mat-paginator",21),t.qZA(),t._UZ(47,"br")(48,"br"),t.TgZ(49,"div",22)(50,"span"),t._uU(51,"If any icon is missing then you can click here for "),t.TgZ(52,"a",23),t._uU(53,"Google Material Icons"),t.qZA(),t._uU(54,". "),t.qZA()()()()),2&n&&(t.xp6(27),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,q)))},directives:[C.lW,l.rH,Z.Hw,T.d,u.KE,u.hX,M.Nt,c.BZ,m.YE,c.w1,c.fO,c.ge,m.nU,c.Dz,c.ev,c.as,c.XQ,c.nj,c.Gk,c.Ee,p.NW],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.filterDiv[_ngcontent-%COMP%]{width:100%}"]}),o})()}]}];let O=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(Q)],l.Bz]}),o})();var R=i(3075),H=i(429);let z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,O,R.UX,H.q]]}),o})()}}]);