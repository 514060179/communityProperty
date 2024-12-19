<template>
	<view>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" :placeholder="$t('enter_verification_code')" v-model="reserveQrcode"
					confirm-type="search"></input>
			</view>
			<view class="action">
				<!-- 扫码 -->
				<!-- <button class="cu-btn bg-gradual-blue shadow-blur round"
					@click="navigateToScan()">{{$t('scan_code')}}</button> -->
				<button class="cu-btn bg-gradual-blue shadow-blur round"
					@click="scanCodeHandler()">{{$t('scan_code')}}</button>
				<!-- 核销 -->
				<button style="margin-left: 10px;" class="cu-btn bg-gradual-red shadow-blur round"
					@click="comfirmTimeId(reserveQrcode)">{{$t('verification')}}</button>
			</view>
		</view>
		<view v-if="reserveOrders && reserveOrders.length>0">
			<view v-for="(item,index) in reserveOrders" :key="index"
				class="bg-white margin-top margin-right-xs radius margin-left-xs padding">
				<view class="flex padding-bottom-xs solid-bottom justify-between">
					<!-- 单号 -->
					<view style="font-size: 14px;">{{$t('order_number')}}<span style="margin-left: 10px;"
							class="text-gray">{{item.orderId}}</span></view>
				</view>
				<view class="flex margin-top justify-between">
					<!-- 商品/服务 -->
					<view class="text-gray">{{$t('product_service')}}</view>
					<view class="text-gray">{{item.goodsName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 核销数量 -->
					<view class="text-gray">{{$t('verification_quantity')}}</view>
					<view class="text-gray">{{item.quantity}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约日期 -->
					<view class="text-gray">{{$t('reservation_date')}}</view>
					<view class="text-gray">{{item.appointmentTime}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约小时 -->
					<view class="text-gray">{{$t('reservation_hours')}}</view>
					<view class="text-gray">{{item.hours}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约人 -->
					<view class="text-gray">{{$t('reserver')}}</view>
					<view class="text-gray">{{item.personName}}({{item.personTel}})</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 核销时间 -->
					<view class="text-gray">{{$t('verification_time')}}</view>
					<view class="text-gray">{{item.createTime}}</view>
				</view>
			</view>
		</view>
		<view v-else>
			<no-data-page></no-data-page>
		</view>
	</view>
</template>

<script>
	import noDataPage from '@/components/no-data-page/no-data-page.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import url from '../../constant/url.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import {
		getReserveGoodsConfirmOrder,
		saveReserveGoodsConfirmOrder
	} from '@/api/coupon/coupon.js'
	// 防止多次点击
	import {
		preventClick
	} from '@/lib/com/newland/property/utils/common.js';
	import {
		saveCommunitySpaceConfirmOrder
	} from '../../api/appointment/appointment.js'
	import Vue from 'vue'
	Vue.prototype.$preventClick = preventClick;
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				onoff: true,
				orderImg: url.baseUrl + 'img/order.png',
				reserveOrders: [],
				page: 1,
				loadingStatus: 'loading',
				loadingContentText: {
					contentdown: translate('pull_up_to_load_more'),
					contentrefresh: translate('loading'),
					contentnomore: translate('no_more')
				},
				reserveQrcode: '',
				modal: {
					showModal: false,
					title: translate('pause_reason'), // '暂停原因',
					text: translate('please_enter_pause_reason') //'请填写暂停原因'
				}
			}
		},
		components: {
			noDataPage,
			uniLoadMore
		},
		onLoad() {
			this.java110Context.onLoad();
			this._loadReserveUserDetail();
		},
		onShow() {
			let _userInfo = this.java110Context.getUserInfo();
			let _storeId = _userInfo.storeId;
			this.storeId = _storeId;
		},
		methods: {

			// 获取核销订单
			_loadReserveUserDetail: function() {
				let _that = this;
				getReserveGoodsConfirmOrder(this, {
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId
				}, this.reserveOrders.length == 0).then(_data => {
					_that.reserveOrders = _data.data;
				})
			},
			navigateToScan() {
				setTimeout(() => {
					uni.navigateTo({
						url: `/pages/appointment/hou_one`
					})
				}, 300)
			},
			comfirmTimeId(timeId) {
				// debugger
				let _that = this;
				if (!timeId) {
					return;
				}
				_that.reserveQrcode = timeId;
				setTimeout(function() {
					uni.showModal({
						cancelText: "取消", // 取消按钮的文字  
						confirmText: _that.$t('verification'), // "核销",
						content: _that.$t('check_off_code') + ':' + timeId, //"核销码
						success: (res) => {
							if (res.confirm) {
								wx.showToast({
									title: _that.$t('please_wait'), //"请稍后",
									icon: 'none'
								});
								saveReserveGoodsConfirmOrder(_that, {
									timeId: timeId,
									communityId: getCurrentCommunity().communityId
								}, true).then(function(_res) {
									uni.showToast({
										title: '操作成功'
									});
									_that.reserveQrcode = "";
									wx.hideLoading();
									_that._loadReserveUserDetail();
								});
							}
						}
					});
				}, 1000);

			},

			scanCodeHandler() {
				let that = this;
				// 调起条码扫描
				uni.scanCode({
					onlyFromCamera: true, // 是否只能从相机扫码，不允许从相册选择图片
					scanType: ['qrCode'], // 扫码类型 qrCode二维码
					autoZoom: false, // 是否启用自动放大，默认启用
					success: function(res) {
						console.log(`扫码结果：${JSON.stringify(res,null,2)}`);
						that.parseQRCode(res);
					},
					fail: function(err) {
						console.log(`错误：${err}`);
					},
					complete: function(data) {
						console.log('ok！');
					}
				});
			},
			// 解析二维码，处理业务
			parseQRCode(data) {
				uni.vibrateShort(); // 震动提示
				console.log({
					title: data.result
				});
				this.comfirmTimeId(data.result);
				//uni.showToast({title: data.result});	// 弹出提示
			},
			comfirmTimeId(timeId) {
				// debugger
				let _that = this;
				if (timeId != "") {
					// debugger
					_that.repairName = timeId;
					// debugger
					setTimeout(function() {
						uni.showModal({
							cancelText: "取消", // 取消按钮的文字  
							confirmText: _that.$t('verification'), //"核销",
							content: _that.$t('check_off_code') + ':' + timeId, //"核销码
							success: (res) => {
								if (res.confirm) {
									wx.showToast({
										title: _that.$t('please_wait'), //"请稍后",
										icon: 'none'
									});
									let params = {
										timeId: _that.repairName,
										communityId: getCurrentCommunity().communityId
									};
									saveCommunitySpaceConfirmOrder(_that, params, true).then(function(_res) {
										uni.showToast({
											title: '操作成功'
										});
										_that.repairName = "";
										wx.hideLoading();
										_that._loadMyModify();
									});
								}
							}
						});
					}, 1000);
				}
			},
		}
	}
</script>

<style>

</style>