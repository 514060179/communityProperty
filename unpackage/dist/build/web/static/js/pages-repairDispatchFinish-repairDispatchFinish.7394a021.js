(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-repairDispatchFinish-repairDispatchFinish"],{"107b":function(t,e,a){"use strict";a.r(e);var i=a("34ca"),n=a("936a");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("828b"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2766353f",null,!1,i["a"],void 0);e["default"]=o.exports},"34ca":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uniLoadMore:a("bcc2").default,noDataPage:a("31c4").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[0==t.noData?a("v-uni-view",[t._l(t.myOrders,(function(e,i){return a("v-uni-view",{key:i,staticClass:"bg-white margin-top margin-right-xs radius margin-left-xs padding"},[a("v-uni-view",{staticClass:"flex padding-bottom-xs solid-bottom justify-between"},[a("v-uni-view",[t._v(t._s(e.repairId))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.tel))])],1),a("v-uni-view",{staticClass:"flex margin-top justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("repair_type")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.repairTypeName))])],1),a("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("reporter")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.repairName))])],1),a("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("location")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.repairObjName))])],1),a("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("appointment_time")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.appointmentTime))])],1),a("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("status")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.stateName))])],1),a("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.$t("repair_content")))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.context))])],1),a("v-uni-view",{staticClass:"solid-top flex justify-end margin-top padding-top-sm "},[a("v-uni-button",{staticClass:"cu-btn sm line-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.repairDetail(e)}}},[t._v(t._s(t.$t("details")))])],1)],1)})),a("uni-load-more",{attrs:{status:t.loadingStatus,"content-text":t.loadingContentText}})],2):a("v-uni-view",[a("no-data-page")],1)],1)},s=[]},"936a":function(t,e,a){"use strict";a.r(e);var i=a("9e01"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"9e01":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("bf0f"),a("2797"),a("5c47"),a("a1c1"),a("c223");var n=i(a("31c4")),s=i(a("bcc2")),r=i(a("f0de")),o=a("2d9e"),u={data:function(){var t=this,e=function(e){return t.$t(e)};return{orderImg:r.default.baseUrl+"img/order.png",myOrders:[],orders:[],storeId:"",noData:!1,page:1,loadingStatus:"loading",loadingContentText:{contentdown:e("pull_up_to_load_more"),contentrefresh:e("loading"),contentnomore:e("no_more")}}},components:{noDataPage:n.default,uniLoadMore:s.default},onLoad:function(){this.java110Context.onLoad();var t=this.java110Context.getUserInfo(),e=t.storeId;this.storeId=e,this._loadMyModify()},onReachBottom:function(){"noMore"!=this.loadingStatus&&this._loadMyModify()},methods:{_loadMyModify:function(){this.loadingStatus="more";var t=this,e=this.java110Context.getUserInfo(),a=(e.storeId,{page:this.page,row:15,userId:e.userId,communityId:(0,o.getCurrentCommunity)().communityId});this.java110Context.request({url:r.default.listStaffFinishRepairs,header:t.java110Context.getHeaders(),method:"GET",data:a,success:function(e){var a=e.data;if(0==a.code){var i=a.data;i.forEach((function(t){var e=t.appointmentTime,a=new Date(e.replace(/-/g,"/"));t.appointmentTime=a.getMonth()+1+"-"+a.getDate()})),t.myOrders=t.myOrders.concat(i),t.page++,t.myOrders.length<1?t.noData=!0:t.myOrders.length!=a.total||(t.loadingStatus="noMore")}else uni.showToast({icon:"none",title:a.msg})},fail:function(e){wx.showToast({title:t.$t("server_error"),icon:"none",duration:2e3})}},0==this.myOrders.length)},repairDetail:function(t){console.log("_item",t),uni.navigateTo({url:"/pages/repairDetail/repairDetail?repairId="+t.repairId+"&storeId="+this.storeId})}}};e.default=u}}]);