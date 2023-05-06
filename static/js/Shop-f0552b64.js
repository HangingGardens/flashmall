import{_ as V,d as A,y as C,o as u,c as g,a as e,k as o,q as P,t as r,z as h,m as B,A as I,E as T,p as J,f as K,F as D,b as z,I as Q,n as W,v as X,h as _,D as Y,e as R,x as ae,j as ne,C as le,i as Z,J as F,G as E,V as ie,w as re}from"./index-27cd35bf.js";import{B as ce}from"./BackIcon-9938d35a.js";import{R as de}from"./RatioBox-c843bbf0.js";import{_ as ue}from"./mcoin-logo-601d180b.js";import{a as me}from"./mall-cabfdca6.js";import{_ as ee}from"./close-384dfae6.js";import{_ as pe}from"./mcoin-logo-1-a438d147.js";import{u as O}from"./index-95f4a229.js";import{q as fe}from"./shop-5c41543a.js";import{q as ve}from"./category-e90f289c.js";const he=""+new URL("../images/service-2d6a42d1.svg",import.meta.url).href;const ge=t=>(J("data-v-277ea9e4"),t=t(),K(),t),_e={class:"px-3 relative"},xe={class:"p-3 border-oriange2 border border-solid bg rounded-xl mt-[-50px] z-[9999]"},be=["src"],we={class:"flex-1 text-default flex flex-col justify-between h-[65px]"},ye={class:"font-semibold text-sm"},$e={class:"opacity-60 text-xs"},ke={class:"text-xs"},Ce={class:"flex-end gap-3 mt-5"},Se=ge(()=>e("img",{src:he,class:"w-3",alt:""},null,-1)),Le=[Se],Ie={class:"flex-center mt-3"},Ve=A({props:{info:{type:null,required:!0}},emits:["handleTo","setSubmitShow"],setup(t,{emit:m}){return(s,f)=>{const c=C("VanButton");return u(),g("div",_e,[e("div",xe,[e("div",{class:"flex justify-start gap-3 w-full",onClick:f[0]||(f[0]=()=>m("handleTo",`/shopInfo?address=${t.info.merchant}`))},[e("img",{src:t.info.logo||o(P)("images/goods/defaultImg.png"),class:"h-[65px] aspect-square rounded-xl",alt:""},null,8,be),e("div",we,[e("div",ye,r(t.info.storeName),1),e("div",$e,r(s.$t("shop.shopTime"))+" "+r(t.info.openingHours),1),e("div",ke,r(t.info.contactAddress||t.info.location),1)]),e("div",null,[h(de,{ratio:t.info.discountRatio||0},null,8,["ratio"])])]),e("div",Ce,[B(` <div class="circle-bg w-[22px] h-[22px] flex-center">
          <img src="@/assets/svg/shop/+.svg" class="w-3" alt="">
        </div> `),e("div",{class:"circle-bg w-[22px] h-[22px] flex-center",onClick:f[1]||(f[1]=()=>m("handleTo",`/shopInfo?address=${t.info.merchant}`))},Le)]),e("div",Ie,[h(c,{class:"font-sans btn-shadow text-default h-[36px] text-[15px] font-semibold bg-btnOrBg w-36 rounded-3xl",onClick:f[2]||(f[2]=d=>m("setSubmitShow"))},{default:I(()=>[T(r(s.$t("common.payBill")),1)]),_:1})])])])}}}),Ae=V(Ve,[["__scopeId","data-v-277ea9e4"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/ShopHeader.vue"]]),Te={class:"flex-start gap-10 mt-4"},qe=["onClick"],Be={key:0,class:"absolute bottom-[-5px] x-center mx-auto w-5 h-1 rounded-md bg-primary2"},Re=A({props:{tabList:{type:Array,required:!0},tabActive:{type:Number,required:!0}},emits:["change"],setup(t,{emit:m}){return(s,f)=>(u(),g("div",Te,[(u(!0),g(D,null,z(t.tabList,c=>(u(),g("div",{key:c.id,class:"relative",onClick:d=>m("change",c.id)},[e("div",{class:Q(["text-default text-sm",{"font-semibold":t.tabActive===c.id}])},r(c.name),3),t.tabActive===c.id?(u(),g("div",Be)):B("v-if",!0)],8,qe))),128))]))}}),Ue=V(Re,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/GoodsTab.vue"]]),Ne={class:"flex-start gap-2"},Ge=["onClick"],Pe=A({props:{categoryList:{type:Array,required:!0},categoryActive:{type:Number,required:!0}},emits:["change"],setup(t,{emit:m}){return(s,f)=>{const c=C("VanImage");return u(),g("div",Ne,[(u(!0),g(D,null,z(t.categoryList,d=>(u(),g("div",{class:Q(["px-3 py-2 flex-center gap-1 bg-gray1 rounded-2xl text-xs text-default font-semibold",{"bg-oriange2":t.categoryActive===d.id}]),key:d.id,onClick:S=>m("change",d.id)},[h(c,{src:d.icon,class:"h-4",alt:""},null,8,["src"]),T(" "+r(d.name),1)],10,Ge))),128))])}}}),De=V(Pe,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/GoodsCategory.vue"]]),Me={class:"rounded-xl bg-white mt-3"},Oe={class:"flex-center-bw text-default text-xs"},ze={class:"flex gap-2 items-center"},He=["src"],je={class:"text-sm flex flex-col items-start justify-between h-[65px]"},Fe={class:"font-semibold text-sm line-clamp-1"},Ee={class:"opacity-60 line-clamp-1"},Je={class:"flex-center gap-1"},Ke=e("div",{class:"gray-ball"},[e("img",{src:ue})],-1),Qe={class:"text-oriange1 font-semibold"},We={class:"px-6 py-1 text-white bg-primary flex-center rounded-xl text-sm no-wrap"},Xe=A({props:{goods:{type:null,required:!0}},setup(t){return(m,s)=>(u(),g("div",Me,[e("section",Oe,[e("div",ze,[e("img",{src:(t.goods.icons||"").split(",")[0]||o(P)("images/goods/defaultImg.png"),alt:"",class:"rounded-xl w-[65px] aspect-square"},null,8,He),e("div",je,[e("div",Fe,r(t.goods.goodsName),1),e("div",Ee,r(t.goods.goodsDesc),1),e("div",Je,[Ke,e("div",Qe,r(o(W)(t.goods.price))+"MCOIN",1)])])]),e("div",We,r(t.goods.deliveryType===1?m.$t("common.buy"):m.$t("common.Payment")),1)])]))}}),Ye=V(Xe,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/ShopGoodsItem.vue"]]),Ze={class:"px-3 mt-3"},et={class:"p-3 bg-white rounded-xl overflow-y-scroll"},tt=A({props:{merchant:{type:null,required:!1},goodsTypeList:{type:null,required:!1},goodsClass:{type:null,required:!1}},emits:["handleTo"],setup(t,{emit:m}){const s=t,{t:f}=X(),c=_(0);c.value=s.goodsTypeList[0].id;const d=_(0),S=[{id:0,name:f("common.recommend")}],L=Y(()=>{const p=s.goodsClass.filter(n=>n.type===c.value);return S.concat(p)}),$=p=>{c.value=p,U()},a=p=>{d.value=p,U()},b=_([]),w=_(!1),v=_(!1),l=_(0),q=_(10),x=_(0),U=async()=>{v.value=!1,l.value=0,x.value=0,N()},N=async()=>{w.value=!0,l.value+=1,await G(),w.value=!1},G=async()=>{const p=await me({merchant:s.merchant,status:1,page:l.value,size:q.value,deliveryType:c.value,subclassId:d.value?d.value:null});if(w.value=!1,!p.success){v.value=!0;return}if(!p.data||!p.total){v.value=!0,b.value=l.value===1?[]:b.value;return}x.value=p.total;const k=_([]);k.value=p.data.map((n,i)=>n.goods),b.value=l.value===1?k.value:b.value.concat(k.value),b.value.length>=x.value&&(v.value=!0)};return(p,k)=>{const n=C("VanList");return u(),g("div",Ze,[e("div",et,[h(De,{categoryList:t.goodsTypeList,categoryActive:c.value,onChange:$},null,8,["categoryList","categoryActive"]),h(Ue,{tabActive:d.value,tabList:o(L),onChange:a},null,8,["tabActive","tabList"]),h(n,{loading:w.value,"onUpdate:loading":k[0]||(k[0]=i=>w.value=i),finished:v.value,"finished-text":p.$t("common.noMore"),"loading-text":p.$t("common.loading"),onLoad:N},{default:I(()=>[(u(!0),g(D,null,z(b.value,i=>(u(),R(Ye,{key:i.id,goods:i,onClick:()=>{m("handleTo",`/goodsDetail?id=${i.id}`)}},null,8,["goods","onClick"]))),128))]),_:1},8,["loading","finished","finished-text","loading-text"])])])}}}),st=V(tt,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/GoodsPanel.vue"]]);const H=t=>(J("data-v-12d20c9c"),t=t(),K(),t),ot={class:"w-[85vw] max-w-[375px] py-6 bg-popBg"},at={class:"flex-center-bw border-b-[0.5px] border-solid border-gray1 pb-5 px-5 shadow"},nt={class:"flex-start font-bold"},lt=H(()=>e("img",{src:ee,class:"w-[10px] h-[10px]",alt:""},null,-1)),it=[lt],rt={class:"px-5"},ct={class:"text-center mt-5"},dt={class:"relative flex-center border-b border-solid border-gray1 mt-8 pb-5"},ut=H(()=>e("img",{class:"w-[23px] absolute right-0",src:pe,alt:""},null,-1)),mt={class:"text-center border-b border-solid border-gray1 mt-8 pb-5"},pt={class:"text-[#b4b4b4]"},ft={class:"text-2xl mt-2"},vt={class:"flex justify-between text-xs mt-7"},ht={class:"px-3 py-3 h-[400px] relative"},gt={class:"flex-center relative"},_t={class:"text-base font-semibold"},xt=H(()=>e("img",{src:ee,class:"w-3 h-3",alt:""},null,-1)),bt=[xt],wt=A({props:{show:{type:Boolean,required:!0},storeAddress:{type:String,required:!0},storeId:{type:Number,required:!0}},emits:["close"],setup(t,{emit:m}){const{show:s,storeAddress:f,storeId:c}=t,[d,S]=O(!1),[L,$]=O(!1),a=ae({amount:null,balance:null,ratio:0,remark:null,hash:"",pointSelfRate:0,allowance:0}),{merchantDiscounts:b,tradeContributeSelfRate:w,trade:v}=ne(),l=le(),q=Y(()=>a.allowance>a.amount),x=async()=>{a.ratio=await b(f)},U=async()=>{a.balance=await(await l).balanceOf()},N=async()=>{a.pointSelfRate=await w()},G=async()=>{const n=await(await l).allowance(E.flashMall);a.allowance=n.result},p=async()=>{$(!0),(await(await l).approve(E.flashMall)).success&&await G(),$(!1)},k=async()=>{$(!0);const n=await v(f,a.amount);$(!1),n.success&&console.log(n)};return Z(()=>{x(),U(),N(),G()}),(n,i)=>{const te=C("VanField"),se=C("van-icon"),M=C("VanButton"),j=C("VanPopup"),oe=C("van-field");return u(),g(D,null,[h(j,{show:t.show,"onUpdate:show":i[3]||(i[3]=y=>F(s)?s.value=y:null),round:""},{default:I(()=>[e("div",ot,[e("div",at,[e("div",nt,r(n.$t("order.submitOrder")),1),e("div",{onClick:i[0]||(i[0]=y=>m("close"))},it)]),e("div",rt,[e("div",ct,r(n.$t("order.payAmount")),1),e("div",dt,[B(' <span class="text-[32px] font-black">0.00</span> '),h(te,{modelValue:o(a).amount,"onUpdate:modelValue":i[1]||(i[1]=y=>o(a).amount=y),placeholder:o(a).balance,"input-align":"center",type:"number",class:"bg-popBg text-3xl"},null,8,["modelValue","placeholder"]),ut]),e("div",mt,[e("div",pt,r(n.$t("order.preScore")),1),e("div",ft,r(o(W)(o(a).amount*o(a).ratio*o(a).pointSelfRate)),1)]),e("div",vt,[e("div",null,r(n.$t("order.orderRemark")),1),e("div",{class:"text-[#D1C2A7]",onClick:i[2]||(i[2]=y=>o(S)(!0))},[T(r(n.$t("order.noRemark")),1),h(se,{name:"arrow"})])]),o(q)?(u(),R(M,{key:1,class:"btn-orange w-full text-white font-semibold mt-5",onClick:k,loading:o(L),disabled:!o(a).amount||+o(a).amount>+o(a).balance},{default:I(()=>[T(r(n.$t("common.confrim")),1)]),_:1},8,["loading","disabled"])):(u(),R(M,{key:0,class:"btn-orange w-full text-white font-semibold mt-5",onClick:p,loading:o(L)},{default:I(()=>[T(r(n.$t("common.approve")),1)]),_:1},8,["loading"]))])])]),_:1},8,["show"]),h(j,{position:"bottom",show:o(d),"onUpdate:show":i[6]||(i[6]=y=>F(d)?d.value=y:null),round:"",class:"h-[400px]"},{default:I(()=>[e("div",ht,[e("div",gt,[e("div",_t,r(n.$t("order.remark")),1),e("div",{class:"absolute right-0",onClick:i[4]||(i[4]=y=>o(S)(!1))},bt)]),h(oe,{modelValue:o(a).remark,"onUpdate:modelValue":i[5]||(i[5]=y=>o(a).remark=y),type:"textarea",maxlength:"200",placeholder:n.$t("order.remarkDes"),"show-word-limit":"",class:"bg-[#f2f0ef] text-default h-40 rounded-lg mt-5"},null,8,["modelValue","placeholder"]),h(M,{class:"btn-orange absolute x-center bottom-10 px-16 text-white font-semibold"},{default:I(()=>[T(r(n.$t("common.confirm")),1)]),_:1})])]),_:1},8,["show"])],64)}}}),yt=V(wt,[["__scopeId","data-v-12d20c9c"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/components/SubmitOrderPop.vue"]]),$t={class:"h-full"},kt={class:"relative -z-0"},Ct=A({setup(t){const{t:m}=X(),s=_({}),f=ie(),c=re(),[d,S]=O(!1),L=_([{id:1,icon:P("svg/shop/goods-icon.svg"),name:m("shop.goods")},{id:2,icon:P("svg/shop/service-icon.svg"),name:m("shop.service")}]),$=_([]),a=async()=>{const v=f.query.id,l=await fe(v);!l.success||(s.value=l.data,s.value.onlineNum<=0?L.value.splice(0,1):s.value.offlineNum<=0&&L.value.splice(1,1))},b=async()=>{if(!s.value.merchant)return;const v=await ve(s.value.merchant);!v.success||($.value=v.data||[])},w=v=>{c.push(v)};return Z(async()=>{await a(),b()}),(v,l)=>{const q=C("VanImage");return u(),g("div",$t,[e("header",kt,[h(ce,{class:"absolute top-3 left-5"}),h(q,{src:s.value.scenery,class:"w-full h-[150px]",alt:""},null,8,["src"])]),h(Ae,{info:s.value,onHandleTo:l[0]||(l[0]=x=>w(x)),onSetSubmitShow:l[1]||(l[1]=x=>o(S)(!0))},null,8,["info"]),s.value.merchant?(u(),R(st,{key:0,goodsTypeList:L.value,goodsClass:$.value,merchant:s.value.merchant,onHandleTo:l[2]||(l[2]=x=>w(x))},null,8,["goodsTypeList","goodsClass","merchant"])):B("v-if",!0),s.value.merchant?(u(),R(yt,{key:1,show:o(d),onClose:l[3]||(l[3]=x=>o(S)(!1)),info:s.value,storeAddress:s.value.merchant,"store-id":s.value.id},null,8,["show","info","storeAddress","store-id"])):B("v-if",!0)])}}}),Nt=V(Ct,[["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/shop/Shop.vue"]]);export{Nt as default};
