import{s as ee,n as Y,r as te,c as ne,o as re,e as ae}from"../chunks/scheduler.5ZfVaV18.js";import{S as se,i as le,e as a,s as o,c as s,a as S,k as T,f as i,d as M,v as R,l as d,g as oe,h as e,w as E,u as G,x as ie}from"../chunks/index.WFz81NqV.js";import{u as Z}from"../chunks/user._X5xgUt1.js";import{b as ue}from"../chunks/paths.CVlKHqrS.js";function de(b){let p,n,l,g="Inloggning",m,h,I,t,u,y,x,H,L,K="<b>Användarnamn:</b>",N,_,A,C,Q="<b>Lösenord:</b>",q,c,P,O,U,V,D,B,J,z,F,k,W="Har du inget konto? Registrera",j,X;return{c(){p=a("main"),n=a("div"),l=a("h1"),l.textContent=g,m=o(),h=a("br"),I=o(),t=a("form"),u=a("div"),y=o(),x=a("br"),H=o(),L=a("label"),L.innerHTML=K,N=o(),_=a("input"),A=o(),C=a("label"),C.innerHTML=Q,q=o(),c=a("input"),P=o(),O=a("br"),U=o(),V=a("br"),D=o(),B=a("input"),J=o(),z=a("br"),F=o(),k=a("a"),k.textContent=W,this.h()},l(f){p=s(f,"MAIN",{class:!0});var w=S(p);n=s(w,"DIV",{class:!0});var v=S(n);l=s(v,"H1",{"data-svelte-h":!0}),T(l)!=="svelte-58kgg2"&&(l.textContent=g),m=i(v),h=s(v,"BR",{}),I=i(v),t=s(v,"FORM",{});var r=S(t);u=s(r,"DIV",{style:!0});var $=S(u);$.forEach(M),y=i(r),x=s(r,"BR",{}),H=i(r),L=s(r,"LABEL",{for:!0,"data-svelte-h":!0}),T(L)!=="svelte-1end6fo"&&(L.innerHTML=K),N=i(r),_=s(r,"INPUT",{type:!0,id:!0}),A=i(r),C=s(r,"LABEL",{for:!0,"data-svelte-h":!0}),T(C)!=="svelte-z3ft7n"&&(C.innerHTML=Q),q=i(r),c=s(r,"INPUT",{type:!0,id:!0}),P=i(r),O=s(r,"BR",{}),U=i(r),V=s(r,"BR",{}),D=i(r),B=s(r,"INPUT",{type:!0,class:!0}),r.forEach(M),J=i(v),z=s(v,"BR",{}),F=i(v),k=s(v,"A",{href:!0,"data-svelte-h":!0}),T(k)!=="svelte-1grmp7g"&&(k.textContent=W),v.forEach(M),w.forEach(M),this.h()},h(){R(u,"width","100px"),R(u,"height","100px"),R(u,"border-radius","50%"),R(u,"overflow","hidden"),R(u,"background-color",pe),d(L,"for","name"),d(_,"type","text"),d(_,"id","name"),d(C,"for","password"),d(c,"type","password"),d(c,"id","lösenord"),d(B,"type","Submit"),B.value="Logga in",d(B,"class","button svelte-1qf91v2"),d(k,"href",ue+"/register"),d(n,"class","container svelte-1qf91v2"),d(p,"class","svelte-1qf91v2")},m(f,w){oe(f,p,w),e(p,n),e(n,l),e(n,m),e(n,h),e(n,I),e(n,t),e(t,u),e(t,y),e(t,x),e(t,H),e(t,L),e(t,N),e(t,_),E(_,b[0]),e(t,A),e(t,C),e(t,q),e(t,c),E(c,b[1]),e(t,P),e(t,O),e(t,U),e(t,V),e(t,D),e(t,B),e(n,J),e(n,z),e(n,F),e(n,k),j||(X=[G(_,"input",b[3]),G(c,"input",b[4]),G(t,"submit",ie(b[2]))],j=!0)},p(f,[w]){w&1&&_.value!==f[0]&&E(_,f[0]),w&2&&c.value!==f[1]&&E(c,f[1])},i:Y,o:Y,d(f){f&&M(p),j=!1,te(X)}}}let pe="black";function fe(b,p,n){let l;ne(b,Z,y=>n(6,l=y));let g=[];re(()=>{l.length>2&&(g=JSON.parse(l))});let m,h;function I(){let y={namn:m,password:h};g.filter(x=>x.namn==m&&x.password==h).length>0?alert("Välkommen"):(g=[...g,y],ae(Z,l=JSON.stringify(g),l),alert("Skapa användare/ kontrollera lösenord/användarnamn"))}function t(){m=this.value,n(0,m)}function u(){h=this.value,n(1,h)}return[m,h,I,t,u]}class ce extends se{constructor(p){super(),le(this,p,fe,de,ee,{})}}export{ce as component};
