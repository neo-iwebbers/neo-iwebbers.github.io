import{_ as h}from"./nuxt-link.7e9edfb9.js";import g from"./Icon.8c67d777.js";import{_ as S}from"./client-only.546954e1.js";import{T as W,g as y,h as $,i as w,o as c,c as l,a as e,b as t,w as a,d as n,B as f,j as r,m as v,p as z,e as C,f as B,l as k,a7 as A}from"./entry.3232d789.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";const L=()=>W("color-mode").value,V={class:"py-5 border-b dark:border-gray-800 font-semibold bg-blue"},M={class:"flex px-6 container max-w-5xl justify-between mx-auto items-baseline"},P={class:"flex items-baseline space-x-5"},T={class:"text-base sm:text-2xl font-bold"},j={class:"flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"},H=y({__name:"header",setup(o){const _=$(),s=w(()=>_.fullPath.replace("/","")),i=L();function x(b){i.preference=b}return(b,d)=>{const u=h,m=g,F=S;return c(),l("div",V,[e("div",M,[e("ul",P,[e("li",T,[t(u,{to:"/",class:f({underline:r(s)===""})},{default:a(()=>[n(" iWebbers's Blog ")]),_:1},8,["class"])])]),e("ul",j,[e("li",null,[t(u,{to:"/post",class:f({underline:r(s)==="post"})},{default:a(()=>[n(" All Post ")]),_:1},8,["class"])]),e("li",null,[t(u,{to:"/categories",class:f({underline:r(s)==="categories"})},{default:a(()=>[n(" Categories ")]),_:1},8,["class"])]),e("li",{title:"About iWebbers",class:f({underline:r(s)==="about"})},[t(u,{to:"http://iwebbers.com/about","aria-label":"About iWebbers"},{default:a(()=>[n(" About ")]),_:1})],2),e("li",null,[t(F,null,{fallback:a(()=>[t(m,{name:"svg-spinners:180-ring",size:"20"})]),default:a(()=>[r(i).value==="dark"?(c(),l("button",{key:0,name:"dark-mode",title:"Dark",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:d[0]||(d[0]=N=>x("light"))},[t(m,{name:"icon-park:moon",size:"20"})])):v("",!0),r(i).value==="light"?(c(),l("button",{key:1,name:"light-mode",title:"Light",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:d[1]||(d[1]=N=>x("dark"))},[t(m,{name:"noto:sun",size:"20"})])):v("",!0)]),_:1})])])])])}}});const D=p(H,[["__scopeId","data-v-3cdcd991"]]),E={},G=e("p",{class:"text-black dark:text-zinc-300 text-base py-1 font-semibold"}," About This Site ",-1),O=e("p",{class:"py-2 dark:text-zinc-300"}," This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel. ",-1),Q=[G,O];function R(o,_){return c(),l("div",null,Q)}const q=p(E,[["render",R]]);const J={},I=o=>(z("data-v-808cd23d"),o=o(),C(),o),K=I(()=>e("p",{class:"text-black dark:text-zinc-300 text-2xl py-1 font-semibold"}," iWebbers's Blog ",-1)),U=I(()=>e("p",{class:"py-2 dark:text-zinc-300"},[n(" Ciao! siamo "),e("span",{class:"name"},"iWebbers"),n(", una libera associazione di sviluppatori."),e("br"),n("Costruiamo e manuteniamo siti web customizzati sulle aspettative del cliente ")],-1)),X={class:"my-3 space-x-3 pb-3"};function Y(o,_){const s=g,i=h;return c(),l("div",null,[K,U,e("div",X,[t(i,{to:"https://www.facebook.com/iWebbers",target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md","aria-label":"Github"},{default:a(()=>[t(s,{name:"fa:facebook",size:"1em"})]),_:1})])])}const Z=p(J,[["render",Y],["__scopeId","data-v-808cd23d"]]),ee={},te={class:"flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"},oe=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"}," Quick Link ",-1);function se(o,_){const s=h;return c(),l("div",te,[oe,t(s,{to:"http://iwebbers.com",class:"hover:underline"},{default:a(()=>[n(" iWebbers Home ")]),_:1}),t(s,{to:"/post",class:"hover:underline"},{default:a(()=>[n(" All Post ")]),_:1}),t(s,{to:"/categories",class:"hover:underline"},{default:a(()=>[n(" Blog Categories ")]),_:1}),t(s,{to:"http://iwebbers.com/about",class:"hover:underline"},{default:a(()=>[n(" About iWebbers ")]),_:1})])}const ne=p(ee,[["render",se]]);const ae={},ce=B('<p class="text-black dark:text-zinc-300 text-base font-semibold" data-v-73e5d6bc> Connect With <span class="name" data-v-73e5d6bc>iWebbers</span></p><p class="dark:text-zinc-300" data-v-73e5d6bc> Hai bisogno dei migliori sviluppatori <span class="friendly" data-v-73e5d6bc>smart-friendly</span> <span class="level" data-v-73e5d6bc>high level</span> al supporto delle tue idee, del tuo sito personale o della tua azienda? </p><a href="/contact" class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm" data-v-73e5d6bc> Inviaci una Mail </a>',3),le=[ce];function _e(o,_){return c(),l("div",null,le)}const ie=p(ae,[["render",_e],["__scopeId","data-v-73e5d6bc"]]),re={class:"py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300"},de={class:"px-6 container max-w-5xl mx-auto"},ue={class:"grid grid-cols-1 md:grid-cols-3"},pe=e("div",{class:"border-t dark:border-gray-800 mt-5 text-center p-2 bar-blue"},[n(" Powered By "),e("a",{href:"https://iwebbers.com",target:"_blank",rel:"nofollow",class:"underline name"},"iWebbers")],-1),me=y({__name:"footer",setup(o){const _=$(),s=w(()=>_.fullPath.replace("/",""));return(i,x)=>{const b=q,d=Z,u=ne,m=ie;return c(),l("div",re,[e("div",de,[e("div",ue,[r(s)==="about"?(c(),k(b,{key:0})):(c(),k(d,{key:1})),t(u),t(m)]),pe])])}}});const be={},fe=o=>(z("data-v-527c76ef"),o=o(),C(),o),xe={class:"gd-container font-spacegrotesk"},he={class:"fixed w-full bg-[#F1F2F4] dark:bg-[#151818] z-10"},ve=fe(()=>e("div",{class:"p-9"},null,-1));function ke(o,_){const s=D,i=me;return c(),l("div",xe,[e("header",he,[t(s)]),e("main",null,[ve,A(o.$slots,"default",{},void 0,!0)]),e("footer",null,[t(i)])])}const Ce=p(be,[["render",ke],["__scopeId","data-v-527c76ef"]]);export{Ce as default};
