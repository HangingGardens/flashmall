import{_ as P,d as U,C as J,h as $,D as F,i as N,y as B,o as r,c as b,z as g,A as f,E as h,t as o,a as e,k as i,e as M,m as K,F as S,G as R,H as T,v as W,j as X,I as Y,J as q,K as Z,T as ee,L as E,l as te,M as se,p as oe,f as ne}from"./index-27cd35bf.js";import{P as G}from"./PopHeader-4e976cbf.js";import{T as ae}from"./TokenBalance-290bccb9.js";import{u as O}from"./index-95f4a229.js";import{_ as le}from"./close-384dfae6.js";import{Q as ie}from"./qrcode.vue.esm-4eff03e6.js";const tt=""+new URL("../images/avatarRing-2da5c7b6.png",import.meta.url).href,st=""+new URL("../images/level-0f99013c.svg",import.meta.url).href,j=""+new URL("../images/yes-97cb7030.svg",import.meta.url).href,z=""+new URL("../images/no-f92c763d.svg",import.meta.url).href;const re={class:"flex-center gap-4 text-white font-semibold"},ce={class:"mt-2 flex justify-center items-center opacity-50 text-xs"},ue=U({props:{openFee:{type:Number,required:!0},buyMember:{type:Function,required:!0}},emits:["close","getIsVip"],setup(t,{emit:c}){const u=t,d=J(),p=$(0),[m,a]=O(!1),w=F(()=>p.value>u.openFee),v=async()=>{const s=await(await d).allowance(R.flashMall);p.value=s.result},C=async()=>{a(!0),(await(await d).approve(R.flashMall)).success&&await v(),a(!1)},I=async()=>{a(!0);const s=await u.buyMember();a(!1),s.success&&c("getIsVip")},k=async()=>{await v()};return N(()=>{k()}),(s,_)=>{const y=B("VanButton");return r(),b(S,null,[g(G,{onClick:_[0]||(_[0]=A=>c("close"))},{default:f(()=>[h(o(s.$t("home.openVip")),1)]),_:1}),e("div",re,[i(w)?K("v-if",!0):(r(),M(y,{key:0,class:"btn-orange btn-shadow h-[35px] min-w-[120px] px-4",loading:i(m),onClick:C},{default:f(()=>[h(o(s.$t("assets.auth")),1)]),_:1},8,["loading"])),g(y,{class:"btn-orange btn-shadow h-[35px] min-w-[120px] px-4",loading:i(m),disabled:!i(w),onClick:I},{default:f(()=>[h(o(s.$t("home.toOpenVip",{fee:t.openFee})),1)]),_:1},8,["loading","disabled"])]),e("div",ce,[h(" MCOIN"+o(s.$t("assets.balance"))+" ",1),g(ae,{token:"MCOIN",tokenName:!1})])],64)}}}),de=P(ue,[["__scopeId","data-v-874fe14a"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/home/components/BuyMemberPop.vue"]]),pe=()=>T("GET","/v1/getAgentLevel",""),me=()=>T("GET","/v1/getUpgradeConfig","");const ve={class:"w-[85vw] max-w-[375px] px-5 py-6 bg-popBg"},fe={class:"flex-start"},_e={class:"mx-1 font-bold"},he={class:"border border-solid border-primary text-xs text-primary px-[3px] py-[4px] rounded scale-90"},ge={class:"flex-center-bw mt-5"},we={class:"text-gray3"},be={class:"font-bold text-primary"},ye={class:"flex-center-bw mt-5"},xe={class:"text-gray3"},$e={class:"font-bold text-primary"},Ce={class:"mt-5 text-gray3"},Ie={class:"font-bold text-primary"},ke={class:"flex-center-bw mt-5"},Ve={class:"text-gray3"},Le={class:"font-bold text-primary"},Be={key:0,src:j,class:"w-[14px]",alt:""},Me={key:1,src:z,class:"w-[14px]",alt:""},Pe={class:"flex-center-bw mt-5"},Ue={class:"text-gray3"},Fe={class:"font-bold text-primary"},Te={key:0,src:j,class:"w-[14px]",alt:""},Ae={key:1,src:z,class:"w-[14px]",alt:""},Re={class:"grid grid-cols-2 gap-2 mt-5"},Ne=U({props:{show:{type:Boolean,required:!0},userInfo:{type:null,required:!0}},emits:["close","invite"],setup(t,{emit:c}){const{show:u,userInfo:d}=t,{t:p}=W(),{members:m,memberPrice:a,buyMember:w}=X();F(()=>+s.value.one>+d.contribute||+s.value.two>+d.totalContribute);const[v,C]=O(!1),I=$(!1),k=$(0),s=$({id:1,one:5e4,two:5e4}),_=$({address:"",agentAmount:.001,majorAmount:.002}),y=async()=>{I.value=await m()},A=async()=>{k.value=+await a()},D=async()=>{const n=await pe();if(!n.success)return;const l=n.data||[],x=l.length,V=d.agentLevel||0;s.value=V===x?l[x-1]:l[V]},H=async()=>{const n=await me();!n.success||(_.value=n.data)},Q=async()=>{if(!_.value.address)return;C(!0);const n=await Z(_.value.address,_.value.agentAmount.toString());C(!1),n.success&&(ee(p("home.upgradeTips")),setTimeout(()=>{c("close")},1500))};return N(()=>{y(),A(),D(),H()}),(n,l)=>{const x=B("VanButton"),V=B("VanPopup");return r(),M(V,{show:t.show,"onUpdate:show":l[3]||(l[3]=L=>q(u)?u.value=L:null),round:""},{default:f(()=>[e("div",ve,[I.value?(r(),b(S,{key:0},[g(G,{onClick:l[0]||(l[0]=L=>c("close"))},{default:f(()=>[e("div",fe,[e("span",null,o(n.$t("home.level")),1),e("span",_e,"V"+o(t.userInfo.agentLevel),1),e("div",he,o(n.$t("home.levelDetail")),1)])]),_:1}),e("div",null,[e("div",ge,[e("div",we,o(n.$t("home.score")),1),e("div",be,o(t.userInfo.contribute||0),1)]),e("div",ye,[e("div",xe,o(n.$t("home.deductScore")),1),e("div",$e,o(t.userInfo.totalContribute||0),1)]),e("div",Ce,[h(o(n.$t("home.nextLevel"))+" ",1),e("span",Ie,"V"+o(t.userInfo.agentLevel+1),1)]),e("div",ke,[e("div",Ve,o(n.$t("home.keepScore",{num:s.value.one||0})),1),e("div",Le,[(+t.userInfo.contribute||0)>=+s.value.one?(r(),b("img",Be)):(r(),b("img",Me))])]),e("div",Pe,[e("div",Ue,o(n.$t("home.deductScore",{num:s.value.two||0})),1),e("div",Fe,[(+t.userInfo.totalContribute||0)>=+s.value.two?(r(),b("img",Te)):(r(),b("img",Ae))])])]),e("div",Re,[g(x,{class:"btn text-primary font-bold h-9",round:"",onClick:l[1]||(l[1]=L=>c("invite"))},{default:f(()=>[h(o(n.$t("home.inviteRegister")),1)]),_:1}),g(x,{class:Y(["text-white font-bold h-9",+s.value.one>+t.userInfo.contribute||+s.value.two>+t.userInfo.totalContribute?"btn-disabled":"btn-orange"]),disabled:+s.value.one>+t.userInfo.contribute||+s.value.two>+t.userInfo.totalContribute,loading:i(v),onClick:Q},{default:f(()=>[h(o(n.$t("home.upgrade")),1)]),_:1},8,["disabled","class","loading"])])],64)):(r(),M(de,{key:1,openFee:k.value,buyMember:i(w),onClose:l[2]||(l[2]=L=>c("close")),onGetIsVip:y},null,8,["openFee","buyMember"]))])]),_:1},8,["show"])}}}),ot=P(Ne,[["__scopeId","data-v-34e27dd2"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/home/components/LevelPop.vue"]]);const Se=t=>(oe("data-v-7c16cd3e"),t=t(),ne(),t),qe={class:"w-[85vw] max-w-[375px] px-5 py-6 bg-popBg"},Ee={class:"flex-center-bw pb-5"},Ge={class:"flex-start"},Oe=Se(()=>e("img",{src:le,class:"w-[10px] h-[10px]",alt:""},null,-1)),je=[Oe],ze={class:"flex-center-bw text-xs mt-5"},De={class:"text-gray3"},He={class:"font-bold"},Qe=U({props:{show:{type:Boolean,required:!0}},emits:["close"],setup(t,{emit:c}){const{show:u}=t,{getCurrentAccount:d}=E(),p=F(()=>window.location.origin+"/#/home?invite="+d());return(m,a)=>{const w=B("VanPopup");return r(),M(w,{show:t.show,"onUpdate:show":a[2]||(a[2]=v=>q(u)?u.value=v:null),round:""},{default:f(()=>[e("div",qe,[e("div",Ee,[e("div",Ge,[e("span",null,o(m.$t("home.inviteRegister")),1)]),e("div",{onClick:a[0]||(a[0]=v=>c("close"))},je)]),e("div",null,[g(ie,{value:i(p),size:200,level:"H",class:"mx-auto"},null,8,["value"]),e("div",ze,[e("div",De,[e("span",He,o(m.$t("home.inviteLink")),1),e("span",null,o(i(te)(i(p),"...",15,4)),1)]),e("div",{class:"rounded bg-primary py-1 px-2 text-white",onClick:a[1]||(a[1]=v=>i(se)(i(p)))},o(m.$t("common.copy")),1)])])])]),_:1},8,["show"])}}}),nt=P(Qe,[["__scopeId","data-v-7c16cd3e"],["__file","/Users/wangkeai/work/xueyan/flashmall/flashmall-dapp/src/view/home/components/InviteCodePop.vue"]]),Je=E().getCurrentAccount(),at=t=>T("GET",`/v1/getUserInfo/${t||Je}`,"");export{nt as I,ot as L,tt as _,st as a,at as u};
