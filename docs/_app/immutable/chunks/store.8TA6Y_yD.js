import{N as L,az as f,ae as d,T as D,w as N,av as P,G as j,q,B as C,aA as H,v as h,H as M,b as m,s as T,e as S,f as k,g as R,D as b,a as W,aB as z,V as F,a7 as G,a4 as U}from"./runtime.1sLXQbYz.js";function re(e,t){if(t){const r=document.body;e.autofocus=!0,L(()=>{document.activeElement===r&&e.focus()})}}let A=!1;function Y(){A||(A=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function x(e){var t=D,r=N;f(null),d(null);try{return e()}finally{f(t),d(r)}}function ne(e,t,r,n=r){e.addEventListener(t,()=>x(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n()}:e.__on_r=n,Y()}const J=new Set,K=new Set;function ae(e,t,r,n){function s(a){if(n.capture||Q.call(t,a),!a.cancelBubble)return x(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?L(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function se(e){for(var t=0;t<e.length;t++)J.add(e[t]);for(var r of K)r(e)}function Q(e){var w;var t=this,r=t.ownerDocument,n=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],a=s[0]||e.target,v=0,g=e.__root;if(g){var _=s.indexOf(g);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var y=s.indexOf(t);if(y===-1)return;_<=y&&(v=_)}if(a=s[v]||e.target,a!==t){P(e,"currentTarget",{configurable:!0,get(){return a||r}});var B=D,I=N;f(null),d(null);try{for(var u,E=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var i=a["__"+n];if(i!==void 0&&!a.disabled)if(j(i)){var[O,...V]=i;O.apply(a,[e,...V])}else i.call(a,e)}catch(c){u?E.push(c):u=c}if(e.cancelBubble||p===t||p===null)break;a=p}if(u){for(let c of E)queueMicrotask(()=>{throw c});throw u}}finally{e.__root=t,delete e.currentTarget,f(B),d(I)}}}let o;function oe(){o=void 0}function ue(e){let t=null,r=h;var n;if(h){for(t=k,o===void 0&&(o=R(document.head));o!==null&&(o.nodeType!==8||o.data!==M);)o=m(o);o===null?T(!1):o=S(m(o))}h||(n=document.head.appendChild(q()));try{C(()=>e(n),H)}finally{r&&(T(!0),o=k,S(t))}}function ie(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const X=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ce(e){return X.includes(e)}const Z={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function le(e){return e=e.toLowerCase(),Z[e]??e}const $=["touchstart","touchmove"];function fe(e){return $.includes(e)}function ee(e,t,r){if(e==null)return t(void 0),b;const n=W(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}let l=!1;function de(e,t,r){const n=r[t]??(r[t]={store:null,source:F(void 0),unsubscribe:b});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=b;else{var s=!0;n.unsubscribe=ee(e,a=>{s?n.source.v=a:U(n.source,a)}),s=!1}return G(n.source)}function _e(){const e={};return z(()=>{for(var t in e)e[t].unsubscribe()}),e}function pe(e){var t=l;try{return l=!1,[e(),l]}finally{l=t}}export{J as a,oe as b,de as c,Y as d,ie as e,ae as f,se as g,Q as h,fe as i,re as j,ce as k,pe as l,ue as m,le as n,ne as o,K as r,_e as s};
