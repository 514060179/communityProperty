(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice"],{"370c":function(t,e,i){var a=i("ae8d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("72e7e951",a,!0,{sourceMap:!1,shadowMode:!1})},6470:function(t,e,i){"use strict";i.r(e);var a=i("6ea4"),n=i("76cf");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a7ab");var c=i("828b"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"b988d31a",null,!1,a["a"],void 0);e["default"]=s.exports},"6ea4":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-container"},[t._l(t.notices,(function(e,a){return t.notices.length>0?i("v-uni-view",{key:a,staticClass:"cu-list menu",attrs:{"data-item":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoDetail(e)}}},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content padding-tb-sm"},[i("v-uni-view",[i("v-uni-text",{staticClass:"cuIcon-notification text-cut text-green margin-right-xs"}),i("v-uni-view",{staticClass:"text-cut",staticStyle:{width:"85%"}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"text-gray text-sm"},[i("v-uni-text",{staticClass:"margin-right-xs"},[t._v(t._s(t.$t("release_time"))+"：")]),t._v(t._s(e.timeStr))],1)],1)],1)],1):t._e()})),0===t.notices.length?i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-notification text-grey"}),i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.$t("no_announcement_is_available")))])],1),i("v-uni-view",{staticClass:"action"})],1)],1):t._e()],2)},n=[]},"76cf":function(t,e,i){"use strict";i.r(e);var a=i("a17b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},a17b:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("bf0f"),i("2797"),i("5c47"),i("a1c1");var n=i("dae2"),o=a(i("f3d1")),c={data:function(){return{communityId:"",notices:[],currPageIndex:0,pageSize:10}},onLoad:function(){var t=this;this.java110Context.onLoad(),t.communityId=(0,n.getCurrentCommunity)().communityId,t.java110Context.request({header:t.java110Context.getHeaders(),url:o.default.GetNoticeListUrl,method:"GET",data:{communityId:t.communityId,page:1,row:10,noticeTypeCd:1001},success:function(e){console.log(e),e.data.notices.forEach((function(t,e){t.timeStr=t.startTime.replace(/:\d{1,2}$/," ")})),t.notices=e.data.notices}})},onShow:function(){},methods:{gotoDetail:function(t){uni.navigateTo({url:"/pages/notice/detail/noticeDetail?noticeId="+t.noticeId})}}};e.default=c},a7ab:function(t,e,i){"use strict";var a=i("370c"),n=i.n(a);n.a},ae8d:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,".user-container[data-v-b988d31a]{padding:%?25?% %?10?%;background-color:#f0f0f0\n\t/*border: 1px solid black;*/}.notice[data-v-b988d31a]{margin:%?10?% %?7?%;padding:%?25?%;background-color:#fff;border-radius:%?7?%}.title[data-v-b988d31a]{border-bottom:%?1?% solid #dedede;font-weight:700;font-size:%?34?%;color:#0a0}.content[data-v-b988d31a]{padding:%?15?% 0;font-size:%?25?%;color:#7b7b7b\n\t/* overflow : hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; \n    -webkit-box-orient: vertical; */}.txt[data-v-b988d31a]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.footer[data-v-b988d31a]{padding:%?15?% 0;font-size:%?22?%;color:#adadad}.cu-list+.cu-list[data-v-b988d31a]{margin-top:10px}",""]),t.exports=e}}]);