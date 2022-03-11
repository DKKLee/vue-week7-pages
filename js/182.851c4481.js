"use strict";(self["webpackChunkvue_week7"]=self["webpackChunkvue_week7"]||[]).push([[182],{8478:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(6252),s=a(3577),i=a(9963);const d={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r=(0,l._)("span",{"aria-hidden":"true"},"«",-1),o=[r],u={key:0,class:"page-link"},p=["onClick"],c=(0,l._)("span",{"aria-hidden":"true"},"»",-1),h=[c];function _(e,t,a,r,c,_){return(0,l.wg)(),(0,l.iD)("nav",d,[(0,l._)("ul",n,[(0,l._)("li",{class:(0,s.C_)([{disabled:!a.pages.has_pre},"page-item"])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,i.iM)((e=>_.updatePage(a.pages.current_page-1)),["prevent"]))},o)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,s.C_)(["page-item",{active:a.pages.current_page===e}]),key:e},[e===a.pages.current_page?((0,l.wg)(),(0,l.iD)("span",u,(0,s.zw)(e),1)):((0,l.wg)(),(0,l.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,i.iM)((t=>_.updatePage(e)),["prevent"])},(0,s.zw)(e),9,p))],2)))),128)),(0,l._)("li",{class:(0,s.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,i.iM)((e=>_.updatePage(a.pages.current_page+1)),["prevent"]))},h)],2)])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("emitPages",e)}}},m=a(3744);const w=(0,m.Z)(g,[["render",_]]);var b=w},7182:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var l=a(6252),s=a(3577),i=a(9963);const d={class:""},n={class:"table mt-4"},r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"購買時間"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"購買款項"),(0,l._)("th",null,"應付金額"),(0,l._)("th",null,"是否付款"),(0,l._)("th",null,"編輯")])],-1),o=["textContent"],u={class:"list-unstyled"},p={class:"text-right"},c={class:"form-check form-switch"},h=["id","onUpdate:modelValue","onChange"],_=["for"],g={key:0,type:"text",value:"已付款"},m={key:1,type:"text",value:"未付款"},w={class:"btn-group"},b=["onClick"],k=["onClick"];function y(e,t,a,y,f,v){const O=(0,l.up)("MyLoading"),D=(0,l.up)("OrderModal"),x=(0,l.up)("DelModal"),M=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(O,{active:f.isLoading,"z-index":1060},null,8,["active"]),(0,l._)("table",n,[r,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.orders,((t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a},[f.orders.length?((0,l.wg)(),(0,l.iD)("tr",{key:0,class:(0,s.C_)({"text-secondary":!t.is_paid})},[(0,l._)("td",null,(0,s.zw)(e.$filters.date(t.create_at)),1),(0,l._)("td",null,[t.user?((0,l.wg)(),(0,l.iD)("span",{key:0,textContent:(0,s.zw)(t.user.email)},null,8,o)):(0,l.kq)("",!0)]),(0,l._)("td",null,[(0,l._)("ul",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.products,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t},(0,s.zw)(e.product.title)+" 數量："+(0,s.zw)(e.qty)+" "+(0,s.zw)(e.product.unit),1)))),128))])]),(0,l._)("td",p,(0,s.zw)(t.total),1),(0,l._)("td",null,[(0,l._)("div",c,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>v.updatePaid(t)},null,40,h),[[i.e8,t.is_paid]]),(0,l._)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[f.tempOrder.is_paid?((0,l.wg)(),(0,l.iD)("input",g)):((0,l.wg)(),(0,l.iD)("input",m))],8,_)])]),(0,l._)("td",null,[(0,l._)("div",w,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:e=>v.openModal(t)}," 檢視 ",8,b),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:e=>v.openDelOrderModal(t)}," 刪除 ",8,k)])])],2)):(0,l.kq)("",!0)],64)))),128))])]),(0,l.Wm)(D,{order:f.tempOrder,ref:"orderModal",onUpdatePaid:v.updatePaid},null,8,["order","onUpdatePaid"]),(0,l.Wm)(x,{item:f.tempOrder,ref:"delModal",onDelItem:v.delOrder},null,8,["item","onDelItem"]),(0,l.Wm)(M,{pages:f.pagination,onEmitPages:v.getOrders},null,8,["pages","onEmitPages"])])}var f=a(6474);const v={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog modal-xl",role:"document"},D={class:"modal-content border-0"},x=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"訂單細節")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},$={class:"row"},C={class:"col-md-4"},P=(0,l._)("h3",null,"用戶資料",-1),z={class:"table"},L={key:0},Z=(0,l._)("th",{style:{width:"100px"}},"姓名",-1),S=(0,l._)("th",null,"Email",-1),q=(0,l._)("th",null,"電話",-1),H=(0,l._)("th",null,"地址",-1),U={class:"col-md-8"},Y=(0,l._)("h3",null,"訂單細節",-1),j={class:"table"},E=(0,l._)("th",{style:{width:"100px"}},"訂單編號",-1),K=(0,l._)("th",null,"下單時間",-1),W=(0,l._)("th",null,"付款時間",-1),N={key:0},V={key:1},I=(0,l._)("th",null,"付款狀態",-1),A={key:0,class:"text-success"},B={key:1,class:"text-muted"},F=(0,l._)("th",null,"總金額",-1),G=(0,l._)("h3",null,"選購商品",-1),J={class:"table"},Q=(0,l._)("thead",null,[(0,l._)("tr")],-1),R={class:"text-end"},T={class:"d-flex justify-content-end"},X={class:"form-check"},ee={class:"form-check-label",for:"flexCheckDefault"},te={key:0},ae={key:1},le=(0,l._)("input",{type:"hidden"},null,-1),se={class:"modal-footer"},ie=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function de(e,t,a,d,n,r){return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",O,[(0,l._)("div",D,[x,(0,l._)("div",M,[(0,l._)("div",$,[(0,l._)("div",C,[P,(0,l._)("table",z,[n.tempOrder.user?((0,l.wg)(),(0,l.iD)("tbody",L,[(0,l._)("tr",null,[Z,(0,l._)("td",null,(0,s.zw)(n.tempOrder.user.name),1)]),(0,l._)("tr",null,[S,(0,l._)("td",null,(0,s.zw)(n.tempOrder.user.email),1)]),(0,l._)("tr",null,[q,(0,l._)("td",null,(0,s.zw)(n.tempOrder.user.tel),1)]),(0,l._)("tr",null,[H,(0,l._)("td",null,(0,s.zw)(n.tempOrder.user.address),1)])])):(0,l.kq)("",!0)])]),(0,l._)("div",U,[Y,(0,l._)("table",j,[(0,l._)("tbody",null,[(0,l._)("tr",null,[E,(0,l._)("td",null,(0,s.zw)(n.tempOrder.id),1)]),(0,l._)("tr",null,[K,(0,l._)("td",null,(0,s.zw)(e.$filters.date(n.tempOrder.create_at)),1)]),(0,l._)("tr",null,[W,(0,l._)("td",null,[n.tempOrder.paid_date?((0,l.wg)(),(0,l.iD)("span",N,(0,s.zw)(e.$filters.date(n.tempOrder.paid_date)),1)):((0,l.wg)(),(0,l.iD)("span",V,"時間不正確"))])]),(0,l._)("tr",null,[I,(0,l._)("td",null,[n.tempOrder.is_paid?((0,l.wg)(),(0,l.iD)("strong",A,"已付款")):((0,l.wg)(),(0,l.iD)("span",B,"尚未付款"))])]),(0,l._)("tr",null,[F,(0,l._)("td",null,(0,s.zw)(e.$filters.currency(n.tempOrder.total)),1)])])]),G,(0,l._)("table",J,[Q,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.tempOrder.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("th",null,(0,s.zw)(t.product.title),1),(0,l._)("td",null,(0,s.zw)(t.qty)+" / "+(0,s.zw)(t.product.unit),1),(0,l._)("td",R,(0,s.zw)(e.$filters.currency(t.final_total)),1)])))),128))])]),(0,l._)("div",T,[(0,l._)("div",X,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=e=>n.tempOrder.is_paid=e)},null,512),[[i.e8,n.tempOrder.is_paid]]),(0,l._)("label",ee,[n.tempOrder.is_paid?((0,l.wg)(),(0,l.iD)("span",te,"已付款")):((0,l.wg)(),(0,l.iD)("span",ae,"未付款")),le])])])])])]),(0,l._)("div",se,[ie,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.$emit("update-paid",n.tempOrder))}," 修改付款狀態 ")])])])],512)}var ne=a(1339),re={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[ne.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order}}},oe=a(3744);const ue=(0,oe.Z)(re,[["render",de]]);var pe=ue,ce=a(8478),he={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:ce.Z,DelModal:f.Z,OrderModal:pe},methods:{getOrders(e=1){this.currentPage=e;const t=`https://vue3-course-api.hexschool.io/v2/api/vuetestproducts/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t,this.tempProduct).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{this.isLoading=!1,this.$httpMessageState(e.response,"錯誤訊息")}))},openModal(e){this.tempOrder={...e},this.isNew=!1;const t=this.$refs.orderModal;t.openModal()},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.openModal()},updatePaid(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/v2/api/vuetestproducts/admin/order/${e.id}`,a={is_paid:e.is_paid};this.$http.put(t,{data:a}).then((e=>{this.isLoading=!1;const t=this.$refs.orderModal;t.hideModal(),this.getOrders(this.currentPage),this.$httpMessageState(e,"更新付款狀態")})).catch((e=>{this.isLoading=!1,this.$httpMessageState(e.response,"錯誤訊息")}))},delOrder(){const e=`https://vue3-course-api.hexschool.io/v2/api/vuetestproducts/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(e).then((()=>{this.isLoading=!1;const e=this.$refs.delModal;e.hideModal(),this.getOrders(this.currentPage)})).catch((e=>{this.isLoading=!1,this.$httpMessageState(e.response,"錯誤訊息")}))}},created(){this.getOrders()}};const _e=(0,oe.Z)(he,[["render",y]]);var ge=_e}}]);
//# sourceMappingURL=182.851c4481.js.map