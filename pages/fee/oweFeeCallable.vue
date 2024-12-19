<template>
	<view>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" :placeholder="$t('input_home_code')" v-model="roomName"
					confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn line-blue round" @tap="_loadRooms()">搜索</button>
				<!-- 登记 -->
				<button class="cu-btn line-blue round margin-left-sm" v-if="roomId"
					@tap="_wirteCallable()">{{$t('register')}}</button>
			</view>
		</view>
		<view class="margin-top" v-if="callables.length > 0">
			<view class="bg-white margin-bottom padding-sm margin-sm radius-sm" v-for="(item,index) in callables"
				:key="index">
				<view class="apply-title flex justify-between">
					<view>
						<text class="text-bold">{{item.feeName}}</text>
					</view>
					<view class="flex justify-start">
						<!-- <button class="cu-btn round sm line-black margin-left-sm"
							@tap="_toApplyDetail(item)">详情</button> -->
						{{item.createTime}}
					</view>
				</view>
				<view class="apply-content flex justify-start flex-wrap">
					<view class="item">
						<!-- 催缴方式 -->
						<text>{{$t('reminder_method')}}:</text>
						<text>{{item.callableWayName}}</text>
					</view>
					<view class="item">
						<!-- 业主 -->
						<text>{{$t('owner')}}:</text>
						<text>{{item.ownerName}}</text>
					</view>
					<view class="item">
						<!-- 催缴金额 -->
						<text>{{$t('reminder_amount')}}:</text>
						<text>{{item.amountdOwed}}</text>
					</view>
					<view class="item">
						<!-- 催缴人 -->
						<text>{{$t('reminder')}}:</text>
						<text>{{item.staffName}}</text>
					</view>
					<view class="item">
						<!-- 欠费段 -->
						<text>{{$t('section_arrears')}}:</text>
						<text>{{_formateDate(item.startTime)}}~{{_formateDate(item.endTime)}}</text>
					</view>
					<view class="item">
						<!-- 催缴说明 -->
						<text>{{$t('reminder_note')}}:</text>
						<text>{{item.remark}}</text>
					</view>
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
		loadRooms
	} from '@/api/room/room.js';
	import {
		queryOweFeeCallable
	} from '@/api/fee/callableFeeApi.js';
	import noDataPage from '../../components/no-data-page/no-data-page.vue';
	import {
		getDate,
		formatDate,
		formatNumber
	} from '../../lib/com/newland/property/utils/DateUtil.js';
	export default {
		data() {
			return {
				roomName: '',
				roomId: '',
				callables: []
			}
		},
		onShow() {
			if (!this.roomId) {
				return;
			}
			this._loadOweFeeCallable();
		},
		methods: {
			_loadRooms: function() {
				let _that = this;
				loadRooms(this, {
					page: 1,
					row: 1,
					communityId: this.getCommunityId(),
					flag: 1,
					roomNum: this.roomName
				}, true).then(_data => {
					let _json = _data.data;
					if (!_json.rooms || _json.rooms.length < 1) {
						uni.showToast({
							icon: 'none',
							title: _that.$t('house_not_exist') //'房屋不存在'
						});
						return;
					}
					_that.roomId = _json.rooms[0].roomId
					return _json.rooms[0];
				}).then(_data => {
					if (!_that.roomId) {
						return;
					}
					_that._loadOweFeeCallable();
				})
			},
			_loadOweFeeCallable: function() {
				let _that = this;
				queryOweFeeCallable(this, {
					page: 1,
					row: 50,
					communityId: this.getCommunityId(),
					payerObjId: this.roomId
				}, this.callables.length == 0).then(_data => {
					_that.callables = _data.data;
				})
			},
			_wirteCallable: function() {
				uni.navigateTo({
					url: '/pages/fee/writeOweFeeCallable?roomId=' + this.roomId + "&roomName=" + this.roomName
				})
			},

			_formateDate: function(_time) {
				let date = getDate(_time);
				const year = date.getFullYear();
				const month = date.getMonth();
				const day = date.getDate();
				return [year, month, day].map(formatNumber).join('-');
			}
		}
	}
</script>

<style lang="scss">
	.apply-title {
		height: 60upx;
		line-height: 50upx;
		border-bottom: 1upx solid #f1f1f1;
	}

	.apply-content {
		.item {
			width: 50%;
			margin-top: 20upx;
		}
	}

	.radius-sm {
		border-radius: 16upx;
	}
</style>