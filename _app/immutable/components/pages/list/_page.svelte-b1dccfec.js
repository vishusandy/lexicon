import{S as Ee,i as Te,s as Ie,k as w,q as Z,l as b,m as y,r as x,h as u,n as a,Q as It,b as G,G as c,T as ot,M as F,N as bt,B as me,P as Oe,R as Je,U as Dt,V as St,a as V,c as M,W as it,u as Pe,J as kt,K as yt,w as de,x as fe,L as je,y as ce,f as C,g as Se,t as Y,d as Ne,O as Et,z as ue,j as Nt,o as At,I as Lt,e as ye,X as Wt,Y as qt,A as Bt}from"../../../chunks/index-e56e8534.js";import{S as Ue,g as Xe,a as Vt,h as ke,e as Fe,r as De,l as Mt,c as Ye,s as nt,i as Ut,d as ve,j as Ft,k as $t,n as ze,A as Ht,o as at,p as dt}from"../../../chunks/words-6d2fe7f5.js";import{T as Pt,D as jt,e as Ot,a as Rt}from"../../../chunks/DictDef-50549400.js";import{A as Ct}from"../../../chunks/Alert-392b790a.js";import{N as Gt}from"../../../chunks/Nav-34f01931.js";function Kt(r){let t,o,s,l,e,i,h,f,v,p,m,g,D,S,$,J,H;return{c(){t=w("div"),o=w("form"),s=w("div"),l=w("select"),e=w("option"),i=Z("Word"),f=w("option"),v=Z("Date"),g=w("input"),S=w("label"),this.h()},l(B){t=b(B,"DIV",{class:!0});var U=y(t);o=b(U,"FORM",{});var j=y(o);s=b(j,"DIV",{class:!0});var O=y(s);l=b(O,"SELECT",{id:!0,title:!0,class:!0});var L=y(l);e=b(L,"OPTION",{});var q=y(e);i=x(q,"Word"),q.forEach(u),f=b(L,"OPTION",{});var ee=y(f);v=x(ee,"Date"),ee.forEach(u),L.forEach(u),g=b(O,"INPUT",{id:!0,type:!0,title:!0,class:!0}),S=b(O,"LABEL",{for:!0,class:!0,title:!0}),y(S).forEach(u),O.forEach(u),j.forEach(u),U.forEach(u),this.h()},h(){e.__value="word",e.value=e.__value,e.selected=h=r[0]==Ue.Word,f.__value="id",f.value=f.__value,f.selected=p=r[0]==Ue.Id,a(l,"id",m=r[1]+"-sort-by"),a(l,"title","Sort by"),a(l,"class","svelte-1kb2ef0"),r[0]===void 0&&It(()=>r[7].call(l)),a(g,"id",D=r[1]+"-sort-order"),a(g,"type","checkbox"),a(g,"title",r[3]),a(g,"class","sort-checkbox form-check-input svelte-1kb2ef0"),a(S,"for",$=r[1]+"-sort-order"),a(S,"class","sort-checkbox-label form-check-label svelte-1kb2ef0"),a(S,"title",r[3]),a(s,"class","sort-form-options svelte-1kb2ef0"),a(t,"class","sort-container")},m(B,U){G(B,t,U),c(t,o),c(o,s),c(s,l),c(l,e),c(e,i),c(l,f),c(f,v),ot(l,r[0]),c(s,g),g.checked=r[2],c(s,S),J||(H=[F(l,"change",r[7]),F(l,"change",r[4]),F(g,"change",r[8]),F(g,"change",r[4]),F(o,"submit",bt(r[6]))],J=!0)},p(B,[U]){U&1&&h!==(h=B[0]==Ue.Word)&&(e.selected=h),U&1&&p!==(p=B[0]==Ue.Id)&&(f.selected=p),U&2&&m!==(m=B[1]+"-sort-by")&&a(l,"id",m),U&1&&ot(l,B[0]),U&2&&D!==(D=B[1]+"-sort-order")&&a(g,"id",D),U&8&&a(g,"title",B[3]),U&4&&(g.checked=B[2]),U&2&&$!==($=B[1]+"-sort-order")&&a(S,"for",$),U&8&&a(S,"title",B[3])},i:me,o:me,d(B){B&&u(t),J=!1,Oe(H)}}}function Xt(r,t,o){const s=Je();let{key:l}=t,{sort_by:e}=t,{sort_order:i}=t,h,f=i===Xe.Desc;function v(D){s("updateSort",{sort_by:e,sort_order:i,key:l})}function p(D){Dt.call(this,r,D)}function m(){e=St(this),o(0,e)}function g(){f=this.checked,o(2,f)}return r.$$set=D=>{"key"in D&&o(1,l=D.key),"sort_by"in D&&o(0,e=D.sort_by),"sort_order"in D&&o(5,i=D.sort_order)},r.$$.update=()=>{r.$$.dirty&4&&o(5,i=f?Xe.Desc:Xe.Asc),r.$$.dirty&4&&o(3,h=f?"Descending sort order":"Ascending sort order")},[e,l,f,h,v,i,p,m,g]}class Yt extends Ee{constructor(t){super(),Te(this,t,Xt,Kt,Ie,{key:1,sort_by:0,sort_order:5})}}function zt(r){let t,o,s,l,e,i,h,f,v,p;return{c(){t=w("button"),o=w("span"),s=Z(r[1]),l=V(),e=w("audio"),i=w("a"),h=Z("Audio"),this.h()},l(m){t=b(m,"BUTTON",{class:!0});var g=y(t);o=b(g,"SPAN",{class:!0});var D=y(o);s=x(D,r[1]),D.forEach(u),l=M(g),e=b(g,"AUDIO",{src:!0});var S=y(e);i=b(S,"A",{href:!0});var $=y(i);h=x($,"Audio"),$.forEach(u),S.forEach(u),g.forEach(u),this.h()},h(){a(o,"class","phonetics svelte-1owj048"),a(i,"href",r[0]),it(e.src,f=r[0])||a(e,"src",f),a(t,"class","svelte-1owj048")},m(m,g){G(m,t,g),c(t,o),c(o,s),c(t,l),c(t,e),c(e,i),c(i,h),v||(p=F(t,"click",Jt),v=!0)},p(m,[g]){g&2&&Pe(s,m[1]),g&1&&a(i,"href",m[0]),g&1&&!it(e.src,f=m[0])&&a(e,"src",f)},i:me,o:me,d(m){m&&u(t),v=!1,p()}}}function Jt(r){var o;const t=(o=r.target)==null?void 0:o.querySelector("audio");t&&t.play()}function Qt(r,t,o){let{src:s}=t,{title:l=""}=t;return r.$$set=e=>{"src"in e&&o(0,s=e.src),"title"in e&&o(1,l=e.title)},[s,l]}class Zt extends Ee{constructor(t){super(),Te(this,t,Qt,zt,Ie,{src:0,title:1})}}function ft(r,t,o){const s=r.slice();return s[28]=t[o],s}function ct(r){let t,o,s=r[0].dict_def.audio,l=[];for(let i=0;i<s.length;i+=1)l[i]=ut(ft(r,s,i));const e=i=>Y(l[i],1,1,()=>{l[i]=null});return{c(){t=w("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=b(i,"DIV",{class:!0});var h=y(t);for(let f=0;f<l.length;f+=1)l[f].l(h);h.forEach(u),this.h()},h(){a(t,"class","audio-entries svelte-1llcop8")},m(i,h){G(i,t,h);for(let f=0;f<l.length;f+=1)l[f].m(t,null);o=!0},p(i,h){if(h&1){s=i[0].dict_def.audio;let f;for(f=0;f<s.length;f+=1){const v=ft(i,s,f);l[f]?(l[f].p(v,h),C(l[f],1)):(l[f]=ut(v),l[f].c(),C(l[f],1),l[f].m(t,null))}for(Se(),f=s.length;f<l.length;f+=1)e(f);Ne()}},i(i){if(!o){for(let h=0;h<s.length;h+=1)C(l[h]);o=!0}},o(i){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)Y(l[h]);o=!1},d(i){i&&u(t),Lt(l,i)}}}function ut(r){let t,o;return t=new Zt({props:{src:r[28].url,title:r[28].phonetics}}),{c(){de(t.$$.fragment)},l(s){fe(t.$$.fragment,s)},m(s,l){ce(t,s,l),o=!0},p(s,l){const e={};l&1&&(e.src=s[28].url),l&1&&(e.title=s[28].phonetics),t.$set(e)},i(s){o||(C(t.$$.fragment,s),o=!0)},o(s){Y(t.$$.fragment,s),o=!1},d(s){ue(t,s)}}}function ht(r){let t,o;return t=new jt({props:{dict:r[3],search:r[2]}}),{c(){de(t.$$.fragment)},l(s){fe(t.$$.fragment,s)},m(s,l){ce(t,s,l),o=!0},p(s,l){const e={};l&8&&(e.dict=s[3]),l&4&&(e.search=s[2]),t.$set(e)},i(s){o||(C(t.$$.fragment,s),o=!0)},o(s){Y(t.$$.fragment,s),o=!1},d(s){ue(t,s)}}}function xt(r){let t,o,s,l,e,i,h,f,v,p,m,g,D,S,$,J,H,B,U,j,O,L,q=r[0].word+"",ee,le,oe,Q,re,R,ne,_,I,W,n,E,d,k,N,P,se,ie,z,he,ge,_e,we,Re,Ce,ae,Ge,Ae,Le,te,Ke,Qe,K=r[0].dict_def&&r[0].dict_def.audio.length>0&&ct(r),X=r[3]&&ht(r);function Tt(T){r[17](T)}let Ze={key:r[1]};return r[0].tags!==void 0&&(Ze.tags=r[0].tags),ae=new Pt({props:Ze}),kt.push(()=>yt(ae,"tags",Tt,r[0].tags)),ae.$on("updateTags",r[6]),{c(){t=w("hr"),s=V(),l=w("li"),e=w("input"),h=V(),f=w("button"),v=w("i"),p=V(),m=w("button"),g=w("i"),D=V(),S=w("input"),J=V(),H=w("label"),U=V(),j=w("details"),O=w("summary"),L=w("dfn"),ee=Z(q),oe=V(),Q=w("div"),re=V(),R=w("div"),K&&K.c(),ne=V(),X&&X.c(),_=V(),I=w("div"),W=w("div"),n=w("button"),E=w("i"),k=V(),N=w("div"),P=w("legend"),se=Z("Notes"),ie=V(),z=w("textarea"),ge=V(),_e=w("div"),we=w("div"),Re=Z("Tags"),Ce=V(),de(ae.$$.fragment),this.h()},l(T){t=b(T,"HR",{id:!0,class:!0}),s=M(T),l=b(T,"LI",{id:!0,class:!0});var A=y(l);e=b(A,"INPUT",{class:!0,type:!0,"data-id":!0}),h=M(A),f=b(A,"BUTTON",{class:!0});var be=y(f);v=b(be,"I",{class:!0}),y(v).forEach(u),be.forEach(u),p=M(A),m=b(A,"BUTTON",{class:!0,title:!0});var xe=y(m);g=b(xe,"I",{class:!0}),y(g).forEach(u),xe.forEach(u),D=M(A),S=b(A,"INPUT",{id:!0,title:!0,class:!0,type:!0}),J=M(A),H=b(A,"LABEL",{for:!0,class:!0}),y(H).forEach(u),U=M(A),j=b(A,"DETAILS",{class:!0});var We=y(j);O=b(We,"SUMMARY",{class:!0});var qe=y(O);L=b(qe,"DFN",{id:!0,class:!0,contenteditable:!0});var et=y(L);ee=x(et,q),et.forEach(u),oe=M(qe),Q=b(qe,"DIV",{class:!0}),y(Q).forEach(u),qe.forEach(u),re=M(We),R=b(We,"DIV",{class:!0});var pe=y(R);K&&K.l(pe),ne=M(pe),X&&X.l(pe),_=M(pe),I=b(pe,"DIV",{class:!0});var Be=y(I);W=b(Be,"DIV",{id:!0,class:!0});var tt=y(W);n=b(tt,"BUTTON",{title:!0,class:!0});var lt=y(n);E=b(lt,"I",{class:!0}),y(E).forEach(u),lt.forEach(u),tt.forEach(u),k=M(Be),N=b(Be,"DIV",{id:!0,class:!0});var Ve=y(N);P=b(Ve,"LEGEND",{class:!0});var rt=y(P);se=x(rt,"Notes"),rt.forEach(u),ie=M(Ve),z=b(Ve,"TEXTAREA",{class:!0}),y(z).forEach(u),Ve.forEach(u),Be.forEach(u),ge=M(pe),_e=b(pe,"DIV",{class:!0});var Me=y(_e);we=b(Me,"DIV",{class:!0});var st=y(we);Re=x(st,"Tags"),st.forEach(u),Ce=M(Me),fe(ae.$$.fragment,Me),Me.forEach(u),pe.forEach(u),We.forEach(u),A.forEach(u),this.h()},h(){a(t,"id",o=r[1]+"-hr-"+r[0].id),a(t,"class","svelte-1llcop8"),a(e,"class","select-word svelte-1llcop8"),a(e,"type","checkbox"),a(e,"data-id",i=r[0].id),a(v,"class","fa-solid fa-xmark"),a(f,"class","remove-word-btn remove-btn svelte-1llcop8"),a(g,"class","fa-solid fa-arrows-rotate"),a(m,"class","refresh-btn svelte-1llcop8"),a(m,"title","Refresh defintion"),a(S,"id",$=r[1]+"-fav-"+r[0].id),a(S,"title","Favorite"),a(S,"class","fav-checkbox svelte-1llcop8"),a(S,"type","checkbox"),a(H,"for",B=r[1]+"-fav-"+r[0].id),a(H,"class","fav-label svelte-1llcop8"),a(L,"id",le=r[1]+"-word-"+r[0].id),a(L,"class","word svelte-1llcop8"),a(L,"contenteditable","true"),a(Q,"class","detail-arrow svelte-1llcop8"),a(O,"class","svelte-1llcop8"),a(E,"class","fa-solid fa-circle-plus"),a(n,"title","Add Note"),a(n,"class","svelte-1llcop8"),a(W,"id",d="note-empty-"+r[1]+"-"+r[0].id),a(W,"class","note-empty hidden svelte-1llcop8"),a(P,"class","svelte-1llcop8"),a(z,"class","note-text form-control svelte-1llcop8"),a(N,"id",he="note-shown-"+r[1]+"-"+r[0].id),a(N,"class","note-shown hidden svelte-1llcop8"),a(I,"class","note-container svelte-1llcop8"),a(we,"class","tags-label svelte-1llcop8"),a(_e,"class","tag-list svelte-1llcop8"),a(R,"class","detail-content svelte-1llcop8"),j.open=Ae=Array.isArray(r[2])&&r[2].length>0,a(j,"class","svelte-1llcop8"),a(l,"id",Le=r[1]+"-"+r[0].id),a(l,"class","word-item svelte-1llcop8")},m(T,A){G(T,t,A),G(T,s,A),G(T,l,A),c(l,e),c(l,h),c(l,f),c(f,v),c(l,p),c(l,m),c(m,g),c(l,D),c(l,S),S.checked=r[0].favorite,c(l,J),c(l,H),c(l,U),c(l,j),c(j,O),c(O,L),c(L,ee),c(O,oe),c(O,Q),c(j,re),c(j,R),K&&K.m(R,null),c(R,ne),X&&X.m(R,null),c(R,_),c(R,I),c(I,W),c(W,n),c(n,E),c(I,k),c(I,N),c(N,P),c(P,se),c(N,ie),c(N,z),je(z,r[0].def),c(R,ge),c(R,_e),c(_e,we),c(we,Re),c(_e,Ce),ce(ae,_e,null),te=!0,Ke||(Qe=[F(f,"click",r[12]),F(m,"click",r[8]),F(S,"change",r[13]),F(S,"change",r[7]),F(L,"blur",r[14]),F(L,"keydown",r[9]),F(L,"click",el),F(n,"click",r[15]),F(z,"input",r[16]),F(z,"input",Vt),F(z,"blur",r[10])],Ke=!0)},p(T,[A]){(!te||A&3&&o!==(o=T[1]+"-hr-"+T[0].id))&&a(t,"id",o),(!te||A&1&&i!==(i=T[0].id))&&a(e,"data-id",i),(!te||A&3&&$!==($=T[1]+"-fav-"+T[0].id))&&a(S,"id",$),A&1&&(S.checked=T[0].favorite),(!te||A&3&&B!==(B=T[1]+"-fav-"+T[0].id))&&a(H,"for",B),(!te||A&1)&&q!==(q=T[0].word+"")&&Pe(ee,q),(!te||A&3&&le!==(le=T[1]+"-word-"+T[0].id))&&a(L,"id",le),T[0].dict_def&&T[0].dict_def.audio.length>0?K?(K.p(T,A),A&1&&C(K,1)):(K=ct(T),K.c(),C(K,1),K.m(R,ne)):K&&(Se(),Y(K,1,1,()=>{K=null}),Ne()),T[3]?X?(X.p(T,A),A&8&&C(X,1)):(X=ht(T),X.c(),C(X,1),X.m(R,_)):X&&(Se(),Y(X,1,1,()=>{X=null}),Ne()),(!te||A&3&&d!==(d="note-empty-"+T[1]+"-"+T[0].id))&&a(W,"id",d),A&1&&je(z,T[0].def),(!te||A&3&&he!==(he="note-shown-"+T[1]+"-"+T[0].id))&&a(N,"id",he);const be={};A&2&&(be.key=T[1]),!Ge&&A&1&&(Ge=!0,be.tags=T[0].tags,Et(()=>Ge=!1)),ae.$set(be),(!te||A&4&&Ae!==(Ae=Array.isArray(T[2])&&T[2].length>0))&&(j.open=Ae),(!te||A&3&&Le!==(Le=T[1]+"-"+T[0].id))&&a(l,"id",Le)},i(T){te||(C(K),C(X),C(ae.$$.fragment,T),te=!0)},o(T){Y(K),Y(X),Y(ae.$$.fragment,T),te=!1},d(T){T&&u(t),T&&u(s),T&&u(l),K&&K.d(),X&&X.d(),ue(ae),Ke=!1,Oe(Qe)}}}const el=r=>{r.preventDefault()};function tl(r,t,o){const s=Je();let{key:l}=t,{item:e}=t,{highlight:i}=t,h=e.dict_def;Nt(()=>{const _=ke(l,e.id),I=D();_&&(_.innerHTML=e.word),I&&e.def&&(I.innerHTML=e.def),f()});function f(){if(v(),i.length===0)return;const _=g(),I=ke(l,e.id);I&&(I.innerHTML=Fe(e.word,i)),_&&(_.querySelectorAll(".pos, .def, .syn, .ant").forEach(W=>W.innerHTML=Fe(W.innerHTML,i)),_.querySelectorAll(".tag").forEach(W=>{var n;i.some(E=>E=="#"+W.innerHTML.toLowerCase())&&((n=W.parentElement)==null||n.classList.add("highlight-tag"))}))}function v(){const _=g(),I=ke(l,e.id);I&&(I.innerHTML=De(I.innerHTML)),_&&(_.querySelectorAll(".pos, .def, .syn, .ant").forEach(W=>W.innerHTML=De(W.innerHTML)),_.querySelectorAll(".tag").forEach(W=>{var n;(n=W.parentElement)==null||n.classList.remove("highlight-tag")}))}function p(_,I){if(!I)return;let W={...I};for(let n of W.parts)n.definition=Fe(De(n.definition),_),n.part=Fe(De(n.part),_);return W}function m(){return l+"-def-"+e.id}function g(){return document.getElementById(`${l}-${e.id}`)}function D(){return document.getElementById(m())}At(()=>{L();const _=ke(l,e.id);_&&J(_)});function S(){const _=ke(l,e.id);if(_){if(o(0,e.word=_.innerHTML,e),e.word==""){$(e)||o(0,e.word=_.title,e);return}_.title!=e.word&&s("updateWord",{word:e,key:l})}}function $(_){return window.confirm("Delete word?")?(s("deleteWord",{word:_,key:l}),!0):!1}function J(_){_.title=e.word}function H(){s("updateWordTags",{word:e,key:l})}function B(){s("updateFavorite",{word:e,key:l})}function U(){var I;const _=(I=g())==null?void 0:I.querySelector("details");_&&(_.open=!0),s("refreshWord",{word:e,key:l})}function j(_){const I=_.target;if(_.code=="Escape"&&I){I.innerHTML=I.title,I.blur();return}Ot(_)}function O(){e.def===""&&o(0,e.def=void 0,e),L(),s("updateDefinition",{word:e,key:l})}function L(){e.def!==void 0&&e.def!==""?q(!1):ee()}function q(_){const I=document.getElementById(`note-empty-${l}-${e.id}`),W=document.getElementById(`note-shown-${l}-${e.id}`);if(I?I.classList.add("hidden"):console.log(`could not find: note-empty-${l}-${e.id}`),W&&(W.classList.remove("hidden"),_)){const n=W.querySelector("textarea");n&&n.focus()}}function ee(){const _=document.getElementById(`note-empty-${l}-${e.id}`),I=document.getElementById(`note-shown-${l}-${e.id}`);_&&_.classList.remove("hidden"),I&&I.classList.add("hidden")}const le=()=>$(e);function oe(){e.favorite=this.checked,o(0,e)}const Q=()=>S(),re=()=>q(!0);function R(){e.def=this.value,o(0,e)}function ne(_){r.$$.not_equal(e.tags,_)&&(e.tags=_,o(0,e))}return r.$$set=_=>{"key"in _&&o(1,l=_.key),"item"in _&&o(0,e=_.item),"highlight"in _&&o(2,i=_.highlight)},r.$$.update=()=>{r.$$.dirty&5&&o(3,h=p(i,e.dict_def))},[e,l,i,h,S,$,H,B,U,j,O,q,le,oe,Q,re,R,ne]}class ll extends Ee{constructor(t){super(),Te(this,t,tl,xt,Ie,{key:1,item:0,highlight:2})}}function _t(r){let t,o,s,l;return{c(){t=w("button"),o=w("i"),this.h()},l(e){t=b(e,"BUTTON",{class:!0});var i=y(t);o=b(i,"I",{class:!0}),y(o).forEach(u),i.forEach(u),this.h()},h(){a(o,"class","fa-solid fa-x"),a(t,"class","reset-btn svelte-12xrue")},m(e,i){G(e,t,i),c(t,o),s||(l=F(t,"click",r[3]),s=!0)},p:me,d(e){e&&u(t),s=!1,l()}}}function rl(r){let t,o,s,l,e,i,h,f,v,p=r[0]&&_t(r);return{c(){t=w("div"),o=w("form"),s=w("div"),l=w("i"),e=V(),i=w("input"),h=V(),p&&p.c(),this.h()},l(m){t=b(m,"DIV",{class:!0});var g=y(t);o=b(g,"FORM",{});var D=y(o);s=b(D,"DIV",{class:!0});var S=y(s);l=b(S,"I",{class:!0}),y(l).forEach(u),S.forEach(u),e=M(D),i=b(D,"INPUT",{placeholder:!0,class:!0,type:!0}),h=M(D),p&&p.l(D),D.forEach(u),g.forEach(u),this.h()},h(){a(l,"class","fa-solid fa-magnifying-glass"),a(s,"class","search-icon svelte-12xrue"),a(i,"placeholder",""),a(i,"class","search-input form-control svelte-12xrue"),a(i,"type","text"),a(t,"class","search-container svelte-12xrue")},m(m,g){G(m,t,g),c(t,o),c(o,s),c(s,l),c(o,e),c(o,i),je(i,r[0]),c(o,h),p&&p.m(o,null),f||(v=[F(i,"input",r[5]),F(i,"input",r[1]),F(i,"keydown",r[2]),F(o,"submit",bt(r[1]))],f=!0)},p(m,[g]){g&1&&i.value!==m[0]&&je(i,m[0]),m[0]?p?p.p(m,g):(p=_t(m),p.c(),p.m(o,null)):p&&(p.d(1),p=null)},i:me,o:me,d(m){m&&u(t),p&&p.d(),f=!1,Oe(v)}}}function sl(r,t,o){const s=Je();let{key:l}=t,e;function i(p){s("updateFilter",{search:e,key:l})}function h(p){Rt(p)&&(o(0,e=""),s("updateFilter",{search:e,key:l}))}function f(p){o(0,e=""),s("updateFilter",{search:e,key:l})}function v(){e=this.value,o(0,e)}return r.$$set=p=>{"key"in p&&o(4,l=p.key)},[e,i,h,f,l,v]}class ol extends Ee{constructor(t){super(),Te(this,t,sl,rl,Ie,{key:4})}}function pt(r,t,o){const s=r.slice();return s[31]=t[o],s}function vt(r){let t,o,s,l=r[6].length+"",e,i,h,f=r[1].words.length+"",v,p;return{c(){t=w("div"),o=Z("Showing "),s=w("b"),e=Z(l),i=Z(" out of "),h=w("b"),v=Z(f),p=Z(" words"),this.h()},l(m){t=b(m,"DIV",{class:!0});var g=y(t);o=x(g,"Showing "),s=b(g,"B",{});var D=y(s);e=x(D,l),D.forEach(u),i=x(g," out of "),h=b(g,"B",{});var S=y(h);v=x(S,f),S.forEach(u),p=x(g," words"),g.forEach(u),this.h()},h(){a(t,"class","filter-count svelte-1up30jq")},m(m,g){G(m,t,g),c(t,o),c(t,s),c(s,e),c(t,i),c(t,h),c(h,v),c(t,p)},p(m,g){g[0]&64&&l!==(l=m[6].length+"")&&Pe(e,l),g[0]&2&&f!==(f=m[1].words.length+"")&&Pe(v,f)},d(m){m&&u(t)}}}function mt(r){let t;function o(e,i){return e[2]?nl:il}let s=o(r),l=s(r);return{c(){l.c(),t=ye()},l(e){l.l(e),t=ye()},m(e,i){l.m(e,i),G(e,t,i)},p(e,i){s!==(s=o(e))&&(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&u(t)}}}function il(r){let t,o;return{c(){t=w("p"),o=Z("No words have been added")},l(s){t=b(s,"P",{});var l=y(t);o=x(l,"No words have been added"),l.forEach(u)},m(s,l){G(s,t,l),c(t,o)},d(s){s&&u(t)}}}function nl(r){let t,o;return{c(){t=w("p"),o=Z("No matching words")},l(s){t=b(s,"P",{});var l=y(t);o=x(l,"No matching words"),l.forEach(u)},m(s,l){G(s,t,l),c(t,o)},d(s){s&&u(t)}}}function gt(r,t){let o,s,l;return s=new ll({props:{key:t[0],item:t[31],highlight:t[3]}}),s.$on("updateWord",t[23]),s.$on("updateDefinition",t[24]),s.$on("deleteWord",t[25]),s.$on("updateWordTags",t[26]),s.$on("updateFavorite",t[27]),s.$on("refreshWord",t[28]),{key:r,first:null,c(){o=ye(),de(s.$$.fragment),this.h()},l(e){o=ye(),fe(s.$$.fragment,e),this.h()},h(){this.first=o},m(e,i){G(e,o,i),ce(s,e,i),l=!0},p(e,i){t=e;const h={};i[0]&1&&(h.key=t[0]),i[0]&64&&(h.item=t[31]),i[0]&8&&(h.highlight=t[3]),s.$set(h)},i(e){l||(C(s.$$.fragment,e),l=!0)},o(e){Y(s.$$.fragment,e),l=!1},d(e){e&&u(o),ue(s,e)}}}function wt(r){let t,o,s;function l(i){r[29](i)}let e={};return r[7]!==void 0&&(e.message=r[7]),t=new Ct({props:e}),kt.push(()=>yt(t,"message",l,r[7])),{c(){de(t.$$.fragment)},l(i){fe(t.$$.fragment,i)},m(i,h){ce(t,i,h),s=!0},p(i,h){const f={};!o&&h[0]&128&&(o=!0,f.message=i[7],Et(()=>o=!1)),t.$set(f)},i(i){s||(C(t.$$.fragment,i),s=!0)},o(i){Y(t.$$.fragment,i),s=!1},d(i){ue(t,i)}}}function al(r){let t,o,s,l,e,i,h,f,v,p,m,g,D,S,$,J,H,B,U,j,O,L,q=[],ee=new Map,le,oe,Q,re,R,ne;s=new ol({props:{key:r[0]}}),s.$on("updateFilter",r[20]),H=new Yt({props:{key:r[0],sort_by:r[1].sort_by,sort_order:r[1].sort_order}}),H.$on("updateSort",r[22]);let _=r[2]!=""&&vt(r),I=r[6];const W=d=>d[31].id;for(let d=0;d<I.length;d+=1){let k=pt(r,I,d),N=W(k);ee.set(N,q[d]=gt(N,k))}let n=null;I.length||(n=mt(r));let E=r[7]&&wt(r);return{c(){t=w("div"),o=w("div"),de(s.$$.fragment),l=V(),e=w("div"),i=w("div"),h=w("div"),f=w("input"),v=V(),p=w("div"),m=w("button"),g=V(),D=w("button"),S=V(),$=w("button"),J=V(),de(H.$$.fragment),B=V(),_&&_.c(),U=V(),j=w("div"),O=V(),L=w("ul");for(let d=0;d<q.length;d+=1)q[d].c();n&&n.c(),oe=V(),E&&E.c(),Q=ye(),this.h()},l(d){t=b(d,"DIV",{class:!0});var k=y(t);o=b(k,"DIV",{class:!0});var N=y(o);fe(s.$$.fragment,N),l=M(N),e=b(N,"DIV",{class:!0});var P=y(e);i=b(P,"DIV",{class:!0});var se=y(i);h=b(se,"DIV",{class:!0});var ie=y(h);f=b(ie,"INPUT",{type:!0,class:!0}),v=M(ie),p=b(ie,"DIV",{class:!0});var z=y(p);m=b(z,"BUTTON",{class:!0,title:!0}),y(m).forEach(u),g=M(z),D=b(z,"BUTTON",{class:!0,title:!0}),y(D).forEach(u),S=M(z),$=b(z,"BUTTON",{class:!0,title:!0}),y($).forEach(u),z.forEach(u),ie.forEach(u),se.forEach(u),J=M(P),fe(H.$$.fragment,P),P.forEach(u),B=M(N),_&&_.l(N),N.forEach(u),U=M(k),j=b(k,"DIV",{class:!0}),y(j).forEach(u),k.forEach(u),O=M(d),L=b(d,"UL",{class:!0});var he=y(L);for(let ge=0;ge<q.length;ge+=1)q[ge].l(he);n&&n.l(he),he.forEach(u),oe=M(d),E&&E.l(d),Q=ye(),this.h()},h(){a(f,"type","checkbox"),a(f,"class","select-checkbox"),a(m,"class","show-btn svelte-1up30jq"),a(m,"title","Show selected"),a(D,"class","hide-btn svelte-1up30jq"),a(D,"title","Hide selected"),a($,"class","del-btn svelte-1up30jq"),a($,"title","Delete selected"),a(p,"class","select-group svelte-1up30jq"),a(h,"class","select-options"),a(i,"class","show-hide svelte-1up30jq"),a(e,"class","options-bar svelte-1up30jq"),a(o,"class","sticky-container svelte-1up30jq"),a(j,"class","sticky-fade svelte-1up30jq"),a(t,"class","sticky-search-bar list-group-item svelte-1up30jq"),a(L,"class",le="word-group "+r[5]+" svelte-1up30jq")},m(d,k){G(d,t,k),c(t,o),ce(s,o,null),c(o,l),c(o,e),c(e,i),c(i,h),c(h,f),f.checked=r[4],c(h,v),c(h,p),c(p,m),c(p,g),c(p,D),c(p,S),c(p,$),c(e,J),ce(H,e,null),c(o,B),_&&_.m(o,null),c(t,U),c(t,j),G(d,O,k),G(d,L,k);for(let N=0;N<q.length;N+=1)q[N].m(L,null);n&&n.m(L,null),G(d,oe,k),E&&E.m(d,k),G(d,Q,k),re=!0,R||(ne=[F(f,"change",r[21]),F(f,"change",r[8]),F(m,"click",r[10]),F(D,"click",r[11]),F($,"click",r[9])],R=!0)},p(d,k){const N={};k[0]&1&&(N.key=d[0]),s.$set(N),k[0]&16&&(f.checked=d[4]);const P={};k[0]&1&&(P.key=d[0]),k[0]&2&&(P.sort_by=d[1].sort_by),k[0]&2&&(P.sort_order=d[1].sort_order),H.$set(P),d[2]!=""?_?_.p(d,k):(_=vt(d),_.c(),_.m(o,null)):_&&(_.d(1),_=null),k[0]&258125&&(I=d[6],Se(),q=Wt(q,k,W,1,d,I,ee,L,qt,gt,null,pt),Ne(),!I.length&&n?n.p(d,k):I.length?n&&(n.d(1),n=null):(n=mt(d),n.c(),n.m(L,null))),(!re||k[0]&32&&le!==(le="word-group "+d[5]+" svelte-1up30jq"))&&a(L,"class",le),d[7]?E?(E.p(d,k),k[0]&128&&C(E,1)):(E=wt(d),E.c(),C(E,1),E.m(Q.parentNode,Q)):E&&(Se(),Y(E,1,1,()=>{E=null}),Ne())},i(d){if(!re){C(s.$$.fragment,d),C(H.$$.fragment,d);for(let k=0;k<I.length;k+=1)C(q[k]);C(E),re=!0}},o(d){Y(s.$$.fragment,d),Y(H.$$.fragment,d);for(let k=0;k<q.length;k+=1)Y(q[k]);Y(E),re=!1},d(d){d&&u(t),ue(s),ue(H),_&&_.d(),d&&u(O),d&&u(L);for(let k=0;k<q.length;k+=1)q[k].d();n&&n.d(),d&&u(oe),E&&E.d(d),d&&u(Q),R=!1,Oe(ne)}}}function $e(){return document.querySelectorAll('input[type="checkbox"].select-word'),He(r=>!0)}function He(r){const t=document.querySelectorAll('input[type="checkbox"].select-word');if(!t)return 0;let o=0;return t.forEach(s=>{s.checked&&r(s)&&(o+=1)}),o}function dl(r,t,o){let s,{key:l="words"}=t,e=Mt(l);e=Ye(e);let i=!1,h="",f="",v,p,m;m=new URLSearchParams(window.location.search).get("word"),m&&nt(parseInt(m),l);function g(){let n=$e()===0;const E=document.querySelectorAll('input[type="checkbox"].select-word');if(!E)return 0;console.log("selecting with action=%i",n);let d=0;E.forEach(k=>{k.checked=n,d+=1}),d!==0&&o(4,i=n)}async function D(){const n=$e();if(n===0||!window.confirm(n===1?"Delete word?":`Delete ${n} words?`))return!1;const E=He(d=>{var k,N;if(d.dataset.id){const P=Number(d.dataset.id);if(!Number.isNaN(P))if(dt(e,P)){const se=d.parentElement;se&&((k=se.parentElement)==null||k.removeChild(se));const ie=document.getElementById(`${l}-hr-${P}`);return ie&&((N=ie.parentElement)==null||N.removeChild(ie)),!0}else console.log(`delete for ${P} failed`)}return!1});return await Bt(),E>0&&(ve(e),o(1,e)),!0}function S(){$e()===0?v.forEach(n=>{var d;const E=(d=document.getElementById(`${l}-${n.id}`))==null?void 0:d.querySelector("details");E&&(E.open=!0)}):He(n=>{var d;const E=(d=n.parentElement)==null?void 0:d.querySelector("details");return E?(E.open=!0,!0):!1})}function $(){$e()===0?v.forEach(n=>{var d;const E=(d=document.getElementById(`${l}-${n.id}`))==null?void 0:d.querySelector("details");E&&(E.open=!1)}):He(n=>{var d;const E=(d=n.parentElement)==null?void 0:d.querySelector("details");return E?(E.open=!1,!0):!1})}function J(n){if(console.log(n),n.key!=l||!n.word||!n.word.word)return;let E=n.word.word.trim().toLowerCase(),d=e.words.find(P=>{var se;return((se=P.cache)==null?void 0:se.word)===E}),k=e.words.find(P=>P.id===n.word.id),N=ke(l,n.word.id);k!=null&&d!=null?(console.log(`original: %o
dup: %o`,k,d),console.log("duplicate word"),N&&(console.log("resetting to "+N.title),N.innerHTML=N.title,k.word=N.title)):Ft(e,n.word.id,n.word.word)?(o(1,e=Ye(e)),N&&(N.title=n.word.word),console.log("updated list: %o",e.words),ve(e),o(1,e),nt(n.word.id,l)):console.log("word update failed: %o",n.word)}function H(n){if(n.key!=l||!n.word.def)return;let E=De(n.word.def.trim());$t(e,n.word.id,E)?ve(e):console.log("definition update failed")}function B(n){function E(d,k){return d.tags=[...new Set(k.tags)],d.cache=at(d),!0}n.key==l&&(ze(e,n.word,E),ve(e),o(1,e))}function U(n){function E(d,k){return d.favorite=k.favorite,!0}n.key==l&&(ze(e,n.word,E),ve(e),o(1,e))}function j(n){function E(d,k){return d.dict_def=k.dict_def,!0}n.key==l&&Ht.default.lookup(n.word.word).then(d=>{d?n.word.dict_def=d:o(7,p=`'${n.word.word}' has no dictionary definition`)}).finally(()=>{n.word.cache=at(n.word),ze(e,n.word,E),ve(e),o(1,e)})}function O(n){n.key==l&&(dt(e,n.word.id)?(ve(e),o(1,e)):console.log("remove word failed"))}function L(n){n.key==l&&(o(1,e.sort_by=n.sort_by,e),o(1,e.sort_order=n.sort_order,e),Ye(e),ve(e))}function q(n){n.key==l&&o(2,h=n.search.toLowerCase())}const ee=n=>{q(n.detail)};function le(){i=this.checked,o(4,i)}const oe=n=>L(n.detail),Q=n=>J(n.detail),re=n=>H(n.detail),R=n=>O(n.detail),ne=n=>B(n.detail),_=n=>U(n.detail),I=n=>j(n.detail);function W(n){p=n,o(7,p)}return r.$$set=n=>{"key"in n&&o(0,l=n.key)},r.$$.update=()=>{r.$$.dirty[0]&4&&o(3,s=h.split(" ").filter(n=>n.length>0)),r.$$.dirty[0]&4&&o(5,f=h===""?"":"full-defs"),r.$$.dirty[0]&10&&o(6,v=e.words.filter(n=>Ut(s,n)))},[l,e,h,s,i,f,v,p,g,D,S,$,J,H,B,U,j,O,L,q,ee,le,oe,Q,re,R,ne,_,I,W]}class fl extends Ee{constructor(t){super(),Te(this,t,dl,al,Ie,{key:0},null,[-1,-1])}}function cl(r){let t,o,s,l,e,i,h,f;return t=new Gt({props:{current:"list"}}),h=new fl({props:{key:"words"}}),{c(){de(t.$$.fragment),o=V(),s=w("h1"),l=Z("Word List"),e=V(),i=w("div"),de(h.$$.fragment),this.h()},l(v){fe(t.$$.fragment,v),o=M(v),s=b(v,"H1",{});var p=y(s);l=x(p,"Word List"),p.forEach(u),e=M(v),i=b(v,"DIV",{class:!0});var m=y(i);fe(h.$$.fragment,m),m.forEach(u),this.h()},h(){a(i,"class","list-vocab-container")},m(v,p){ce(t,v,p),G(v,o,p),G(v,s,p),c(s,l),G(v,e,p),G(v,i,p),ce(h,i,null),f=!0},p:me,i(v){f||(C(t.$$.fragment,v),C(h.$$.fragment,v),f=!0)},o(v){Y(t.$$.fragment,v),Y(h.$$.fragment,v),f=!1},d(v){ue(t,v),v&&u(o),v&&u(s),v&&u(e),v&&u(i),ue(h)}}}class ml extends Ee{constructor(t){super(),Te(this,t,null,cl,Ie,{})}}export{ml as default};
