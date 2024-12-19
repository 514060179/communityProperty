<!--
 * @Author: jiatonglin
 * @Date: 2024-05-14 15:50:05
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-23 17:36:17
 * @FilePath: order-data-report.vue
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-14 15:50:05
-->
<template>
	<view>
		<view class="index-undo">
			<view class="undo-title">
				<!-- 工单类 -->
				<text class="text-bold">{{$t('work_order_category')}}</text>
			</view>
			<view class="undo-menu flex justify-start flex-wrap">
				<view class="menu-item" v-for="(item,index) in orders" :key="index" @click="_toPage(item)">
					<view style="position: relative;">
						<view class="item-value"><text>{{item.value}}</text></view>
						<view class="item-name"><text>{{$t(item.name)}}</text></view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		queryOrderDataReport
	} from '@/api/report/feeReport.js'
	export default {
		name: "orderDataReport",
		data() {
			return {
				orders: []
			};
		},
		methods: {
			_loadOrderData: function(startDate, endDate) {
				let _that = this;
				queryOrderDataReport(this, {
					communityId: this.getCommunityId(),
					startDate: startDate,
					endDate: endDate
				}, this.orders.length == 0).then(_data => {
					_that.orders = _data.data;
				})
			},
			_toPage: function(_item) {
				if (!this.java110Context.hasPrivilege(_item.pri)) {
					uni.showToast({
						icon: 'none',
						title: '无权限，联系管理员'
					});
					return;
				}
				uni.navigateTo({
					url: _item.url
				})
			}

		}
	}
</script>

<style lang="scss">
	.index-undo {
		background-color: #ffffff;

		.undo-title {
			padding: 20upx;
			border-bottom: 1upx solid #f1f1f1;
		}

		.undo-menu {
			padding: 20upx;

			.menu-item {
				width: 33.33%;
				padding: 30upx;
				text-align: center;

				.item-name {
					color: #777;
					margin-top: 10upx;
				}

				.item-value {
					color: #f28a4a;
					font-size: 32upx;
				}

				border-bottom: 1upx solid #f1f1f1;
				border-right: 1upx solid #f1f1f1;
			}

			.menu-item:nth-child(3n + 3) {
				border-right: none;
			}

			.menu-item:nth-child(n + 4) {
				border-bottom: none;
			}
		}
	}
</style>