(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-itemRelease-itemRelease"],{"69b3":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},[a("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(1)}}},[t._v("待办")]),a("v-uni-view",{staticClass:"cu-item flex-sub",class:2==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(2)}}},[t._v("已办")])],1)],1),1==t.active?a("v-uni-view",[a("v-uni-view",{staticClass:"cu-list menu-avatar margin-top"},t._l(t.oaWorkflowFlows,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t._todoUndo(e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{left:"10upx"}},[a("v-uni-view",{staticClass:"text-grey"},[a("v-uni-text",{staticClass:"ellip"},[t._v(t._s(e.typeName)+"-"+t._s(e.stateName))])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-view",{staticClass:"text-cut"},[t._v("通行时间："+t._s(e.passTime))])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(e.amount)+"个"),a("v-uni-text",{staticClass:"lg text-gray cuIcon-right margin-left-xs"})],1)],1)],1)})),1)],1):t._e(),2==t.active?a("v-uni-view",[a("v-uni-view",{staticClass:"cu-list menu-avatar margin-top"},t._l(t.oaWorkflowFlows,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t._todoFinish(e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{left:"10upx"}},[a("v-uni-view",{staticClass:"text-grey"},[a("v-uni-text",{staticClass:"ellip"},[t._v(t._s(e.typeName)+"-"+t._s(e.stateName))])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-view",{staticClass:"text-cut"},[t._v("通行时间："+t._s(e.passTime))])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(e.amount)+"个"),a("v-uni-text",{staticClass:"lg text-gray cuIcon-right margin-left-xs"})],1)],1)],1)})),1)],1):t._e()],1)},i=[]},"801e":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("a947"),i={data:function(){return{active:1,oaWorkflowFlows:[]}},onLoad:function(){this.java110Context.onLoad(),this.tabSelect(1)},methods:{tabSelect:function(t){this.active=t,this._queryOaWorkFlow(t)},_queryOaWorkFlow:function(t){var e=this;1==t?(0,n.queryUndoItemRelease)(this,{page:1,row:100},0==this.oaWorkflowFlows.length).then((function(t){e.oaWorkflowFlows=t.data})):(0,n.queryFinishItemRelease)(this,{page:1,row:100},0==this.oaWorkflowFlows.length).then((function(t){e.oaWorkflowFlows=t.data}))},_todoUndo:function(t){uni.navigateTo({url:"/pages/itemRelease/itemReleaseDetail?irId="+t.irId+"&flowId="+t.flowId+"&action=Audit&taskId="+t.taskId})},_todoFinish:function(t){uni.navigateTo({url:"/pages/itemRelease/itemReleaseDetail?irId="+t.irId+"&flowId="+t.flowId})}}};e.default=i},a947:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.auditUndoItemRelease=function(t,e,a){return new Promise((function(n,s){t.context.post({url:i.default.auditUndoItemRelease,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},a)}))},e.getItemRelease=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.listItemRelease,data:e,success:function(t){if(0!=t.data.code)s("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){s(t)}},a)}))},e.getItemReleaseRes=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.listItemReleaseRes,data:e,success:function(t){if(0!=t.data.code)s("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){s(t)}},a)}))},e.queryFinishItemRelease=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.queryFinishItemRelease,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},a)}))},e.queryNextDealUser=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.queryNextDealUser,data:e,success:function(t){if(0!=t.data.code)s("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){s(t)}},a)}))},e.queryOaWorkflowUser=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.queryOaWorkflowUser,data:e,success:function(t){if(0!=t.data.code)s("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){s(t)}},a)}))},e.queryUndoItemRelease=function(t,e,a){return new Promise((function(n,s){t.context.get({url:i.default.queryUndoItemRelease,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},a)}))},a("bf0f");var i=n(a("f0de"));a("9e36")},b266:function(t,e,a){"use strict";a.r(e);var n=a("69b3"),i=a("bb0e");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var o=a("828b"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"f55e15ea",null,!1,n["a"],void 0);e["default"]=u.exports},bb0e:function(t,e,a){"use strict";a.r(e);var n=a("801e"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a}}]);