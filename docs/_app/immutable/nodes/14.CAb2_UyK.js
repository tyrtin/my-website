import{s as w,n as y}from"../chunks/scheduler.5cnhw2Vi.js";import{S as C,i as I,e as m,s as N,t as d,c as v,a as g,d as h,f as O,b,l as _,g as p,h as k,j as U,x as P,u as $}from"../chunks/index.BnTNIJ72.js";import{e as E}from"../chunks/each.D6YF6ztN.js";function M(r,t,o){const s=r.slice();return s[4]=t[o].letter,s[5]=t[o].top,s[6]=t[o].left,s[8]=o,s}function S(r){let t,o=r[4]+"",s,f,c,i;function l(){return r[3](r[8])}return{c(){t=m("button"),s=d(o),this.h()},l(e){t=v(e,"BUTTON",{style:!0,class:!0});var n=g(t);s=b(n,o),n.forEach(h),this.h()},h(){_(t,"style",f="top:"+r[5]+"vh;left"+r[6]+"vw;"),_(t,"class","svelte-1bv0rra")},m(e,n){p(e,t,n),k(t,s),c||(i=$(t,"click",l),c=!0)},p(e,n){r=e,n&1&&o!==(o=r[4]+"")&&U(s,o),n&1&&f!==(f="top:"+r[5]+"vh;left"+r[6]+"vw;")&&_(t,"style",f)},d(e){e&&h(t),c=!1,i()}}}function j(r){let t,o,s,f,c,i=E(r[0]),l=[];for(let e=0;e<i.length;e+=1)l[e]=S(M(r,i,e));return{c(){t=m("section");for(let e=0;e<l.length;e+=1)l[e].c();o=N(),s=m("p"),f=d("Username: "),c=d(r[1]),this.h()},l(e){t=v(e,"SECTION",{class:!0});var n=g(t);for(let u=0;u<l.length;u+=1)l[u].l(n);n.forEach(h),o=O(e),s=v(e,"P",{});var a=g(s);f=b(a,"Username: "),c=b(a,r[1]),a.forEach(h),this.h()},h(){_(t,"class","svelte-1bv0rra")},m(e,n){p(e,t,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(t,null);p(e,o,n),p(e,s,n),k(s,f),k(s,c)},p(e,[n]){if(n&5){i=E(e[0]);let a;for(a=0;a<i.length;a+=1){const u=M(e,i,a);l[a]?l[a].p(u,n):(l[a]=S(u),l[a].c(),l[a].m(t,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=i.length}n&2&&U(c,e[1])},i:y,o:y,d(e){e&&(h(t),h(o),h(s)),P(l,e)}}}let T="sfgrfdbf";function q(r,t,o){let s=[],f="";for(let l of T){let e=Math.random()*80,n=Math.random()*80;s.push({letter:l,top:e,left:n})}function c(l){let e=e[l];o(1,f+=e.letter),e.top=Math.random()*90,e.left=Math.random()*90,o(0,s)}return setInterval(()=>{for(let l of T);},2e3),[s,f,c,l=>c(l)]}class D extends C{constructor(t){super(),I(this,t,q,j,w,{})}}export{D as component};
