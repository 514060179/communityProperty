(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-itemRelease-itemReleaseDetail"],{"028f":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"block__title"},[t._v("基础信息")]),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("放行类型")]),a("v-uni-view",[t._v(t._s(t.order.typeName))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("申请单位")]),a("v-uni-view",[t._v(t._s(t.order.applyCompany))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("申请人")]),a("v-uni-view",[t._v(t._s(t.order.applyPerson))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("手机号")]),a("v-uni-view",[t._v(t._s(t.order.applyTel))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("身份证")]),a("v-uni-view",[t._v(t._s(t.order.idCard))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("车牌号")]),a("v-uni-view",[t._v(t._s(t.order.carNum))])],1),a("v-uni-view",{staticClass:"cu-form-group arrow"},[a("v-uni-view",{staticClass:"title"},[t._v("通行时间")]),a("v-uni-view",[t._v(t._s(t.order.passTime))])],1),a("v-uni-view",{staticClass:"cu-form-group arrow"},[a("v-uni-view",{staticClass:"title"},[t._v("备注")]),a("v-uni-view",[t._v(t._s(t.order.remark))])],1),a("v-uni-view",{staticClass:"block__title"},[t._v("物品信息")]),t._l(t.resNames,(function(e,n){return a("v-uni-view",{staticClass:"cu-form-group arrow"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.resName))]),a("v-uni-view",{},[t._v(t._s(e.amount))])],1)})),a("v-uni-view",{staticClass:"block__title"},[t._v("审批流程")]),t._l(t.comments,(function(e,n){return a("v-uni-view",{staticClass:"cu-form-group arrow"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.staffName))]),a("v-uni-view",{},[e.endTime?a("v-uni-text",[t._v("处理完成")]):a("v-uni-text",[t._v("正在处理")]),e.context?a("v-uni-text",[t._v("("+t._s(e.context)+")")]):t._e()],1)],1)})),t.action&&"Audit"==t.action?a("v-uni-view",[a("audit-item-release",{ref:"auditItemReleaseRef"})],1):t._e()],2)},i=[]},"03a7":function(t,e,a){"use strict";a.r(e);var n=a("4a65"),i=a("8a71");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("3383");var r=a("828b"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"3d9153af",null,!1,n["a"],void 0);e["default"]=u.exports},"23ba":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("684b"),s=a("dae2"),r=n(a("03a7")),u={data:function(){return{order:{},resNames:[],irId:"",comments:[],flowId:"",action:"",taskId:"",audit:{auditCode:"1100",auditMessage:"同意",staffId:"",staffName:"",taskId:""},nextAudit:{}}},onLoad:function(t){this.irId=t.irId,this.flowId=t.flowId,this.action=t.action,this.taskId=t.taskId,this._loadDetail(),this._loadDetailResNames()},components:{auditItemRelease:r.default},methods:{_loadDetail:function(){var t=this;(0,i.getItemRelease)(this,{page:1,row:1,irId:this.irId,communityId:(0,s.getCurrentCommunity)().communityId}).then((function(e){t.order=e[0],t._loadComment()})).then((function(){t.action&&"Audit"==t.action&&t.$refs.auditItemReleaseRef.initAuditItemRelease({taskId:t.taskId,flowId:t.flowId,irId:t.irId,startUserId:t.order.createUserId})}))},_loadDetailResNames:function(){var t=this;(0,i.getItemReleaseRes)(this,{page:1,row:100,irId:this.irId,communityId:(0,s.getCurrentCommunity)().communityId}).then((function(e){t.resNames=e}))},_loadComment:function(){var t=this;(0,i.queryOaWorkflowUser)(this,{page:1,row:100,id:this.irId,communityId:(0,s.getCurrentCommunity)().communityId,flowId:this.order.flowId}).then((function(e){t.comments=e}))}}};e.default=u},"2abd":function(t,e,a){var n=a("4816");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("0e1dfa7e",n,!0,{sourceMap:!1,shadowMode:!1})},3383:function(t,e,a){"use strict";var n=a("9a0b"),i=a.n(n);i.a},4816:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.block__title[data-v-be0c17fc]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-be0c17fc]{height:%?40?%}',""]),t.exports=e},"4a65":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={pickerStaffs:a("7d22").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-form-group arrow margin-top"},[a("v-uni-view",{staticClass:"title"},[t._v("动作")]),a("v-uni-picker",{attrs:{bindchange:"PickerChange",value:t.actionIndex,"range-key":"label",range:t.actions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectChange(e)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(0==t.actions.length?"请选择":t.actions[t.actionIndex].label))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group margin-top-xs"},[a("v-uni-textarea",{attrs:{placeholder:"请输入处理意见"},model:{value:t.audit.auditMessage,callback:function(e){t.$set(t.audit,"auditMessage",e)},expression:"audit.auditMessage"}})],1),"1100"==t.audit.auditCode&&"-2"==t.nextAudit.assignee?a("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[a("v-uni-view",{staticClass:"title"},[t._v("下一处理人")]),a("pickerStaffs",{staticClass:"text-right",staticStyle:{width:"80%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStaff.apply(void 0,arguments)}}},[t._v(t._s(t.audit.staffName))]),a("v-uni-text",{staticClass:"cuIcon-right"})],1):t._e(),"1300"==t.audit.auditCode?a("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[a("v-uni-view",{staticClass:"title"},[t._v("下一处理人")]),a("pickerStaffs",{staticClass:"text-right",staticStyle:{width:"80%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStaff.apply(void 0,arguments)}}},[t._v(t._s(t.audit.staffName))]),a("v-uni-text",{staticClass:"cuIcon-right"})],1):t._e(),a("v-uni-view",{staticClass:"button_up_blank"}),a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-green margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._doSubmit()}}},[t._v("提交")])],1)],1)},s=[]},"684b":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.auditUndoItemRelease=function(t,e){return new Promise((function(a,n){t.context.post({url:i.default.auditUndoItemRelease,data:e,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.getItemRelease=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.listItemRelease,data:e,success:function(t){if(0!=t.data.code)n("未包含数据");else{var e=t.data.data;a(e)}},fail:function(t){n(t)}})}))},e.getItemReleaseRes=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.listItemReleaseRes,data:e,success:function(t){if(0!=t.data.code)n("未包含数据");else{var e=t.data.data;a(e)}},fail:function(t){n(t)}})}))},e.queryFinishItemRelease=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.queryFinishItemRelease,data:e,success:function(t){0==t.data.code?a(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryNextDealUser=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.queryNextDealUser,data:e,success:function(t){if(0!=t.data.code)n("未包含数据");else{var e=t.data.data;a(e)}},fail:function(t){n(t)}})}))},e.queryOaWorkflowUser=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.queryOaWorkflowUser,data:e,success:function(t){if(0!=t.data.code)n("未包含数据");else{var e=t.data.data;a(e)}},fail:function(t){n(t)}})}))},e.queryUndoItemRelease=function(t,e){return new Promise((function(a,n){t.context.get({url:i.default.queryUndoItemRelease,data:e,success:function(t){0==t.data.code?a(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},a("bf0f");var i=n(a("f3d1"));a("81e2")},"6a1c2":function(t,e,a){"use strict";a.r(e);var n=a("23ba"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"6e7a":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("aa9c");var i=n(a("7d22")),s=a("684b"),r=a("dae2"),u={name:"auditItemRelease",data:function(){return{taskId:"",flowId:"",id:"",actionIndex:0,actions:[],audit:{auditCode:"1100",auditMessage:"",staffId:"",staffName:"请选择",taskId:""},startUserId:"",nextAudit:{}}},components:{pickerStaffs:i.default},methods:{initAuditItemRelease:function(t){this.taskId=t.taskId,this.flowId=t.flowId,this.irId=t.irId,this.startUserId=t.startUserId,this._getNextTask()},selectChange:function(t){this.actionIndex=t.target.value;var e=this.actions[this.actionIndex];void 0!=e&&(this.audit.auditCode=e.value)},changeStaff:function(t){console.log(t),t.data.length<3||(this.audit.staffId=t.data[2].code,this.audit.staffName=t.data[2].name)},_doSubmit:function(){var t=this.audit;t.flowId=this.flowId,t.irId=this.irId,t.taskId=this.taskId,"-2"!=this.nextAudit.assignee&&(t.staffId=this.nextAudit.assignee),t.auditCode?t.auditMessage?"1200"==t.auditCode||"1400"==t.auditCode||t.staffId?(0,s.auditUndoItemRelease)(this,t).then((function(t){if(0==t.data.code)return uni.showToast({title:"提交成功",icon:"none",duration:2e3}),void uni.navigateBack({delta:1});uni.showToast({title:t.data.msg,icon:"none",duration:2e3})})):uni.showToast({icon:"none",title:"请选择下一节点处理人"}):uni.showToast({icon:"none",title:"请填写说明"}):uni.showToast({icon:"none",title:"请选择状态"})},_getNextTask:function(){var t=this;(0,s.queryNextDealUser)(this,{taskId:this.taskId,flowId:this.flowId,startUserId:this.startUserId,communityId:(0,r.getCurrentCommunity)().communityId}).then((function(e){var a=e[0];t.nextAudit=a,(a.hasOwnProperty("next")||a.hasOwnProperty("exit"))&&t.actions.push({label:"同意",value:"1100"}),a.hasOwnProperty("back")&&t.actions.push({label:"退回",value:"1200"}),a.hasOwnProperty("backIndex")&&t.actions.push({label:"退回至提交者",value:"1400"}),t.actions.push({label:"转单",value:"1300"})}))}}};e.default=u},"7d22":function(t,e,a){"use strict";a.r(e);var n=a("c326"),i=a("aa3e");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var r=a("828b"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0128992c",null,!1,n["a"],void 0);e["default"]=u.exports},"7d75":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,".block__title[data-v-3d9153af]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-3d9153af]{height:%?40?%}",""]),t.exports=e},"812d":function(t,e,a){"use strict";a.r(e);var n=a("028f"),i=a("6a1c2");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("ca32d");var r=a("828b"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"be0c17fc",null,!1,n["a"],void 0);e["default"]=u.exports},"8a71":function(t,e,a){"use strict";a.r(e);var n=a("6e7a"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"9a0b":function(t,e,a){var n=a("7d75");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("e76a6d30",n,!0,{sourceMap:!1,shadowMode:!1})},aa3e:function(t,e,a){"use strict";a.r(e);var n=a("df27"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},c326:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-picker",{attrs:{range:t.array,"range-key":"name",value:t.value,mode:"multiSelector"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.columnchange.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},ca32d:function(t,e,a){"use strict";var n=a("2abd"),i=a.n(n);i.a},df27:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("bf0f"),a("2797"),a("aa9c"),a("fd3c"),a("d4b5");var n=a("b182"),i=[],s={data:function(){return{value:[0,0,0],array:[],index:0,companys:[]}},created:function(){var t=this,e=this,a=this.java110Context.getUserInfo(),i=a.storeId;(0,n.queryStaffInfos)(this,{page:1,row:300,storeId:i}).then((function(t){var a=t.data.staffs;return e.communitys=e.freshStaff(a),e.communitys})).then((function(e){console.log("_communitys",e),t.initSelect()}))},methods:{initSelect:function(){this.updateSourceDate().updateAddressDate().$forceUpdate()},freshStaff:function(t){var e=this,a=[];return t.forEach((function(t){e._hasIn(a,t.parentOrgId)||a.push({id:t.parentOrgId,name:t.parentOrgName,departments:[]})})),a.forEach((function(a){t.forEach((function(t){e._hasDepartMentIn(a,a.departments,t)&&a.departments.push({id:t.orgId,name:t.orgName,users:[]})}))})),a.forEach((function(a){a.departments.forEach((function(a){t.forEach((function(t){e._hasUserIn(a,a.users,t)&&a.users.push({id:t.userId,name:t.userName})}))}))})),a},_hasIn:function(t,e){var a=!1;return t.forEach((function(t){t.id==e&&(a=!0)})),a},_hasDepartMentIn:function(t,e,a){var n=!1;return 0==e.length&&t.id==a.parentOrgId||(this._hasIn(e,a.orgId)||t.id!=a.parentOrgId||(n=!0),n)},_hasUserIn:function(t,e,a){var n=!1;return 0==e&&t.id==a.orgId||(this._hasIn(e,a.userId)||t.id!=a.orgId||(n=!0),n)},columnchange:function(t){this.updateSelectIndex(t.detail.column,t.detail.value).updateSourceDate().updateAddressDate().$forceUpdate()},updateSourceDate:function(){return this.array=[],this.array[0]=this.communitys.map((function(t){return{name:t.name,code:t.id}})),this.array[1]=this.communitys[this.value[0]].departments.map((function(t){return{name:t.name,code:t.id}})),this.array[2]=this.communitys[this.value[0]].departments[this.value[1]].users.map((function(t){return{name:t.name,code:t.id}})),this},updateSelectIndex:function(t,e){var a=JSON.parse(JSON.stringify(this.value));return a[t]=e,0===t&&(a[1]=0,a[2]=0),1===t&&(a[2]=0),this.value=a,this},updateAddressDate:function(){return i=[],i.push({name:this.array[0][this.value[0]].name,code:this.array[0][this.value[0]].code}),i.push({name:this.array[1][this.value[1]].name,code:this.array[1][this.value[1]].code}),i.push({name:this.array[2][this.value[2]].name,code:this.array[2][this.value[2]].code}),this},bindPickerChange:function(t){return this.$emit("change",{index:this.value,data:i}),this}}};e.default=s}}]);