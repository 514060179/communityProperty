(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-owner-addOwner"],{"04b9":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("basic_information")))]),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("name")))]),n("v-uni-input",{attrs:{placeholder:e.$t("mandatory_enter_member_name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("ID_card")))]),n("v-uni-input",{attrs:{placeholder:e.$t("optional_enter_ID_card")},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("gender")))]),n("v-uni-picker",{attrs:{bindchange:"PickerChange",value:e.index,range:e.sexArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sexChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[e._v(e._s("0"==e.sex?e.$t("male"):e.$t("female")))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("personnel_type")))]),n("v-uni-picker",{attrs:{value:e.typeCdIndex,range:e.typeCds,"range-key":"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e._changeTypeCd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[e._v(e._s(-1==e.typeCdIndex?e.$t("please_select"):e.typeCds[e.typeCdIndex].name))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("house")))]),n("v-uni-input",{attrs:{placeholder:e.$t("mandatory_enter_building_unit_house")},model:{value:e.roomName,callback:function(t){e.roomName=t},expression:"roomName"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("home_address")))]),n("v-uni-input",{attrs:{type:"text",placeholder:e.$t("optional_enter_home_address")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("contact_information")))]),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{"white-space":"nowrap"}},[e._v(e._s(e.$t("phone_number")))]),n("v-uni-view",{staticClass:"phone-input"},[n("v-uni-input",{staticClass:"text-right",attrs:{placeholder:e.$t("mandatory_enter_phone_number")},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),n("v-uni-picker",{attrs:{mode:"selector",range:e.areaCodes},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.areaCode))])],1)],1)],1),n("v-uni-view",{staticClass:"block__title"},[e._v(e._s(e.$t("related_images")))]),n("uploadImageAsync",{ref:"vcUploadRef",attrs:{communityId:e.communityId,maxPhotoNum:e.uploadImage.maxPhotoNum,canEdit:e.uploadImage.canEdit,title:e.uploadImage.imgTitle},on:{sendImagesData:function(t){arguments[0]=t=e.$handleEvent(t),e.sendImagesData.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-textarea",{attrs:{placeholder:e.$t("optional_enter_remark")},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),n("v-uni-view",{staticClass:"flex flex-direction margin-top margin-bottom"},[n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._submitOwnerMember()}}},[e._v("提交")])],1)],1)},i=[]},"0d50":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.deleteOwner=function(e,t,n){return new Promise((function(a,o){e.context.post({url:i.default.deleteOwner,data:t,success:function(e){a(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},t.queryOwnerAccount=function(e,t,n){return new Promise((function(a,o){e.context.get({url:i.default.queryOwnerAccount,data:t,success:function(e){0==e.data.code?a(e.data):wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},t.queryOwnerAndMembers=function(e,t,n){return new Promise((function(a,o){e.context.get({url:i.default.queryOwnerAndMembers,data:t,success:function(e){a(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},t.queryOwners=function(e,t,n){return new Promise((function(a,o){e.context.get({url:i.default.queryOwners,data:t,success:function(e){a(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},t.saveRoomOwner=function(e,t,n){return new Promise((function(a,o){e.context.post({url:i.default.saveRoomOwner,data:t,success:function(e){a(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},t.updateRoomOwner=function(e,t,n){return new Promise((function(a,o){e.context.post({url:i.default.editOwner,data:t,success:function(e){a(e.data)},fail:function(e){wx.showToast({title:i18n.t("server_error"),icon:"none",duration:2e3})}},n)}))},n("bf0f");var i=a(n("f0de"))},"2f03":function(e,t,n){var a=n("96d7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("3b8f7fbd",a,!0,{sourceMap:!1,shadowMode:!1})},"308e":function(e,t,n){"use strict";var a=n("2f03"),i=n.n(a);i.a},"7cec":function(e,t,n){"use strict";n.r(t);var a=n("8649"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},8649:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("4361"),o=a(n("840b")),r=n("0d50"),s={data:function(){var e=this,t=function(t){return e.$t(t)};return{name:"",sexArr:["男","女"],index:0,sex:"0",link:"",remark:"",typeCds:[{value:"1001",name:t("owner")},{value:"1002",name:t("family_member")},{value:"1003",name:t("tenant")},{value:"1005",name:t("other")}],typeCdIndex:-1,ownerTypeCd:"",idCard:"",address:"",roomName:"",communityId:"",photos:[],uploadImage:{maxPhotoNum:1,imgTitle:t("image_upload"),canEdit:!0},areaCodes:["+86","+852","+853"],areaCode:"+86"}},components:{uploadImageAsync:o.default},onLoad:function(e){this.communityId=this.getCommunityId()},methods:{onPickerChange:function(e){this.areaCode=this.areaCodes[e.detail.value]},sendImagesData:function(e){this.photos=e[0].fileId},sexChange:function(e){this.sex=e.detail.value},_submitOwnerMember:function(e){var t={name:this.name,link:this.link,remark:this.remark,ownerTypeCd:this.ownerTypeCd,roomName:this.roomName,communityId:this.getCommunityId(),idCard:this.idCard,address:this.address,sex:this.sex,ownerPhoto:this.photos,areaCode:this.areaCode},n="";""==t.ownerId?n=this.$t("please_enter_owner"):""==t.name?n=this.$t("please_enter_name"):""==t.link?n=this.$t("please_enter_phone_number"):(0,i.checkPhoneNumber)(t.link,this.areaCode)||(n=this.$t("please_input_phone")),""==n?(0,r.saveRoomOwner)(this,t,!0).then((function(e){0==e.code?uni.navigateBack():uni.showToast({icon:"none",title:e.msg})})):uni.showToast({title:n,icon:"none",duration:2e3})},_changeTypeCd:function(e){this.typeCdIndex=e.detail.value,this.ownerTypeCd=this.typeCds[this.typeCdIndex].value}}};t.default=s},"96d7":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".block__title[data-v-b750f50c]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-b750f50c]{height:%?40?%}[data-v-b750f50c] .phone-input{display:flex;align-items:center}[data-v-b750f50c] .phone-input uni-picker{flex:none!important}",""]),e.exports=t},aa35:function(e,t,n){"use strict";n.r(t);var a=n("04b9"),i=n("7cec");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("308e");var r=n("828b"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"b750f50c",null,!1,a["a"],void 0);t["default"]=s.exports}}]);