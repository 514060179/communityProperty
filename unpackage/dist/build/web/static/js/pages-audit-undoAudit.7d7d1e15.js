(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-audit-undoAudit"],{5693:function(t,e,n){var a=n("5e67");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("d2fe891e",a,!0,{sourceMap:!1,shadowMode:!1})},"5d1a":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.auditOaWorkflow=function(t,e){return new Promise((function(n,a){t.context.post({url:i.default.auditOaWorkflow,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.auditUndo=function(t,e,n){return new Promise((function(a,i){t.context.post({url:e,data:n,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.getNextTask=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.getNextTask,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.listRunWorkflowImage=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.listRunWorkflowImage,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryNextDealUser=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryNextDealUser,data:e,success:function(t){if(0!=t.data.code)a("未包含数据");else{var e=t.data.data;n(e)}},fail:function(t){a(t)}})}))},e.queryOaWorkflow=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflow,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryOaWorkflowForm=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflowForm,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryOaWorkflowFormData=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflowFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryOaWorkflowUser=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflowUser,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryOaWorkflowUserHisTaskFormData=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflowUserHisTaskFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryOaWorkflowUserTaskFormData=function(t,e){return new Promise((function(n,a){t.context.get({url:i.default.queryOaWorkflowUserTaskFormData,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveOaWorkflowFormData=function(t,e){return new Promise((function(n,a){t.context.post({url:i.default.saveOaWorkflowFormData,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updateOaWorkflowFormData=function(t,e){return new Promise((function(n,a){t.context.post({url:i.default.updateOaWorkflowFormData,data:e,success:function(t){n(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var i=a(n("f3d1"))},"5e67":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".block__title[data-v-6cc144e1]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-6cc144e1]{height:%?40?%}",""]),t.exports=e},"7d22":function(t,e,n){"use strict";n.r(e);var a=n("c326"),i=n("aa3e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("828b"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"0128992c",null,!1,a["a"],void 0);e["default"]=s.exports},a490:function(t,e,n){"use strict";var a=n("5693"),i=n.n(a);i.a},aa3e:function(t,e,n){"use strict";n.r(e);var a=n("df27"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},affe:function(t,e,n){"use strict";n.r(e);var a=n("d44e"),i=n("bda6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a490");var r=n("828b"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"6cc144e1",null,!1,a["a"],void 0);e["default"]=s.exports},bda6:function(t,e,n){"use strict";n.r(e);var a=n("e65a"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c326:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-picker",{attrs:{range:t.array,"range-key":"name",value:t.value,mode:"multiSelector"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.columnchange.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},d44e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={pickerStaffs:n("7d22").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-form-group arrow margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("动作")]),n("v-uni-picker",{attrs:{bindchange:"PickerChange",value:t.actionIndex,"range-key":"label",range:t.actions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectChange(e)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(0==t.actions.length?"请选择":t.actions[t.actionIndex].label))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top-xs"},[n("v-uni-textarea",{attrs:{placeholder:"请输入处理意见"},model:{value:t.audit.auditMessage,callback:function(e){t.$set(t.audit,"auditMessage",e)},expression:"audit.auditMessage"}})],1),"1100"==t.audit.auditCode&&"-2"==t.nextAudit.assignee?n("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[n("v-uni-view",{staticClass:"title"},[t._v("下一处理人")]),n("pickerStaffs",{staticClass:"text-right",staticStyle:{width:"80%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStaff.apply(void 0,arguments)}}},[t._v(t._s(t.audit.staffName))]),n("v-uni-text",{staticClass:"cuIcon-right"})],1):t._e(),"1300"==t.audit.auditCode?n("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[n("v-uni-view",{staticClass:"title"},[t._v("下一处理人")]),n("pickerStaffs",{staticClass:"text-right",staticStyle:{width:"80%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStaff.apply(void 0,arguments)}}},[t._v(t._s(t.audit.staffName))]),n("v-uni-text",{staticClass:"cuIcon-right"})],1):t._e(),n("v-uni-view",{staticClass:"button_up_blank"}),n("v-uni-view",{staticClass:"flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-green margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._doSubmit()}}},[t._v("提交")])],1)],1)},o=[]},df27:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f"),n("2797"),n("aa9c"),n("fd3c"),n("d4b5");var a=n("b182"),i=[],o={data:function(){return{value:[0,0,0],array:[],index:0,companys:[]}},created:function(){var t=this,e=this,n=this.java110Context.getUserInfo(),i=n.storeId;(0,a.queryStaffInfos)(this,{page:1,row:300,storeId:i}).then((function(t){var n=t.data.staffs;return e.communitys=e.freshStaff(n),e.communitys})).then((function(e){console.log("_communitys",e),t.initSelect()}))},methods:{initSelect:function(){this.updateSourceDate().updateAddressDate().$forceUpdate()},freshStaff:function(t){var e=this,n=[];return t.forEach((function(t){e._hasIn(n,t.parentOrgId)||n.push({id:t.parentOrgId,name:t.parentOrgName,departments:[]})})),n.forEach((function(n){t.forEach((function(t){e._hasDepartMentIn(n,n.departments,t)&&n.departments.push({id:t.orgId,name:t.orgName,users:[]})}))})),n.forEach((function(n){n.departments.forEach((function(n){t.forEach((function(t){e._hasUserIn(n,n.users,t)&&n.users.push({id:t.userId,name:t.userName})}))}))})),n},_hasIn:function(t,e){var n=!1;return t.forEach((function(t){t.id==e&&(n=!0)})),n},_hasDepartMentIn:function(t,e,n){var a=!1;return 0==e.length&&t.id==n.parentOrgId||(this._hasIn(e,n.orgId)||t.id!=n.parentOrgId||(a=!0),a)},_hasUserIn:function(t,e,n){var a=!1;return 0==e&&t.id==n.orgId||(this._hasIn(e,n.userId)||t.id!=n.orgId||(a=!0),a)},columnchange:function(t){this.updateSelectIndex(t.detail.column,t.detail.value).updateSourceDate().updateAddressDate().$forceUpdate()},updateSourceDate:function(){return this.array=[],this.array[0]=this.communitys.map((function(t){return{name:t.name,code:t.id}})),this.array[1]=this.communitys[this.value[0]].departments.map((function(t){return{name:t.name,code:t.id}})),this.array[2]=this.communitys[this.value[0]].departments[this.value[1]].users.map((function(t){return{name:t.name,code:t.id}})),this},updateSelectIndex:function(t,e){var n=JSON.parse(JSON.stringify(this.value));return n[t]=e,0===t&&(n[1]=0,n[2]=0),1===t&&(n[2]=0),this.value=n,this},updateAddressDate:function(){return i=[],i.push({name:this.array[0][this.value[0]].name,code:this.array[0][this.value[0]].code}),i.push({name:this.array[1][this.value[1]].name,code:this.array[1][this.value[1]].code}),i.push({name:this.array[2][this.value[2]].name,code:this.array[2][this.value[2]].code}),this},bindPickerChange:function(t){return this.$emit("change",{index:this.value,data:i}),this}}};e.default=o},e65a:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("aa9c");var i=a(n("7d22")),o=n("5d1a"),r=a(n("f3d1")),s={data:function(){return{taskId:"",flowId:"",id:"",actionIndex:0,business:"",startUserId:"",actions:[],audit:{auditCode:"1100",auditMessage:"",staffId:"",staffName:"请选择",taskId:""},nextAudit:{}}},components:{pickerStaffs:i.default},onLoad:function(t){this.taskId=t.taskId,this.flowId=t.flowId,this.id=t.id,this.business=t.business,this.startUserId=t.startUserId,this._getNextTask()},methods:{selectChange:function(t){this.actionIndex=t.target.value;var e=this.actions[this.actionIndex];void 0!=e&&(this.audit.auditCode=e.value)},changeStaff:function(t){console.log(t),t.data.length<3||(this.audit.staffId=t.data[2].code,this.audit.staffName=t.data[2].name)},_doSubmit:function(){var t=this.audit;if(t.flowId=this.flowId,t.id=this.id,t.taskId=this.taskId,"-2"!=this.nextAudit.assignee&&(t.staffId=this.nextAudit.assignee),t.auditCode)if(t.auditMessage)if("1200"==t.auditCode||"1400"==t.auditCode||t.staffId){var e=this.getUndoUrl();(0,o.auditUndo)(this,e,t).then((function(t){if(0==t.data.code)return uni.showToast({title:"提交成功",icon:"none",duration:2e3}),void uni.navigateBack({delta:2});uni.showToast({title:t.data.msg,icon:"none",duration:2e3})}))}else vc.toast("请选择下一节点处理人");else vc.toast("请填写说明");else vc.toast("请选择状态")},getUndoUrl:function(){return this.business?"purchaseApply"==this.business||"itemOut"==this.business?r.default.saveMyAuditOrders:"allocation"==this.business?r.default.saveAuditAllocationStoreOrder:"":""},_getNextTask:function(){var t=this;(0,o.queryNextDealUser)(this,{taskId:this.taskId,flowId:this.flowId,startUserId:this.startUserId,id:this.id}).then((function(e){console.log(e);var n=e[0];t.nextAudit=n,n.hasOwnProperty("next")&&t.actions.push({label:"办理",value:"1100"}),n.hasOwnProperty("back")&&t.actions.push({label:"退回",value:"1200"}),n.hasOwnProperty("backIndex")&&t.actions.push({label:"退回至提交者",value:"1400"}),n.hasOwnProperty("exit")&&t.actions.push({label:"结束",value:"1500"}),t.actions.push({label:"转单",value:"1300"})}))}}};e.default=s}}]);