import{m,f as D,n as H,g as L,H as p,o as h,s as E,a as O,d as _,p as I,e as Y,q as j,r as C,t as M,v as S,w as V,c as $,x as k,h as w,y as q,z,j as W}from"./runtime.Dtv5Q2M4.js";import{a as B,r as N,b as F,h as y,i as G}from"./utils.DNs8SwWK.js";import{a as J}from"./template.Cr5k1p6c.js";function X(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function K(t,e){return b(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=D(n);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;h(!0),E(a),O();const i=b(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return h(!1),i}catch(i){if(i===p)return e.recover===!1&&j(),m(),C(n),h(!1),K(t,e);throw i}finally{h(l),E(u),F()}}const o=new Map;function b(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:i=!0}){m();var v=new Set,g=d=>{for(var r=0;r<d.length;r++){var s=d[r];if(!v.has(s)){v.add(s);var f=G(s);e.addEventListener(s,y,{passive:f});var T=o.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),o.set(s,1)):o.set(s,T+1)}}};g(M(B)),N.add(g);var c=void 0,A=S(()=>{var d=n??e.appendChild(V());return $(()=>{if(a){k({});var r=W;r.c=a}u&&(l.$$events=u),w&&J(d,null),c=t(d,l)||{},w&&(q.nodes_end=_),a&&z()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=o.get(r);--s===0?(document.removeEventListener(r,y),o.delete(r)):o.set(r,s)}N.delete(g),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,A),c}let R=new WeakMap;function x(t){const e=R.get(t);e&&e()}export{Z as h,K as m,X as s,x as u};