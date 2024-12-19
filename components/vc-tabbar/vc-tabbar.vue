<template>
	<view :style="{ height: isFixed ? '90rpx' : '90rpx' }">
		<!-- 	<view class="tabbar-container" :class="{ 'tabbar-fixed': isFixed }" :style="{ background }">
			<image v-if="isBack" src="../../static/image/icons/back-icon.png" @tap="pageBack" />
			<view class="tabbar-title" :style="{ color: titleColor }">{{ title }}</view>
			<slot name="tabbar-right" />
		</view> -->
		<!-- #ifdef H5 -->
		<view style="height: 90rpx" v-if="isFixed"></view>
		<!-- #endif -->
		<view class="tabbar-container" :class="{ 'tabbar-fixed': isFixed }"
			:style="{ background, top: isFixed ? statusHeight : 'none' }">
			<image v-if="isBack" src="../../static/image/icons/back-icon.png" @tap="pageBack" />
			<view class="tabbar-title" :style="{ color: titleColor }" @tap="clickTitle">{{ title }}</view>
			<slot name="tabbar-right" />
		</view>
	</view>

</template>

<script>
	export default {
		name: "VcTabbar",

		props: {
			isBack: {
				type: Boolean,
				default: false
			},
			background: {
				type: String,
				default: 'transparent'
			},
			title: {
				type: String
			},
			titleColor: {
				type: String,
				default: '#ffffff'
			},
			isFixed: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			pageBack() {
				let pages = getCurrentPages();
				if (pages.length > 1) {
					this.$router.back()
				} else {
					uni.reLaunch({
						url: '/pages/index/index',
					})
				}
			},
			clickTitle() {
				this.$emit('clickTitle')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar-container {
		width: 100%;
		height: 90rpx;
		padding: 0 30rpx 0 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

		.tabbar-title {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-family: Source Han Sans;
			font-size: 30rpx;
			font-weight: 500;
		}

		image {
			width: 36rpx;
			height: 32rpx;
		}
	}

	.tabbar-fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;

		&::after {
			content: '';
			display: inline-block;
			height: 90rpx;
		}
	}
</style>