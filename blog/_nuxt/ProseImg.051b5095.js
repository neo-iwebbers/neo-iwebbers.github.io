import{g as r,i as n,D as c,R as h,K as o,E as l,o as u,c as d,j as g}from"./entry.36a0d53e.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=n(()=>{var i;if((i=t.src)!=null&&i.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(i,s)=>(u(),d("img",{src:g(a),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};
