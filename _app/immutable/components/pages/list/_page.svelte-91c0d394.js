import{S as be,i as we,s as ke,k as b,q as te,a as H,l as w,m as y,r as le,h as _,c as j,n as a,K as gt,b as R,G as f,T as Je,M as U,N as ct,B as he,P as He,R as Ve,U as bt,V as wt,W as Qe,u as ye,I as _t,J as ht,w as de,x as fe,y as ue,f as K,g as Ee,t as Z,d as Te,O as pt,z as ce,o as kt,j as yt,Q as Et,L as Xe,e as ge,X as Tt,Y as qt,A as It}from"../../../chunks/index-d8102d1a.js";import{S as We,e as Pe,g as me,f as Fe,r as Ne,l as Dt,b as Ue,s as Ze,h as St,c as _e,i as At,j as Wt,k as Oe,A as Lt,n as xe,o as et}from"../../../chunks/words-2bbd4318.js";import{T as Nt,e as vt,D as Mt,a as Ht}from"../../../chunks/DictDef-c9238ab3.js";import{A as jt}from"../../../chunks/Alert-83fe2429.js";import{N as Bt}from"../../../chunks/Nav-11fb0fa3.js";function Pt(o){let e,s,r,l,t,n,d,u,c,h,v,p,I,D,O,V,z,x;return{c(){e=b("div"),s=b("form"),r=b("select"),l=b("option"),t=te("Word"),d=b("option"),u=te("Date"),v=H(),p=b("input"),D=H(),O=b("label"),this.h()},l(S){e=w(S,"DIV",{class:!0});var T=y(e);s=w(T,"FORM",{});var $=y(s);r=w($,"SELECT",{id:!0,title:!0,class:!0});var B=y(r);l=w(B,"OPTION",{});var Q=y(l);t=le(Q,"Word"),Q.forEach(_),d=w(B,"OPTION",{});var X=y(d);u=le(X,"Date"),X.forEach(_),B.forEach(_),v=j($),p=w($,"INPUT",{id:!0,type:!0,title:!0,class:!0}),D=j($),O=w($,"LABEL",{for:!0,class:!0,title:!0}),y(O).forEach(_),$.forEach(_),T.forEach(_),this.h()},h(){l.__value="word",l.value=l.__value,l.selected=n=o[0]==We.Word,d.__value="id",d.value=d.__value,d.selected=c=o[0]==We.Id,a(r,"id",h=o[1]+"-sort-by"),a(r,"title","Sort by"),a(r,"class","svelte-x4vm2d"),o[0]===void 0&&gt(()=>o[7].call(r)),a(p,"id",I=o[1]+"-sort-order"),a(p,"type","checkbox"),a(p,"title",o[3]),a(p,"class","sort-checkbox form-check-input svelte-x4vm2d"),a(O,"for",V=o[1]+"-sort-order"),a(O,"class","sort-checkbox-label form-check-label svelte-x4vm2d"),a(O,"title",o[3]),a(e,"class","sort-container svelte-x4vm2d")},m(S,T){R(S,e,T),f(e,s),f(s,r),f(r,l),f(l,t),f(r,d),f(d,u),Je(r,o[0]),f(s,v),f(s,p),p.checked=o[2],f(s,D),f(s,O),z||(x=[U(r,"change",o[7]),U(r,"change",o[4]),U(p,"change",o[8]),U(p,"change",o[4]),U(s,"submit",ct(o[6]))],z=!0)},p(S,[T]){T&1&&n!==(n=S[0]==We.Word)&&(l.selected=n),T&1&&c!==(c=S[0]==We.Id)&&(d.selected=c),T&2&&h!==(h=S[1]+"-sort-by")&&a(r,"id",h),T&1&&Je(r,S[0]),T&2&&I!==(I=S[1]+"-sort-order")&&a(p,"id",I),T&8&&a(p,"title",S[3]),T&4&&(p.checked=S[2]),T&2&&V!==(V=S[1]+"-sort-order")&&a(O,"for",V),T&8&&a(O,"title",S[3])},i:he,o:he,d(S){S&&_(e),z=!1,He(x)}}}function Ft(o,e,s){const r=Ve();let{key:l}=e,{sort_by:t}=e,{sort_order:n}=e,d,u=n===Pe.Desc;function c(I){r("updateSort",{sort_by:t,sort_order:n,key:l})}function h(I){bt.call(this,o,I)}function v(){t=wt(this),s(0,t)}function p(){u=this.checked,s(2,u)}return o.$$set=I=>{"key"in I&&s(1,l=I.key),"sort_by"in I&&s(0,t=I.sort_by),"sort_order"in I&&s(5,n=I.sort_order)},o.$$.update=()=>{o.$$.dirty&4&&s(5,n=u?Pe.Desc:Pe.Asc),o.$$.dirty&4&&s(3,d=u?"Descending sort order":"Ascending sort order")},[t,l,u,d,c,n,h,v,p]}class Ut extends be{constructor(e){super(),we(this,e,Ft,Pt,ke,{key:1,sort_by:0,sort_order:5})}}function Ot(o){let e,s,r,l,t,n,d,u,c,h;return{c(){e=b("button"),s=b("span"),r=te(o[1]),l=H(),t=b("audio"),n=b("a"),d=te("Audio"),this.h()},l(v){e=w(v,"BUTTON",{class:!0});var p=y(e);s=w(p,"SPAN",{class:!0});var I=y(s);r=le(I,o[1]),I.forEach(_),l=j(p),t=w(p,"AUDIO",{src:!0});var D=y(t);n=w(D,"A",{href:!0});var O=y(n);d=le(O,"Audio"),O.forEach(_),D.forEach(_),p.forEach(_),this.h()},h(){a(s,"class","phonetics svelte-1owj048"),a(n,"href",o[0]),Qe(t.src,u=o[0])||a(t,"src",u),a(e,"class","svelte-1owj048")},m(v,p){R(v,e,p),f(e,s),f(s,r),f(e,l),f(e,t),f(t,n),f(n,d),c||(h=U(e,"click",Vt),c=!0)},p(v,[p]){p&2&&ye(r,v[1]),p&1&&a(n,"href",v[0]),p&1&&!Qe(t.src,u=v[0])&&a(t,"src",u)},i:he,o:he,d(v){v&&_(e),c=!1,h()}}}function Vt(o){var s;const e=(s=o.target)==null?void 0:s.querySelector("audio");e&&e.play()}function $t(o,e,s){let{src:r}=e,{title:l=""}=e;return o.$$set=t=>{"src"in t&&s(0,r=t.src),"title"in t&&s(1,l=t.title)},[r,l]}class Ct extends be{constructor(e){super(),we(this,e,$t,Ot,ke,{src:0,title:1})}}function tt(o,e,s){const r=o.slice();return r[23]=e[s],r}function lt(o){let e,s,r=o[0].dict_def.audio,l=[];for(let n=0;n<r.length;n+=1)l[n]=rt(tt(o,r,n));const t=n=>Z(l[n],1,1,()=>{l[n]=null});return{c(){e=b("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var d=y(e);for(let u=0;u<l.length;u+=1)l[u].l(d);d.forEach(_),this.h()},h(){a(e,"class","audio-entries svelte-1qj4dd1")},m(n,d){R(n,e,d);for(let u=0;u<l.length;u+=1)l[u].m(e,null);s=!0},p(n,d){if(d&1){r=n[0].dict_def.audio;let u;for(u=0;u<r.length;u+=1){const c=tt(n,r,u);l[u]?(l[u].p(c,d),K(l[u],1)):(l[u]=rt(c),l[u].c(),K(l[u],1),l[u].m(e,null))}for(Ee(),u=r.length;u<l.length;u+=1)t(u);Te()}},i(n){if(!s){for(let d=0;d<r.length;d+=1)K(l[d]);s=!0}},o(n){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)Z(l[d]);s=!1},d(n){n&&_(e),Et(l,n)}}}function rt(o){let e,s;return e=new Ct({props:{src:o[23].url,title:o[23].phonetics}}),{c(){de(e.$$.fragment)},l(r){fe(e.$$.fragment,r)},m(r,l){ue(e,r,l),s=!0},p(r,l){const t={};l&1&&(t.src=r[23].url),l&1&&(t.title=r[23].phonetics),e.$set(t)},i(r){s||(K(e.$$.fragment,r),s=!0)},o(r){Z(e.$$.fragment,r),s=!1},d(r){ce(e,r)}}}function st(o){let e,s;return e=new Mt({props:{dict:o[0].dict_def}}),{c(){de(e.$$.fragment)},l(r){fe(e.$$.fragment,r)},m(r,l){ue(e,r,l),s=!0},p(r,l){const t={};l&1&&(t.dict=r[0].dict_def),e.$set(t)},i(r){s||(K(e.$$.fragment,r),s=!0)},o(r){Z(e.$$.fragment,r),s=!1},d(r){ce(e,r)}}}function ot(o){let e=o[0].def+"",s;return{c(){s=te(e)},l(r){s=le(r,e)},m(r,l){R(r,s,l)},p(r,l){l&1&&e!==(e=r[0].def+"")&&ye(s,e)},d(r){r&&_(s)}}}function Rt(o){let e,s,r,l,t,n,d,u,c,h,v,p,I,D,O,V,z,x,S,T,$,B,Q=o[0].word+"",X,re,k,M,L,A,ie,P,N,m,i,g,q,C,F,J,se,pe,ne,je,qe,Ie,oe,Be,$e,Y=o[0].dict_def&&o[0].dict_def.audio.length>0&&lt(o),G=o[0].dict_def&&st(o),ee=o[0].def&&ot(o);function mt(E){o[17](E)}let Ce={key:o[1]};return o[0].tags!==void 0&&(Ce.tags=o[0].tags),ne=new Nt({props:Ce}),_t.push(()=>ht(ne,"tags",mt,o[0].tags)),ne.$on("updateTags",o[6]),{c(){e=b("hr"),r=H(),l=b("li"),t=b("input"),d=H(),u=b("button"),c=b("i"),h=H(),v=b("button"),p=b("i"),I=H(),D=b("input"),V=H(),z=b("label"),S=H(),T=b("details"),$=b("summary"),B=b("dfn"),X=te(Q),k=H(),M=b("div"),L=H(),A=b("div"),Y&&Y.c(),ie=H(),G&&G.c(),P=H(),N=b("span"),m=te("Notes:"),i=H(),g=b("div"),ee&&ee.c(),C=H(),F=b("div"),J=b("span"),se=te("Tags:"),pe=H(),de(ne.$$.fragment),this.h()},l(E){e=w(E,"HR",{id:!0,class:!0}),r=j(E),l=w(E,"LI",{id:!0,class:!0});var W=y(l);t=w(W,"INPUT",{class:!0,type:!0,"data-id":!0}),d=j(W),u=w(W,"BUTTON",{class:!0});var ve=y(u);c=w(ve,"I",{class:!0}),y(c).forEach(_),ve.forEach(_),h=j(W),v=w(W,"BUTTON",{class:!0,title:!0});var Re=y(v);p=w(Re,"I",{class:!0}),y(p).forEach(_),Re.forEach(_),I=j(W),D=w(W,"INPUT",{id:!0,title:!0,class:!0,type:!0}),V=j(W),z=w(W,"LABEL",{for:!0,class:!0}),y(z).forEach(_),S=j(W),T=w(W,"DETAILS",{class:!0});var De=y(T);$=w(De,"SUMMARY",{class:!0});var Se=y($);B=w(Se,"DFN",{id:!0,class:!0,contenteditable:!0});var ze=y(B);X=le(ze,Q),ze.forEach(_),k=j(Se),M=w(Se,"DIV",{class:!0}),y(M).forEach(_),Se.forEach(_),L=j(De),A=w(De,"DIV",{class:!0});var ae=y(A);Y&&Y.l(ae),ie=j(ae),G&&G.l(ae),P=j(ae),N=w(ae,"SPAN",{class:!0});var Ke=y(N);m=le(Ke,"Notes:"),Ke.forEach(_),i=j(ae),g=w(ae,"DIV",{id:!0,class:!0,contenteditable:!0});var Ye=y(g);ee&&ee.l(Ye),Ye.forEach(_),C=j(ae),F=w(ae,"DIV",{class:!0});var Ae=y(F);J=w(Ae,"SPAN",{class:!0});var Ge=y(J);se=le(Ge,"Tags:"),Ge.forEach(_),pe=j(Ae),fe(ne.$$.fragment,Ae),Ae.forEach(_),ae.forEach(_),De.forEach(_),W.forEach(_),this.h()},h(){a(e,"id",s=o[1]+"-hr-"+o[0].id),a(e,"class","svelte-1qj4dd1"),a(t,"class","select-word svelte-1qj4dd1"),a(t,"type","checkbox"),a(t,"data-id",n=o[0].id),a(c,"class","fa-solid fa-xmark"),a(u,"class","remove-word-btn remove-btn svelte-1qj4dd1"),a(p,"class","fa-solid fa-arrows-rotate"),a(v,"class","refresh-btn svelte-1qj4dd1"),a(v,"title","Refresh defintion"),a(D,"id",O=o[1]+"-fav-"+o[0].id),a(D,"title","Favorite"),a(D,"class","fav-checkbox svelte-1qj4dd1"),a(D,"type","checkbox"),a(z,"for",x=o[1]+"-fav-"+o[0].id),a(z,"class","fav-label svelte-1qj4dd1"),a(B,"id",re=o[1]+"-word-"+o[0].id),a(B,"class","word svelte-1qj4dd1"),a(B,"contenteditable","true"),a(M,"class","detail-arrow svelte-1qj4dd1"),a($,"class","svelte-1qj4dd1"),a(N,"class","def-label svelte-1qj4dd1"),a(g,"id",q=o[1]+"-def-"+o[0].id),a(g,"class","word-definition svelte-1qj4dd1"),a(g,"contenteditable","true"),a(J,"class","tags-label svelte-1qj4dd1"),a(F,"class","tag-list svelte-1qj4dd1"),a(A,"class","detail-content svelte-1qj4dd1"),T.open=qe=Array.isArray(o[2])&&o[2].length>0,a(T,"class","svelte-1qj4dd1"),a(l,"id",Ie=o[1]+"-"+o[0].id),a(l,"class","word-item svelte-1qj4dd1")},m(E,W){R(E,e,W),R(E,r,W),R(E,l,W),f(l,t),f(l,d),f(l,u),f(u,c),f(l,h),f(l,v),f(v,p),f(l,I),f(l,D),D.checked=o[0].favorite,f(l,V),f(l,z),f(l,S),f(l,T),f(T,$),f($,B),f(B,X),f($,k),f($,M),f(T,L),f(T,A),Y&&Y.m(A,null),f(A,ie),G&&G.m(A,null),f(A,P),f(A,N),f(N,m),f(A,i),f(A,g),ee&&ee.m(g,null),f(A,C),f(A,F),f(F,J),f(J,se),f(F,pe),ue(ne,F,null),oe=!0,Be||($e=[U(u,"click",o[12]),U(v,"click",o[10]),U(D,"change",o[13]),U(D,"change",o[7]),U(B,"blur",o[14]),U(B,"keydown",o[11]),U(B,"click",zt),U(g,"keydown",vt),U(g,"blur",o[15]),U(g,"focus",o[16])],Be=!0)},p(E,[W]){(!oe||W&3&&s!==(s=E[1]+"-hr-"+E[0].id))&&a(e,"id",s),(!oe||W&1&&n!==(n=E[0].id))&&a(t,"data-id",n),(!oe||W&3&&O!==(O=E[1]+"-fav-"+E[0].id))&&a(D,"id",O),W&1&&(D.checked=E[0].favorite),(!oe||W&3&&x!==(x=E[1]+"-fav-"+E[0].id))&&a(z,"for",x),(!oe||W&1)&&Q!==(Q=E[0].word+"")&&ye(X,Q),(!oe||W&3&&re!==(re=E[1]+"-word-"+E[0].id))&&a(B,"id",re),E[0].dict_def&&E[0].dict_def.audio.length>0?Y?(Y.p(E,W),W&1&&K(Y,1)):(Y=lt(E),Y.c(),K(Y,1),Y.m(A,ie)):Y&&(Ee(),Z(Y,1,1,()=>{Y=null}),Te()),E[0].dict_def?G?(G.p(E,W),W&1&&K(G,1)):(G=st(E),G.c(),K(G,1),G.m(A,P)):G&&(Ee(),Z(G,1,1,()=>{G=null}),Te()),E[0].def?ee?ee.p(E,W):(ee=ot(E),ee.c(),ee.m(g,null)):ee&&(ee.d(1),ee=null),(!oe||W&3&&q!==(q=E[1]+"-def-"+E[0].id))&&a(g,"id",q);const ve={};W&2&&(ve.key=E[1]),!je&&W&1&&(je=!0,ve.tags=E[0].tags,pt(()=>je=!1)),ne.$set(ve),(!oe||W&4&&qe!==(qe=Array.isArray(E[2])&&E[2].length>0))&&(T.open=qe),(!oe||W&3&&Ie!==(Ie=E[1]+"-"+E[0].id))&&a(l,"id",Ie)},i(E){oe||(K(Y),K(G),K(ne.$$.fragment,E),oe=!0)},o(E){Z(Y),Z(G),Z(ne.$$.fragment,E),oe=!1},d(E){E&&_(e),E&&_(r),E&&_(l),Y&&Y.d(),G&&G.d(),ee&&ee.d(),ce(ne),Be=!1,He($e)}}}const zt=o=>{o.preventDefault()};function Kt(o,e,s){const r=Ve();let{key:l}=e,{item:t}=e,{highlight:n}=e;function d(){return l+"-def-"+t.id}function u(){return document.getElementById(`${l}-${t.id}`)}function c(){return document.getElementById(d())}kt(()=>{const k=me(l,t.id);k&&I(k)}),yt(()=>{const k=me(l,t.id),M=c();k&&(k.innerHTML=t.word),M&&t.def&&(M.innerHTML=t.def),V()});function h(){const k=me(l,t.id);if(k){if(s(0,t.word=k.innerHTML,t),t.word==""){p(t)||s(0,t.word=k.title,t);return}k.title!=t.word&&r("updateWord",{word:t,key:l})}}function v(){const k=c();k&&s(0,t.def=k.innerHTML.replaceAll("<br>",""),t),r("updateDefinition",{word:t,key:l})}function p(k){return window.confirm("Delete word?")?(r("deleteWord",{word:k,key:l}),!0):!1}function I(k){k.title=t.word}function D(){r("updateWordTags",{word:t,key:l})}function O(){r("updateFavorite",{word:t,key:l})}function V(){if(z(),n.length===0)return;const k=c(),M=u(),L=me(l,t.id);L&&(L.innerHTML=Fe(t.word,n)),k&&t.def&&(k.innerHTML=Fe(t.def,n)),M&&(M.querySelectorAll(".pos, .def, .syn, .ant").forEach(A=>A.innerHTML=Fe(A.innerHTML,n)),M.querySelectorAll(".tag").forEach(A=>{var ie;n.some(P=>P=="#"+A.innerHTML.toLowerCase())&&((ie=A.parentElement)==null||ie.classList.add("highlight-tag"))}))}function z(){const k=c(),M=u(),L=me(l,t.id);L&&(L.innerHTML=Ne(L.innerHTML)),k&&(k.innerHTML=Ne(k.innerHTML)),M&&M.querySelectorAll(".pos, .def, .syn, .ant").forEach(A=>A.innerHTML=Ne(A.innerHTML))}function x(){var M;const k=(M=u())==null?void 0:M.querySelector("details");k&&(k.open=!0),r("refreshWord",{word:t,key:l})}function S(k){const M=k.target;if(k.code=="Escape"&&M){M.innerHTML=M.title,M.blur();return}vt(k)}const T=()=>p(t);function $(){t.favorite=this.checked,s(0,t)}const B=()=>h(),Q=()=>{v(),V()},X=()=>z();function re(k){o.$$.not_equal(t.tags,k)&&(t.tags=k,s(0,t))}return o.$$set=k=>{"key"in k&&s(1,l=k.key),"item"in k&&s(0,t=k.item),"highlight"in k&&s(2,n=k.highlight)},[t,l,n,h,v,p,D,O,V,z,x,S,T,$,B,Q,X,re]}class Yt extends be{constructor(e){super(),we(this,e,Kt,Rt,ke,{key:1,item:0,highlight:2})}}function it(o){let e,s,r,l;return{c(){e=b("button"),s=b("i"),this.h()},l(t){e=w(t,"BUTTON",{class:!0});var n=y(e);s=w(n,"I",{class:!0}),y(s).forEach(_),n.forEach(_),this.h()},h(){a(s,"class","fa-solid fa-x"),a(e,"class","reset-btn svelte-s576z1")},m(t,n){R(t,e,n),f(e,s),r||(l=U(e,"click",o[3]),r=!0)},p:he,d(t){t&&_(e),r=!1,l()}}}function Gt(o){let e,s,r,l,t,n,d,u,c,h=o[0]&&it(o);return{c(){e=b("div"),s=b("form"),r=b("div"),l=b("i"),t=H(),n=b("input"),d=H(),h&&h.c(),this.h()},l(v){e=w(v,"DIV",{class:!0});var p=y(e);s=w(p,"FORM",{});var I=y(s);r=w(I,"DIV",{class:!0});var D=y(r);l=w(D,"I",{class:!0}),y(l).forEach(_),D.forEach(_),t=j(I),n=w(I,"INPUT",{placeholder:!0,class:!0}),d=j(I),h&&h.l(I),I.forEach(_),p.forEach(_),this.h()},h(){a(l,"class","fa-solid fa-magnifying-glass"),a(r,"class","search-icon svelte-s576z1"),a(n,"placeholder",""),a(n,"class","search-input form-control svelte-s576z1"),a(e,"class","search-container svelte-s576z1")},m(v,p){R(v,e,p),f(e,s),f(s,r),f(r,l),f(s,t),f(s,n),Xe(n,o[0]),f(s,d),h&&h.m(s,null),u||(c=[U(n,"input",o[5]),U(n,"input",o[1]),U(n,"keydown",o[2]),U(s,"submit",ct(o[1]))],u=!0)},p(v,[p]){p&1&&n.value!==v[0]&&Xe(n,v[0]),v[0]?h?h.p(v,p):(h=it(v),h.c(),h.m(s,null)):h&&(h.d(1),h=null)},i:he,o:he,d(v){v&&_(e),h&&h.d(),u=!1,He(c)}}}function Jt(o,e,s){const r=Ve();let{key:l}=e,t;function n(h){r("updateFilter",{search:t,key:l})}function d(h){Ht(h)&&(s(0,t=""),r("updateFilter",{search:t,key:l}))}function u(h){s(0,t=""),r("updateFilter",{search:t,key:l})}function c(){t=this.value,s(0,t)}return o.$$set=h=>{"key"in h&&s(4,l=h.key)},[t,n,d,u,l,c]}class Qt extends be{constructor(e){super(),we(this,e,Jt,Gt,ke,{key:4})}}function nt(o,e,s){const r=o.slice();return r[31]=e[s],r}function at(o){let e,s,r,l=o[6].length+"",t,n,d,u=o[1].words.length+"",c,h;return{c(){e=b("div"),s=te("Showing "),r=b("b"),t=te(l),n=te(" out of "),d=b("b"),c=te(u),h=te(" words"),this.h()},l(v){e=w(v,"DIV",{class:!0});var p=y(e);s=le(p,"Showing "),r=w(p,"B",{});var I=y(r);t=le(I,l),I.forEach(_),n=le(p," out of "),d=w(p,"B",{});var D=y(d);c=le(D,u),D.forEach(_),h=le(p," words"),p.forEach(_),this.h()},h(){a(e,"class","filter-count svelte-navvq7")},m(v,p){R(v,e,p),f(e,s),f(e,r),f(r,t),f(e,n),f(e,d),f(d,c),f(e,h)},p(v,p){p[0]&64&&l!==(l=v[6].length+"")&&ye(t,l),p[0]&2&&u!==(u=v[1].words.length+"")&&ye(c,u)},d(v){v&&_(e)}}}function dt(o){let e;function s(t,n){return t[2]?Zt:Xt}let r=s(o),l=r(o);return{c(){l.c(),e=ge()},l(t){l.l(t),e=ge()},m(t,n){l.m(t,n),R(t,e,n)},p(t,n){r!==(r=s(t))&&(l.d(1),l=r(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&_(e)}}}function Xt(o){let e,s;return{c(){e=b("p"),s=te("No words have been added")},l(r){e=w(r,"P",{});var l=y(e);s=le(l,"No words have been added"),l.forEach(_)},m(r,l){R(r,e,l),f(e,s)},d(r){r&&_(e)}}}function Zt(o){let e,s;return{c(){e=b("p"),s=te("No matching words")},l(r){e=w(r,"P",{});var l=y(e);s=le(l,"No matching words"),l.forEach(_)},m(r,l){R(r,e,l),f(e,s)},d(r){r&&_(e)}}}function ft(o,e){let s,r,l;return r=new Yt({props:{key:e[0],item:e[31],highlight:e[3]}}),r.$on("updateWord",e[23]),r.$on("updateDefinition",e[24]),r.$on("deleteWord",e[25]),r.$on("updateWordTags",e[26]),r.$on("updateFavorite",e[27]),r.$on("refreshWord",e[28]),{key:o,first:null,c(){s=ge(),de(r.$$.fragment),this.h()},l(t){s=ge(),fe(r.$$.fragment,t),this.h()},h(){this.first=s},m(t,n){R(t,s,n),ue(r,t,n),l=!0},p(t,n){e=t;const d={};n[0]&1&&(d.key=e[0]),n[0]&64&&(d.item=e[31]),n[0]&8&&(d.highlight=e[3]),r.$set(d)},i(t){l||(K(r.$$.fragment,t),l=!0)},o(t){Z(r.$$.fragment,t),l=!1},d(t){t&&_(s),ce(r,t)}}}function ut(o){let e,s,r;function l(n){o[29](n)}let t={};return o[7]!==void 0&&(t.message=o[7]),e=new jt({props:t}),_t.push(()=>ht(e,"message",l,o[7])),{c(){de(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,d){ue(e,n,d),r=!0},p(n,d){const u={};!s&&d[0]&128&&(s=!0,u.message=n[7],pt(()=>s=!1)),e.$set(u)},i(n){r||(K(e.$$.fragment,n),r=!0)},o(n){Z(e.$$.fragment,n),r=!1},d(n){ce(e,n)}}}function xt(o){let e,s,r,l,t,n,d,u,c,h,v,p,I,D,O,V,z,x,S,T=[],$=new Map,B,Q,X,re,k,M;s=new Qt({props:{key:o[0]}}),s.$on("updateFilter",o[20]),V=new Ut({props:{key:o[0],sort_by:o[1].sort_by,sort_order:o[1].sort_order}}),V.$on("updateSort",o[22]);let L=o[2]!=""&&at(o),A=o[6];const ie=m=>m[31].id;for(let m=0;m<A.length;m+=1){let i=nt(o,A,m),g=ie(i);$.set(g,T[m]=ft(g,i))}let P=null;A.length||(P=dt(o));let N=o[7]&&ut(o);return{c(){e=b("div"),de(s.$$.fragment),r=H(),l=b("div"),t=b("div"),n=b("div"),d=b("input"),u=H(),c=b("div"),h=b("button"),v=H(),p=b("button"),I=H(),D=b("button"),O=H(),de(V.$$.fragment),z=H(),L&&L.c(),x=H(),S=b("ul");for(let m=0;m<T.length;m+=1)T[m].c();P&&P.c(),Q=H(),N&&N.c(),X=ge(),this.h()},l(m){e=w(m,"DIV",{class:!0});var i=y(e);fe(s.$$.fragment,i),r=j(i),l=w(i,"DIV",{class:!0});var g=y(l);t=w(g,"DIV",{class:!0});var q=y(t);n=w(q,"DIV",{class:!0});var C=y(n);d=w(C,"INPUT",{type:!0,class:!0}),u=j(C),c=w(C,"DIV",{class:!0});var F=y(c);h=w(F,"BUTTON",{class:!0,title:!0}),y(h).forEach(_),v=j(F),p=w(F,"BUTTON",{class:!0,title:!0}),y(p).forEach(_),I=j(F),D=w(F,"BUTTON",{class:!0,title:!0}),y(D).forEach(_),F.forEach(_),C.forEach(_),q.forEach(_),O=j(g),fe(V.$$.fragment,g),g.forEach(_),z=j(i),L&&L.l(i),i.forEach(_),x=j(m),S=w(m,"UL",{class:!0});var J=y(S);for(let se=0;se<T.length;se+=1)T[se].l(J);P&&P.l(J),J.forEach(_),Q=j(m),N&&N.l(m),X=ge(),this.h()},h(){a(d,"type","checkbox"),a(d,"class","select-checkbox"),a(h,"class","show-btn svelte-navvq7"),a(h,"title","Show selected"),a(p,"class","hide-btn svelte-navvq7"),a(p,"title","Hide selected"),a(D,"class","del-btn svelte-navvq7"),a(D,"title","Delete selected"),a(c,"class","select-group svelte-navvq7"),a(n,"class","select-options"),a(t,"class","show-hide svelte-navvq7"),a(l,"class","options-bar svelte-navvq7"),a(e,"class","sticky-search-bar list-group-item svelte-navvq7"),a(S,"class",B="word-group "+o[5]+" svelte-navvq7")},m(m,i){R(m,e,i),ue(s,e,null),f(e,r),f(e,l),f(l,t),f(t,n),f(n,d),d.checked=o[4],f(n,u),f(n,c),f(c,h),f(c,v),f(c,p),f(c,I),f(c,D),f(l,O),ue(V,l,null),f(e,z),L&&L.m(e,null),R(m,x,i),R(m,S,i);for(let g=0;g<T.length;g+=1)T[g].m(S,null);P&&P.m(S,null),R(m,Q,i),N&&N.m(m,i),R(m,X,i),re=!0,k||(M=[U(d,"change",o[21]),U(d,"change",o[8]),U(h,"click",o[10]),U(p,"click",o[11]),U(D,"click",o[9])],k=!0)},p(m,i){const g={};i[0]&1&&(g.key=m[0]),s.$set(g),i[0]&16&&(d.checked=m[4]);const q={};i[0]&1&&(q.key=m[0]),i[0]&2&&(q.sort_by=m[1].sort_by),i[0]&2&&(q.sort_order=m[1].sort_order),V.$set(q),m[2]!=""?L?L.p(m,i):(L=at(m),L.c(),L.m(e,null)):L&&(L.d(1),L=null),i[0]&258125&&(A=m[6],Ee(),T=Tt(T,i,ie,1,m,A,$,S,qt,ft,null,nt),Te(),!A.length&&P?P.p(m,i):A.length?P&&(P.d(1),P=null):(P=dt(m),P.c(),P.m(S,null))),(!re||i[0]&32&&B!==(B="word-group "+m[5]+" svelte-navvq7"))&&a(S,"class",B),m[7]?N?(N.p(m,i),i[0]&128&&K(N,1)):(N=ut(m),N.c(),K(N,1),N.m(X.parentNode,X)):N&&(Ee(),Z(N,1,1,()=>{N=null}),Te())},i(m){if(!re){K(s.$$.fragment,m),K(V.$$.fragment,m);for(let i=0;i<A.length;i+=1)K(T[i]);K(N),re=!0}},o(m){Z(s.$$.fragment,m),Z(V.$$.fragment,m);for(let i=0;i<T.length;i+=1)Z(T[i]);Z(N),re=!1},d(m){m&&_(e),ce(s),ce(V),L&&L.d(),m&&_(x),m&&_(S);for(let i=0;i<T.length;i+=1)T[i].d();P&&P.d(),m&&_(Q),N&&N.d(m),m&&_(X),k=!1,He(M)}}}function Le(){return document.querySelectorAll('input[type="checkbox"].select-word'),Me(o=>!0)}function Me(o){const e=document.querySelectorAll('input[type="checkbox"].select-word');if(!e)return 0;let s=0;return e.forEach(r=>{r.checked&&o(r)&&(s+=1)}),s}function el(o,e,s){let r,{key:l="words"}=e,t=Dt(l);t=Ue(t);let n=!1,d="",u="",c,h,v;v=new URLSearchParams(window.location.search).get("word"),v&&Ze(parseInt(v),l);function p(){let i=Le()===0;const g=document.querySelectorAll('input[type="checkbox"].select-word');if(!g)return 0;console.log("selecting with action=%i",i);let q=0;g.forEach(C=>{C.checked=i,q+=1}),q!==0&&s(4,n=i)}async function I(){const i=Le();if(i===0||!window.confirm(i===1?"Delete word?":`Delete ${i} words?`))return!1;const g=Me(q=>{var C,F;if(q.dataset.id){const J=Number(q.dataset.id);if(!Number.isNaN(J))if(et(t,J)){const se=q.parentElement;se&&((C=se.parentElement)==null||C.removeChild(se));const pe=document.getElementById(`${l}-hr-${J}`);return pe&&((F=pe.parentElement)==null||F.removeChild(pe)),!0}else console.log(`delete for ${J} failed`)}return!1});return await It(),g>0&&(_e(t),s(1,t)),!0}function D(){Le()===0?c.forEach(i=>{var q;const g=(q=document.getElementById(`${l}-${i.id}`))==null?void 0:q.querySelector("details");g&&(g.open=!0)}):Me(i=>{var q;const g=(q=i.parentElement)==null?void 0:q.querySelector("details");return g?(g.open=!0,!0):!1})}function O(){Le()===0?c.forEach(i=>{var q;const g=(q=document.getElementById(`${l}-${i.id}`))==null?void 0:q.querySelector("details");g&&(g.open=!1)}):Me(i=>{var q;const g=(q=i.parentElement)==null?void 0:q.querySelector("details");return g?(g.open=!1,!0):!1})}function V(i){if(console.log(i),i.key!=l||!i.word||!i.word.word)return;let g=i.word.word.trim().toLowerCase(),q=t.words.find(J=>{var se;return((se=J.cache)==null?void 0:se.word)===g}),C=t.words.find(J=>J.id===i.word.id),F=me(l,i.word.id);C!=null&&q!=null?(console.log(`original: %o
dup: %o`,C,q),console.log("duplicate word"),F&&(console.log("resetting to "+F.title),F.innerHTML=F.title,C.word=F.title)):At(t,i.word.id,i.word.word)?(s(1,t=Ue(t)),F&&(F.title=i.word.word),console.log("updated list: %o",t.words),_e(t),s(1,t),Ze(i.word.id,l)):console.log("word update failed: %o",i.word)}function z(i){if(i.key!=l||!i.word.def)return;let g=Ne(i.word.def.trim());Wt(t,i.word.id,g)?_e(t):console.log("definition update failed")}function x(i){function g(q,C){return q.tags=C.tags,q.cache=xe(q),!0}i.key==l&&(Oe(t,i.word,g),_e(t),s(1,t))}function S(i){function g(q,C){return q.favorite=C.favorite,!0}i.key==l&&(Oe(t,i.word,g),_e(t),s(1,t))}function T(i){function g(q,C){return q.dict_def=C.dict_def,!0}i.key==l&&Lt.default.lookup(i.word.word).then(q=>{q?i.word.dict_def=q:s(7,h=`'${i.word.word}' has no dictionary definition`)}).finally(()=>{i.word.cache=xe(i.word),Oe(t,i.word,g),_e(t),s(1,t)})}function $(i){i.key==l&&(et(t,i.word.id)?(_e(t),s(1,t)):console.log("remove word failed"))}function B(i){i.key==l&&(s(1,t.sort_by=i.sort_by,t),s(1,t.sort_order=i.sort_order,t),Ue(t),_e(t))}function Q(i){i.key==l&&s(2,d=i.search.toLowerCase())}const X=i=>{Q(i.detail)};function re(){n=this.checked,s(4,n)}const k=i=>B(i.detail),M=i=>V(i.detail),L=i=>z(i.detail),A=i=>$(i.detail),ie=i=>x(i.detail),P=i=>S(i.detail),N=i=>T(i.detail);function m(i){h=i,s(7,h)}return o.$$set=i=>{"key"in i&&s(0,l=i.key)},o.$$.update=()=>{o.$$.dirty[0]&4&&s(3,r=d.split(" ").filter(i=>i.length>0)),o.$$.dirty[0]&4&&s(5,u=d===""?"":"full-defs"),o.$$.dirty[0]&10&&s(6,c=t.words.filter(i=>St(r,i)))},[l,t,d,r,n,u,c,h,p,I,D,O,V,z,x,S,T,$,B,Q,X,re,k,M,L,A,ie,P,N,m]}class tl extends be{constructor(e){super(),we(this,e,el,xt,ke,{key:0},null,[-1,-1])}}function ll(o){let e,s,r,l,t,n,d,u;return e=new Bt({props:{current:"list"}}),d=new tl({props:{key:"words"}}),{c(){de(e.$$.fragment),s=H(),r=b("h1"),l=te("Word List"),t=H(),n=b("div"),de(d.$$.fragment),this.h()},l(c){fe(e.$$.fragment,c),s=j(c),r=w(c,"H1",{});var h=y(r);l=le(h,"Word List"),h.forEach(_),t=j(c),n=w(c,"DIV",{class:!0});var v=y(n);fe(d.$$.fragment,v),v.forEach(_),this.h()},h(){a(n,"class","list-vocab-container")},m(c,h){ue(e,c,h),R(c,s,h),R(c,r,h),f(r,l),R(c,t,h),R(c,n,h),ue(d,n,null),u=!0},p:he,i(c){u||(K(e.$$.fragment,c),K(d.$$.fragment,c),u=!0)},o(c){Z(e.$$.fragment,c),Z(d.$$.fragment,c),u=!1},d(c){ce(e,c),c&&_(s),c&&_(r),c&&_(t),c&&_(n),ce(d)}}}class al extends be{constructor(e){super(),we(this,e,null,ll,ke,{})}}export{al as default};