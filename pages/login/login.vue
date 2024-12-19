<template>
	<view class="page-login" :style="{'padding-top': statusHeight + 'px'}">
		<!-- 请登录 -->
		<!-- <view class="login-nav flex justify-center align-center"><text>{{$t('please_login')}}</text></view> -->
		<!-- 导航栏 -->
		<vc-tabbar :title="$t('artery')" @clickTitle="clickTitle"></vc-tabbar>
		<view>
			<scroll-view :scroll-y="true" style="padding: 160rpx 40rpx;">
				<!-- 	<view class="flex justify-center logo">
					<view class="cu-avatar xl round  lage-avatar logo-lage"
						:style="'background-image:url('+logoUrl+');'">
					</view>
				</view> -->
				<view class="user-container flex flex-direction align-center">
					<view class="cu-avatar xl round lage-avatar"></view>
					<view class="margin-top texts" style="margin-top: 60rpx;">
						<!-- 您好，管理員！ -->
						<text style="color: #fff;">{{$t('hello_admin')}}</text>
					</view>
				</view>
				<view class="margin-top" style="margin-top: 50rpx;">
					<view class="title margin-top">{{$t('username')}}</view>
					<!-- <view class="cu-form-group"> -->
					<!-- 用户名 -->
					<!-- <input :placeholder="$t('enter_username')" name="input" v-model="username"></input> -->
					<!-- </view> -->
					<view class="item-cell">
						<view class="item-cell_area" @tap="openPopup('area')">
							<text>{{ areaItem.title }}</text>
						</view>
						<view class="item-cell_input">
							<input v-model="username" type="text" :placeholder="$t('enter_username')" />
						</view>
					</view>
					<view class="title margin-top">{{$t('password')}}</view>

					<!-- 密码 -->
					<!-- view class="cu-form-group">
						<input :placeholder="$t('enter_password')" type="password" name="input"
							v-model="password"></input>
				</view> -->
					<view class="item-cell">
						<image :src="`../../static/img/my/password.png`" />
						<view class="item-cell_input">
							<input v-model="password" :password="!showPass" :placeholder="$t('enter_password')" />
						</view>
						<image class="icon-eye" :src="passwordUrl" @tap="changePassType" />
					</view>
				</view>
				<!-- 隐私协议 -->
				<view class="protocol-content">
					<view class="protocol-hint" v-if="!isCheckedProtocol">
						<!-- 请勾选同意后再进行登录 -->
						<view class="hint">{{ $t('please_check_agree_before_login') }}</view>
					</view>
					<view class="protocol-box">
						<checkbox-group @change="changeProtocol">
							<checkbox value="protocol" :checked="isCheckedProtocol" />
						</checkbox-group>
						<view class="protocol-cell">
							<!-- 我已阅读并同意 -->
							<text>{{ $t('i_have_read_and_agree') }}</text>
							<!-- 用戶協議 -->
							<text class="primary-text" @tap="linkClick('agreement')">《{{ $t('user_agreement') }}》</text>
							<text>和</text>
							<!-- 隱私政策 -->
							<text class="primary-text" @tap="linkClick('privacy')">{{ $t('privacy_policy') }}</text>
						</view>
					</view>
				</view>

				<view class="flex flex-direction margin-top">
					<!-- 登录 -->
					<button class="cu-btn margin-tb-sm lg" @tap="doLogin()">{{$t('login')}}</button>
				</view>
			</scroll-view>
		</view>

		<vc-area-popup v-if="areaPopup" :selectArea="areaItem" @selectArae="changeArea" @close="closePopup" />
		<vc-protocol-popup v-if="protocolPopup" :type="protocolType" @close="closePopup" />
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
		isNull,
		checkPhoneNumber,
		checkPhoneNumbers
	} from '../../lib/com/newland/property/utils/StringUtil.js'
	import {
		listStaffPrivileges
	} from '../../api/index/index.js'
	import mapping from '../../constant/mapping.js'
	import {
		rejects
	} from 'assert';

	import vcTabbar from '@/components/vc-tabbar/vc-tabbar.vue'
	import vcProtocolPopup from '@/components/vc-protocol-popup/vc-protocol-popup.vue'
	import vcAreaPopup from '@/components/vc-area-popup/vc-area-popup.vue'
	import {
		log
	} from 'util';


	import context from '../../lib/com/newland/property/Java110Context.js'
	import java110Config from '../../lib/com/newland/property/Java110Config.js'

	export default {
		data() {
			return {
				logoUrl: '',
				username: '',
				password: '',
				isCheckedProtocol: false,
				// 隐私政策弹窗
				protocolPopup: false,
				// 用户协议 / 隐私政策
				protocolType: 'privacy',
				passwordUrl: '', //密码icon路径
				showPass: false, // 是否展示密码
				areaPopup: false, // 区号弹窗
				// 区号
				areaItem: {
					id: 1,
					title: '+853',
					desc: '中国澳门'
				},
			}
		},
		created() {
			const userLoginInfo = uni.getStorageSync(java110Config.USER_LOGIN_INFO);
			if (!isNull(userLoginInfo) && !isNull(userLoginInfo.areaitem)) {
				this.username = userLoginInfo.username;
				this.areaItem = userLoginInfo.areaitem;
				if (userLoginInfo.password != '') {
					this.password = userLoginInfo.password;
					this.isCheckedProtocol = true;
				}
			}
		},
		computed: {
			//状态栏高度
			statusHeight() {
				//#ifdef H5
				return 0;
				//#endif
				return uni.getSystemInfoSync().statusBarHeight || 10; //如果没有获取到高度，那么指定10px；
			}
		},
		components: {
			vcTabbar,
			vcAreaPopup,
			vcProtocolPopup
		},
		onLoad() {

			uni.hideTabBar({
				animation: false
			});
			reLogin();
			// #ifdef APP-PLUS
			// 判断是不是第一次进app,并且是否同意了隐私政策
			// 隐私政策
			let agree = uni.getStorageSync('agree')
			console.log(agree);
			if (agree) {
				// #ifdef APP-PLUS
				plus.navigator.closeSplashscreen() // 关闭启动页
				// #endif
			} else {
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/privacy/privacy",
						success() {

							// #ifdef APP-PLUS
							plus.navigator.closeSplashscreen() // 关闭启动页，解决先跳转首页再显示隐私政策的问题
							// #endif
						}
					})
				}, 500)
			}
			// #endif
			
			this.passwordUrl = "../../static/img/my/close-eye.png";
		},
		onBackPress(options) {
			if (options.from === 'navigateBack') {
				return false;
			}
			plus.runtime.quit();
			return true;
		},
		methods: {
			// 切换区号
			changeArea(e) {
				this.areaItem = e
				this.areaPopup = false
			},
			// 切换密码展示和隐藏
			changePassType() {
				this.showPass = !this.showPass
				this.passwordUrl = this.showPass ? "../../static/img/my/open-eye.png" : "../../static/img/my/close-eye.png";
			},
			// 关闭弹窗
			closePopup() {
				this.areaPopup = false
				this.protocolPopup = false
			},
			// 打开弹窗  区号/用户协议/隐私政策
			openPopup(type) {
				console.log(1222);
				if (type === 'area') {
					this.areaPopup = true
				} else if (type === 'privacy' || type === 'protocol') {
					this.protocolType = type
					this.protocolPopup = true
				}
			},

			changeProtocol(e) {
				this.isCheckedProtocol = e.detail.value.includes('protocol')
			},
			linkClick(type) {
				if (type === 'agreement') {
					// 用户协议
					// #ifdef H5
					window.open("https://property.newlandgo.com/agreement.html", '_blank')
					// #endif
					// #ifdef APP
					plus.runtime.openWeb('https://property.newlandgo.com/agreement.html')
					// #endif
				} else if (type === 'privacy') {
					// #ifdef H5
					window.open("https://property.newlandgo.com/privacy.html", '_blank')
					// #endif
					// 隐私政策
					// #ifdef APP
					plus.runtime.openWeb('https://property.newlandgo.com/privacy.html')
					// #endif
				}
			},
			doLogin: function() {
				let _that = this;

				if (this.username == '') {
					uni.showToast({
						icon: 'none',
						title: _that.$t('username_cannot_be_empty') // "用户名不能为空"
					});
					return;
				}
				if (!checkPhoneNumbers(_that.username, _that.areaItem.title)) {
					uni.showToast({
						title: _that.$t('手机号有误'),
						icon: 'none'
					})
					return
				}
				if (this.password == '') {
					uni.showToast({
						icon: 'none',
						title: _that.$t('password_cannot_be_empty') //"密码不能为空"
					});
					return;
				}
				if (!this.isCheckedProtocol) {
					uni.showToast({
						title: this.$t(
							'please_read_and_agree_to_user_agreement_and_privacy_policy'
						), //請閱讀並同意《用戶協議》和《隱私政策》
						icon: 'none'
					})
					return
				}
				login(this.username, this.password, this.areaItem)
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
						uni.showToast({
							icon: 'success',
							title: '登录成功',
							duration: 1000
						});

						uni.reLaunch({
							url: '/pages/index/index'
						})
					})
			},

			// 点击标题切换环境  连续点击六次
			clickTitle() {
				console.log(66666);
				// #ifdef APP-PLUS
				if (!conf.isSwitch) return

				clearTimeout(this.timer)

				this.clickNum = this.clickNum + 1

				this.timer = setTimeout(() => {
					this.clickNum = 0
					clearTimeout(this.timer)
				}, 500)

				if (this.clickNum >= 6) {
					this.clickNum = 0
					uni.showModal({
						title: '切换环境',
						content: `当前环境是 ${conf.isPro ? '生产' : '测试'}, 切换到的环境是 ${conf.isPro ? '测试' : '生产'} , 确定切换吗？`,
						success: (res) => {
							if (res.confirm) {
								context.clearStorage([
									'agree', 
									'userHeaderImg', 
									'protocolChecked',
									'userLoginPhone',
									java110Config.LOGIN_FLAG
								], false)
								uni.setStorageSync('evn', !conf.isPro)
								this.disagree()
							}
						}
					})
				}
				// #endif
			},
			disagree() {
				// #ifdef APP-PLUS
				let platform = uni.getSystemInfoSync().platform
				if (platform == 'ios') {
					plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
				} else if (platform == 'android') {
					plus.runtime.quit();
				}
				// #endif
			},
		}
	}
