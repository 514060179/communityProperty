(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-detail-noticeDetail"],{"0ef3":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.formatRichText=o,e.replaceImgSrc=function(t,e){if(console.log("_content",(0,c.default)(t)),(0,n.isEmpty)(t))return t;t=t.replaceAll("&amp;","&");var a=/<img [^>]*src=['"]([^'"]+)[^>]*>/g,i=t.match(a);if(!(0,n.isEmpty)(i))for(var r=0;r<i.length;r++){var d=i[r].replace(a,"$1");"http"==d.slice(0,4)||"https"==d.slice(0,5)||(t=t.replace(d,e+d))}return o(t)};var c=i(a("fcf3"));a("5c47"),a("a1c1"),a("45da"),a("2c10"),a("f7a5");var n=a("4361");function o(t){var e=t.replace(/<img[^>]*>/gi,(function(t,e){return t=t.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,""),t=t.replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,""),t=t.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),t}));return e=e.replace(/style="[^"]+"/gi,(function(t,e){return t=t.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;"),t})),e=e.replace(/<br[^>]*\/>/gi,""),e=e.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:block;margin:10px 0;"'),e}},"17ad":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("5c47"),a("a1c1"),a("d4b5");var c=a("0ef3"),n=i(a("0c9b")),o=i(a("f0de")),r={data:function(){return{notice:{},noticeId:""}},onLoad:function(t){this.java110Context.onLoad();var e=t.noticeId;this.noticeId=e,this._loadNoticeDetail()},onShow:function(){},methods:{_loadNoticeDetail:function(){var t=this;t.communityId=this.java110Context.getUserInfo().communityId,this.java110Context.request({header:t.java110Context.getHeaders(),url:o.default.GetNoticeListUrl,method:"GET",data:{communityId:t.communityId,page:1,row:10,noticeId:t.noticeId},success:function(e){console.log(e);var a=e.data.notices[0];a.timeStr=a.startTime.replace(/:\d{1,2}$/," "),a.context=(0,c.replaceImgSrc)(a.context,n.default.baseUrl),t.notice=a}},"{}"==JSON.stringify(this.notice))}}};e.default=r},"631d":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,".user-container[data-v-fc8a4d2c]{padding:%?25?% %?10?%;background-color:#f0f0f0\n\t/*border: 1px solid black;*/}.notice[data-v-fc8a4d2c]{margin:%?10?% %?7?%;padding:%?25?%;background-color:#fff;border-radius:%?7?%}.title[data-v-fc8a4d2c]{border-bottom:%?1?% solid #dedede;font-weight:700;font-size:%?34?%;color:#0a0}.content[data-v-fc8a4d2c]{padding:%?15?% 0;font-size:%?25?%;color:#7b7b7b}.footer[data-v-fc8a4d2c]{padding:%?15?% 0;font-size:%?22?%;color:#adadad}",""]),t.exports=e},a63d:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user-container"},[a("v-uni-view",{staticClass:"flex-sub text-center bg-white"},[a("v-uni-view",{staticClass:"solid-bottom text-xl padding"},[a("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(t.notice.title))])],1),a("v-uni-view",{staticClass:"footer"},[t._v(t._s(t.$t("time"))+": "+t._s(t.notice.timeStr))])],1),a("v-uni-view",{staticClass:"flex-sub bg-white"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-rich-text",{staticClass:"solid-bottom text-df padding",attrs:{nodes:t.notice.context}})],1)],1)],1)},c=[]},bc7b:function(t,e,a){"use strict";var i=a("f65d"),c=a.n(i);c.a},bfe2:function(t,e,a){"use strict";a.r(e);var i=a("17ad"),c=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=c.a},f65d:function(t,e,a){var i=a("631d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=a("967d").default;c("3a7a0f02",i,!0,{sourceMap:!1,shadowMode:!1})},f7ce:function(t,e,a){"use strict";a.r(e);var i=a("a63d"),c=a("bfe2");for(var n in c)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return c[t]}))}(n);a("bc7b");var o=a("828b"),r=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,"fc8a4d2c",null,!1,i["a"],void 0);e["default"]=r.exports}}]);