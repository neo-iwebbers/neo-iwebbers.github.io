import{_ as F}from"./dogpow.a417b3ad.js";import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";import{o as h,c as y,a as e,b as t,p as G,e as O,d as T,g as P,i as l,v as K,l as x,w,k as M,q as b,u as j,x as R,y as N,z as U,j as r,A as W,B as S,t as q,F as H,r as Q,m as E}from"./entry.5eda84db.js";import{_ as Y}from"./card.vue.48f9e07f.js";import{_ as J}from"./client-only.b3f660ce.js";import X from"./Icon.9aa8b746.js";import{u as Z,q as tt}from"./query.ffb2490a.js";import"./tag.4aa1bffe.js";import"./arrow.ff3f6331.js";import"./nuxt-link.ab4f91e1.js";import"./preview.b89fde71.js";const et={},at=c=>(G("data-v-5b7785bd"),c=c(),O(),c),it={class:"container mx-auto mb-5"},ot={class:"grid grid-cols-1 sm:grid-cols-2 items-center"},nt=at(()=>e("div",{class:"px-6"},[e("h1",{class:"text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"},[T(" Benvenuti nel blog de "),e("span",{class:"name"},"iWebbers")]),e("p",{class:"dark:text-zinc-300"}," Qui troverai tutti i post del blog che gli iWebber hanno scritto e pubblicato su questo sito. ")],-1)),st={class:"px-6 justify-self-center"};function rt(c,i){const p=F;return h(),y("div",it,[e("div",ot,[nt,e("div",st,[t(p)])])])}const lt=I(et,[["render",rt],["__scopeId","data-v-5b7785bd"]]);var z=function(){return Math.random().toString(36).substring(2)},ct=P({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(i){var p=l(function(){return i.uniqueKey?"".concat(i.uniqueKey,"-idClip"):z()}),m=l(function(){return i.uniqueKey?"".concat(i.uniqueKey,"-idGradient"):z()}),_=l(function(){var n;return(n=i.width)!==null&&n!==void 0?n:400}),o=l(function(){var n;return(n=i.height)!==null&&n!==void 0?n:130}),d=l(function(){var n;return(n=i.viewBox)!==null&&n!==void 0?n:"0 0 ".concat(_.value," ").concat(o.value)});return{idClip:p,idGradient:m,computedViewBox:d}},render:function(){return t("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[t("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),t("defs",null,[t("clipPath",{id:this.idClip},[this.$slots.default?this.$slots.default():t("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),t("linearGradient",{id:this.idGradient},[t("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?t("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),t("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?t("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),t("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?t("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}});const dt={components:{ContentLoader:ct}},ut=e("rect",{x:"10",y:"13",rx:"0",ry:"0",width:"95",height:"86"},null,-1),pt=e("rect",{x:"119",y:"19",rx:"0",ry:"0",width:"219",height:"16"},null,-1),ht=e("rect",{x:"119",y:"49",rx:"0",ry:"0",width:"277",height:"16"},null,-1),_t=e("rect",{x:"119",y:"82",rx:"0",ry:"0",width:"56",height:"14"},null,-1),mt=e("rect",{x:"195",y:"82",rx:"0",ry:"0",width:"56",height:"14"},null,-1),gt=e("rect",{x:"272",y:"82",rx:"0",ry:"0",width:"56",height:"14"},null,-1);function ft(c,i,p,m,_,o){const d=K("ContentLoader");return h(),x(d,{viewBox:"0 0 400 160",speed:2,"primary-color":"#c9c9c9","secondary-color":"#ecebeb"},{default:w(()=>[ut,pt,ht,_t,mt,gt]),_:1})}const yt=I(dt,[["render",ft]]),vt={class:"container max-w-5xl mx-auto text-zinc-600"},bt={class:"px-3"},xt={class:"space-y-5 my-5"},wt={class:"flex justify-center items-center space-x-6"},Ct=["disabled"],kt=["disabled"],Vt=P({__name:"index",async setup(c){let i,p;const{data:m}=([i,p]=M(()=>Z("home",()=>tt("/post").sort({_id:-1}).find())),i=await i,p(),i),_=b(4),o=b(1),d=b(""),n=l(()=>{var u;return((u=m.value)==null?void 0:u.map(a=>({path:a._path,title:a.title||"no-title available",description:a.description||"no-descriptoin available",image:a.image||"/nuxt-blog/no-image_cyyits.png",alt:a.alt||"no alter data available",ogImage:a.ogImage||"/nuxt-blog/no-image_cyyits.png",date:a.date||"not-date-available",tags:a.tags||[],published:a.published||!1})))||[]}),C=l(()=>n.value.filter(u=>u.title.toLocaleLowerCase().search(d.value)!==-1)||[]),k=l(()=>C.value.filter((u,a)=>{const v=(o.value-1)*_.value,f=o.value*_.value-1;return a>=v&&a<=f})||[]);function A(){o.value>1&&(o.value-=1)}const g=l(()=>{const u=C.value.length||0;return Math.ceil(u/_.value)});function L(){o.value<g.value&&(o.value+=1)}return j({title:"Archive",meta:[{name:"description",content:"Qui troverai tutti i post del blog che gli iWebber hanno scritto e pubblicato su questo sito."}],titleTemplate:"Blog - %s | iWebbers.com"}),(u,a)=>{const v=lt,f=Y,$=yt,D=J,B=X,V=R("auto-animate");return h(),y("main",vt,[t(v),e("div",bt,[N(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>W(d)?d.value=s:null),placeholder:"Search",type:"text",class:"block w-full bg-[#F1F2F4] dark:bg-zinc-800 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[U,r(d)]])]),t(D,null,{fallback:w(()=>[t($),t($)]),default:w(()=>[N((h(),y("div",xt,[(h(!0),y(H,null,Q(r(k),s=>(h(),x(f,{key:s.title,path:s.path,title:s.title,date:s.date,description:s.description,image:s.image,alt:s.alt,"og-image":s.ogImage,tags:s.tags,published:s.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),r(k).length<=0?(h(),x(f,{key:0,title:"No Post Found",image:"/not-found.jpg"})):E("",!0)])),[[V]])]),_:1}),e("div",wt,[e("button",{disabled:r(o)<=1,onClick:A},[t(B,{name:"mdi:code-less-than",size:"30",class:S({"text-sky-700 dark:text-sky-400":r(o)>1})},null,8,["class"])],8,Ct),e("p",null,q(r(o))+" / "+q(r(g)),1),e("button",{disabled:r(o)>=r(g),onClick:L},[t(B,{name:"mdi:code-greater-than",size:"30",class:S({"text-sky-700 dark:text-sky-400":r(o)<r(g)})},null,8,["class"])],8,kt)])])}}});export{Vt as default};
