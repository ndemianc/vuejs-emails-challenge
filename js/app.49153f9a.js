(function(e){function t(t){for(var r,a,o=t[0],d=t[1],c=t[2],u=0,m=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&m.push(l[a][0]),l[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);s&&s(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var d=n[o];0!==l[d]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuejs-emails-challenge/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0454":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const l=Object(r["e"])("header",null,[Object(r["e"])("h1",null,"Emails")],-1);function i(e,t,n,i,a,o){const d=Object(r["j"])("new-email"),c=Object(r["j"])("email");return Object(r["h"])(),Object(r["d"])("section",null,[l,Object(r["g"])(d,{onAddEmail:o.addEmail},null,8,["onAddEmail"]),Object(r["e"])("ul",null,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(a.emails,e=>(Object(r["h"])(),Object(r["c"])(c,{key:e.id,id:e.id,"email-address":e.address,onDelete:o.deleteEmail},null,8,["id","email-address","onDelete"]))),128))])])}var a={data(){return{emails:[{id:"123",address:"test@example.com"},{id:"456",address:"admin@example.com"}]}},methods:{addEmail(e){const t={id:String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,""),address:e};this.emails.push(t)},deleteEmail(e){this.emails=this.emails.filter(t=>t.id!==e)}}},o=(n("d28e"),n("6b0d")),d=n.n(o);const c=d()(a,[["render",i]]);var s=c;const u={class:"tag"};function m(e,t,n,l,i,a){return Object(r["h"])(),Object(r["d"])("li",null,[Object(r["e"])("span",u,[Object(r["f"])(Object(r["k"])(n.emailAddress)+" ",1),Object(r["e"])("button",{class:"delete is-small",onClick:t[0]||(t[0]=t=>e.$emit("delete",n.id))})])])}var b={props:{id:{type:String,required:!0},emailAddress:{type:String,required:!0}},emits:["delete"]};const p=d()(b,[["render",m]]);var f=p;const j=Object(r["e"])("label",null,"Please enter email",-1),O=Object(r["e"])("div",null,[Object(r["e"])("button",null,"Add Contact")],-1);function h(e,t,n,l,i,a){return Object(r["h"])(),Object(r["d"])("form",{onSubmit:t[1]||(t[1]=Object(r["n"])((...e)=>a.submitData&&a.submitData(...e),["prevent"]))},[Object(r["e"])("div",null,[j,Object(r["m"])(Object(r["e"])("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.enteredEmail=e)},null,512),[[r["l"],i.enteredEmail]])]),O],32)}var v={emits:["add-email"],data(){return{enteredEmail:""}},methods:{submitData(){this.enteredEmail.length>0&&this.$emit("add-email",this.enteredEmail)}}};const g=d()(v,[["render",h]]);var y=g;const w=Object(r["b"])(s);w.component("email",f),w.component("new-email",y),w.mount("#app")},d28e:function(e,t,n){"use strict";n("0454")}});
//# sourceMappingURL=app.49153f9a.js.map