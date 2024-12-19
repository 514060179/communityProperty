<template>
	<view class="privacy-container">
		<view class="dialog">
			<!-- 服务协议和隐私政策 -->
			<view class="title">{{ $t('service_agreement_and_privacy_policy') }}</view>
			<view class="content">
				<!-- 请你务必审慎阅读... -->
				{{ $t('please_read_and_understand_terms') }}
				<!-- 服务协议 -->
				<text class="link" @tap="linkClick('agreement')">{{ $t('service_agreement') }}</text>和
				<!-- 隐私政策 -->
				<text class="link" @tap="linkClick('privacy')">{{ $t('privacy_policy') }}</text>
				<!-- 了解详细信息 -->
				{{ $t('learn_more') }}
			</view>
			<view class="btn">
				<!-- 不同意并退出 -->
				<button @tap="disagree">{{ $t('disagree_and_exit') }}</button>
				<!-- 同意 -->
				<button @tap="agree">{{ $t('agree') }}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
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
			agree() {
				uni.setStorageSync('agree', 1) // 设置缓存，下次进入应用不再弹出
				if (getCurrentPages().length > 1) {
					uni.navigateBack()
				} else {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.privacy-container {
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.2); // 设置与启动页面相同的背景色，并设置一定透明度
		overflow: hidden;
		position: relative;
	}

	// 弹窗样式
	.dialog {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600rpx;
		border-radius: 16rpx;
		background-color: #fff;
		box-shadow: 0 0 40rpx 4rpx rgba(255, 255, 255, 0.2);

		.title {
			text-align: center;
			line-height: 100rpx;
			font-size: 32rpx;
			font-weight: 600;
		}

		.content {
			padding: 0 32rpx;
			text-indent: 1em;

			.link {
				color: blue;
			}
		}

		.btn {
			display: flex;
			flex: 1;

			uni-button {
				margin: 0;
				flex: 1;
				background-color: #fff;
			}

			uni-button::after {
				border: none;
			}
		}
	}
</style>