(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-maintainance-maintainance"],{"0437":function(t,a,n){"use strict";n.r(a);var e=n("d3e6"),i=n("bd3e");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);n("9895");var o=n("828b"),u=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"1debd5f0",null,!1,e["a"],void 0);a["default"]=u.exports},1700:function(t,a,n){var e=n("c86c");a=e(!1),a.push([t.i,".solid-bottom[data-v-baa24ab0]::after{border-bottom:%?2?% solid rgba(0,0,0,.1)}.solid-top[data-v-baa24ab0]::after{border-top:%?2?% solid rgba(0,0,0,.1)}.block__title[data-v-baa24ab0]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}",""]),t.exports=a},"3b67":function(t,a,n){"use strict";n.r(a);var e=n("ceed"),i=n("71af");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);n("5978");var o=n("828b"),u=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"baa24ab0",null,!1,e["a"],void 0);a["default"]=u.exports},"51f2":function(t,a,n){"use strict";n("6a54");var e=n("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("5c47"),n("a1c1"),n("d4b5");var i=e(n("0437")),s=e(n("ecef")),o=n("dae2"),u=(e(n("f3d1")),n("7ecf")),r={data:function(){return{tasks:[],communityId:"",userId:"",userName:"",noData:!1}},components:{noDataPage:i.default},onLoad:function(){this.java110Context.onLoad(),this.communityId=(0,o.getCurrentCommunity)().communityId;var t=this.java110Context.getUserInfo();this.userName=t.userName,this.userId=t.userId,this._queryMaintainanceTasks()},onShow:function(){this.userId&&this.communityId&&this._queryMaintainanceTasks()},methods:{_startMaintainance:function(t){s.default.compareDate(t.planInsTime.replace(/-/g,"/"),s.default.getCurrentDateTime().replace(/-/g,"/"))?uni.showToast({title:"尚未开始",icon:"none"}):(console.log("开始保养",t),uni.navigateTo({url:"/pages/maintainance/excuteMaintainance?taskId="+t.taskId+"&planName="+t.planName}))},_queryMaintainanceTasks:function(){var t=this;(0,u.queryMaintainanceTask)(this,{communityId:t.communityId,page:1,row:10,planUserId:t.userId,moreState:"20200405,20200406"}).then((function(a){t.tasks=a,t.tasks.length<1&&(t.noData=!0)}))},_transferMaintainance:function(t){uni.navigateTo({url:"/pages/maintainance/maintainanceTransfer?task="+JSON.stringify(t)})},_torReexamineMaintainance:function(){uni.navigateTo({url:"/pages/maintainanceReexamine/maintainanceReexamine"})}}};a.default=r},5978:function(t,a,n){"use strict";var e=n("dd2d"),i=n.n(e);i.a},"71af":function(t,a,n){"use strict";n.r(a);var e=n("51f2"),i=n.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);a["default"]=i.a},"7ecf":function(t,a,n){"use strict";n("6a54");var e=n("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.UpdateMaintainanceTask=function(t,a){return new Promise((function(n,e){t.context.post({url:i.default.UpdateMaintainanceTask,data:a,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},a.queryDictInfo=function(t,a){return new Promise((function(n,e){t.context.get({url:i.default.queryDictInfo,data:a,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},a.queryMaintainanceItemTitle=function(t,a){return new Promise((function(n,e){t.context.get({url:i.default.listMaintainanceItem,data:a,success:function(t){var a=t.data;0!=a.code?e(a.msg):n(a.data)},fail:function(t){e(t)}})}))},a.queryMaintainanceTask=function(t,a){return new Promise((function(n,e){t.context.get({url:i.default.listMaintainanceTask,data:a,success:function(t){var a=t.data;if(0==a.code)return t.data.data.forEach((function(t,a){t.timeStr=t.planInsTime.replace(/:\d{1,2}$/," ")})),void n(t.data.data);e(a.msg)},fail:function(t){e(t)}})}))},a.queryMaintainanceTaskDetail=function(t,a){return new Promise((function(n,e){t.context.get({url:i.default.listMaintainanceTaskDetail,data:a,success:function(t){var a=t.data;if(0==a.code)return a.data.forEach((function(t){})),void n(a.data);e(a.msg)},fail:function(t){e(t)}})}))},a.updateMaintainanceTaskDetail=function(t,a){var n="";""==a.taskId?n="数据异常，保养任务为空":""==a.taskDetailId?n="数据异常，保养任务详情为空":""==a.machineId?n="设备不能为空":""==a.machineName?n="设备名称不能为空":""==a.patrolType?n="保养情况不能为空":""==a.description?n="保养说明不能为空":""==a.userId?n="数据异常，保养人为空":a.photos.length<=0&&(n="请上传保养图片");if(""!=n)return void wx.showToast({title:n,icon:"none",duration:2e3});return uni.showLoading({title:"请稍后..."}),new Promise((function(n,e){t.context.post({url:i.default.updateMaintainanceTaskDetail,data:a,success:function(t){n(t.data),uni.hideLoading()},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),uni.hideLoading()}})}))},n("bf0f"),n("2797"),n("5c47"),n("a1c1"),n("01a2"),n("e39c");var i=e(n("f3d1"))},9895:function(t,a,n){"use strict";var e=n("c5d4"),i=n.n(e);i.a},b412:function(t,a,n){var e=n("c86c");a=e(!1),a.push([t.i,".no-data-icon[data-v-1debd5f0]{font-size:%?200?%}.margin-top-100[data-v-1debd5f0]{margin-top:%?200?%}",""]),t.exports=a},b8a5:function(t,a,n){"use strict";n("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={name:"NoDataPage",data:function(){return{}},methods:{}}},bd3e:function(t,a,n){"use strict";n.r(a);var e=n("b8a5"),i=n.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);a["default"]=i.a},c5d4:function(t,a,n){var e=n("b412");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("967d").default;i("f9659b5c",e,!0,{sourceMap:!1,shadowMode:!1})},ceed:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return e}));var e={noDataPage:n("0437").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"block__title"},[t._v("保养任务")]),0==t.noData?n("v-uni-view",t._l(t.tasks,(function(a,e){return n("v-uni-view",{key:e,staticClass:"bg-white margin-bottom margin-right-xs radius margin-left-xs padding-top padding-left padding-right"},[n("v-uni-view",{staticClass:"flex padding-bottom-xs solid-bottom justify-between"},[n("v-uni-view",[t._v(t._s(a.taskId))]),n("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(a.stateName))])],1),n("v-uni-view",{staticClass:"flex margin-top justify-between"},[n("v-uni-view",{staticClass:"text-gray"},[t._v("保养计划")]),n("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(a.planName))])],1),n("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[n("v-uni-view",{staticClass:"text-gray"},[t._v("计划编码")]),n("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(a.planId))])],1),n("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[n("v-uni-view",{staticClass:"text-gray"},[t._v("保养人")]),n("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(a.planUserName))])],1),n("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[n("v-uni-view",{staticClass:"text-gray"},[t._v("保养时间")]),n("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(a.planInsTime))])],1),n("v-uni-view",{staticClass:"solid-top flex justify-end margin-top padding-top-sm padding-bottom-sm"},[n("v-uni-button",{staticClass:"cu-btn sm bg-blue margin-left",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._transferMaintainance(a)}}},[t._v("流转")]),n("v-uni-button",{staticClass:"cu-btn sm bg-green margin-left",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._startMaintainance(a)}}},[t._v("去保养")])],1)],1)})),1):n("v-uni-view",[n("no-data-page")],1)],1)},s=[]},d3e6:function(t,a,n){"use strict";n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){}));var e=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:" text-center margin-top-100"},[a("v-uni-view",{},[a("v-uni-text",{staticClass:" cuIcon-warnfill light text-orange no-data-icon"})],1),a("v-uni-view",{},[a("v-uni-text",{staticClass:"text-gray"},[this._v(this._s(this.$t("no_data")))])],1)],1)],1)},i=[]},dd2d:function(t,a,n){var e=n("1700");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("967d").default;i("11fb0184",e,!0,{sourceMap:!1,shadowMode:!1})}}]);