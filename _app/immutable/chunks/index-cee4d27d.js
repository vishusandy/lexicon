function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function W(){return Object.create(null)}function w(t){t.forEach(J)}function K(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function xt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,o){if(r){const c=Q(e,n,i,o);t.p(c,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let j=!1;function nt(){j=!0}function it(){j=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[s],f)}}function st(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){j&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function At(){return z(" ")}function Mt(){return z("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t){return function(e){return e.preventDefault(),t.call(this,e)}}function qt(t){return function(e){e.target===this&&t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,r=!1){at(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return R(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Pt(t,e,n){return ft(t,e,n,ut)}function dt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Tt(t){return dt(t," ")}function Bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e??""}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function zt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ft(t,e){return new t(e)}let $;function x(t){$=t}function C(){if(!$)throw new Error("Function called outside component initialization");return $}function Ht(t){C().$$.on_mount.push(t)}function Wt(t){C().$$.after_update.push(t)}function Gt(t){C().$$.on_destroy.push(t)}function Jt(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=_t(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Kt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],G=[],S=[],L=[],U=Promise.resolve();let O=!1;function V(){O||(O=!0,U.then(X))}function Qt(){return V(),U}function I(t){S.push(t)}function Rt(t){L.push(t)}const B=new Set;let N=0;function X(){const t=$;do{for(;N<b.length;){const e=b[N];N++,x(e),ht(e.$$)}for(x(null),b.length=0,N=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];B.has(n)||(B.add(n),n())}S.length=0}while(b.length);for(;L.length;)L.pop()();O=!1,B.clear(),x(t)}function ht(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const A=new Set;let g;function Ut(){g={r:0,c:[],p:g}}function Vt(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function mt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Xt(t,e){t.d(1),e.delete(t.key)}function Yt(t,e){mt(t,1,1,()=>{e.delete(t.key)})}function Zt(t,e,n,i,r,o,c,u,s,l,f,_){let d=t.length,m=o.length,h=d;const q={};for(;h--;)q[t[h].key]=h;const v=[],D=new Map,P=new Map;for(h=m;h--;){const a=_(r,o,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),D.set(p,v[h]=y),p in q&&P.set(p,Math.abs(h-q[p]))}const F=new Set,H=new Set;function T(a){Y(a,1),a.m(u,f),c.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=v[m-1],p=t[d-1],y=a.key,E=p.key;a===p?(f=a.first,d--,m--):D.has(E)?!c.has(y)||F.has(y)?T(a):H.has(E)?d--:P.get(y)>P.get(E)?(H.add(y),T(a)):(F.add(E),d--):(s(p,c),d--)}for(;d--;){const a=t[d];D.has(a.key)||s(a,c)}for(;m;)T(v[m-1]);return v}function te(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function ee(t){t&&t.c()}function ne(t,e){t&&t.l(e)}function pt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||I(()=>{const c=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(I)}function yt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(b.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,i,r,o,c,u=[-1]){const s=$;x(t);const l=t.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&gt(t,_)),d}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=ot(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),it(),X()}x(s)}class re{$destroy(){yt(this,1),this.$destroy=M}$on(e,n){if(!K(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Xt as $,Qt as A,M as B,wt as C,Et as D,kt as E,vt as F,st as G,$t as H,G as I,te as J,I as K,Lt as L,jt as M,Ct as N,Rt as O,w as P,St as Q,Jt as R,re as S,It as T,Kt as U,zt as V,xt as W,Gt as X,Zt as Y,Yt as Z,qt as _,At as a,Nt as b,Tt as c,Vt as d,Mt as e,Y as f,Ut as g,lt as h,ie as i,Wt as j,ut as k,Pt as l,ot as m,Dt as n,Ht as o,Ot as p,z as q,dt as r,bt as s,mt as t,Bt as u,Ft as v,ee as w,ne as x,pt as y,yt as z};
