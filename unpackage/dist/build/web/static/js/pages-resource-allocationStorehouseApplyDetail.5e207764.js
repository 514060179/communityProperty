(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resource-allocationStorehouseApplyDetail"],{"033b":function(t,e,n){"use strict";n.r(e);var o=n("e716"),i=n("f1cb");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("c5cb");var r=n("828b"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"6e343e35",null,!1,o["a"],void 0);e["default"]=a.exports},"0c9e":function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".row[data-v-6e343e35]{width:95%;margin:0 auto;height:%?60?%;line-height:%?60?%;display:flex;flex-direction:row;justify-content:space-between}.item-t[data-v-6e343e35]{width:20%;overflow:hidden;display:inline-block;text-align:center}",""]),t.exports=e},"6efb":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.allocationStoreEnter=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.allocationStoreEnter,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.deleteAllocationStorehouse=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.deleteAllocationStorehouse,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.deletePurchaseApply=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.deletePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getAllocationHisAudit=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listAllocationStoreHisAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAllocationStorehouseApplys=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listAllocationStorehouseApplys,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAllocationStorehouses=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listAllocationStorehouses,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listAuditHistoryOrders=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listAuditHistoryOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listItemOutAuditHistoryOrders=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listItemOutAuditHistoryOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyAllocationStoreAuditOrders=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listMyAllocationStoreAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyAuditOrders=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listMyAuditOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listMyItemOutOrders=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listMyItemOutOrders,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listResourceStoreTypes=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listResourceStoreTypes,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listStoreHouses=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listStoreHouses,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listWorkflowAuditInfo=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listWorkflowAuditInfo,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listWorkflowStepStaffs=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listWorkflowStepStaffs,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryFirstAuditStaff=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryFirstAuditStaff,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryFirstStaff=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryFirstStaff,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryMyResourceStoreInfo=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryResourceStoreResName,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryPurchaseApplyList=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryPurchaseApplyList,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceStoreAndTimes=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.listResourceStoresAndTimes,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceStoreList=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryResourceStoreList,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryResourceSupplier=function(t,e,n){return new Promise((function(o,s){t.context.get({url:i.default.queryResourceSupplier,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveAllocationStorehouse=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveAllocationStorehouse,data:e,success:function(e){t.onoff=!0,o(e.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveAuditAllocationStoreOrder=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveAuditAllocationStoreOrder,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveItemOutApply=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveItemOutApply,data:e,success:function(t){o(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}},n)}))},e.saveMyAuditOrders=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveMyAuditOrders,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.savePurchaseApply=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.savePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}},n)}))},e.saveResourceEnter=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveResourceEnter,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveResourceOut=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveResourceOut,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveResourceStoreTransfer=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveResourceStoreTransfer,data:e,success:function(t){o(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveUrgentPurchaseApply=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.saveUrgentPurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.updatePurchaseApply=function(t,e,n){return new Promise((function(o,s){t.context.post({url:i.default.updatePurchaseApply,data:e,success:function(t){o(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},n("bf0f");var i=o(n("f0de"))},8893:function(t,e,n){var o=n("0c9e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("967d").default;i("4670d6a8",o,!0,{sourceMap:!1,shadowMode:!1})},"9c36":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("6efb"),i=n("2d9e"),s={data:function(){return{applyId:"",communityId:"",applyInfo:[],resourceInfo:[],staffs:[]}},components:{},onLoad:function(t){this.java110Context.onLoad(),this.applyId=t.applyId,this.communityId=(0,i.getCurrentCommunity)().communityId,this._loadAuditInfo(),this._loadAuditResource(),this._loadAuditUser()},onShow:function(){},methods:{_loadAuditInfo:function(){var t=this,e={page:1,row:10,applyId:this.applyId};(0,o.listAllocationStorehouseApplys)(this,e,0==this.applyInfo.length).then((function(e){t.applyInfo=e.data[0]}))},_loadAuditResource:function(){var t=this,e={page:1,row:10,applyId:this.applyId};(0,o.listAllocationStorehouses)(this,e,0==this.resourceInfo.length).then((function(e){t.resourceInfo=e.data}))},_loadAuditUser:function(){var t=this,e={businessKey:this.applyId,communityId:this.communityId};(0,o.listWorkflowAuditInfo)(this,e,0==this.staffs.length).then((function(e){t.staffs=e.data}))}}};e.default=s},c5cb:function(t,e,n){"use strict";var o=n("8893"),i=n.n(o);i.a},e716:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-ticket text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("申请人")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.applyInfo.startUserName))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("申请时间")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.applyInfo.createTime))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("审批状态")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.applyInfo.stateName))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("说明")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.applyInfo.remark))])],1)],1)],1),n("v-uni-view",{staticClass:"margin-top"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"item-t text-bold"},[t._v("商品")]),n("v-uni-view",{staticClass:"item-t text-bold"},[t._v("数量")]),n("v-uni-view",{staticClass:"item-t text-bold"},[t._v("源仓库")]),n("v-uni-view",{staticClass:"item-t text-bold"},[t._v("目标仓库")])],1),t._l(t.resourceInfo,(function(e,o){return n("v-uni-view",{staticClass:"resource-item text-grey"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"item-t"},[t._v(t._s(e.resName))]),n("v-uni-view",{staticClass:"item-t"},[t._v(t._s(e.stock)+t._s(e.unitCodeName))]),n("v-uni-view",{staticClass:"item-t"},[t._v(t._s(e.shaName))]),n("v-uni-view",{staticClass:"item-t"},[t._v(t._s(e.shzName))])],1)],1)}))],2),n("v-uni-view",{staticClass:"cu-timeline margin-top"},[n("v-uni-view",{staticClass:"cu-time"},[t._v("工单")]),t._l(t.staffs,(function(e,o){return n("v-uni-view",{key:o,staticClass:"cu-item "},[n("v-uni-view",{staticClass:"bg-cyan content"},[n("v-uni-text",[t._v(t._s(e.startTime||""))]),t._v("到达 "+t._s(e.userName||e.auditName)+" 工位")],1),void 0!=e.endTime?n("v-uni-view",{staticClass:"bg-cyan content"},[n("v-uni-text",[t._v(t._s(e.endTime))]),t._v("处理完成")],1):t._e(),void 0!=e.endTime?n("v-uni-view",{staticClass:"bg-cyan content"},[n("v-uni-text",[t._v("处理意见：")]),t._v(t._s(e.context))],1):t._e()],1)}))],2)],1)},i=[]},f1cb:function(t,e,n){"use strict";n.r(e);var o=n("9c36"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a}}]);