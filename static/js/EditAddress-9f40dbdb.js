import{_ as m,d as v,w as _,h as r,i as y,y as N,c as h,a as D,z as n,E as g,t as C,k as w,o as I}from"./index-7d3f2326.js";import{B as b}from"./BackIcon-029df9cf.js";import{a as d}from"./index.esm-55925c95.js";import{c as k}from"./address-a18565c1.js";import{u as A}from"./index-841768d1.js";const E={class:"relative p-2.5 text-center"},S={class:"flex-start mb-1"},B=v({setup(x){const i=_(),[c,o]=A(!1),l=r({name:null,tel:null,province:null,city:null,county:null,country:"",isDefault:!1,postalCode:null,addressDetail:null,areaCode:null}),s=r({id:null,address:null,userName:null,telNumber:null,postalCode:null,provinceName:null,cityName:null,countyName:null,detailInfo:null,isDefault:0}),f=()=>{const e=sessionStorage.getItem("editAddress")||"";if(!e)return;const a=JSON.parse(e);s.value=a,l.value.name=a.userName,l.value.tel=a.telNumber,l.value.province=a.provinceName,l.value.city=a.cityName,l.value.county=a.countyName,l.value.addressDetail=a.detailInfo,l.value.postalCode=a.postalCode,l.value.isDefault=!!(a.isDefault&&a.isDefault>=1),Object.entries(d.county_list).forEach(t=>{t[1]==a.countyName&&(l.value.areaCode=t[0],t[1])})},p=async e=>{if(c.value)return;s.value.isDefault=e.isDefault?1:0,s.value.userName=e.name,s.value.telNumber=e.tel,s.value.provinceName=e.province,s.value.cityName=e.city,s.value.countyName=e.county,s.value.detailInfo=e.addressDetail,s.value.postalCode=e.postalCode,o(!0);const a=await k(s.value);o(!1),a.success&&i.back()};return y(()=>{f()}),(e,a)=>{const u=N("van-address-edit");return I(),h("div",E,[D("header",S,[n(b),g(" "+C(e.$t("common.address")),1)]),n(u,{"area-list":w(d),"show-postal":"","show-set-default":(s.value&&s.value.isDefault===1,!1),"show-search-result":"","address-info":l.value,"area-columns-placeholder":[e.$t("shop.pleaseSelect"),e.$t("shop.pleaseSelect"),e.$t("shop.pleaseSelect")],onSave:p},null,8,["area-list","show-set-default","address-info","area-columns-placeholder"])])}}}),R=m(B,[["__scopeId","data-v-b64d7284"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/address/EditAddress.vue"]]);export{R as default};
