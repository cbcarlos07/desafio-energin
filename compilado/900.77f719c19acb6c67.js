"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[900],{4900:(x,m,s)=>{s.r(m),s.d(m,{UserModule:()=>P});var l=s(6771),v=s(906),b=s(5226),c=s.n(b),t=s(8256),d=s(8137),p=s(2143),f=s(8706),h=s(6895);const U=function(o){return["/users/edit",o]};function Z(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"a",4),t._UZ(7,"i",5),t.qZA(),t._uU(8," \xa0 "),t.TgZ(9,"i",6),t.NdJ("click",function(){const u=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.perguntaRemover(u))}),t.qZA()()()}if(2&o){const e=a.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.login),t.xp6(2),t.Q6J("routerLink",t.VKq(3,U,e.id))}}const C=function(){return["/users/cad"]};let w=(()=>{class o{constructor(e){this._userService=e,this.users=[]}ngOnInit(){setTimeout(()=>{this.getAll()},500)}getAll(){this._userService.read().subscribe(e=>{this.users=e})}perguntaRemover(e){const r=e.id||0;c().fire({title:"Aten\xe7\xe3o?",text:`Deseja realmente remover ${e.name}`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, delete-o!",cancelButtonText:"N\xe3o",preConfirm:()=>this.remover(r),allowOutsideClick:()=>!c().isLoading()}).then(n=>{n.isConfirmed&&(setTimeout(()=>{this.getAll()},500),c().fire("Removido!","Usu\xe1rio removido com sucesso","success"))})}remover(e){return new Promise((r,n)=>{this._userService.delete(e).subscribe(()=>{r(!0)})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-users"]],decls:10,vars:3,consts:[["title","Usu\xe1rios","subtitle","Gerenciamento de usu\xe1rios"],["title","",3,"incluir"],[1,"table","table-bordered","table-hover"],[4,"ngFor","ngForOf"],[3,"routerLink"],["title","Editar",1,"text-warning","fa","fa-edit"],["title","Remover",1,"remover","text-danger","fa","fa-remove",3,"click"]],template:function(e,r){1&e&&(t._UZ(0,"app-bradcrumb",0),t.TgZ(1,"app-body",1)(2,"table",2)(3,"thead")(4,"th"),t._uU(5,"Nome"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Login"),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,Z,10,5,"tr",3),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("incluir",t.DdM(2,C)),t.xp6(8),t.Q6J("ngForOf",r.users))},dependencies:[p.O,f.y,h.sg,l.yS],styles:[".remover[_ngcontent-%COMP%]{cursor:pointer}"]}),o})();var i=s(433);class y{static MatchValidator(a,e){return r=>{const n=r.get(a),u=r.get(e);return n&&u&&n.value!==u.value?{mismatch:!0}:null}}}var T=s(5957);let g=(()=>{class o{constructor(e,r,n,u){this._userService=e,this._location=r,this._noticationService=n,this._activatedRouter=u,this.subtitle="Cadastrar Usu\xe1rio",this.inputPwd=!1,this.inputPwdRpt=!1,this.id=0}ngOnInit(){this.id=this._activatedRouter.snapshot.params.id||0,this.form=new i.cw({name:new i.NI("",{validators:[i.kI.required]}),login:new i.NI("",{validators:[i.kI.required]}),password:new i.NI("",{validators:[i.kI.required,i.kI.min(4)]}),confirmPassword:new i.NI("",{validators:[i.kI.required]})},[y.MatchValidator("password","confirmPassword")]),this.id>0&&(this.subtitle="Atualizar Usu\xe1rio",this.buscarUsuario())}change(e){"inputPwd"===e?this.inputPwd=!this.inputPwd:this.inputPwdRpt=!this.inputPwdRpt}buscarUsuario(){this._userService.readId(this.id).subscribe(e=>{this.form.controls.name.setValue(e.name),this.form.controls.login.setValue(e.login)})}submit(){delete this.form.value.confirmPassword,this.id>0?this.atualizar():this.novo()}novo(){this._userService.create(this.form.value).subscribe(e=>{this._noticationService.notify(e.msg),this._location.back()})}atualizar(){this._userService.update(this.id,this.form.value).subscribe(e=>{this._noticationService.notify(e.msg),this._location.back()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.f),t.Y36(h.Ye),t.Y36(T.g),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form-user"]],decls:30,vars:11,consts:[["title","Usu\xe1rios",3,"subtitle"],["title",""],[1,"col-md-6"],["role","form",3,"formGroup","submit"],[1,"box-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","placeholder","Digite o nome","formControlName","name",1,"form-control"],["type","text","id","exampleInputEmail1","placeholder","Digite o login","formControlName","login",1,"form-control"],["for",""],[1,"input-group"],["placeholder","Digite a senha","formControlName","password",1,"form-control",3,"type"],[1,"input-group-addon",3,"click"],["placeholder","Repita a senha","formControlName","confirmPassword",1,"form-control",3,"type"],[1,"box-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,r){1&e&&(t._UZ(0,"app-bradcrumb",0),t.TgZ(1,"app-body",1)(2,"div",2)(3,"form",3),t.NdJ("submit",function(){return r.submit()}),t.TgZ(4,"div",4)(5,"div",5)(6,"label",6),t._uU(7,"Nome"),t.qZA(),t._UZ(8,"input",7),t.qZA(),t.TgZ(9,"div",5)(10,"label",6),t._uU(11,"Login"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",5)(14,"label",9),t._uU(15,"Password"),t.qZA(),t.TgZ(16,"div",10),t._UZ(17,"input",11),t.TgZ(18,"span",12),t.NdJ("click",function(){return r.change("inputPwd")}),t._UZ(19,"i"),t.qZA()()(),t.TgZ(20,"div",5)(21,"label",9),t._uU(22,"Password Again"),t.qZA(),t.TgZ(23,"div",10),t._UZ(24,"input",13),t.TgZ(25,"span",12),t.NdJ("click",function(){return r.change("inputPwdRpt")}),t._UZ(26,"i"),t.qZA()()()(),t.TgZ(27,"div",14)(28,"button",15),t._uU(29,"Submit"),t.qZA()()()()()),2&e&&(t.Q6J("subtitle",r.subtitle),t.xp6(3),t.Q6J("formGroup",r.form),t.xp6(14),t.Q6J("type",r.inputPwd?"text":"password"),t.xp6(2),t.Gre("fa ",r.inputPwd?"fa-eye-slash":"fa-eye",""),t.xp6(5),t.Q6J("type",r.inputPwdRpt?"text":"password"),t.xp6(2),t.Gre("fa ",r.inputPwdRpt?"fa-eye-slash":"fa-eye",""),t.xp6(2),t.Q6J("disabled",r.form.invalid))},dependencies:[p.O,f.y,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".input-group-addon[_ngcontent-%COMP%]{cursor:pointer}"]}),o})();const A=[{path:"",component:w},{path:"cad",component:g},{path:"edit/:id",component:g}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.m,l.Bz.forChild(A)]}),o})()}}]);