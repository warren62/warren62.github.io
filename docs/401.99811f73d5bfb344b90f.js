(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[401],{7401:(e,l,s)=>{"use strict";s.r(l),s.d(l,{ExperienceModule:()=>Z});var i=s(1116),t=s(2852),r=s(5366),n=s(5965),a=s(9247);class o extends a.Z{constructor(){super(...arguments),this.start=null,this.end=null,this.skillsChips=[],this.projectChips=[]}}var c=s(7519),u=s(5522);function p(e,l){if(1&e&&(r.TgZ(0,"mat-chip",4),r._uU(1),r.qZA()),2&e){const e=l.$implicit;r.s9C("routerLink",e.routerLink),r.xp6(1),r.Oqu(e.label)}}function k(e,l){if(1&e&&(r.TgZ(0,"div"),r.TgZ(1,"p"),r._uU(2,"Skills"),r.qZA(),r.TgZ(3,"mat-chip-list",2),r.YNc(4,p,2,2,"mat-chip",3),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(4),r.Q6J("ngForOf",e.card.skillsChips)}}function d(e,l){if(1&e&&(r.TgZ(0,"mat-chip",4),r._uU(1),r.qZA()),2&e){const e=l.$implicit;r.s9C("routerLink",e.routerLink),r.xp6(1),r.Oqu(e.label)}}function b(e,l){if(1&e&&(r.TgZ(0,"div"),r.TgZ(1,"p"),r._uU(2,"Projects"),r.qZA(),r.TgZ(3,"mat-chip-list"),r.YNc(4,d,2,2,"mat-chip",3),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(4),r.Q6J("ngForOf",e.card.projectChips)}}const g=function(e,l,s,i,t){return{title:e,subTitle:l,description:s,url:i,shareUrl:t}};let h=(()=>{class e{constructor(){this.card=new o}ngOnInit(){}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-experience-card"]],inputs:{card:"card"},decls:7,vars:17,consts:[[1,"content",3,"cardModel"],[4,"ngIf"],["aria-label","Fish selection"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,l){1&e&&(r.TgZ(0,"app-card",0),r.TgZ(1,"p"),r._uU(2),r.ALo(3,"date"),r.ALo(4,"date"),r.qZA(),r.YNc(5,k,5,1,"div",1),r.YNc(6,b,5,1,"div",1),r.qZA()),2&e&&(r.Q6J("cardModel",r.qbA(11,g,l.card.title,l.card.subTitle,l.card.description,l.card.url,l.card.shareUrl)),r.xp6(2),r.AsE(" ",r.xi3(3,5,l.card.start,"M/yy")," - ",r.xi3(4,8,l.card.end,"M/yy"),""),r.xp6(3),r.Q6J("ngIf",l.card.skillsChips.length>0),r.xp6(1),r.Q6J("ngIf",l.card.projectChips.length>0))},directives:[c.A,i.O5,u.qn,i.sg,u.HS,t.rH],pipes:[i.uU],styles:[""]}),e})();function m(e,l){if(1&e&&(r.TgZ(0,"div",2),r._UZ(1,"app-experience-card",3),r.qZA()),2&e){const e=l.$implicit;r.xp6(1),r.Q6J("card",e)}}let L=(()=>{class e{constructor(){this.cards=[]}ngOnInit(){}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-experience-card-view"]],inputs:{cards:"cards"},decls:3,vars:1,consts:[["fxLayout","row wrap","fxLayoutGap","16px grid"],["fxFlex","25%","fxFlex.xs","100%","fxFlex.sm","33%",4,"ngFor","ngForOf"],["fxFlex","25%","fxFlex.xs","100%","fxFlex.sm","33%"],[3,"card"]],template:function(e,l){1&e&&(r.TgZ(0,"div"),r.TgZ(1,"div",0),r.YNc(2,m,2,1,"div",1),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngForOf",l.cards))},directives:[n.xw,n.SQ,i.sg,n.yH,h],styles:[".content[_ngcontent-%COMP%]{max-height:500px}"]}),e})();const f=[{path:"",component:(()=>{class e{constructor(){this.cards=[{title:"EZFacility",subTitle:".NET/Angular Developer",url:"assets/png/ez.png",description:"",shareUrl:"",type:"",start:new Date,end:new Date,skillsChips:[{label:"C#",routerLink:"/skills"},{label:"Visual Basic",routerLink:"/skills"},{label:".NET",routerLink:"/skills"},{label:"ASP.NET Web Forms",routerLink:"/skills"},{label:"ASP.NET MVC",routerLink:"/skills"},{label:"ASP.NET WebAPI",routerLink:"/skills"},{label:"Bitbucket Pipelines",routerLink:"/skills"},{label:"Bash Scripting",routerLink:"/skills"},{label:"Javascript",routerLink:"/skills"},{label:"Typescript",routerLink:"/skills"},{label:"Angular",routerLink:"/skills"},{label:"HTML",routerLink:"/skills"},{label:"CSS",routerLink:"/skills"},{label:"SQL",routerLink:"/skills"}],projectChips:[{label:"EZTMS",routerLink:"/skills"},{label:"EZTMS API",routerLink:"/skills"},{label:"EZUI",routerLink:"/skills"},{label:"EZUI API",routerLink:"/skills"}]},{title:"RSM Sensitron Semiconductor",subTitle:"Automation .NET developer",url:"assets/png/rsm.png",description:"<ul><li>Create ERP/MRP systems to help production ensure orders are delivered on time</li><li>Integrate floor machinery with internal software via API\u2019s</li><li>Revamp/debug old production management systems</li><li>Install and provide in house code customizations for ERP system (Made2Manage)</li></ul>",shareUrl:"",type:"",start:new Date,end:new Date,skillsChips:[{label:".Net",routerLink:"/skills"},{label:"C#",routerLink:"/skills"},{label:"WPF/MVVM",routerLink:"/skills"},{label:"Visual Basic",routerLink:"/skills"},{label:"SQL",routerLink:"/skills"},{label:"Access",routerLink:"/skills"},{label:"M2M ERP System",routerLink:"/skills"}],projectChips:[{label:"M2M",routerLink:"/skills"},{label:"BOM Manager",routerLink:"/skills"},{label:"WIP Manager",routerLink:"/skills"},{label:"WIP Schedule",routerLink:"/skills"},{label:"Solder Dip Manager",routerLink:"/skills"}]},{title:"Voxx International",subTitle:"Data Analyst",url:"assets/png/voxx.png",description:"<ul><li>Salesforce Administrator/Developer</li><li>Business Objects Administrator</li><li>Generate, modify, automate, and troubleshoot various business reports</li><li>Conduct server maintenance.</li></ul>",shareUrl:"",type:"",start:new Date,end:new Date,skillsChips:[{label:"Salesforce",routerLink:"/skills"},{label:"Java",routerLink:"/skills"},{label:"Visual Basic",routerLink:"/skills"},{label:"VBA",routerLink:"/skills"},{label:"M2M",routerLink:"/skills"},{label:"AS400",routerLink:"/skills"},{label:"Business Objects",routerLink:"/skills"}],projectChips:[]},{title:"Specialist, US Army \u2013 Combat Engineer",subTitle:"Team leader for 2nd Platoon 62nd Sapper Company",url:"assets/jpg/combat-engineer.jpg",description:"",shareUrl:"",type:"",start:new Date,end:new Date,skillsChips:[],projectChips:[]}],this.skillsChips=[{label:"Test",routerLink:"/about"},{label:"Test 1",routerLink:"/home"},{label:"Test",routerLink:"/contact"}]}ngOnInit(){}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-experience"]],decls:4,vars:1,consts:[[1,"content"],[3,"cards"]],template:function(e,l){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"h2"),r._uU(2,"Experience"),r.qZA(),r._UZ(3,"app-experience-card-view",1),r.qZA()),2&e&&(r.xp6(3),r.Q6J("cards",l.cards))},directives:[L],styles:[".content[_ngcontent-%COMP%]{margin:18px}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[t.Bz.forChild(f)],t.Bz]}),e})();var A=s(892);let Z=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez,x,A.x]]}),e})()}}]);