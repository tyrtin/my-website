import{i as vt,s as bt,n as tt,r as ht,e as _t,d as gt}from"../chunks/scheduler.BfzvhqvR.js";import{S as kt,i as Ct,e as _,s as N,c as p,a as L,l as K,f as T,d as C,n as m,g as V,h as o,p as et,q as R,r as W,v as lt,x as w,y as nt,z as yt,A as jt,B as Et,t as pt,b as mt,j as dt,C as st}from"../chunks/index.CNeamc8-.js";import{e as z}from"../chunks/each.D6YF6ztN.js";function at(s,{delay:l=0,duration:t=400,easing:e=vt}={}){const a=+getComputedStyle(s).opacity;return{delay:l,duration:t,easing:e,css:c=>`opacity: ${c*a}`}}function it(s,l,t){const e=s.slice();return e[1]=l[t],e[9]=t,e}function ot(s,l,t){const e=s.slice();return e[1]=l[t],e}function rt(s){let l,t,e=s[1].namn+"",a,c,r,d,u,y,k,h;return{c(){l=_("li"),t=_("form"),a=pt(e),c=N(),r=_("input"),d=N(),this.h()},l(f){l=p(f,"LI",{class:!0});var v=L(l);t=p(v,"FORM",{});var j=L(t);a=mt(j,e),c=T(j),r=p(j,"INPUT",{type:!0,class:!0}),j.forEach(C),d=T(v),v.forEach(C),this.h()},h(){m(r,"type","submit"),r.value="Köpt",m(r,"class","knapp svelte-x9j110"),m(l,"class","varaitem svelte-x9j110")},m(f,v){V(f,l,v),o(l,t),o(t,a),o(t,c),o(t,r),o(l,d),y=!0,k||(h=R(t,"submit",W(function(){_t(s[3](s[1]))&&s[3](s[1]).apply(this,arguments)})),k=!0)},p(f,v){s=f,(!y||v&1)&&e!==(e=s[1].namn+"")&&dt(a,e)},i(f){y||(f&&gt(()=>{y&&(u||(u=st(l,at,{},!0)),u.run(1))}),y=!0)},o(f){f&&(u||(u=st(l,at,{},!1)),u.run(0)),y=!1},d(f){f&&C(l),f&&u&&u.end(),k=!1,h()}}}function ut(s){let l,t=s[1].bought==!1&&rt(s);return{c(){t&&t.c(),l=w()},l(e){t&&t.l(e),l=w()},m(e,a){t&&t.m(e,a),V(e,l,a)},p(e,a){e[1].bought==!1?t?(t.p(e,a),a&1&&nt(t,1)):(t=rt(e),t.c(),nt(t,1),t.m(l.parentNode,l)):t&&(yt(),jt(t,1,1,()=>{t=null}),Et())},d(e){e&&C(l),t&&t.d(e)}}}function ft(s){let l,t,e=s[1].namn+"",a,c,r,d,u,y="Ta bort",k,h,f;function v(){return s[6](s[9])}return{c(){l=_("li"),t=_("form"),a=pt(e),c=N(),r=_("input"),d=N(),u=_("button"),u.textContent=y,k=N(),this.h()},l(j){l=p(j,"LI",{});var x=L(l);t=p(x,"FORM",{});var I=L(t);a=mt(I,e),c=T(I),r=p(I,"INPUT",{type:!0,class:!0}),d=T(I),u=p(I,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),K(u)!=="svelte-cdt8yd"&&(u.textContent=y),I.forEach(C),k=T(x),x.forEach(C),this.h()},h(){m(r,"type","submit"),r.value="Köpas",m(r,"class","knapp svelte-x9j110"),m(u,"type","button"),m(u,"class","click svelte-x9j110")},m(j,x){V(j,l,x),o(l,t),o(t,a),o(t,c),o(t,r),o(t,d),o(t,u),o(l,k),h||(f=[R(u,"click",v),R(t,"submit",W(function(){_t(s[4](s[1]))&&s[4](s[1]).apply(this,arguments)}))],h=!0)},p(j,x){s=j,x&1&&e!==(e=s[1].namn+"")&&dt(a,e)},d(j){j&&C(l),h=!1,ht(f)}}}function ct(s){let l,t=s[1].bought==!0&&ft(s);return{c(){t&&t.c(),l=w()},l(e){t&&t.l(e),l=w()},m(e,a){t&&t.m(e,a),V(e,l,a)},p(e,a){e[1].bought==!0?t?t.p(e,a):(t=ft(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){e&&C(l),t&&t.d(e)}}}function It(s){let l,t,e="Shoppinglista",a,c,r,d,u="Varor att köpa",y,k,h,f,v,j="Köpta varor",x,I,D,U,P,X="Vara:",G,S,J,A,Q,Y,B=z(s[0]),b=[];for(let i=0;i<B.length;i+=1)b[i]=ut(ot(s,B,i));let F=z(s[0]),g=[];for(let i=0;i<F.length;i+=1)g[i]=ct(it(s,F,i));return{c(){l=_("main"),t=_("h1"),t.textContent=e,a=N(),c=_("div"),r=_("section"),d=_("h2"),d.textContent=u,y=N(),k=_("ul");for(let i=0;i<b.length;i+=1)b[i].c();h=N(),f=_("section"),v=_("h2"),v.textContent=j,x=N(),I=_("ul");for(let i=0;i<g.length;i+=1)g[i].c();D=N(),U=_("form"),P=_("label"),P.textContent=X,G=N(),S=_("input"),J=N(),A=_("input"),this.h()},l(i){l=p(i,"MAIN",{class:!0});var E=L(l);t=p(E,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1rsjf9d"&&(t.textContent=e),a=T(E),c=p(E,"DIV",{class:!0});var n=L(c);r=p(n,"SECTION",{class:!0});var O=L(r);d=p(O,"H2",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-1lj1vgt"&&(d.textContent=u),y=T(O),k=p(O,"UL",{});var Z=L(k);for(let M=0;M<b.length;M+=1)b[M].l(Z);Z.forEach(C),O.forEach(C),h=T(n),f=p(n,"SECTION",{class:!0});var q=L(f);v=p(q,"H2",{class:!0,"data-svelte-h":!0}),K(v)!=="svelte-tcetzy"&&(v.textContent=j),x=T(q),I=p(q,"UL",{});var $=L(I);for(let M=0;M<g.length;M+=1)g[M].l($);$.forEach(C),q.forEach(C),n.forEach(C),D=T(E),U=p(E,"FORM",{});var H=L(U);P=p(H,"LABEL",{for:!0,"data-svelte-h":!0}),K(P)!=="svelte-kt00pk"&&(P.textContent=X),G=T(H),S=p(H,"INPUT",{type:!0,id:!0}),J=T(H),A=p(H,"INPUT",{type:!0,class:!0}),H.forEach(C),E.forEach(C),this.h()},h(){m(t,"class","h1 svelte-x9j110"),m(d,"class","svelte-x9j110"),m(r,"class","svelte-x9j110"),m(v,"class","svelte-x9j110"),m(f,"class","svelte-x9j110"),m(c,"class","categories_container svelte-x9j110"),m(P,"for","vara"),m(S,"type","text"),m(S,"id","vara"),m(A,"type","submit"),A.value="Lägg till",m(A,"class","button svelte-x9j110"),m(l,"class","container svelte-x9j110")},m(i,E){V(i,l,E),o(l,t),o(l,a),o(l,c),o(c,r),o(r,d),o(r,y),o(r,k);for(let n=0;n<b.length;n+=1)b[n]&&b[n].m(k,null);o(c,h),o(c,f),o(f,v),o(f,x),o(f,I);for(let n=0;n<g.length;n+=1)g[n]&&g[n].m(I,null);o(l,D),o(l,U),o(U,P),o(U,G),o(U,S),et(S,s[1]),o(U,J),o(U,A),Q||(Y=[R(S,"input",s[7]),R(U,"submit",W(s[2]))],Q=!0)},p(i,[E]){if(E&9){B=z(i[0]);let n;for(n=0;n<B.length;n+=1){const O=ot(i,B,n);b[n]?b[n].p(O,E):(b[n]=ut(O),b[n].c(),b[n].m(k,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=B.length}if(E&49){F=z(i[0]);let n;for(n=0;n<F.length;n+=1){const O=it(i,F,n);g[n]?g[n].p(O,E):(g[n]=ct(O),g[n].c(),g[n].m(I,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=F.length}E&2&&S.value!==i[1]&&et(S,i[1])},i:tt,o:tt,d(i){i&&C(l),lt(b,i),lt(g,i),Q=!1,ht(Y)}}}function Nt(s,l,t){let e=[],a="";function c(){if(a=="")return;let h={namn:a,bought:!1};e.push(h),t(0,e)}function r(h){h.bought=!0,t(0,e)}function d(h){h.bought=!1,t(0,e)}function u(h){e.splice(h,1),t(0,e)}const y=h=>u(h);function k(){a=this.value,t(1,a)}return[e,a,c,r,d,u,y,k]}class Ut extends kt{constructor(l){super(),Ct(this,l,Nt,It,bt,{})}}export{Ut as component};
