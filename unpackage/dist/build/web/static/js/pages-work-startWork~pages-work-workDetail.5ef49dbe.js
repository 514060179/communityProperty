(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-startWork~pages-work-workDetail"],{"0f3a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"t-toptips",class:[t.show?"t-top-show":""],style:{top:t.top,background:t.cubgColor}},[t.loading?a("v-uni-view",{staticClass:"flex flex-sub"},[a("v-uni-view",{staticClass:"flex flex-sub"},[a("v-uni-view",{staticClass:"cu-progress flex-sub round striped active sm"},[a("v-uni-view",{style:{background:t.color,width:t.value+"%"}})],1),a("v-uni-text",{staticClass:"margin-left"},[t._v(t._s(t.value)+"%")])],1),t.value<100?a("v-uni-view",{staticClass:"close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downOnAbort.apply(void 0,arguments)}}},[t._v("取消")]):t._e()],1):[t._v(t._s(t.msg))]],2),t.showH5?a("h5-file",{ref:"h5File",attrs:{logo:t.logo,showTip:t.showTip,progress:t.value},on:{abort:function(e){arguments[0]=e=t.$handleEvent(e),t.onAbort.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseH5.apply(void 0,arguments)}}}):t._e()],1)},n=[]},"17e2":function(t,e,a){"use strict";var i=a("fdda"),n=a.n(i);n.a},2457:function(t,e,a){"use strict";a.r(e);var i=a("aa74"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},3221:function(t,e,a){var i=a("f5ba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("2a1cac5d",i,!0,{sourceMap:!1,shadowMode:!1})},6862:function(t,e,a){"use strict";a.r(e);var i=a("7d16"),n=a("2457");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("17e2");var s=a("828b"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ca86b922",null,!1,i["a"],void 0);e["default"]=r.exports},7335:function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9b1b")),o=i(a("a823"));a("5ef2"),a("bf0f");var s=i(a("6862")),r=["cuWebview","url","name","header","addName","addSize","maxSize"],d=["maxSize"],l=["maxSize"],u=["url","name","header","addName","addSize"],c=["url","name","header","addName","addSize"],f=["url","type","customName"],p={components:{h5File:s.default},props:{logo:{type:String,default:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040"},top:{type:String,default:"auto"},bgColor:{type:String,default:"rgba(49, 126, 243, 0.5)"},color:{type:String,default:"#55aa00"}},data:function(){return this.uploadTask=null,this.downloadTask=null,{cubgColor:"",loading:!1,value:5,show:!1,msg:"执行完毕~",showH5:!1,showTip:!1}},methods:{toast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.duration,i=void 0===a?2e3:a,n=e.icon,o=void 0===n?"none":n;uni.showToast({title:t,duration:i,icon:o})},getRequest:function(t){var e=new Object,a=t.indexOf("?");if(-1!=a)for(var i=t.substring(a+1),n=i.split("&"),o=0;o<n.length;o++)e[n[o].split("=")[0]]=unescape(n[o].split("=")[1]);return e},appChooseFile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.cuWebview,t.url,t.name,t.header,t.addName,t.addSize,t.maxSize,(0,o.default)(t,r)},wxChooseFile:function(t){var e=this,a=t.maxSize,i=void 0===a?10:a,n=(0,o.default)(t,d);wx.chooseMessageFile({count:1,type:"file",success:function(t){var a=t.tempFiles;e.setdefUI();var o=a[0];if(o.size>1048576*Math.abs(i))return uni.showToast({title:"单个文件请勿超过".concat(i,"M,请重新上传"),icon:"none"}),e.errorHandler("文件选择失败",e.upErr);e.handleWXUpload(n,o)},fail:function(){return e.errorHandler("文件选择失败",e.upErr)}})},h5ChooseFile:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.maxSize,i=void 0===a?10:a,n=(0,o.default)(e,l);this.showH5=!0,this.value=0,this.$nextTick((function(){t.$refs.h5File.hFile.onchange=function(e){var a=e.target.files[0];a.size>1048576*Math.abs(i)?uni.showToast({title:"单个文件请勿超过".concat(i,"M,请重新上传"),icon:"none"}):t.handleH5Upload(n,a)}}))},handleH5Upload:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.url,i=e.name,n=void 0===i?"file":i,s=e.header,r=e.addName,d=e.addSize,l=(0,o.default)(e,u),c=arguments.length>1?arguments[1]:void 0,f=c.name,p=new FormData;for(var h in l)p.append(h,l[h]);for(var v in r&&p.append(r,f),d&&p.append(d,c.size),p.append(n,c),this.uploadTask=new XMLHttpRequest,this.uploadTask.open("POST",a,!0),s)this.uploadTask.setRequestHeader(v,s[v]);this.uploadTask.ontimeout=function(){setTimeout((function(){return t.showTip=!1,t.errorHandler("请求超时",t.upErr)}),1e3)},this.uploadTask.upload.addEventListener("progress",(function(e){e.lengthComputable&&(t.value=Math.ceil(100*e.loaded/e.total),t.value>100&&(t.value=100),t.$forceUpdate())}),!1),this.uploadTask.onreadystatechange=function(e){if(4==t.uploadTask.readyState)return console.log("status："+t.uploadTask.status),200==t.uploadTask.status?t.handleBack(f,t.uploadTask.responseText,c.size):(t.showTip=!1,0==t.uploadTask.status&&console.log("请检查请求头Content-Type与服务端是否匹配，并确认服务端已正确开启跨域"),t.errorHandler("文件上传失败",t.upErr))},this.showTip=!0,this.uploadTask.send(p)},handleWXUpload:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.url,i=e.name,n=void 0===i?"file":i,s=e.header,r=e.addName,d=e.addSize,l=(0,o.default)(e,c),u=arguments.length>1?arguments[1]:void 0,f={url:a,name:n,formData:l,header:s,filePath:u.path};r&&(f.formData[r]=u.name),d&&(f.formData[d]=u.size);var p=u.name;f["fail"]=function(e){return t.showTip=!1,t.errorHandler("文件上传失败",t.upErr)},f["success"]=function(e){if(200==e.statusCode){var a=JSON.parse(e.data);return t.onCommit(t.$emit("up-success",{fileName:p,size:u.size,data:a}))}return t.errorHandler("文件上传失败",t.upErr)},this.showTip=!0,this.uploadTask=uni.uploadFile(f),this.uploadTask&&this.uploadTask.onProgressUpdate((function(e){var a=e.progress,i=void 0===a?0:a;i<=100&&(t.value=i,t.$forceUpdate())}))},onCloseH5:function(){this.showH5=!1},onAbort:function(){this.uploadTask&&this.uploadTask.abort(),this.showTip=!1},downOnAbort:function(){this.downloadTask&&this.downloadTask.abort(),this.onCommit(!1,"已取消")},handleBack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{}",a=arguments.length>2?arguments[2]:void 0;console.log("可根据需求自行修改emit内容，服务端返回："+e);try{e=JSON.parse(e)}catch(i){console.log("Tips: responseText are not JSON")}return this.onCommit(this.$emit("up-success",{statusCode:200,fileName:t,size:a,data:e}))},upload:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.url?this.loading?this.toast("还有个文件玩命处理中，请稍候.."):this.h5ChooseFile(t):this.toast("上传地址不正确")},open:function(t){var e=uni.getSystemInfoSync().platform;"ios"==e&&(t=encodeURI(t)),uni.openDocument({filePath:t,success:function(t){console.log("打开文档成功")}})},plusSaveFile:function(t){var e=this,a=t.url,i=t.customName,o=void 0===i?"":i,s=t.opt;return new Promise((function(t,i){var r={method:"GET",timeout:120,retryInterval:10,filename:"file://storage/emulated/0/lFile/"+o};r=(0,n.default)((0,n.default)({},r),s),e.downloadTask=plus.downloader.createDownload(a,r,(function(a,n){if(200==n){var o=a.filename;e.value=100,e.onCommit(t(o))}else e.errorHandler("下载失败",i);e.downloadTask=null})),e.downloadTask.addEventListener("statechanged",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.downloadedSize,i=void 0===a?0:a,n=t.state,o=void 0===n?0:n,s=t.totalSize,r=void 0===s?0:s;if(3===o){var d=r>0?r:fileSize,l=Math.ceil(i/d*100);e.value=l>100?100:l,e.$forceUpdate()}}),!1),e.downloadTask.start()}))},download:function(t){var e=this,a=t.url,i=(t.type,t.customName,(0,o.default)(t,f));if(!this.loading)return this.setdefUI(),new Promise((function(t,o){a=encodeURI(a),e.downloadTask=uni.downloadFile((0,n.default)((0,n.default)({url:a},i),{},{success:function(a){var i=a.statusCode,n=a.tempFilePath;200===i&&e.onCommit(t(n))},fail:function(){return e.errorHandler("下载失败",o)}})),e.downloadTask.onProgressUpdate((function(t){var a=t.progress,i=void 0===a?0:a;i<=100&&(e.value=i,e.$forceUpdate())}))}));this.toast("还有个文件玩命处理中，请稍候..")},onCommit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"执行完毕~";return this.msg=a,this.loading=!1,this.showTip=!1,this.cubgColor="rgba(57, 181, 74, 0.5)",this.uploadTask=null,this.downloadTask=null,setTimeout((function(){e.show=!1,e.showH5=!1}),1500),t},setdefUI:function(){this.cubgColor=this.bgColor,this.value=0,this.loading=!0,this.show=!0},upErr:function(t){this.$emit("up-error",t)},errorHandler:function(t,e){var a=this;return this.msg=t,this.loading=!1,this.cubgColor="rgba(229, 77, 66, 0.5)",this.uploadTask=null,this.downloadTask=null,setTimeout((function(){a.show=!1}),1500),e(t)}}};e.default=p},"7d16":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"fixed mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}}}),t.showTip?a("div",{staticClass:"fixed tis",attrs:{align:"center"}},[a("div",{staticClass:"tis-content"},[a("div",[a("img",{attrs:{src:t.logo}})]),a("div",{staticClass:"tis-progress"},[t._v("努力上传中"),t.progress<100?a("v-uni-text",[t._v(".."+t._s(t.progress)+"%")]):t._e()],1),a("div",{staticClass:"cancel"},[a("v-uni-button",{staticClass:"cancel-btn",attrs:{type:"button"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAbort.apply(void 0,arguments)}}},[t._v("取消上传")])],1)])]):t._e(),a("div",{staticClass:"fixed file-content"},[a("v-uni-view",{ref:"input",staticClass:"btn"},[a("v-uni-button",{staticClass:"btn-bg",attrs:{type:"button"}},[t._v("打开文件管理器")])],1)],1)])},n=[]},"9ac8":function(t,e,a){"use strict";var i=a("3221"),n=a.n(i);n.a},a823:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)return{};var a,n,o=(0,i.default)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o},a("01a2"),a("5ef2");var i=function(t){return t&&t.__esModule?t:{default:t}}(a("cfa9"))},aa74:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var i={props:{logo:{type:String,default:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040"},progress:{type:[Number,String],default:0},showTip:{type:Boolean,default:!1}},data:function(){return{hFile:""}},mounted:function(){this.hFile=document.createElement("input"),this.hFile.type="file",this.hFile.value="",this.hFile.style.position="absolute",this.hFile.style.zIndex=93,this.hFile.style.left=0,this.hFile.style.right=0,this.hFile.style.top=0,this.hFile.style.bottom=0,this.hFile.style.height="60px",this.hFile.style.width="100%",this.hFile.style.opacity=0,this.$refs.input.$el.appendChild(this.hFile)},methods:{onAbort:function(){this.$emit("abort",{})},onClose:function(){this.$emit("close",{})}}};e.default=i},cc82a:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,".content[data-v-ca86b922]{background:transparent}.fixed[data-v-ca86b922]{position:fixed;bottom:0;left:0;right:0;width:100%}.content .mask[data-v-ca86b922]{top:0;background:rgba(0,0,0,.4);z-index:90}.content .file-content[data-v-ca86b922]{z-index:91;height:60px;background:#fff;text-align:center}.btn[data-v-ca86b922]{position:relative}.btn .file[data-v-ca86b922]{position:absolute;z-index:93;left:0;right:0;top:0;bottom:0;height:60px;width:100%;opacity:0}.btn-bg[data-v-ca86b922]{margin-top:10px;background:#06c;color:#fff;width:80%;height:40px;line-height:40px;border:0;border-radius:5px}.tis[data-v-ca86b922]{top:0;z-index:95;display:flex;justify-content:center;align-items:center}.tis .tis-content[data-v-ca86b922]{background:#fff;width:60%;border-radius:10px;padding:20px 0}.tis .tis-content img[data-v-ca86b922]{width:50px;height:50px}.tis-progress[data-v-ca86b922]{margin:10px 0;color:#999}.cancel-btn[data-v-ca86b922]{margin-top:30px;height:30px;width:60%;line-height:30px;font-size:14px;padding:0 2em;background:#e3e3e3;color:#898989;border:0!important;border-radius:5px}.cancel-btn[data-v-ca86b922]:after{height:0!important;border:0!important}",""]),t.exports=e},cfa9:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n},a("dc8a"),a("5ef2")},d0ca:function(t,e,a){"use strict";a.r(e);var i=a("7335"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},f5ba:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,".t-toptips[data-v-493dc4a4]{width:100%;padding:%?18?% %?30?%;box-sizing:border-box;position:fixed;z-index:90;color:#fff;font-size:%?30?%;left:0;display:flex;align-items:center;justify-content:center;word-break:break-all;opacity:0;-webkit-transform:translateZ(0) translateY(-100%);transform:translateZ(0) translateY(-100%);transition:all .3s ease-in-out}.close[data-v-493dc4a4]{width:3em;text-align:right}.t-top-show[data-v-493dc4a4]{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}.flex[data-v-493dc4a4]{display:flex;align-items:center}.flex-sub[data-v-493dc4a4]{flex:1}.round[data-v-493dc4a4]{border-radius:%?5000?%}\n\n/* ==================\n         进度条\n ==================== */.cu-progress[data-v-493dc4a4]{overflow:hidden;height:%?28?%;background-color:#ebeef5;display:inline-flex;align-items:center;width:100%}.cu-progress+uni-view[data-v-493dc4a4],\n.cu-progress+uni-text[data-v-493dc4a4]{line-height:1}.cu-progress.xs[data-v-493dc4a4]{height:%?10?%}.cu-progress.sm[data-v-493dc4a4]{height:%?20?%}.cu-progress uni-view[data-v-493dc4a4]{width:0;height:100%;align-items:center;display:flex;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:width .6s ease}.cu-progress uni-text[data-v-493dc4a4]{align-items:center;display:flex;font-size:%?20?%;color:#333;text-indent:%?10?%}.cu-progress.text-progress[data-v-493dc4a4]{padding-right:%?60?%}.cu-progress.striped uni-view[data-v-493dc4a4]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:%?72?% %?72?%}.cu-progress.active uni-view[data-v-493dc4a4]{-webkit-animation:progress-stripes-data-v-493dc4a4 2s linear infinite;animation:progress-stripes-data-v-493dc4a4 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-493dc4a4{from{background-position:%?72?% 0}to{background-position:0 0}}@keyframes progress-stripes-data-v-493dc4a4{from{background-position:%?72?% 0}to{background-position:0 0}}",""]),t.exports=e},fbe4:function(t,e,a){"use strict";a.r(e);var i=a("0f3a"),n=a("d0ca");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("9ac8");var s=a("828b"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"493dc4a4",null,!1,i["a"],void 0);e["default"]=r.exports},fdda:function(t,e,a){var i=a("cc82a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("967d").default;n("19b31ab8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);