<template>
	<view>
		<view v-if="noData==false">
			<view
v-for="(item,index) in orders"
:key="index"
				class="bg-white margin-top margin-right-xs radius margin-left-xs padding">
				<view class="flex padding-bottom-xs solid-bottom justify-between">
					<view>{{ item.complaintId }}</view>
					<view class="text-gray">{{ item.tel }}</view>
				</view>
				<view class="flex margin-top justify-between">
					<view class="text-gray">{{ $t('complaint_type') }}</view>
					<view class="text-gray">{{ item.typeName }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<view class="text-gray">{{ $t('complainant') }}</view>
					<view class="text-gray">{{ item.complaintName }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<view class="text-gray">{{ $t('home') }}</view>
					<view class="text-gray">{{ item.roomName }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<view class="text-gray">{{ $t('complainant_time') }}</view>
					<view class="text-gray">{{ item.createTime }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<view class="text-gray">{{ $t('complainant_content') }}</view>
					<view class="text-gray">{{ item.context }}</view>
				</view>
				<view class="solid-top flex justify-end margin-top padding-top-sm ">
					<button class="cu-btn sm line-gray" @click="_complaintDetail(item)">{{ $t('btn_details') }}</button>
					<button
class="cu-btn sm bg-blue  margin-left"
						@click="_complaintDispatch(item)">{{ $t('btn_conclude') }}</button>
				</view>
			</view>
		</view>
		<view v-else>
			<no-data-page></no-data-page>
		</view>
	</view>
</template>

<script>
	import {
		loadTodoCompaint
	} from '../../api/complaint/complaint.js'
	import noDataPage from '@/components/no-data-page/no-data-page.vue'
	import conf from '../../conf/config.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	export default {
		data() {
			return {
				state: '10001',
				orderImg: conf.baseUrl + 'img/order.png',
				orders: [],
				noData: false
			}
		},
		onLoad() {
			this.java110Context.onLoad();
		},
		onShow() {
			this._loadComplaintOrder();
		},
		components: {
			noDataPage
		},
		methods: {
			_loadComplaintOrder: function() {
				//
				const _that = this;
				const _userInfo = this.java110Context.getUserInfo();
				const storeId = _userInfo.storeId;
				const _objData = {
					page: 1,
					row: 15,
					storeId: storeId,
					userId: _userInfo.userId,
					communityId: getCurrentCommunity().communityId
				};

				loadTodoCompaint(this, _objData, this.orders.length == 0)
					.then(function(res) {
						if (res.statusCode != 200) {
							uni.showToast({
								icon: 'none',
								title: res.data
							});
							/*uni.navigateTo({
								url: '/pages/login/login'
							})*/
							return;
						}
						const _data = res.data;
						_that.orders = _data.data;
						if (_that.orders.length < 1) {
							_that.noData = true;
							return;
						}
						_that.orders.forEach(function(item) {
							const dateStr = item.createTime;
							const _startTime = dateStr.replace(/\-/g, '/')
							const _date = new Date(_startTime);
							item.createTime = (_date.getMonth() + 1) + '-' + _date.getDate();
						});
					})
			},
			_complaintDetail: function(_item) {
				console.log('_item', _item);
				uni.setStorageSync('_complaintOrderDetail_' + _item.complaintId, _item);
				uni.navigateTo({
					url: '/pages/complaintOrderDetail/complaintOrderDetail?complaintId=' + _item.complaintId
				});
			},
			_complaintDispatch: function(_item) {
				uni.navigateTo({
					url: '/pages/complaintHandle/complaintHandle?complaintId=' + _item.complaintId +
						'&taskId=' + _item.taskId
				});
			}
		}
	}
</script>

<style>

</style>