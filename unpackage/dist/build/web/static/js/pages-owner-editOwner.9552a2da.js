(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-owner-editOwner"],{"10c4":function(e,t,n){"use strict";function i(e,t){var n=new Image;n.src=e,n.onload=function(){var e=this.height,n=this.width,i=document.createElement("canvas"),a=i.getContext("2d"),o=document.createAttribute("width");o.nodeValue=n;var r=document.createAttribute("height");r.nodeValue=e,i.setAttributeNode(o),i.setAttributeNode(r),a.drawImage(this,0,0,n,e);var s=i.toDataURL("image/jpeg",.3);i=null,t(s)}}n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToBlob=function(e){var t=e.split(","),n=t[0].match(/:(.*?);/)[1],i=atob(t[1]),a=i.length,o=new Uint8Array(a);while(a--)o[a]=i.charCodeAt(a);return new Blob([o],{type:n})},t.translate=function(e,t){i(e,t)},t.translateH5=i,n("5c47"),n("2c10"),n("c9b5"),n("15d1"),n("d5c6"),n("5a56"),n("f074"),n("4db2"),n("bf0f"),n("c976"),n("4d8f"),n("7b97"),n("668a"),n("c5b7"),n("8ff5"),n("2378"),n("641a"),n("64e0"),n("cce3"),n("efba"),n("d009"),n("bd7d"),n("7edd"),n("d798"),n("f547"),n("5e54"),n("b60a"),n("8c18"),n("12973"),n("f991"),n("198e"),n("8557"),n("63b1"),n("1954"),n("1cf1")},"37c9":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default,a=n("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa"),n("bf0f"),n("2797"),n("5ef2"),n("aa9c"),n("dd2b");var o=a(n("10c4")),r=i(n("91c2")),s=n("a4e1"),u=n("8196"),c=(u.factory,{name:"vc-upload",data:function(){return{photos:[],imgList:[],photoUrl:r.default.commonBaseUrl+"/callComponent/download/getFile/file",sendImgList:[]}},props:{communityId:{type:String,default:""},title:{type:String,default:"image_upload"},maxPhotoNum:{type:Number,default:1},count:{type:Number,default:1},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},canEdit:{type:Boolean,default:!0}},watch:{photos:function(e){this.sendData()},deep:!0},mounted:function(){this._initImageList(this.sendImgList)},methods:{_initImageList:function(e){var t=this;this.sendImgList=e,this.sendImgList.forEach((function(e,n){if(e.indexOf("base64,")>-1&&t.imgList.push(_photo),e.indexOf("https")>-1||e.indexOf("http")>-1||e.indexOf(t.photoUrl)>-1){t.imgList.push(e);var i=t._getUrlParams(e);i["fileId"]&&t.photos.push({fileId:i["fileId"],url:e})}else{var a=t.photoUrl+"?fileId="+e+"&communityId=-1&time="+new Date;t.imgList.push(a),t.photos.push({fileId:e,url:a})}})),console.log(this.imgList)},sendData:function(){this.$emit("sendImagesData",this.photos)},_getUrlParams:function(e){if(e.indexOf("?")<0)return{fileId:e.substring(e.indexOf("img"))};for(var t=e.split("?")[1],n={},i=t.split("&"),a=0,o=i.length;a<o;a++){var r=i[a].split("=");n[r[0]]=r[1]}return n},deleteImage:function(e){this.imgList.splice(e,1),this.photos.splice(e,1)},ChooseImage:function(){var e=this;wx.chooseImage({count:this.count,sizeType:this.sizeType,sourceType:this.sourceType,success:function(t){var n=t.tempFilePaths[0];e.imgList.push(n),e.$forceUpdate(),o.translate(n,(function(t){var n={uploadFile:t,communityId:e.communityId};(0,s.uploadImageAsync)(n,e).then((function(t){e.photos.push(t)}))}))}})},preview:function(e){var t=this.imgList;t.length<1||(t.forEach((function(e,n){var i=e.indexOf("/callComponent");0==i&&(t[n]=r.default.commonBaseUrl+e)})),uni.previewImage({current:e,urls:t}))}}});t.default=c},"3d9b":function(e,t,n){"use strict";n.r(t);var i=n("9f50"),a=n("d849");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"527ee613",null,!1,i["a"],void 0);t["default"]=s.exports},"802e":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("aa9c");var a=n("6063"),o=i(n("3d9b")),r=n("8755"),s={data:function(){var e=this;return{memberId:"",ownerId:"",name:"",sexArr:["男","女"],index:0,sex:"0",link:"",remark:"",idCard:"",address:"",ownerTypeCd:"",communityId:"",photos:"",uploadImage:{maxPhotoNum:1,imgTitle:function(t){return e.$t(t)}("image_upload"),canEdit:!0},imageLists:[],areaCodes:["+86","+852","+853"],areaCode:"+86"}},components:{uploadImageAsync:o.default},onLoad:function(e){this.communityId=this.getCommunityId(),this.memberId=e.memberId,this._loadOwnerMember()},methods:{onPickerChange:function(e){this.areaCode=this.areaCodes[e.detail.value]},sendImagesData:function(e){this.photos=e[0].fileId},sexChange:function(e){this.sex=e.detail.value},_submitOwnerMember:function(e){var t={name:this.name,link:this.link,remark:this.remark,ownerTypeCd:this.ownerTypeCd,roomName:this.roomName,communityId:this.getCommunityId(),idCard:this.idCard,address:this.address,sex:this.sex,ownerPhoto:this.photos,memberId:this.memberId,ownerId:this.ownerId,areaCode:this.areaCode},n="";""==t.memberId?n=this.$t("please_enter_owner"):""==t.name?n=this.$t("please_enter_name"):""==t.link?n=this.$t("please_enter_phone_number"):(0,a.checkPhoneNumber)(t.link,this.areaCode)||(n=this.$t("please_input_phone")),""==n?(0,r.updateRoomOwner)(this,t).then((function(e){0==e.code?uni.navigateBack():uni.showToast({icon:"none",title:e.msg})})):uni.showToast({title:n,icon:"none",duration:2e3})},_loadOwnerMember:function(){var e=this;e.imageLists=[],(0,r.queryOwnerAndMembers)(this,{page:1,row:1,memberId:this.memberId,communityId:this.getCommunityId()}).then((function(t){e.memberId=t.data[0].memberId,e.ownerId=t.data[0].ownerId,e.name=t.data[0].name,e.index=t.data[0].sex,e.sex=t.data[0].sex,e.link=t.data[0].link,e.remark=t.data[0].remark,e.ownerTypeCd=t.data[0].ownerTypeCd,e.idCard=t.data[0].idCard,e.address=t.data[0].address,e.imageLists.push(t.data[0].url),e.$refs.vcUploadRef._initImageList(e.imageLists)}))}}};t.default=s},8755:function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.deleteOwner=function(e,t){return new Promise((function(n,i){e.context.post({url:a.default.deleteOwner,data:t,success:function(e){n(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryOwnerAccount=function(e,t){return new Promise((function(n,i){e.context.get({url:a.default.queryOwnerAccount,data:t,success:function(e){0==e.data.code?n(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryOwnerAndMembers=function(e,t){return new Promise((function(n,i){e.context.get({url:a.default.queryOwnerAndMembers,data:t,success:function(e){n(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryOwners=function(e,t){return new Promise((function(n,i){e.context.get({url:a.default.queryOwners,data:t,success:function(e){n(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.saveRoomOwner=function(e,t){return new Promise((function(n,i){e.context.post({url:a.default.saveRoomOwner,data:t,success:function(e){n(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.updateRoomOwner=function(e,t){return new Promise((function(n,i){e.context.post({url:a.default.editOwner,data:t,success:function(e){n(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},n("bf0f");var a=i(n("f3d1"))},"9f50":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar bg-white "},[n("v-uni-view",{staticClass:"action"},[e._v(e._s(e.title))]),e.canEdit?n("v-uni-view",{staticClass:"action"},[e._v(e._s(e.imgList.length)+"/"+e._s(e.maxPhotoNum))]):e._e()],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[e._l(e.imgList,(function(t,i){return n("v-uni-view",{staticClass:"bg-img",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.preview(i)}}},[n("v-uni-image",{attrs:{src:t,mode:"aspectFill"}}),e.canEdit?n("v-uni-view",{staticClass:"cu-tag bg-red",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.deleteImage(i)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1):e._e()],1)})),e.canEdit&&e.imgList.length<e.maxPhotoNum?n("v-uni-view",{staticClass:"solids",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ChooseImage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):e._e()],2)],1)],1)},a=[]},a2c2:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("basic_information")))]),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("name")))]),n("v-uni-input",{attrs:{placeholder:e.$t("mandatory_enter_member_name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("ID_card")))]),n("v-uni-input",{attrs:{placeholder:e.$t("optional_enter_ID_card")},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("gender")))]),n("v-uni-picker",{attrs:{bindchange:"PickerChange",value:e.index,range:e.sexArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sexChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[e._v(e._s("0"==e.sex?e.$t("male"):e.$t("female")))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("home_address")))]),n("v-uni-input",{attrs:{type:"text",placeholder:e.$t("optional_enter_home_address")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("contact_information")))]),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{"white-space":"nowrap"}},[e._v(e._s(e.$t("phone_number")))]),n("v-uni-view",{staticClass:"phone-input"},[n("v-uni-input",{staticClass:"text-right",attrs:{placeholder:e.$t("mandatory_enter_phone_number")},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),n("v-uni-picker",{attrs:{mode:"selector",range:e.areaCodes},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.areaCode))])],1)],1)],1),n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("related_images")))]),n("uploadImageAsync",{ref:"vcUploadRef",attrs:{communityId:e.communityId,maxPhotoNum:e.uploadImage.maxPhotoNum,canEdit:e.uploadImage.canEdit,title:e.uploadImage.imgTitle},on:{sendImagesData:function(t){arguments[0]=t=e.$handleEvent(t),e.sendImagesData.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-textarea",{attrs:{placeholder:e.$t("optional_enter_remark")},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),n("v-uni-view",{staticClass:"flex flex-direction margin-top margin-bottom"},[n("v-uni-button",{staticClass:"cu-btn bg-green margin-tb-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._submitOwnerMember()}}},[e._v("提交")])],1)],1)},a=[]},a4e1:function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.queryOrgInfo=function(e,t){return new Promise((function(n,i){e.context.get({url:a.default.queryOrgInfo,data:t,success:function(e){n(e)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.queryStaffListInfo=function(e,t){return new Promise((function(n,i){e.context.get({url:a.default.queryStaffListInfo,data:t,success:function(e){n(e)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}})}))},t.uploadImageAsync=function(e,t){return new Promise((function(n,i){t.context.post({url:a.default.uploadImage,data:e,success:function(e){if(200==e.statusCode){var t=e.data;n(t)}},fail:function(e){uni.hideLoading(),uni.showToast({title:i18n.t("server_error"),icon:"none"})}})}))},n("bf0f");var a=i(n("f3d1"))},beec:function(e,t,n){"use strict";var i=n("e559"),a=n.n(i);a.a},cfa8:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".block__title[data-v-6a173bc8]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-6a173bc8]{height:%?40?%}[data-v-6a173bc8] .phone-input{display:flex;align-items:center}[data-v-6a173bc8] .phone-input uni-picker{flex:none!important}",""]),e.exports=t},d849:function(e,t,n){"use strict";n.r(t);var i=n("37c9"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e362:function(e,t,n){"use strict";n.r(t);var i=n("802e"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e559:function(e,t,n){var i=n("cfa8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("967d").default;a("3635ee5b",i,!0,{sourceMap:!1,shadowMode:!1})},f10a:function(e,t,n){"use strict";n.r(t);var i=n("a2c2"),a=n("e362");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("beec");var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6a173bc8",null,!1,i["a"],void 0);t["default"]=s.exports}}]);