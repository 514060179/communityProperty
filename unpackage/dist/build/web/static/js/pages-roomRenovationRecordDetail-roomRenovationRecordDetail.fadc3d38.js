(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-roomRenovationRecordDetail-roomRenovationRecordDetail"],{"0cb1":function(t,e,o){"use strict";o("6a54");var n=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("bf0f"),o("2797"),o("aa9c");var i=o("2bde"),r=n(o("0c9b")),a={data:function(){return{recordInfo:{},recordList:[],imgRecordList:[],videoRecordList:[],commonBaseUrl:""}},components:{},props:{},onLoad:function(t){this.java110Context.onLoad();this.recordInfo=JSON.parse(t.apply),this.commonBaseUrl=r.default.commonBaseUrl,this.loadRecordDetail()},onReady:function(){},onShow:function(){},methods:{loadRecordDetail:function(){var t=this,e={page:1,row:10,communityId:this.recordInfo.communityId,recordId:this.recordInfo.recordId,roomName:this.recordInfo.roomName,roomId:this.recordInfo.roomId};(0,i.queryRoomRenovationRecordDetail)(this,e,0==this.recordList.length).then((function(e){t.recordList=e,e.forEach((function(e){19e3==e.relTypeCd?t.imgRecordList.push(e):21e3==e.relTypeCd&&t.videoRecordList.push(e)}))}))},preview:function(t){var e=t.target.dataset.index,o=[];this.imgRecordList.forEach((function(t){o.push(t.url)})),uni.previewImage({current:e,urls:o})},deleteRecord:function(){var t=this;uni.showModal({title:"提示",content:this.$t("confirm_delete"),success:function(e){e.confirm&&(0,i.deleteRoomRenovationRecord)(t,t.recordInfo,!0).then((function(t){uni.navigateBack({delta:1})}))}})}}};e.default=a},"26eb":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"cu-list menu margin-top"},[o("v-uni-view",{staticClass:"cu-item"},[o("v-uni-view",{staticClass:"content"},[o("v-uni-text",{staticClass:"cuIcon-deletefill text-blue"}),o("v-uni-text",{staticClass:"text-grey"},[t._v("操作")])],1),o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteRecord()}}},[t._v("删除")])],1)],1),o("v-uni-view",{staticClass:"cu-item"},[o("v-uni-view",{staticClass:"content"},[o("v-uni-text",{staticClass:"cuIcon-time text-blue"}),o("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("application_room")))])],1),o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.recordInfo.roomName))])],1)],1),o("v-uni-view",{staticClass:"cu-item"},[o("v-uni-view",{staticClass:"content"},[o("v-uni-text",{staticClass:"cuIcon-footprint text-blue"}),o("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("tracking_remark")))])],1),o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.recordList.length>0?t.recordList[0].remark:""))])],1)],1),t.imgRecordList.length>0?o("v-uni-view",[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t.$t("image")))]),o("v-uni-view",{staticClass:"cu-item"},[o("v-uni-view",{staticClass:"grid text-center col-4 grid-square"},t._l(t.imgRecordList,(function(e,n){return o("v-uni-view",{key:n},[o("v-uni-image",{attrs:{mode:"widthFix","data-url":e.url,"data-index":n,src:e.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview.apply(void 0,arguments)}}})],1)})),1)],1)],1):t._e(),t.videoRecordList.length>0?o("v-uni-view",[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t.$t("video")))]),t._l(t.videoRecordList,(function(t,e){return o("v-uni-view",{key:e},[o("v-uni-video",{staticClass:"record-video",attrs:{"object-fit":"contain",src:t.url,controls:!0}})],1)}))],2):t._e()],1)],1)},i=[]},"2bde":function(t,e,o){"use strict";o("6a54");var n=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.deleteRoomRenovationRecord=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.deleteRoomRenovationRecord,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryDictInfo=function(t,e,o){return new Promise((function(n,r){t.context.get({url:i.default.queryDictInfo,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryRoomRenovation=function(t,e,o){return new Promise((function(n,r){t.context.get({url:i.default.queryRoomRenovation,data:e,success:function(e){t.onoff=!0,0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryRoomRenovationRecord=function(t,e,o){return new Promise((function(n,r){t.context.get({url:i.default.queryRoomRenovationRecord,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.queryRoomRenovationRecordDetail=function(t,e,o){return new Promise((function(n,r){t.context.get({url:i.default.queryRoomRenovationRecordDetail,data:e,success:function(t){0==t.data.code?n(t.data.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.saveRoomRenovationDetail=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.saveRoomRenovationDetail,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.updateRoomDecorationRecord=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.updateRoomDecorationRecord,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.updateRoomRenovationState=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.updateRoomRenovationState,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:t.data.msg,icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.updateRoomToExamine=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.updateRoomToExamine,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},o)}))},e.uploadVideo=function(t,e,o){return new Promise((function(n,r){t.context.post({url:i.default.uploadVideo,data:e,header:{"Content-Type":"multipart/form-data"},success:function(t){0==t.data.code?n():wx.showToast({title:"服务器异常了1",icon:"none",duration:2e3})},fail:function(t){console.log(t),wx.showToast({title:"服务器异常了2",icon:"none",duration:2e3})}},o)}))},o("bf0f");var i=n(o("f0de"))},3591:function(t,e,o){"use strict";o.r(e);var n=o("26eb"),i=o("ba16");for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("8898");var a=o("828b"),c=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"e1e78960",null,!1,n["a"],void 0);e["default"]=c.exports},"6fa0":function(t,e,o){var n=o("fa07");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("967d").default;i("765cd127",n,!0,{sourceMap:!1,shadowMode:!1})},8898:function(t,e,o){"use strict";var n=o("6fa0"),i=o.n(n);i.a},ba16:function(t,e,o){"use strict";o.r(e);var n=o("0cb1"),i=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},fa07:function(t,e,o){var n=o("c86c");e=n(!1),e.push([t.i,"uni-video[data-v-e1e78960]{width:100%}",""]),t.exports=e}}]);