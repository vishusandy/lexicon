import{S as be,i as we,s as ke,k as w,q as ee,l as k,m as y,r as te,h as c,n as a,K as gt,b as V,G as u,T as Je,M as F,N as ct,B as _e,P as Be,R as Oe,U as bt,V as wt,a as H,c as P,W as Qe,u as Te,I as ht,J as _t,w as fe,x as de,y as ue,f as $,g as De,t as Z,d as Ie,O as pt,z as ce,o as kt,Q as yt,L as Xe,e as ge,X as Et,Y as Tt,A as Dt}from"../../../chunks/index-d8102d1a.js";import{S as Le,e as Fe,g as Ee,f as ye,r as ve,l as It,b as Ue,s as Ze,h as St,c as he,i as qt,j as At,k as Ve,A as Wt,n as xe,o as et}from"../../../chunks/words-2bbd4318.js";import{T as Nt,e as mt,D as Lt,a as Mt}from"../../../chunks/DictDef-8c78fe28.js";import{A as jt}from"../../../chunks/Alert-83fe2429.js";import{N as Bt}from"../../../chunks/Nav-11fb0fa3.js";function Ht(r){let e,o,s,l,t,i,d,f,h,_,v,p,S,T,R,O,z;return{c(){e=w("div"),o=w("form"),s=w("div"),l=w("select"),t=w("option"),i=ee("Word"),f=w("option"),h=ee("Date"),p=w("input"),T=w("label"),this.h()},l(M){e=k(M,"DIV",{class:!0});var A=y(e);o=k(A,"FORM",{});var N=y(o);s=k(N,"DIV",{class:!0});var C=y(s);l=k(C,"SELECT",{id:!0,title:!0,class:!0});var j=y(l);t=k(j,"OPTION",{});var Q=y(t);i=te(Q,"Word"),Q.forEach(c),f=k(j,"OPTION",{});var X=y(f);h=te(X,"Date"),X.forEach(c),j.forEach(c),p=k(C,"INPUT",{id:!0,type:!0,title:!0,class:!0}),T=k(C,"LABEL",{for:!0,class:!0,title:!0}),y(T).forEach(c),C.forEach(c),N.forEach(c),A.forEach(c),this.h()},h(){t.__value="word",t.value=t.__value,t.selected=d=r[0]==Le.Word,f.__value="id",f.value=f.__value,f.selected=_=r[0]==Le.Id,a(l,"id",v=r[1]+"-sort-by"),a(l,"title","Sort by"),a(l,"class","svelte-1aqkt13"),r[0]===void 0&&gt(()=>r[7].call(l)),a(p,"id",S=r[1]+"-sort-order"),a(p,"type","checkbox"),a(p,"title",r[3]),a(p,"class","sort-checkbox form-check-input svelte-1aqkt13"),a(T,"for",R=r[1]+"-sort-order"),a(T,"class","sort-checkbox-label form-check-label svelte-1aqkt13"),a(T,"title",r[3]),a(s,"class","sort-form-options svelte-1aqkt13"),a(e,"class","sort-container")},m(M,A){V(M,e,A),u(e,o),u(o,s),u(s,l),u(l,t),u(t,i),u(l,f),u(f,h),Je(l,r[0]),u(s,p),p.checked=r[2],u(s,T),O||(z=[F(l,"change",r[7]),F(l,"change",r[4]),F(p,"change",r[8]),F(p,"change",r[4]),F(o,"submit",ct(r[6]))],O=!0)},p(M,[A]){A&1&&d!==(d=M[0]==Le.Word)&&(t.selected=d),A&1&&_!==(_=M[0]==Le.Id)&&(f.selected=_),A&2&&v!==(v=M[1]+"-sort-by")&&a(l,"id",v),A&1&&Je(l,M[0]),A&2&&S!==(S=M[1]+"-sort-order")&&a(p,"id",S),A&8&&a(p,"title",M[3]),A&4&&(p.checked=M[2]),A&2&&R!==(R=M[1]+"-sort-order")&&a(T,"for",R),A&8&&a(T,"title",M[3])},i:_e,o:_e,d(M){M&&c(e),O=!1,Be(z)}}}function Pt(r,e,o){const s=Oe();let{key:l}=e,{sort_by:t}=e,{sort_order:i}=e,d,f=i===Fe.Desc;function h(S){s("updateSort",{sort_by:t,sort_order:i,key:l})}function _(S){bt.call(this,r,S)}function v(){t=wt(this),o(0,t)}function p(){f=this.checked,o(2,f)}return r.$$set=S=>{"key"in S&&o(1,l=S.key),"sort_by"in S&&o(0,t=S.sort_by),"sort_order"in S&&o(5,i=S.sort_order)},r.$$.update=()=>{r.$$.dirty&4&&o(5,i=f?Fe.Desc:Fe.Asc),r.$$.dirty&4&&o(3,d=f?"Descending sort order":"Ascending sort order")},[t,l,f,d,h,i,_,v,p]}class Ft extends be{constructor(e){super(),we(this,e,Pt,Ht,ke,{key:1,sort_by:0,sort_order:5})}}function Ut(r){let e,o,s,l,t,i,d,f,h,_;return{c(){e=w("button"),o=w("span"),s=ee(r[1]),l=H(),t=w("audio"),i=w("a"),d=ee("Audio"),this.h()},l(v){e=k(v,"BUTTON",{class:!0});var p=y(e);o=k(p,"SPAN",{class:!0});var S=y(o);s=te(S,r[1]),S.forEach(c),l=P(p),t=k(p,"AUDIO",{src:!0});var T=y(t);i=k(T,"A",{href:!0});var R=y(i);d=te(R,"Audio"),R.forEach(c),T.forEach(c),p.forEach(c),this.h()},h(){a(o,"class","phonetics svelte-1owj048"),a(i,"href",r[0]),Qe(t.src,f=r[0])||a(t,"src",f),a(e,"class","svelte-1owj048")},m(v,p){V(v,e,p),u(e,o),u(o,s),u(e,l),u(e,t),u(t,i),u(i,d),h||(_=F(e,"click",Vt),h=!0)},p(v,[p]){p&2&&Te(s,v[1]),p&1&&a(i,"href",v[0]),p&1&&!Qe(t.src,f=v[0])&&a(t,"src",f)},i:_e,o:_e,d(v){v&&c(e),h=!1,_()}}}function Vt(r){var o;const e=(o=r.target)==null?void 0:o.querySelector("audio");e&&e.play()}function Ot(r,e,o){let{src:s}=e,{title:l=""}=e;return r.$$set=t=>{"src"in t&&o(0,s=t.src),"title"in t&&o(1,l=t.title)},[s,l]}class $t extends be{constructor(e){super(),we(this,e,Ot,Ut,ke,{src:0,title:1})}}function tt(r,e,o){const s=r.slice();return s[25]=e[o],s}function lt(r){let e,o,s=r[0].dict_def.audio,l=[];for(let i=0;i<s.length;i+=1)l[i]=rt(tt(r,s,i));const t=i=>Z(l[i],1,1,()=>{l[i]=null});return{c(){e=w("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var d=y(e);for(let f=0;f<l.length;f+=1)l[f].l(d);d.forEach(c),this.h()},h(){a(e,"class","audio-entries svelte-1qj4dd1")},m(i,d){V(i,e,d);for(let f=0;f<l.length;f+=1)l[f].m(e,null);o=!0},p(i,d){if(d&1){s=i[0].dict_def.audio;let f;for(f=0;f<s.length;f+=1){const h=tt(i,s,f);l[f]?(l[f].p(h,d),$(l[f],1)):(l[f]=rt(h),l[f].c(),$(l[f],1),l[f].m(e,null))}for(De(),f=s.length;f<l.length;f+=1)t(f);Ie()}},i(i){if(!o){for(let d=0;d<s.length;d+=1)$(l[d]);o=!0}},o(i){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)Z(l[d]);o=!1},d(i){i&&c(e),yt(l,i)}}}function rt(r){let e,o;return e=new $t({props:{src:r[25].url,title:r[25].phonetics}}),{c(){fe(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,l){ue(e,s,l),o=!0},p(s,l){const t={};l&1&&(t.src=s[25].url),l&1&&(t.title=s[25].phonetics),e.$set(t)},i(s){o||($(e.$$.fragment,s),o=!0)},o(s){Z(e.$$.fragment,s),o=!1},d(s){ce(e,s)}}}function st(r){let e,o;return e=new Lt({props:{dict:r[3]}}),{c(){fe(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,l){ue(e,s,l),o=!0},p(s,l){const t={};l&8&&(t.dict=s[3]),e.$set(t)},i(s){o||($(e.$$.fragment,s),o=!0)},o(s){Z(e.$$.fragment,s),o=!1},d(s){ce(e,s)}}}function ot(r){let e=r[0].def+"",o;return{c(){o=ee(e)},l(s){o=te(s,e)},m(s,l){V(s,o,l)},p(s,l){l&1&&e!==(e=s[0].def+"")&&Te(o,e)},d(s){s&&c(o)}}}function Ct(r){let e,o,s,l,t,i,d,f,h,_,v,p,S,T,R,O,z,M,A,N,C,j,Q=r[0].word+"",X,le,ie,oe,m,D,G,q,L,g,n,b,I,U,B,J,re,pe,ne,He,Se,qe,se,Pe,$e,K=r[0].dict_def&&r[0].dict_def.audio.length>0&&lt(r),Y=r[3]&&st(r),x=r[0].def&&ot(r);function vt(E){r[18](E)}let Ce={key:r[1]};return r[0].tags!==void 0&&(Ce.tags=r[0].tags),ne=new Nt({props:Ce}),ht.push(()=>_t(ne,"tags",vt,r[0].tags)),ne.$on("updateTags",r[7]),{c(){e=w("hr"),s=H(),l=w("li"),t=w("input"),d=H(),f=w("button"),h=w("i"),_=H(),v=w("button"),p=w("i"),S=H(),T=w("input"),O=H(),z=w("label"),A=H(),N=w("details"),C=w("summary"),j=w("dfn"),X=ee(Q),ie=H(),oe=w("div"),m=H(),D=w("div"),K&&K.c(),G=H(),Y&&Y.c(),q=H(),L=w("span"),g=ee("Notes:"),n=H(),b=w("div"),x&&x.c(),U=H(),B=w("div"),J=w("span"),re=ee("Tags:"),pe=H(),fe(ne.$$.fragment),this.h()},l(E){e=k(E,"HR",{id:!0,class:!0}),s=P(E),l=k(E,"LI",{id:!0,class:!0});var W=y(l);t=k(W,"INPUT",{class:!0,type:!0,"data-id":!0}),d=P(W),f=k(W,"BUTTON",{class:!0});var me=y(f);h=k(me,"I",{class:!0}),y(h).forEach(c),me.forEach(c),_=P(W),v=k(W,"BUTTON",{class:!0,title:!0});var Re=y(v);p=k(Re,"I",{class:!0}),y(p).forEach(c),Re.forEach(c),S=P(W),T=k(W,"INPUT",{id:!0,title:!0,class:!0,type:!0}),O=P(W),z=k(W,"LABEL",{for:!0,class:!0}),y(z).forEach(c),A=P(W),N=k(W,"DETAILS",{class:!0});var Ae=y(N);C=k(Ae,"SUMMARY",{class:!0});var We=y(C);j=k(We,"DFN",{id:!0,class:!0,contenteditable:!0});var Ke=y(j);X=te(Ke,Q),Ke.forEach(c),ie=P(We),oe=k(We,"DIV",{class:!0}),y(oe).forEach(c),We.forEach(c),m=P(Ae),D=k(Ae,"DIV",{class:!0});var ae=y(D);K&&K.l(ae),G=P(ae),Y&&Y.l(ae),q=P(ae),L=k(ae,"SPAN",{class:!0});var Ye=y(L);g=te(Ye,"Notes:"),Ye.forEach(c),n=P(ae),b=k(ae,"DIV",{id:!0,class:!0,contenteditable:!0});var ze=y(b);x&&x.l(ze),ze.forEach(c),U=P(ae),B=k(ae,"DIV",{class:!0});var Ne=y(B);J=k(Ne,"SPAN",{class:!0});var Ge=y(J);re=te(Ge,"Tags:"),Ge.forEach(c),pe=P(Ne),de(ne.$$.fragment,Ne),Ne.forEach(c),ae.forEach(c),Ae.forEach(c),W.forEach(c),this.h()},h(){a(e,"id",o=r[1]+"-hr-"+r[0].id),a(e,"class","svelte-1qj4dd1"),a(t,"class","select-word svelte-1qj4dd1"),a(t,"type","checkbox"),a(t,"data-id",i=r[0].id),a(h,"class","fa-solid fa-xmark"),a(f,"class","remove-word-btn remove-btn svelte-1qj4dd1"),a(p,"class","fa-solid fa-arrows-rotate"),a(v,"class","refresh-btn svelte-1qj4dd1"),a(v,"title","Refresh defintion"),a(T,"id",R=r[1]+"-fav-"+r[0].id),a(T,"title","Favorite"),a(T,"class","fav-checkbox svelte-1qj4dd1"),a(T,"type","checkbox"),a(z,"for",M=r[1]+"-fav-"+r[0].id),a(z,"class","fav-label svelte-1qj4dd1"),a(j,"id",le=r[1]+"-word-"+r[0].id),a(j,"class","word svelte-1qj4dd1"),a(j,"contenteditable","true"),a(oe,"class","detail-arrow svelte-1qj4dd1"),a(C,"class","svelte-1qj4dd1"),a(L,"class","def-label svelte-1qj4dd1"),a(b,"id",I=r[1]+"-def-"+r[0].id),a(b,"class","word-definition svelte-1qj4dd1"),a(b,"contenteditable","true"),a(J,"class","tags-label svelte-1qj4dd1"),a(B,"class","tag-list svelte-1qj4dd1"),a(D,"class","detail-content svelte-1qj4dd1"),N.open=Se=Array.isArray(r[2])&&r[2].length>0,a(N,"class","svelte-1qj4dd1"),a(l,"id",qe=r[1]+"-"+r[0].id),a(l,"class","word-item svelte-1qj4dd1")},m(E,W){V(E,e,W),V(E,s,W),V(E,l,W),u(l,t),u(l,d),u(l,f),u(f,h),u(l,_),u(l,v),u(v,p),u(l,S),u(l,T),T.checked=r[0].favorite,u(l,O),u(l,z),u(l,A),u(l,N),u(N,C),u(C,j),u(j,X),u(C,ie),u(C,oe),u(N,m),u(N,D),K&&K.m(D,null),u(D,G),Y&&Y.m(D,null),u(D,q),u(D,L),u(L,g),u(D,n),u(D,b),x&&x.m(b,null),u(D,U),u(D,B),u(B,J),u(J,re),u(B,pe),ue(ne,B,null),se=!0,Pe||($e=[F(f,"click",r[13]),F(v,"click",r[11]),F(T,"change",r[14]),F(T,"change",r[8]),F(j,"blur",r[15]),F(j,"keydown",r[12]),F(j,"click",Rt),F(b,"keydown",mt),F(b,"blur",r[16]),F(b,"focus",r[17])],Pe=!0)},p(E,[W]){(!se||W&3&&o!==(o=E[1]+"-hr-"+E[0].id))&&a(e,"id",o),(!se||W&1&&i!==(i=E[0].id))&&a(t,"data-id",i),(!se||W&3&&R!==(R=E[1]+"-fav-"+E[0].id))&&a(T,"id",R),W&1&&(T.checked=E[0].favorite),(!se||W&3&&M!==(M=E[1]+"-fav-"+E[0].id))&&a(z,"for",M),(!se||W&1)&&Q!==(Q=E[0].word+"")&&Te(X,Q),(!se||W&3&&le!==(le=E[1]+"-word-"+E[0].id))&&a(j,"id",le),E[0].dict_def&&E[0].dict_def.audio.length>0?K?(K.p(E,W),W&1&&$(K,1)):(K=lt(E),K.c(),$(K,1),K.m(D,G)):K&&(De(),Z(K,1,1,()=>{K=null}),Ie()),E[3]?Y?(Y.p(E,W),W&8&&$(Y,1)):(Y=st(E),Y.c(),$(Y,1),Y.m(D,q)):Y&&(De(),Z(Y,1,1,()=>{Y=null}),Ie()),E[0].def?x?x.p(E,W):(x=ot(E),x.c(),x.m(b,null)):x&&(x.d(1),x=null),(!se||W&3&&I!==(I=E[1]+"-def-"+E[0].id))&&a(b,"id",I);const me={};W&2&&(me.key=E[1]),!He&&W&1&&(He=!0,me.tags=E[0].tags,pt(()=>He=!1)),ne.$set(me),(!se||W&4&&Se!==(Se=Array.isArray(E[2])&&E[2].length>0))&&(N.open=Se),(!se||W&3&&qe!==(qe=E[1]+"-"+E[0].id))&&a(l,"id",qe)},i(E){se||($(K),$(Y),$(ne.$$.fragment,E),se=!0)},o(E){Z(K),Z(Y),Z(ne.$$.fragment,E),se=!1},d(E){E&&c(e),E&&c(s),E&&c(l),K&&K.d(),Y&&Y.d(),x&&x.d(),ce(ne),Pe=!1,Be($e)}}}const Rt=r=>{r.preventDefault()};function Kt(r,e,o){const s=Oe();let{key:l}=e,{item:t}=e,{highlight:i}=e,d=t.dict_def;function f(m,D){if(!D)return;let G={...D};for(let q of G.parts)q.definition=ye(ve(q.definition),m),q.part=ye(ve(q.part),m);return G}function h(){return l+"-def-"+t.id}function _(){return document.getElementById(`${l}-${t.id}`)}function v(){return document.getElementById(h())}kt(()=>{const m=Ee(l,t.id);m&&R(m)});function p(){const m=Ee(l,t.id);if(m){if(o(0,t.word=m.innerHTML,t),t.word==""){T(t)||o(0,t.word=m.title,t);return}m.title!=t.word&&s("updateWord",{word:t,key:l})}}function S(){const m=v();m&&o(0,t.def=m.innerHTML.replaceAll("<br>",""),t),s("updateDefinition",{word:t,key:l})}function T(m){return window.confirm("Delete word?")?(s("deleteWord",{word:m,key:l}),!0):!1}function R(m){m.title=t.word}function O(){s("updateWordTags",{word:t,key:l})}function z(){s("updateFavorite",{word:t,key:l})}function M(){if(A(),i.length===0)return;const m=v(),D=_(),G=Ee(l,t.id);G&&(G.innerHTML=ye(t.word,i)),m&&t.def&&(m.innerHTML=ye(t.def,i)),D&&(D.querySelectorAll(".pos, .def, .syn, .ant").forEach(q=>q.innerHTML=ye(q.innerHTML,i)),D.querySelectorAll(".tag").forEach(q=>{var L;i.some(g=>g=="#"+q.innerHTML.toLowerCase())&&((L=q.parentElement)==null||L.classList.add("highlight-tag"))}))}function A(){const m=v(),D=_(),G=Ee(l,t.id);G&&(G.innerHTML=ve(G.innerHTML)),m&&(m.innerHTML=ve(m.innerHTML)),D&&D.querySelectorAll(".pos, .def, .syn, .ant").forEach(q=>q.innerHTML=ve(q.innerHTML))}function N(){var D;const m=(D=_())==null?void 0:D.querySelector("details");m&&(m.open=!0),s("refreshWord",{word:t,key:l})}function C(m){const D=m.target;if(m.code=="Escape"&&D){D.innerHTML=D.title,D.blur();return}mt(m)}const j=()=>T(t);function Q(){t.favorite=this.checked,o(0,t)}const X=()=>p(),le=()=>{S(),M()},ie=()=>A();function oe(m){r.$$.not_equal(t.tags,m)&&(t.tags=m,o(0,t))}return r.$$set=m=>{"key"in m&&o(1,l=m.key),"item"in m&&o(0,t=m.item),"highlight"in m&&o(2,i=m.highlight)},r.$$.update=()=>{r.$$.dirty&5&&o(3,d=f(i,t.dict_def))},[t,l,i,d,p,S,T,O,z,M,A,N,C,j,Q,X,le,ie,oe]}class Yt extends be{constructor(e){super(),we(this,e,Kt,Ct,ke,{key:1,item:0,highlight:2})}}function it(r){let e,o,s,l;return{c(){e=w("button"),o=w("i"),this.h()},l(t){e=k(t,"BUTTON",{class:!0});var i=y(e);o=k(i,"I",{class:!0}),y(o).forEach(c),i.forEach(c),this.h()},h(){a(o,"class","fa-solid fa-x"),a(e,"class","reset-btn svelte-1t7fbni")},m(t,i){V(t,e,i),u(e,o),s||(l=F(e,"click",r[3]),s=!0)},p:_e,d(t){t&&c(e),s=!1,l()}}}function zt(r){let e,o,s,l,t,i,d,f,h,_=r[0]&&it(r);return{c(){e=w("div"),o=w("form"),s=w("div"),l=w("i"),t=H(),i=w("input"),d=H(),_&&_.c(),this.h()},l(v){e=k(v,"DIV",{class:!0});var p=y(e);o=k(p,"FORM",{});var S=y(o);s=k(S,"DIV",{class:!0});var T=y(s);l=k(T,"I",{class:!0}),y(l).forEach(c),T.forEach(c),t=P(S),i=k(S,"INPUT",{placeholder:!0,class:!0}),d=P(S),_&&_.l(S),S.forEach(c),p.forEach(c),this.h()},h(){a(l,"class","fa-solid fa-magnifying-glass"),a(s,"class","search-icon svelte-1t7fbni"),a(i,"placeholder",""),a(i,"class","search-input form-control svelte-1t7fbni"),i.autofocus=!0,a(e,"class","search-container svelte-1t7fbni")},m(v,p){V(v,e,p),u(e,o),u(o,s),u(s,l),u(o,t),u(o,i),Xe(i,r[0]),u(o,d),_&&_.m(o,null),i.focus(),f||(h=[F(i,"input",r[5]),F(i,"input",r[1]),F(i,"keydown",r[2]),F(o,"submit",ct(r[1]))],f=!0)},p(v,[p]){p&1&&i.value!==v[0]&&Xe(i,v[0]),v[0]?_?_.p(v,p):(_=it(v),_.c(),_.m(o,null)):_&&(_.d(1),_=null)},i:_e,o:_e,d(v){v&&c(e),_&&_.d(),f=!1,Be(h)}}}function Gt(r,e,o){const s=Oe();let{key:l}=e,t;function i(_){s("updateFilter",{search:t,key:l})}function d(_){Mt(_)&&(o(0,t=""),s("updateFilter",{search:t,key:l}))}function f(_){o(0,t=""),s("updateFilter",{search:t,key:l})}function h(){t=this.value,o(0,t)}return r.$$set=_=>{"key"in _&&o(4,l=_.key)},[t,i,d,f,l,h]}class Jt extends be{constructor(e){super(),we(this,e,Gt,zt,ke,{key:4})}}function nt(r,e,o){const s=r.slice();return s[31]=e[o],s}function at(r){let e,o,s,l=r[6].length+"",t,i,d,f=r[1].words.length+"",h,_;return{c(){e=w("div"),o=ee("Showing "),s=w("b"),t=ee(l),i=ee(" out of "),d=w("b"),h=ee(f),_=ee(" words"),this.h()},l(v){e=k(v,"DIV",{class:!0});var p=y(e);o=te(p,"Showing "),s=k(p,"B",{});var S=y(s);t=te(S,l),S.forEach(c),i=te(p," out of "),d=k(p,"B",{});var T=y(d);h=te(T,f),T.forEach(c),_=te(p," words"),p.forEach(c),this.h()},h(){a(e,"class","filter-count svelte-fv0hy7")},m(v,p){V(v,e,p),u(e,o),u(e,s),u(s,t),u(e,i),u(e,d),u(d,h),u(e,_)},p(v,p){p[0]&64&&l!==(l=v[6].length+"")&&Te(t,l),p[0]&2&&f!==(f=v[1].words.length+"")&&Te(h,f)},d(v){v&&c(e)}}}function ft(r){let e;function o(t,i){return t[2]?Xt:Qt}let s=o(r),l=s(r);return{c(){l.c(),e=ge()},l(t){l.l(t),e=ge()},m(t,i){l.m(t,i),V(t,e,i)},p(t,i){s!==(s=o(t))&&(l.d(1),l=s(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&c(e)}}}function Qt(r){let e,o;return{c(){e=w("p"),o=ee("No words have been added")},l(s){e=k(s,"P",{});var l=y(e);o=te(l,"No words have been added"),l.forEach(c)},m(s,l){V(s,e,l),u(e,o)},d(s){s&&c(e)}}}function Xt(r){let e,o;return{c(){e=w("p"),o=ee("No matching words")},l(s){e=k(s,"P",{});var l=y(e);o=te(l,"No matching words"),l.forEach(c)},m(s,l){V(s,e,l),u(e,o)},d(s){s&&c(e)}}}function dt(r,e){let o,s,l;return s=new Yt({props:{key:e[0],item:e[31],highlight:e[3]}}),s.$on("updateWord",e[23]),s.$on("updateDefinition",e[24]),s.$on("deleteWord",e[25]),s.$on("updateWordTags",e[26]),s.$on("updateFavorite",e[27]),s.$on("refreshWord",e[28]),{key:r,first:null,c(){o=ge(),fe(s.$$.fragment),this.h()},l(t){o=ge(),de(s.$$.fragment,t),this.h()},h(){this.first=o},m(t,i){V(t,o,i),ue(s,t,i),l=!0},p(t,i){e=t;const d={};i[0]&1&&(d.key=e[0]),i[0]&64&&(d.item=e[31]),i[0]&8&&(d.highlight=e[3]),s.$set(d)},i(t){l||($(s.$$.fragment,t),l=!0)},o(t){Z(s.$$.fragment,t),l=!1},d(t){t&&c(o),ce(s,t)}}}function ut(r){let e,o,s;function l(i){r[29](i)}let t={};return r[7]!==void 0&&(t.message=r[7]),e=new jt({props:t}),ht.push(()=>_t(e,"message",l,r[7])),{c(){fe(e.$$.fragment)},l(i){de(e.$$.fragment,i)},m(i,d){ue(e,i,d),s=!0},p(i,d){const f={};!o&&d[0]&128&&(o=!0,f.message=i[7],pt(()=>o=!1)),e.$set(f)},i(i){s||($(e.$$.fragment,i),s=!0)},o(i){Z(e.$$.fragment,i),s=!1},d(i){ce(e,i)}}}function Zt(r){let e,o,s,l,t,i,d,f,h,_,v,p,S,T,R,O,z,M,A,N=[],C=new Map,j,Q,X,le,ie,oe;o=new Jt({props:{key:r[0]}}),o.$on("updateFilter",r[20]),O=new Ft({props:{key:r[0],sort_by:r[1].sort_by,sort_order:r[1].sort_order}}),O.$on("updateSort",r[22]);let m=r[2]!=""&&at(r),D=r[6];const G=g=>g[31].id;for(let g=0;g<D.length;g+=1){let n=nt(r,D,g),b=G(n);C.set(b,N[g]=dt(b,n))}let q=null;D.length||(q=ft(r));let L=r[7]&&ut(r);return{c(){e=w("div"),fe(o.$$.fragment),s=H(),l=w("div"),t=w("div"),i=w("div"),d=w("input"),f=H(),h=w("div"),_=w("button"),v=H(),p=w("button"),S=H(),T=w("button"),R=H(),fe(O.$$.fragment),z=H(),m&&m.c(),M=H(),A=w("ul");for(let g=0;g<N.length;g+=1)N[g].c();q&&q.c(),Q=H(),L&&L.c(),X=ge(),this.h()},l(g){e=k(g,"DIV",{class:!0});var n=y(e);de(o.$$.fragment,n),s=P(n),l=k(n,"DIV",{class:!0});var b=y(l);t=k(b,"DIV",{class:!0});var I=y(t);i=k(I,"DIV",{class:!0});var U=y(i);d=k(U,"INPUT",{type:!0,class:!0}),f=P(U),h=k(U,"DIV",{class:!0});var B=y(h);_=k(B,"BUTTON",{class:!0,title:!0}),y(_).forEach(c),v=P(B),p=k(B,"BUTTON",{class:!0,title:!0}),y(p).forEach(c),S=P(B),T=k(B,"BUTTON",{class:!0,title:!0}),y(T).forEach(c),B.forEach(c),U.forEach(c),I.forEach(c),R=P(b),de(O.$$.fragment,b),b.forEach(c),z=P(n),m&&m.l(n),n.forEach(c),M=P(g),A=k(g,"UL",{class:!0});var J=y(A);for(let re=0;re<N.length;re+=1)N[re].l(J);q&&q.l(J),J.forEach(c),Q=P(g),L&&L.l(g),X=ge(),this.h()},h(){a(d,"type","checkbox"),a(d,"class","select-checkbox"),a(_,"class","show-btn svelte-fv0hy7"),a(_,"title","Show selected"),a(p,"class","hide-btn svelte-fv0hy7"),a(p,"title","Hide selected"),a(T,"class","del-btn svelte-fv0hy7"),a(T,"title","Delete selected"),a(h,"class","select-group svelte-fv0hy7"),a(i,"class","select-options"),a(t,"class","show-hide svelte-fv0hy7"),a(l,"class","options-bar svelte-fv0hy7"),a(e,"class","sticky-search-bar list-group-item svelte-fv0hy7"),a(A,"class",j="word-group "+r[5]+" svelte-fv0hy7")},m(g,n){V(g,e,n),ue(o,e,null),u(e,s),u(e,l),u(l,t),u(t,i),u(i,d),d.checked=r[4],u(i,f),u(i,h),u(h,_),u(h,v),u(h,p),u(h,S),u(h,T),u(l,R),ue(O,l,null),u(e,z),m&&m.m(e,null),V(g,M,n),V(g,A,n);for(let b=0;b<N.length;b+=1)N[b].m(A,null);q&&q.m(A,null),V(g,Q,n),L&&L.m(g,n),V(g,X,n),le=!0,ie||(oe=[F(d,"change",r[21]),F(d,"change",r[8]),F(_,"click",r[10]),F(p,"click",r[11]),F(T,"click",r[9])],ie=!0)},p(g,n){const b={};n[0]&1&&(b.key=g[0]),o.$set(b),n[0]&16&&(d.checked=g[4]);const I={};n[0]&1&&(I.key=g[0]),n[0]&2&&(I.sort_by=g[1].sort_by),n[0]&2&&(I.sort_order=g[1].sort_order),O.$set(I),g[2]!=""?m?m.p(g,n):(m=at(g),m.c(),m.m(e,null)):m&&(m.d(1),m=null),n[0]&258125&&(D=g[6],De(),N=Et(N,n,G,1,g,D,C,A,Tt,dt,null,nt),Ie(),!D.length&&q?q.p(g,n):D.length?q&&(q.d(1),q=null):(q=ft(g),q.c(),q.m(A,null))),(!le||n[0]&32&&j!==(j="word-group "+g[5]+" svelte-fv0hy7"))&&a(A,"class",j),g[7]?L?(L.p(g,n),n[0]&128&&$(L,1)):(L=ut(g),L.c(),$(L,1),L.m(X.parentNode,X)):L&&(De(),Z(L,1,1,()=>{L=null}),Ie())},i(g){if(!le){$(o.$$.fragment,g),$(O.$$.fragment,g);for(let n=0;n<D.length;n+=1)$(N[n]);$(L),le=!0}},o(g){Z(o.$$.fragment,g),Z(O.$$.fragment,g);for(let n=0;n<N.length;n+=1)Z(N[n]);Z(L),le=!1},d(g){g&&c(e),ce(o),ce(O),m&&m.d(),g&&c(M),g&&c(A);for(let n=0;n<N.length;n+=1)N[n].d();q&&q.d(),g&&c(Q),L&&L.d(g),g&&c(X),ie=!1,Be(oe)}}}function Me(){return document.querySelectorAll('input[type="checkbox"].select-word'),je(r=>!0)}function je(r){const e=document.querySelectorAll('input[type="checkbox"].select-word');if(!e)return 0;let o=0;return e.forEach(s=>{s.checked&&r(s)&&(o+=1)}),o}function xt(r,e,o){let s,{key:l="words"}=e,t=It(l);t=Ue(t);let i=!1,d="",f="",h,_,v;v=new URLSearchParams(window.location.search).get("word"),v&&Ze(parseInt(v),l);function p(){let n=Me()===0;const b=document.querySelectorAll('input[type="checkbox"].select-word');if(!b)return 0;console.log("selecting with action=%i",n);let I=0;b.forEach(U=>{U.checked=n,I+=1}),I!==0&&o(4,i=n)}async function S(){const n=Me();if(n===0||!window.confirm(n===1?"Delete word?":`Delete ${n} words?`))return!1;const b=je(I=>{var U,B;if(I.dataset.id){const J=Number(I.dataset.id);if(!Number.isNaN(J))if(et(t,J)){const re=I.parentElement;re&&((U=re.parentElement)==null||U.removeChild(re));const pe=document.getElementById(`${l}-hr-${J}`);return pe&&((B=pe.parentElement)==null||B.removeChild(pe)),!0}else console.log(`delete for ${J} failed`)}return!1});return await Dt(),b>0&&(he(t),o(1,t)),!0}function T(){Me()===0?h.forEach(n=>{var I;const b=(I=document.getElementById(`${l}-${n.id}`))==null?void 0:I.querySelector("details");b&&(b.open=!0)}):je(n=>{var I;const b=(I=n.parentElement)==null?void 0:I.querySelector("details");return b?(b.open=!0,!0):!1})}function R(){Me()===0?h.forEach(n=>{var I;const b=(I=document.getElementById(`${l}-${n.id}`))==null?void 0:I.querySelector("details");b&&(b.open=!1)}):je(n=>{var I;const b=(I=n.parentElement)==null?void 0:I.querySelector("details");return b?(b.open=!1,!0):!1})}function O(n){if(console.log(n),n.key!=l||!n.word||!n.word.word)return;let b=n.word.word.trim().toLowerCase(),I=t.words.find(J=>{var re;return((re=J.cache)==null?void 0:re.word)===b}),U=t.words.find(J=>J.id===n.word.id),B=Ee(l,n.word.id);U!=null&&I!=null?(console.log(`original: %o
dup: %o`,U,I),console.log("duplicate word"),B&&(console.log("resetting to "+B.title),B.innerHTML=B.title,U.word=B.title)):qt(t,n.word.id,n.word.word)?(o(1,t=Ue(t)),B&&(B.title=n.word.word),console.log("updated list: %o",t.words),he(t),o(1,t),Ze(n.word.id,l)):console.log("word update failed: %o",n.word)}function z(n){if(n.key!=l||!n.word.def)return;let b=ve(n.word.def.trim());At(t,n.word.id,b)?he(t):console.log("definition update failed")}function M(n){function b(I,U){return I.tags=U.tags,I.cache=xe(I),!0}n.key==l&&(Ve(t,n.word,b),he(t),o(1,t))}function A(n){function b(I,U){return I.favorite=U.favorite,!0}n.key==l&&(Ve(t,n.word,b),he(t),o(1,t))}function N(n){function b(I,U){return I.dict_def=U.dict_def,!0}n.key==l&&Wt.default.lookup(n.word.word).then(I=>{I?n.word.dict_def=I:o(7,_=`'${n.word.word}' has no dictionary definition`)}).finally(()=>{n.word.cache=xe(n.word),Ve(t,n.word,b),he(t),o(1,t)})}function C(n){n.key==l&&(et(t,n.word.id)?(he(t),o(1,t)):console.log("remove word failed"))}function j(n){n.key==l&&(o(1,t.sort_by=n.sort_by,t),o(1,t.sort_order=n.sort_order,t),Ue(t),he(t))}function Q(n){n.key==l&&o(2,d=n.search.toLowerCase())}const X=n=>{Q(n.detail)};function le(){i=this.checked,o(4,i)}const ie=n=>j(n.detail),oe=n=>O(n.detail),m=n=>z(n.detail),D=n=>C(n.detail),G=n=>M(n.detail),q=n=>A(n.detail),L=n=>N(n.detail);function g(n){_=n,o(7,_)}return r.$$set=n=>{"key"in n&&o(0,l=n.key)},r.$$.update=()=>{r.$$.dirty[0]&4&&o(3,s=d.split(" ").filter(n=>n.length>0)),r.$$.dirty[0]&4&&o(5,f=d===""?"":"full-defs"),r.$$.dirty[0]&10&&o(6,h=t.words.filter(n=>St(s,n)))},[l,t,d,s,i,f,h,_,p,S,T,R,O,z,M,A,N,C,j,Q,X,le,ie,oe,m,D,G,q,L,g]}class el extends be{constructor(e){super(),we(this,e,xt,Zt,ke,{key:0},null,[-1,-1])}}function tl(r){let e,o,s,l,t,i,d,f;return e=new Bt({props:{current:"list"}}),d=new el({props:{key:"words"}}),{c(){fe(e.$$.fragment),o=H(),s=w("h1"),l=ee("Word List"),t=H(),i=w("div"),fe(d.$$.fragment),this.h()},l(h){de(e.$$.fragment,h),o=P(h),s=k(h,"H1",{});var _=y(s);l=te(_,"Word List"),_.forEach(c),t=P(h),i=k(h,"DIV",{class:!0});var v=y(i);de(d.$$.fragment,v),v.forEach(c),this.h()},h(){a(i,"class","list-vocab-container")},m(h,_){ue(e,h,_),V(h,o,_),V(h,s,_),u(s,l),V(h,t,_),V(h,i,_),ue(d,i,null),f=!0},p:_e,i(h){f||($(e.$$.fragment,h),$(d.$$.fragment,h),f=!0)},o(h){Z(e.$$.fragment,h),Z(d.$$.fragment,h),f=!1},d(h){ce(e,h),h&&c(o),h&&c(s),h&&c(t),h&&c(i),ce(d)}}}class nl extends be{constructor(e){super(),we(this,e,null,tl,ke,{})}}export{nl as default};
