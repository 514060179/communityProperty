(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newOaWorkflowUndo-newOaWorkflowUndo"],{"01ba":function(t,e,n){"use strict";n.r(e);var o=n("6b41"),a=n("119d");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("e454");var i=n("828b"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"75fe5c8d",null,!1,o["a"],void 0);e["default"]=s.exports},"119d":function(t,e,n){"use strict";n.r(e);var o=n("333a"),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"333a":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("d07c"),a={data:function(){return{communityId:"",undos:[],currPageIndex:0,pageSize:10,flowId:"",flowName:""}},onLoad:function(t){this.java110Context.onLoad(),this.flowId=t.flowId,this.flowName=t.flowName},onShow:function(){this._loadUndoOaWorkflow()},methods:{_loadUndoOaWorkflow:function(){var t=this;(0,o.queryOaWorkflowUserTaskFormData)(this,{page:1,row:100,flowId:this.flowId},0==this.undos.length).then((function(e){t.undos=e.data}))},gotoDetail:function(t){this.context.navigateTo({url:"/pages/newOaWorkflowDetail/newOaWorkflowDetail?flowId="+this.flowId+"&id="+t.id+"&action=Audit&taskId="+t.taskId})},_getNewOaWorkflowUndoState:function(t){switch(t.hasOwnProperty("state")||this.$t("未知"),t.state){case"1001":return this.$t("申请");case"1002":return this.$t("待审核");case"1003":return this.$t("退回");case"1004":return this.$t("委托");case"1005":return this.$t("办结")}return this.$t("未知")}}};e.default=a},"5efc":function(t,e,n){var o=n("e10a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("967d").default;a("47d2c240",o,!0,{sourceMap:!1,shadowMode:!1})},"6b41":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user-container margin-top"},[t.undos.length>0?t._l(t.undos,(function(e,o){return n("v-uni-view",{key:o,staticClass:"cu-list menu",attrs:{"data-item":e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoDetail(e)}}},[n("v-uni-view",{staticClass:"cu-item arrow"},[n("v-uni-view",{staticClass:"content padding-tb-sm"},[n("v-uni-view",[n("v-uni-text",{staticClass:"cuIcon-notification text-cut text-blue margin-right-xs"}),n("v-uni-view",{staticClass:"text-cut",staticStyle:{width:"220px"}},[t._v(t._s(e.create_user_name)+t._s(t.$t("申请的"))+t._s(t.flowName)+t._s(t.$t("单")))])],1),n("v-uni-view",{staticClass:"text-gray text-sm"},[n("v-uni-text",{staticClass:"margin-right-xs"},[t._v(t._s(t.$t("申请时间"))+"：")]),t._v(t._s(e.create_time))],1)],1),n("v-uni-view",{staticClass:"action"},[t._v(t._s(t._getNewOaWorkflowUndoState(e)))])],1)],1)})):n("v-uni-view",{staticClass:"cu-list menu"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-notification text-grey"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("暂无数据")))])],1),n("v-uni-view",{staticClass:"action"})],1)],1)],2)},a=[]},d07c:function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.auditOaWorkflow=function(t,e,n){return new Promise((function(o,r){t.context.post({url:a.default.auditOaWorkflow,data:e,success:function(t){o(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.auditUndo=function(t,e,n,o){return new Promise((function(a,r){t.context.post({url:e,data:n,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.getNextTask=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.getNextTask,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.listRunWorkflowImage=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.listRunWorkflowImage,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryNextDealUser=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryNextDealUser,data:e,success:function(t){if(0!=t.data.code)r("未包含数据");else{var e=t.data.data;o(e)}},fail:function(t){r(t)}},n)}))},e.queryOaWorkflow=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflow,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryOaWorkflowForm=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflowForm,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryOaWorkflowFormData=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflowFormData,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryOaWorkflowUser=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflowUser,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryOaWorkflowUserHisTaskFormData=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflowUserHisTaskFormData,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryOaWorkflowUserTaskFormData=function(t,e,n){return new Promise((function(o,r){t.context.get({url:a.default.queryOaWorkflowUserTaskFormData,data:e,success:function(t){0==t.data.code?o(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveOaWorkflowFormData=function(t,e,n){return new Promise((function(o,r){t.context.post({url:a.default.saveOaWorkflowFormData,data:e,success:function(t){o(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.updateOaWorkflowFormData=function(t,e,n){return new Promise((function(o,r){t.context.post({url:a.default.updateOaWorkflowFormData,data:e,success:function(t){o(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},n("bf0f");var a=o(n("f0de"))},e10a:function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".cu-list+.cu-list[data-v-75fe5c8d]{margin-top:10px}",""]),t.exports=e},e454:function(t,e,n){"use strict";var o=n("5efc"),a=n.n(o);a.a}}]);