(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-oaWorkflow-oaWorkflow"],{"0446":function(t,e,o){var n=o("242a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("967d").default;a("0bce8505",n,!0,{sourceMap:!1,shadowMode:!1})},"0b54":function(t,e,o){"use strict";o.r(e);var n=o("2c6d"),a=o("4b37");for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("16ed");var r=o("828b"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5daf515a",null,!1,n["a"],void 0);e["default"]=u.exports},"16ed":function(t,e,o){"use strict";var n=o("0446"),a=o.n(n);a.a},"242a":function(t,e,o){var n=o("c86c");e=n(!1),e.push([t.i,".user-container[data-v-5daf515a]{padding:%?25?% %?10?%;background-color:#f0f0f0\n\n\t/*border: 1px solid black;*/}.notice[data-v-5daf515a]{margin:%?10?% %?7?%;padding:%?25?%;background-color:#fff;border-radius:%?7?%\n    /* display: flex;\n    justify-content: space-between;\n    align-items: flex-end; */}.title[data-v-5daf515a]{border-bottom:%?1?% solid #dedede;font-weight:700;font-size:%?34?%;color:#5f5e5e;display:flex;justify-content:space-between}.text[data-v-5daf515a]{padding:%?4?% 0;font-size:%?30?%}.main[data-v-5daf515a]{\n  /* display: flex;\n  justify-content: space-between;\n  align-items: flex-end; */position:relative}.main_right[data-v-5daf515a]{position:absolute;right:0;bottom:0}.button[data-v-5daf515a]{margin-right:10px}",""]),t.exports=e},"2c6d":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var n={noDataPage:o("31c4").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[o("v-uni-view",{staticClass:"flex text-center"},[o("v-uni-view",{staticClass:"cu-item flex-sub",class:0==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(0)}}},[t._v(t._s(t.$t("起草")))]),o("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(1)}}},[t._v(t._s(t.$t("待办")))]),o("v-uni-view",{staticClass:"cu-item flex-sub",class:2==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(2)}}},[t._v(t._s(t.$t("已办")))])],1)],1),0==t.active?o("v-uni-view",[t.oaWorkflowFlows.length?[o("v-uni-view",{staticClass:"cu-list grid margin-top",class:"col-2"},t._l(t.oaWorkflowFlows,(function(e,n){return o("v-uni-view",{key:n,staticClass:"cu-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.todoOaWorkflow(e)}}},[o("v-uni-view",{class:["cuIcon-form","text-blue"]}),o("v-uni-text",[t._v(t._s(e.flowName))])],1)})),1)]:[o("no-data-page")]],2):t._e(),1==t.active?o("v-uni-view",[t.oaWorkflowFlows.length?[o("v-uni-view",{staticClass:"cu-list grid margin-top",class:"col-2"},t._l(t.oaWorkflowFlows,(function(e,n){return o("v-uni-view",{key:n,staticClass:"cu-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.todoOaWorkflow(e)}}},[o("v-uni-view",{class:["cuIcon-form","text-red"]},[o("v-uni-view",{staticClass:"cu-tag badge"},[[t._v(t._s(e.undoCount>99?"99+":e.undoCount))]],2)],1),o("v-uni-text",[t._v(t._s(e.flowName))])],1)})),1)]:[o("no-data-page")]],2):t._e(),2==t.active?o("v-uni-view",[t.oaWorkflowFlows.length?[o("v-uni-view",{staticClass:"cu-list grid margin-top",class:"col-2"},t._l(t.oaWorkflowFlows,(function(e,n){return o("v-uni-view",{key:n,staticClass:"cu-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.todoOaWorkflow(e)}}},[o("v-uni-view",{class:["cuIcon-form","text-blue"]}),o("v-uni-text",[t._v(t._s(e.flowName))])],1)})),1)]:[o("no-data-page")]],2):t._e()],1)},i=[]},"2e2a":function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("d07c"),a={data:function(){return{TabCur:0,scrollLeft:0,active:0,ownerId:"",communityId:"",page:1,totalPage:0,loading:!1,noData:!1,userId:"",oaWorkflowFlows:[]}},onLoad:function(t){this.java110Context.onLoad(),this.tabSelect(0),this._queryOaWorkFlow()},onShow:function(){},onPullDownRefresh:function(){},methods:{tabSelect:function(t){this.active=t},_queryOaWorkFlow:function(){var t=this;(0,n.queryOaWorkflow)(this,{page:1,row:100,state:"C",flowType:"1001"},0==this.oaWorkflowFlows.length).then((function(e){t.oaWorkflowFlows=e.data}))},todoOaWorkflow:function(t){0==this.active?this.context.navigateTo({url:"/pages/newOaWorkflowForm/newOaWorkflowForm?flowId="+t.flowId+"&flowName="+t.flowName}):2==this.active?this.context.navigateTo({url:"/pages/newOaWorkflowFinish/newOaWorkflowFinish?flowId="+t.flowId+"&flowName="+t.flowName}):this.context.navigateTo({url:"/pages/newOaWorkflowUndo/newOaWorkflowUndo?flowId="+t.flowId+"&flowName="+t.flowName})}}};e.default=a},"31c4":function(t,e,o){"use strict";o.r(e);var n=o("fb40"),a=o("d0ee");for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("50d9");var r=o("828b"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1debd5f0",null,!1,n["a"],void 0);e["default"]=u.exports},"4b37":function(t,e,o){"use strict";o.r(e);var n=o("2e2a"),a=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"4e73":function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"NoDataPage",data:function(){return{}},methods:{}}},"50d9":function(t,e,o){"use strict";var n=o("8c52"),a=o.n(n);a.a},"8c52":function(t,e,o){var n=o("f0e3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("967d").default;a("d1c1e302",n,!0,{sourceMap:!1,shadowMode:!1})},d07c:function(t,e,o){"use strict";o("6a54");var n=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.auditOaWorkflow=function(t,e,o){return new Promise((function(n,i){t.context.post({url:a.default.auditOaWorkflow,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.auditUndo=function(t,e,o,n){return new Promise((function(a,i){t.context.post({url:e,data:o,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getNextTask=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.getNextTask,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.listRunWorkflowImage=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.listRunWorkflowImage,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryNextDealUser=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryNextDealUser,data:e,success:function(t){if(0!=t.data.code)i("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){i(t)}},o)}))},e.queryOaWorkflow=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflow,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryOaWorkflowForm=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflowForm,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryOaWorkflowFormData=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflowFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryOaWorkflowUser=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflowUser,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryOaWorkflowUserHisTaskFormData=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflowUserHisTaskFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryOaWorkflowUserTaskFormData=function(t,e,o){return new Promise((function(n,i){t.context.get({url:a.default.queryOaWorkflowUserTaskFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.saveOaWorkflowFormData=function(t,e,o){return new Promise((function(n,i){t.context.post({url:a.default.saveOaWorkflowFormData,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.updateOaWorkflowFormData=function(t,e,o){return new Promise((function(n,i){t.context.post({url:a.default.updateOaWorkflowFormData,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},o("bf0f");var a=n(o("f0de"))},d0ee:function(t,e,o){"use strict";o.r(e);var n=o("4e73"),a=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},f0e3:function(t,e,o){var n=o("c86c");e=n(!1),e.push([t.i,".no-data-icon[data-v-1debd5f0]{font-size:%?200?%}.margin-top-100[data-v-1debd5f0]{margin-top:%?200?%}",""]),t.exports=e},fb40:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:" text-center margin-top-100"},[e("v-uni-view",{},[e("v-uni-text",{staticClass:" cuIcon-warnfill light text-orange no-data-icon"})],1),e("v-uni-view",{},[e("v-uni-text",{staticClass:"text-gray"},[this._v(this._s(this.$t("no_data")))])],1)],1)],1)},a=[]}}]);