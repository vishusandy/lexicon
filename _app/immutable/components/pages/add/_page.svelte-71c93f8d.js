import{S as Le,i as Ne,s as Pe,I as Me,J as He,k as g,q,a as P,w as de,l as b,m as w,r as W,h as v,c as S,x as le,n as d,K as $e,b as ie,G as r,L as qe,y as oe,M as C,N as Fe,O as Oe,f as z,g as Re,t as X,d as Ue,z as ne,P as ze,u as Se,A as Ge,B as Je}from"../../../chunks/index-d8102d1a.js";import{N as Ke}from"../../../chunks/Nav-11fb0fa3.js";import{b as fe}from"../../../chunks/paths-b4419565.js";import{T as je,D as Qe,e as Xe}from"../../../chunks/DictDef-74b4507d.js";import{l as Ye,A as We,a as Ze,b as xe,c as et,m as tt,t as it,w as st}from"../../../chunks/words-2bbd4318.js";function Be(a){let e,s;return e=new Qe({props:{dict:a[5],scheme:"dark"}}),{c(){de(e.$$.fragment)},l(i){le(e.$$.fragment,i)},m(i,n){oe(e,i,n),s=!0},p(i,n){const l={};n&32&&(l.dict=i[5]),e.$set(l)},i(i){s||(z(e.$$.fragment,i),s=!0)},o(i){X(e.$$.fragment,i),s=!1},d(i){ne(e,i)}}}function rt(a){let e,s,i,n=a[4].word+"",l,h,_;return{c(){e=g("div"),s=q("Added word "),i=g("a"),l=q(n),this.h()},l(p){e=b(p,"DIV",{id:!0,class:!0});var t=w(e);s=W(t,"Added word "),i=b(t,"A",{href:!0});var c=w(i);l=W(c,n),c.forEach(v),t.forEach(v),this.h()},h(){d(i,"href",h=fe+"/list?word="+a[4].id),d(e,"id",_=a[0]+"-added-alert"),d(e,"class","added-alert alert alert-success svelte-1iif78i")},m(p,t){ie(p,e,t),r(e,s),r(e,i),r(i,l)},p(p,t){t&16&&n!==(n=p[4].word+"")&&Se(l,n),t&16&&h!==(h=fe+"/list?word="+p[4].id)&&d(i,"href",h),t&1&&_!==(_=p[0]+"-added-alert")&&d(e,"id",_)},d(p){p&&v(e)}}}function at(a){let e,s,i,n,l,h=a[1].trim()+"",_,p,t;return{c(){e=g("div"),s=g("p"),i=q("Word "),n=g("a"),l=g("dfn"),_=q(h),t=q(" exists"),this.h()},l(c){e=b(c,"DIV",{class:!0});var E=w(e);s=b(E,"P",{class:!0});var k=w(s);i=W(k,"Word "),n=b(k,"A",{href:!0});var D=w(n);l=b(D,"DFN",{class:!0});var B=w(l);_=W(B,h),B.forEach(v),D.forEach(v),t=W(k," exists"),k.forEach(v),E.forEach(v),this.h()},h(){d(l,"class","word"),d(n,"href",p=fe+"/list?word="+a[6].id),d(s,"class","svelte-1iif78i"),d(e,"class","duplicate-alert alert alert-danger svelte-1iif78i")},m(c,E){ie(c,e,E),r(e,s),r(s,i),r(s,n),r(n,l),r(l,_),r(s,t)},p(c,E){E&2&&h!==(h=c[1].trim()+"")&&Se(_,h),E&64&&p!==(p=fe+"/list?word="+c[6].id)&&d(n,"href",p)},d(c){c&&v(e)}}}function dt(a){let e,s,i,n,l,h,_,p,t,c,E,k,D,B,Y,T,R,G,L,Z,x,$,F,N,ee,J,K,M,te,m,o,I,V,se,ue,U,j,ce,_e,re,H,me,ge;function Ce(f){a[14](f)}let be={key:a[0]};a[3]!==void 0&&(be.tags=a[3]),N=new je({props:be}),Me.push(()=>He(N,"tags",Ce,a[3]));let y=a[5]&&Be(a);function we(f,u){if(f[6])return at;if(f[4])return rt}let Q=we(a),A=Q&&Q(a);return{c(){e=g("form"),s=g("div"),i=g("label"),n=q("Word"),l=g("span"),h=q("*"),p=P(),t=g("input"),E=P(),k=g("div"),D=g("div"),B=q("Notes"),Y=P(),T=g("div"),G=P(),L=g("div"),Z=q("Tags"),x=P(),$=g("div"),F=g("div"),de(N.$$.fragment),J=P(),y&&y.c(),K=P(),M=g("div"),A&&A.c(),te=P(),m=g("div"),o=g("button"),I=q("Add Word "),V=g("br"),ue=P(),U=g("div"),j=g("span"),ce=q("*"),_e=q(" denotes a required field"),this.h()},l(f){e=b(f,"FORM",{id:!0,class:!0});var u=w(e);s=b(u,"DIV",{class:!0});var O=w(s);i=b(O,"LABEL",{for:!0,class:!0,title:!0});var ve=w(i);n=W(ve,"Word"),l=b(ve,"SPAN",{class:!0});var Ee=w(l);h=W(Ee,"*"),Ee.forEach(v),ve.forEach(v),p=S(O),t=b(O,"INPUT",{id:!0,type:!0,class:!0}),O.forEach(v),E=S(u),k=b(u,"DIV",{class:!0});var ae=w(k);D=b(ae,"DIV",{class:!0});var ye=w(D);B=W(ye,"Notes"),ye.forEach(v),Y=S(ae),T=b(ae,"DIV",{contenteditable:!0,id:!0,class:!0}),w(T).forEach(v),ae.forEach(v),G=S(u),L=b(u,"DIV",{class:!0});var ke=w(L);Z=W(ke,"Tags"),ke.forEach(v),x=S(u),$=b(u,"DIV",{class:!0});var Ie=w($);F=b(Ie,"DIV",{class:!0});var De=w(F);le(N.$$.fragment,De),De.forEach(v),Ie.forEach(v),J=S(u),y&&y.l(u),K=S(u),M=b(u,"DIV",{class:!0});var Te=w(M);A&&A.l(Te),Te.forEach(v),te=S(u),m=b(u,"DIV",{id:!0,class:!0});var pe=w(m);o=b(pe,"BUTTON",{type:!0,class:!0});var Ae=w(o);I=W(Ae,"Add Word "),Ae.forEach(v),V=b(pe,"BR",{}),pe.forEach(v),ue=S(u),U=b(u,"DIV",{class:!0});var he=w(U);j=b(he,"SPAN",{class:!0});var Ve=w(j);ce=W(Ve,"*"),Ve.forEach(v),_e=W(he," denotes a required field"),he.forEach(v),u.forEach(v),this.h()},h(){d(l,"class","required svelte-1iif78i"),d(i,"for",_=a[0]+"-add-input"),d(i,"class","form-label"),d(i,"title","required"),d(t,"id",c=a[0]+"-add-input"),t.required=!0,d(t,"type","text"),d(t,"class","word form-control svelte-1iif78i"),t.autofocus=!0,d(s,"class","mb-3"),d(D,"class","label form-label svelte-1iif78i"),d(T,"contenteditable","true"),d(T,"id",R=a[0]+"-add-def"),d(T,"class","def form-control svelte-1iif78i"),a[2]===void 0&&$e(()=>a[13].call(T)),d(k,"class","mb-3"),d(L,"class","label svelte-1iif78i"),d(F,"class","tag-list svelte-1iif78i"),d($,"class","tag-container svelte-1iif78i"),d(M,"class","alert-box svelte-1iif78i"),d(o,"type","submit"),d(o,"class","add btn btn-primary svelte-1iif78i"),d(m,"id",se=a[0]+"-add-container"),d(m,"class","add-container svelte-1iif78i"),d(j,"class","required svelte-1iif78i"),d(U,"class","required-description svelte-1iif78i"),d(e,"id",re=a[0]+"-add-form"),d(e,"class","add-form-container mt-4 svelte-1iif78i")},m(f,u){ie(f,e,u),r(e,s),r(s,i),r(i,n),r(i,l),r(l,h),r(s,p),r(s,t),qe(t,a[1]),r(e,E),r(e,k),r(k,D),r(D,B),r(k,Y),r(k,T),a[2]!==void 0&&(T.innerHTML=a[2]),r(e,G),r(e,L),r(L,Z),r(e,x),r(e,$),r($,F),oe(N,F,null),r(e,J),y&&y.m(e,null),r(e,K),r(e,M),A&&A.m(M,null),r(e,te),r(e,m),r(m,o),r(o,I),r(m,V),r(e,ue),r(e,U),r(U,j),r(j,ce),r(U,_e),H=!0,t.focus(),me||(ge=[C(t,"input",a[12]),C(t,"input",a[7]),C(t,"focusout",a[8]),C(D,"keydown",a[9]),C(D,"click",a[9]),C(T,"keydown",Xe),C(T,"input",a[13]),C(L,"keydown",a[10]),C(L,"click",a[10]),C(e,"submit",Fe(a[11]))],me=!0)},p(f,[u]){(!H||u&1&&_!==(_=f[0]+"-add-input"))&&d(i,"for",_),(!H||u&1&&c!==(c=f[0]+"-add-input"))&&d(t,"id",c),u&2&&t.value!==f[1]&&qe(t,f[1]),(!H||u&1&&R!==(R=f[0]+"-add-def"))&&d(T,"id",R),u&4&&f[2]!==T.innerHTML&&(T.innerHTML=f[2]);const O={};u&1&&(O.key=f[0]),!ee&&u&8&&(ee=!0,O.tags=f[3],Oe(()=>ee=!1)),N.$set(O),f[5]?y?(y.p(f,u),u&32&&z(y,1)):(y=Be(f),y.c(),z(y,1),y.m(e,K)):y&&(Re(),X(y,1,1,()=>{y=null}),Ue()),Q===(Q=we(f))&&A?A.p(f,u):(A&&A.d(1),A=Q&&Q(f),A&&(A.c(),A.m(M,null))),(!H||u&1&&se!==(se=f[0]+"-add-container"))&&d(m,"id",se),(!H||u&1&&re!==(re=f[0]+"-add-form"))&&d(e,"id",re)},i(f){H||(z(N.$$.fragment,f),z(y),H=!0)},o(f){X(N.$$.fragment,f),X(y),H=!1},d(f){f&&v(e),ne(N),y&&y.d(),A&&A.d(),me=!1,ze(ge)}}}let lt=!1;const ot=300;function nt(a,e,s){let{key:i}=e,n=Ye(i),l="",h="",_=[],p,t,c="",E,k,D,B;function Y(){R(),T()}function T(){B&&(clearTimeout(B),B=void 0),B=setTimeout(()=>L(),ot)}function R(){let m=l.trim().toLowerCase();s(6,E=n.words.find(I=>{var V;return((V=I.cache)==null?void 0:V.word)===m}));const o=document.getElementById(i+"-add-form");if(o){const I=o.querySelector("input.word"),V=o.querySelector("button.add");I&&I.setCustomValidity(E?"Duplicate word":""),V&&(E?(V.setCustomValidity("Duplicate word"),V.disabled=!0):(V.setCustomValidity(""),V.disabled=!1))}}function G(){return R(),E?(s(1,l=l.trim()),s(2,h=h.trim()),!0):!1}function L(){l!=""&&l!=c&&We.default.lookup(l).then(m=>{m&&l!==""?(c=l,s(5,t=m)):(s(5,t=void 0),c="")})}function Z(){G(),L()}function x(){const m=tt(h),o=_.length===0?void 0:_.map(V=>V.trim());let I={id:0,word:it(l.trim()),favorite:lt,def:m,dict_def:void 0,tags:o,cache:void 0};return st(I),I}function $(m){const o=document.getElementById(i+"-add-def");o&&o.focus()}function F(m){const o=document.getElementById(i+"-tags");o&&o.focus()}async function N(m){k&&(clearTimeout(k),k=void 0),D&&(clearTimeout(D),D=void 0),s(4,p=m),await Ge(),k=setTimeout(()=>{const o=document.getElementById(i+"-added-alert");o&&(o.style.opacity="0")},8e3),D=setTimeout(()=>{const o=document.getElementById(i+"-added-alert");o&&o.remove(),s(4,p=void 0)},12e3)}function ee(m){if(G())return!1;let o=x();N(o),!t||l!=c?We.default.lookup(o.word).then(I=>{o.dict_def=I||void 0}).finally(()=>{J(o)}):(o.dict_def=t,J(o))}function J(m){var I;Ze(n,m),xe(n),et(n);const o=(I=document.getElementById(i+"-add-form"))==null?void 0:I.querySelector("input.word");o&&o.classList.add("empty"),s(3,_=[]),s(1,l=""),s(2,h=""),s(6,E=void 0),s(5,t=void 0),c=""}function K(){l=this.value,s(1,l)}function M(){h=this.innerHTML,s(2,h)}function te(m){_=m,s(3,_)}return a.$$set=m=>{"key"in m&&s(0,i=m.key)},[i,l,h,_,p,t,E,Y,Z,$,F,ee,K,M,te]}class ft extends Le{constructor(e){super(),Ne(this,e,nt,dt,Pe,{key:0})}}function ut(a){let e,s,i,n,l,h,_,p;return e=new Ke({props:{current:"add"}}),_=new ft({props:{key:"words"}}),{c(){de(e.$$.fragment),s=P(),i=g("div"),n=g("h1"),l=q("Add Word"),h=P(),de(_.$$.fragment),this.h()},l(t){le(e.$$.fragment,t),s=S(t),i=b(t,"DIV",{class:!0});var c=w(i);n=b(c,"H1",{});var E=w(n);l=W(E,"Add Word"),E.forEach(v),h=S(c),le(_.$$.fragment,c),c.forEach(v),this.h()},h(){d(i,"class","add-vocab")},m(t,c){oe(e,t,c),ie(t,s,c),ie(t,i,c),r(i,n),r(n,l),r(i,h),oe(_,i,null),p=!0},p:Je,i(t){p||(z(e.$$.fragment,t),z(_.$$.fragment,t),p=!0)},o(t){X(e.$$.fragment,t),X(_.$$.fragment,t),p=!1},d(t){ne(e,t),t&&v(s),t&&v(i),ne(_)}}}class ht extends Le{constructor(e){super(),Ne(this,e,null,ut,Pe,{})}}export{ht as default};
