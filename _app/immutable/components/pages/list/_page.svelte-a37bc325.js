import{S as ve,i as ge,s as be,k as g,q as $,a as B,l as b,m as y,r as x,h as c,c as H,n as f,K as bt,b as V,G as d,T as Qe,M as F,N as _t,B as fe,P as qe,Q as Oe,U as wt,V as kt,W as Xe,u as ke,I as Ce,J as ht,w as de,x as ce,y as _e,f as j,g as ye,t as ee,d as Ee,O as mt,z as he,o as pt,j as yt,R as Et,L as Ze,e as me,X as Tt,Y as It,Z as At,A as Dt}from"../../../chunks/index-71376991.js";import{b as St}from"../../../chunks/paths-b4419565.js";import{S as Ne,e as Pe,f as Fe,r as Le,l as Nt,b as Ue,s as $e,g as Wt,c as ue,h as Lt,i as Mt,j as Ve,A as qt,n as xe,k as et}from"../../../chunks/words-56918134.js";import{T as Bt,e as vt,D as Ht,a as Pt}from"../../../chunks/DictDef-781ec808.js";function Ft(o){let e,r,s,t,l,i,u,a,v,m,_,h,A,S,U,O,R,Y;return{c(){e=g("div"),r=g("form"),s=g("select"),t=g("option"),l=$("Word"),u=g("option"),a=$("Date"),_=B(),h=g("input"),S=B(),U=g("label"),this.h()},l(N){e=b(N,"DIV",{class:!0});var T=y(e);r=b(T,"FORM",{});var C=y(r);s=b(C,"SELECT",{id:!0,title:!0,class:!0});var P=y(s);t=b(P,"OPTION",{});var J=y(t);l=x(J,"Word"),J.forEach(c),u=b(P,"OPTION",{});var Q=y(u);a=x(Q,"Date"),Q.forEach(c),P.forEach(c),_=H(C),h=b(C,"INPUT",{id:!0,type:!0,title:!0,class:!0}),S=H(C),U=b(C,"LABEL",{for:!0,class:!0,title:!0}),y(U).forEach(c),C.forEach(c),T.forEach(c),this.h()},h(){t.__value="word",t.value=t.__value,t.selected=i=o[0]==Ne.Word,u.__value="id",u.value=u.__value,u.selected=v=o[0]==Ne.Id,f(s,"id",m=o[1]+"-sort-by"),f(s,"title","Sort by"),f(s,"class","svelte-x4vm2d"),o[0]===void 0&&bt(()=>o[7].call(s)),f(h,"id",A=o[1]+"-sort-order"),f(h,"type","checkbox"),f(h,"title",o[3]),f(h,"class","sort-checkbox form-check-input svelte-x4vm2d"),f(U,"for",O=o[1]+"-sort-order"),f(U,"class","sort-checkbox-label form-check-label svelte-x4vm2d"),f(U,"title",o[3]),f(e,"class","sort-container svelte-x4vm2d")},m(N,T){V(N,e,T),d(e,r),d(r,s),d(s,t),d(t,l),d(s,u),d(u,a),Qe(s,o[0]),d(r,_),d(r,h),h.checked=o[2],d(r,S),d(r,U),R||(Y=[F(s,"change",o[7]),F(s,"change",o[4]),F(h,"change",o[8]),F(h,"change",o[4]),F(r,"submit",_t(o[6]))],R=!0)},p(N,[T]){T&1&&i!==(i=N[0]==Ne.Word)&&(t.selected=i),T&1&&v!==(v=N[0]==Ne.Id)&&(u.selected=v),T&2&&m!==(m=N[1]+"-sort-by")&&f(s,"id",m),T&1&&Qe(s,N[0]),T&2&&A!==(A=N[1]+"-sort-order")&&f(h,"id",A),T&8&&f(h,"title",N[3]),T&4&&(h.checked=N[2]),T&2&&O!==(O=N[1]+"-sort-order")&&f(U,"for",O),T&8&&f(U,"title",N[3])},i:fe,o:fe,d(N){N&&c(e),R=!1,qe(Y)}}}function Ut(o,e,r){const s=Oe();let{key:t}=e,{sort_by:l}=e,{sort_order:i}=e,u,a=i===Pe.Desc;function v(A){s("updateSort",{sort_by:l,sort_order:i,key:t})}function m(A){wt.call(this,o,A)}function _(){l=kt(this),r(0,l)}function h(){a=this.checked,r(2,a)}return o.$$set=A=>{"key"in A&&r(1,t=A.key),"sort_by"in A&&r(0,l=A.sort_by),"sort_order"in A&&r(5,i=A.sort_order)},o.$$.update=()=>{o.$$.dirty&4&&r(5,i=a?Pe.Desc:Pe.Asc),o.$$.dirty&4&&r(3,u=a?"Descending sort order":"Ascending sort order")},[l,t,a,u,v,i,m,_,h]}class Vt extends ve{constructor(e){super(),ge(this,e,Ut,Ft,be,{key:1,sort_by:0,sort_order:5})}}function Ot(o){let e,r,s,t,l,i,u,a,v,m;return{c(){e=g("button"),r=g("span"),s=$(o[1]),t=B(),l=g("audio"),i=g("a"),u=$("Audio"),this.h()},l(_){e=b(_,"BUTTON",{class:!0});var h=y(e);r=b(h,"SPAN",{class:!0});var A=y(r);s=x(A,o[1]),A.forEach(c),t=H(h),l=b(h,"AUDIO",{src:!0});var S=y(l);i=b(S,"A",{href:!0});var U=y(i);u=x(U,"Audio"),U.forEach(c),S.forEach(c),h.forEach(c),this.h()},h(){f(r,"class","phonetics svelte-1owj048"),f(i,"href",o[0]),Xe(l.src,a=o[0])||f(l,"src",a),f(e,"class","svelte-1owj048")},m(_,h){V(_,e,h),d(e,r),d(r,s),d(e,t),d(e,l),d(l,i),d(i,u),v||(m=F(e,"click",Ct),v=!0)},p(_,[h]){h&2&&ke(s,_[1]),h&1&&f(i,"href",_[0]),h&1&&!Xe(l.src,a=_[0])&&f(l,"src",a)},i:fe,o:fe,d(_){_&&c(e),v=!1,m()}}}function Ct(o){var r;const e=(r=o.target)==null?void 0:r.querySelector("audio");e&&e.play()}function Rt(o,e,r){let{src:s}=e,{title:t=""}=e;return o.$$set=l=>{"src"in l&&r(0,s=l.src),"title"in l&&r(1,t=l.title)},[s,t]}class jt extends ve{constructor(e){super(),ge(this,e,Rt,Ot,be,{src:0,title:1})}}function tt(o,e,r){const s=o.slice();return s[24]=e[r],s}function lt(o){let e,r,s=o[0].dict_def.audio,t=[];for(let i=0;i<s.length;i+=1)t[i]=rt(tt(o,s,i));const l=i=>ee(t[i],1,1,()=>{t[i]=null});return{c(){e=g("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var u=y(e);for(let a=0;a<t.length;a+=1)t[a].l(u);u.forEach(c),this.h()},h(){f(e,"class","audio-entries svelte-1ueo1y0")},m(i,u){V(i,e,u);for(let a=0;a<t.length;a+=1)t[a].m(e,null);r=!0},p(i,u){if(u&1){s=i[0].dict_def.audio;let a;for(a=0;a<s.length;a+=1){const v=tt(i,s,a);t[a]?(t[a].p(v,u),j(t[a],1)):(t[a]=rt(v),t[a].c(),j(t[a],1),t[a].m(e,null))}for(ye(),a=s.length;a<t.length;a+=1)l(a);Ee()}},i(i){if(!r){for(let u=0;u<s.length;u+=1)j(t[u]);r=!0}},o(i){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)ee(t[u]);r=!1},d(i){i&&c(e),Et(t,i)}}}function rt(o){let e,r;return e=new jt({props:{src:o[24].url,title:o[24].phonetics}}),{c(){de(e.$$.fragment)},l(s){ce(e.$$.fragment,s)},m(s,t){_e(e,s,t),r=!0},p(s,t){const l={};t&1&&(l.src=s[24].url),t&1&&(l.title=s[24].phonetics),e.$set(l)},i(s){r||(j(e.$$.fragment,s),r=!0)},o(s){ee(e.$$.fragment,s),r=!1},d(s){he(e,s)}}}function st(o){let e,r;return e=new Ht({props:{dict:o[0].dict_def}}),{c(){de(e.$$.fragment)},l(s){ce(e.$$.fragment,s)},m(s,t){_e(e,s,t),r=!0},p(s,t){const l={};t&1&&(l.dict=s[0].dict_def),e.$set(l)},i(s){r||(j(e.$$.fragment,s),r=!0)},o(s){ee(e.$$.fragment,s),r=!1},d(s){he(e,s)}}}function ot(o){let e=o[0].def+"",r;return{c(){r=$(e)},l(s){r=x(s,e)},m(s,t){V(s,r,t)},p(s,t){t&1&&e!==(e=s[0].def+"")&&ke(r,e)},d(s){s&&c(r)}}}function zt(o){let e,r,s,t,l,i,u,a,v,m,_,h,A,S,U,O,R,Y,N,T,C,P,J=o[0].word+"",Q,re,oe,w,D,W,X,q,M,p,n,k,I,G,Z,le,ie,pe,ne,Be,Te,Ie,se,He,Re,z=o[0].dict_def&&o[0].dict_def.audio.length>0&&lt(o),K=o[0].dict_def&&st(o),te=o[0].def&&ot(o);function gt(E){o[17](E)}let je={key:o[1]};return o[0].tags!==void 0&&(je.tags=o[0].tags),ne=new Bt({props:je}),Ce.push(()=>ht(ne,"tags",gt,o[0].tags)),ne.$on("updateTags",o[6]),{c(){e=g("hr"),s=B(),t=g("li"),l=g("input"),u=B(),a=g("button"),v=g("i"),m=B(),_=g("button"),h=g("i"),A=B(),S=g("input"),O=B(),R=g("label"),N=B(),T=g("details"),C=g("summary"),P=g("dfn"),Q=$(J),oe=B(),w=g("div"),D=B(),W=g("div"),z&&z.c(),X=B(),K&&K.c(),q=B(),M=g("span"),p=$("Notes:"),n=B(),k=g("div"),te&&te.c(),G=B(),Z=g("div"),le=g("span"),ie=$("Tags:"),pe=B(),de(ne.$$.fragment),this.h()},l(E){e=b(E,"HR",{id:!0,class:!0}),s=H(E),t=b(E,"LI",{id:!0,class:!0});var L=y(t);l=b(L,"INPUT",{class:!0,type:!0,"data-id":!0}),u=H(L),a=b(L,"BUTTON",{class:!0});var we=y(a);v=b(we,"I",{class:!0}),y(v).forEach(c),we.forEach(c),m=H(L),_=b(L,"BUTTON",{class:!0,title:!0});var ze=y(_);h=b(ze,"I",{class:!0}),y(h).forEach(c),ze.forEach(c),A=H(L),S=b(L,"INPUT",{id:!0,title:!0,class:!0,type:!0}),O=H(L),R=b(L,"LABEL",{for:!0,class:!0}),y(R).forEach(c),N=H(L),T=b(L,"DETAILS",{class:!0});var Ae=y(T);C=b(Ae,"SUMMARY",{class:!0});var De=y(C);P=b(De,"DFN",{id:!0,class:!0,contenteditable:!0});var Ke=y(P);Q=x(Ke,J),Ke.forEach(c),oe=H(De),w=b(De,"DIV",{class:!0}),y(w).forEach(c),De.forEach(c),D=H(Ae),W=b(Ae,"DIV",{class:!0});var ae=y(W);z&&z.l(ae),X=H(ae),K&&K.l(ae),q=H(ae),M=b(ae,"SPAN",{class:!0});var Ye=y(M);p=x(Ye,"Notes:"),Ye.forEach(c),n=H(ae),k=b(ae,"DIV",{id:!0,class:!0,contenteditable:!0});var Ge=y(k);te&&te.l(Ge),Ge.forEach(c),G=H(ae),Z=b(ae,"DIV",{class:!0});var Se=y(Z);le=b(Se,"SPAN",{class:!0});var Je=y(le);ie=x(Je,"Tags:"),Je.forEach(c),pe=H(Se),ce(ne.$$.fragment,Se),Se.forEach(c),ae.forEach(c),Ae.forEach(c),L.forEach(c),this.h()},h(){f(e,"id",r=o[1]+"-hr-"+o[0].id),f(e,"class","svelte-1ueo1y0"),f(l,"class","select-word svelte-1ueo1y0"),f(l,"type","checkbox"),f(l,"data-id",i=o[0].id),f(v,"class","fa-solid fa-xmark"),f(a,"class","remove-word-btn svelte-1ueo1y0"),f(h,"class","fa-solid fa-arrows-rotate"),f(_,"class","refresh-btn svelte-1ueo1y0"),f(_,"title","Refresh defintion"),f(S,"id",U=o[1]+"-fav-"+o[0].id),f(S,"title","Favorite"),f(S,"class","fav-checkbox svelte-1ueo1y0"),f(S,"type","checkbox"),f(R,"for",Y=o[1]+"-fav-"+o[0].id),f(R,"class","fav-label svelte-1ueo1y0"),f(P,"id",re=o[1]+"-word-"+o[0].id),f(P,"class","word svelte-1ueo1y0"),f(P,"contenteditable","true"),f(w,"class","detail-arrow svelte-1ueo1y0"),f(C,"class","svelte-1ueo1y0"),f(M,"class","def-label svelte-1ueo1y0"),f(k,"id",I=o[1]+"-def-"+o[0].id),f(k,"class","word-definition svelte-1ueo1y0"),f(k,"contenteditable","true"),f(le,"class","tags-label svelte-1ueo1y0"),f(Z,"class","tag-list svelte-1ueo1y0"),f(W,"class","detail-content svelte-1ueo1y0"),T.open=Te=Array.isArray(o[2])&&o[2].length>0,f(T,"class","svelte-1ueo1y0"),f(t,"id",Ie=o[1]+"-"+o[0].id),f(t,"class","word-item svelte-1ueo1y0")},m(E,L){V(E,e,L),V(E,s,L),V(E,t,L),d(t,l),d(t,u),d(t,a),d(a,v),d(t,m),d(t,_),d(_,h),d(t,A),d(t,S),S.checked=o[0].favorite,d(t,O),d(t,R),d(t,N),d(t,T),d(T,C),d(C,P),d(P,Q),d(C,oe),d(C,w),d(T,D),d(T,W),z&&z.m(W,null),d(W,X),K&&K.m(W,null),d(W,q),d(W,M),d(M,p),d(W,n),d(W,k),te&&te.m(k,null),d(W,G),d(W,Z),d(Z,le),d(le,ie),d(Z,pe),_e(ne,Z,null),se=!0,He||(Re=[F(a,"click",o[12]),F(_,"click",o[10]),F(S,"change",o[13]),F(S,"change",o[7]),F(P,"blur",o[14]),F(P,"keydown",o[11]),F(P,"click",Kt),F(k,"keydown",vt),F(k,"blur",o[15]),F(k,"focus",o[16])],He=!0)},p(E,[L]){(!se||L&3&&r!==(r=E[1]+"-hr-"+E[0].id))&&f(e,"id",r),(!se||L&1&&i!==(i=E[0].id))&&f(l,"data-id",i),(!se||L&3&&U!==(U=E[1]+"-fav-"+E[0].id))&&f(S,"id",U),L&1&&(S.checked=E[0].favorite),(!se||L&3&&Y!==(Y=E[1]+"-fav-"+E[0].id))&&f(R,"for",Y),(!se||L&1)&&J!==(J=E[0].word+"")&&ke(Q,J),(!se||L&3&&re!==(re=E[1]+"-word-"+E[0].id))&&f(P,"id",re),E[0].dict_def&&E[0].dict_def.audio.length>0?z?(z.p(E,L),L&1&&j(z,1)):(z=lt(E),z.c(),j(z,1),z.m(W,X)):z&&(ye(),ee(z,1,1,()=>{z=null}),Ee()),E[0].dict_def?K?(K.p(E,L),L&1&&j(K,1)):(K=st(E),K.c(),j(K,1),K.m(W,q)):K&&(ye(),ee(K,1,1,()=>{K=null}),Ee()),E[0].def?te?te.p(E,L):(te=ot(E),te.c(),te.m(k,null)):te&&(te.d(1),te=null),(!se||L&3&&I!==(I=E[1]+"-def-"+E[0].id))&&f(k,"id",I);const we={};L&2&&(we.key=E[1]),!Be&&L&1&&(Be=!0,we.tags=E[0].tags,mt(()=>Be=!1)),ne.$set(we),(!se||L&4&&Te!==(Te=Array.isArray(E[2])&&E[2].length>0))&&(T.open=Te),(!se||L&3&&Ie!==(Ie=E[1]+"-"+E[0].id))&&f(t,"id",Ie)},i(E){se||(j(z),j(K),j(ne.$$.fragment,E),se=!0)},o(E){ee(z),ee(K),ee(ne.$$.fragment,E),se=!1},d(E){E&&c(e),E&&c(s),E&&c(t),z&&z.d(),K&&K.d(),te&&te.d(),he(ne),He=!1,qe(Re)}}}const Kt=o=>{o.preventDefault()};function Yt(o,e,r){const s=Oe();let{key:t}=e,{item:l}=e,{highlight:i}=e;function u(){return t+"-def-"+l.id}function a(){return document.getElementById(t+"-word-"+l.id)}function v(){return document.getElementById(`${t}-${l.id}`)}function m(){return document.getElementById(u())}pt(()=>{const w=a();w&&S(w)}),yt(()=>{const w=a(),D=m();w&&(w.innerHTML=l.word),D&&l.def&&(D.innerHTML=l.def),R()});function _(){const w=a();if(w){if(r(0,l.word=w.innerHTML,l),l.word==""){A(l)||r(0,l.word=w.title,l);return}w.title!=l.word&&(S(w),s("updateWord",{word:l,key:t}))}}function h(){const w=m();w&&r(0,l.def=w.innerHTML.replaceAll("<br>",""),l),s("updateDefinition",{word:l,key:t})}function A(w){return window.confirm("Delete word?")?(s("deleteWord",{word:w,key:t}),!0):!1}function S(w){console.log("updating title to %s",l.word),w.title=l.word}function U(){s("updateWordTags",{word:l,key:t})}function O(){s("updateFavorite",{word:l,key:t})}function R(){if(Y(),i.length===0)return;const w=m(),D=v(),W=a();W&&(W.innerHTML=Fe(l.word,i)),w&&l.def&&(w.innerHTML=Fe(l.def,i)),D&&(D.querySelectorAll(".pos, .def, .syn, .ant").forEach(X=>X.innerHTML=Fe(X.innerHTML,i)),D.querySelectorAll(".tag").forEach(X=>{var q;i.some(M=>M=="#"+X.innerHTML.toLocaleLowerCase())&&((q=X.parentElement)==null||q.classList.add("highlight-tag"))}))}function Y(){const w=m(),D=v(),W=a();W&&(W.innerHTML=Le(W.innerHTML)),w&&(w.innerHTML=Le(w.innerHTML)),D&&D.querySelectorAll(".pos, .def, .syn, .ant").forEach(X=>X.innerHTML=Le(X.innerHTML))}function N(){var D;const w=(D=v())==null?void 0:D.querySelector("details");w&&(w.open=!0),s("refreshWord",{word:l,key:t})}function T(w){const D=w.target;if(w.code=="Escape"&&D){D.innerHTML=D.title,D.blur();return}vt(w)}const C=()=>A(l);function P(){l.favorite=this.checked,r(0,l)}const J=()=>_(),Q=()=>{h(),R()},re=()=>Y();function oe(w){o.$$.not_equal(l.tags,w)&&(l.tags=w,r(0,l))}return o.$$set=w=>{"key"in w&&r(1,t=w.key),"item"in w&&r(0,l=w.item),"highlight"in w&&r(2,i=w.highlight)},[l,t,i,_,h,A,U,O,R,Y,N,T,C,P,J,Q,re,oe]}class Gt extends ve{constructor(e){super(),ge(this,e,Yt,zt,be,{key:1,item:0,highlight:2})}}function it(o){let e,r,s,t;return{c(){e=g("button"),r=g("i"),this.h()},l(l){e=b(l,"BUTTON",{class:!0});var i=y(e);r=b(i,"I",{class:!0}),y(r).forEach(c),i.forEach(c),this.h()},h(){f(r,"class","fa-solid fa-x"),f(e,"class","reset-btn svelte-8w6wqe")},m(l,i){V(l,e,i),d(e,r),s||(t=F(e,"click",o[3]),s=!0)},p:fe,d(l){l&&c(e),s=!1,t()}}}function Jt(o){let e,r,s,t,l,i,u,a,v,m=o[0]&&it(o);return{c(){e=g("div"),r=g("form"),s=g("div"),t=g("i"),l=B(),i=g("input"),u=B(),m&&m.c(),this.h()},l(_){e=b(_,"DIV",{class:!0});var h=y(e);r=b(h,"FORM",{});var A=y(r);s=b(A,"DIV",{class:!0});var S=y(s);t=b(S,"I",{class:!0}),y(t).forEach(c),S.forEach(c),l=H(A),i=b(A,"INPUT",{placeholder:!0,class:!0}),u=H(A),m&&m.l(A),A.forEach(c),h.forEach(c),this.h()},h(){f(t,"class","fa-solid fa-magnifying-glass"),f(s,"class","search-icon svelte-8w6wqe"),f(i,"placeholder","filter"),f(i,"class","search-input form-control svelte-8w6wqe"),f(e,"class","search-container svelte-8w6wqe")},m(_,h){V(_,e,h),d(e,r),d(r,s),d(s,t),d(r,l),d(r,i),Ze(i,o[0]),d(r,u),m&&m.m(r,null),a||(v=[F(i,"input",o[5]),F(i,"input",o[1]),F(i,"keydown",o[2]),F(r,"submit",_t(o[1]))],a=!0)},p(_,[h]){h&1&&i.value!==_[0]&&Ze(i,_[0]),_[0]?m?m.p(_,h):(m=it(_),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},i:fe,o:fe,d(_){_&&c(e),m&&m.d(),a=!1,qe(v)}}}function Qt(o,e,r){const s=Oe();let{key:t}=e,l;function i(m){s("updateFilter",{search:l,key:t})}function u(m){Pt(m)&&(r(0,l=""),s("updateFilter",{search:l,key:t}))}function a(m){r(0,l=""),s("updateFilter",{search:l,key:t})}function v(){l=this.value,r(0,l)}return o.$$set=m=>{"key"in m&&r(4,t=m.key)},[l,i,u,a,t,v]}class Xt extends ve{constructor(e){super(),ge(this,e,Qt,Jt,be,{key:4})}}function nt(o){let e,r;return{c(){e=g("div"),r=$(o[0]),this.h()},l(s){e=b(s,"DIV",{class:!0});var t=y(e);r=x(t,o[0]),t.forEach(c),this.h()},h(){f(e,"class","alert-box svelte-9zlq1k")},m(s,t){V(s,e,t),d(e,r),o[3](e)},p(s,t){t&1&&ke(r,s[0])},d(s){s&&c(e),o[3](null)}}}function Zt(o){let e,r=o[0]&&nt(o);return{c(){r&&r.c(),e=me()},l(s){r&&r.l(s),e=me()},m(s,t){r&&r.m(s,t),V(s,e,t)},p(s,[t]){s[0]?r?r.p(s,t):(r=nt(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:fe,o:fe,d(s){r&&r.d(s),s&&c(e)}}}function $t(o,e,r){let{message:s}=e,{remove_time:t=4e3}=e,l,i,u;pt(()=>{i=setTimeout(a,t),u=setTimeout(v,t+1500)}),Tt(()=>{i&&clearTimeout(i),u&&clearTimeout(u)});function a(){r(1,l.style.opacity="0",l)}function v(){var _;r(0,s=void 0),(_=l.parentNode)==null||_.removeChild(l)}function m(_){Ce[_?"unshift":"push"](()=>{l=_,r(1,l)})}return o.$$set=_=>{"message"in _&&r(0,s=_.message),"remove_time"in _&&r(2,t=_.remove_time)},[s,l,t,m]}class xt extends ve{constructor(e){super(),ge(this,e,$t,Zt,be,{message:0,remove_time:2})}}function at(o,e,r){const s=o.slice();return s[31]=e[r],s}function ft(o){let e,r,s,t=o[6].length+"",l,i,u,a=o[1].words.length+"",v,m;return{c(){e=g("div"),r=$("Showing "),s=g("b"),l=$(t),i=$(" out of "),u=g("b"),v=$(a),m=$(" words"),this.h()},l(_){e=b(_,"DIV",{class:!0});var h=y(e);r=x(h,"Showing "),s=b(h,"B",{});var A=y(s);l=x(A,t),A.forEach(c),i=x(h," out of "),u=b(h,"B",{});var S=y(u);v=x(S,a),S.forEach(c),m=x(h," words"),h.forEach(c),this.h()},h(){f(e,"class","filter-count svelte-r7d7ux")},m(_,h){V(_,e,h),d(e,r),d(e,s),d(s,l),d(e,i),d(e,u),d(u,v),d(e,m)},p(_,h){h[0]&64&&t!==(t=_[6].length+"")&&ke(l,t),h[0]&2&&a!==(a=_[1].words.length+"")&&ke(v,a)},d(_){_&&c(e)}}}function ut(o){let e;function r(l,i){return l[2]?tl:el}let s=r(o),t=s(o);return{c(){t.c(),e=me()},l(l){t.l(l),e=me()},m(l,i){t.m(l,i),V(l,e,i)},p(l,i){s!==(s=r(l))&&(t.d(1),t=s(l),t&&(t.c(),t.m(e.parentNode,e)))},d(l){t.d(l),l&&c(e)}}}function el(o){let e,r;return{c(){e=g("p"),r=$("No words have been added")},l(s){e=b(s,"P",{});var t=y(e);r=x(t,"No words have been added"),t.forEach(c)},m(s,t){V(s,e,t),d(e,r)},d(s){s&&c(e)}}}function tl(o){let e,r;return{c(){e=g("p"),r=$("No matching words")},l(s){e=b(s,"P",{});var t=y(e);r=x(t,"No matching words"),t.forEach(c)},m(s,t){V(s,e,t),d(e,r)},d(s){s&&c(e)}}}function dt(o,e){let r,s,t;return s=new Gt({props:{key:e[0],item:e[31],highlight:e[3]}}),s.$on("updateWord",e[23]),s.$on("updateDefinition",e[24]),s.$on("deleteWord",e[25]),s.$on("updateWordTags",e[26]),s.$on("updateFavorite",e[27]),s.$on("refreshWord",e[28]),{key:o,first:null,c(){r=me(),de(s.$$.fragment),this.h()},l(l){r=me(),ce(s.$$.fragment,l),this.h()},h(){this.first=r},m(l,i){V(l,r,i),_e(s,l,i),t=!0},p(l,i){e=l;const u={};i[0]&1&&(u.key=e[0]),i[0]&64&&(u.item=e[31]),i[0]&8&&(u.highlight=e[3]),s.$set(u)},i(l){t||(j(s.$$.fragment,l),t=!0)},o(l){ee(s.$$.fragment,l),t=!1},d(l){l&&c(r),he(s,l)}}}function ct(o){let e,r,s;function t(i){o[29](i)}let l={};return o[7]!==void 0&&(l.message=o[7]),e=new xt({props:l}),Ce.push(()=>ht(e,"message",t,o[7])),{c(){de(e.$$.fragment)},l(i){ce(e.$$.fragment,i)},m(i,u){_e(e,i,u),s=!0},p(i,u){const a={};!r&&u[0]&128&&(r=!0,a.message=i[7],mt(()=>r=!1)),e.$set(a)},i(i){s||(j(e.$$.fragment,i),s=!0)},o(i){ee(e.$$.fragment,i),s=!1},d(i){he(e,i)}}}function ll(o){let e,r,s,t,l,i,u,a,v,m,_,h,A,S,U,O,R,Y,N,T=[],C=new Map,P,J,Q,re,oe,w;r=new Xt({props:{key:o[0]}}),r.$on("updateFilter",o[20]),O=new Vt({props:{key:o[0],sort_by:o[1].sort_by,sort_order:o[1].sort_order}}),O.$on("updateSort",o[22]);let D=o[2]!=""&&ft(o),W=o[6];const X=p=>p[31].id;for(let p=0;p<W.length;p+=1){let n=at(o,W,p),k=X(n);C.set(k,T[p]=dt(k,n))}let q=null;W.length||(q=ut(o));let M=o[7]&&ct(o);return{c(){e=g("div"),de(r.$$.fragment),s=B(),t=g("div"),l=g("div"),i=g("div"),u=g("input"),a=B(),v=g("div"),m=g("button"),_=B(),h=g("button"),A=B(),S=g("button"),U=B(),de(O.$$.fragment),R=B(),D&&D.c(),Y=B(),N=g("ul");for(let p=0;p<T.length;p+=1)T[p].c();q&&q.c(),J=B(),M&&M.c(),Q=me(),this.h()},l(p){e=b(p,"DIV",{class:!0});var n=y(e);ce(r.$$.fragment,n),s=H(n),t=b(n,"DIV",{class:!0});var k=y(t);l=b(k,"DIV",{class:!0});var I=y(l);i=b(I,"DIV",{class:!0});var G=y(i);u=b(G,"INPUT",{type:!0,class:!0}),a=H(G),v=b(G,"DIV",{class:!0});var Z=y(v);m=b(Z,"BUTTON",{class:!0,title:!0}),y(m).forEach(c),_=H(Z),h=b(Z,"BUTTON",{class:!0,title:!0}),y(h).forEach(c),A=H(Z),S=b(Z,"BUTTON",{class:!0,title:!0}),y(S).forEach(c),Z.forEach(c),G.forEach(c),I.forEach(c),U=H(k),ce(O.$$.fragment,k),k.forEach(c),R=H(n),D&&D.l(n),n.forEach(c),Y=H(p),N=b(p,"UL",{class:!0});var le=y(N);for(let ie=0;ie<T.length;ie+=1)T[ie].l(le);q&&q.l(le),le.forEach(c),J=H(p),M&&M.l(p),Q=me(),this.h()},h(){f(u,"type","checkbox"),f(u,"class","select-checkbox"),f(m,"class","show-btn svelte-r7d7ux"),f(m,"title","Show selected"),f(h,"class","hide-btn svelte-r7d7ux"),f(h,"title","Hide selected"),f(S,"class","del-btn svelte-r7d7ux"),f(S,"title","Delete selected"),f(v,"class","select-group svelte-r7d7ux"),f(i,"class","select-options"),f(l,"class","show-hide svelte-r7d7ux"),f(t,"class","options-bar svelte-r7d7ux"),f(e,"class","sticky-search-bar list-group-item svelte-r7d7ux"),f(N,"class",P="word-group "+o[5]+" svelte-r7d7ux")},m(p,n){V(p,e,n),_e(r,e,null),d(e,s),d(e,t),d(t,l),d(l,i),d(i,u),u.checked=o[4],d(i,a),d(i,v),d(v,m),d(v,_),d(v,h),d(v,A),d(v,S),d(t,U),_e(O,t,null),d(e,R),D&&D.m(e,null),V(p,Y,n),V(p,N,n);for(let k=0;k<T.length;k+=1)T[k].m(N,null);q&&q.m(N,null),V(p,J,n),M&&M.m(p,n),V(p,Q,n),re=!0,oe||(w=[F(u,"change",o[21]),F(u,"change",o[8]),F(m,"click",o[10]),F(h,"click",o[11]),F(S,"click",o[9])],oe=!0)},p(p,n){const k={};n[0]&1&&(k.key=p[0]),r.$set(k),n[0]&16&&(u.checked=p[4]);const I={};n[0]&1&&(I.key=p[0]),n[0]&2&&(I.sort_by=p[1].sort_by),n[0]&2&&(I.sort_order=p[1].sort_order),O.$set(I),p[2]!=""?D?D.p(p,n):(D=ft(p),D.c(),D.m(e,null)):D&&(D.d(1),D=null),n[0]&258125&&(W=p[6],ye(),T=It(T,n,X,1,p,W,C,N,At,dt,null,at),Ee(),!W.length&&q?q.p(p,n):W.length?q&&(q.d(1),q=null):(q=ut(p),q.c(),q.m(N,null))),(!re||n[0]&32&&P!==(P="word-group "+p[5]+" svelte-r7d7ux"))&&f(N,"class",P),p[7]?M?(M.p(p,n),n[0]&128&&j(M,1)):(M=ct(p),M.c(),j(M,1),M.m(Q.parentNode,Q)):M&&(ye(),ee(M,1,1,()=>{M=null}),Ee())},i(p){if(!re){j(r.$$.fragment,p),j(O.$$.fragment,p);for(let n=0;n<W.length;n+=1)j(T[n]);j(M),re=!0}},o(p){ee(r.$$.fragment,p),ee(O.$$.fragment,p);for(let n=0;n<T.length;n+=1)ee(T[n]);ee(M),re=!1},d(p){p&&c(e),he(r),he(O),D&&D.d(),p&&c(Y),p&&c(N);for(let n=0;n<T.length;n+=1)T[n].d();q&&q.d(),p&&c(J),M&&M.d(p),p&&c(Q),oe=!1,qe(w)}}}function We(){return document.querySelectorAll('input[type="checkbox"].select-word'),Me(o=>!0)}function Me(o){const e=document.querySelectorAll('input[type="checkbox"].select-word');if(!e)return 0;let r=0;return e.forEach(s=>{s.checked&&o(s)&&(r+=1)}),r}function rl(o,e,r){let s,{key:t="words"}=e,l=Nt(t);l=Ue(l);let i=!1,u="",a="",v,m,_;_=new URLSearchParams(window.location.search).get("word"),_&&$e(parseInt(_),t);function h(){let n=We()===0;const k=document.querySelectorAll('input[type="checkbox"].select-word');if(!k)return 0;console.log("selecting with action=%i",n);let I=0;k.forEach(G=>{G.checked=n,I+=1}),I!==0&&r(4,i=n)}async function A(){const n=We();if(n===0||!window.confirm(n===1?"Delete word?":`Delete ${n} words?`))return!1;const k=Me(I=>{var G,Z;if(I.dataset.id){const le=Number(I.dataset.id);if(!Number.isNaN(le))if(et(l,le)){const ie=I.parentElement;ie&&((G=ie.parentElement)==null||G.removeChild(ie));const pe=document.getElementById(`${t}-hr-${le}`);return pe&&((Z=pe.parentElement)==null||Z.removeChild(pe)),!0}else console.log(`delete for ${le} failed`)}return!1});return await Dt(),k>0&&(ue(l),r(1,l)),!0}function S(){We()===0?v.forEach(n=>{var I;const k=(I=document.getElementById(`${t}-${n.id}`))==null?void 0:I.querySelector("details");k&&(k.open=!0)}):Me(n=>{var I;const k=(I=n.parentElement)==null?void 0:I.querySelector("details");return k?(k.open=!0,!0):!1})}function U(){We()===0?v.forEach(n=>{var I;const k=(I=document.getElementById(`${t}-${n.id}`))==null?void 0:I.querySelector("details");k&&(k.open=!1)}):Me(n=>{var I;const k=(I=n.parentElement)==null?void 0:I.querySelector("details");return k?(k.open=!1,!0):!1})}function O(n){console.log(n),n.key==t&&(n.word&&Lt(l,n.word.id,n.word.word)?(r(1,l=Ue(l)),console.log("updated list: %o",l.words),ue(l),r(1,l),$e(n.word.id,t)):console.log("word update failed: %o",n.word))}function R(n){if(n.key!=t||!n.word.def)return;let k=Le(n.word.def.trim());Mt(l,n.word.id,k)?ue(l):console.log("definition update failed")}function Y(n){function k(I,G){return I.tags=G.tags,I.cache=xe(I),!0}n.key==t&&(Ve(l,n.word,k),ue(l),r(1,l))}function N(n){function k(I,G){return I.favorite=G.favorite,!0}n.key==t&&(Ve(l,n.word,k),ue(l),r(1,l))}function T(n){function k(I,G){return I.dict_def=G.dict_def,!0}n.key==t&&qt.default.lookup(n.word.word).then(I=>{I?n.word.dict_def=I:r(7,m=`'${n.word.word}' has no dictionary definition`)}).finally(()=>{n.word.cache=xe(n.word),Ve(l,n.word,k),ue(l),r(1,l)})}function C(n){n.key==t&&(et(l,n.word.id)?(ue(l),r(1,l)):console.log("remove word failed"))}function P(n){n.key==t&&(r(1,l.sort_by=n.sort_by,l),r(1,l.sort_order=n.sort_order,l),Ue(l),ue(l))}function J(n){n.key==t&&r(2,u=n.search.toLocaleLowerCase())}const Q=n=>{J(n.detail)};function re(){i=this.checked,r(4,i)}const oe=n=>P(n.detail),w=n=>O(n.detail),D=n=>R(n.detail),W=n=>C(n.detail),X=n=>Y(n.detail),q=n=>N(n.detail),M=n=>T(n.detail);function p(n){m=n,r(7,m)}return o.$$set=n=>{"key"in n&&r(0,t=n.key)},o.$$.update=()=>{o.$$.dirty[0]&4&&r(3,s=u.split(" ").filter(n=>n.length>0)),o.$$.dirty[0]&4&&r(5,a=u===""?"":"full-defs"),o.$$.dirty[0]&10&&r(6,v=l.words.filter(n=>Wt(s,n)))},[t,l,u,s,i,a,v,m,h,A,S,U,O,R,Y,N,T,C,P,J,Q,re,oe,w,D,W,X,q,M,p]}class sl extends ve{constructor(e){super(),ge(this,e,rl,ll,be,{key:0},null,[-1,-1])}}function ol(o){let e,r,s,t,l,i,u;return i=new sl({props:{key:"words"}}),{c(){e=g("nav"),r=g("a"),s=$("Add words"),t=B(),l=g("div"),de(i.$$.fragment),this.h()},l(a){e=b(a,"NAV",{class:!0});var v=y(e);r=b(v,"A",{href:!0});var m=y(r);s=x(m,"Add words"),m.forEach(c),v.forEach(c),t=H(a),l=b(a,"DIV",{class:!0});var _=y(l);ce(i.$$.fragment,_),_.forEach(c),this.h()},h(){f(r,"href",St+"/add"),f(e,"class","main"),f(l,"class","list-vocab-container")},m(a,v){V(a,e,v),d(e,r),d(r,s),V(a,t,v),V(a,l,v),_e(i,l,null),u=!0},p:fe,i(a){u||(j(i.$$.fragment,a),u=!0)},o(a){ee(i.$$.fragment,a),u=!1},d(a){a&&c(e),a&&c(t),a&&c(l),he(i)}}}class ul extends ve{constructor(e){super(),ge(this,e,null,ol,be,{})}}export{ul as default};
