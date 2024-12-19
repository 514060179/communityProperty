<template>
	<view class="index-undo">
		<view class="undo-title">
			<text class="text-bold">{{ $t('i_u_title') }}</text>
		</view>
		<view class="undo-menu flex justify-start flex-wrap">
			<view class="menu-item" v-for="(item,index) in undoMenus" :key="index" @click="_toPage(item)">
				<view style="position: relative;">
					<image :src="item.icon"></image>
					<view><text class="texts">{{ $t(item.name) }}</text></view>
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
		name: 'IndexAc',
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
				this.undoMenus = [
					// 	{
					// 	icon: '/static/image/index_apply_audit.png',
					// 	name: 'i_u_work_done', //采购待办
					// 	url: '/pages/resource/purchaseApplyAuditOrders',
					// 	undoCount: this.undo.purchase,
					// 	pri: '502021052747070004'
					// }, {
					// 	icon: '/static/image/index_itemout_audit.png',
					// 	name: 'i_u_take_done', //领用待办
					// 	url: '/pages/resource/itemOutAuditOrders',
					// 	undoCount: this.undo.collection,
					// 	pri: '502021052762260006'
					// }, {
					// 	icon: '/static/image/index_allocation.png',
					// 	name: 'i_u_transfer_done', //调拨待办
					// 	url: '/pages/resource/allocationStorehouseAuditOrders',
					// 	undoCount: this.undo.allocation,
					// 	pri: '502021052707250008'
					// }, {
					// 	icon: '/static/image/index_complaint.png',
					// 	name: 'i_u_goods_release', //物品放行
					// 	url: '/pages/itemRelease/itemRelease',
					// 	undoCount: this.undo.itemReleaseCount,
					// 	pri: '502023011673900012'
					// }, 
					{
						icon: '/static/img/index/index-header-3.png',
						name: 'i_u_visitor_backlog', //访客待办
						url: '/pages/visit/visit',
						undoCount: this.undo.visitUndoCount,
						pri: '502023012597990035'
					}
				]
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

				.texts {
					font-family: Source Han Sans;
					font-size: 24rpx;
					font-weight: 500;
					line-height: 26rpx;
					letter-spacing: 0em;
					font-variation-settings: "opsz" auto;
					color: #2e3845;
				}
			}
		}
	}
</style>