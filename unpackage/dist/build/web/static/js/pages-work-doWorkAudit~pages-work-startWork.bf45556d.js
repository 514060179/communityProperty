(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-doWorkAudit~pages-work-startWork"],{2311:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("08eb"),n("18f7"),n("de6c"),n("bf0f"),n("4626"),n("5ac7"),n("aa9c");var o=a(n("2634")),r=a(n("5de6")),i=a(n("2fdc")),u=n("c929"),l=n("246a"),c={data:function(){return{id:0,uploadOptions:{}}},methods:{renderProps:function(e){var t=this,n=e.id,a=e.renderInput,o=e.upload;a&&(this.id=n,this.uploadOptions=o,this.$nextTick((function(){var e,a=document.getElementById("xe-upload-".concat(n));a.addEventListener("change",(function(){t.handleUpload()})),null===a||void 0===a||null===(e=a.click)||void 0===e||e.call(a)})))},handleUpload:function(){var e=this;return(0,i.default)((0,o.default)().mark((function t(){var n,a,i,c,s,d,f,p,h,v,m,w,g,y,b,x,_;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.uploadOptions||{},a=n.url,i=n.name,c=n.header,s=void 0===c?{}:c,d=n.formData,f=void 0===d?{}:d,p=document.getElementById("xe-upload-".concat(e.id)),p.files[0]){t.next=4;break}return t.abrupt("return");case 4:h=Array.from(p.files),v=[],m=(0,o.default)().mark((function t(n){var c,d,m,w,g,y,b,x,_,k;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=h[n],d="file",c.type.includes("image")&&(d="image"),c.type.includes("video")&&(d="video"),m={size:c.size,name:c.name,type:c.type,fileType:d,tempFilePath:"",base64Url:""},a){t.next=15;break}return t.next=8,(0,l.awaitWrap)((0,l.fileToBase64)(p.files[n]));case 8:return w=t.sent,g=(0,r.default)(w,2),y=g[0],b=g[1],y||(m.base64Url=b),v.push(m),t.abrupt("return","continue");case 15:for(_ in x=new FormData,x.append(i,p.files[n],c.name),f)x.append(_,f[_]);k=function(t){if(t.lengthComputable){var a=t.loaded/t.total*100;e.handleRenderEmits({type:"onprogress",data:{progress:Math.floor(a),current:n+1,total:h.length}})}},v.push((0,u.appUploadFile)({url:a,header:s,formData:x},m,k));case 21:case"end":return t.stop()}}),t)})),w=0;case 8:if(!(w<h.length)){t.next=16;break}return t.delegateYield(m(w),"t0",10);case 10:if(g=t.t0,"continue"!==g){t.next=13;break}return t.abrupt("continue",13);case 13:w+=1,t.next=8;break;case 16:if(a){t.next=18;break}return t.abrupt("return",e.handleRenderEmits({type:"choose",data:v}));case 18:return e.handleRenderEmits({type:"onprogress",data:{progress:0,current:1,total:h.length}}),t.next=21,(0,l.awaitWrap)(Promise.all(v));case 21:if(y=t.sent,b=(0,r.default)(y,2),x=b[0],_=b[1],!x){t.next=27;break}return t.abrupt("return",e.handleRenderEmits({type:"warning",data:x}));case 27:e.handleRenderEmits({type:"success",data:_});case 28:case"end":return t.stop()}}),t)})))()},handleRenderEmits:function(e){this.$ownerInstance.callMethod("handleEmits",e)}}};t.default=c},"23d0":function(e,t,n){"use strict";n.r(t);var a=n("9b99"),o=n("b15e");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var i=n("828b"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"5876b766",null,!1,a["a"],void 0);t["default"]=u.exports},"246a":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=t.isArray=t.fileToBlob=t.fileToBase64=t.deepMerge=t.deepClone=t.base64ToPath=t.awaitWrap=void 0;var o=a(n("fcf3"));n("bf0f"),n("c223"),n("18f7"),n("de6c"),n("dc89"),n("2425"),n("7a76"),n("c9b5"),n("dd2b"),n("5c47"),n("2c10");var r=function(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)};t.isObject=r;var i=function(e){return!!e&&Array.isArray(e)};t.isArray=i;t.awaitWrap=function(e){return e.then((function(e){return[null,e]})).catch((function(e){return[e,{}]}))};var u=function e(t){if(!r(t)&&!i(t))return t;var n=i(t)?[]:{};for(var a in t)t.hasOwnProperty(a)&&(t[a]&&"object"===(0,o.default)(t[a])?(n[a]=i(t[a])?[]:{},n[a]=e(t[a])):n[a]=t[a]);return n};t.deepClone=u;t.deepMerge=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=u(t),"object"!==(0,o.default)(t)||"object"!==(0,o.default)(n))return!1;for(var a in n)n.hasOwnProperty(a)&&(a in t?"object"!==(0,o.default)(t[a])||"object"!==(0,o.default)(n[a])?t[a]=n[a]:t[a].concat&&n[a].concat?t[a]=t[a].concat(n[a]):t[a]=e(t[a],n[a]):t[a]=n[a]);return t};t.fileToBlob=function(e){if(e){var t=e.type,n=new Blob([e],{type:t||"application/*"}),a=window.URL.createObjectURL(n);return a}};function l(e){var t=e.split(",");return t[t.length-1]}function c(e,t){for(var n=e.split("."),a=t.split("."),o=!1,r=0;r<a.length;r++){var i=n[r]-a[r];if(0!==i){o=i>0;break}}return o}t.fileToBase64=function(e){if(e)return new Promise((function(t,n){var a=new FileReader;a.onloadend=function(){var e=a.result;t(e)},a.onerror=function(){n({mode:"fileToBase64",data:{errMsg:"File to base64 fail."}})},a.readAsDataURL(e)}))};var s=0;function d(){return Date.now()+String(s++)}t.base64ToPath=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n,a){if("object"!==("undefined"===typeof plus?"undefined":(0,o.default)(plus)))return a(new Error("not support"));var r="";if(t){var i=t.split("."),u=i.splice(-1);r="".concat(i.join("."),"-").concat(d(),".").concat(u)}else{var s=e.split(",")[0].match(/data\:\S+\/(\S+);/);s||a(new Error("base64 error"));var f=s[1];r="".concat(d(),".").concat(f)}var p="".concat("_doc","/").concat("uniapp_temp","/").concat(r);if(c("Android"===plus.os.name?"1.9.9.80627":"1.9.9.80472",plus.runtime.innerVersion)){var h=new plus.nativeObj.Bitmap(r);h.loadBase64Data(e,(function(){h.save(p,{},(function(){h.clear(),n(p)}),(function(e){h.clear(),a(e)}))}),(function(e){h.clear(),a(e)}))}else plus.io.resolveLocalFileSystemURL("_doc",(function(t){t.getDirectory("uniapp_temp",{create:!0,exclusive:!1},(function(t){t.getFile(r,{create:!0,exclusive:!1},(function(t){t.createWriter((function(t){t.onwrite=function(){n(p)},t.onerror=a,t.seek(0),t.writeAsBinary(l(e))}),a)}),a)}),a)}),a)}))}},2634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t.default=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,n){return e[t]=n}}function d(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),u=new O(a||[]);return r(i,"_invoke",{value:k(e,n,u)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=d;var p={};function h(){}function v(){}function m(){}var w={};s(w,u,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==n&&o.call(y,u)&&(w=y);var b=m.prototype=h.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var n;r(this,"_invoke",{value:function(r,i){function u(){return new t((function(n,u){(function n(r,i,u,l){var c=f(e[r],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==(0,a.default)(d)&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,u,l)}),(function(e){n("throw",e,u,l)})):t.resolve(d).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,l)}))}l(c.arg)})(r,i,n,u)}))}return n=n?n.then(u,u):u()}})}function k(e,t,n){var a="suspendedStart";return function(o,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw r;return E()}for(n.method=o,n.arg=r;;){var i=n.delegate;if(i){var u=P(i,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=f(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function P(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function L(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=m,r(b,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(_.prototype),s(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,a,o,r){void 0===r&&(r=Promise);var i=new _(d(t,n,a,o),r);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),s(b,c,"Generator"),s(b,u,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var u=o.call(r,"catchLoc"),l=o.call(r,"finallyLoc");if(u&&l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(u){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var o=a.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e},n("6a54"),n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("3872e"),n("4e9b"),n("114e"),n("c240"),n("926e"),n("7a76"),n("c9b5"),n("aa9c"),n("2797"),n("8a8d"),n("dc69"),n("f7a5");var a=function(e){return e&&e.__esModule?e:{default:e}}(n("fcf3"))},"27d5":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view")},o=[]},"2fdc":function(e,t,n){"use strict";function a(e,t,n,a,o,r,i){try{var u=e[r](i),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(a,o)}n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function u(e){a(i,o,r,u,l,"next",e)}function l(e){a(i,o,r,u,l,"throw",e)}u(void 0)}))}},n("bf0f")},"30f7":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("7a76"),n("c9b5")},"3e42":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.deleteWorkPool=function(e,t){return new Promise((function(n,a){uni.showLoading({title:"提交中..."}),e.context.post({url:o.default.deleteWorkPool,data:t,success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg}),0!=e.data.code||n(e.data)},fail:function(e){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.finishWorkCopy=function(e,t){return new Promise((function(n,a){uni.showLoading({title:"提交中..."}),e.context.post({url:o.default.finishWorkCopy,data:t,success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg}),0!=e.data.code||n(e.data)},fail:function(e){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.finishWorkTask=function(e,t){return new Promise((function(n,a){uni.showLoading({title:"提交中..."}),e.context.post({url:o.default.finishWorkTask,data:t,success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg}),0!=e.data.code||n(e.data)},fail:function(e){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getCopyWork=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.queryCopyWork,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getTaskWork=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.queryTaskWork,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkCopy=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkCopy,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkCycle=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkCycle,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkEvent=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkEvent,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkPool=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkPool,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkPoolFile=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkPoolFile,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.getWorkTask=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkTask,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryStartWork=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.queryStartWork,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryWorkType=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.listWorkType,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.saveWorkPool=function(e,t){return new Promise((function(n,a){uni.showLoading({title:"提交中..."}),e.context.post({url:o.default.saveWorkPool,data:t,success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg}),0!=e.data.code||n(e.data)},fail:function(e){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.updateWorkPool=function(e,t){return new Promise((function(n,a){uni.showLoading({title:"提交中..."}),e.context.post({url:o.default.updateWorkPool,data:t,success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg}),0!=e.data.code||n(e.data)},fail:function(e){uni.hideLoading(),wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var o=a(n("f3d1"))},"443f":function(e,t,n){"use strict";var a=n("b9aa"),o=n.n(a);o.a},4733:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(Array.isArray(e))return(0,a.default)(e)};var a=function(e){return e&&e.__esModule?e:{default:e}}(n("8d0b"))},"4a4a":function(e,t,n){var a=n("b549");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("967d").default;o("13a929a2",a,!0,{sourceMap:!1,shadowMode:!1})},7254:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={xeUpload:n("e176").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"upload-wrap"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],staticClass:"btn-click mgb-16 upload-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUploadClick.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"upload-icon",attrs:{src:e.icons.upload,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"upload-text"},[e._v("上传"+e._s(e.title[e.type]))])],1),e._l(e.fileList,(function(t,a){return n("v-uni-view",{key:a,staticClass:"mgb-16 file-wrap"},[n("v-uni-view",{staticClass:"btn-click file-line",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handlePreview(t)}}},[n("v-uni-view",{staticClass:"file-info"},[n("v-uni-image",{staticClass:"file-icon",attrs:{src:e.icons[t.fileType||"file"],mode:"aspectFill"}}),n("v-uni-text",{staticClass:"file-name"},[e._v(e._s(t.name||e.title[e.type]))])],1),e.disabled?e._e():n("v-uni-image",{staticClass:"file-icon",attrs:{src:e.icons.close,mode:"aspectFill"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.handleDeleteFile(a)}}})],1)],1)})),0===e.fileList.length&&e.disabled?n("v-uni-view",{staticClass:"mgb-16 file-wrap"},[n("v-uni-view",{staticClass:"file-line"},[n("v-uni-text",{staticClass:"file-empty"},[e._v(e._s(e.$t("not_data")))])],1)],1):e._e()],2),n("xe-upload",{ref:"XeUpload",attrs:{options:e.uploadOptions},on:{callback:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUploadCallback.apply(void 0,arguments)}}})],1)},r=[]},"756d":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("b7c7")),r=a(n("9b1b"));n("4626"),n("fd3c"),n("aa9c"),n("dd2b");var i=n("39d4"),u=a(n("91c2")),l={name:"UploadDemo",components:{},props:{type:{default:"image",type:String},list:{default:function(){return[]},type:Array},disabled:{default:!1,type:Boolean}},data:function(){return{uploadOptions:{url:u.default.baseUrl+"callComponent/upload/uploadVedio/upload",name:"uploadFile",header:(0,i.getHeaders)()},fileList:[],title:{image:"图片",video:"视频",file:"文件"},icons:{upload:"/static/upload/icon_upload.png",close:"/static/upload/icon_close.png",image:"/static/upload/icon_image.png",video:"/static/upload/icon_video.png",file:"/static/upload/icon_file.png"}}},watch:{list:{handler:function(e){console.log(e),this.fileList=e||[]},immediate:!0,deep:!0}},methods:{handleUploadClick:function(){var e=this;uni.getSystemInfo({success:function(t){console.log(t.platform),"ios"===t.platform?(console.log("当前设备是 iOS"),e.$refs.XeUpload.upload(e.type)):"android"===t.platform?(console.log("当前设备是 Android"),e.$refs.XeUpload.upload(e.type)):console.log("当前设备不是 iOS 或 Android")}})},handleUploadCallback:function(e){if(console.log("UploadCallback",e),["choose","success"].includes(e.type)){var t,n={fileName:e.data[0].response.fileName,realFileName:e.data[0].response.realFileName};this.$emit("uploadFile",n);var a=(e.data||[]).map((function(e){var t,n,a=e.response,o=e.tempFilePath,i=e.name,u=e.fileType,l=(null===a||void 0===a?void 0:a.result)||{},c=null!==(t=l.filePath)&&void 0!==t?t:o,s=null!==(n=l.fileName)&&void 0!==n?n:i;return(0,r.default)((0,r.default)({},l),{},{url:c,name:s,fileType:u})}));(t=this.fileList).push.apply(t,(0,o.default)(a))}},handleUploadFile:function(e){var t=e.url;console.log("UploadFile",t),uni.uploadFile({name:"uploadFile",url:u.default.baseUrl+"callComponent/upload/uploadVedio/upload",header:(0,i.getHeaders)(),filePath:t,success:function(e){console.log("handleUpload success",e);var t=JSON.parse(e.data);uni.showToast({title:t.success?"上传成功":"上传失败",icon:"none"})},fail:function(e){console.log("handleUpload fail",e),uni.showToast({title:"出错啦",icon:"none"})}})},handlePreview:function(e){var t=e.url;console.log("PreviewFile",t);var n=this.getFileType(t);if("image"===n)return uni.previewImage({current:t,urls:[t]});uni.showModal({title:"提示",content:t,showCancel:!1})},handleDeleteFile:function(e){this.fileList.splice(e,1)},getFileType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("."),n=t[t.length-1];if(!n)return"";n=n.toLocaleLowerCase();var a=["png","jpg","jpeg","bmp","gif","webp"];if(a.includes(n))return"image";var o=["mp4","m4v"];if(o.includes(n))return"video";var r=["mp3","m4a","wav","aac"];if(r.includes(n))return"audio";var i=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","plain"];return i.includes(n)?"office":"unknown"}}};t.default=l},"7e88":function(e,t,n){"use strict";var a=n("4a4a"),o=n.n(a);o.a},8913:function(e,t,n){"use strict";n.r(t);var a=n("7254"),o=n("df1b");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("443f");var i=n("828b"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"990a6ad6",null,!1,a["a"],void 0);t["default"]=u.exports},"9b99":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:" text-left"},[n("v-uni-view",{staticClass:"button_up_blank"}),n("v-uni-view",[e._v(e._s(e.fileName))]),n("v-uni-view",{staticClass:"flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-white margin-b-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._doUploadFile()}}},[e._v("上传附件")])],1)],1)],1)},o=[]},"9df8":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4626"),n("c223"),n("8f71"),n("bf0f"),n("fd3c"),n("18f7"),n("de6c");var o=a(n("9b1b")),r=a(n("2634")),i=a(n("5de6")),u=a(n("2fdc")),l=n("c929"),c=n("246a"),s={name:"XeUpload",props:{options:{default:function(){return{}},type:Object}},data:function(){return{id:0,renderInput:""}},computed:{mergeOptions:function(e){var t=e.options,n=void 0===t?{}:t;return(0,c.deepMerge)({name:"file"},n)},mergeProps:function(e){var t=e.id,n=e.renderInput,a=e.mergeOptions;return{id:t,renderInput:n,upload:a}}},methods:{upload:function(e){var t=arguments,n=this;return(0,u.default)((0,r.default)().mark((function a(){var o,u,c,s,d,f,p,h,v,m,w;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:{},u=[],!["image","video"].includes(e)){a.next=12;break}return a.next=5,(0,l.chooseMedia)(e,o);case 5:if(c=a.sent,s=(0,i.default)(c,2),d=s[0],f=s[1],!d){a.next=11;break}return a.abrupt("return",n.handleError(d));case 11:u=(null===f||void 0===f?void 0:f.tempFiles)||[];case 12:if(!["file"].includes(e)){a.next=24;break}return h={},v=null,a.next=17,(0,l.chooseFile)(o);case 17:if(m=a.sent,w=(0,i.default)(m,2),v=w[0],h=w[1],!v){a.next=23;break}return a.abrupt("return",n.handleError(v));case 23:u=(null===(p=h)||void 0===p?void 0:p.tempFiles)||[];case 24:n.handleUpload(u);case 25:case"end":return a.stop()}}),a)})))()},initInput:function(e){var t=this.id,n=e;(0,c.isArray)(e)&&(n=e.join(",")),this.renderInput='<input type="file" id="xe-upload-'.concat(t,'" name="xe-upload" ').concat(n?'accept="'+n+'"':""," />")},handleUpload:function(){var e=arguments,t=this;return(0,u.default)((0,r.default)().mark((function n(){var a,u,s,d,f,p,h;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:[],0!==a.filter((function(e){return Boolean(e)})).length){n.next=3;break}return n.abrupt("return");case 3:if(u=t.mergeOptions,u.url){n.next=6;break}return n.abrupt("return",t.handleEmits({type:"choose",data:a}));case 6:return s=a.map((function(e){return(0,l.uploadFile)((0,o.default)((0,o.default)({},u),{},{filePath:e.tempFilePath}),e)})),n.next=9,(0,c.awaitWrap)(Promise.all(s));case 9:if(d=n.sent,f=(0,i.default)(d,2),p=f[0],h=f[1],!p){n.next=15;break}return n.abrupt("return",t.handleError(p));case 15:t.handleEmits({type:"success",data:h});case 16:case"end":return n.stop()}}),n)})))()},handleError:function(e){this.handleEmits({type:"warning",data:e})},handleEmits:function(e){var t=this;return(0,u.default)((0,r.default)().mark((function n(){return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$emit("callback",e);case 1:case"end":return n.stop()}}),n)})))()}}};t.default=s},a4e1:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.queryOrgInfo=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.queryOrgInfo,data:t,success:function(e){n(e)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryStaffListInfo=function(e,t){return new Promise((function(n,a){e.context.get({url:o.default.queryStaffListInfo,data:t,success:function(e){n(e)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.uploadImageAsync=function(e,t){return new Promise((function(n,a){t.context.post({url:o.default.uploadImage,data:e,success:function(e){if(200==e.statusCode){var t=e.data;n(t)}},fail:function(e){uni.hideLoading(),uni.showToast({title:i18n.t("server_error"),icon:"none"})}})}))},n("bf0f");var o=a(n("f3d1"))},af39:function(e,t,n){"use strict";n.r(t);var a=n("2311"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},b15e:function(e,t,n){"use strict";n.r(t);var a=n("b515"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},b515:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("39d4"),o={name:"vcUploadFile",data:function(){return{fileName:""}},methods:{_setFileName:function(e){this.fileName=e},_doUploadFile:function(){var e=this;uni.chooseFile({count:1,extension:[".zip",".jpg",".png",".xlsx",".doc","docx",".xls"],success:function(t){console.log(t),t.tempFiles[0].size/1024/1024>20?e.$refs.uToast.show({title:"附件大小不能超过20M",type:"warning"}):e.resultPath(t.tempFilePaths[0],t.tempFiles[0].name)}})},resultPath:function(e,t){var n=this,o=this;uni.showLoading({title:"上传中..."}),uni.uploadFile({url:"/callComponent/upload/uploadVedio/upload",filePath:e,name:"uploadFile",header:(0,a.getHeaders)(),formData:{},success:function(e){uni.hideLoading();var t=JSON.parse(e.data);o.fileName=t.fileName,o.realFileName=t.realFileName,o.$emit("uploadFile",t)},fail:function(e){n.$refs.uToast.show({title:"上传失败",type:"error"}),uni.hideLoading()}})}}};t.default=o},b549:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".xe-upload[data-v-25178f5c]{display:none}",""]),e.exports=t},b7c7:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e)||(0,o.default)(e)||(0,r.default)(e)||(0,i.default)()};var a=u(n("4733")),o=u(n("d14d")),r=u(n("5d6b")),i=u(n("30f7"));function u(e){return e&&e.__esModule?e:{default:e}}},b9aa:function(e,t,n){var a=n("bc26");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("967d").default;o("f2114894",a,!0,{sourceMap:!1,shadowMode:!1})},bc26:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-990a6ad6]{box-sizing:border-box}.btn-click[data-v-990a6ad6]{transition:all .3s;opacity:1}.btn-click[data-v-990a6ad6]:active{opacity:.5}.mgb-16[data-v-990a6ad6]{margin-bottom:%?16?%}.mgb-16[data-v-990a6ad6]:last-child{margin-bottom:0}.upload-wrap[data-v-990a6ad6]{width:100%;border-radius:%?16?%;background:#fff;padding:%?32?%}.upload-wrap .upload-btn[data-v-990a6ad6]{width:100%;height:%?176?%;border:%?2?% dashed #aaa;background:#fafafa;border-radius:%?16?%;display:flex;align-items:center;justify-content:center;flex-direction:column}.upload-wrap .upload-btn .upload-icon[data-v-990a6ad6]{width:%?48?%;height:%?48?%;margin-bottom:%?8?%}.upload-wrap .upload-btn .upload-text[data-v-990a6ad6]{font-size:%?26?%;color:#9e9e9e;line-height:%?40?%}.upload-wrap .file-wrap .file-line[data-v-990a6ad6]{width:100%;background:#f5f5f5;border-radius:%?8?%;padding:%?16?%;font-size:%?26?%;color:#1a1a1a;line-height:%?40?%;display:flex;align-items:center;justify-content:space-between}.upload-wrap .file-wrap .file-line .file-info[data-v-990a6ad6]{width:90%;display:flex;align-items:center}.upload-wrap .file-wrap .file-line .file-info .file-name[data-v-990a6ad6]{max-width:80%;padding-left:%?16?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-wrap .file-wrap .file-line .file-icon[data-v-990a6ad6]{width:%?40?%;height:%?40?%;flex-shrink:0}.upload-wrap .file-wrap .file-line .file-empty[data-v-990a6ad6]{color:#999}',""]),e.exports=t},c929:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.uploadFile=t.chooseVideo=t.chooseMessageFile=t.chooseMedia=t.chooseImage=t.chooseFile=t.appUploadFile=void 0;var o=a(n("9b1b"));n("bf0f"),n("fd3c"),n("4626"),n("5ac7");var r=n("246a"),i=function(e){return(0,r.awaitWrap)(new Promise((function(t,n){uni.chooseImage((0,o.default)((0,o.default)({},e),{},{success:function(e){var n=null===e||void 0===e?void 0:e.tempFiles.map((function(e){return{tempFilePath:e.path,tempFile:e,size:e.size,name:e.name,type:e.type,fileType:"image"}}));return t((0,o.default)((0,o.default)({type:"image"},e),{},{tempFiles:n}))},fail:function(e){return n({mode:"chooseImage",data:e})}}))})))};t.chooseImage=i;var u=function(e){return(0,r.awaitWrap)(new Promise((function(t,n){uni.chooseVideo((0,o.default)((0,o.default)({},e),{},{success:function(e){var n,a,r=[(0,o.default)((0,o.default)({},e),{},{tempFilePath:e.tempFilePath,tempFile:null!==(n=e.tempFile)&&void 0!==n?n:{},size:e.size,name:e.name,type:null===(a=e.tempFile)||void 0===a?void 0:a.type,fileType:"video"})];return t({type:"video",tempFiles:r})},fail:function(e){return n({mode:"chooseVideo",data:e})}}))})))};t.chooseVideo=u;t.chooseMedia=function(e,t){return e?uni.chooseMedia||"image"!==e?uni.chooseMedia||"video"!==e?(0,r.awaitWrap)(new Promise((function(n,a){uni.chooseMedia((0,o.default)((0,o.default)({},t),{},{mediaType:[e],success:function(e){return n(e)},fail:function(e){return a({mode:"chooseMedia",data:e})}}))}))):u(t):i(t):console.error("chooseMedia type cannot be empty")};t.chooseFile=function(e){return(0,r.awaitWrap)(new Promise((function(t,n){uni.chooseFile((0,o.default)((0,o.default)({},e),{},{success:function(e){var n=null===e||void 0===e?void 0:e.tempFiles.map((function(e){var t="file";return e.type.includes("image")&&(t="image"),e.type.includes("video")&&(t="video"),{tempFilePath:e.path,tempFile:e,size:e.size,name:e.name,type:e.type,fileType:t}}));return t((0,o.default)((0,o.default)({type:"file"},e),{},{tempFiles:n}))},fail:function(e){return n({mode:"chooseFile",data:e})}}))})))};t.chooseMessageFile=function(e){return(0,r.awaitWrap)(new Promise((function(t,n){wx.chooseMessageFile((0,o.default)((0,o.default)({},e),{},{success:function(e){var n=null===e||void 0===e?void 0:e.tempFiles.map((function(e){var t;return(0,o.default)((0,o.default)({},e),{},{tempFilePath:e.path,fileType:null!==(t=e.type)&&void 0!==t?t:"file"})}));return t((0,o.default)((0,o.default)({type:"file"},e),{},{tempFiles:n}))},fail:function(e){return n({mode:"chooseMessageFile",data:e})}}))})))};t.uploadFile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){uni.uploadFile((0,o.default)((0,o.default)({},e),{},{success:function(e){return n((0,o.default)((0,o.default)({},t),{},{response:JSON.parse(e.data)}))},fail:function(e){return a({mode:"uploadFile",data:e})}}))}))};t.appUploadFile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=e.url,r=e.header,i=e.formData;return new Promise((function(e,u){var l=new XMLHttpRequest;for(var c in l.open("POST",a,!0),r)l.setRequestHeader(c,r[c]);n&&(l.upload.onprogress=n),l.onreadystatechange=function(){4===l.readyState&&(200===l.status?e((0,o.default)((0,o.default)({},t),{},{response:JSON.parse(l.responseText)})):u({mode:"uploadFile",data:{data:l.responseText,errMsg:"uploadFile fail."}}))},l.send(i)}))}},d14d:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("08eb")},df1b:function(e,t,n){"use strict";n.r(t);var a=n("756d"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},e176:function(e,t,n){"use strict";n.r(t);var a=n("27d5"),o=n("af39");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var i=n("feeb");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("7e88");var u=n("828b");o["default"].__module="XeUpload";var l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"25178f5c",null,!1,a["a"],o["default"]);t["default"]=l.exports},feeb:function(e,t,n){"use strict";n.r(t);var a=n("9df8"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a}}]);