<!--
 * @Author: jiatonglin
 * @Date: 2024-05-14 15:50:05
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-28 09:53:18
 * @FilePath: App.vue
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-14 15:50:05
-->
<script>
	import Vue from 'vue'
	import {
		hasSession
	} from './lib/com/newland/property/api/Java110SessionApi.js';
	import {
		requestNoAuth
	} from './lib/com/newland/property/request.js';

	import url from './constant/url.js'
	export default {
		onLaunch: function() {

			let lang = uni.getStorageSync('lang') || 'zh-Hant' // 获取已设置的语言，默认为繁体中文
			this.$i18n.locale = lang;
			//设置在缓存
			uni.setStorageSync('lang', lang);




			uni.getSystemInfo({
				success: function(e) {
					console.log("當前用戶的語言是" + e.language);
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});

			requestNoAuth({
				url: url.listSystemInfo,
				method: "GET",
				data: {
					page: 1,
					row: 1
				},
				success: function(res) {
					console.log(res.data);
					if (res.data.data && res.data.data.length > 0) {
						uni.setStorageSync('java110SystemConfig', res.data.data[0])
					}
					//reslove(res);
				},
				fail: function(e) {}

			});


		},
		onShow: function() {
			// console.log("當前用戶的語言是" + uni.getLocale());
			//判断用户是否登录
			hasSession();
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "lib/colorui/main.css";
	@import "lib/colorui/icon.css";

	body {
		background: #f8f9fa;
	}

	page {
		background: transparent;
	}

	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}

	/* #endif */
</style>