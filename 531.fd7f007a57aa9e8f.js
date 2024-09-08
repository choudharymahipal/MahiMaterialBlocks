"use strict";(self.webpackChunkMahiMaterialBlocks=self.webpackChunkMahiMaterialBlocks||[]).push([[531],{6531:(F,d,i)=>{i.r(d),i.d(d,{IconsModule:()=>z});var f=i(9808),r=i(1083),t=i(5e3);let h=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-icons"]],decls:2,vars:0,consts:[[1,"mahiContainer"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},directives:[r.lC],styles:[""]}),o})();var p=i(6087),m=i(4847),c=i(8279),C=i(5630),u=i(7322),g=i(7531),M=i(8099),T=i(7423);function Z(o,e){1&o&&(t.TgZ(0,"th",21),t._uU(1," ID "),t.qZA())}function I(o,e){if(1&o&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.id," ")}}function y(o,e){1&o&&(t.TgZ(0,"th",21),t._uU(1," Name "),t.qZA())}function v(o,e){if(1&o&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function x(o,e){1&o&&(t.TgZ(0,"th",21),t._uU(1," Icon "),t.qZA())}function _(o,e){if(1&o&&(t.TgZ(0,"td",22)(1,"mat-icon"),t._uU(2),t.qZA()()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.icon)}}function A(o,e){1&o&&(t.TgZ(0,"th",21),t._uU(1," HTML Code "),t.qZA())}function w(o,e){if(1&o&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&o){const n=e.$implicit,a=t.oxw();t.xp6(1),t.lnq("",a.startTag," ",n.icon," ",a.endTag,"")}}function U(o,e){1&o&&(t.TgZ(0,"th",21),t._uU(1," Action "),t.qZA())}function N(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"td",22)(1,"button",23),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().copyToClipboard(s.icon)}),t.TgZ(2,"mat-icon"),t._uU(3,"content_copy"),t.qZA()()()}}function D(o,e){1&o&&t._UZ(0,"tr",24)}function S(o,e){1&o&&t._UZ(0,"tr",25)}function Y(o,e){if(1&o&&(t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t.qZA()()),2&o){t.oxw();const n=t.MAs(8);t.xp6(2),t.hij('No icon matching the filter "',n.value,'"')}}const B=function(){return[5,10,25,100]},Q=[{id:"1",name:"Home",icon:"home"},{id:"2",name:"Search",icon:"search"},{id:"3",name:"Option",icon:"more_vert"},{id:"4",name:"Menu",icon:"menu"},{id:"5",name:"Close",icon:"close"},{id:"6",name:"Add",icon:"add"},{id:"7",name:"Delete",icon:"delete"},{id:"8",name:"Login",icon:"login"},{id:"9",name:"Logout",icon:"logout"},{id:"10",name:"Add Circle",icon:"add_circle"},{id:"11",name:"Cancel",icon:"cancel"},{id:"12",name:"Settings",icon:"settings"},{id:"13",name:"Profile",icon:"person"},{id:"14",name:"Notifications",icon:"notifications"},{id:"15",name:"Warning",icon:"warning"}],O=[{path:"",component:h,children:[{path:"",redirectTo:""},{path:"materialicons",component:(()=>{class o{constructor(n){this.commonSvc=n,this.startTag="<mat-icon>",this.endTag="</mat-icon>",this.displayedColumns=["id","name","icon","code","action"],this.dataSource=new c.by(Q)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}copyToClipboard(n){let a=document.createElement("textarea");a.style.position="fixed",a.style.left="0",a.style.top="0",a.style.opacity="0",a.value="<mat-icon>"+n+"</mat-icon>",document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.commonSvc.openSnackBar("Copied to clipboard")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-material-icons"]],viewQuery:function(n,a){if(1&n&&(t.Gf(p.NW,5),t.Gf(m.YE,5)),2&n){let l;t.iGM(l=t.CRH())&&(a.paginator=l.first),t.iGM(l=t.CRH())&&(a.sort=l.first)}},decls:38,vars:5,consts:[[1,"mahiContainer"],[1,"mat-h1"],[1,"container"],[1,"filterDiv"],["matInput","","placeholder","Ex. home",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","icon"],["matColumnDef","code"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of icons",3,"pageSizeOptions"],[2,"text-align","center"],["href","https://fonts.google.com/icons"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","title","Copy to clipboard",1,"example-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Material Icons"),t.qZA(),t.TgZ(3,"div",2)(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"Filter"),t.qZA(),t.TgZ(7,"input",4,5),t.NdJ("keyup",function(s){return a.applyFilter(s)}),t.qZA()(),t.TgZ(9,"div",6)(10,"table",7),t.ynx(11,8),t.YNc(12,Z,2,0,"th",9),t.YNc(13,I,2,1,"td",10),t.BQk(),t.ynx(14,11),t.YNc(15,y,2,0,"th",9),t.YNc(16,v,2,1,"td",10),t.BQk(),t.ynx(17,12),t.YNc(18,x,2,0,"th",9),t.YNc(19,_,3,1,"td",10),t.BQk(),t.ynx(20,13),t.YNc(21,A,2,0,"th",9),t.YNc(22,w,2,3,"td",10),t.BQk(),t.ynx(23,14),t.YNc(24,U,2,0,"th",9),t.YNc(25,N,4,0,"td",10),t.BQk(),t.YNc(26,D,1,0,"tr",15),t.YNc(27,S,1,0,"tr",16),t.YNc(28,Y,3,1,"tr",17),t.qZA(),t._UZ(29,"mat-paginator",18),t.qZA(),t._UZ(30,"br")(31,"br"),t.TgZ(32,"div",19)(33,"span"),t._uU(34,"If any icon is missing then you can click here for "),t.TgZ(35,"a",20),t._uU(36,"Google Material Icons"),t.qZA(),t._uU(37,". "),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,B)))},directives:[u.KE,u.hX,g.Nt,c.BZ,m.YE,c.w1,c.fO,c.ge,m.nU,c.Dz,c.ev,M.Hw,T.lW,c.as,c.XQ,c.nj,c.Gk,c.Ee,p.NW],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.filterDiv[_ngcontent-%COMP%]{width:100%}"]}),o})()}]}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(O)],r.Bz]}),o})();var H=i(3075),q=i(429);let z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,R,H.UX,q.q]]}),o})()}}]);