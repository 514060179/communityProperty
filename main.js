import Vue from 'vue'
import App from './App'
import conf from './conf/config.js';
import Java110Context from './lib/com/newland/property/Java110Context.js'
import context from './lib/com/newland/property/context.js'
import url from './constant/url.js'
import factory from './lib/com/newland/property/factory/factory.js'
import util from './lib/com/newland/property/utils/util.js'
import date from './lib/com/newland/property/utils/date.js'
import {
	getCommunityId,
	getCommunityName
} from './api/community/community.js';
import {
	getStaffId,
	getStaffName,
	getStaffTel
} from './api/staff/staff.js';
//引入vuex
import store from './store'

import cuCustom from './lib/colorui/components/cu-custom.vue'
import {
	VueJsonp
} from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.component('cu-custom', cuCustom)
Vue.config.productionTip = false


Vue.prototype.java110Context = Java110Context;
Vue.prototype.java110Constant = Java110Context.constant;
Vue.prototype.java110Factory = Java110Context.factory;
Vue.prototype.java110Util = Java110Context.util;
Vue.prototype.$store = store;
Vue.prototype.context = context;
Vue.prototype.url = url;
Vue.prototype.factory = factory;
Vue.prototype.util = util;
Vue.prototype.date = date;
Vue.prototype.imgUrl = conf.imgUrl;
// 绑定小区信息
Vue.prototype.getCommunityId = getCommunityId;
Vue.prototype.getCommunityName = getCommunityName;

// 绑定员工
Vue.prototype.getStaffId = getStaffId;
Vue.prototype.getStaffName = getStaffName;
Vue.prototype.getStaffTel = getStaffTel;

App.mpType = 'app'


import i18n from './lang' // i18n部分的配置

import './utils/setDynamicPageTitles.js';

const app = new Vue({
	i18n,
	...App,
	store,
})
app.$mount()