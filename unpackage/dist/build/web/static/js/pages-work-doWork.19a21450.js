(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-doWork"],{3155:function(t,e,n){"use strict";n.r(e);var i=n("68f4"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"31c4":function(t,e,n){"use strict";n.r(e);var i=n("fb40"),o=n("d0ee");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("50d9");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"1debd5f0",null,!1,i["a"],void 0);e["default"]=s.exports},"39b8":function(t,e,n){"use strict";n.r(e);var i=n("8120"),o=n("3155");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("79ba");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e0c7b4d6",null,!1,i["a"],void 0);e["default"]=s.exports},"4e73":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"NoDataPage",data:function(){return{}},methods:{}}},"50d9":function(t,e,n){"use strict";var i=n("8c52"),o=n.n(i);o.a},"68f4":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("31c4"));var o=n("a156"),a=n("638b"),r={data:function(){return{workNameLike:"",staffNameLike:"",works:[],staffId:"",active:0}},computed:{},onLoad:function(){this.staffId=(0,a.getStaffId)()},onShow:function(){this._loadWork()},created:function(){},methods:{_loadWork:function(){var t=this,e="W";1==this.active&&(e="C"),(0,o.getTaskWork)(this,{page:1,row:100,state:e,workNameLike:this.workNameLike,staffNameLike:this.staffNameLike},0==this.works.length).then((function(e){t.works=e.data}))},_toWorkDetail:function(t){uni.navigateTo({url:"/pages/work/workDetail?workId="+t.workId+"&taskId="+t.taskId})},tabSelect:function(t){this.active=t;this.works=[],this._loadWork()},_loadStartWork:function(){this._loadWork()},_todoWorkTask:function(t){uni.navigateTo({url:"/pages/work/doWorkAudit?workId="+t.workId+"&taskId="+t.taskId})}}};e.default=r},"79ba":function(t,e,n){"use strict";var i=n("fc8b"),o=n.n(i);o.a},8120:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={noDataPage:n("31c4").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[n("v-uni-view",{staticClass:"flex text-center"},[n("v-uni-view",{staticClass:"cu-item flex-sub",class:0==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(0)}}},[t._v(t._s(t.$t("pending")))]),n("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.active?"text-blue cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(1)}}},[t._v(t._s(t.$t("processed")))])],1)],1),n("v-uni-view",{staticClass:"q-query flex justify-start flex-wrap margin-top-sm"},[n("v-uni-view",{staticClass:"q-item"},[n("v-uni-input",{staticClass:"q-input",attrs:{type:"text",placeholder:t.$t("title")},model:{value:t.workNameLike,callback:function(e){t.workNameLike=e},expression:"workNameLike"}})],1),n("v-uni-view",{staticClass:"q-item"},[n("v-uni-input",{staticClass:"q-input",attrs:{type:"text",placeholder:t.$t("processor")},model:{value:t.staffNameLike,callback:function(e){t.staffNameLike=e},expression:"staffNameLike"}})],1),n("v-uni-view",{staticClass:"q-item-btn"},[n("v-uni-button",{staticClass:"cu-btn  line-blue round q-input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._loadStartWork.apply(void 0,arguments)}}},[t._v(t._s(t.$t("search")))])],1)],1),t.works.length>0?n("v-uni-view",{staticClass:"margin-top"},t._l(t.works,(function(e,i){return n("v-uni-view",{key:i,staticClass:"bg-white margin-bottom padding-sm margin-sm radius-sm"},[n("v-uni-view",{staticClass:"apply-title flex justify-between"},[n("v-uni-view",[n("v-uni-text",{staticClass:"text-bold"},[t._v(t._s(e.workId)+"("+t._s(e.stateName)+")")])],1),n("v-uni-view",{staticClass:"flex justify-start"},["W"==e.state?n("v-uni-button",{staticClass:"cu-btn round sm line-black margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._todoWorkTask(e)}}},[t._v(t._s(t.$t("handlse")))]):t._e(),n("v-uni-button",{staticClass:"cu-btn round sm line-black margin-left-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._toWorkDetail(e)}}},[t._v(t._s(t.$t("btn_details")))])],1)],1),n("v-uni-view",{staticClass:"apply-content flex justify-start flex-wrap"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v(t._s(t.$t("title"))+":")]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v(t._s(e.workName))])],1),n("v-uni-view",{staticClass:"item-half"},[n("v-uni-text",[t._v(t._s(t.$t("identifier"))+":")]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v(t._s("1001"==e.workCycle?t.$t("one_time_work_order"):t.$t("periodic_work_order")))])],1),n("v-uni-view",{staticClass:"item-half"},[n("v-uni-text",[t._v(t._s(t.$t("processor"))+":")]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v(t._s(e.curStaffName||"-"))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v(t._s(t.$t("creation_time"))+":")]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v(t._s(e.createTime))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v(t._s(t.$t("validity_period"))+":")]),n("v-uni-text",{staticClass:"margin-left-sm"},[t._v(t._s(e.startTime)+"~"+t._s(e.endTime))])],1)],1)],1)})),1):n("v-uni-view",[n("no-data-page")],1)],1)},a=[]},"8c52":function(t,e,n){var i=n("f0e3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("d1c1e302",i,!0,{sourceMap:!1,shadowMode:!1})},9619:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.q-query[data-v-e0c7b4d6]{background-color:#fff;padding:%?15?%}.q-query .q-item[data-v-e0c7b4d6]{width:30%;margin-right:%?15?%;padding:%?10?% %?15?%;border-radius:%?15?%;background-color:#f1f1f1}.q-query .q-item .q-input[data-v-e0c7b4d6]{height:%?40?%}.q-query .q-item-btn[data-v-e0c7b4d6]{width:30%;margin-left:%?15?%}.q-query .q-item-btn .q-input[data-v-e0c7b4d6]{height:%?60?%}.apply-title[data-v-e0c7b4d6]{height:%?60?%;line-height:%?50?%;border-bottom:%?1?% solid #f1f1f1}.apply-content .item-half[data-v-e0c7b4d6]{width:50%;margin-top:%?20?%}.apply-content .item[data-v-e0c7b4d6]{width:100%;margin-top:%?20?%}.radius-sm[data-v-e0c7b4d6]{border-radius:%?16?%}',""]),t.exports=e},a156:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.deleteWorkPool=function(t,e,n){return new Promise((function(i,a){uni.showLoading({title:"提交中..."}),t.context.post({url:o.default.deleteWorkPool,data:e,success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg}),0!=t.data.code||i(t.data)},fail:function(t){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.finishWorkCopy=function(t,e,n){return new Promise((function(i,a){uni.showLoading({title:"提交中..."}),t.context.post({url:o.default.finishWorkCopy,data:e,success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg}),0!=t.data.code||i(t.data)},fail:function(t){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.finishWorkTask=function(t,e,n){return new Promise((function(i,a){uni.showLoading({title:"提交中..."}),t.context.post({url:o.default.finishWorkTask,data:e,success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg}),0!=t.data.code||i(t.data)},fail:function(t){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getCopyWork=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.queryCopyWork,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getTaskWork=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.queryTaskWork,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkCopy=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkCopy,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkCycle=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkCycle,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkEvent=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkEvent,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkPool=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkPool,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkPoolFile=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkPoolFile,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.getWorkTask=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkTask,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryStartWork=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.queryStartWork,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryWorkType=function(t,e,n){return new Promise((function(i,a){t.context.get({url:o.default.listWorkType,data:e,success:function(t){0==t.data.code?i(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.saveWorkPool=function(t,e,n){return new Promise((function(i,a){uni.showLoading({title:"提交中..."}),t.context.post({url:o.default.saveWorkPool,data:e,success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg}),0!=t.data.code||i(t.data)},fail:function(t){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.updateWorkPool=function(t,e,n){return new Promise((function(i,a){uni.showLoading({title:"提交中..."}),t.context.post({url:o.default.updateWorkPool,data:e,success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg}),0!=t.data.code||i(t.data)},fail:function(t){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},n("bf0f");var o=i(n("f0de"))},d0ee:function(t,e,n){"use strict";n.r(e);var i=n("4e73"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f0e3:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".no-data-icon[data-v-1debd5f0]{font-size:%?200?%}.margin-top-100[data-v-1debd5f0]{margin-top:%?200?%}",""]),t.exports=e},fb40:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:" text-center margin-top-100"},[e("v-uni-view",{},[e("v-uni-text",{staticClass:" cuIcon-warnfill light text-orange no-data-icon"})],1),e("v-uni-view",{},[e("v-uni-text",{staticClass:"text-gray"},[this._v(this._s(this.$t("no_data")))])],1)],1)],1)},o=[]},fc8b:function(t,e,n){var i=n("9619");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("59f12221",i,!0,{sourceMap:!1,shadowMode:!1})}}]);