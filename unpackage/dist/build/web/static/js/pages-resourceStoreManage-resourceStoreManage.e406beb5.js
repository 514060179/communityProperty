(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resourceStoreManage-resourceStoreManage"],{"1ff1":function(t,e,n){var o=n("c4a2");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("967d").default;r("5408d4ce",o,!0,{sourceMap:!1,shadowMode:!1})},"3b64":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uniLoadMore:n("bf7c").default,noDataPage:n("0437").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar bg-white search "},[n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入物品名称","confirm-type":"search"},model:{value:t.resName,callback:function(e){t.resName=e},expression:"resName"}})],1),t.hasPrivilege?n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入用户名称","confirm-type":"search"},model:{value:t.searchUserName,callback:function(e){t.searchUserName=e},expression:"searchUserName"}})],1):t._e(),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._searchResource()}}},[t._v("搜索")])],1)],1),n("v-uni-view",{staticClass:"cu-bar bg-white"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._returnResource()}}},[t._v("退还")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._scrapResource()}}},[t._v("损耗")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._transferResource()}}},[t._v("转赠")])],1)],1),t.resourceList.length>0?n("v-uni-view",{staticClass:"margin-top"},[t._l(t.resourceList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"cu-list menu-avatar "},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t.hasPrivilege?n("v-uni-text",{staticClass:"text-green margin-right-xs"},[t._v(t._s(e.userName))]):t._e(),n("v-uni-text",{staticClass:"ellip"},[t._v(t._s(e.resName)+"("+t._s(e.parentRstName)+" > "+t._s(e.rstName)+")")])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v("库存："+t._s(e.stock)+t._s(e.unitCodeName))])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v("最小计量总数："+t._s(e.miniStock)+t._s(e.miniUnitCodeName))])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v("固定资产："+t._s(e.isFixedName))])],1)],1)],1)],1)})),n("uni-load-more",{attrs:{status:t.loadingStatus,"content-text":t.loadingContentText}})],2):n("v-uni-view",[n("no-data-page")],1)],1)},i=[]},4525:function(t,e,n){"use strict";n.r(e);var o=n("7cd7"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"72a4":function(t,e,n){"use strict";n.r(e);var o=n("3b64"),r=n("4525");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("a6d0");var s=n("828b"),a=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"c3b4cc1a",null,!1,o["a"],void 0);e["default"]=a.exports},"7cd7":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223");var r=n("91e9"),i=o(n("bf7c")),s=o(n("0437")),a=o(n("f3d1")),u=n("dae2"),c={data:function(){return{orderImg:a.default.baseUrl+"img/order.png",resourceList:[],resName:"",searchUserName:"",page:1,hasPrivilege:this.java110Context.hasPrivilege("502021071018550002"),loadingStatus:"loading",loadingContentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},components:{noDataPage:s.default,uniLoadMore:i.default},onLoad:function(){this.java110Context.onLoad()},onShow:function(){this.resourceList=[],this.page=1,this._loadResourceList()},onReachBottom:function(){"noMore"!=this.loadingStatus&&this._loadResourceList()},methods:{checkAuth:function(t){return this.java110Context.hasPrivilege(t)},_loadResourceList:function(){this.loadingStatus="more";var t=this,e={resName:t.resName,searchUserName:t.searchUserName,page:t.page,row:10,communityId:(0,u.getCurrentCommunity)().communityId};(0,r.queryMyResourceStoreInfo)(this,e).then((function(e){if(0==e.code){var n=e.data;t.resourceList=t.resourceList.concat(n),t.page++,t.resourceList.length!=e.total||(t.loadingStatus="noMore")}else uni.showToast({icon:"none",title:e.msg})}))},_searchResource:function(){this.resourceList=[],this.page=1,this._loadResourceList()},_returnResource:function(){uni.navigateTo({url:"/pages/resourceStoreReturn/resourceStoreReturn"})},_scrapResource:function(){uni.navigateTo({url:"/pages/resourceStoreScrap/resourceStoreScrap"})},_transferResource:function(){uni.navigateTo({url:"/pages/resourceStoreTransfer/resourceStoreTransfer"})}}};e.default=c},"91e9":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.allocationStoreEnter=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.allocationStoreEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deleteAllocationStorehouse=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.deleteAllocationStorehouse,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deletePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.deletePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.getAllocationHisAudit=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStoreHisAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouseApplys=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStorehouseApplys,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouses=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAllocationStorehouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAuditHistoryOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listItemOutAuditHistoryOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listItemOutAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAllocationStoreAuditOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyAllocationStoreAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAuditOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyItemOutOrders=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listMyItemOutOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listResourceStoreTypes=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listResourceStoreTypes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listStoreHouses=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listStoreHouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowAuditInfo=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listWorkflowAuditInfo,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowStepStaffs=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listWorkflowStepStaffs,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstAuditStaff=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryFirstAuditStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstStaff=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryFirstStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryMyResourceStoreInfo=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceStoreResName,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryPurchaseApplyList=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryPurchaseApplyList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreAndTimes=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.listResourceStoresAndTimes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreList=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceStoreList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceSupplier=function(t,e){return new Promise((function(n,o){t.context.get({url:r.default.queryResourceSupplier,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAllocationStorehouse=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveAllocationStorehouse,data:e,success:function(e){t.onoff=!0,n(e.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAuditAllocationStoreOrder=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveAuditAllocationStoreOrder,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveItemOutApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveItemOutApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveMyAuditOrders=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.savePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.savePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveResourceEnter=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceOut=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceOut,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceStoreTransfer=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveResourceStoreTransfer,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveUrgentPurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.saveUrgentPurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updatePurchaseApply=function(t,e){return new Promise((function(n,o){t.context.post({url:r.default.updatePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var r=o(n("f3d1"))},a6d0:function(t,e,n){"use strict";var o=n("1ff1"),r=n.n(o);r.a},c4a2:function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".cu-list.menu-avatar>.cu-item[data-v-c3b4cc1a]{height:auto}.cu-list+.cu-list[data-v-c3b4cc1a]{margin-top:%?20?%}.cu-list.menu-avatar>.cu-item .content[data-v-c3b4cc1a]{position:static;margin-left:%?20?%;width:100%}",""]),t.exports=e}}]);