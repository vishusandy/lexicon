import{S as Ce,i as Oe,s as je,C as ot,k as m,a as R,q,l as b,m as h,c as L,r as H,h as i,n as o,b as I,G as p,M as Y,_ as ut,D as it,E as at,F as ft,u as Ue,f as x,t as le,P as Be,w as fe,e as be,x as ce,y as de,X as ct,g as Ve,d as Re,z as _e,R as nt,L as Se,$ as dt,J as Le,K as Pe,O as $e,B as Te}from"../../../chunks/index-e56e8534.js";import{q as Ke,e as _t,u as pt,d as ye,v as mt,l as he,A as Xe,o as Qe,n as Ye}from"../../../chunks/words-50558ea9.js";import{A as Ae}from"../../../chunks/Alert-392b790a.js";import{N as bt}from"../../../chunks/Nav-34f01931.js";function vt(n){let e,l,s,r,u,t,f,a,_,k,v,g,c;const y=n[9].default,U=ot(y,n,n[8],null);return{c(){e=m("dialog"),l=m("div"),s=m("form"),U&&U.c(),r=R(),u=m("div"),t=m("button"),f=q(n[0]),a=R(),_=m("button"),k=q(n[1]),this.h()},l(T){e=b(T,"DIALOG",{class:!0,id:!0});var C=h(e);l=b(C,"DIV",{class:!0});var w=h(l);s=b(w,"FORM",{method:!0});var Z=h(s);U&&U.l(Z),r=L(Z),u=b(Z,"DIV",{class:!0});var V=h(u);t=b(V,"BUTTON",{type:!0,class:!0});var W=h(t);f=H(W,n[0]),W.forEach(i),a=L(V),_=b(V,"BUTTON",{type:!0,class:!0});var S=h(_);k=H(S,n[1]),S.forEach(i),V.forEach(i),Z.forEach(i),w.forEach(i),C.forEach(i),this.h()},h(){o(t,"type","submit"),o(t,"class","btn btn-primary"),o(_,"type","button"),o(_,"class","btn btn-secondary"),o(u,"class","dialog-controls svelte-1d7zp56"),o(s,"method","dialog"),o(l,"class","modal-wrapper svelte-1d7zp56"),o(e,"class","modal svelte-1d7zp56"),o(e,"id",n[2])},m(T,C){I(T,e,C),p(e,l),p(l,s),U&&U.m(s,null),p(s,r),p(s,u),p(u,t),p(t,f),p(u,a),p(u,_),p(_,k),v=!0,g||(c=[Y(_,"click",n[3]),Y(s,"submit",n[5]),Y(e,"click",ut(n[3])),Y(e,"close",n[4])],g=!0)},p(T,[C]){U&&U.p&&(!v||C&256)&&it(U,y,T,T[8],v?ft(y,T[8],C,null):at(T[8]),null),(!v||C&1)&&Ue(f,T[0]),(!v||C&2)&&Ue(k,T[1]),(!v||C&4)&&o(e,"id",T[2])},i(T){v||(x(U,T),v=!0)},o(T){le(U,T),v=!1},d(T){T&&i(e),U&&U.d(T),g=!1,Be(c)}}}function Ze(n){n.querySelectorAll("form").forEach(e=>{e.reset()})}function kt(n,e,l){let{$$slots:s={},$$scope:r}=e,{onClose:u=()=>{}}=e,{onSubmit:t}=e,{submit_text:f="Submit"}=e,{cancel_text:a="Cancel"}=e,{id:_}=e;function k(c){const y=document.getElementById(_);y&&(u(y,c),Ze(y),y.close())}function v(c){const y=document.getElementById(_);y&&(u(y,c),Ze(y))}function g(c){const y=document.getElementById(_);if(!y){c.preventDefault();return}t(y,c)?y.close():c.preventDefault()}return n.$$set=c=>{"onClose"in c&&l(6,u=c.onClose),"onSubmit"in c&&l(7,t=c.onSubmit),"submit_text"in c&&l(0,f=c.submit_text),"cancel_text"in c&&l(1,a=c.cancel_text),"id"in c&&l(2,_=c.id),"$$scope"in c&&l(8,r=c.$$scope)},[f,a,_,k,v,g,u,t,r,s]}class xe extends Ce{constructor(e){super(),Oe(this,e,kt,vt,je,{onClose:6,onSubmit:7,submit_text:0,cancel_text:1,id:2})}}function et(n,e,l){const s=n.slice();return s[30]=e[l],s}function ht(n){let e,l;return{c(){e=m("button"),l=m("i"),this.h()},l(s){e=b(s,"BUTTON",{type:!0,class:!0});var r=h(e);l=b(r,"I",{class:!0}),h(l).forEach(i),r.forEach(i),this.h()},h(){o(l,"class","fa-solid fa-xmark"),o(e,"type","button"),o(e,"class","remove-btn svelte-ij8xur"),e.disabled=!0},m(s,r){I(s,e,r),p(e,l)},p:Te,d(s){s&&i(e)}}}function gt(n){let e,l,s,r;function u(...t){return n[17](n[30],...t)}return{c(){e=m("button"),l=m("i"),this.h()},l(t){e=b(t,"BUTTON",{type:!0,class:!0,title:!0});var f=h(e);l=b(f,"I",{class:!0}),h(l).forEach(i),f.forEach(i),this.h()},h(){o(l,"class","fa-solid fa-xmark"),o(e,"type","button"),o(e,"class","remove-btn svelte-ij8xur"),o(e,"title","Delete backup")},m(t,f){I(t,e,f),p(e,l),s||(r=Y(e,"click",u),s=!0)},p(t,f){n=t},d(t){t&&i(e),s=!1,r()}}}function yt(n){let e,l,s,r;return{c(){e=m("button"),l=m("i"),s=R(),r=m("input"),this.h()},l(u){e=b(u,"BUTTON",{type:!0,class:!0});var t=h(e);l=b(t,"I",{class:!0}),h(l).forEach(i),t.forEach(i),s=L(u),r=b(u,"INPUT",{type:!0,class:!0}),this.h()},h(){o(l,"class","fa-solid fa-pen"),o(e,"type","button"),e.disabled=!0,o(e,"class","btn rename-btn svelte-ij8xur"),o(r,"type","radio"),o(r,"class","btn-edit-current svelte-ij8xur"),r.disabled=!0},m(u,t){I(u,e,t),p(e,l),I(u,s,t),I(u,r,t)},p:Te,d(u){u&&i(e),u&&i(s),u&&i(r)}}}function wt(n){let e,l,s,r,u,t,f,a,_,k;function v(...g){return n[19](n[30],...g)}return{c(){e=m("button"),l=m("i"),u=R(),t=m("input"),this.h()},l(g){e=b(g,"BUTTON",{type:!0,id:!0,title:!0,class:!0});var c=h(e);l=b(c,"I",{class:!0}),h(l).forEach(i),c.forEach(i),u=L(g),t=b(g,"INPUT",{type:!0,name:!0,class:!0,title:!0,id:!0}),this.h()},h(){o(l,"class","fa-solid fa-pen"),o(e,"type","submit"),o(e,"id",s=n[0]+"-backup-rename-"+n[30].name),o(e,"title","Rename"),e.value=r=n[30].name,o(e,"class","btn rename-btn svelte-ij8xur"),o(t,"type","radio"),o(t,"name","btn-edit"),o(t,"class","btn-edit svelte-ij8xur"),o(t,"title","Select this backup for restore"),o(t,"id",f=n[0]+"-restore-"+n[30].key),t.required=!0,t.value=a=n[30].name},m(g,c){I(g,e,c),p(e,l),I(g,u,c),I(g,t,c),_||(k=Y(e,"click",v),_=!0)},p(g,c){n=g,c[0]&3&&s!==(s=n[0]+"-backup-rename-"+n[30].name)&&o(e,"id",s),c[0]&2&&r!==(r=n[30].name)&&(e.value=r),c[0]&3&&f!==(f=n[0]+"-restore-"+n[30].key)&&o(t,"id",f),c[0]&2&&a!==(a=n[30].name)&&(t.value=a)},d(g){g&&i(e),g&&i(u),g&&i(t),_=!1,k()}}}function Et(n){let e=n[30].name+"",l;return{c(){l=q(e)},l(s){l=H(s,e)},m(s,r){I(s,l,r)},p(s,r){r[0]&2&&e!==(e=s[30].name+"")&&Ue(l,e)},d(s){s&&i(l)}}}function It(n){let e,l;return{c(){e=m("div"),l=q("Current"),this.h()},l(s){e=b(s,"DIV",{class:!0});var r=h(e);l=H(r,"Current"),r.forEach(i),this.h()},h(){o(e,"class","backup-current svelte-ij8xur")},m(s,r){I(s,e,r),p(e,l)},p:Te,d(s){s&&i(e)}}}function tt(n,e){let l,s,r,u,t,f,a,_,k,v,g,c,y,U=e[30].size+"",T,C,w,Z;function V(P,$){return P[30].name!=P[0]?gt:ht}let W=V(e),S=W(e);function ee(...P){return e[18](e[30],...P)}function j(P,$){return P[30].name!=P[0]?wt:yt}let A=j(e),G=A(e);function ne(P,$){return P[30].name==P[0]?It:Et}let oe=ne(e),M=oe(e);return{key:n,first:null,c(){l=m("div"),s=m("div"),S.c(),r=R(),u=m("button"),t=m("i"),f=R(),G.c(),a=R(),_=m("div"),k=m("label"),M.c(),g=R(),c=m("div"),y=q("("),T=q(U),C=q(" words)"),this.h()},l(P){l=b(P,"DIV",{class:!0});var $=h(l);s=b($,"DIV",{class:!0});var Q=h(s);S.l(Q),r=L(Q),u=b(Q,"BUTTON",{type:!0,class:!0,title:!0});var E=h(u);t=b(E,"I",{class:!0}),h(t).forEach(i),E.forEach(i),f=L(Q),G.l(Q),a=L(Q),_=b(Q,"DIV",{class:!0});var D=h(_);k=b(D,"LABEL",{class:!0,for:!0,title:!0});var O=h(k);M.l(O),O.forEach(i),g=L(D),c=b(D,"DIV",{class:!0});var z=h(c);y=H(z,"("),T=H(z,U),C=H(z," words)"),z.forEach(i),D.forEach(i),Q.forEach(i),$.forEach(i),this.h()},h(){o(t,"class","fa-solid fa-download"),o(u,"type","button"),o(u,"class","btn download-btn svelte-ij8xur"),o(u,"title","Download backup"),o(k,"class","backup-name-label svelte-ij8xur"),o(k,"for",v=e[0]+"-restore-"+e[30].key),o(k,"title","Select backup for restore"),o(c,"class","backup-length svelte-ij8xur"),o(_,"class","backup-name svelte-ij8xur"),o(s,"class","backup-content svelte-ij8xur"),o(l,"class","backup-entry svelte-ij8xur"),this.first=l},m(P,$){I(P,l,$),p(l,s),S.m(s,null),p(s,r),p(s,u),p(u,t),p(s,f),G.m(s,null),p(s,a),p(s,_),p(_,k),M.m(k,null),p(_,g),p(_,c),p(c,y),p(c,T),p(c,C),w||(Z=Y(u,"click",ee),w=!0)},p(P,$){e=P,W===(W=V(e))&&S?S.p(e,$):(S.d(1),S=W(e),S&&(S.c(),S.m(s,r))),A===(A=j(e))&&G?G.p(e,$):(G.d(1),G=A(e),G&&(G.c(),G.m(s,a))),oe===(oe=ne(e))&&M?M.p(e,$):(M.d(1),M=oe(e),M&&(M.c(),M.m(k,null))),$[0]&3&&v!==(v=e[0]+"-restore-"+e[30].key)&&o(k,"for",v),$[0]&2&&U!==(U=e[30].size+"")&&Ue(T,U)},d(P){P&&i(l),S.d(),G.d(),M.d(),w=!1,Z()}}}function lt(n){let e,l,s,r,u;return{c(){e=q(`Backup as:
                `),l=m("input"),this.h()},l(t){e=H(t,`Backup as:
                `),l=b(t,"INPUT",{id:!0,name:!0,type:!0,class:!0,placeholder:!0}),this.h()},h(){o(l,"id",s=n[0]+"-original-name"),o(l,"name","save-as"),o(l,"type","text"),o(l,"class","original form-control svelte-ij8xur"),o(l,"placeholder","new name"),l.required=!0},m(t,f){I(t,e,f),I(t,l,f),Se(l,n[4]),r||(u=[Y(l,"input",n[22]),Y(l,"blur",n[23])],r=!0)},p(t,f){f[0]&1&&s!==(s=t[0]+"-original-name")&&o(l,"id",s),f[0]&16&&l.value!==t[4]&&Se(l,t[4])},d(t){t&&i(e),t&&i(l),r=!1,Be(u)}}}function Bt(n){let e,l,s,r,u,t,f,a,_,k,v,g,c=n[5]&&lt(n);return{c(){e=m("div"),l=m("div"),s=m("input"),u=R(),t=m("label"),f=q("Backup current list"),_=R(),k=m("div"),c&&c.c(),this.h()},l(y){e=b(y,"DIV",{class:!0});var U=h(e);l=b(U,"DIV",{class:!0});var T=h(l);s=b(T,"INPUT",{type:!0,id:!0}),u=L(T),t=b(T,"LABEL",{for:!0});var C=h(t);f=H(C,"Backup current list"),C.forEach(i),T.forEach(i),_=L(U),k=b(U,"DIV",{});var w=h(k);c&&c.l(w),w.forEach(i),U.forEach(i),this.h()},h(){o(s,"type","checkbox"),o(s,"id",r=n[0]+"-rename-current"),o(t,"for",a=n[0]+"-rename-current"),o(l,"class","dialog-title svelte-ij8xur"),o(e,"class","original-name svelte-ij8xur")},m(y,U){I(y,e,U),p(e,l),p(l,s),s.checked=n[5],p(l,u),p(l,t),p(t,f),p(e,_),p(e,k),c&&c.m(k,null),v||(g=Y(s,"change",n[21]),v=!0)},p(y,U){U[0]&1&&r!==(r=y[0]+"-rename-current")&&o(s,"id",r),U[0]&32&&(s.checked=y[5]),U[0]&1&&a!==(a=y[0]+"-rename-current")&&o(t,"for",a),y[5]?c?c.p(y,U):(c=lt(y),c.c(),c.m(k,null)):c&&(c.d(1),c=null)},d(y){y&&i(e),c&&c.d(),v=!1,g()}}}function Tt(n){let e,l,s,r,u,t,f;return{c(){e=m("input"),s=R(),r=m("input"),this.h()},l(a){e=b(a,"INPUT",{type:!0,id:!0,class:!0}),s=L(a),r=b(a,"INPUT",{type:!0,id:!0}),this.h()},h(){o(e,"type","text"),o(e,"id",l=n[0]+"-rename-backup"),o(e,"class","form-control"),o(r,"type","hidden"),o(r,"id",u=n[0]+"-rename-hidden")},m(a,_){I(a,e,_),Se(e,n[6]),I(a,s,_),I(a,r,_),t||(f=[Y(e,"blur",n[24]),Y(e,"input",n[25])],t=!0)},p(a,_){_[0]&1&&l!==(l=a[0]+"-rename-backup")&&o(e,"id",l),_[0]&64&&e.value!==a[6]&&Se(e,a[6]),_[0]&1&&u!==(u=a[0]+"-rename-hidden")&&o(r,"id",u)},d(a){a&&i(e),a&&i(s),a&&i(r),t=!1,Be(f)}}}function st(n){let e,l,s,r;const u=[Nt,Dt],t=[];function f(a,_){return a[3]!=null?0:1}return e=f(n),l=t[e]=u[e](n),{c(){l.c(),s=be()},l(a){l.l(a),s=be()},m(a,_){t[e].m(a,_),I(a,s,_),r=!0},p(a,_){let k=e;e=f(a),e===k?t[e].p(a,_):(Ve(),le(t[k],1,1,()=>{t[k]=null}),Re(),l=t[e],l?l.p(a,_):(l=t[e]=u[e](a),l.c()),x(l,1),l.m(s.parentNode,s))},i(a){r||(x(l),r=!0)},o(a){le(l),r=!1},d(a){t[e].d(a),a&&i(s)}}}function Dt(n){let e,l,s;function r(t){n[27](t)}let u={};return n[2]!==void 0&&(u.message=n[2]),e=new Ae({props:u}),Le.push(()=>Pe(e,"message",r,n[2])),{c(){fe(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,f){de(e,t,f),s=!0},p(t,f){const a={};!l&&f[0]&4&&(l=!0,a.message=t[2],$e(()=>l=!1)),e.$set(a)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function Nt(n){let e,l,s;function r(t){n[26](t)}let u={alert_style:n[3]};return n[2]!==void 0&&(u.message=n[2]),e=new Ae({props:u}),Le.push(()=>Pe(e,"message",r,n[2])),{c(){fe(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,f){de(e,t,f),s=!0},p(t,f){const a={};f[0]&8&&(a.alert_style=t[3]),!l&&f[0]&4&&(l=!0,a.message=t[2],$e(()=>l=!1)),e.$set(a)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function Ut(n){let e,l,s,r,u,t,f,a,_,k,v,g,c,y,U,T,C,w=[],Z=new Map,V,W,S,ee,j,A,G,ne,oe,M,P,$,Q,E,D,O,z,X,se,te,re,F,B,J,ie,pe,ve,ke=n[1];const we=d=>d[30].key;for(let d=0;d<ke.length;d+=1){let N=et(n,ke,d),ue=we(N);Z.set(ue,w[d]=tt(ue,N))}te=new xe({props:{id:"backup-modal",onSubmit:n[9],submit_text:"Restore",$$slots:{default:[Bt]},$$scope:{ctx:n}}}),F=new xe({props:{id:"rename-modal",onSubmit:n[8],onClose:n[14],submit_text:"Rename",$$slots:{default:[Tt]},$$scope:{ctx:n}}});let K=n[2]&&st(n);return{c(){e=m("h2"),l=q("Create Backup"),s=R(),r=m("div"),u=m("form"),t=m("div"),f=m("input"),_=R(),k=m("button"),v=q("Create Backup"),g=R(),c=m("h2"),y=q("Backups"),U=R(),T=m("div"),C=m("form");for(let d=0;d<w.length;d+=1)w[d].c();V=R(),W=m("div"),S=m("button"),ee=q("Restore"),A=R(),G=m("h2"),ne=q("Upload Backup"),oe=R(),M=m("div"),P=m("form"),$=m("div"),Q=m("div"),E=m("input"),O=R(),z=m("button"),X=q("Restore Backup"),se=R(),fe(te.$$.fragment),re=R(),fe(F.$$.fragment),B=R(),K&&K.c(),J=be(),this.h()},l(d){e=b(d,"H2",{class:!0,id:!0});var N=h(e);l=H(N,"Create Backup"),N.forEach(i),s=L(d),r=b(d,"DIV",{class:!0});var ue=h(r);u=b(ue,"FORM",{});var me=h(u);t=b(me,"DIV",{class:!0});var ae=h(t);f=b(ae,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0}),_=L(ae),k=b(ae,"BUTTON",{class:!0});var ge=h(k);v=H(ge,"Create Backup"),ge.forEach(i),ae.forEach(i),me.forEach(i),ue.forEach(i),g=L(d),c=b(d,"H2",{class:!0,id:!0});var Ee=h(c);y=H(Ee,"Backups"),Ee.forEach(i),U=L(d),T=b(d,"DIV",{class:!0});var Ie=h(T);C=b(Ie,"FORM",{id:!0});var De=h(C);for(let Me=0;Me<w.length;Me+=1)w[Me].l(De);V=L(De),W=b(De,"DIV",{class:!0});var Fe=h(W);S=b(Fe,"BUTTON",{type:!0,class:!0,name:!0});var ze=h(S);ee=H(ze,"Restore"),ze.forEach(i),Fe.forEach(i),De.forEach(i),Ie.forEach(i),A=L(d),G=b(d,"H2",{class:!0,id:!0});var qe=h(G);ne=H(qe,"Upload Backup"),qe.forEach(i),oe=L(d),M=b(d,"DIV",{class:!0});var He=h(M);P=b(He,"FORM",{});var We=h(P);$=b(We,"DIV",{class:!0});var Ne=h($);Q=b(Ne,"DIV",{class:!0});var Ge=h(Q);E=b(Ge,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),Ge.forEach(i),O=L(Ne),z=b(Ne,"BUTTON",{class:!0});var Je=h(z);X=H(Je,"Restore Backup"),Je.forEach(i),Ne.forEach(i),We.forEach(i),He.forEach(i),se=L(d),ce(te.$$.fragment,d),re=L(d),ce(F.$$.fragment,d),B=L(d),K&&K.l(d),J=be(),this.h()},h(){o(e,"class","options-group-title"),o(e,"id","create-backup"),o(f,"id",a=n[0]+"-new-backup-name"),o(f,"type","text"),o(f,"class","new-backup-name form-control svelte-ij8xur"),o(f,"placeholder","new name"),o(k,"class","create-backup btn btn-primary svelte-ij8xur"),o(t,"class","new-backup svelte-ij8xur"),o(r,"class","options-group"),o(c,"class","options-group-title"),o(c,"id","backups"),o(S,"type","button"),o(S,"class","btn btn-danger"),o(S,"name","backups_action"),S.value="restore",o(W,"class","backup-submit svelte-ij8xur"),o(C,"id",j=n[0]+"-backup-list-form"),o(T,"class","options-group"),o(G,"class","options-group-title"),o(G,"id","upload-backup"),o(E,"id",D=n[0]+"-upload-backup"),o(E,"class","upload-backup form-control svelte-ij8xur"),o(E,"type","file"),o(E,"accept",".json,application/json"),o(Q,"class","upload-backup-container svelte-ij8xur"),o(z,"class","btn btn-danger upload-backup-btn svelte-ij8xur"),o($,"class","new-backup svelte-ij8xur"),o(M,"class","options-group")},m(d,N){I(d,e,N),p(e,l),I(d,s,N),I(d,r,N),p(r,u),p(u,t),p(t,f),p(t,_),p(t,k),p(k,v),I(d,g,N),I(d,c,N),p(c,y),I(d,U,N),I(d,T,N),p(T,C);for(let ue=0;ue<w.length;ue+=1)w[ue].m(C,null);p(C,V),p(C,W),p(W,S),p(S,ee),I(d,A,N),I(d,G,N),p(G,ne),I(d,oe,N),I(d,M,N),p(M,P),p(P,$),p($,Q),p(Q,E),p($,O),p($,z),p(z,X),I(d,se,N),de(te,d,N),I(d,re,N),de(F,d,N),I(d,B,N),K&&K.m(d,N),I(d,J,N),ie=!0,pe||(ve=[Y(f,"blur",n[16]),Y(u,"submit",n[10]),Y(S,"click",n[12]),Y(P,"submit",n[20])],pe=!0)},p(d,N){(!ie||N[0]&1&&a!==(a=d[0]+"-new-backup-name"))&&o(f,"id",a),N[0]&40963&&(ke=d[1],w=ct(w,N,we,1,d,ke,Z,C,dt,tt,V,et)),(!ie||N[0]&1&&j!==(j=d[0]+"-backup-list-form"))&&o(C,"id",j),(!ie||N[0]&1&&D!==(D=d[0]+"-upload-backup"))&&o(E,"id",D);const ue={};N[0]&49|N[1]&4&&(ue.$$scope={dirty:N,ctx:d}),te.$set(ue);const me={};N[0]&65|N[1]&4&&(me.$$scope={dirty:N,ctx:d}),F.$set(me),d[2]?K?(K.p(d,N),N[0]&4&&x(K,1)):(K=st(d),K.c(),x(K,1),K.m(J.parentNode,J)):K&&(Ve(),le(K,1,1,()=>{K=null}),Re())},i(d){ie||(x(te.$$.fragment,d),x(F.$$.fragment,d),x(K),ie=!0)},o(d){le(te.$$.fragment,d),le(F.$$.fragment,d),le(K),ie=!1},d(d){d&&i(e),d&&i(s),d&&i(r),d&&i(g),d&&i(c),d&&i(U),d&&i(T);for(let N=0;N<w.length;N+=1)w[N].d();d&&i(A),d&&i(G),d&&i(oe),d&&i(M),d&&i(se),_e(te,d),d&&i(re),_e(F,d),d&&i(B),K&&K.d(d),d&&i(J),pe=!1,Be(ve)}}}function St(n,e,l){const s=nt();let{key:r}=e,{backups:u}=e,t,f,a="",_=!0,k="";function v(){s("refreshlist",!0)}function g(E,D){const O=document.getElementById(D);if(!O)return!1;if(O.value!=""){O.setCustomValidity("");{const z=localStorage.getItem(O.value.toLowerCase());if(O.value.toLowerCase()==r.toLowerCase())O.setCustomValidity(`'${r}' is a reserved name`);else if(z!=null)O.setCustomValidity("Backup exists");else return!0}}return!1}function c(E,D){if(!g(D,r+"-rename-backup"))return console.log("invalid name:"+k),D.preventDefault(),!1;const O=document.getElementById(r+"-rename-hidden"),z=k.toLowerCase(),X=localStorage.getItem(z);if(!O||!O.value||!k||X!=null)return!1;const se=O.value.toLowerCase(),te=localStorage.getItem(se);return te?(localStorage.setItem(z,te),localStorage.removeItem(se),v(),!0):!1}function y(E,D){if(!_&&!window.confirm("This will erase the current word list, continue?"))return console.log("cancelling"),D.preventDefault(),!1;if(_&&!g(D,r+"-original-name"))return D.preventDefault(),!1;const O=document.getElementById(r+"-backup-list-form");if(O){const z=O.elements.namedItem("btn-edit"),X=localStorage.getItem(r.toLowerCase());if(!z||!X)return!1;const se=localStorage.getItem(z.value);if(!se)return!1;_&&localStorage.setItem(a,X),localStorage.setItem(r,se),l(2,t="Backup restored"),l(3,f="info"),v()}return!0}function U(E){const D=document.getElementById(r+"-new-backup-name");if(!D||!g(E,r+"-new-backup-name")){E.preventDefault();return}const O=localStorage.getItem(r.toLowerCase());O&&(localStorage.setItem(D.value.toLowerCase(),O),l(2,t="Backup created"),l(3,f="info"),v(),D.value="")}function T(E){E.preventDefault();let D=document.getElementById(`${r}-upload-backup`);if(!D||!D.files||!D.files[0]){l(2,t="Please select a file"),l(3,f="error");return}if(!window.confirm("This will overwrite the current word list, continue?"))return;const O=new FileReader;O.onload=z=>{if(!O.result){l(2,t="Upload failed"),l(3,f="error");return}let X=O.result,se=JSON.parse(X);if(console.log(Ke(se)),!Ke(se)){l(2,t="Invalid backup file."),l(3,f="error");return}localStorage.setItem(r,X),l(2,t="Backup restored"),l(3,f="info");let te=document.getElementById(`${r}-upload-backup`);te&&(te.value=""),v()},O.readAsText(D.files[0])}function C(E){const D=document.getElementById("backup-modal");if(!D)return;const O=document.getElementById(`${r}-backup-list-form`);O&&O.querySelectorAll('input[name="btn-edit"]:checked').length===0||(D.showModal(),E.preventDefault())}function w(E,D){const O=document.getElementById("rename-modal");if(!O)return;const z=document.getElementById(r+"-rename-backup");z&&(z.placeholder=D);const X=document.getElementById(r+"-rename-hidden");X&&(X.value=D,O.showModal(),E.preventDefault())}function Z(E,D){const O=document.getElementById(r+"-rename-backup");O&&(O.placeholder="")}function V(E,D){return E.preventDefault(),window.confirm("Delete backup '"+D+"'?")?(l(2,t="Backup deleted"),l(3,f="error"),localStorage.removeItem(D),v(),!0):!1}const W=E=>g(E,r+"-new-backup-name"),S=(E,D)=>V(D,E.name),ee=(E,D)=>_t(E.name),j=(E,D)=>w(D,E.name),A=E=>T(E);function G(){_=this.checked,l(5,_)}function ne(){a=this.value,l(4,a)}const oe=E=>g(E,r+"-original-name"),M=E=>g(E,r+"-rename-backup");function P(){k=this.value,l(6,k)}function $(E){t=E,l(2,t)}function Q(E){t=E,l(2,t)}return n.$$set=E=>{"key"in E&&l(0,r=E.key),"backups"in E&&l(1,u=E.backups)},[r,u,t,f,a,_,k,g,c,y,U,T,C,w,Z,V,W,S,ee,j,A,G,ne,oe,M,P,$,Q]}class Ct extends Ce{constructor(e){super(),Oe(this,e,St,Ut,je,{key:0,backups:1},null,[-1,-1])}}function Ot(n){let e;return{c(){e=q("off")},l(l){e=H(l,"off")},m(l,s){I(l,e,s)},d(l){l&&i(e)}}}function jt(n){let e;return{c(){e=q("on")},l(l){e=H(l,"on")},m(l,s){I(l,e,s)},d(l){l&&i(e)}}}function Vt(n){let e,l,s,r;return{c(){e=m("button"),l=q("Turn on"),this.h()},l(u){e=b(u,"BUTTON",{class:!0});var t=h(e);l=H(t,"Turn on"),t.forEach(i),this.h()},h(){o(e,"class","btn btn-primary svelte-vgvckc")},m(u,t){I(u,e,t),p(e,l),s||(r=Y(e,"click",n[8]),s=!0)},p:Te,d(u){u&&i(e),s=!1,r()}}}function Rt(n){let e,l,s,r;return{c(){e=m("button"),l=q("Turn off"),this.h()},l(u){e=b(u,"BUTTON",{class:!0});var t=h(e);l=H(t,"Turn off"),t.forEach(i),this.h()},h(){o(e,"class","btn btn-primary svelte-vgvckc")},m(u,t){I(u,e,t),p(e,l),s||(r=Y(e,"click",n[9]),s=!0)},p:Te,d(u){u&&i(e),s=!1,r()}}}function rt(n){let e,l,s,r;const u=[Pt,Lt],t=[];function f(a,_){return a[3]!=null?0:1}return e=f(n),l=t[e]=u[e](n),{c(){l.c(),s=be()},l(a){l.l(a),s=be()},m(a,_){t[e].m(a,_),I(a,s,_),r=!0},p(a,_){let k=e;e=f(a),e===k?t[e].p(a,_):(Ve(),le(t[k],1,1,()=>{t[k]=null}),Re(),l=t[e],l?l.p(a,_):(l=t[e]=u[e](a),l.c()),x(l,1),l.m(s.parentNode,s))},i(a){r||(x(l),r=!0)},o(a){le(l),r=!1},d(a){t[e].d(a),a&&i(s)}}}function Lt(n){let e,l,s;function r(t){n[13](t)}let u={};return n[2]!==void 0&&(u.message=n[2]),e=new Ae({props:u}),Le.push(()=>Pe(e,"message",r,n[2])),{c(){fe(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,f){de(e,t,f),s=!0},p(t,f){const a={};!l&&f&4&&(l=!0,a.message=t[2],$e(()=>l=!1)),e.$set(a)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function Pt(n){let e,l,s;function r(t){n[12](t)}let u={alert_style:n[3]};return n[2]!==void 0&&(u.message=n[2]),e=new Ae({props:u}),Le.push(()=>Pe(e,"message",r,n[2])),{c(){fe(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,f){de(e,t,f),s=!0},p(t,f){const a={};f&8&&(a.alert_style=t[3]),!l&&f&4&&(l=!0,a.message=t[2],$e(()=>l=!1)),e.$set(a)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){le(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function $t(n){let e,l,s,r,u,t,f,a,_,k,v,g,c,y,U,T,C,w,Z,V,W,S,ee,j,A,G,ne,oe,M,P,$,Q,E,D;function O(B,J){return B[1]===!0?jt:Ot}let z=O(n),X=z(n);function se(B,J){return B[1]?Rt:Vt}let te=se(n),re=te(n),F=n[2]&&rt(n);return{c(){e=m("h2"),l=q("Options"),s=R(),r=m("div"),u=m("div"),t=m("div"),f=m("button"),a=q("Find new definitions"),_=R(),k=m("button"),v=q("Refresh all defintions"),g=R(),c=m("div"),y=m("button"),U=q("Restore defaults"),T=R(),C=m("button"),w=q("Clear words"),Z=R(),V=m("h2"),W=q("Dictionary Lookup"),S=R(),ee=m("div"),j=m("div"),A=m("p"),G=q("Automatic dictionary lookup is: "),ne=m("b"),X.c(),oe=R(),M=m("div"),re.c(),P=R(),F&&F.c(),$=be(),this.h()},l(B){e=b(B,"H2",{class:!0,id:!0});var J=h(e);l=H(J,"Options"),J.forEach(i),s=L(B),r=b(B,"DIV",{class:!0});var ie=h(r);u=b(ie,"DIV",{class:!0});var pe=h(u);t=b(pe,"DIV",{class:!0});var ve=h(t);f=b(ve,"BUTTON",{type:!0,class:!0});var ke=h(f);a=H(ke,"Find new definitions"),ke.forEach(i),_=L(ve),k=b(ve,"BUTTON",{type:!0,class:!0});var we=h(k);v=H(we,"Refresh all defintions"),we.forEach(i),ve.forEach(i),g=L(pe),c=b(pe,"DIV",{class:!0});var K=h(c);y=b(K,"BUTTON",{type:!0,class:!0});var d=h(y);U=H(d,"Restore defaults"),d.forEach(i),T=L(K),C=b(K,"BUTTON",{type:!0,class:!0});var N=h(C);w=H(N,"Clear words"),N.forEach(i),K.forEach(i),pe.forEach(i),ie.forEach(i),Z=L(B),V=b(B,"H2",{class:!0,id:!0});var ue=h(V);W=H(ue,"Dictionary Lookup"),ue.forEach(i),S=L(B),ee=b(B,"DIV",{class:!0});var me=h(ee);j=b(me,"DIV",{});var ae=h(j);A=b(ae,"P",{class:!0});var ge=h(A);G=H(ge,"Automatic dictionary lookup is: "),ne=b(ge,"B",{});var Ee=h(ne);X.l(Ee),Ee.forEach(i),ge.forEach(i),oe=L(ae),M=b(ae,"DIV",{class:!0});var Ie=h(M);re.l(Ie),Ie.forEach(i),ae.forEach(i),me.forEach(i),P=L(B),F&&F.l(B),$=be(),this.h()},h(){o(e,"class","options-group-title"),o(e,"id","options"),o(f,"type","button"),o(f,"class","btn btn-primary svelte-vgvckc"),o(k,"type","button"),o(k,"class","btn btn-primary svelte-vgvckc"),o(t,"class","options-subgroup svelte-vgvckc"),o(y,"type","button"),o(y,"class","btn btn-danger svelte-vgvckc"),o(C,"type","button"),o(C,"class","btn btn-danger svelte-vgvckc"),o(c,"class","option-section options-subgroup svelte-vgvckc"),o(u,"class","option-section options-group-cols svelte-vgvckc"),o(r,"class","options-group"),o(V,"class","options-group-title"),o(V,"id","dictionary-lookup"),o(A,"class","svelte-vgvckc"),o(M,"class","toggle-autodefs svelte-vgvckc"),o(ee,"class","options-group svelte-vgvckc")},m(B,J){I(B,e,J),p(e,l),I(B,s,J),I(B,r,J),p(r,u),p(u,t),p(t,f),p(f,a),p(t,_),p(t,k),p(k,v),p(u,g),p(u,c),p(c,y),p(y,U),p(c,T),p(c,C),p(C,w),I(B,Z,J),I(B,V,J),p(V,W),I(B,S,J),I(B,ee,J),p(ee,j),p(j,A),p(A,G),p(A,ne),X.m(ne,null),p(j,oe),p(j,M),re.m(M,null),I(B,P,J),F&&F.m(B,J),I(B,$,J),Q=!0,E||(D=[Y(f,"click",n[10]),Y(k,"click",n[11]),Y(y,"click",n[4]),Y(C,"click",n[5])],E=!0)},p(B,[J]){z!==(z=O(B))&&(X.d(1),X=z(B),X&&(X.c(),X.m(ne,null))),te===(te=se(B))&&re?re.p(B,J):(re.d(1),re=te(B),re&&(re.c(),re.m(M,null))),B[2]?F?(F.p(B,J),J&4&&x(F,1)):(F=rt(B),F.c(),x(F,1),F.m($.parentNode,$)):F&&(Ve(),le(F,1,1,()=>{F=null}),Re())},i(B){Q||(x(F),Q=!0)},o(B){le(F),Q=!1},d(B){B&&i(e),B&&i(s),B&&i(r),B&&i(Z),B&&i(V),B&&i(S),B&&i(ee),X.d(),re.d(),B&&i(P),F&&F.d(B),B&&i($),E=!1,Be(D)}}}function At(n,e,l){const s=nt();let{key:r}=e,{autodefs:u}=e,t,f;function a(){if(!window.confirm("This will replace the current word list with the defaults.  Continue?"))return;const w=pt(r);ye(w)}function _(){if(!window.confirm("This will clear all words in your current word list.  Continue?"))return;const w=mt(r);ye(w)}function k(w){function Z(j,A){return j.dict_def=A.dict_def,!0}if(!w)return;let V=he(w);if(!window.confirm(`Refresh all ${V.words.length} words?

This will overwrite existing definitions.`))return;let W=0,S=[],ee=V.words.map(async j=>{try{const A=await Xe.default.lookup(j.word);A?(j.dict_def=A,W+=1):S.push(j.word)}finally{j.cache=Qe(j),Ye(V,j,Z)}});Promise.allSettled(ee).then(()=>{S.length==0?(l(2,t=`Updated ${W} words`),l(3,f="info")):(l(3,f="error"),l(2,t=`Failed to update ${S.length} words.  ${S}`)),ye(V)})}function v(w){function Z(j,A){return j.dict_def=A.dict_def,!0}if(!w||!window.confirm("Lookup definitions for words without definitions?"))return;let V=he(w),W=0,S=[],ee=V.words.filter(j=>j.dict_def===void 0).map(async j=>{try{const A=await Xe.default.lookup(j.word);A?(j.dict_def=A,W+=1):S.push(j.word)}finally{j.cache=Qe(j),Ye(V,j,Z)}});Promise.allSettled(ee).then(()=>{S.length==0?(l(2,t=`Updated ${W} words`),l(3,f="info")):(l(3,f="error"),l(2,t=`Failed to update ${S.length} words.<br>${S}`)),ye(V)})}function g(){let w=he(r);w.auto_defs=!0,ye(w),s("refreshlist",!0)}function c(){let w=he(r);w.auto_defs=!1,ye(w),s("refreshlist",!0)}const y=()=>v(r),U=()=>k(r);function T(w){t=w,l(2,t)}function C(w){t=w,l(2,t)}return n.$$set=w=>{"key"in w&&l(0,r=w.key),"autodefs"in w&&l(1,u=w.autodefs)},[r,u,t,f,a,_,k,v,g,c,y,U,T,C]}class Mt extends Ce{constructor(e){super(),Oe(this,e,At,$t,je,{key:0,autodefs:1})}}function Ft(n){let e,l,s,r,u,t,f,a,_,k;return e=new bt({props:{current:"options"}}),f=new Ct({props:{backups:n[1],key:"words"}}),f.$on("refreshlist",n[2]),_=new Mt({props:{key:"words",autodefs:n[0].auto_defs}}),_.$on("refreshlist",n[2]),{c(){fe(e.$$.fragment),l=R(),s=m("h1"),r=q("Options"),u=R(),t=m("div"),fe(f.$$.fragment),a=R(),fe(_.$$.fragment),this.h()},l(v){ce(e.$$.fragment,v),l=L(v),s=b(v,"H1",{});var g=h(s);r=H(g,"Options"),g.forEach(i),u=L(v),t=b(v,"DIV",{class:!0});var c=h(t);ce(f.$$.fragment,c),a=L(c),ce(_.$$.fragment,c),c.forEach(i),this.h()},h(){o(t,"class","options-page")},m(v,g){de(e,v,g),I(v,l,g),I(v,s,g),p(s,r),I(v,u,g),I(v,t,g),de(f,t,null),p(t,a),de(_,t,null),k=!0},p(v,[g]){const c={};g&2&&(c.backups=v[1]),f.$set(c);const y={};g&1&&(y.autodefs=v[0].auto_defs),_.$set(y)},i(v){k||(x(e.$$.fragment,v),x(f.$$.fragment,v),x(_.$$.fragment,v),k=!0)},o(v){le(e.$$.fragment,v),le(f.$$.fragment,v),le(_.$$.fragment,v),k=!1},d(v){_e(e,v),v&&i(l),v&&i(s),v&&i(u),v&&i(t),_e(f),_e(_)}}}function zt(n,e,l){let s=he("words"),r=[];function u(){l(1,r=[]);for(let f=0;f<localStorage.length;f++){const a=localStorage.key(f);if(a)if(a!=="words"){let _=he(a);r.push({name:a,key:f,size:_.words.length})}else r.unshift({name:a,key:f,size:s.words.length})}}u();function t(f){l(0,s=he("words")),u()}return[s,r,t]}class Jt extends Ce{constructor(e){super(),Oe(this,e,zt,Ft,je,{})}}export{Jt as default};
