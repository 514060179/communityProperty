<template>
	<view>
		<!-- 基本信息 -->
		<view class="block__title">{{$t('basic_info')}}</view>
		<view class="cu-form-group">
			<!-- 收费范围 -->
			<view class="title">{{$t('charge_range')}}</view>
			<!-- 必填,请输入收费范围 -->
			<input v-model="payerObjName" disabled="disabled" :placeholder="searchPlaceholder_charge_range"></input>
		</view>
		<view class="cu-form-group">
			<!-- 收费类型 -->
			<view class="title">{{$t('charge_type')}}</view>
			<picker cancelText="AA" confirmText="BB" :value="feeTypeCdIndex" :range="feeTypeCds" range-key="name"
				@change="_changeFeeTypeCd">
				<view class="picker">
					{{feeTypeCdIndex == -1 ?pleaseChoose:feeTypeCds[feeTypeCdIndex].name}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<!-- 收费项目 -->
			<view class="title">{{$t('charge_item')}}</view>
			<picker :value="configIndex" :range="feeConfigs" range-key="feeName" @change="_changeConfig">
				<view class="picker">
					{{configIndex == -1 ?pleaseChoose:feeConfigs[configIndex].feeName}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-if="computingFormula == '4004'">
			<!-- 收费金额 -->
			<view class="title">{{$t('charge_amount')}}</view>
			<!-- 必填,请输入收费金额 -->
			<input v-model="amount" :placeholder="searchPlaceholder_charge_price"></input>
		</view>
		<view class="cu-form-group">
			<!-- 计费起始时间 -->
			<view class="title">{{$t('billing_start_time')}}</view>
			<picker mode="date" :value="startTime" class="" start="2020-09-01" end="2050-09-01"
				@change="startTimeChange">
				<view class="picker">
					{{startTime||pleaseChoose}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="feeFlag != '1003006'">
			<!-- 计费结束时间 -->
			<view class="title">{{$t('billing_end_time')}}</view>
			<picker mode="date" :value="endTime" class="" start="2020-09-01" end="2050-09-01" @change="endTimeChange">
				<view class="picker">
					{{endTime||pleaseChoose}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-if="computingFormula == '1102'">
			<!-- 递增周期 -->
			<view class="title">{{$t('increase_cycle')}}</view>
			<!-- 必填,请输入递增周期 -->
			<input v-model="rateCycle" :placeholder="searchPlaceholder_increase_cycle"></input>
		</view>
		<view class="cu-form-group" v-if="computingFormula == '1102'">
			<!-- 计费递增率 -->
			<view class="title">{{$t('billing_increase_rate')}}</view>
			<!-- 必填,请输入计费递增率 -->
			<input v-model="rate" :placeholder="searchPlaceholder_increase_rate"></input>
		</view>
		<view class="cu-form-group" v-show="computingFormula == '1102'">
			<!-- 递增开始时间 -->
			<view class="title">{{$t('increase_start_time')}}</view>
			<picker mode="date" :value="rateStartTime" class="" start="2020-09-01" end="2050-09-01"
				@change="rateStartTimeChange">
				<view class="picker">
					{{rateStartTime||pleaseChoose}}
				</view>
			</picker>
		</view>

		<view class="flex flex-direction margin-top margin-bottom">
			<!-- 提交 -->
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="_submitCreateFee()">{{$t('submit')}}</button>
		</view>
	</view>
</template>

<script>
	import {
		queryDictInfo
	} from '../../api/apply/apply.js';
	import {
		queryFeeTypesItems
	} from '../../api/meter/meter.js';
	import {
		saveRoomCreateFee
	} from '../../api/fee/fee.js';
	export default {
		data() {
			return {
				payerObjName: '',
				payerObjId: '',
				feeTypeCds: [],
				feeTypeCd: '',
				feeTypeCdIndex: -1,
				feeConfigs: [],
				configId: '',
				configIndex: -1,
				startTime: '',
				feeFlag: '',
				endTime: '',
				computingFormula: '',
				amount: '',
				rateCycle: '',
				rate: '',
				rateStartTime: ''
			}
		},
		computed: {
			pleaseChoose() {
				return this.$t('please_select'); //必填,请输入收费范围
			},
			searchPlaceholder_charge_range() {
				return this.$t('mandatory_enter_charge_range'); //必填,请输入收费范围
			},
			searchPlaceholder_charge_price() {
				return this.$t('mandatory_enter_charge_price'); //必填,请输入收费范围
			},
			searchPlaceholder_increase_cycle() {
				return this.$t('mandatory_enter_increase_cycle'); //必填,请输入递增周期
			},
			searchPlaceholder_increase_rate() {
				return this.$t('mandatory_enter_billing_increase_rate'); //必填,请输入计费递增率
			}
		},
		onLoad(options) {
			this.payerObjId = options.payerObjId;
			this.payerObjName = options.payerObjName;
			this._loadFeeTypeCds();
		},
		methods: {
			_loadFeeTypeCds: function() {
				let _that = this;
				let _objData = {
					'name': "pay_fee_config",
					'type': "fee_type_cd",
				};
				queryDictInfo(this, _objData, this.feeTypeCds.length == 0)
					.then(function(_data) {
						let _datanew = [];
						_data.forEach((item, index) => {
							if (item.statusCd != "888800010015" && item.statusCd != "888800010016") {
								_datanew.push(item);
							}
						});
						_that.feeTypeCds = _datanew;
					})
			},
			_changeFeeTypeCd: function(e) {
				this.feeTypeCdIndex = e.detail.value;
				this.feeTypeCd = this.feeTypeCds[this.feeTypeCdIndex].statusCd;
				this._loadConfigs();
			},
			_loadConfigs: function() {
				if (!this.feeTypeCd) {
					return;
				}
				let _that = this;
				queryFeeTypesItems(this, {
					page: 1,
					row: 500,
					communityId: this.getCommunityId(),
					feeTypeCd: this.feeTypeCd,
					isDefault: 'F',
					valid: 1
				}, this.feeConfigs.length == 0).then(_data => {
					_that.feeConfigs = _data;
				})
			},
			_changeConfig: function(e) {
				let _that = this;
				this.configIndex = e.detail.value;
				this.configId = this.feeConfigs[this.configIndex].configId;

				if (this.feeTypeCd != '888800010006' && this.feeTypeCd != '888800010014' && this.feeFlag ==
					'1003006') {
					this.endTime = '';
				}
				this.feeConfigs.forEach(item => {
					if (_that.configId == item.configId) {
						_that.feeFlag = item.feeFlag;
						_that.computingFormula = item.computingFormula;
						return;
					}
				});
			},
			startTimeChange: function(e) {
				this.startTime = e.detail.value;
			},
			endTimeChange: function(e) {
				this.endTime = e.detail.value;
			},
			rateStartTimeChange: function(e) {
				this.rateStartTime = e.detail.rateStartTime;
			},
			_submitCreateFee: function() {
				saveRoomCreateFee(this, {
					"locationTypeCd": "3000",
					"locationObjId": this.payerObjId,
					"feeTypeCd": this.feeTypeCd,
					"configId": this.configId,
					"startTime": this.startTime,
					"feeFlag": this.feeFlag,
					"endTime": this.endTime,
					"computingFormula": this.computingFormula,
					"amount": this.amount,
					"rateCycle": this.rateCycle,
					"rate": this.rate,
					"rateStartTime": this.rateStartTime,
					"communityId": this.getCommunityId()
				}, true).then(_data => {
					if (_data.hasOwnProperty('code') && _data.code != 0) {
						uni.showToast({
							icon: 'none',
							title: _data.msg
						})
						return;
					}
					uni.showToast({
						icon: 'none',
						title: "创建收费成功，总共[" + _data.totalRoom + "]房屋，成功[" + _data.successRoom +
							"],失败[" + _data.errorRoom + "]"
					});
					uni.navigateBack()
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

	.button_up_blank {
		height: 40rpx;
	}
</style>