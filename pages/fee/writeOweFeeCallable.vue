<template>
	<view>
		<!-- 催缴登记 -->
		<view class="block__title">{{$t('reminder_registration')}}</view>
		<view class="cu-form-group margin-bottom-sm">
			<!-- 房屋 -->
			<view class="title">{{$t('house')}}</view>
			<input v-model="roomName" disabled="disabled" :placeholder="$t('please_enter_house')"
				class="text-right"></input>
		</view>
		<checkbox-group class="text-right" @change="_changeFees">
			<view class="cu-form-group" v-for="(item,index) in fees" :key="index">
				<view class="title">{{item.feeName}}</view>
				<checkbox class=' ' :value="item.feeId"></checkbox>
			</view>
		</checkbox-group>
		<view class="cu-form-group margin-top-sm">
			<textarea v-model="remark" :placeholder="$t('please_enter_reminder_note')"></textarea>
		</view>

		<view class="padding flex flex-direction">
			<!-- 登记 -->
			<button class="cu-btn bg-blue margin-tb-sm lg" @tap="_writeOweFee()">{{$t('register')}}</button>
		</view>
	</view>
</template>

<script>
	import {
		loadFees
	} from '../../api/fee/fee.js';
	import {
		writeOweFeeCallable
	} from '../../api/fee/callableFeeApi.js'
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				roomId: '',
				roomName: '',
				remark: '',
				fees: [{
					feeName: translate('testing'),
					feeId: '123'
				}],
				feeIds: []
			}
		},
		onLoad(options) {
			this.roomId = options.roomId;
			this.roomName = options.roomName;
			this._loadFees();
		},
		methods: {
			_loadFees: function() {
				let _that = this;
				loadFees(this, {
					payerObjId: this.roomId,
					page: 1,
					row: 50,
					communityId: this.getCommunityId(),
					state: '2008001'
				}, this.fees.length == 0).then(_data => {
					_that.fees = _data.data.fees;
				})
			},
			_changeFees: function(e) {
				this.feeIds = e.detail.value;
			},
			_writeOweFee: function() {
				writeOweFeeCallable(this, {
					communityId: this.getCommunityId(),
					feeIds: this.feeIds,
					remark: this.remark,
					roomId: this.roomId,
					roomName: this.roomName
				}, true).then(_data => {
					uni.showToast({
						icon: 'none',
						title: _data.msg
					});
					if (_data.code != 0) {
						return;
					}
					uni.navigateBack();
				})
			}
		}
	}
</script>

<style lang="scss">
	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}
</style>