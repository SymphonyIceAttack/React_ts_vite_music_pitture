import{r as s,R as f,u as B,a as l,b as p,j as h,F as m,c as r,d as A,i as E,e as k}from"./index.529ae73f.js";import{G as v,A as D,a as S,b as y}from"./index.esm.4985c651.js";function w(e=f){const t=e===f?B:()=>s.exports.useContext(e);return function(){const{store:o}=t();return o}}const _=w();function $(e=f){const t=e===f?_:w(e);return function(){return t().dispatch}}const b=$();function T(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"3 22 21 12 3 2"}}]})(e)}const M=({time:e,MusicUrl:t})=>{const u=l(p()),[o,i]=s.exports.useState(!0);s.exports.useEffect(()=>{let c;return i(!1),c=setTimeout(()=>{var a;i(!0),(a=n.current)==null||a.play()},e),()=>{clearTimeout(c)}},[u]);const n=s.exports.useRef(null);return h(m,{children:[o?r("span",{className:"PlayMusic",onClick:()=>{var c;(c=n.current)==null||c.pause(),i(!1)},children:r(D,{})}):r("span",{className:"PlayMusic",onClick:()=>{var c;(c=n.current)==null||c.play(),i(!0)},children:r(T,{})}),r("audio",{ref:n,src:t,preload:"auto",loop:!0})]})},F=["\u4EBA\u751F\u662F\u4E00\u573A\u6F2B\u957F\u7684\u8DEF\u9014,\u4ECE\u5C0F\u5B66\u5F00\u59CB\u4F60\u5C31\u6E10\u6E10\u4E27\u5931\u4E86\u4E0E\u4EBA\u5171\u60C5\u7684\u80FD\u529B,\u4E5F\u8BB8\u4F60\u66FE\u9047\u5230\u8FC7\u53EF\u4EE5\u503C\u5F97\u4EA4\u5F80\u7684\u670B\u53CB,\u4F46\u90FD\u88AB\u4F60\u7684\u62D2\u7EDD\u4E86\uFF0C\u4F60\u5C31\u8FD9\u6837\u628A\u81EA\u5DF1\u5C01\u9501\u5728\u4E86\u81EA\u5DF1\u7684\u5FC3\u4E2D","\u5728\u521D\u4E2D\u7684\u65F6\u5019,\u4F60\u4F3C\u4E4E\u4E0D\u613F\u5FCD\u53D7\u8FD9\u79CD\u6240\u8C13\u7684\u5B64\u72EC,\u4E8E\u662F\u4F60\u5F00\u59CB\u5B66\u4E60\u5982\u4F55\u4E0E\u4EBA\u5957\u8FD1\u4E4E,\u4F46\u8FD9\u5E76\u975E\u662F\u957F\u4E45\u4E4B\u8BA1,\u4F60\u53EA\u662F\u4E0D\u60F3\u4E0E\u5468\u56F4\u7684\u4EBA\u683C\u683C\u4E0D\u5165\u7F62\u4E86","\u5230\u4E86\u9AD8\u4E2D,\u4F60\u89C9\u5F97\u81EA\u5DF1\u5DF2\u7ECF\u4E60\u60EF\u4E86\u5047\u60FA\u60FA\u7684\u4E8E\u4EBA\u5957\u8FD1\u4E4E,\u4E0E\u6BCF\u4E2A\u4EBA\u90FD\u5F88\u719F\u6089,\u5374\u53C8\u6CA1\u719F\u6089\u7684\u4EBA\u3002\u4F46\u662F\u4F60\u5F88\u6E05\u695A\u65E9\u665A\u4F1A\u6709\u4E00\u5929,\u4F60\u5C06\u52C7\u6562\u5730\u8FC8\u51FA\u90A3\u4E00\u6B65","\u7EC8\u4E8E\u6765\u5230\u4E86\u5927\u5B66\u4E86,\u4F60\u770B\u8D77\u6765\u5F88\u671F\u5F85\u4EC0\u4E48,\u53C8\u50CF\u662F\u5728\u7B49\u5F85\u4EC0\u4E48,\u6162\u6162\u5730\u4F60\u53D1\u73B0\u4F60\u6709\u4E86\u524D\u8FDB\u7684\u65B9\u5411,\u5C31\u50CF\u662F\u98D8\u8361\u7684\u7EBF\u6709\u4E86\u56FA\u5B9A\u7684\u951A\u70B9,\u4F60\u5F88\u6E05\u695A\u8FD9\u4E0D\u662F\u7531\u6240\u8C13\u7684\u65F6\u95F4\u6CBB\u6108\u7684,\u4EC5\u4EC5\u53EA\u662F\u56E0\u4E3A\u4F60\u8FD8\u662F\u4F60"];const R=({})=>{const e=l(p()),[t,u]=s.exports.useState(""),[o,i]=s.exports.useState(0);return s.exports.useEffect(()=>{let n;return o<F[e].length&&(n=setTimeout(()=>{u(c=>c+=F[e][o]),i(c=>c+=1)},200)),()=>{clearTimeout(n)}},[t]),s.exports.useEffect(()=>(u(""),i(0),()=>{}),[e]),r("p",{className:"OncesContentTitle",children:t})},N=()=>{const e=s.exports.useRef(null),t=u=>{var g;let o=e.current,i=e.current.offsetLeft,n=e.current.offsetTop;for(;o=o==null?void 0:o.offsetParent;)i+=o.offsetLeft,n+=o.offsetTop;let c=u.clientX-i,a=u.clientY-n,d=document.createElement("span");d.style.top=a+"px",d.style.left=c+"px",(g=e.current)==null||g.appendChild(d),setTimeout(function(){d.remove()},1e3)};return s.exports.useEffect(()=>{var u;return(u=e.current)==null||u.addEventListener("click",t),()=>{var o;(o=e.current)==null||o.removeEventListener("click",t)}},[]),[e]};const L=({isloading:e,BgUrl:t})=>{const[u]=N();return r("div",{ref:u,className:"Content",style:{display:e?"none":"",boxShadow:e?"":"0 0 5px 5px #ccc"},children:r(R,{})})};const P=({isloading:e})=>{const t=l(p()),u=b();return r(m,{children:e?"":t>0?r("span",{className:"upArrow",onClick:()=>{u(A())},children:r(S,{})}):""})};const z=({isloading:e})=>{const t=l(p()),u=b();return r(m,{children:e?"":t<E.length-1?r("span",{className:"downArrow",onClick:()=>{u(k())},children:r(y,{})}):""})};const O=({BgUrl:e,isloading:t,time:u})=>r("div",{className:"AppAfter",style:{backgroundImage:` url("${e}")`,animation:t?`move ${u/1e3}s linear 1`:""}}),U=e=>{const t=l(p()),[u,o]=s.exports.useState(E[t]),[i,n]=s.exports.useState(!0);return s.exports.useEffect(()=>{o(E[t]),n(!0),setTimeout(()=>{n(!1)},e)},[t]),{isloading:i,BgUrl:u}},C=["/music/\u5411\u7740\u547D\u8FD0\u7684\u5F7C\u65B9.m4a","/music/\u5DEB\u5973\u6E38\u8BB0.m4a","/music/\u65F6\u4E4B\u96E8.m4a","/music/AfterRain.mp3"],I=()=>{const e=l(p()),[t,u]=s.exports.useState(C[e]);return s.exports.useEffect(()=>(u(C[e]),()=>{}),[e]),{MusicUrl:t}},j="HeaderContent-module__Onces__d4joW";var H={Onces:j};const G=({isSmallWidth:e})=>{const[t,u]=s.exports.useState(1500),{isloading:o,BgUrl:i}=U(t),{MusicUrl:n}=I();return h("div",{className:`${H.Onces}`,style:{width:e?"90vw":"75vw"},children:[r(L,{isloading:o,BgUrl:i}),r(P,{isloading:o}),r(M,{time:t,MusicUrl:n}),r(z,{isloading:o}),r(O,{BgUrl:i,isloading:o,time:t})]})},W="Box-module__Box__vweK-",K="Box-module__showCenter__aMmZc";var x={Box:W,showCenter:K};const V=({children:e})=>{const[t,u]=s.exports.useState(!1),o=s.exports.useRef(null);let i=null;const n=s.exports.useCallback(()=>{i||(i=setTimeout(()=>{var a;((a=o.current)==null?void 0:a.getBoundingClientRect().top)<window.innerHeight*.85?u(!0):u(!1),i=null},100))},[]);return s.exports.useEffect(()=>(window.addEventListener("scroll",n),document.documentElement.scrollTop=10,()=>{window.removeEventListener("scroll",n)}),[]),s.exports.useEffect(()=>{var c,a;return t?(c=o.current)==null||c.classList.add(x.showCenter):(a=o.current)==null||a.classList.remove(x.showCenter),()=>{}},[t]),r("div",{ref:o,className:x.Box,children:e})},X=()=>{const e=l(p()),[t,u]=s.exports.useState([]);return s.exports.useEffect(()=>{const o=[];let i=F[e].split(""),n=0;for(;n<i.length;){const c=[];let a=n+10;c.push(...i.slice(n,a)),n+=10;const d=c.join("");o.push(d)}u(o)},[e]),{StrArr:t}},Y="MainContent-module__MainContent__VNwlr";var Z={MainContent:Y};const q="StringBoxScroll-module__StringBoxScroll__9oFLF",J="StringBoxScroll-module__flag__P2upL";var Q={StringBoxScroll:q,flag:J};const ee=({str:e})=>r("p",{className:Q.StringBoxScroll,children:e});var te="/images/pexels-soubhagya-maharana-5245865.jpg";const ue=({isSmallWidth:e})=>{const{StrArr:t}=X();return r("div",{style:{minHeight:`${t.length*85}px`,backgroundImage:`url(${te})`,width:e?"90vw":"75vw"},className:Z.MainContent,children:t.map(u=>r(V,{children:r(ee,{str:u})},new Date().toString()+Math.random()*1e3))})},ne=({isSmallWidth:e})=>h("div",{children:[r(G,{isSmallWidth:e}),r(ue,{isSmallWidth:e})]});export{ne as default};
