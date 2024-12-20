<!--
 * @Author: jiatonglin
 * @Date: 2024-05-14 15:50:05
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-28 11:01:37
 * @FilePath: work.vue
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-14 15:50:05
-->
<template>
	<view class="vc-index">
		<view class="header-bg"></view>
		<view>
			<vc-tabbar :title="$t('artery')" />
			 <workFunction/>
		</view>
	</view>
</template>

<script>
	import workFunction from '@/components/vc-index/work-function.vue'

	import vcTabbar from '@/components/vc-tabbar/vc-tabbar.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			workFunction,
			vcTabbar
		},
		onLoad() {
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.vc-index {
		position: relative;
		padding: 100rpx 34rpx;
		background: #f8f9fa;
		overflow: hidden;

		.header-bg {
			position: absolute;
			top: -250rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 1102rpx;
			height: 598rpx;
			border-radius: 0 0 100% 100%;
			overflow: hidden;
		}

		.header-bg::after {
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, #2fab81 0%, #39bbd2 99%);
		}
	}
</style>