(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-purchaseList-purchaseList"],{"41cd":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",[n("v-uni-view",{staticClass:"padding"},[t._v("商品信息")]),n("v-uni-view",{staticClass:"cu-list menu "},t._l(t.puchaseAll,(function(e,a){return n("v-uni-view",{key:a,staticClass:"cu-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._doChangeFloor(e)}}},[n("v-uni-view",{staticClass:"content padding-tb-sm"},[n("v-uni-view",[n("v-uni-text",{staticClass:"lg  cuIcon-list text-blue margin-right-xs"}),t._v("名称:"+t._s(e.resName))],1),n("v-uni-view",{staticClass:"text-gray text-sm"},[n("v-uni-text",{staticClass:"lg text-gray cuIcon-edit margin-right-xs"}),t._v("库存:"+t._s(e.stock))],1)],1)],1)})),1)],1)],1)},i=[]},e628:function(t,e,n){"use strict";n.r(e);var a=n("41cd"),i=n("ebc6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n("828b"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3258a35a",null,!1,a["a"],void 0);e["default"]=u.exports},ebc6:function(t,e,n){"use strict";n.r(e);var a=n("f4b5"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f4b5:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("dae2"),o=a(n("f3d1")),s={data:function(){return{puchaseAll:"",floorNum:"",communityId:"",floors:[]}},onLoad:function(t){this.java110Context.onLoad(),this.communityId=t.communityId,this._loadPurchase()},methods:{_loadPurchase:function(){this.communityId;var t=this,e=this.java110Context.getUserInfo(),n=e.storeId,a={page:1,row:15,storeId:n,communityId:(0,i.getCurrentCommunity)().communityId};this.java110Context.request({url:o.default.listResourceStores,header:t.java110Context.getHeaders(),method:"GET",data:a,success:function(e){console.log("请求返回信息：",e),200==e.statusCode?(t.puchaseAll=e.data.resourceStores,console.log(t.puchaseAll)):uni.showToast({icon:"none",title:e.data})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},_doChangeFloor:function(t){console.log(t),this.java110Context.setParam("floorInfo",t),uni.navigateBack({delta:1})}}};e.default=s}}]);