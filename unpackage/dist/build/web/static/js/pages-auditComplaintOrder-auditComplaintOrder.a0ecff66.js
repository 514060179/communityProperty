(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auditComplaintOrder-auditComplaintOrder"],{"5b2a":function(t,e,i){"use strict";i.r(e);var a=i("f79c"),s=i("e13d");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var u=i("828b"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"eab1a21a",null,!1,a["a"],void 0);e["default"]=c.exports},db88:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("f3d1")),n=i("dae2"),u={data:function(){return{complaintId:"",auditOrder:{},states:["已处理","无法处理"],stateIndex:-1,remark:""}},onLoad:function(t){this.java110Context.onLoad();var e=t.complaintId;this.complaintId=e,console.log("_complaintId",e),this._loadComplaintOrder()},methods:{_loadComplaintOrder:function(){this.auditOrder=uni.getStorageSync("_auditComplaint_"+this.complaintId)},_changeResult:function(t){this.stateIndex=t.detail.value,console.log(t,this.stateIndex)},_auditOrder:function(){if("-1"!=this.stateIndex)if(""!=this.remark)if(this.remark.length>200)uni.showToast({icon:"none",title:"请填写处理意见超过200个"});else{var t="1200";"1"==this.stateIndex&&(t="1100");var e={state:t,remark:this.remark,taskId:this.auditOrder.taskId,complaintId:this.auditOrder.complaintId,communityId:(0,n.getCurrentCommunity)().communityId,storeId:this.java110Context.getUserInfo().storeId,userId:this.java110Context.getUserInfo().userId};this.java110Context.request({url:s.default.auditComplaint,header:this.java110Context.getHeaders(),method:"POST",data:e,success:function(t){200==t.statusCode?uni.navigateBack({delta:1}):uni.navigateTo({url:"/pages/login/login"})},fail:function(t){uni.showToast({title:"调用接口失败"}),console.log(t)}})}else uni.showToast({icon:"none",title:"请填写处理意见"});else uni.showToast({icon:"none",title:"请选择结果"})}}};e.default=u},e13d:function(t,e,i){"use strict";i.r(e);var a=i("db88"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},f79c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"padding margin-top"},[i("v-uni-text",[t._v("订单信息")])],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-edit text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("投诉编码")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.complaintId))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-ticket text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("房屋编码")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.floorNum)+"号楼"+t._s(t.auditOrder.unitNum)+"单元"+t._s(t.auditOrder.roomNum)+"室")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-footprint text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("单类型")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.typeCdName)+"单")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-profile text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("投诉人")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.complaintName))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-phone text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("投诉电话")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.tel))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-time text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("投诉时间")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.auditOrder.createTime))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content padding-tb-sm"},[i("v-uni-view",[i("v-uni-text",{staticClass:"cuIcon-comment text-blue margin-right-xs"}),t._v("投诉内容")],1),i("v-uni-view",{staticClass:"text-gray text-sm"},[i("v-uni-text",{staticClass:"cuIcon-infofill margin-right-xs"}),t._v(t._s(t.auditOrder.context))],1)],1)],1)],1),i("v-uni-view",{staticClass:"padding margin-top"},[i("v-uni-text",[t._v("审核信息")])],1),i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("结果")]),i("v-uni-picker",{attrs:{value:t.stateIndex,range:t.states},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t._changeResult.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.stateIndex>-1?t.states[t.stateIndex]:"未处理"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"请输入处理意见"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-green margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._auditOrder()}}},[t._v("提交")])],1)],1)},s=[]}}]);