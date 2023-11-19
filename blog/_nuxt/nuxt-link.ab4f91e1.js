import{a9 as C,g as S,i as y,C as q,q as b,M as R,aa as k,ab as A,ac as T,ad as L,N as x,v as N,G as B,ae as E,af as w,R as I,a1 as O,L as _,s as U}from"./entry.5eda84db.js";async function P(t,r=C()){const{path:c,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(c)))return;const l=r._preloadPromises=r._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>P(t,r));r._routePreloaded.add(c);const i=e.map(a=>{var s;return(s=a.components)==null?void 0:s.default}).filter(a=>typeof a=="function");for(const a of i){const s=Promise.resolve(a()).catch(()=>{}).finally(()=>l.splice(l.indexOf(s)));l.push(s)}await Promise.all(l)}const V=(...t)=>t.find(r=>r!==void 0),j="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function D(t){const r=t.componentName||"NuxtLink",c=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?I:O;if(typeof e=="string")return i(e,!0);const a="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(a,!0)}};return S({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=C(),a=y(()=>{const n=e.to||e.href||"";return c(n,i.resolve)}),s=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||q(a.value,{acceptRelative:!0})),v=b(!1),f=b(null),p=n=>{var d;f.value=e.custom?(d=n==null?void 0:n.$el)==null?void 0:d.nextElementSibling:n==null?void 0:n.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!z()){const d=_();let h,u=null;R(()=>{const g=M();k(()=>{h=A(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=g.observe(f.value,async()=>{u==null||u(),u=null;const o=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",o).catch(()=>{}),!s.value&&P(a.value,i).catch(()=>{})]),v.value=!0}))})})}),T(()=>{h&&L(h),u==null||u(),u=null})}return()=>{var g,m;if(!s.value){const o={ref:p,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel),x(N("RouterLink"),o,l.default)}const n=typeof a.value=="object"?((g=i.resolve(a.value))==null?void 0:g.href)??null:a.value||null,d=e.target||null,h=e.noRel?null:V(e.rel,t.externalRelAttribute,n?j:"")||null,u=()=>U(n,{replace:e.replace});return e.custom?l.default?l.default({href:n,navigate:u,get route(){if(!n)return;const o=B(n);return{path:o.pathname,fullPath:o.pathname,get query(){return E(o.search)},hash:o.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}},rel:h,target:d,isExternal:s.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:f,href:n,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const $=D(w);function M(){const t=_();if(t._observer)return t._observer;let r=null;const c=new Map,e=(i,a)=>(r||(r=new IntersectionObserver(s=>{for(const v of s){const f=c.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),c.set(i,a),r.observe(i),()=>{c.delete(i),r.unobserve(i),c.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function z(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{$ as _};
