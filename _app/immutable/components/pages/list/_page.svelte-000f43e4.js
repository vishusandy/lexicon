import{S as de,i as fe,s as ue,k as m,q as K,a as O,l as w,m as T,r as Q,h as u,c as R,n as i,K as Me,b as G,G as d,T as Be,M as P,N as Ye,B as ae,P as we,Q as Se,U as et,V as tt,I as rt,J as lt,w as se,x as oe,y as ne,u as Xe,f as J,g as Ze,t as $,d as $e,O as st,z as ie,o as ot,j as nt,L as Ue,R as it,e as Ve}from"../../../chunks/index-a0aa925d.js";import{b as at}from"../../../chunks/paths-b4419565.js";import{S as ge,e as Te,f as Le,r as me,l as dt,b as Ie,s as Oe,g as We,h as ft,c as ee,i as ut,j as De,A as ct,n as Re,k as _t}from"../../../chunks/words-a574d428.js";import{T as ht,e as Ce,D as pt,a as vt}from"../../../chunks/DictDef-ab66b634.js";function gt(e){let l,n,r,s,t,a,g,c,p,b,q,k,L,z,N,A,F,W;return{c(){l=m("div"),n=m("form"),r=m("select"),s=m("option"),t=K("Word"),g=m("option"),c=K("Date"),q=O(),k=m("input"),z=O(),N=m("label"),this.h()},l(y){l=w(y,"DIV",{class:!0});var _=T(l);n=w(_,"FORM",{});var C=T(n);r=w(C,"SELECT",{id:!0,title:!0,class:!0});var M=T(r);s=w(M,"OPTION",{});var f=T(s);t=Q(f,"Word"),f.forEach(u),g=w(M,"OPTION",{});var E=T(g);c=Q(E,"Date"),E.forEach(u),M.forEach(u),q=R(C),k=w(C,"INPUT",{id:!0,type:!0,title:!0,class:!0}),z=R(C),N=w(C,"LABEL",{for:!0,class:!0,title:!0}),T(N).forEach(u),C.forEach(u),_.forEach(u),this.h()},h(){s.__value="word",s.value=s.__value,s.selected=a=e[0]==ge.Word,g.__value="id",g.value=g.__value,g.selected=p=e[0]==ge.Id,i(r,"id",b=e[1]+"-sort-by"),i(r,"title","Sort by"),i(r,"class","svelte-x4vm2d"),e[0]===void 0&&Me(()=>e[7].call(r)),i(k,"id",L=e[1]+"-sort-order"),i(k,"type","checkbox"),i(k,"title",e[3]),i(k,"class","sort-checkbox form-check-input svelte-x4vm2d"),i(N,"for",A=e[1]+"-sort-order"),i(N,"class","sort-checkbox-label form-check-label svelte-x4vm2d"),i(N,"title",e[3]),i(l,"class","sort-container svelte-x4vm2d")},m(y,_){G(y,l,_),d(l,n),d(n,r),d(r,s),d(s,t),d(r,g),d(g,c),Be(r,e[0]),d(n,q),d(n,k),k.checked=e[2],d(n,z),d(n,N),F||(W=[P(r,"change",e[7]),P(r,"change",e[4]),P(k,"change",e[8]),P(k,"change",e[4]),P(n,"submit",Ye(e[6]))],F=!0)},p(y,[_]){_&1&&a!==(a=y[0]==ge.Word)&&(s.selected=a),_&1&&p!==(p=y[0]==ge.Id)&&(g.selected=p),_&2&&b!==(b=y[1]+"-sort-by")&&i(r,"id",b),_&1&&Be(r,y[0]),_&2&&L!==(L=y[1]+"-sort-order")&&i(k,"id",L),_&8&&i(k,"title",y[3]),_&4&&(k.checked=y[2]),_&2&&A!==(A=y[1]+"-sort-order")&&i(N,"for",A),_&8&&i(N,"title",y[3])},i:ae,o:ae,d(y){y&&u(l),F=!1,we(W)}}}function mt(e,l,n){const r=Se();let{key:s}=l,{sort_by:t}=l,{sort_order:a}=l,g,c=a===Te.Desc;function p(L){r("updateSort",{sort_by:t,sort_order:a,key:s})}function b(L){et.call(this,e,L)}function q(){t=tt(this),n(0,t)}function k(){c=this.checked,n(2,c)}return e.$$set=L=>{"key"in L&&n(1,s=L.key),"sort_by"in L&&n(0,t=L.sort_by),"sort_order"in L&&n(5,a=L.sort_order)},e.$$.update=()=>{e.$$.dirty&4&&n(5,a=c?Te.Desc:Te.Asc),e.$$.dirty&4&&n(3,g=c?"Descending sort order":"Ascending sort order")},[t,s,c,g,p,a,b,q,k]}class wt extends de{constructor(l){super(),fe(this,l,mt,gt,ue,{key:1,sort_by:0,sort_order:5})}}function je(e){let l,n;return l=new pt({props:{dict:e[0].dict_def}}),{c(){se(l.$$.fragment)},l(r){oe(l.$$.fragment,r)},m(r,s){ne(l,r,s),n=!0},p(r,s){const t={};s&1&&(t.dict=r[0].dict_def),l.$set(t)},i(r){n||(J(l.$$.fragment,r),n=!0)},o(r){$(l.$$.fragment,r),n=!1},d(r){ie(l,r)}}}function Ge(e){let l=e[0].def+"",n;return{c(){n=K(l)},l(r){n=Q(r,l)},m(r,s){G(r,n,s)},p(r,s){s&1&&l!==(l=r[0].def+"")&&Xe(n,l)},d(r){r&&u(n)}}}function bt(e){let l,n,r,s,t,a,g,c,p,b,q,k,L,z,N,A,F,W,y=e[0].word+"",_,C,M,f,E,S,V,H,o,I,h,U,te,X,re,be,ke,Z,ye,ce,_e,Y,Ee,He,B=e[0].dict_def&&je(e),j=e[0].def&&Ge(e);function xe(v){e[18](v)}let qe={key:e[1]};return e[0].tags!==void 0&&(qe.tags=e[0].tags),Z=new ht({props:qe}),rt.push(()=>lt(Z,"tags",xe,e[0].tags)),Z.$on("updateTags",e[6]),{c(){l=m("hr"),n=O(),r=m("li"),s=m("button"),t=m("i"),a=O(),g=m("button"),c=m("i"),p=O(),b=m("input"),k=O(),L=m("label"),N=O(),A=m("details"),F=m("summary"),W=m("dfn"),_=K(y),M=O(),f=m("div"),E=O(),S=m("div"),B&&B.c(),V=O(),H=m("span"),o=K("Notes:"),I=O(),h=m("div"),j&&j.c(),te=O(),X=m("div"),re=m("span"),be=K("Tags:"),ke=O(),se(Z.$$.fragment),this.h()},l(v){l=w(v,"HR",{class:!0}),n=R(v),r=w(v,"LI",{id:!0,class:!0});var D=T(r);s=w(D,"BUTTON",{class:!0});var le=T(s);t=w(le,"I",{class:!0}),T(t).forEach(u),le.forEach(u),a=R(D),g=w(D,"BUTTON",{class:!0,title:!0});var ze=T(g);c=w(ze,"I",{class:!0}),T(c).forEach(u),ze.forEach(u),p=R(D),b=w(D,"INPUT",{id:!0,title:!0,class:!0,type:!0}),k=R(D),L=w(D,"LABEL",{for:!0,class:!0}),T(L).forEach(u),N=R(D),A=w(D,"DETAILS",{class:!0});var he=T(A);F=w(he,"SUMMARY",{class:!0});var pe=T(F);W=w(pe,"DFN",{id:!0,class:!0,contenteditable:!0});var Ae=T(W);_=Q(Ae,y),Ae.forEach(u),M=R(pe),f=w(pe,"DIV",{class:!0}),T(f).forEach(u),pe.forEach(u),E=R(he),S=w(he,"DIV",{class:!0});var x=T(S);B&&B.l(x),V=R(x),H=w(x,"SPAN",{class:!0});var Ne=T(H);o=Q(Ne,"Notes:"),Ne.forEach(u),I=R(x),h=w(x,"DIV",{id:!0,class:!0,contenteditable:!0});var Fe=T(h);j&&j.l(Fe),Fe.forEach(u),te=R(x),X=w(x,"DIV",{class:!0});var ve=T(X);re=w(ve,"SPAN",{class:!0});var Pe=T(re);be=Q(Pe,"Tags:"),Pe.forEach(u),ke=R(ve),oe(Z.$$.fragment,ve),ve.forEach(u),x.forEach(u),he.forEach(u),D.forEach(u),this.h()},h(){i(l,"class","svelte-8q7lcz"),i(t,"class","fa-solid fa-xmark"),i(s,"class","remove-word-btn svelte-8q7lcz"),i(c,"class","fa-solid fa-arrows-rotate"),i(g,"class","refresh-btn svelte-8q7lcz"),i(g,"title","Refresh defintion"),i(b,"id",q=e[1]+"-fav-"+e[0].id),i(b,"title","Favorite"),i(b,"class","fav-checkbox svelte-8q7lcz"),i(b,"type","checkbox"),i(L,"for",z=e[1]+"-fav-"+e[0].id),i(L,"class","fav-label svelte-8q7lcz"),i(W,"id",C=e[1]+"-word-"+e[0].id),i(W,"class","word svelte-8q7lcz"),i(W,"contenteditable","true"),e[0].word===void 0&&Me(()=>e[14].call(W)),i(f,"class","detail-arrow svelte-8q7lcz"),i(F,"class","svelte-8q7lcz"),i(H,"class","def-label svelte-8q7lcz"),i(h,"id",U=e[1]+"-def-"+e[0].id),i(h,"class","word-definition svelte-8q7lcz"),i(h,"contenteditable","true"),e[0].def===void 0&&Me(()=>e[15].call(h)),i(re,"class","tags-label svelte-8q7lcz"),i(X,"class","tag-list svelte-8q7lcz"),i(S,"class","detail-content svelte-8q7lcz"),A.open=ce=Array.isArray(e[2])&&e[2].length>0,i(A,"class","svelte-8q7lcz"),i(r,"id",_e=e[1]+"-"+e[0].id),i(r,"class","word-item svelte-8q7lcz")},m(v,D){G(v,l,D),G(v,n,D),G(v,r,D),d(r,s),d(s,t),d(r,a),d(r,g),d(g,c),d(r,p),d(r,b),b.checked=e[0].favorite,d(r,k),d(r,L),d(r,N),d(r,A),d(A,F),d(F,W),d(W,_),e[0].word!==void 0&&(W.innerHTML=e[0].word),d(F,M),d(F,f),d(A,E),d(A,S),B&&B.m(S,null),d(S,V),d(S,H),d(H,o),d(S,I),d(S,h),j&&j.m(h,null),e[0].def!==void 0&&(h.innerHTML=e[0].def),d(S,te),d(S,X),d(X,re),d(re,be),d(X,ke),ne(Z,X,null),Y=!0,Ee||(He=[P(s,"click",e[11]),P(g,"click",e[10]),P(b,"change",e[12]),P(b,"change",e[7]),P(W,"blur",e[13]),P(W,"keydown",Ce),P(W,"input",e[14]),P(W,"click",kt),P(h,"input",e[15]),P(h,"keydown",Ce),P(h,"blur",e[16]),P(h,"focus",e[17])],Ee=!0)},p(v,[D]){(!Y||D&3&&q!==(q=v[1]+"-fav-"+v[0].id))&&i(b,"id",q),D&1&&(b.checked=v[0].favorite),(!Y||D&3&&z!==(z=v[1]+"-fav-"+v[0].id))&&i(L,"for",z),(!Y||D&1)&&y!==(y=v[0].word+"")&&Xe(_,y),(!Y||D&3&&C!==(C=v[1]+"-word-"+v[0].id))&&i(W,"id",C),D&1&&v[0].word!==W.innerHTML&&(W.innerHTML=v[0].word),v[0].dict_def?B?(B.p(v,D),D&1&&J(B,1)):(B=je(v),B.c(),J(B,1),B.m(S,V)):B&&(Ze(),$(B,1,1,()=>{B=null}),$e()),v[0].def?j?j.p(v,D):(j=Ge(v),j.c(),j.m(h,null)):j&&(j.d(1),j=null),(!Y||D&3&&U!==(U=v[1]+"-def-"+v[0].id))&&i(h,"id",U),D&1&&v[0].def!==h.innerHTML&&(h.innerHTML=v[0].def);const le={};D&2&&(le.key=v[1]),!ye&&D&1&&(ye=!0,le.tags=v[0].tags,st(()=>ye=!1)),Z.$set(le),(!Y||D&4&&ce!==(ce=Array.isArray(v[2])&&v[2].length>0))&&(A.open=ce),(!Y||D&3&&_e!==(_e=v[1]+"-"+v[0].id))&&i(r,"id",_e)},i(v){Y||(J(B),J(Z.$$.fragment,v),Y=!0)},o(v){$(B),$(Z.$$.fragment,v),Y=!1},d(v){v&&u(l),v&&u(n),v&&u(r),B&&B.d(),j&&j.d(),ie(Z),Ee=!1,we(He)}}}const kt=e=>{e.preventDefault()};function yt(e,l,n){const r=Se();let{key:s}=l,{item:t}=l,{highlight:a}=l;function g(){return s+"-def-"+t.id}function c(){return document.getElementById(s+"-word-"+t.id)}function p(){return document.getElementById(`${s}-${t.id}`)}function b(){return document.getElementById(g())}ot(()=>{const o=c();o&&z(o)}),nt(()=>{F()});function q(o){const I=c();if(o.word==""){L(o)||I&&n(0,t.word=I.title,t);return}I?I.title!=o.word&&(z(I),r("updateWord",{word:o,key:s})):r("updateWord",{word:o,key:s})}function k(){var o;n(0,t.def=(o=t.def)==null?void 0:o.replaceAll("<br>",""),t),r("updateDefinition",{word:t,key:s})}function L(o){return window.confirm("Delete word?")?(r("deleteWord",{word:o,key:s}),!0):!1}function z(o){o.title=t.word}function N(){r("updateWordTags",{word:t,key:s})}function A(){r("updateFavorite",{word:t,key:s})}function F(){if(W(),a.length===0)return;const o=b(),I=p(),h=c();h&&(h.innerHTML=Le(h.innerHTML,a)),o&&(o.innerHTML=Le(o.innerHTML,a)),I&&(I.querySelectorAll(".pos, .def, .syn, .ant").forEach(U=>U.innerHTML=Le(U.innerHTML,a)),I.querySelectorAll(".tag").forEach(U=>{var te;a.some(X=>X=="#"+U.innerHTML.toLocaleLowerCase())&&((te=U.parentElement)==null||te.classList.add("highlight-tag"))}))}function W(){const o=b(),I=p(),h=c();h&&(h.innerHTML=me(h.innerHTML)),o&&(o.innerHTML=me(o.innerHTML)),I&&I.querySelectorAll(".pos, .def, .syn, .ant").forEach(U=>U.innerHTML=me(U.innerHTML))}function y(){r("refreshWord",{word:t,key:s})}const _=()=>L(t);function C(){t.favorite=this.checked,n(0,t)}const M=()=>q(t);function f(){t.word=this.innerHTML,n(0,t)}function E(){t.def=this.innerHTML,n(0,t)}const S=()=>{k(),F()},V=()=>W();function H(o){e.$$.not_equal(t.tags,o)&&(t.tags=o,n(0,t))}return e.$$set=o=>{"key"in o&&n(1,s=o.key),"item"in o&&n(0,t=o.item),"highlight"in o&&n(2,a=o.highlight)},[t,s,a,q,k,L,N,A,F,W,y,_,C,M,f,E,S,V,H]}class Et extends de{constructor(l){super(),fe(this,l,yt,bt,ue,{key:1,item:0,highlight:2})}}function Tt(e){let l,n,r,s,t,a,g,c;return{c(){l=m("div"),n=m("form"),r=m("div"),s=m("i"),t=O(),a=m("input"),this.h()},l(p){l=w(p,"DIV",{class:!0});var b=T(l);n=w(b,"FORM",{});var q=T(n);r=w(q,"DIV",{class:!0});var k=T(r);s=w(k,"I",{class:!0}),T(s).forEach(u),k.forEach(u),t=R(q),a=w(q,"INPUT",{placeholder:!0,class:!0}),q.forEach(u),b.forEach(u),this.h()},h(){i(s,"class","fa-solid fa-magnifying-glass"),i(r,"class","search-icon svelte-yxwh8w"),i(a,"placeholder","filter"),i(a,"class","search-input form-control svelte-yxwh8w"),i(l,"class","search-container svelte-yxwh8w")},m(p,b){G(p,l,b),d(l,n),d(n,r),d(r,s),d(n,t),d(n,a),Ue(a,e[0]),g||(c=[P(a,"input",e[4]),P(a,"input",e[1]),P(a,"keydown",e[2]),P(n,"submit",Ye(e[1]))],g=!0)},p(p,[b]){b&1&&a.value!==p[0]&&Ue(a,p[0])},i:ae,o:ae,d(p){p&&u(l),g=!1,we(c)}}}function Lt(e,l,n){const r=Se();let{key:s}=l,t;function a(p){r("updateFilter",{search:t,key:s})}function g(p){vt(p)&&(n(0,t=""),r("updateFilter",{search:t,key:s}))}function c(){t=this.value,n(0,t)}return e.$$set=p=>{"key"in p&&n(3,s=p.key)},[t,a,g,s,c]}class It extends de{constructor(l){super(),fe(this,l,Lt,Tt,ue,{key:3})}}function Je(e,l,n){const r=e.slice();return r[25]=l[n],r}function Ke(e){let l;function n(t,a){return t[1]?Dt:Wt}let r=n(e),s=r(e);return{c(){s.c(),l=Ve()},l(t){s.l(t),l=Ve()},m(t,a){s.m(t,a),G(t,l,a)},p(t,a){r!==(r=n(t))&&(s.d(1),s=r(t),s&&(s.c(),s.m(l.parentNode,l)))},d(t){s.d(t),t&&u(l)}}}function Wt(e){let l,n;return{c(){l=m("p"),n=K("No words have been added")},l(r){l=w(r,"P",{});var s=T(l);n=Q(s,"No words have been added"),s.forEach(u)},m(r,s){G(r,l,s),d(l,n)},d(r){r&&u(l)}}}function Dt(e){let l,n;return{c(){l=m("p"),n=K("No matching words")},l(r){l=w(r,"P",{});var s=T(l);n=Q(s,"No matching words"),s.forEach(u)},m(r,s){G(r,l,s),d(l,n)},d(r){r&&u(l)}}}function Qe(e){let l,n;return l=new Et({props:{key:e[0],item:e[25],highlight:e[4]}}),l.$on("updateWord",e[18]),l.$on("updateDefinition",e[19]),l.$on("deleteWord",e[20]),l.$on("updateWordTags",e[21]),l.$on("updateFavorite",e[22]),l.$on("refreshWord",e[23]),{c(){se(l.$$.fragment)},l(r){oe(l.$$.fragment,r)},m(r,s){ne(l,r,s),n=!0},p(r,s){const t={};s&1&&(t.key=r[0]),s&20&&(t.item=r[25]),s&16&&(t.highlight=r[4]),l.$set(t)},i(r){n||(J(l.$$.fragment,r),n=!0)},o(r){$(l.$$.fragment,r),n=!1},d(r){ie(l,r)}}}function Mt(e){let l,n,r,s,t,a,g,c,p,b,q,k,L,z,N,A,F,W;n=new It({props:{key:e[0]}}),n.$on("updateFilter",e[15]),k=new wt({props:{key:e[0],sort_by:e[2].sort_by,sort_order:e[2].sort_order}}),k.$on("updateSort",e[16]);let y=e[2].words.filter(e[17]),_=[];for(let f=0;f<y.length;f+=1)_[f]=Qe(Je(e,y,f));const C=f=>$(_[f],1,1,()=>{_[f]=null});let M=null;return y.length||(M=Ke(e)),{c(){l=m("div"),se(n.$$.fragment),r=O(),s=m("div"),t=m("div"),a=m("button"),g=K("Show"),c=K("/"),p=m("button"),b=K("Hide"),q=O(),se(k.$$.fragment),L=O(),z=m("ul");for(let f=0;f<_.length;f+=1)_[f].c();M&&M.c(),this.h()},l(f){l=w(f,"DIV",{class:!0});var E=T(l);oe(n.$$.fragment,E),r=R(E),s=w(E,"DIV",{class:!0});var S=T(s);t=w(S,"DIV",{class:!0});var V=T(t);a=w(V,"BUTTON",{class:!0});var H=T(a);g=Q(H,"Show"),H.forEach(u),c=Q(V,"/"),p=w(V,"BUTTON",{class:!0});var o=T(p);b=Q(o,"Hide"),o.forEach(u),V.forEach(u),q=R(S),oe(k.$$.fragment,S),S.forEach(u),E.forEach(u),L=R(f),z=w(f,"UL",{class:!0});var I=T(z);for(let h=0;h<_.length;h+=1)_[h].l(I);M&&M.l(I),I.forEach(u),this.h()},h(){i(a,"class","svelte-1o6x0zo"),i(p,"class","svelte-1o6x0zo"),i(t,"class","show-hide svelte-1o6x0zo"),i(s,"class","options-bar svelte-1o6x0zo"),i(l,"class","sticky-search-bar list-group-item svelte-1o6x0zo"),i(z,"class",N="word-group "+e[3]+" svelte-1o6x0zo")},m(f,E){G(f,l,E),ne(n,l,null),d(l,r),d(l,s),d(s,t),d(t,a),d(a,g),d(t,c),d(t,p),d(p,b),d(s,q),ne(k,s,null),G(f,L,E),G(f,z,E);for(let S=0;S<_.length;S+=1)_[S].m(z,null);M&&M.m(z,null),A=!0,F||(W=[P(a,"click",e[5]),P(p,"click",e[6])],F=!0)},p(f,[E]){const S={};E&1&&(S.key=f[0]),n.$set(S);const V={};if(E&1&&(V.key=f[0]),E&4&&(V.sort_by=f[2].sort_by),E&4&&(V.sort_order=f[2].sort_order),k.$set(V),E&8087){y=f[2].words.filter(f[17]);let H;for(H=0;H<y.length;H+=1){const o=Je(f,y,H);_[H]?(_[H].p(o,E),J(_[H],1)):(_[H]=Qe(o),_[H].c(),J(_[H],1),_[H].m(z,null))}for(Ze(),H=y.length;H<_.length;H+=1)C(H);$e(),!y.length&&M?M.p(f,E):y.length?M&&(M.d(1),M=null):(M=Ke(f),M.c(),M.m(z,null))}(!A||E&8&&N!==(N="word-group "+f[3]+" svelte-1o6x0zo"))&&i(z,"class",N)},i(f){if(!A){J(n.$$.fragment,f),J(k.$$.fragment,f);for(let E=0;E<y.length;E+=1)J(_[E]);A=!0}},o(f){$(n.$$.fragment,f),$(k.$$.fragment,f),_=_.filter(Boolean);for(let E=0;E<_.length;E+=1)$(_[E]);A=!1},d(f){f&&u(l),ie(n),ie(k),f&&u(L),f&&u(z),it(_,f),M&&M.d(),F=!1,we(W)}}}function St(e,l,n){let r,{key:s="words"}=l,t=dt(s);Ie(t),t=t,console.log(t);let a="",g="",c;c=new URLSearchParams(window.location.search).get("word"),c&&Oe(parseInt(c),s);function p(){t.words.filter(o=>We(r,o)).forEach(o=>{var h;const I=(h=document.getElementById(`${s}-${o.id}`))==null?void 0:h.querySelector("details");I&&(I.open=!0)})}function b(){t.words.filter(o=>We(r,o)).forEach(o=>{var h;const I=(h=document.getElementById(`${s}-${o.id}`))==null?void 0:h.querySelector("details");I&&(I.open=!1)})}function q(o){o.key==s&&(ft(t,o.word.id,o.word.word)?(Ie(t),ee(t),n(2,t),Oe(o.word.id,s)):console.log("word update failed"))}function k(o){if(o.key!=s||!o.word.def)return;let I=me(o.word.def.trim());ut(t,o.word.id,I)?ee(t):console.log("definition update failed")}function L(o){function I(h,U){return h.tags=U.tags,h.cache=Re(h),!0}o.key==s&&(De(t,o.word,I),ee(t),n(2,t))}function z(o){function I(h,U){return h.favorite=U.favorite,!0}o.key==s&&(De(t,o.word,I),ee(t),n(2,t))}function N(o){function I(h,U){return h.dict_def=U.dict_def,!0}o.key==s&&(console.log("refreshing definition for "+o.word),ct.default.lookup(o.word.word).then(h=>{console.log("update received"),h&&(console.log("update successful"),o.word.dict_def=h,o.word.cache=Re(o.word),De(t,o.word,I),ee(t),n(2,t))}))}function A(o){o.key==s&&(_t(t,o.word.id)?(ee(t),n(2,t)):console.log("remove word failed"))}function F(o){o.key==s&&(n(2,t.sort_by=o.sort_by,t),n(2,t.sort_order=o.sort_order,t),Ie(t),ee(t))}function W(o){o.key==s&&n(1,a=o.search.toLocaleLowerCase())}const y=o=>{W(o.detail)},_=o=>F(o.detail),C=o=>We(r,o),M=o=>q(o.detail),f=o=>k(o.detail),E=o=>A(o.detail),S=o=>L(o.detail),V=o=>z(o.detail),H=o=>N(o.detail);return e.$$set=o=>{"key"in o&&n(0,s=o.key)},e.$$.update=()=>{e.$$.dirty&2&&n(4,r=a.split(" ").filter(o=>o.length>0)),e.$$.dirty&2&&n(3,g=a===""?"":"full-defs")},[s,a,t,g,r,p,b,q,k,L,z,N,A,F,W,y,_,C,M,f,E,S,V,H]}class Ht extends de{constructor(l){super(),fe(this,l,St,Mt,ue,{key:0})}}function qt(e){let l,n,r,s,t,a,g;return a=new Ht({props:{key:"words"}}),{c(){l=m("nav"),n=m("a"),r=K("Add words"),s=O(),t=m("div"),se(a.$$.fragment),this.h()},l(c){l=w(c,"NAV",{class:!0});var p=T(l);n=w(p,"A",{href:!0});var b=T(n);r=Q(b,"Add words"),b.forEach(u),p.forEach(u),s=R(c),t=w(c,"DIV",{class:!0});var q=T(t);oe(a.$$.fragment,q),q.forEach(u),this.h()},h(){i(n,"href",at+"/add"),i(l,"class","main"),i(t,"class","list-vocab-container")},m(c,p){G(c,l,p),d(l,n),d(n,r),G(c,s,p),G(c,t,p),ne(a,t,null),g=!0},p:ae,i(c){g||(J(a.$$.fragment,c),g=!0)},o(c){$(a.$$.fragment,c),g=!1},d(c){c&&u(l),c&&u(s),c&&u(t),ie(a)}}}class Pt extends de{constructor(l){super(),fe(this,l,null,qt,ue,{})}}export{Pt as default};