</script>

<style lang="scss" scoped>
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

	.page-login {
		height: 100vh;
		background: linear-gradient(180deg, #606EF0 0%, #008CD7 99%);

		.login-content {
			padding-top: 150rpx;
		}

		/deep/.lage-avatar {

			width: 140upx;
			height: 140upx;
			background: url('../../static/img/my/me.png') no-repeat;
			background-size: 100% 100%;
			z-index: 100;
		}

		.margin-top {
			.title {
				font-family: 思源黑体;
				font-size: 24rpx;
				font-weight: normal;
				line-height: 44rpx;
				letter-spacing: 0rpx;
				color: #FFFFFF;
			}

			.cu-form-group {
				border-radius: 40rpx;
			}
		}

		.protocol-content {
			margin-top: 30rpx;
			font-size: 24rpx;
			color: #ffffff;

			.protocol-hint {
				display: flex;

				.hint {
					padding: 6rpx 18rpx;
					border-radius: 8rpx;
					background-color: #00dada;
					position: relative;
					margin-bottom: 6rpx;

					&::after {
						content: '';
						position: absolute;
						left: 8rpx;
						bottom: -6rpx;
						width: 0;
						height: 0;
						border-left: 8rpx solid transparent;
						border-right: 8rpx solid transparent;
						border-top: 8rpx solid #00dada;
					}
				}
			}

			.protocol-box {
				display: flex;
				align-items: center;

				::v-deep uni-checkbox .uni-checkbox-input {
					width: 30rpx;
					height: 30rpx;
					color: #0074b8 !important;
					border-radius: 8rpx;
					border: none;
				}

				::v-deep uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before {
					font-size: 24rpx;
				}

				::v-deep uni-radio::before,
				uni-checkbox::before {
					content: none;
				}
			}

			.protocol-cell {
				margin-left: 20rpx;
			}

			.primary-text {
				color: #0f4be1;
			}
		}

		.flex-direction {
			.cu-btn {
				width: 100%;
				height: 100rpx;
				border-radius: 40rpx;
				background: #153D81;
				color: #fff;
				border-radius: 40rpx;
			}
		}
	}

	.item-cell {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 28rpx;

		.item-cell_area {
			display: flex;
			align-items: center;
			font-size: 24rpx;

			&::after {
				display: inline-block;
				content: " ";
				margin-left: 15rpx;
				margin-bottom: 10rpx;
				height: 14rpx;
				width: 14rpx;
				border-width: 0 4rpx 4rpx 0;
				border-color: #333333;
				border-style: solid;
				transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
				transform-origin: center;
				transition: transform .3s;
			}
		}

		.item-cell_input {
			flex: 1;
			padding: 0 20rpx 0 30rpx;

			::v-deep uni-input {
				font-size: 24rpx;
			}

			::v-deep .uni-input-placeholder {
				color: #C0C4CC;
			}
		}

		image {
			width: 40rpx;
			height: 40rpx;
		}

		.icon-eye {
			width: 40rpx;
			height: 30rpx;
		}

		.item-cell_button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 50rpx;
			padding: 10rpx;
			font-size: 20rpx;
			color: #ffffff;
			background: #C21DA0;
			border-radius: 10rpx;
		}
	}
</style>