(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-maintainance-maintainanceTransfer"],{"080e":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showModel?n("v-uni-view",{staticClass:"select-single-resource"},[n("v-uni-view",[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("员工")]),n("v-uni-picker",{attrs:{value:t.staffIndex,range:t.staffCloums,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.staffChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.staffCloums[t.staffIndex].name))])],1)],1),n("v-uni-view",{staticClass:"flex flex-direction margin-top"},[n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._save()}}},[t._v("确定")])],1),n("v-uni-view",{staticClass:"flex flex-direction margin-top"},[n("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._canel()}}},[t._v("取消")])],1)],1)],1):t._e()},i=[]},1070:function(t,e,n){"use strict";n.r(e);var a=n("79f4"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"261b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={selectStaff:n("44ab").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{"padding-bottom":"100rpx"}},[n("v-uni-view",{staticClass:"cu-bar bg-white search "},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-gradual-blue shadow-blur round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._openChooseStaffModel()}}},[t._v("选择员工")])],1)],1),t.staffId?n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("员工")]),n("v-uni-input",{attrs:{disabled:"disabled"},model:{value:t.staffName,callback:function(e){t.staffName=e},expression:"staffName"}})],1):t._e(),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("流转说明")]),n("v-uni-input",{attrs:{placeholder:"请输入流转说明"},model:{value:t.transferDesc,callback:function(e){t.transferDesc=e},expression:"transferDesc"}})],1)],1),n("v-uni-view",{staticClass:"footer-step-fixed"},[n("v-uni-view",{staticClass:"step-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$preventClick(t.save)}}},[t._v("提交")])],1),n("select-staff",{ref:"selectstaff",on:{getStaffInfo:function(e){arguments[0]=e=t.$handleEvent(e),t._getStaffInfo.apply(void 0,arguments)}}})],1)},s=[]},"34a2":function(t,e,n){"use strict";n.r(e);var a=n("f85e"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},3939:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.UpdateMaintainanceTask=function(t,e,n){return new Promise((function(a,s){t.context.post({url:i.default.UpdateMaintainanceTask,data:e,success:function(t){a(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryDictInfo=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.queryDictInfo,data:e,success:function(t){a(t.data)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryMaintainanceItemTitle=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.listMaintainanceItem,data:e,success:function(t){var e=t.data;0!=e.code?s(e.msg):a(e.data)},fail:function(t){s(t)}},n)}))},e.queryMaintainanceTask=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.listMaintainanceTask,data:e,success:function(t){var e=t.data;if(0==e.code)return t.data.data.forEach((function(t,e){t.timeStr=t.planInsTime.replace(/:\d{1,2}$/," ")})),void a(t.data.data);s(e.msg)},fail:function(t){s(t)}},n)}))},e.queryMaintainanceTaskDetail=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.listMaintainanceTaskDetail,data:e,success:function(t){var e=t.data;if(0==e.code)return e.data.forEach((function(t){})),void a(e.data);s(e.msg)},fail:function(t){s(t)}},n)}))},e.updateMaintainanceTaskDetail=function(t,e,n){var a="";""==e.taskId?a="数据异常，保养任务为空":""==e.taskDetailId?a="数据异常，保养任务详情为空":""==e.machineId?a="设备不能为空":""==e.machineName?a="设备名称不能为空":""==e.patrolType?a="保养情况不能为空":""==e.description?a="保养说明不能为空":""==e.userId?a="数据异常，保养人为空":e.photos.length<=0&&(a="请上传保养图片");if(""!=a)return void wx.showToast({title:a,icon:"none",duration:2e3});return uni.showLoading({title:"请稍后..."}),new Promise((function(a,s){t.context.post({url:i.default.updateMaintainanceTaskDetail,data:e,success:function(t){a(t.data),uni.hideLoading()},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3}),uni.hideLoading()}},n)}))},n("bf0f"),n("2797"),n("5c47"),n("a1c1"),n("01a2"),n("e39c");var i=a(n("f0de"))},"3bdf":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".select-single-resource[data-v-92c125c4]{position:fixed;top:%?100?%;left:0;background-color:#fff;width:100%;height:100%}.use-num-container[data-v-92c125c4]{display:flex;flex-direction:row}.use-num-input[data-v-92c125c4]{width:%?100?%;text-align:center;padding:0}.inc[data-v-92c125c4],.dec[data-v-92c125c4]{border:1px solid #000;border-radius:50%;width:%?40?%;height:%?40?%;text-align:center;line-height:%?40?%}",""]),t.exports=e},"44ab":function(t,e,n){"use strict";n.r(e);var a=n("080e"),i=n("1070");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("feda");var o=n("828b"),f=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"92c125c4",null,!1,a["a"],void 0);e["default"]=f.exports},"52ff":function(t,e,n){var a=n("3bdf");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("77064c66",a,!0,{sourceMap:!1,shadowMode:!1})},"79f4":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c223");var a=n("e476"),i=n("2d9e"),s={components:{},data:function(){return{showModel:!1,communityId:"",orgIndex:0,selectedOrg:"",staffCloums:[{name:"请选择员工"}],staffIndex:0,selectedStaff:""}},props:{},watch:{},created:function(){},computed:{},mounted:function(){this.communityId=(0,i.getCurrentCommunity)().communityId,this._loadStaffList()},methods:{switchShow:function(){this.showModel=!this.showModel},_loadStaffList:function(){var t=this,e={page:1,row:50,communityId:this.communityId};(0,a.queryStaffListInfo)(this,e,0==this.staffCloums.length).then((function(e){t.staffCloums=t.staffCloums.concat(e.data.staffs)}))},orgChange:function(t){if(this.orgIndex=t.target.value,this.depCloums=[{orgName:"请选择部门"}],this.depIndex=0,this.selectedDep="",this.staffCloums=[{name:"请选择员工"}],this.staffIndex=0,this.selectedStaff="",0!=this.orgIndex){var e=this.orgCloums[this.orgIndex];this.selectedOrg=e,this._loadDepList()}},depChange:function(t){if(this.depIndex=t.target.value,this.staffCloums=[{name:"请选择员工"}],this.staffIndex=0,this.selectedStaff="",0!=this.depIndex){var e=this.depCloums[this.depIndex];this.selectedDep=e,this._loadStaffList()}},staffChange:function(t){if(this.staffIndex=t.target.value,this.selectedStaff="",0!=this.staffIndex){var e=this.staffCloums[this.staffIndex];this.selectedStaff=e}},_save:function(){""!=this.selectedStaff?(this.$emit("getStaffInfo",this.selectedStaff),this.showModel=!1):uni.showToast({title:"请选择员工",icon:"none"})},_canel:function(){this.showModel=!1}}};e.default=s},"9ef9":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.getFileType=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("."),n=e[e.length-1];if(!n)return"";n=n.toLocaleLowerCase();var a=["png","jpg","jpeg","bmp","gif","webp"];if(a.includes(n))return"image";var i=["mp4","m4v"];if(i.includes(n))return"video";var s=["mp3","m4a","wav","aac"];if(s.includes(n))return"audio";var o=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","plain"];return o.includes(n)?"office":"unknown"},e.preventClick=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this;n.onoff?(n.onoff=!1,t(e)):uni.showToast({title:"操作过于频繁",icon:"none"})},n("4626")},b0eb:function(t,e,n){"use strict";var a=n("f6f7"),i=n.n(a);i.a},e476:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.queryOrgInfo=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.queryOrgInfo,data:e,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryStaffListInfo=function(t,e,n){return new Promise((function(a,s){t.context.get({url:i.default.queryStaffListInfo,data:e,success:function(t){a(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.uploadImageAsync=function(t,e,n){return new Promise((function(a,s){e.context.post({url:i.default.uploadImage,data:t,success:function(t){if(200==t.statusCode){var e=t.data;a(e)}},fail:function(t){uni.hideLoading(),uni.showToast({title:i18n.t("server_error"),icon:"none"})}},n)}))},n("bf0f");var i=a(n("f0de"))},ed1d:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".footer-step-fixed[data-v-b3bfd952]{width:100%;position:fixed;left:0;bottom:0;display:flex;justify-content:space-between;-moz-box-shadow:0 -5px 5px #ccc;box-shadow:0 -5px 5px #ccc;background-color:#fff}.step-item[data-v-b3bfd952]{width:100%;text-align:center;height:%?80?%;line-height:%?80?%}.cu-list.menu-avatar>.cu-item .content-left[data-v-b3bfd952]{left:%?30?%}.cu-list+.cu-list[data-v-b3bfd952]{margin-top:%?20?%}.flex-item[data-v-b3bfd952]{display:flex;flex-direction:row}.w50[data-v-b3bfd952]{width:50%}.flex uni-label[data-v-b3bfd952], .flex-item uni-label[data-v-b3bfd952]{width:%?100?%}.use-number[data-v-b3bfd952]{width:%?200?%;border-radius:%?15?%}.remark[data-v-b3bfd952]{width:80%;border-radius:%?15?%}.item-remove[data-v-b3bfd952]{border-radius:%?15?%;padding:%?2?% %?10?%}",""]),t.exports=e},f209:function(t,e,n){"use strict";n.r(e);var a=n("261b"),i=n("34a2");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("b0eb");var o=n("828b"),f=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"b3bfd952",null,!1,a["a"],void 0);e["default"]=f.exports},f6f7:function(t,e,n){var a=n("ed1d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("6c758cce",a,!0,{sourceMap:!1,shadowMode:!1})},f85e:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3939"),s=n("9ef9"),o=a(n("9b8e")),f=a(n("44ab"));o.default.prototype.$preventClick=s.preventClick;var r={data:function(){return{onoff:!0,transferDesc:"",staffId:"",staffName:"",communityId:"",planId:"",planName:"",originalPlanUserId:"",originalPlanUserName:"",planEndTime:"",planInsTime:"",planUserId:"",planUserName:"",signType:"",signTypeName:"",state:"",stateName:"",statusCd:"",taskId:"",timeStr:"",taskType:2e3}},components:{selectStaff:f.default},onLoad:function(t){this.java110Context.onLoad(),t=JSON.parse(t.task),this.communityId=t.communityId,this.planId=t.planId,this.planName=t.planName,this.originalPlanUserId=t.originalPlanUserId,this.originalPlanUserName=t.originalPlanUserName,this.planEndTime=t.planEndTime,this.planInsTime=t.planInsTime,this.planUserId=t.planUserId,this.planUserName=t.planUserName,this.signType=t.signType,this.signTypeName=t.signTypeName,this.state=t.state,this.stateName=t.stateName,this.statusCd=t.statusCd,this.taskId=t.taskId,this.timeStr=t.timeStr},methods:{_openChooseStaffModel:function(){this.$refs.selectstaff.switchShow()},_getStaffInfo:function(t){this.staffId=t.userId,this.staffName=t.userName},save:function(){var t="";if(""==this.transferDesc&&(t="请输入说明"),""==this.staffId&&(t="请选择员工"),this.staffId==this.java110Context.getUserInfo().userId&&(t="不能流转给自己"),""!=t)return this.onoff=!0,void this._showToast(t);var e={transferDesc:this.transferDesc,staffId:this.staffId,staffName:this.staffName,communityId:this.communityId,planId:this.planId,planName:this.planName,originalPlanUserId:this.originalPlanUserId,originalPlanUserName:this.originalPlanUserName,planEndTime:this.planEndTime,planInsTime:this.planInsTime,planUserId:this.planUserId,planUserName:this.planUserName,signType:this.signType,signTypeName:this.signTypeName,state:this.state,stateName:this.stateName,statusCd:this.statusCd,taskId:this.taskId,taskType:this.taskType};(0,i.UpdateMaintainanceTask)(this,e,!0).then((function(t){0!=t.code||uni.navigateBack({delta:1})}))},_showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";uni.showToast({title:t,icon:e})}}};e.default=r},feda:function(t,e,n){"use strict";var a=n("52ff"),i=n.n(a);i.a}}]);