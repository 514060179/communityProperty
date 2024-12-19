<template>
	<view>
		<view class="header flex justify-around align-center">
			<view class="header-item " v-for="(item,index) in headerMenus" :key="index" @click="_toPage(item)">
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
import { listStaffPrivileges } from '@/api/index/index.js';
	export default {
		name: 'IndexHeader',
		props: {
    		// 待处理数据
    		undo: {
      			type: Object,
      			default: () => {},
    		}
  		},
		data() {
			return {
				headerMenus: []
			};
		},
		mounted() {
  			this._initData();
		},
		methods: {
			_initData: function() {
				this.headerMenus = [{
						icon: '/static/img/index/index-header-1.png',
						name: 'i_h_complaint_pending', //投诉待办
						url: '/pages/complaintList/complaintList',
						undoCount: this.undo.complaint,
						pri: '502021012519810021'
					}, {
						icon: '/static/img/index/index-header-2.png',
						name: 'i_h_repair_done', //报修待办
						url: '/pages/repairDispatch/repairDispatch',
						undoCount: this.undo.repair,
						pri: '502021012507510017'
					},
					{
						icon: '/static/img/index/index-header-3.png',
						name: 'i_u_visitor_backlog', //访客待办
						url: '/pages/visit/visit',
						undoCount: this.undo.visitUndoCount,
						pri: '502023012597990035'
					},
					{
						icon: '/static/img/index/index-header-4.png',
						name: 'i_h_inspection_punch', //巡检打卡
						url: '/pages/inspection/inspection',
						undoCount: this.undo.inspectionTaskCount,
						pri: '502021012567490019'
					},
					// {
					// 	icon: '/static/image/index/i_machine.png',
					// 	name: 'i_h_equipment_maintenance', //设备保养
					// 	url: '/pages/maintainance/maintainance',
					// 	undoCount: this.undo.maintainanceTaskCount,
					// 	pri: '502022110923120007'
					// },
				]
			},
			_toPage: function(_item) {
				if (uni.getStorageSync('hc_staff_privilege') == '') {
					listStaffPrivileges(true).then(_data => {
						this._navigateToPage(_item);
					});
				} else {
					this._navigateToPage(_item);
				}
			},
			_navigateToPage: function(_item) {
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
	.header {
		width: 100%;
		/** #ifndef H5 **/
		height: 220rpx;
		/** #endif **/
		/** #ifdef H5 **/
		height: 300rpx;
		/** #endif **/
		// background-color: #368CFE;

		background: #ffffff;
		color: #ffffff;
		border-radius: 20rpx;
		border: 1upx solid;
		position: relative;

		.header-item {
			//margin-top: 50rpx;
			text-align: center;

			image {
				height: 80rpx;
				width: 80rpx;
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
</style>