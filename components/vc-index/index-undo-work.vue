<!--
 * @Author: jiatonglin
 * @Date: 2024-05-23 09:53:34
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-28 10:33:22
 * @FilePath: index-undo-work.vue
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-23 09:53:34
-->
<template>
	<view class="index-undo">
		<view class="undo-title">
			<text class="text-bold">{{ $t('i_u_w_title') }}</text>
		</view>
		<view class="undo-menu flex justify-start flex-wrap">
			<view class="menu-item" v-for="(item,index) in undoMenus" :key="index" @click="_toPage(item)">
				<view style="position: relative;">
					<view class="work-icon">{{ $t(item.name) }}</view>
					<!-- <view class="margin-top-sm" v-if="item.name=='抄'"><text>{{ $t('i_u_w_giveMe') }}</text></view>
          <view class="margin-top-sm" v-else><text>{{ $t('i_u_w_worksheet') }}</text></view> -->
					<view class="cu-tag badge" v-if="item.undoCount>0">
						<block>{{ item.undoCount>99?'99+':item.undoCount }}</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'IndexUndoWork',
		props: {
    		// 待处理数据
    		undo: {
      			type: Object,
      			default: () => {},
    		}
  		},
		data() {
			return {
				undoMenus: []
			};
		},
		mounted() {
  			this._initData();
		},
		methods: {
			_initData: function() {
				this.undoMenus = [{
					name: 'i_u_w_fa', //发
					url: '/pages/work/startWork',
					undoCount: this.undo.workSendCount,
					pri: '502021052747070004'
				}, {
					name: 'i_u_w_ban', //办
					url: '/pages/work/doWork',
					undoCount: this.undo.workUndDoCount,
					pri: '502021052762260006'
				}, {
					name: 'i_u_w_chao', //抄
					url: '/pages/work/copyWork',
					undoCount: this.undo.workUndoCopyCount,
					pri: '502021052707250008'
				}]
			},
			_toPage: function(_item) {
				// if(!this.java110Context.hasPrivilege(_item.pri)){
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'无权限，联系管理员'
				// 	});
				// 	return ;
				// }
				uni.navigateTo({
					url: _item.url
				})
			}
		}
	}
</script>

<style lang="scss">
	.index-undo {
		background: #ffffff;
		color: #ffffff;
		border-radius: 20rpx;
		border: 1upx solid;
		position: relative;

		.undo-title {
			font-family: Source Han Sans;
			font-size: 30rpx;
			font-weight: 500;
			line-height: 42rpx;
			font-variation-settings: "opsz" auto;
			color: #333333;
			padding: 20rpx;
		}

		.undo-menu {
			padding: 20rpx;

			.menu-item {
				width: 33.33%;
				padding: 30rpx;
				text-align: center;

				image {
					width: 80rpx;
					height: 80rpx;
				}

				.work-icon {
					width: 100rpx;
					height: 100rpx;
					line-height: 100rpx;
					font-size: 64rpx;
					color: #39bbd2;
					background: url("../../static/img/work/back.png") no-repeat;
					background-size: 100% 100%;
				}

				.badge {
					position: absolute;
					right: auto !important;
				}
			}
		}
	}
</style>