<template>
	<view>
		<view v-for="(item,index) in feeDetails" :key="index"
			class="bg-white margin-bottom-xs margin-right-xs radius margin-left-xs padding">
			<view class="flex padding-bottom-xs solid-bottom justify-between">
				<view>{{item.feeName}}</view>
				<view class="text-gray">{{item.createTime}}</view>
			</view>
			<view class="flex margin-top justify-between">
				<!-- 收费对象 -->
				<view class="text-gray">{{$t('charge_object')}}</view>
				<view class="text-gray">{{item.objName}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 缴费编码 -->
				<view class="text-gray">{{$t('billing_code')}}</view>
				<view class="text-gray">{{item.detailId}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 支付方式 -->
				<view class="text-gray">{{$t('payment_method')}}</view>
				<view class="text-gray">{{item.primeRate}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 起始时间 -->
				<view class="text-gray">{{$t('start_time')}}</view>
				<view class="text-gray">{{item.startTime}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 结束时间 -->
				<view class="text-gray">{{$t('end_time')}}</view>
				<view class="text-gray">{{item.endTime}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 缴费金额 -->
				<view class="text-gray">{{$t('payment_amount')}}</view>
				<view class="text-gray">{{item.receivedAmount}}MOP</view>
			</view>
			<view class="flex margin-top-xs justify-between" v-if="item.preDegrees">
				<!-- 上期度数 -->
				<view class="text-gray">{{$t('previous_degree')}}</view>
				<view class="text-gray">{{item.preDegrees}}</view>
			</view>
			<view class="flex margin-top-xs justify-between" v-if="item.curDegrees">
				<!-- 本期度数 -->
				<view class="text-gray">{{$t('current_degree')}}</view>
				<view class="text-gray">{{item.curDegrees}}</view>
			</view>
			<view class="flex margin-top-xs justify-between" v-if="item.preDegrees">
				<!-- 使用量 -->
				<view class="text-gray">{{$t('usage_amount')}}</view>
				<view class="text-gray">{{item.curDegrees-item.preDegrees}}</view>
			</view>
			<view class="flex margin-top-xs justify-between">
				<!-- 备注 -->
				<view class="text-gray">{{$t('remark')}}</view>
				<view class="text-gray">{{item.remark}}</view>
			</view>
		</view>
		<view v-if="!feeDetails || feeDetails.length < 1">
			<no-data-page></no-data-page>
		</view>
	</view>
</template>

<script>
	import {
		queryPayFeeDetail
	} from '@/api/fee/feeDetail.js';
	import {
		dateSubOneDay
	} from '../../lib/com/newland/property/utils/DateUtil.js';
	import {
		getCurrentCommunity
	} from '../../api/community/community.js';
	export default {
		name: "feeDetail",
		data() {
			return {
				feeDetails: [],
				ownerId: '',
				roomId: '',
				communityId: '',
				storeId: '',
				receivableAmount: 0,
			};
		},
		methods: {
			_loadFeeDetails(_param) {
				this.feeDetails = [];
				if (!_param || !_param.roomId) {
					return;
				}
				this.roomId = _param.roomId;
				this.communityId = getCurrentCommunity().communityId;
				this.roomId = _param.roomId;
				let _that = this;
				queryPayFeeDetail(this, {
					objId: this.roomId,
					communityId: this.communityId,
					page: 1,
					row: 50
				}, this.feeDetails.length == 0).then(_data => {
					let _feeDetails = _data.data;
					if (_feeDetails == null || _feeDetails == undefined) {
						_feeDetails = [];
					} else {
						_feeDetails.forEach(function(_feeDetail) {
							let _tmpCreateTime = _feeDetail.createTime.replace(/\-/g, "/")
							//let _createTime = new Date(_tmpCreateTime);
							_feeDetail.createTime = _tmpCreateTime;
						});
					}

					if (_feeDetails.length < 1) {
						_that.noData = true;
					}
					console.log(_feeDetails, _feeDetails.length, _that.noData);
					_that.feeDetails = _feeDetails;
					//_that.feeDetails = _data;
				});
			},


		}
	}
</script>

<style lang="scss">
	.ppf_item {
		padding: 0rpx 0rpx 0rpx 0rpx;
	}

	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}

	.button_up_blank {
		height: 40rpx;
	}

	.block__bottom {
		height: 180rpx;
	}

	.fee-last {
		margin-bottom: 200upx;
	}

	.cu-btn.lgplus {
		padding: 0 20px;
		font-size: 18px;
		height: 100upx;

	}

	.cu-btn.sharp {
		border-radius: 0upx;
	}

	.line-height {
		line-height: 100upx;
	}

	.uni-checkbox-input {}
</style>