(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resource-purchaseApplyAuditOrders"],{"02a7":function(t,e,n){"use strict";n.r(e);var i=n("2162"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"0af8":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".item-content[data-v-58c15546]{width:100%;margin-left:%?20?%;line-height:1.6em}.ellipsis[data-v-58c15546]{display:inline-block;max-width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.bg-white[data-v-58c15546]{position:relative}.cu-btn[data-v-58c15546]{position:absolute;right:%?10?%;top:%?25?%}",""]),t.exports=e},1363:function(t,e,n){var i=n("6639");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("74e15e54",i,!0,{sourceMap:!1,shadowMode:!1})},"1cd5":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.apply-title[data-v-0ffb3546]{height:%?60?%;line-height:%?50?%;border-bottom:%?1?% solid #f1f1f1}.apply-content[data-v-0ffb3546]{margin-bottom:%?20?%}.apply-content .item[data-v-0ffb3546]{width:50%;margin-top:%?20?%}.radius-sm[data-v-0ffb3546]{border-radius:%?16?%}.apply-btn[data-v-0ffb3546]{height:%?60?%;border-top:%?1?% solid #f1f1f1}',""]),t.exports=e},2162:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d4b5");i(n("0437"));var o=n("91e9"),a={name:"purchaseApplyAuditHis",data:function(){return{applyList:[],loadingStatus:"",page:1}},methods:{loadApplyDone:function(){this.loadingStatus="more";var t=this,e={page:this.page,row:10,communityId:this.getCommunityId()};(0,o.listAuditHistoryOrders)(this,e).then((function(e){t.applyList=e.data,t.applyList.length!=e.total||(t.loadingStatus="noMore")}))},_toApplyDetail:function(t){uni.navigateTo({url:"/pages/resource/purchaseApplyDetail?apply="+JSON.stringify(t)})}}};e.default=a},"363a":function(t,e,n){var i=n("1cd5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("534969cc",i,!0,{sourceMap:!1,shadowMode:!1})},"38d8":function(t,e,n){"use strict";var i=n("8ddd"),o=n.n(i);o.a},"411d":function(t,e,n){"use strict";n.r(e);var i=n("f17c"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"48fb":function(t,e,n){"use strict";n.r(e);var i=n("d834"),o=n("411d");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("819d");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0ffb3546",null,!1,i["a"],void 0);e["default"]=s.exports},6639:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.apply-title[data-v-2b42ae40]{height:%?60?%;line-height:%?50?%;border-bottom:%?1?% solid #f1f1f1}.apply-content .item[data-v-2b42ae40]{width:50%;margin-top:%?20?%}.radius-sm[data-v-2b42ae40]{border-radius:%?16?%}',""]),t.exports=e},"6a21":function(t,e,n){"use strict";var i=n("1363"),o=n.n(i);o.a},"819d":function(t,e,n){"use strict";var i=n("363a"),o=n.n(i);o.a},8687:function(t,e,n){"use strict";n.r(e);var i=n("da4a"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"8ac4":function(t,e,n){"use strict";n.r(e);var i=n("90b0"),o=n("8687");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("38d8");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"58c15546",null,!1,i["a"],void 0);e["default"]=s.exports},"8ddd":function(t,e,n){var i=n("0af8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("7ec25f10",i,!0,{sourceMap:!1,shadowMode:!1})},"90b0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar bg-white  solid-bottom",staticStyle:{"justify-content":"space-around"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeListType(0)}}},[n("v-uni-text",{staticClass:"text-blue",class:{"cuIcon-roundcheckfill":0==t.currentPage,"cuIcon-roundcheck":1==t.currentPage}}),t._v("待办")],1),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeListType(1)}}},[n("v-uni-text",{staticClass:"text-blue",class:{"cuIcon-roundcheckfill":1==t.currentPage,"cuIcon-roundcheck":0==t.currentPage}}),t._v("已办")],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.currentPage,expression:"currentPage == 0"}],staticClass:"margin-top"},[n("purchase-apply-audit-undo",{ref:"purchaseApplyAuditUndoRef"})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.currentPage,expression:"currentPage == 1"}],staticClass:"margin-top"},[n("purchase-apply-audit-his",{ref:"purchaseApplyAuditHisRef"})],1)],1)},o=[]},"91e9":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.allocationStoreEnter=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.allocationStoreEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deleteAllocationStorehouse=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.deleteAllocationStorehouse,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.deletePurchaseApply=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.deletePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.getAllocationHisAudit=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listAllocationStoreHisAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouseApplys=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listAllocationStorehouseApplys,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAllocationStorehouses=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listAllocationStorehouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listAuditHistoryOrders=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listItemOutAuditHistoryOrders=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listItemOutAuditHistoryOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAllocationStoreAuditOrders=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listMyAllocationStoreAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyAuditOrders=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listMyItemOutOrders=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listMyItemOutOrders,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listResourceStoreTypes=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listResourceStoreTypes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listStoreHouses=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listStoreHouses,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowAuditInfo=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listWorkflowAuditInfo,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listWorkflowStepStaffs=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listWorkflowStepStaffs,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstAuditStaff=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryFirstAuditStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryFirstStaff=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryFirstStaff,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryMyResourceStoreInfo=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryResourceStoreResName,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryPurchaseApplyList=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryPurchaseApplyList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreAndTimes=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.listResourceStoresAndTimes,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceStoreList=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryResourceStoreList,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryResourceSupplier=function(t,e){return new Promise((function(n,i){t.context.get({url:o.default.queryResourceSupplier,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAllocationStorehouse=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveAllocationStorehouse,data:e,success:function(e){t.onoff=!0,n(e.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveAuditAllocationStoreOrder=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveAuditAllocationStoreOrder,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveItemOutApply=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveItemOutApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveMyAuditOrders=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveMyAuditOrders,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.savePurchaseApply=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.savePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),t.onoff=!0}})}))},e.saveResourceEnter=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveResourceEnter,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceOut=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveResourceOut,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveResourceStoreTransfer=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveResourceStoreTransfer,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveUrgentPurchaseApply=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.saveUrgentPurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updatePurchaseApply=function(t,e){return new Promise((function(n,i){t.context.post({url:o.default.updatePurchaseApply,data:e,success:function(t){n(t.data)},fail:function(e){t.onoff=!0,wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var o=i(n("f3d1"))},9830:function(t,e,n){"use strict";n.r(e);var i=n("fcc9"),o=n("02a7");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6a21");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2b42ae40",null,!1,i["a"],void 0);e["default"]=s.exports},d834:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniLoadMore:n("bf7c").default,noDataPage:n("0437").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.applyList.length>0?n("v-uni-view",[t._l(t.applyList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"bg-white padding-sm margin-sm radius-sm"},[n("v-uni-view",{staticClass:"apply-title flex justify-between"},[n("v-uni-view",[n("v-uni-text",{staticClass:"cuIcon-goods text-cut text-green margin-right-xs"}),n("v-uni-text",{staticClass:"text-bold"},[t._v(t._s(e.applyOrderId))]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v("("+t._s(e.stateName)+")")])],1),n("v-uni-view",{staticClass:"flex justify-start"},[e.createUserId==t.currentUserId?n("v-uni-button",{staticClass:"cu-btn round sm line-black margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._openEditPurchaseModel(e)}}},[t._v("修改")]):t._e(),n("v-uni-button",{staticClass:"cu-btn round sm line-black margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._toApplyDetail(e)}}},[t._v("详情")])],1)],1),n("v-uni-view",{staticClass:"apply-content flex justify-start flex-wrap"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("申请人:")]),n("v-uni-text",[t._v(t._s(e.userName))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("时间:")]),n("v-uni-text",[t._v(t._s(e.createTime))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("联系电话:")]),n("v-uni-text",[t._v(t._s(e.endUserTel))])],1)],1),n("v-uni-view",{staticClass:"apply-btn flex justify-between"},[n("v-uni-view"),n("v-uni-view",{staticClass:"flex justify-start margin-top-sm"},["仓库管理员"==e.curTaskName?n("v-uni-button",{staticClass:"cu-btn round sm line-blue margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._distributionOrder(e)}}},[t._v("采购入库")]):n("v-uni-button",{staticClass:"cu-btn round sm line-blue margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._undoAudit(e)}}},[t._v("审核")])],1)],1)],1)})),n("uni-load-more",{attrs:{status:t.loadingStatus,"content-text":t.loadingContentText,contentText:t.contentText}})],2):n("v-uni-view",[n("no-data-page")],1)],1)},a=[]},da4a:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9830")),a=i(n("48fb")),r={data:function(){return{currentPage:0,communityId:""}},components:{purchaseApplyAuditHis:o.default,purchaseApplyAuditUndo:a.default},onLoad:function(t){var e=this;this.java110Context.onLoad(),setTimeout((function(){e.changeListType(0)}),1e3)},methods:{changeListType:function(t){this.currentPage=t,this.page=1,this.loadingStatus="more",0==t?this.$refs.purchaseApplyAuditUndoRef.loadApply():this.$refs.purchaseApplyAuditHisRef.loadApplyDone()}}};e.default=r},f17c:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d4b5");i(n("0437"));var o=n("91e9"),a={name:"purchaseApplyAuditUndo",data:function(){return{applyList:[],loadingStatus:"",page:1,currentUserId:"",loadingContentText:"",contentText:{}}},mounted:function(){this.currentUserId=this.getStaffId()},methods:{loadApply:function(){this.loadingStatus="more";var t=this,e={page:1,row:50,communityId:this.getCommunityId()};(0,o.listMyAuditOrders)(this,e).then((function(e){t.applyList=e.data,t.applyList.length!=e.total||(t.loadingStatus="noMore")}))},_openEditPurchaseModel:function(t){uni.navigateTo({url:"/pages/resource/editPurchaseApply?applyOrderId="+t.applyOrderId+"&resOrderType="+t.resOrderType})},_distributionOrder:function(t){uni.navigateTo({url:"/pages/resource/itemEnterDo?applyOrderId="+t.applyOrderId+"&resOrderType="+t.resOrderType+"&taskId="+t.taskId})},_undoAudit:function(t){uni.navigateTo({url:"/pages/audit/undoAudit?business=purchaseApply&id="+t.applyOrderId+"&taskId="+t.taskId+"&startUserId="+t.createUserId+"&flowId="+t.flowId})},_toApplyDetail:function(t){uni.navigateTo({url:"/pages/resource/purchaseApplyDetail?apply="+JSON.stringify(t)})}}};e.default=a},fcc9:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniLoadMore:n("bf7c").default,noDataPage:n("0437").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.applyList.length>0?n("v-uni-view",[t._l(t.applyList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"bg-white margin-bottom padding-sm margin-sm radius-sm"},[n("v-uni-view",{staticClass:"apply-title flex justify-between"},[n("v-uni-view",[n("v-uni-text",{staticClass:"cuIcon-goods text-cut text-green margin-right-xs"}),n("v-uni-text",{staticClass:"text-bold"},[t._v(t._s(e.applyOrderId))]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v("("+t._s(e.stateName)+")")])],1),n("v-uni-view",{staticClass:"flex justify-start"},[n("v-uni-button",{staticClass:"cu-btn round sm line-black margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._toApplyDetail(e)}}},[t._v("详情")])],1)],1),n("v-uni-view",{staticClass:"apply-content flex justify-start flex-wrap"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("申请人:")]),n("v-uni-text",[t._v(t._s(e.userName))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("时间:")]),n("v-uni-text",[t._v(t._s(e.createTime))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v("联系电话:")]),n("v-uni-text",[t._v(t._s(e.endUserTel))])],1)],1)],1)})),n("uni-load-more",{attrs:{status:t.loadingStatus,"content-text":t.loadingContentText}})],2):n("v-uni-view",[n("no-data-page")],1)],1)},a=[]}}]);