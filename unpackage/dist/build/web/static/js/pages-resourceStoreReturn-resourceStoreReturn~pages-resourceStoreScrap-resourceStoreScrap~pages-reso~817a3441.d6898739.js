(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resourceStoreReturn-resourceStoreReturn~pages-resourceStoreScrap-resourceStoreScrap~pages-reso~817a3441"],{"117a":function(t,e,n){"use strict";n.r(e);var o=n("3f9c"),r=n("3ac0");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("5ebe");var s=n("828b"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"740e4cc0",null,!1,o["a"],void 0);e["default"]=u.exports},"3ac0":function(t,e,n){"use strict";n.r(e);var o=n("b288"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"3b70":function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".select-resource[data-v-740e4cc0]{position:fixed;top:%?100?%;left:0;background-color:#fff;width:100%;height:100%;overflow-y:scroll;z-index:1;padding-bottom:%?100?%}.btn-box[data-v-740e4cc0]{padding:%?40?% 0;display:flex;flex-direction:row}.btn-box uni-button[data-v-740e4cc0]{width:40%}.cu-list.menu-avatar>.cu-item .content[data-v-740e4cc0]{left:%?40?%;width:80%}.cu-list[data-v-740e4cc0]{margin:0}",""]),t.exports=e},"3f9c":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showModel?n("v-uni-view",{staticClass:"select-resource"},[n("v-uni-view",{},[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.resourceList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"cu-list menu-avatar "},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:e.resId,checked:e.checked}})],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[n("v-uni-text",{staticClass:"ellip"},[t._v(t._s(e.resName)+"("+t._s(e.parentRstName)+">"+t._s(e.rstName)+")")])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v("编码："+t._s(e.resCode))])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v("固定资产："+t._s(e.isFixedName))])],1)],1)],1)],1)})),1),n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel()}}},[t._v("取消")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveSelected()}}},[t._v("保存")])],1),n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._loadResourceList()}}},[t._v("加载更多")])],1)],1):t._e()},r=[]},"5ebe":function(t,e,n){"use strict";var o=n("e594"),r=n.n(o);r.a},"91e9":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.allocationStoreEnter=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.allocationStoreEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deleteAllocationStorehouse=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.deleteAllocationStorehouse,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deletePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.deletePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.getAllocationHisAudit=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStoreHisAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouseApplys=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStorehouseApplys,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouses=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStorehouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAuditHistoryOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listItemOutAuditHistoryOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listItemOutAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAllocationStoreAuditOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyAllocationStoreAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAuditOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyItemOutOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyItemOutOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listResourceStoreTypes=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listResourceStoreTypes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listStoreHouses=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listStoreHouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowAuditInfo=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listWorkflowAuditInfo,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowStepStaffs=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listWorkflowStepStaffs,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstAuditStaff=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryFirstAuditStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstStaff=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryFirstStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryMyResourceStoreInfo=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceStoreResName,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryPurchaseApplyList=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryPurchaseApplyList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreAndTimes=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listResourceStoresAndTimes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreList=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceStoreList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceSupplier=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceSupplier,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAllocationStorehouse=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveAllocationStorehouse,data:e,success:function(e){t.onoff=!0,n(e.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAuditAllocationStoreOrder=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveAuditAllocationStoreOrder,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveItemOutApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveItemOutApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveMyAuditOrders=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.savePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.savePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveResourceEnter=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceOut=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceOut,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceStoreTransfer=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceStoreTransfer,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveUrgentPurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveUrgentPurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updatePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.updatePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var r=o(n("f3d1"))},b288:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223"),n("bf0f"),n("2797"),n("4626"),n("5ac7"),n("aa9c");var o=n("91e9"),r=n("dae2"),i={components:{},data:function(){return{showModel:!1,resourceList:[],page:1,selectedResId:[]}},props:{},watch:{},created:function(){},computed:{},mounted:function(){console.log("111"),this._loadResourceList()},methods:{switchShow:function(){this.showModel=!this.showModel},_loadResourceList:function(){var t=this,e={page:this.page,row:10,communityId:(0,r.getCurrentCommunity)().communityId,giveType:1};(0,o.queryMyResourceStoreInfo)(this,e).then((function(e){e.data.length<=0?uni.showToast({title:"已全部加载"}):(t.resourceList=t.resourceList.concat(e.data),t.page++)}))},checkboxChange:function(t){var e=t.detail.value;this.selectedResId=e,this.resourceList.forEach((function(t,n){e.includes(t.resId)&&(t.checked=!0)}))},removeSelectedItem:function(t){this.resourceList.forEach((function(e,n){e.resId==t&&(e.checked=!1)}))},saveSelected:function(){var t=this.selectedResId,e=this.resourceList;if(t.length<1)uni.showToast({title:"请选择物品",icon:"none"});else{for(var n=[],o=0;o<t.length;o++)for(var r=0;r<e.length;r++)t[o]==e[r].resId&&(e[r].remark="",n.push(e[r]));this.$emit("getResourceInfo",n),this.showModel=!1}},cancel:function(){this.showModel=!1}}};e.default=i},cc44:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.getFileType=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("."),n=e[e.length-1];if(!n)return"";n=n.toLocaleLowerCase();var o=["png","jpg","jpeg","bmp","gif","webp"];if(o.includes(n))return"image";var r=["mp4","m4v"];if(r.includes(n))return"video";var i=["mp3","m4a","wav","aac"];if(i.includes(n))return"audio";var s=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","plain"];return s.includes(n)?"office":"unknown"},e.preventClick=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this;n.onoff?(n.onoff=!1,t(e)):uni.showToast({title:"操作过于频繁",icon:"none"})},n("4626")},e594:function(t,e,n){var o=n("3b70");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("967d").default;r("b2769372",o,!0,{sourceMap:!1,shadowMode:!1})}}]);