(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-resourceStoreReturn-resourceStoreReturn"],{"170c":function(e,t,s){"use strict";s("6a54");var o=s("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s("c223"),s("bf0f"),s("2797"),s("e966"),s("aa9c"),s("dd2b");var i=s("91e9"),n=s("cc44"),r=o(s("9b8e")),a=o(s("117a")),c=s("dae2");r.default.prototype.$preventClick=n.preventClick;var u={data:function(){return{onoff:!0,remark:"",resourceStores:[],supplierIndex:0,storeHouses:[{shId:"",shName:"请选择"}],selectedStoreHousesList:[],apply_type:2e4}},components:{selectResourceStaff:a.default},onLoad:function(){this.java110Context.onLoad(),this._loadResourceStoreHouses()},methods:{_openChooseResourceModel:function(){this.$refs.selectresourcestaff.switchShow()},_loadResourceStoreHouses:function(){var e=this,t={page:1,row:100,communityId:(0,c.getCurrentCommunity)().communityId,isShow:!0};(0,i.listStoreHouses)(this,t).then((function(t){e.storeHouses=e.storeHouses.concat(t.data)}))},save:function(){if(this.resourceStores.length<1)return this.onoff=!0,void this._showToast("请选择物品");var e="";if(""==this.remark&&(e="请输入退还说明"),this.resourceStores.forEach((function(t){!t.hasOwnProperty("curStock")||parseInt(t.curStock)<1?e="请填写数量":(t.curStock=parseInt(t.curStock),t.curStock>parseInt(t.miniStock)?e=t.resName+",库存不足":t.hasOwnProperty("shzId")&&""!=t.shzId||(e="请选择仓库"))})),""!=e)return this.onoff=!0,void this._showToast(e);var t={resourceStores:this.resourceStores,remark:this.remark,apply_type:this.apply_type,communityId:(0,c.getCurrentCommunity)().communityId};(0,i.saveAllocationStorehouse)(this,t).then((function(e){0!=e.code||uni.navigateBack({delta:1})}))},_getResourceInfo:function(e){var t=this;this.resourceStores=e,this.resourceStores.forEach((function(e){e.curStock=0,t.selectedStoreHousesList.push(0)}))},_removeItem:function(e,t){this.resourceStores.splice(e,1),this.$refs.selectresourcestaff.removeSelectedItem(t)},_itemReturnAll:function(e,t){this.resourceStores.forEach((function(e){e.resId==t&&(e.curStock=e.miniStock)})),this.$forceUpdate()},_decItemCurstock:function(e){this.resourceStores.forEach((function(t){t.resId==e&&t.curStock>1&&(t.curStock-=1)})),this.$forceUpdate()},_incItemCurstock:function(e){this.resourceStores.forEach((function(t){t.resId==e&&t.miniStock>t.curStock&&(t.curStock+=1)})),this.$forceUpdate()},_storeHousesChange:function(e,t){this.$set(this.selectedStoreHousesList,e,t.target.value),this.resourceStores[e].shzId=this.storeHouses[this.selectedStoreHousesList[e]].shId},_showToast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";uni.showToast({title:e,icon:t})}}};t.default=u},"1e19":function(e,t,s){"use strict";s.r(t);var o=s("170c"),i=s.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return o[e]}))}(n);t["default"]=i.a},5229:function(e,t,s){"use strict";s.r(t);var o=s("d66b"),i=s("1e19");for(var n in i)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(n);s("96ba");var r=s("828b"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"48dab4ff",null,!1,o["a"],void 0);t["default"]=a.exports},"70ba":function(e,t,s){var o=s("c86c");t=o(!1),t.push([e.i,".footer-step-fixed[data-v-48dab4ff]{width:100%;position:fixed;left:0;bottom:0;display:flex;justify-content:space-between;-moz-box-shadow:0 -5px 5px #ccc;box-shadow:0 -5px 5px #ccc;background-color:#fff}.step-item[data-v-48dab4ff]{width:100%;text-align:center;height:%?80?%;line-height:%?80?%}.cu-list.menu-avatar>.cu-item .content-left[data-v-48dab4ff]{left:0}.cu-list+.cu-list[data-v-48dab4ff]{margin-top:%?20?%}.flex uni-label[data-v-48dab4ff], .flex-around uni-label[data-v-48dab4ff]{width:%?250?%}.use-number[data-v-48dab4ff]{width:%?200?%;border-radius:%?15?%}.remark[data-v-48dab4ff]{width:80%;border-radius:%?15?%}.item-remove[data-v-48dab4ff]{border-radius:%?15?%;padding:%?2?% %?10?%}.flex-around[data-v-48dab4ff]{display:flex;justify-content:space-between;padding:0 %?20?%}",""]),e.exports=t},9002:function(e,t,s){var o=s("70ba");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=s("967d").default;i("dbba0836",o,!0,{sourceMap:!1,shadowMode:!1})},"96ba":function(e,t,s){"use strict";var o=s("9002"),i=s.n(o);i.a},d66b:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return o}));var o={selectResourceStaff:s("117a").default},i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-uni-view",[s("v-uni-view",{staticStyle:{"padding-bottom":"100rpx"}},[s("v-uni-view",{staticClass:"cu-bar bg-white search "},[s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._openChooseResourceModel()}}},[e._v("选择物品")])],1)],1),s("v-uni-view",{staticClass:"margin-top"},e._l(e.resourceStores,(function(t,o){return s("v-uni-view",{key:o,staticClass:"cu-list menu-avatar "},[s("v-uni-view",{staticClass:"cu-item",staticStyle:{height:"220rpx"}},[s("v-uni-view",{staticClass:"content content-left",staticStyle:{width:"100%"}},[s("v-uni-view",{staticClass:"text-grey flex-around"},[s("v-uni-text",{staticClass:"ellip"},[e._v(e._s(t.resName)+"("+e._s(t.parentRstName)+">"+e._s(t.rstName)+")")]),s("v-uni-text",{staticClass:"item-remove bg-red text-df",on:{click:function(s){arguments[0]=s=e.$handleEvent(s),e._removeItem(o,t.resId)}}},[e._v("移除")])],1),s("v-uni-view",{staticClass:"text-gray flex-around text-df",staticStyle:{margin:"10rpx 0"}},[s("v-uni-view",[s("v-uni-text",[e._v("当前库存:")]),s("v-uni-text",[e._v(e._s(t.miniStock)+e._s(t.miniUnitCodeName))])],1),s("v-uni-text",{staticClass:"item-remove bg-blue text-df",on:{click:function(s){arguments[0]=s=e.$handleEvent(s),e._itemReturnAll(o,t.resId)}}},[e._v("全部退还")])],1),s("v-uni-view",{staticClass:"text-gray flex-around"},[s("v-uni-label",[e._v("退还数量("+e._s(t.miniUnitCodeName)+"):")]),s("v-uni-view",{staticClass:"flex"},[s("v-uni-text",{staticClass:"cuIcon-move",on:{click:function(s){arguments[0]=s=e.$handleEvent(s),e._decItemCurstock(t.resId)}}}),s("v-uni-input",{staticClass:"use-number bg-gray",attrs:{type:"number",value:""},model:{value:t.curStock,callback:function(s){e.$set(t,"curStock",s)},expression:"item.curStock"}}),s("v-uni-text",{staticClass:"cuIcon-add",on:{click:function(s){arguments[0]=s=e.$handleEvent(s),e._incItemCurstock(t.resId)}}})],1)],1),s("v-uni-view",{staticClass:"text-gray flex-around"},[s("v-uni-label",[e._v("退还仓库:")]),s("v-uni-picker",{attrs:{value:e.selectedStoreHousesList[o],range:e.storeHouses,"range-key":"shName"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e._storeHousesChange(o,t)}}},[s("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.storeHouses[e.selectedStoreHousesList[o]].shName))])],1)],1)],1)],1)],1)})),1),s("v-uni-view",{staticClass:"cu-form-group margin-top"},[s("v-uni-view",{staticClass:"title"},[e._v("退还说明")]),s("v-uni-input",{attrs:{placeholder:"请输入退还说明"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1),s("v-uni-view",{staticClass:"footer-step-fixed"},[s("v-uni-view",{staticClass:"step-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$preventClick(e.save)}}},[e._v("提交")])],1),s("select-resource-staff",{ref:"selectresourcestaff",on:{getResourceInfo:function(t){arguments[0]=t=e.$handleEvent(t),e._getResourceInfo.apply(void 0,arguments)}}})],1)},n=[]}}]);