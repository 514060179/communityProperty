(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-excuteInspection-excuteInspection"],{"08fe":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".block__title[data-v-c8e7ba54]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}",""]),t.exports=e},"6d1b":function(t,e,n){"use strict";n.r(e);var i=n("fbf4"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},9681:function(t,e,n){var i=n("08fe");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("967d").default;s("3a3d6d95",i,!0,{sourceMap:!1,shadowMode:!1})},a3f8:function(t,e,n){"use strict";n.r(e);var i=n("f9f7"),s=n("6d1b");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("d926");var o=n("828b"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"c8e7ba54",null,!1,i["a"],void 0);e["default"]=c.exports},d926:function(t,e,n){"use strict";var i=n("9681"),s=n.n(i);s.a},f9f7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"block__title"},[t._v(t._s(t.inspectionPlanName))]),n("v-uni-view",{staticClass:"cu-timeline margin-left-xs margin-right-xs"},[n("v-uni-view",{staticClass:"cu-time"},[t._v(t._s(t.$t("巡检点")))]),t._l(t.taskDetails,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item cuIcon-noticefill",class:"20200407"==e.state?"text-blue":""},[n("v-uni-view",{staticClass:"content shadow-blur",class:"20200407"==e.state?"bg-blue":""},[t._v(t._s(e.inspectionName)),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:"20200407"!=e.state&&e.pointStartTime&&e.pointEndTime,expression:"item.state != '20200407' && item.pointStartTime && item.pointEndTime"}]},[t._v("("+t._s(e.pointStartTime)+"\n\t\t\t\t\t- "+t._s(e.pointEndTime)+")")])],1),"20200407"==e.state?n("v-uni-view",{staticClass:"bg-blue content"},[n("v-uni-text",[t._v(t._s(t.$t("处理意见"))+"：")]),t._v(t._s(e.description))],1):t._e(),"20200407"==e.state&&e.photos.length>0?n("v-uni-view",{staticClass:"margin-top grid text-center col-3 grid-square"},t._l(e.photos,(function(e,s){return n("v-uni-view",{key:s},[n("v-uni-image",{attrs:{mode:"scaleToFill","data-url":e.url,src:e.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(i,s)}}})],1)})),1):t._e(),"20200407"!=e.state?n("v-uni-view",{staticClass:"text-right"},[n("v-uni-button",{staticClass:"cu-btn  line-blue block margin-tb-sm lg ",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._excuteInspection(e)}}},[n("v-uni-text",{staticClass:"cuIcon-upload"}),t._v(t._s(t.$t("巡检")))],1)],1):t._e()],1)}))],2)],1)},s=[]},fbf4:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f"),n("2797"),n("aa9c");var s=n("2d9e"),a=i(n("f0de")),o={data:function(){return{taskId:"",inspectionPlanName:"",scroll:0,communityId:"",userId:"",userName:"",taskDetails:[]}},onLoad:function(t){this.java110Context.onLoad(),this.taskId=t.taskId,this.inspectionPlanName=t.inspectionPlanName,this.communityId=(0,s.getCurrentCommunity)().communityId;var e=this.java110Context.getUserInfo();this.userName=e.userName,this.userId=e.userId},onShow:function(){this._queryTaskDetail()},methods:{_queryTaskDetail:function(){var t=this;t.java110Context.request({header:t.java110Context.getHeaders(),url:a.default.listInspectionTaskDetails,method:"GET",data:{communityId:t.communityId,page:1,row:100,taskId:t.taskId},success:function(e){var n=e.data.inspectionTaskDetails;t.taskDetails=n}},0==this.taskDetails.length)},ScrollSteps:function(){this.scroll=9==this.scroll?0:this.scroll+1},_excuteInspection:function(t){console.log("巡检点",t),uni.navigateTo({url:"/pages/excuteOneInspection/excuteOneInspection?taskDetailId="+t.taskDetailId+"&taskId="+t.taskId+"&inspectionId="+t.inspectionId+"&inspectionName="+t.inspectionName+"&itemId="+t.itemId})},preview:function(t,e){var n=[];this.taskDetails.forEach((function(e,i){i==t&&e.photos.forEach((function(t){n.push(t.url)}))})),uni.previewImage({urls:n,current:e})}}};e.default=o}}]);