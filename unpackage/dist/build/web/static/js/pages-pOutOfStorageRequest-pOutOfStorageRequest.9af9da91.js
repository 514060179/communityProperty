(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pOutOfStorageRequest-pOutOfStorageRequest"],{"0854":function(e,t,i){"use strict";var s=i("545a"),a=i.n(s);a.a},"38ad":function(e,t,i){"use strict";i.r(t);var s=i("b830"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t["default"]=a.a},"545a":function(e,t,i){var s=i("f90c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("967d").default;a("109cfc49",s,!0,{sourceMap:!1,shadowMode:!1})},"9c32":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{},[i("v-uni-view",{staticClass:"padding"},[i("v-uni-text",[e._v("出库信息")])],1),i("v-uni-form",{staticClass:"disabled"},[i("v-uni-view",{staticClass:"cu-list menu "},[i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._selectPurchase()}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("出库类型")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(""!=e.aPurchase?e.aPurchase:"请选择"))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("单价")]),i("v-uni-input",{attrs:{disabled:"disabled",name:"input",type:"number"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("库存")]),i("v-uni-input",{attrs:{disabled:"disabled",name:"input",type:"number"},model:{value:e.stock,callback:function(t){e.stock=t},expression:"stock"}})],1),i("v-uni-view",{staticClass:"cu-form-group align-start"},[i("v-uni-view",{staticClass:"title"},[e._v("商品备注")]),i("v-uni-textarea",{attrs:{maxlength:"-1",disabled:"disabled",placeholder:"商品备注"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.textareaBInput.apply(void 0,arguments)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-text",[e._v("出库参数")])],1),i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("出库数量")]),i("v-uni-input",{attrs:{name:"input",type:"number"},model:{value:e.numberPuchase,callback:function(t){e.numberPuchase=t},expression:"numberPuchase"}})],1),i("v-uni-view",{staticClass:"cu-form-group align-start"},[i("v-uni-view",{staticClass:"title"},[e._v("申请说明")]),i("v-uni-textarea",{attrs:{maxlength:"-1",disabled:null!=e.modalName,placeholder:"申请出库说明"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.textareaBInput.apply(void 0,arguments)}},model:{value:e.explainPuchase,callback:function(t){e.explainPuchase=t},expression:"explainPuchase"}})],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white tabbar border search fixed"},[i("v-uni-view",{staticClass:"cu-form-group"},[e._v("总计: "+e._s(e.totalPrice)+" ￥")]),i("v-uni-view",[i("v-uni-button",{staticClass:"cu-btn bg-color round shadow-blur margin-right-xs",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._submitPurchase()}}},[e._v("提交申请")])],1)],1)],1)],1)},a=[]},b830:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("01a2"),i("e39c");var s=i("2d9e"),a={data:function(){return{puchaseAll:[],typePuchase:[],price:"0",numberPuchase:"1",explainPuchase:"",totalPrice:"0",typeName:"请选择",typeCdIndex:-1,description:"",resCode:-1,resId:-1,stock:0,floorId:"",aPurchase:"",unitId:"",unitNum:"",roomId:"",roomNum:"",repairIdAttr:["10001","10002","10003"],context:"",repairName:"",storeId:"",userName:"",userId:""}},watch:{price:function(e,t){this.totalPrice=this.numberPuchase*e},numberPuchase:function(e,t){this.totalPrice=this.price*e}},onLoad:function(){this.java110Context.onLoad();var e=this.java110Context.getUserInfo(),t=e.storeId;this.storeId=t,this.userId=e.userId,this.userName=e.userName},onShow:function(){var e=this.java110Context.getParam("floorInfo");e&&(this.floorId=this.resId=e.resId,this.aPurchase=this.typeName=e.resName,this.price=e.price,this.stock=e.stock,this.description=e.description,this.resCode=e.resCode)},methods:{_selectPurchase:function(){uni.navigateTo({url:"/pages/purchaseList/purchaseList?communityId="+(0,s.getCurrentCommunity)().communityId})},puchaseChange:function(e){this.typeName=this.puchaseAll[e.detail.value].resName,this.price=this.puchaseAll[e.detail.value].price,this.resId=this.puchaseAll[e.detail.value].resId,this.resCode=this.puchaseAll[e.detail.value].resCode,this.description=this.puchaseAll[e.detail.value].description},_submitPurchase:function(e){var t={resourceStores:[{resId:this.resId,resName:this.typeName,resCode:this.resCode,price:this.price,stock:this.stork,description:this.explainPuchase,quantity:this.numberPuchase}],description:this.description,file:"",resOrderType:"10000",storeId:this.storeId,userId:this.userId,userName:this.userName};console.log(t)}}};t.default=a},ce31:function(e,t,i){"use strict";i.r(t);var s=i("9c32"),a=i("38ad");for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("0854");var u=i("828b"),r=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"450285b2",null,!1,s["a"],void 0);t["default"]=r.exports},f90c:function(e,t,i){var s=i("c86c");t=s(!1),t.push([e.i,".bg-color[data-v-450285b2]{background-color:#0a0;color:#fff}.border[data-v-450285b2]{border-top:1px solid #eee}.navbar[data-v-450285b2]{position:fixed;bottom:0;left:0}.fixed[data-v-450285b2]{top:unset;bottom:0}.disabled[data-v-450285b2],\n.disabled uni-input[data-v-450285b2],\n.disabled uni-textarea[data-v-450285b2]{color:silver}",""]),e.exports=t}}]);