import{S as Ee,i as Ie,s as Be,C as it,k as m,a as R,q as J,l as b,m as y,c as P,r as X,h as u,n as i,b as U,G as p,M as K,_ as ut,D as ft,E as ct,F as dt,u as ye,f as H,t as Q,P as _e,w as se,e as ue,x as ne,y as re,X as _t,g as De,d as Te,z as ae,L as we,$ as pt,I as Ne,J as Se,O as Ue,B as qe}from"../../../chunks/index-d8102d1a.js";import{l as $e,p as Ye,d as mt,q as bt,c as Pe,A as Ze,n as xe,k as et}from"../../../chunks/words-37495ea3.js";import{A as Ce}from"../../../chunks/Alert-83fe2429.js";import{N as vt}from"../../../chunks/Nav-12d3b04f.js";function kt(n){let e,l,s,a,o,t,d,r,c,v,q,w,f;const g=n[9].default,k=it(g,n,n[8],null);return{c(){e=m("dialog"),l=m("div"),s=m("form"),k&&k.c(),a=R(),o=m("div"),t=m("button"),d=J(n[0]),r=R(),c=m("button"),v=J(n[1]),this.h()},l(I){e=b(I,"DIALOG",{class:!0,id:!0});var T=y(e);l=b(T,"DIV",{class:!0});var O=y(l);s=b(O,"FORM",{method:!0});var B=y(s);k&&k.l(B),a=P(B),o=b(B,"DIV",{class:!0});var C=y(o);t=b(C,"BUTTON",{type:!0,class:!0});var V=y(t);d=X(V,n[0]),V.forEach(u),r=P(C),c=b(C,"BUTTON",{type:!0,class:!0});var E=y(c);v=X(E,n[1]),E.forEach(u),C.forEach(u),B.forEach(u),O.forEach(u),T.forEach(u),this.h()},h(){i(t,"type","submit"),i(t,"class","btn btn-primary"),i(c,"type","button"),i(c,"class","btn btn-secondary"),i(o,"class","dialog-controls svelte-153o6vl"),i(s,"method","dialog"),i(l,"class","modal-wrapper svelte-153o6vl"),i(e,"class","modal svelte-153o6vl"),i(e,"id",n[2])},m(I,T){U(I,e,T),p(e,l),p(l,s),k&&k.m(s,null),p(s,a),p(s,o),p(o,t),p(t,d),p(o,r),p(o,c),p(c,v),q=!0,w||(f=[K(c,"click",n[3]),K(s,"submit",n[5]),K(e,"click",ut(n[3])),K(e,"close",n[4])],w=!0)},p(I,[T]){k&&k.p&&(!q||T&256)&&ft(k,g,I,I[8],q?dt(g,I[8],T,null):ct(I[8]),null),(!q||T&1)&&ye(d,I[0]),(!q||T&2)&&ye(v,I[1]),(!q||T&4)&&i(e,"id",I[2])},i(I){q||(H(k,I),q=!0)},o(I){Q(k,I),q=!1},d(I){I&&u(e),k&&k.d(I),w=!1,_e(f)}}}function tt(n){n.querySelectorAll("form").forEach(e=>{e.reset()})}function ht(n,e,l){let{$$slots:s={},$$scope:a}=e,{onClose:o=()=>{}}=e,{onSubmit:t}=e,{submit_text:d="Submit"}=e,{cancel_text:r="Cancel"}=e,{id:c}=e;function v(f){const g=document.getElementById(c);g&&(o(g,f),tt(g),g.close())}function q(f){const g=document.getElementById(c);g&&(o(g,f),tt(g))}function w(f){const g=document.getElementById(c);if(!g){f.preventDefault();return}t(g,f)?g.close():f.preventDefault()}return n.$$set=f=>{"onClose"in f&&l(6,o=f.onClose),"onSubmit"in f&&l(7,t=f.onSubmit),"submit_text"in f&&l(0,d=f.submit_text),"cancel_text"in f&&l(1,r=f.cancel_text),"id"in f&&l(2,c=f.id),"$$scope"in f&&l(8,a=f.$$scope)},[d,r,c,v,q,w,o,t,a,s]}class lt extends Ee{constructor(e){super(),Ie(this,e,ht,kt,Be,{onClose:6,onSubmit:7,submit_text:0,cancel_text:1,id:2})}}function st(n,e,l){const s=n.slice();return s[29]=e[l],s}function gt(n){let e,l;return{c(){e=m("button"),l=m("i"),this.h()},l(s){e=b(s,"BUTTON",{type:!0,class:!0});var a=y(e);l=b(a,"I",{class:!0}),y(l).forEach(u),a.forEach(u),this.h()},h(){i(l,"class","fa-solid fa-xmark"),i(e,"type","button"),i(e,"class","remove-btn svelte-yqp617"),e.disabled=!0},m(s,a){U(s,e,a),p(e,l)},p:qe,d(s){s&&u(e)}}}function yt(n){let e,l,s,a;function o(...t){return n[16](n[29],...t)}return{c(){e=m("button"),l=m("i"),this.h()},l(t){e=b(t,"BUTTON",{type:!0,class:!0,title:!0});var d=y(e);l=b(d,"I",{class:!0}),y(l).forEach(u),d.forEach(u),this.h()},h(){i(l,"class","fa-solid fa-xmark"),i(e,"type","button"),i(e,"class","remove-btn svelte-yqp617"),i(e,"title","Delete backup")},m(t,d){U(t,e,d),p(e,l),s||(a=K(e,"click",o),s=!0)},p(t,d){n=t},d(t){t&&u(e),s=!1,a()}}}function wt(n){let e,l,s,a;return{c(){e=m("button"),l=m("i"),s=R(),a=m("input"),this.h()},l(o){e=b(o,"BUTTON",{type:!0,class:!0});var t=y(e);l=b(t,"I",{class:!0}),y(l).forEach(u),t.forEach(u),s=P(o),a=b(o,"INPUT",{type:!0,class:!0}),this.h()},h(){i(l,"class","fa-solid fa-pen"),i(e,"type","button"),e.disabled=!0,i(e,"class","btn rename-btn svelte-yqp617"),i(a,"type","radio"),i(a,"class","btn-edit-current svelte-yqp617"),a.disabled=!0},m(o,t){U(o,e,t),p(e,l),U(o,s,t),U(o,a,t)},p:qe,d(o){o&&u(e),o&&u(s),o&&u(a)}}}function Et(n){let e,l,s,a,o,t,d,r,c,v;function q(...w){return n[18](n[29],...w)}return{c(){e=m("button"),l=m("i"),o=R(),t=m("input"),this.h()},l(w){e=b(w,"BUTTON",{type:!0,id:!0,title:!0,class:!0});var f=y(e);l=b(f,"I",{class:!0}),y(l).forEach(u),f.forEach(u),o=P(w),t=b(w,"INPUT",{type:!0,name:!0,class:!0,title:!0,id:!0}),this.h()},h(){i(l,"class","fa-solid fa-pen"),i(e,"type","submit"),i(e,"id",s=n[0]+"-backup-rename-"+n[29].name),i(e,"title","Rename"),e.value=a=n[29].name,i(e,"class","btn rename-btn svelte-yqp617"),i(t,"type","radio"),i(t,"name","btn-edit"),i(t,"class","btn-edit svelte-yqp617"),i(t,"title","Select this backup for restore"),i(t,"id",d=n[0]+"-restore-"+n[29].key),t.required=!0,t.value=r=n[29].name},m(w,f){U(w,e,f),p(e,l),U(w,o,f),U(w,t,f),c||(v=K(e,"click",q),c=!0)},p(w,f){n=w,f[0]&3&&s!==(s=n[0]+"-backup-rename-"+n[29].name)&&i(e,"id",s),f[0]&2&&a!==(a=n[29].name)&&(e.value=a),f[0]&3&&d!==(d=n[0]+"-restore-"+n[29].key)&&i(t,"id",d),f[0]&2&&r!==(r=n[29].name)&&(t.value=r)},d(w){w&&u(e),w&&u(o),w&&u(t),c=!1,v()}}}function It(n){let e=n[29].name+"",l;return{c(){l=J(e)},l(s){l=X(s,e)},m(s,a){U(s,l,a)},p(s,a){a[0]&2&&e!==(e=s[29].name+"")&&ye(l,e)},d(s){s&&u(l)}}}function Bt(n){let e,l;return{c(){e=m("div"),l=J("Current"),this.h()},l(s){e=b(s,"DIV",{class:!0});var a=y(e);l=X(a,"Current"),a.forEach(u),this.h()},h(){i(e,"class","backup-current svelte-yqp617")},m(s,a){U(s,e,a),p(e,l)},p:qe,d(s){s&&u(e)}}}function nt(n,e){let l,s,a,o,t,d,r,c,v,q,w,f,g,k=e[29].size+"",I,T,O,B;function C(L,M){return L[29].name!=L[0]?yt:gt}let V=C(e),E=V(e);function $(...L){return e[17](e[29],...L)}function F(L,M){return L[29].name!=L[0]?Et:wt}let Z=F(e),G=Z(e);function x(L,M){return L[29].name==L[0]?Bt:It}let Y=x(e),W=Y(e);return{key:n,first:null,c(){l=m("div"),s=m("div"),E.c(),a=R(),o=m("button"),t=m("i"),d=R(),G.c(),r=R(),c=m("div"),v=m("label"),W.c(),w=R(),f=m("div"),g=J("("),I=J(k),T=J(" words)"),this.h()},l(L){l=b(L,"DIV",{class:!0});var M=y(l);s=b(M,"DIV",{class:!0});var h=y(s);E.l(h),a=P(h),o=b(h,"BUTTON",{type:!0,class:!0,title:!0});var D=y(o);t=b(D,"I",{class:!0}),y(t).forEach(u),D.forEach(u),d=P(h),G.l(h),r=P(h),c=b(h,"DIV",{class:!0});var N=y(c);v=b(N,"LABEL",{class:!0,for:!0,title:!0});var A=y(v);W.l(A),A.forEach(u),w=P(N),f=b(N,"DIV",{class:!0});var j=y(f);g=X(j,"("),I=X(j,k),T=X(j," words)"),j.forEach(u),N.forEach(u),h.forEach(u),M.forEach(u),this.h()},h(){i(t,"class","fa-solid fa-download"),i(o,"type","button"),i(o,"class","btn download-btn svelte-yqp617"),i(o,"title","Download backup"),i(v,"class","backup-name-label svelte-yqp617"),i(v,"for",q=e[0]+"-restore-"+e[29].key),i(v,"title","Select backup for restore"),i(f,"class","backup-length svelte-yqp617"),i(c,"class","backup-name svelte-yqp617"),i(s,"class","backup-content svelte-yqp617"),i(l,"class","backup-entry svelte-yqp617"),this.first=l},m(L,M){U(L,l,M),p(l,s),E.m(s,null),p(s,a),p(s,o),p(o,t),p(s,d),G.m(s,null),p(s,r),p(s,c),p(c,v),W.m(v,null),p(c,w),p(c,f),p(f,g),p(f,I),p(f,T),O||(B=K(o,"click",$),O=!0)},p(L,M){e=L,V===(V=C(e))&&E?E.p(e,M):(E.d(1),E=V(e),E&&(E.c(),E.m(s,a))),Z===(Z=F(e))&&G?G.p(e,M):(G.d(1),G=Z(e),G&&(G.c(),G.m(s,r))),Y===(Y=x(e))&&W?W.p(e,M):(W.d(1),W=Y(e),W&&(W.c(),W.m(v,null))),M[0]&3&&q!==(q=e[0]+"-restore-"+e[29].key)&&i(v,"for",q),M[0]&2&&k!==(k=e[29].size+"")&&ye(I,k)},d(L){L&&u(l),E.d(),G.d(),W.d(),O=!1,B()}}}function rt(n){let e,l,s,a,o;return{c(){e=J(`Backup as:
                `),l=m("input"),this.h()},l(t){e=X(t,`Backup as:
                `),l=b(t,"INPUT",{id:!0,name:!0,type:!0,class:!0,placeholder:!0}),this.h()},h(){i(l,"id",s=n[0]+"-original-name"),i(l,"name","save-as"),i(l,"type","text"),i(l,"class","original form-control svelte-yqp617"),i(l,"placeholder","new name"),l.required=!0},m(t,d){U(t,e,d),U(t,l,d),we(l,n[4]),a||(o=[K(l,"input",n[21]),K(l,"blur",n[22])],a=!0)},p(t,d){d[0]&1&&s!==(s=t[0]+"-original-name")&&i(l,"id",s),d[0]&16&&l.value!==t[4]&&we(l,t[4])},d(t){t&&u(e),t&&u(l),a=!1,_e(o)}}}function Dt(n){let e,l,s,a,o,t,d,r,c,v,q,w,f=n[5]&&rt(n);return{c(){e=m("div"),l=m("div"),s=m("input"),o=R(),t=m("label"),d=J("Backup current list"),c=R(),v=m("div"),f&&f.c(),this.h()},l(g){e=b(g,"DIV",{class:!0});var k=y(e);l=b(k,"DIV",{class:!0});var I=y(l);s=b(I,"INPUT",{type:!0,id:!0}),o=P(I),t=b(I,"LABEL",{for:!0});var T=y(t);d=X(T,"Backup current list"),T.forEach(u),I.forEach(u),c=P(k),v=b(k,"DIV",{});var O=y(v);f&&f.l(O),O.forEach(u),k.forEach(u),this.h()},h(){i(s,"type","checkbox"),i(s,"id",a=n[0]+"-rename-current"),i(t,"for",r=n[0]+"-rename-current"),i(l,"class","dialog-title svelte-yqp617"),i(e,"class","original-name svelte-yqp617")},m(g,k){U(g,e,k),p(e,l),p(l,s),s.checked=n[5],p(l,o),p(l,t),p(t,d),p(e,c),p(e,v),f&&f.m(v,null),q||(w=K(s,"change",n[20]),q=!0)},p(g,k){k[0]&1&&a!==(a=g[0]+"-rename-current")&&i(s,"id",a),k[0]&32&&(s.checked=g[5]),k[0]&1&&r!==(r=g[0]+"-rename-current")&&i(t,"for",r),g[5]?f?f.p(g,k):(f=rt(g),f.c(),f.m(v,null)):f&&(f.d(1),f=null)},d(g){g&&u(e),f&&f.d(),q=!1,w()}}}function Tt(n){let e,l,s,a,o,t,d;return{c(){e=m("input"),s=R(),a=m("input"),this.h()},l(r){e=b(r,"INPUT",{type:!0,id:!0,class:!0}),s=P(r),a=b(r,"INPUT",{type:!0,id:!0}),this.h()},h(){i(e,"type","text"),i(e,"id",l=n[0]+"-rename-backup"),i(e,"class","form-control"),i(a,"type","hidden"),i(a,"id",o=n[0]+"-rename-hidden")},m(r,c){U(r,e,c),we(e,n[6]),U(r,s,c),U(r,a,c),t||(d=[K(e,"blur",n[23]),K(e,"input",n[24])],t=!0)},p(r,c){c[0]&1&&l!==(l=r[0]+"-rename-backup")&&i(e,"id",l),c[0]&64&&e.value!==r[6]&&we(e,r[6]),c[0]&1&&o!==(o=r[0]+"-rename-hidden")&&i(a,"id",o)},d(r){r&&u(e),r&&u(s),r&&u(a),t=!1,_e(d)}}}function at(n){let e,l,s,a;const o=[St,Nt],t=[];function d(r,c){return r[3]!=null?0:1}return e=d(n),l=t[e]=o[e](n),{c(){l.c(),s=ue()},l(r){l.l(r),s=ue()},m(r,c){t[e].m(r,c),U(r,s,c),a=!0},p(r,c){let v=e;e=d(r),e===v?t[e].p(r,c):(De(),Q(t[v],1,1,()=>{t[v]=null}),Te(),l=t[e],l?l.p(r,c):(l=t[e]=o[e](r),l.c()),H(l,1),l.m(s.parentNode,s))},i(r){a||(H(l),a=!0)},o(r){Q(l),a=!1},d(r){t[e].d(r),r&&u(s)}}}function Nt(n){let e,l,s;function a(t){n[26](t)}let o={};return n[2]!==void 0&&(o.message=n[2]),e=new Ce({props:o}),Ne.push(()=>Se(e,"message",a,n[2])),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,d){re(e,t,d),s=!0},p(t,d){const r={};!l&&d[0]&4&&(l=!0,r.message=t[2],Ue(()=>l=!1)),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function St(n){let e,l,s;function a(t){n[25](t)}let o={alert_style:n[3]};return n[2]!==void 0&&(o.message=n[2]),e=new Ce({props:o}),Ne.push(()=>Se(e,"message",a,n[2])),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,d){re(e,t,d),s=!0},p(t,d){const r={};d[0]&8&&(r.alert_style=t[3]),!l&&d[0]&4&&(l=!0,r.message=t[2],Ue(()=>l=!1)),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function Ut(n){let e,l,s,a,o,t,d,r,c,v,q,w,f,g,k,I,T,O,B,C=[],V=new Map,E,$,F,Z,G,x,Y,W,L,M,h,D,N,A,j,ee,te,Ve,pe,oe,me,ie,be,ce,fe,Oe,Me,ve=n[1];const Ae=_=>_[29].key;for(let _=0;_<ve.length;_+=1){let S=st(n,ve,_),le=Ae(S);V.set(le,C[_]=nt(le,S))}oe=new lt({props:{id:"backup-modal",onSubmit:n[9],submit_text:"Restore",$$slots:{default:[Dt]},$$scope:{ctx:n}}}),ie=new lt({props:{id:"rename-modal",onSubmit:n[8],onClose:n[13],submit_text:"Rename",$$slots:{default:[Tt]},$$scope:{ctx:n}}});let z=n[2]&&at(n);return{c(){e=m("legend"),l=J("Save Backup"),s=R(),a=m("div"),o=m("form"),t=m("div"),d=m("div"),r=J(`Backup name:
                `),c=m("input"),q=R(),w=m("button"),f=J("Create Backup"),g=R(),k=m("legend"),I=J("Saved Backups"),T=R(),O=m("div"),B=m("form");for(let _=0;_<C.length;_+=1)C[_].c();E=R(),$=m("div"),F=m("button"),Z=J("Restore"),x=R(),Y=m("legend"),W=J("Upload Backup"),L=R(),M=m("div"),h=m("form"),D=m("div"),N=m("div"),A=m("input"),ee=R(),te=m("button"),Ve=J("Restore Backup"),pe=R(),se(oe.$$.fragment),me=R(),se(ie.$$.fragment),be=R(),z&&z.c(),ce=ue(),this.h()},l(_){e=b(_,"LEGEND",{class:!0});var S=y(e);l=X(S,"Save Backup"),S.forEach(u),s=P(_),a=b(_,"DIV",{class:!0});var le=y(a);o=b(le,"FORM",{});var de=y(o);t=b(de,"DIV",{class:!0});var ke=y(t);d=b(ke,"DIV",{});var Le=y(d);r=X(Le,`Backup name:
                `),c=b(Le,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0}),Le.forEach(u),q=P(ke),w=b(ke,"BUTTON",{class:!0});var Fe=y(w);f=X(Fe,"Create Backup"),Fe.forEach(u),ke.forEach(u),de.forEach(u),le.forEach(u),g=P(_),k=b(_,"LEGEND",{class:!0});var Ge=y(k);I=X(Ge,"Saved Backups"),Ge.forEach(u),T=P(_),O=b(_,"DIV",{class:!0});var We=y(O);B=b(We,"FORM",{id:!0});var he=y(B);for(let Re=0;Re<C.length;Re+=1)C[Re].l(he);E=P(he),$=b(he,"DIV",{class:!0});var je=y($);F=b(je,"BUTTON",{type:!0,class:!0,name:!0});var ze=y(F);Z=X(ze,"Restore"),ze.forEach(u),je.forEach(u),he.forEach(u),We.forEach(u),x=P(_),Y=b(_,"LEGEND",{class:!0});var Je=y(Y);W=X(Je,"Upload Backup"),Je.forEach(u),L=P(_),M=b(_,"DIV",{class:!0});var Xe=y(M);h=b(Xe,"FORM",{});var He=y(h);D=b(He,"DIV",{class:!0});var ge=y(D);N=b(ge,"DIV",{class:!0});var Ke=y(N);A=b(Ke,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),Ke.forEach(u),ee=P(ge),te=b(ge,"BUTTON",{class:!0});var Qe=y(te);Ve=X(Qe,"Restore Backup"),Qe.forEach(u),ge.forEach(u),He.forEach(u),Xe.forEach(u),pe=P(_),ne(oe.$$.fragment,_),me=P(_),ne(ie.$$.fragment,_),be=P(_),z&&z.l(_),ce=ue(),this.h()},h(){i(e,"class","options-group-title"),i(c,"id",v=n[0]+"-new-backup-name"),i(c,"type","text"),i(c,"class","new-backup-name form-control svelte-yqp617"),i(c,"placeholder","new name"),i(w,"class","btn btn-primary"),i(t,"class","new-backup svelte-yqp617"),i(a,"class","options-group"),i(k,"class","options-group-title"),i(F,"type","button"),i(F,"class","btn btn btn-danger"),i(F,"name","backups_action"),F.value="restore",i($,"class","backup-submit svelte-yqp617"),i(B,"id",G=n[0]+"-backup-list-form"),i(O,"class","options-group"),i(Y,"class","options-group-title"),i(A,"id",j=n[0]+"-upload-backup"),i(A,"class","upload-backup form-control svelte-yqp617"),i(A,"type","file"),i(A,"accept",".json,application/json"),i(N,"class","upload-backup-container"),i(te,"class","btn btn-danger upload-backup-btn svelte-yqp617"),i(D,"class","new-backup svelte-yqp617"),i(M,"class","options-group")},m(_,S){U(_,e,S),p(e,l),U(_,s,S),U(_,a,S),p(a,o),p(o,t),p(t,d),p(d,r),p(d,c),p(t,q),p(t,w),p(w,f),U(_,g,S),U(_,k,S),p(k,I),U(_,T,S),U(_,O,S),p(O,B);for(let le=0;le<C.length;le+=1)C[le].m(B,null);p(B,E),p(B,$),p($,F),p(F,Z),U(_,x,S),U(_,Y,S),p(Y,W),U(_,L,S),U(_,M,S),p(M,h),p(h,D),p(D,N),p(N,A),p(D,ee),p(D,te),p(te,Ve),U(_,pe,S),re(oe,_,S),U(_,me,S),re(ie,_,S),U(_,be,S),z&&z.m(_,S),U(_,ce,S),fe=!0,Oe||(Me=[K(c,"blur",n[15]),K(o,"submit",n[10]),K(F,"click",qt),K(h,"submit",n[19])],Oe=!0)},p(_,S){(!fe||S[0]&1&&v!==(v=_[0]+"-new-backup-name"))&&i(c,"id",v),S[0]&20483&&(ve=_[1],C=_t(C,S,Ae,1,_,ve,V,B,pt,nt,E,st)),(!fe||S[0]&1&&G!==(G=_[0]+"-backup-list-form"))&&i(B,"id",G),(!fe||S[0]&1&&j!==(j=_[0]+"-upload-backup"))&&i(A,"id",j);const le={};S[0]&49|S[1]&2&&(le.$$scope={dirty:S,ctx:_}),oe.$set(le);const de={};S[0]&65|S[1]&2&&(de.$$scope={dirty:S,ctx:_}),ie.$set(de),_[2]?z?(z.p(_,S),S[0]&4&&H(z,1)):(z=at(_),z.c(),H(z,1),z.m(ce.parentNode,ce)):z&&(De(),Q(z,1,1,()=>{z=null}),Te())},i(_){fe||(H(oe.$$.fragment,_),H(ie.$$.fragment,_),H(z),fe=!0)},o(_){Q(oe.$$.fragment,_),Q(ie.$$.fragment,_),Q(z),fe=!1},d(_){_&&u(e),_&&u(s),_&&u(a),_&&u(g),_&&u(k),_&&u(T),_&&u(O);for(let S=0;S<C.length;S+=1)C[S].d();_&&u(x),_&&u(Y),_&&u(L),_&&u(M),_&&u(pe),ae(oe,_),_&&u(me),ae(ie,_),_&&u(be),z&&z.d(_),_&&u(ce),Oe=!1,_e(Me)}}}function qt(n){const e=document.getElementById("backup-modal");e&&(e.showModal(),n.preventDefault())}function Ct(n,e,l){let{key:s}=e,a=[],o,t,d="",r=!0,c="";function v(){for(let h=0;h<localStorage.length;h++){const D=localStorage.key(h);if(D){let N=$e(D);a.push({name:D,key:h,size:N.words.length})}}}v();function q(){l(1,a=[]),v(),l(1,a)}function w(h,D){const N=document.getElementById(D);if(!N)return!1;if(N.value!=""){N.setCustomValidity("");{const A=localStorage.getItem(N.value.toLowerCase());if(N.value.toLowerCase()==s.toLowerCase())N.setCustomValidity(`'${s}' is a reserved name`);else if(A!=null)N.setCustomValidity("Backup exists");else return!0}}return!1}function f(h,D){if(!w(D,s+"-rename-backup"))return console.log("invalid name:"+c),D.preventDefault(),!1;const N=document.getElementById(s+"-rename-hidden"),A=c.toLowerCase(),j=localStorage.getItem(A);if(!N||!N.value||!c||j!=null)return!1;const ee=N.value.toLowerCase(),te=localStorage.getItem(ee);return te?(localStorage.setItem(A,te),localStorage.removeItem(ee),q(),!0):!1}function g(h,D){if(!r&&!window.confirm("This will erase the current word list, continue?"))return console.log("cancelling"),D.preventDefault(),!1;if(r&&!w(D,s+"-original-name"))return D.preventDefault(),!1;const N=document.getElementById(s+"-backup-list-form");if(N){const A=N.elements.namedItem("btn-edit"),j=localStorage.getItem(s.toLowerCase());if(!A||!j)return!1;const ee=localStorage.getItem(A.value);if(!ee)return!1;r&&localStorage.setItem(d,j),localStorage.setItem(s,ee),l(2,o="Backup restored"),l(3,t="info"),q()}return!0}function k(h){const D=document.getElementById(s+"-new-backup-name");if(!D||!w(h,s+"-new-backup-name")){h.preventDefault();return}const N=localStorage.getItem(s.toLowerCase());N&&(localStorage.setItem(D.value.toLowerCase(),N),l(2,o="Backup created"),l(3,t="info"),q(),D.value="")}function I(h){h.preventDefault();let D=document.getElementById(`${s}-upload-backup`);if(!D||!D.files||!D.files[0]){l(2,o="Please select a file"),l(3,t="error");return}if(!window.confirm("This will overwrite the current word list, continue?"))return;const N=new FileReader;N.onload=A=>{if(!N.result){l(2,o="Upload failed"),l(3,t="error");return}let j=N.result,ee=JSON.parse(j);if(console.log(Ye(ee)),!Ye(ee)){l(2,o="Invalid backup file."),l(3,t="error");return}localStorage.setItem(s,j),l(2,o="Backup restored"),l(3,t="info");let te=document.getElementById(`${s}-upload-backup`);te&&(te.value=""),q()},N.readAsText(D.files[0])}function T(h,D){const N=document.getElementById("rename-modal");if(!N)return;const A=document.getElementById(s+"-rename-backup");A&&(A.placeholder=D);const j=document.getElementById(s+"-rename-hidden");j&&(j.value=D,N.showModal(),h.preventDefault())}function O(h,D){const N=document.getElementById(s+"-rename-backup");N&&(N.placeholder="")}function B(h,D){return h.preventDefault(),window.confirm("Delete backup '"+D+"'?")?(l(2,o="Backup deleted"),l(3,t="error"),localStorage.removeItem(D),q(),!0):!1}const C=h=>w(h,s+"-new-backup-name"),V=(h,D)=>B(D,h.name),E=(h,D)=>mt(h.name),$=(h,D)=>T(D,h.name),F=h=>I(h);function Z(){r=this.checked,l(5,r)}function G(){d=this.value,l(4,d)}const x=h=>w(h,s+"-original-name"),Y=h=>w(h,s+"-rename-backup");function W(){c=this.value,l(6,c)}function L(h){o=h,l(2,o)}function M(h){o=h,l(2,o)}return n.$$set=h=>{"key"in h&&l(0,s=h.key)},[s,a,o,t,d,r,c,w,f,g,k,I,T,O,B,C,V,E,$,F,Z,G,x,Y,W,L,M]}class Vt extends Ee{constructor(e){super(),Ie(this,e,Ct,Ut,Be,{key:0},null,[-1,-1])}}function ot(n){let e,l,s,a;const o=[Lt,Ot],t=[];function d(r,c){return r[2]!=null?0:1}return e=d(n),l=t[e]=o[e](n),{c(){l.c(),s=ue()},l(r){l.l(r),s=ue()},m(r,c){t[e].m(r,c),U(r,s,c),a=!0},p(r,c){let v=e;e=d(r),e===v?t[e].p(r,c):(De(),Q(t[v],1,1,()=>{t[v]=null}),Te(),l=t[e],l?l.p(r,c):(l=t[e]=o[e](r),l.c()),H(l,1),l.m(s.parentNode,s))},i(r){a||(H(l),a=!0)},o(r){Q(l),a=!1},d(r){t[e].d(r),r&&u(s)}}}function Ot(n){let e,l,s;function a(t){n[9](t)}let o={};return n[1]!==void 0&&(o.message=n[1]),e=new Ce({props:o}),Ne.push(()=>Se(e,"message",a,n[1])),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,d){re(e,t,d),s=!0},p(t,d){const r={};!l&&d&2&&(l=!0,r.message=t[1],Ue(()=>l=!1)),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function Lt(n){let e,l,s;function a(t){n[8](t)}let o={alert_style:n[2]};return n[1]!==void 0&&(o.message=n[1]),e=new Ce({props:o}),Ne.push(()=>Se(e,"message",a,n[1])),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,d){re(e,t,d),s=!0},p(t,d){const r={};d&4&&(r.alert_style=t[2]),!l&&d&2&&(l=!0,r.message=t[1],Ue(()=>l=!1)),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function Rt(n){let e,l,s,a,o,t,d,r,c,v,q,w,f,g,k,I,T,O,B,C,V=n[1]&&ot(n);return{c(){e=m("legend"),l=J("Options"),s=R(),a=m("div"),o=m("div"),t=m("button"),d=J("Find new definitions"),r=R(),c=m("div"),v=m("button"),q=J("Refresh all defintions"),w=R(),f=m("div"),g=m("button"),k=J("Clear words"),I=R(),V&&V.c(),T=ue(),this.h()},l(E){e=b(E,"LEGEND",{class:!0});var $=y(e);l=X($,"Options"),$.forEach(u),s=P(E),a=b(E,"DIV",{class:!0});var F=y(a);o=b(F,"DIV",{class:!0});var Z=y(o);t=b(Z,"BUTTON",{type:!0,class:!0});var G=y(t);d=X(G,"Find new definitions"),G.forEach(u),Z.forEach(u),r=P(F),c=b(F,"DIV",{class:!0});var x=y(c);v=b(x,"BUTTON",{type:!0,class:!0});var Y=y(v);q=X(Y,"Refresh all defintions"),Y.forEach(u),x.forEach(u),w=P(F),f=b(F,"DIV",{class:!0});var W=y(f);g=b(W,"BUTTON",{type:!0,class:!0});var L=y(g);k=X(L,"Clear words"),L.forEach(u),W.forEach(u),F.forEach(u),I=P(E),V&&V.l(E),T=ue(),this.h()},h(){i(e,"class","options-group-title"),i(t,"type","button"),i(t,"class","btn btn-primary"),i(o,"class","option-item svelte-vbnsn7"),i(v,"type","button"),i(v,"class","btn btn-primary"),i(c,"class","option-item svelte-vbnsn7"),i(g,"type","button"),i(g,"class","btn btn-danger"),i(f,"class","option-item svelte-vbnsn7"),i(a,"class","options-group")},m(E,$){U(E,e,$),p(e,l),U(E,s,$),U(E,a,$),p(a,o),p(o,t),p(t,d),p(a,r),p(a,c),p(c,v),p(v,q),p(a,w),p(a,f),p(f,g),p(g,k),U(E,I,$),V&&V.m(E,$),U(E,T,$),O=!0,B||(C=[K(t,"click",n[6]),K(v,"click",n[7]),K(g,"click",n[3])],B=!0)},p(E,[$]){E[1]?V?(V.p(E,$),$&2&&H(V,1)):(V=ot(E),V.c(),H(V,1),V.m(T.parentNode,T)):V&&(De(),Q(V,1,1,()=>{V=null}),Te())},i(E){O||(H(V),O=!0)},o(E){Q(V),O=!1},d(E){E&&u(e),E&&u(s),E&&u(a),E&&u(I),V&&V.d(E),E&&u(T),B=!1,_e(C)}}}function Pt(n,e,l){let{key:s}=e,a,o;function t(){if(!window.confirm("This will clear all words in your word list.  Continue?"))return;const f=bt(s);Pe(f)}function d(f){function g(B,C){return B.dict_def=C.dict_def,!0}if(!f)return;let k=$e(f);if(!window.confirm(`Refresh all ${k.words.length} words?

This will overwrite existing definitions.`))return;let I=0,T=[],O=k.words.map(async B=>{try{const C=await Ze.default.lookup(B.word);C?(B.dict_def=C,I+=1):T.push(B.word)}finally{B.cache=xe(B),et(k,B,g)}});Promise.allSettled(O).then(()=>{T.length==0?(l(1,a=`Updated ${I} words`),l(2,o="info")):(l(2,o="error"),l(1,a=`Failed to update ${T.length} words.  ${T}`)),Pe(k)})}function r(f){function g(B,C){return B.dict_def=C.dict_def,!0}if(!f||!window.confirm("Lookup definitions for words without definitions?"))return;let k=$e(f),I=0,T=[],O=k.words.filter(B=>B.dict_def===void 0).map(async B=>{try{const C=await Ze.default.lookup(B.word);C?(B.dict_def=C,I+=1):T.push(B.word)}finally{B.cache=xe(B),et(k,B,g)}});Promise.allSettled(O).then(()=>{T.length==0?(l(1,a=`Updated ${I} words`),l(2,o="info")):(l(2,o="error"),l(1,a=`Failed to update ${T.length} words.<br>${T}`)),Pe(k)})}const c=()=>r(s),v=()=>d(s);function q(f){a=f,l(1,a)}function w(f){a=f,l(1,a)}return n.$$set=f=>{"key"in f&&l(0,s=f.key)},[s,a,o,t,d,r,c,v,q,w]}class $t extends Ee{constructor(e){super(),Ie(this,e,Pt,Rt,Be,{key:0})}}function Mt(n){let e,l,s,a,o,t,d;return e=new vt({props:{current:"options"}}),a=new Vt({props:{key:"words"}}),t=new $t({props:{key:"words"}}),{c(){se(e.$$.fragment),l=R(),s=m("div"),se(a.$$.fragment),o=R(),se(t.$$.fragment),this.h()},l(r){ne(e.$$.fragment,r),l=P(r),s=b(r,"DIV",{class:!0});var c=y(s);ne(a.$$.fragment,c),o=P(c),ne(t.$$.fragment,c),c.forEach(u),this.h()},h(){i(s,"class","options-page")},m(r,c){re(e,r,c),U(r,l,c),U(r,s,c),re(a,s,null),p(s,o),re(t,s,null),d=!0},p:qe,i(r){d||(H(e.$$.fragment,r),H(a.$$.fragment,r),H(t.$$.fragment,r),d=!0)},o(r){Q(e.$$.fragment,r),Q(a.$$.fragment,r),Q(t.$$.fragment,r),d=!1},d(r){ae(e,r),r&&u(l),r&&u(s),ae(a),ae(t)}}}class jt extends Ee{constructor(e){super(),Ie(this,e,null,Mt,Be,{})}}export{jt as default};
