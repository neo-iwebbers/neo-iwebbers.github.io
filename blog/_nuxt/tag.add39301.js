import{C as $,D as L,E as y,G as D,H as k,I as U,J as M,K as V,L as E,i as p,g as C,q as I,u as F,M as G,N as T,o as N,c as P,a as B}from"./entry.4df5a16f.js";import{_ as H}from"./_plugin-vue_export-helper.c27b6911.js";async function J(e,t){return await Q(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Q(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function W(e){return t=>t?e[t]||t:e.missingValue}function X({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=W(t));const n=i||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=W(n[o]))}),(o={})=>Object.entries(o).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(o[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Y(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function Z(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function K(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ee(e){const t={options:e},r=(n,o={})=>O(t,n,o),i=(n,o={},s={})=>r(n,{...s,modifiers:k(o,s.modifiers||{})}).url;for(const n in e.presets)i[n]=(o,s,d)=>i(o,s,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,o)=>te(t,n,o),i.getSizes=(n,o)=>ne(t,n,o),t.$img=i,i}async function te(e,t,r){const i=O(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await J(e,i.url)}function O(e,t,r){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=ie(e,r.provider||e.options.provider),o=re(e,r.preset);if(t=$(t)?t:L(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=y(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&$(t)){const m=D(t).host;if(!e.options.domains.find(_=>_===m))return{url:t}}const s=k(r,o,n);s.modifiers={...s.modifiers};const d=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=g(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=g(s.modifiers.height));const c=i.getImage(t,s,e);return c.format=c.format||d||"",c}function ie(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function re(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ne(e,t,r){var h,S,x,b,z;const i=g((h=r.modifiers)==null?void 0:h.width),n=g((S=r.modifiers)==null?void 0:S.height),o=K(r.sizes),s=(x=r.densities)!=null&&x.trim()?Y(r.densities.trim()):e.options.densities;Z(s);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(o).length>=1){for(const f in o){const v=j(f,String(o[f]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of s)l.push({width:v._cWidth*w,src:A(e,t,r,v,w)})}}oe(c)}else for(const f of s){const v=Object.keys(o)[0];let w=j(v,String(o[v]),n,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(b=r.modifiers)==null?void 0:b.width,_cHeight:(z=r.modifiers)==null?void 0:z.height}),l.push({width:f,src:A(e,t,r,w,f)})}se(l);const u=l[l.length-1],m=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,_=m?"w":"x",a=l.map(f=>`${f.src} ${f.width}${_}`).join(", ");return{sizes:m,srcset:a,src:u==null?void 0:u.src}}function j(e,t,r,i,n){const o=n.options.screens&&n.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let d=parseInt(t);if(!o||!d)return;s&&(d=Math.round(d/100*o));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:o,_cWidth:d,_cHeight:c}}function A(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function oe(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function se(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ae=X({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>M(e)+"_"+M(t)}),de=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=ae(t)||"_";return r||(r=y(i.options.nuxt.baseURL,"/_ipx")),{url:y(r,n,U(e))}},ce=!0,le=!0,ue=Object.freeze(Object.defineProperty({__proto__:null,getImage:de,supportsAlias:le,validateDomains:ce},Symbol.toStringTag,{value:"Module"})),q={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};q.providers={ipxStatic:{provider:ue,defaults:{}}};const R=()=>{const e=V(),t=E();return t.$img||t._img||(t._img=ee({...q,nuxt:{baseURL:e.app.baseURL}}))},fe={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},he=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=R(),n=p(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},ge={...fe,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ie=C({name:"NuxtImg",props:ge,emits:["load","error"],setup:(e,t)=>{const r=R(),i=he(e),n=I(!1),o=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),s=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=o.value.sizes,a.srcset=o.value.srcset),a}),d=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},i.options.value)}),c=p(()=>e.sizes?o.value.src:r(e.src,i.modifiers.value,i.options.value)),l=p(()=>d.value?d.value:c.value);if(e.preload){const a=Object.values(o.value).every(h=>h);F({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const u=I(),_=E().isHydrating;return G(()=>{if(d.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=o.value.sizes||"",a.srcset=o.value.srcset),a.onload=h=>{n.value=!0,t.emit("load",h)};return}u.value&&(u.value.complete&&_&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>T("img",{ref:u,src:l.value,...s.value,...t.attrs})}}),me={},ve={fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 mr-1"},pe=B("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),we=[pe];function _e(e,t){return N(),P("svg",ve,we)}const We=H(me,[["render",_e]]),ye={},Se={fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4"},xe=B("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"},null,-1),be=[xe];function ze(e,t){return N(),P("svg",Se,be)}const je=H(ye,[["render",ze]]);export{Ie as _,We as a,je as b};
