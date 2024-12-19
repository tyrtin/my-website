import{i as vt,s as bt,n as tt,r as ht,e as _t,d as gt}from"../chunks/scheduler.BfzvhqvR.js";import{S as kt,i as Ct,e as _,s as N,c as p,a as L,l as H,f as T,d as C,n as m,g as R,h as o,p as et,q as K,r as W,v as lt,y as D,z as st,A as yt,B as zt,C as Et,t as pt,b as mt,j as dt,D as nt}from"../chunks/index.PrSvtAh4.js";import{e as q}from"../chunks/each.D6YF6ztN.js";function at(n,{delay:l=0,duration:t=400,easing:e=vt}={}){const a=+getComputedStyle(n).opacity;return{delay:l,duration:t,easing:e,css:f=>`opacity: ${f*a}`}}function it(n,l,t){const e=n.slice();return e[1]=l[t],e[9]=t,e}function ot(n,l,t){const e=n.slice();return e[1]=l[t],e}function rt(n){let l,t,e=n[1].namn+"",a,f,r,d,u,y,k,h;return{c(){l=_("li"),t=_("form"),a=pt(e),f=N(),r=_("input"),d=N(),this.h()},l(c){l=p(c,"LI",{class:!0});var v=L(l);t=p(v,"FORM",{});var z=L(t);a=mt(z,e),f=T(z),r=p(z,"INPUT",{type:!0,class:!0}),z.forEach(C),d=T(v),v.forEach(C),this.h()},h(){m(r,"type","submit"),r.value="Köpt",m(r,"class","knapp svelte-ciazux"),m(l,"class","varaitem svelte-ciazux")},m(c,v){R(c,l,v),o(l,t),o(t,a),o(t,f),o(t,r),o(l,d),y=!0,k||(h=K(t,"submit",W(function(){_t(n[3](n[1]))&&n[3](n[1]).apply(this,arguments)})),k=!0)},p(c,v){n=c,(!y||v&1)&&e!==(e=n[1].namn+"")&&dt(a,e)},i(c){y||(c&&gt(()=>{y&&(u||(u=nt(l,at,{},!0)),u.run(1))}),y=!0)},o(c){c&&(u||(u=nt(l,at,{},!1)),u.run(0)),y=!1},d(c){c&&C(l),c&&u&&u.end(),k=!1,h()}}}function ut(n){let l,t=n[1].bought==!1&&rt(n);return{c(){t&&t.c(),l=D()},l(e){t&&t.l(e),l=D()},m(e,a){t&&t.m(e,a),R(e,l,a)},p(e,a){e[1].bought==!1?t?(t.p(e,a),a&1&&st(t,1)):(t=rt(e),t.c(),st(t,1),t.m(l.parentNode,l)):t&&(yt(),zt(t,1,1,()=>{t=null}),Et())},d(e){e&&C(l),t&&t.d(e)}}}function ct(n){let l,t,e=n[1].namn+"",a,f,r,d,u,y="Ta bort",k,h,c;function v(){return n[6](n[9])}return{c(){l=_("li"),t=_("form"),a=pt(e),f=N(),r=_("input"),d=N(),u=_("button"),u.textContent=y,k=N(),this.h()},l(z){l=p(z,"LI",{class:!0});var x=L(l);t=p(x,"FORM",{});var I=L(t);a=mt(I,e),f=T(I),r=p(I,"INPUT",{type:!0,class:!0}),d=T(I),u=p(I,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),H(u)!=="svelte-cdt8yd"&&(u.textContent=y),I.forEach(C),k=T(x),x.forEach(C),this.h()},h(){m(r,"type","submit"),r.value="Köpas",m(r,"class","knapp svelte-ciazux"),m(u,"type","button"),m(u,"class","click svelte-ciazux"),m(l,"class","linje svelte-ciazux")},m(z,x){R(z,l,x),o(l,t),o(t,a),o(t,f),o(t,r),o(t,d),o(t,u),o(l,k),h||(c=[K(u,"click",v),K(t,"submit",W(function(){_t(n[4](n[1]))&&n[4](n[1]).apply(this,arguments)}))],h=!0)},p(z,x){n=z,x&1&&e!==(e=n[1].namn+"")&&dt(a,e)},d(z){z&&C(l),h=!1,ht(c)}}}function ft(n){let l,t=n[1].bought==!0&&ct(n);return{c(){t&&t.c(),l=D()},l(e){t&&t.l(e),l=D()},m(e,a){t&&t.m(e,a),R(e,l,a)},p(e,a){e[1].bought==!0?t?t.p(e,a):(t=ct(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){e&&C(l),t&&t.d(e)}}}function It(n){let l,t,e="Shoppinglista",a,f,r,d,u="Varor att köpa",y,k,h,c,v,z="Köpta varor",x,I,w,U,P,X="Vara:",G,S,J,M,Q,Y,A=q(n[0]),b=[];for(let i=0;i<A.length;i+=1)b[i]=ut(ot(n,A,i));let B=q(n[0]),g=[];for(let i=0;i<B.length;i+=1)g[i]=ft(it(n,B,i));return{c(){l=_("main"),t=_("h1"),t.textContent=e,a=N(),f=_("div"),r=_("section"),d=_("h2"),d.textContent=u,y=N(),k=_("ul");for(let i=0;i<b.length;i+=1)b[i].c();h=N(),c=_("section"),v=_("h2"),v.textContent=z,x=N(),I=_("ul");for(let i=0;i<g.length;i+=1)g[i].c();w=N(),U=_("form"),P=_("label"),P.textContent=X,G=N(),S=_("input"),J=N(),M=_("input"),this.h()},l(i){l=p(i,"MAIN",{class:!0});var E=L(l);t=p(E,"H1",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1rsjf9d"&&(t.textContent=e),a=T(E),f=p(E,"DIV",{class:!0});var s=L(f);r=p(s,"SECTION",{class:!0});var O=L(r);d=p(O,"H2",{class:!0,"data-svelte-h":!0}),H(d)!=="svelte-1lj1vgt"&&(d.textContent=u),y=T(O),k=p(O,"UL",{});var Z=L(k);for(let j=0;j<b.length;j+=1)b[j].l(Z);Z.forEach(C),O.forEach(C),h=T(s),c=p(s,"SECTION",{class:!0});var V=L(c);v=p(V,"H2",{class:!0,"data-svelte-h":!0}),H(v)!=="svelte-tcetzy"&&(v.textContent=z),x=T(V),I=p(V,"UL",{});var $=L(I);for(let j=0;j<g.length;j+=1)g[j].l($);$.forEach(C),V.forEach(C),s.forEach(C),w=T(E),U=p(E,"FORM",{});var F=L(U);P=p(F,"LABEL",{for:!0,"data-svelte-h":!0}),H(P)!=="svelte-kt00pk"&&(P.textContent=X),G=T(F),S=p(F,"INPUT",{type:!0,id:!0}),J=T(F),M=p(F,"INPUT",{type:!0,class:!0}),F.forEach(C),E.forEach(C),this.h()},h(){m(t,"class","h1 svelte-ciazux"),m(d,"class","svelte-ciazux"),m(r,"class","svelte-ciazux"),m(v,"class","svelte-ciazux"),m(c,"class","svelte-ciazux"),m(f,"class","categories_container svelte-ciazux"),m(P,"for","vara"),m(S,"type","text"),m(S,"id","vara"),m(M,"type","submit"),M.value="Lägg till",m(M,"class","button svelte-ciazux"),m(l,"class","container svelte-ciazux")},m(i,E){R(i,l,E),o(l,t),o(l,a),o(l,f),o(f,r),o(r,d),o(r,y),o(r,k);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(k,null);o(f,h),o(f,c),o(c,v),o(c,x),o(c,I);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(I,null);o(l,w),o(l,U),o(U,P),o(U,G),o(U,S),et(S,n[1]),o(U,J),o(U,M),Q||(Y=[K(S,"input",n[7]),K(U,"submit",W(n[2]))],Q=!0)},p(i,[E]){if(E&9){A=q(i[0]);let s;for(s=0;s<A.length;s+=1){const O=ot(i,A,s);b[s]?b[s].p(O,E):(b[s]=ut(O),b[s].c(),b[s].m(k,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=A.length}if(E&49){B=q(i[0]);let s;for(s=0;s<B.length;s+=1){const O=it(i,B,s);g[s]?g[s].p(O,E):(g[s]=ft(O),g[s].c(),g[s].m(I,null))}for(;s<g.length;s+=1)g[s].d(1);g.length=B.length}E&2&&S.value!==i[1]&&et(S,i[1])},i:tt,o:tt,d(i){i&&C(l),lt(b,i),lt(g,i),Q=!1,ht(Y)}}}function Nt(n,l,t){let e=[],a="";function f(){if(a=="")return;let h={namn:a,bought:!1};e.push(h),t(0,e)}function r(h){h.bought=!0,t(0,e)}function d(h){h.bought=!1,t(0,e)}function u(h){e.splice(h,1),t(0,e)}const y=h=>u(h);function k(){a=this.value,t(1,a)}return[e,a,f,r,d,u,y,k]}class Ut extends kt{constructor(l){super(),Ct(this,l,Nt,It,bt,{})}}export{Ut as component};
