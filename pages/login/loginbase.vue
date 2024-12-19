<template>
	<view class="page-login">
		<!-- 请登录 -->
		<!-- <view class="login-nav flex justify-center align-center"><text>{{$t('please_login')}}</text></view> -->
		<!-- 导航栏 -->
		<vc-tabbar isBack isFixed :title="$t('登录-kx4')" background="none" />
		<view>
			<scroll-view :scroll-y="true">
				<view class="flex justify-center logo">
					<view class="cu-avatar xl round  lage-avatar logo-lage"
						:style="'background-image:url('+logoUrl+');'">
					</view>
				</view>
				<view class="margin-top">
					<view class="cu-form-group margin-top">
						<!-- 用户名 -->
						<view class="title">{{$t('username')}}</view>
						<input :placeholder="$t('enter_username')" name="input" v-model="username"></input>
					</view>
					<view class="cu-form-group">
						<!-- 密码 -->
						<view class="title">{{$t('password')}}</view>
						<input :placeholder="$t('enter_password')" type="password" name="input"
							v-model="password"></input>
					</view>
				</view>

				<view class="padding flex flex-direction">
					<!-- 登录 -->
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="doLogin()">{{$t('login')}}</button>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		login,
		reLogin
	} from '../../lib/com/newland/property/api/Java110SessionApi.js'
	import conf from '../../conf/config.js';
	import {
		getCurrentCommunity,
		getCommunity
	} from '../../api/community/community.js'
	import {
		isNull
	} from '../../lib/com/newland/property/utils/StringUtil.js'
	import {
		listStaffPrivileges
	} from '../../api/index/index.js'
	import mapping from '../../constant/mapping.js'
	import {
		rejects
	} from 'assert';

	import vcTabbar from '@/components/vc-tabbar/vc-tabbar.vue'
	export default {
		data() {
			return {
				logoUrl: '',
				username: '',
				password: ''
			}
		},
		components: {
			vcTabbar
		},
		onLoad() {
			uni.hideTabBar({
				animation: false
			});
			reLogin();

			this.logoUrl = conf.baseUrl + 'logo.png';

		},
		onBackPress(options) {
			if (options.from === 'navigateBack') {
				return false;
			}
			plus.runtime.quit();
			return true;
		},
		methods: {

			doLogin: function() {
				let _that = this;
				if (this.username == '') {
					uni.showToast({
						icon: 'none',
						title: _that.$t('username_cannot_be_empty') // "用户名不能为空"
					});
					return;
				}

				if (this.password == '') {
					uni.showToast({
						icon: 'none',
						title: _that.$t('password_cannot_be_empty') //"密码不能为空"
					});
					return;
				}

				login(this.username, this.password)
					.then(res => {
						return res;
					}, err => {
						rejects(err);
					}).then((_data) => {
						listStaffPrivileges(true);
						return getCommunity(true, null, true);
					}).then(function(_communitys) {
						if (!_communitys || _communitys.length < 1) {
							uni.showToast({
								icon: 'none',
								title: _that.$t('employee_not_assigned_to_community') //'员工未分配小区'
							});
							return;
						}
						//随机放一个小区
						let _tmpCommunityInfo = _communitys[0];
						uni.setStorageSync(mapping.CURRENT_COMMUNITY_INFO, JSON.stringify(
							_tmpCommunityInfo));
						uni.reLaunch({
							url: '/pages/index/index'
						})
					})
			},

		}
	}
</script>

<style>
	.logo {
		margin-top: 160upx;
		margin-bottom: 140upx;
	}

	.logo .logo-lage {
		height: 180upx;
		width: 180upx;
	}

	.login-nav {
		background-color: #368cfe;
		height: 120upx;
	}

	.login-nav text {
		color: #ffffff;
		font-size: 30upx;
	}
</style>