import{_ as B,d as y,L as x,h as a,y as L,c as v,a as u,z as f,t as k,A as w,o as r,F as b,b as C,e as V}from"./index-27cd35bf.js";import{B as z}from"./BackIcon-9938d35a.js";import{b as A,B as $}from"./bill-49fece1c.js";const D={class:"px-3 text-default text-sm"},F={class:"flex-start gap-2 mt-2"},I=y({setup(N){const{getCurrentAccount:p}=x(),s=a([]),t=a(!1),l=a(!1),n=a(0),m=a(10),c=a(0),g=async()=>{t.value=!0,n.value+=1,await _(),t.value=!1},i=a([]),_=async()=>{const e=await A({page:n.value,size:m.value,type:1,address:p()});if(t.value=!1,!e.success){l.value=!0;return}if(!e.data||!e.total){l.value=!0;return}c.value=e.total,i.value=e.data,s.value=n.value===1?i.value:s.value.concat(i.value),s.value.length>=c.value&&(l.value=!0)};return(e,d)=>{const h=L("VanList");return r(),v("div",D,[u("div",F,[f(z),u("div",null,k(e.$t("shop.payDetail")),1)]),u("div",null,[f(h,{loading:t.value,"onUpdate:loading":d[0]||(d[0]=o=>t.value=o),finished:l.value,"finished-text":e.$t("common.noMore"),"loading-text":e.$t("common.loading"),onLoad:g},{default:w(()=>[(r(!0),v(b,null,C(s.value,o=>(r(),V($,{key:o.id,type:1,bill:o},null,8,["bill"]))),128))]),_:1},8,["loading","finished","finished-text","loading-text"])])])}}}),R=B(I,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/bill/BuyerBill.vue"]]);export{R as default};
