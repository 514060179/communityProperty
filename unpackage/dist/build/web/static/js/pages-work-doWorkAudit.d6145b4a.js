(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-doWorkAudit"],{"0ea9":function(t,a,e){"use strict";e.r(a);var n=e("fc04"),i=e("8fac");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("bedd");var o=e("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"b48aaf28",null,!1,n["a"],void 0);a["default"]=c.exports},"11bb":function(t,a,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("d832")),s=n(e("0ea9")),o=n(e("d9aa")),c=e("a156"),f={data:function(){return{actions:[{name:"办理",value:"C"},{name:"转单",value:"T"}],actionIndex:0,action:"C",content:"",pathUrl:"",taskId:"",workId:"",staffId:"",staffName:"",workName:"",createUserName:""}},components:{vcUploadFile:i.default,selectOneStaffs:s.default,UploadDemo:o.default},computed:{},onLoad:function(t){this.taskId=t.taskId,this.workId=t.workId,this._loadWorkTask()},methods:{_loadWorkTask:function(){var t=this;(0,c.getTaskWork)(this,{page:1,row:1,workId:this.workId,taskId:this.taskId},!0).then((function(a){t.workName=a.data[0].workName,t.createUserName=a.data[0].createUserName}))},actionChange:function(t){this.actionIndex=t.detail.value,this.action=this.actions[this.actionIndex].value},uploadFile:function(t){console.log(t),this.pathUrl=t.realFileName},_selectStaff:function(){this.$refs.selectOneStaffsRef.switchShow()},getStaffs:function(t){console.log(t),t.staffId&&(this.staffId=t.staffId,this.staffName=t.staffName)},submitWorkOrder:function(){(0,c.finishWorkTask)(this,{taskId:this.taskId,auditCode:this.action,auditMessage:this.content,staffId:this.staffId,staffName:this.staffName,pathUrl:this.pathUrl},!0).then((function(t){uni.navigateBack()}))}}};a.default=f},"2a1a":function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,".select-resource[data-v-b48aaf28]{position:fixed;top:%?100?%;left:0;background-color:#fff;width:100%;height:100%;overflow-y:scroll;z-index:1;padding-bottom:%?100?%}.btn-box[data-v-b48aaf28]{padding:%?40?% 0;display:flex;flex-direction:row}.btn-box uni-button[data-v-b48aaf28]{width:40%}.cu-list.menu-avatar>.cu-item .content[data-v-b48aaf28]{left:%?40?%;width:80%}.cu-list[data-v-b48aaf28]{margin:0}",""]),t.exports=a},3091:function(t,a,e){"use strict";e.r(a);var n=e("11bb"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"522f":function(t,a,e){"use strict";e.r(a);var n=e("72b5"),i=e("3091");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o=e("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"20f7d47b",null,!1,n["a"],void 0);a["default"]=c.exports},"72b5":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("title")))]),e("v-uni-view",[t._v(t._s(t.workName))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("submitter")))]),e("v-uni-view",[t._v(t._s(t.createUserName))])],1),e("v-uni-view",{staticClass:"cu-form-group margin-top-xs"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("action")))]),e("v-uni-picker",{attrs:{value:t.actionIndex,range:t.actions,"range-key":"name"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.actionChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.actions[t.actionIndex].name))])],1)],1),"T"==t.action?e("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("next_processor")))]),e("v-uni-view",[e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t._selectStaff.apply(void 0,arguments)}}},[t._v(t._s(t.staffName||t.$t("please_select")))]),e("v-uni-text",{staticClass:"cuIcon-right"})],1)],1):t._e(),e("v-uni-view",{staticClass:"cu-form-group margin-top-sm"},[e("v-uni-textarea",{attrs:{placeholder:t.$t("mandatory_enter_content")},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),e("v-uni-view",{staticClass:"margin-top-sm"},[e("upload-demo",{ref:"vcUploadFileRel",attrs:{type:"file"},on:{uploadFile:function(a){arguments[0]=a=t.$handleEvent(a),t.uploadFile.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"flex flex-direction margin-top-lg"},[e("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitWorkOrder.apply(void 0,arguments)}}},[t._v("提交")])],1),e("select-one-staffs",{ref:"selectOneStaffsRef",on:{getStaffs:function(a){arguments[0]=a=t.$handleEvent(a),t.getStaffs.apply(void 0,arguments)}}})],1)},i=[]},"8fac":function(t,a,e){"use strict";e.r(a);var n=e("a861"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},a861:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("bf0f"),e("2797"),e("c223");var n=e("e476"),i=(e("2d9e"),{name:"selectOneStaffs",data:function(){return{showModel:!1,staffs:[],page:1,selectStaffIds:[]}},mounted:function(){this._loadStaffList()},methods:{switchShow:function(t){this.showModel=!this.showModel,t&&this.checkboxChange({detail:{value:t}})},_loadStaffList:function(){var t=this,a={page:1,row:50,communityId:this.communityId};(0,n.queryStaffListInfo)(this,a,0==this.staffs.length).then((function(a){var e=a.data.staffs;e.forEach((function(t){t.staffId=t.userId,t.staffName=t.name})),t.staffs=t.staffs.concat(e)}))},checkboxChange:function(t){console.log(t);var a=t.detail.value;this.selectStaffIds=a,this.staffs.forEach((function(t,e){a==t.staffId?t.checked=!0:t.checked=!1}))},saveSelected:function(){var t=this.selectStaffIds,a=this.staffs;if(t){for(var e={},n=0;n<a.length;n++)t==a[n].staffId&&(e=a[n]);this.$emit("getStaffs",e),this.showModel=!1}else uni.showToast({title:"请选择员工",icon:"none"})},cancel:function(){this.showModel=!1}}});a.default=i},b63e:function(t,a,e){var n=e("2a1a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("3446c78a",n,!0,{sourceMap:!1,shadowMode:!1})},bedd:function(t,a,e){"use strict";var n=e("b63e"),i=e.n(n);i.a},fc04:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-modal bottom-modal",class:t.showModel?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white "},[e("v-uni-view",{staticClass:"action"},[t._v("选择员工")]),e("v-uni-view",{staticClass:"action"})],1),e("v-uni-scroll-view",{staticClass:"bg-white",staticStyle:{height:"600upx"},attrs:{"scroll-y":!0}},[e("v-uni-radio-group",{staticStyle:{width:"100%"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.staffs,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(a.name)+"("+t._s(a.orgName)+")")]),e("v-uni-view",[e("v-uni-radio",{class:a.checked?"checked":"",attrs:{checked:!!a.checked,value:a.staffId}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"btn-box bg-white"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancel()}}},[t._v("取消")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveSelected()}}},[t._v("确认")])],1)],1)],1)},i=[]}}]);