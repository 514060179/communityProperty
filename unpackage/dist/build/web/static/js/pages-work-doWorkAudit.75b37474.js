(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-doWorkAudit"],{"00f7":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("bf0f"),a("2797"),a("c223");var n=a("a4e1"),i=(a("dae2"),{name:"selectOneStaffs",data:function(){return{showModel:!1,staffs:[],page:1,selectStaffIds:[]}},mounted:function(){this._loadStaffList()},methods:{switchShow:function(t){this.showModel=!this.showModel,t&&this.checkboxChange({detail:{value:t}})},_loadStaffList:function(){var t=this,e={page:1,row:50,communityId:this.communityId};(0,n.queryStaffListInfo)(this,e).then((function(e){var a=e.data.staffs;a.forEach((function(t){t.staffId=t.userId,t.staffName=t.name})),t.staffs=t.staffs.concat(a)}))},checkboxChange:function(t){console.log(t);var e=t.detail.value;this.selectStaffIds=e,this.staffs.forEach((function(t,a){e==t.staffId?t.checked=!0:t.checked=!1}))},saveSelected:function(){var t=this.selectStaffIds,e=this.staffs;if(t){for(var a={},n=0;n<e.length;n++)t==e[n].staffId&&(a=e[n]);this.$emit("getStaffs",a),this.showModel=!1}else uni.showToast({title:"请选择员工",icon:"none"})},cancel:function(){this.showModel=!1}}});e.default=i},"04c0":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-modal bottom-modal",class:t.showModel?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white "},[a("v-uni-view",{staticClass:"action"},[t._v("选择员工")]),a("v-uni-view",{staticClass:"action"})],1),a("v-uni-scroll-view",{staticClass:"bg-white",staticStyle:{height:"600upx"},attrs:{"scroll-y":!0}},[a("v-uni-radio-group",{staticStyle:{width:"100%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.staffs,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name)+"("+t._s(e.orgName)+")")]),a("v-uni-view",[a("v-uni-radio",{class:e.checked?"checked":"",attrs:{checked:!!e.checked,value:e.staffId}})],1)],1)})),1)],1),a("v-uni-view",{staticClass:"btn-box bg-white"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel()}}},[t._v("取消")]),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveSelected()}}},[t._v("确认")])],1)],1)],1)},i=[]},"1e5c":function(t,e,a){"use strict";a.r(e);var n=a("ded6"),i=a("34f3");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var o=a("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5da6c5bf",null,!1,n["a"],void 0);e["default"]=c.exports},"34f3":function(t,e,a){"use strict";a.r(e);var n=a("7d03"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"5cb6":function(t,e,a){var n=a("b305");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("b237c2e8",n,!0,{sourceMap:!1,shadowMode:!1})},"7d03":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("23d0")),s=n(a("f262")),o=n(a("8913")),c=a("3e42"),f={data:function(){return{actions:[{name:"办理",value:"C"},{name:"转单",value:"T"}],actionIndex:0,action:"C",content:"",pathUrl:"",taskId:"",workId:"",staffId:"",staffName:"",workName:"",createUserName:""}},components:{vcUploadFile:i.default,selectOneStaffs:s.default,UploadDemo:o.default},computed:{},onLoad:function(t){this.taskId=t.taskId,this.workId=t.workId,this._loadWorkTask()},methods:{_loadWorkTask:function(){var t=this;(0,c.getTaskWork)(this,{page:1,row:1,workId:this.workId,taskId:this.taskId}).then((function(e){t.workName=e.data[0].workName,t.createUserName=e.data[0].createUserName}))},actionChange:function(t){this.actionIndex=t.detail.value,this.action=this.actions[this.actionIndex].value},uploadFile:function(t){console.log(t),this.pathUrl=t.realFileName},_selectStaff:function(){this.$refs.selectOneStaffsRef.switchShow()},getStaffs:function(t){console.log(t),t.staffId&&(this.staffId=t.staffId,this.staffName=t.staffName)},submitWorkOrder:function(){(0,c.finishWorkTask)(this,{taskId:this.taskId,auditCode:this.action,auditMessage:this.content,staffId:this.staffId,staffName:this.staffName,pathUrl:this.pathUrl}).then((function(t){uni.navigateBack()}))}}};e.default=f},b305:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,".select-resource[data-v-8db7fcf2]{position:fixed;top:%?100?%;left:0;background-color:#fff;width:100%;height:100%;overflow-y:scroll;z-index:1;padding-bottom:%?100?%}.btn-box[data-v-8db7fcf2]{padding:%?40?% 0;display:flex;flex-direction:row}.btn-box uni-button[data-v-8db7fcf2]{width:40%}.cu-list.menu-avatar>.cu-item .content[data-v-8db7fcf2]{left:%?40?%;width:80%}.cu-list[data-v-8db7fcf2]{margin:0}",""]),t.exports=e},ba28:function(t,e,a){"use strict";a.r(e);var n=a("00f7"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},ded6:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("title")))]),a("v-uni-view",[t._v(t._s(t.workName))])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("submitter")))]),a("v-uni-view",[t._v(t._s(t.createUserName))])],1),a("v-uni-view",{staticClass:"cu-form-group margin-top-xs"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("action")))]),a("v-uni-picker",{attrs:{value:t.actionIndex,range:t.actions,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.actionChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.actions[t.actionIndex].name))])],1)],1),"T"==t.action?a("v-uni-view",{staticClass:"cu-form-group arrow margin-top-xs"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("next_processor")))]),a("v-uni-view",[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._selectStaff.apply(void 0,arguments)}}},[t._v(t._s(t.staffName||t.$t("please_select")))]),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-form-group margin-top-sm"},[a("v-uni-textarea",{attrs:{placeholder:t.$t("mandatory_enter_content")},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("v-uni-view",{staticClass:"margin-top-sm"},[a("upload-demo",{ref:"vcUploadFileRel",attrs:{type:"file"},on:{uploadFile:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadFile.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"flex flex-direction margin-top-lg"},[a("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitWorkOrder.apply(void 0,arguments)}}},[t._v("提交")])],1),a("select-one-staffs",{ref:"selectOneStaffsRef",on:{getStaffs:function(e){arguments[0]=e=t.$handleEvent(e),t.getStaffs.apply(void 0,arguments)}}})],1)},i=[]},e5f2:function(t,e,a){"use strict";var n=a("5cb6"),i=a.n(n);i.a},f262:function(t,e,a){"use strict";a.r(e);var n=a("04c0"),i=a("ba28");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("e5f2");var o=a("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"8db7fcf2",null,!1,n["a"],void 0);e["default"]=c.exports}}]);