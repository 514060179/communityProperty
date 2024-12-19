(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-roomRenovationDetail-roomRenovationDetail"],{"2d1c":function(t,e,n){var i=n("4fd5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("69ed6ecc",i,!0,{sourceMap:!1,shadowMode:!1})},"30d8":function(t,e,n){"use strict";n.r(e);var i=n("4704"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3b61":function(t,e,n){"use strict";var i=n("2d1c"),a=n.n(i);a.a},4704:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d4b5");i(n("ecef"));var a=n("95ed"),o={data:function(){var t=this,e=function(e){return t.$t(e)};return{renovationInfo:{},errorSwitch:!1,checkStateRange:[{state:3e3,name:e("review_passed")},{state:2e3,name:e("review_failed")}],reviewStateRange:[{state:5e3,name:e("acceptance_passed")},{state:6e3,name:e("acceptance_failed")}],checkState:{},reviewState:{},checkRemark:"",reviewRemark:""}},components:{},props:{},onLoad:function(t){this.java110Context.onLoad();this.renovationInfo=JSON.parse(t.apply)},onReady:function(){},onShow:function(){},methods:{onBlur:function(){uni.pageScrollTo({scrollTop:0})},switchShowModel:function(){this.errorSwitch=!this.errorSwitch},checkStateRangeChange:function(t){var e=t.detail.value;this.checkState=this.checkStateRange[e],this.checkRemark=this.checkState.name},reviewStateRangeChange:function(t){var e=t.detail.value;this.reviewState=this.reviewStateRange[e],this.reviewRemark=this.reviewState.name},submit:function(){var t=this;uni.showLoading({title:t.$t("please_wait")+"..."});var e={communityId:this.renovationInfo.communityId,rId:this.renovationInfo.rId,roomId:this.renovationInfo.roomId,roomName:this.renovationInfo.roomName,userId:this.renovationInfo.userId,startTime:this.renovationInfo.startTime,endTime:this.renovationInfo.endTime,remark:this.renovationInfo.remark,detailType:"1001"};if(1e3==this.renovationInfo.state){var n=this.checkState.state;if(null==n||!n)return uni.hideLoading(),void uni.showToast({title:t.$t("please_select_review_status")});var i=t.checkRemark;if(""==i||!i)return uni.hideLoading(),void uni.showToast({title:t.$t("please_enter_review_remark")});e.state=n,e.examineRemark=i,(0,a.updateRoomToExamine)(this,e).then((function(e){uni.hideLoading(),uni.showToast({title:t.$t("save_successful")}),setTimeout((function(){uni.navigateBack({})}),1e3)}))}else{var o=this.reviewState.state;if(null==o||!o)return uni.hideLoading(),void uni.showToast({title:t.$t("please_select_acceptance_status")});var s=this.reviewRemark;if(""==s||!s)return uni.hideLoading(),void uni.showToast({title:t.$t("please_enter_acceptance_remark")});e.state=o,e.examineRemark=s,(0,a.saveRoomRenovationDetail)(this,e).then((function(e){uni.hideLoading(),uni.showToast({title:t.$t("save_successful")}),setTimeout((function(){t.goBack()}),1e3)}))}},renovationComplete:function(){var t=this;uni.showModal({cancelText:t.$t("cancel"),confirmText:t.$t("confirm"),title:t.$t("confirm_operation"),content:t.$t("is_house_renovation_completed"),confirmColor:"#3B8BFF",cancelColor:"#222222",success:function(e){e.confirm?(0,a.updateRoomRenovationState)(t,t.renovationInfo).then((function(t){0==t.code&&uni.navigateBack({delta:1})})):e.cancel&&console.log("cancel")}})},goBack:function(){var t=getCurrentPages();if(t.length>1)uni.navigateBack(1);else{var e=this.$router.go(-1);void 0==e&&uni.reLaunch({url:"/pages/applyRoom/applyRoom"})}},showRenovationRecord:function(){uni.navigateTo({url:"/pages/roomRenovationRecord/roomRenovationRecord?apply="+JSON.stringify(this.renovationInfo)})},empty:function(){}}};e.default=o},"4fd5":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".btn-check[data-v-2217354d]{width:50%;margin:%?30?% auto;height:%?90?%;line-height:%?90?%;text-align:center;background-color:#0a0;border-radius:%?15?%;color:#fff;font-size:%?32?%}\n\n/* 弹出框 */.pop-bg[data-v-2217354d]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center}.pop-box[data-v-2217354d]{position:relative;width:85%;height:%?700?%;background-color:#fff;border-radius:%?15?%}.pop-title[data-v-2217354d]{padding:%?30?% 0;text-align:center;font-size:%?32?%;font-weight:700}.pop-bottom[data-v-2217354d]{width:100%;position:absolute;bottom:0}.btn-box[data-v-2217354d]{width:90%;margin:0 auto;border-top:1px solid #f6f6f8;display:flex}.cancel[data-v-2217354d],\n.confirm[data-v-2217354d]{width:50%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?40?%;font-weight:400}.cancel[data-v-2217354d]{color:#999}.confirm[data-v-2217354d]{color:#3488fe}",""]),t.exports=e},"95ed":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.deleteRoomRenovationRecord=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.deleteRoomRenovationRecord,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryDictInfo=function(t,e){return new Promise((function(n,i){t.context.get({url:a.default.queryDictInfo,data:e,success:function(t){n(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryRoomRenovation=function(t,e){return new Promise((function(n,i){t.context.get({url:a.default.queryRoomRenovation,data:e,success:function(e){t.onoff=!0,0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryRoomRenovationRecord=function(t,e){return new Promise((function(n,i){t.context.get({url:a.default.queryRoomRenovationRecord,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.queryRoomRenovationRecordDetail=function(t,e){return new Promise((function(n,i){t.context.get({url:a.default.queryRoomRenovationRecordDetail,data:e,success:function(t){0==t.data.code?n(t.data.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.saveRoomRenovationDetail=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.saveRoomRenovationDetail,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updateRoomDecorationRecord=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.updateRoomDecorationRecord,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updateRoomRenovationState=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.updateRoomRenovationState,data:e,success:function(t){0==t.data.code?n(t.data):wx.showToast({title:t.data.msg,icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.updateRoomToExamine=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.updateRoomToExamine,data:e,success:function(t){0==t.data.code?n():wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},e.uploadVideo=function(t,e){return new Promise((function(n,i){t.context.post({url:a.default.uploadVideo,data:e,header:{"Content-Type":"multipart/form-data"},success:function(t){0==t.data.code?n():wx.showToast({title:"服务器异常了1",icon:"none",duration:2e3})},fail:function(t){console.log(t),wx.showToast({title:"服务器异常了2",icon:"none",duration:2e3})}})}))},n("bf0f");var a=i(n("f3d1"))},bcef:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRenovationRecord()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("renovation_tracking_record")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.$t("view")))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("application_room")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.roomName))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("applicant")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.personName))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-phone text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("contact_information")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.personTel))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("start_time")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.startTime))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("end_time")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.endTime))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-service text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("renovation_company")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.renovationCompany))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("renovation_manager")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.personMain))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-phone text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("manager_phone")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.personMainTel))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("is_delayed")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s("N"==t.renovationInfo.isPostpone?"否":"是"))])],1)],1),"Y"==t.renovationInfo.isPostpone?n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("delay_date")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.postponeTime))])],1)],1):t._e(),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-footprint text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("application_remark")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.remark))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("current_status")))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.renovationInfo.stateName))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[1e3==t.renovationInfo.state&&"N"==t.renovationInfo.isViolation&&this.java110Context.hasPrivilege("502021031698730003")?n("v-uni-button",{staticClass:"btn-check",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchShowModel()}}},[t._v(t._s(t.$t("review")))]):t._e(),4e3==t.renovationInfo.state&&"N"==t.renovationInfo.isViolation&&this.java110Context.hasPrivilege("502021012701630060")?n("v-uni-button",{staticClass:"btn-check",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchShowModel()}}},[t._v(t._s(t.$t("acceptance")))]):t._e(),3e3==t.renovationInfo.state&&"N"==t.renovationInfo.isViolation?n("v-uni-button",{staticClass:"btn-check",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.renovationComplete()}}},[t._v(t._s(t.$t("renovation_completed")))]):t._e()],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.errorSwitch,expression:"errorSwitch"}],staticClass:"pop-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchShowModel()}}},[n("v-uni-view",{staticClass:"pop-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.empty.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pop-title"},[t._v(t._s(1e3==t.renovationInfo.state?"审核":"验收"))]),1e3==t.renovationInfo.state?n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item arrow"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("review_status")))])],1),n("v-uni-picker",{attrs:{mode:"selector",value:t.checkState.state,range:t.checkStateRange,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkStateRangeChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.checkState.name?t.checkState.name:"请选择"))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("review_remark")))])],1),n("v-uni-input",{attrs:{type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur()}},model:{value:t.checkRemark,callback:function(e){t.checkRemark=e},expression:"checkRemark"}})],1)],1):t._e(),4e3==t.renovationInfo.state?n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item arrow"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("acceptance_status")))])],1),n("v-uni-picker",{attrs:{mode:"selector",value:t.reviewState.state,range:t.reviewStateRange,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.reviewStateRangeChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.reviewState.name?t.reviewState.name:"请选择"))])],1)],1),n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-time text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("acceptance_remark")))])],1),n("v-uni-input",{attrs:{type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur()}},model:{value:t.reviewRemark,callback:function(e){t.reviewRemark=e},expression:"reviewRemark"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"pop-bottom"},[n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchShowModel()}}},[t._v("取消")]),n("v-uni-view",{staticClass:"confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit()}}},[t._v("保存")])],1)],1)],1)],1)],1)},a=[]},e468:function(t,e,n){"use strict";n.r(e);var i=n("bcef"),a=n("30d8");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3b61");var s=n("828b"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2217354d",null,!1,i["a"],void 0);e["default"]=c.exports}}]);