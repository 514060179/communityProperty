(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resource-itemOutDo"],{"01ed":function(t,e,n){"use strict";n.r(e);var o=n("8c36"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"04d6":function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.item-remove[data-v-b2c6be8e]{border-radius:%?15?%;padding:%?2?% %?10?%}.resource-header[data-v-b2c6be8e]{margin-top:%?30?%;padding:%?20?%}.resource-item[data-v-b2c6be8e]{margin-top:%?2?%;padding:%?20?%}.resource-item .flex-around[data-v-b2c6be8e]{display:flex;justify-content:space-between;margin-top:%?15?%}',""]),t.exports=e},"2ebc":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"select-single-resource"},[n("v-uni-view",{staticClass:"margin-top"},[n("v-uni-view",{staticClass:"resource-header flex justify-between bg-white"},[n("v-uni-view",{staticClass:"text-bold"},[t._v("出库物品")]),n("v-uni-view")],1),n("v-uni-view",{staticClass:" "},t._l(t.itemOutOrderInfo.purchaseApplyDetailVo,(function(e,o){return n("v-uni-view",{key:o,staticClass:"resource-item bg-white"},[n("v-uni-view",{staticClass:" "},[n("v-uni-view",{staticClass:" flex-around"},[n("v-uni-label",{staticClass:"text-df"},[t._v("物品:")]),n("v-uni-text",{staticClass:"ellip text-df"},[t._v(t._s(e.resName)+"-"+t._s(e.rstName))])],1),n("v-uni-view",{staticClass:" flex-around"},[n("v-uni-label",{staticClass:"text-df"},[t._v("库存:")]),n("v-uni-text",{staticClass:"text-df"},[t._v(t._s(e.stock))])],1),n("v-uni-view",{staticClass:" flex-around"},[n("v-uni-label",{staticClass:"text-df"},[t._v("申请数量:")]),n("v-uni-text",{staticClass:"text-df"},[t._v(t._s(e.quantity))])],1),n("v-uni-view",{staticClass:" flex-around"},[n("v-uni-label",{staticClass:"text-df"},[t._v("发放数量:")]),n("v-uni-input",{staticClass:"  text-right",attrs:{type:"number",placeholder:"请输入发放数量","placeholder-class":"text-grey text-df",value:""},model:{value:e.purchaseQuantity,callback:function(n){t.$set(e,"purchaseQuantity",n)},expression:"item.purchaseQuantity"}})],1),n("v-uni-view",{staticClass:" flex-around"},[n("v-uni-label",{staticClass:"text-df"},[t._v("备注:")]),n("v-uni-input",{staticClass:"  text-right",attrs:{type:"text",placeholder:"选填,请输入备注","placeholder-class":"text-grey text-df",value:""},model:{value:e.remark,callback:function(n){t.$set(e,"remark",n)},expression:"item.remark"}})],1)],1)],1)})),1),n("v-uni-view",{staticClass:"margin-top text-right"},[n("v-uni-button",{staticClass:"cu-btn bg-blue  round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[t._v("提交")])],1)],1)],1)},r=[]},"6efb":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.allocationStoreEnter=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.allocationStoreEnter,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.deleteAllocationStorehouse=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.deleteAllocationStorehouse,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.deletePurchaseApply=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.deletePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getAllocationHisAudit=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listAllocationStoreHisAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAllocationStorehouseApplys=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listAllocationStorehouseApplys,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAllocationStorehouses=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listAllocationStorehouses,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAuditHistoryOrders=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listAuditHistoryOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listItemOutAuditHistoryOrders=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listItemOutAuditHistoryOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyAllocationStoreAuditOrders=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listMyAllocationStoreAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyAuditOrders=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listMyAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyItemOutOrders=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listMyItemOutOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listResourceStoreTypes=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listResourceStoreTypes,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listStoreHouses=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listStoreHouses,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listWorkflowAuditInfo=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listWorkflowAuditInfo,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listWorkflowStepStaffs=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listWorkflowStepStaffs,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryFirstAuditStaff=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryFirstAuditStaff,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryFirstStaff=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryFirstStaff,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryMyResourceStoreInfo=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryResourceStoreResName,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryPurchaseApplyList=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryPurchaseApplyList,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceStoreAndTimes=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.listResourceStoresAndTimes,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceStoreList=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryResourceStoreList,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceSupplier=function(t,e,n){return new Promise((function(o,i){t.context.get({url:r.default.queryResourceSupplier,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveAllocationStorehouse=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveAllocationStorehouse,data:e,success:function(e){t.onoff=!0,o(e.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveAuditAllocationStoreOrder=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveAuditAllocationStoreOrder,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveItemOutApply=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveItemOutApply,data:e,success:function(t){o(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}},n)}))},e.saveMyAuditOrders=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveMyAuditOrders,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.savePurchaseApply=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.savePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}},n)}))},e.saveResourceEnter=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveResourceEnter,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveResourceOut=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveResourceOut,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveResourceStoreTransfer=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveResourceStoreTransfer,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveUrgentPurchaseApply=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.saveUrgentPurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.updatePurchaseApply=function(t,e,n){return new Promise((function(o,i){t.context.post({url:r.default.updatePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},n("bf0f");var r=o(n("f0de"))},"8c36":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d4b5"),n("bf0f"),n("2797"),n("e966");var r=n("6efb"),i=n("9ef9"),s=o(n("9b8e"));s.default.prototype.$preventClick=i.preventClick;var a={components:{},data:function(){return{onoff:!0,itemOutOrderInfo:"",applyOrderId:"",resOrderType:"",taskId:""}},onLoad:function(t){this.java110Context.onLoad(),this.applyOrderId=t.applyOrderId,this.resOrderType=t.resOrderType,this.taskId=t.taskId,this._loadItemOutResources()},onShow:function(){},methods:{_loadItemOutResources:function(){var t=this,e={page:1,row:100,applyOrderId:this.applyOrderId,resOrderType:this.resOrderType};(0,r.queryPurchaseApplyList)(this,e,"{}"==JSON.stringify(this.itemOutOrderInfo)).then((function(e){t.itemOutOrderInfo=e.purchaseApplys[0],t.itemOutOrderInfo.purchaseApplyDetailVo.forEach((function(t){t.purchaseQuantity="",t.price="",t.purchaseRemark=""}))}))},save:function(){var t="";if(this.itemOutOrderInfo.purchaseApplyDetailVo.forEach((function(e){!e.hasOwnProperty("purchaseQuantity")||""==e.purchaseQuantity||parseInt(e.purchaseQuantity)<1?t="请填写发放数量":(e.purchaseQuantity=parseInt(e.purchaseQuantity),e.purchaseQuantity>parseInt(e.stock)&&(t=e.resName+"库存不足"))})),""!=t)return uni.showToast({title:t,icon:"none"}),void(this.onoff=!0);this.itemOutOrderInfo.taskId=this.taskId,(0,r.saveResourceOut)(this,this.itemOutOrderInfo,!0).then((function(t){uni.showToast({title:t.msg,icon:"none"}),0==t.code&&uni.navigateBack({delta:1})}))}}};e.default=a},"9ef9":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.getFileType=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("."),n=e[e.length-1];if(!n)return"";n=n.toLocaleLowerCase();var o=["png","jpg","jpeg","bmp","gif","webp"];if(o.includes(n))return"image";var r=["mp4","m4v"];if(r.includes(n))return"video";var i=["mp3","m4a","wav","aac"];if(i.includes(n))return"audio";var s=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","plain"];return s.includes(n)?"office":"unknown"},e.preventClick=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this;n.onoff?(n.onoff=!1,t(e)):uni.showToast({title:"操作过于频繁",icon:"none"})},n("4626")},a0f5:function(t,e,n){var o=n("04d6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("967d").default;r("55b7d3ae",o,!0,{sourceMap:!1,shadowMode:!1})},bcde:function(t,e,n){"use strict";var o=n("a0f5"),r=n.n(o);r.a},ee77:function(t,e,n){"use strict";n.r(e);var o=n("2ebc"),r=n("01ed");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("bcde");var s=n("828b"),a=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"b2c6be8e",null,!1,o["a"],void 0);e["default"]=a.exports}}]);