(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-applyRoomDetail-applyRoomDetail~pages-applyRoomRecordHandle-applyRoomRecordHandle~pages-excute~6b954b54"],{2634:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(T){f=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),u=new P(r||[]);return i(a,"_invoke",{value:_(t,n,u)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function v(){}function m(){}var g={};f(g,u,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(j([])));w&&w!==n&&o.call(w,u)&&(g=w);var b=m.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var n;i(this,"_invoke",{value:function(i,a){function u(){return new e((function(n,u){(function n(i,a,u,c){var s=d(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,r.default)(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)})(i,a,n,u)}))}return n=n?n.then(u,u):u()}})}function _(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=I(a,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function I(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,I(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,i(b,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=f(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),f(b,s,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("6a54"),n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("3872e"),n("4e9b"),n("114e"),n("c240"),n("926e"),n("7a76"),n("c9b5"),n("aa9c"),n("2797"),n("8a8d"),n("dc69"),n("f7a5");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("fcf3"))},"2fdc":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}},n("bf0f")},3540:function(t,e,n){"use strict";n.r(e);var r=n("3ccd"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"3ccd":function(t,e,n){"use strict";n("6a54");var r=n("3639").default,o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("2634")),a=o(n("2fdc"));n("64aa"),n("bf0f"),n("2797"),n("5ef2"),n("aa9c"),n("dd2b");var u=r(n("d97e")),c=o(n("0c9b")),s=n("e476"),f=n("7be6"),l=(f.factory,{name:"vc-upload",data:function(){return{photos:[],imgList:[],photoUrl:c.default.commonBaseUrl+"/callComponent/download/getFile/file",sendImgList:[]}},props:{communityId:{type:String,default:""},title:{type:String,default:"image_upload"},maxPhotoNum:{type:Number,default:1},count:{type:Number,default:1},sizeType:{type:Array,default:function(){return["compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},canEdit:{type:Boolean,default:!0}},watch:{photos:function(t){this.sendData()},deep:!0},mounted:function(){this._initImageList(this.sendImgList)},methods:{_initImageList:function(t){var e=this;this.sendImgList=t,this.sendImgList.forEach((function(t,n){if(t.indexOf("base64,")>-1&&e.imgList.push(_photo),t.indexOf("https")>-1||t.indexOf("http")>-1||t.indexOf(e.photoUrl)>-1){e.imgList.push(t);var r=e._getUrlParams(t);r["fileId"]&&e.photos.push({fileId:r["fileId"],url:t})}else{var o=e.photoUrl+"?fileId="+t+"&communityId=-1&time="+new Date;e.imgList.push(o),e.photos.push({fileId:t,url:o})}})),console.log(this.imgList)},sendData:function(){this.$emit("sendImagesData",this.photos)},_getUrlParams:function(t){if(t.indexOf("?")<0)return{fileId:t.substring(t.indexOf("img"))};for(var e=t.split("?")[1],n={},r=e.split("&"),o=0,i=r.length;o<i;o++){var a=r[o].split("=");n[a[0]]=a[1]}return n},deleteImage:function(t){this.imgList.splice(t,1),this.photos.splice(t,1)},ChooseImage:function(){var t=this,e=this;wx.chooseImage({count:this.count,sizeType:this.sizeType,sourceType:this.sourceType,success:function(n){var r=n.tempFilePaths[0];u.translate(r,function(){var n=(0,a.default)((0,i.default)().mark((function n(o){var a,u;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,uni.showLoading({title:t.$t("正在上传")}),a={uploadFile:o,communityId:e.communityId},n.next=5,(0,s.uploadImageAsync)(a,e,!0);case 5:u=n.sent,uni.showToast({title:t.$t("上传成功")}),e.photos.push(u),e.imgList.push(r),e.$forceUpdate(),n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](0),uni.showToast({icon:"none",title:n.t0||t.$t("上传失败")}),console.log("chooseImage",n.t0);case 16:return n.prev=16,uni.hideLoading(),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,12,16,19]])})));return function(t){return n.apply(this,arguments)}}())}})},preview:function(t){var e=this.imgList;e.length<1||(e.forEach((function(t,n){var r=t.indexOf("/callComponent");0==r&&(e[n]=c.default.commonBaseUrl+t)})),uni.previewImage({current:t,urls:e}))}}});e.default=l},"840b":function(t,e,n){"use strict";n.r(e);var r=n("ed47"),o=n("3540");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var a=n("828b"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"275bcaac",null,!1,r["a"],void 0);e["default"]=u.exports},d97e:function(t,e,n){"use strict";function r(t,e){var n=new Image;n.src=t,n.onload=function(){var t=this.height,n=this.width,r=document.createElement("canvas"),o=r.getContext("2d"),i=document.createAttribute("width");i.nodeValue=n;var a=document.createAttribute("height");a.nodeValue=t,r.setAttributeNode(i),r.setAttributeNode(a),o.drawImage(this,0,0,n,t);var u=r.toDataURL("image/jpeg",.3);r=null,e(u)}}n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.base64ToBlob=function(t){var e=t.split(","),n=e[0].match(/:(.*?);/)[1],r=atob(e[1]),o=r.length,i=new Uint8Array(o);while(o--)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})},e.translate=function(t,e){r(t,e)},e.translateH5=r,n("5c47"),n("2c10"),n("c9b5"),n("15d1"),n("d5c6"),n("5a56"),n("f074"),n("4db2"),n("bf0f"),n("c976"),n("4d8f"),n("7b97"),n("668a"),n("c5b7"),n("8ff5"),n("2378"),n("641a"),n("64e0"),n("cce3"),n("efba"),n("d009"),n("bd7d"),n("7edd"),n("d798"),n("f547"),n("5e54"),n("b60a"),n("8c18"),n("12973"),n("f991"),n("198e"),n("8557"),n("63b1"),n("1954"),n("1cf1")},e476:function(t,e,n){"use strict";n("6a54");var r=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.queryOrgInfo=function(t,e,n){return new Promise((function(r,i){t.context.get({url:o.default.queryOrgInfo,data:e,success:function(t){r(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.queryStaffListInfo=function(t,e,n){return new Promise((function(r,i){t.context.get({url:o.default.queryStaffListInfo,data:e,success:function(t){r(t)},fail:function(t){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},e.uploadImageAsync=function(t,e,n){return new Promise((function(r,i){e.context.post({url:o.default.uploadImage,data:t,success:function(t){if(200==t.statusCode){var e=t.data;r(e)}},fail:function(t){uni.hideLoading(),uni.showToast({title:i18n.t("server_error"),icon:"none"})}},n)}))},n("bf0f");var o=r(n("f0de"))},ed47:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar bg-white "},[n("v-uni-view",{staticClass:"action"},[t._v(t._s(t.title))]),t.canEdit?n("v-uni-view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/"+t._s(t.maxPhotoNum))]):t._e()],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(e,r){return n("v-uni-view",{staticClass:"bg-img",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.preview(r)}}},[n("v-uni-image",{attrs:{src:e,mode:"aspectFill"}}),t.canEdit?n("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteImage(r)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1):t._e()],1)})),t.canEdit&&t.imgList.length<t.maxPhotoNum?n("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)],1)},o=[]}}]);