<template>
	<view>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" :placeholder="$t('enter_verification_code')" v-model="repairName"
					confirm-type="search"></input>
			</view>
			<view class="action">
				<!-- #ifdef MP-WEIXIN -->
				<!-- 扫码 -->
				<!-- #endif -->
				<button class="cu-btn bg-gradual-blue shadow-blur round"
					@click="scanCodeHandler()">{{$t('scan_code')}}</button>
				<!-- #ifdef H5 -->
				<!-- 扫码 -->
				<!-- <button class="cu-btn bg-gradual-blue shadow-blur round"
					@click="navigateToScan()">{{$t('scan_code')}}</button> -->
				<!-- #endif -->

				<!-- 核销 -->
				<button style="margin-left: 10px;" class="cu-btn bg-gradual-red shadow-blur round"
					@click="comfirmTimeId(repairName)">{{$t('verification')}}</button>
			</view>
		</view>
		<view v-if="noData==false">
			<view v-for="(item,index) in myOrders" :key="index"
				class="bg-white margin-top margin-right-xs radius margin-left-xs padding">
				<view class="flex padding-bottom-xs solid-bottom justify-between">
					<!-- 单号 -->
					<view style="font-size: 14px;">{{$t('order_number')}}<span style="margin-left: 10px;"
							class="text-gray">{{item.orderId}}</span></view>
				</view>
				<view class="flex margin-top justify-between">
					<!-- 场地 -->
					<view class="text-gray">{{$t('venue')}}</view>
					<view class="text-gray">{{item.spaceName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约日期 -->
					<view class="text-gray">{{$t('reservation_date')}}</view>
					<view class="text-gray">{{item.appointmentTime}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约时间 -->
					<view class="text-gray">{{$t('reservation_time')}}</view>
					<view class="text-gray">{{item.hours}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约人 -->
					<view class="text-gray">{{$t('reserver')}}</view>
					<view class="text-gray">{{item.personName }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约电话 -->
					<view class="text-gray">{{$t('reservation_phone')}}</view>
					<view class="text-gray">{{item.personTel }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 核销时间 -->
					<view class="text-gray">{{$t('verification_time')}}</view>
					<view class="text-gray">{{item.createTime}}</view>
				</view>

				<view class="solid-top flex justify-end margin-top padding-top-sm ">
					<!-- <button class="cu-btn sm bg-red margin-left" @click="dealRepair(item,'BACK')">退单</button> -->
				</view>
			</view>
			<uni-load-more :status="loadingStatus" :content-text="loadingContentText" />
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
		saveCommunitySpaceConfirmOrder
	} from '../../api/appointment/appointment.js'
	// 防止多次点击
	import {
		preventClick
	} from '../../lib/com/newland/property/utils/common.js';
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
				myOrders: [],
				orders: [],
				storeId: '',
				noData: false,
				page: 1,
				loadingStatus: 'loading',
				loadingContentText: {
					contentdown: translate('pull_up_to_load_more'),
					contentrefresh: translate('loading'),
					contentnomore: translate('no_more')
				},
				repairStates: [{
					name: translate('please_select') //'请选择'
				}],
				repairStatesIndex: 0,
				repairState: '',
				repairName: '',
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
			this.java110Context.onLoad()
		},
		onShow() {
			let _userInfo = this.java110Context.getUserInfo();
			let _storeId = _userInfo.storeId;
			this.storeId = _storeId;
			this.myOrders = [];
			this.page = 1;
			this._loadMyModify();
			let that = this
			// uni.$on('updateData', function(data) {
			// 	uni.showModal({
			// 		title: '成功',
			// 		content: data,
			// 		success: () => {

			// 		}
			// 	})
			// })

		},
		onReachBottom: function() {
			if (this.loadingStatus == 'noMore') {
				return;
			}
			this._loadMyModify();
		},
		methods: {
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
			_searchRepair: function() {
				this.myOrders = [];
				this.page = 1;
				this._loadMyModify();
			},

			repairStatesChange: function(e) {
				this.repairStatesIndex = e.target.value;
				if (this.repairStatesIndex == 0) {
					this.repairState = '';
					return;
				}
				let selected = this.repairStates[this.repairStatesIndex];
				this.repairState = selected.statusCd;
			},

			checkAuth: function(pid) {
				return this.java110Context.hasPrivilege(pid);
			},

			//http://{ip}:{port}/app/communitySpace.listCommunitySpaceConfirmOrder?communityId=2022081539020475&page=1&row=10
			// 获取核销订单
			_loadMyModify: function() {
				this.loadingStatus = 'more';
				let _that = this;
				let _userInfo = this.java110Context.getUserInfo();
				let storeId = _userInfo.storeId;
				let _objData = {
					page: _that.page,
					row: 15,
					userId: _userInfo.userId,
					communityId: getCurrentCommunity().communityId,
					repairName: _that.repairName,
					state: _that.repairState,
				};

				// debugger
				this.java110Context.request({
					url: url.listCommunitySpaceConfirmOrder,
					header: _that.java110Context.getHeaders(),
					method: "GET",
					data: _objData, //动态数据
					success: function(res) {
						// debugger
						let _json = res.data;
						if (_json.code != 0) {
							uni.showToast({
								icon: 'none',
								title: _json.msg
							});
							_that.onoff = true;
							return;
						}

						_that.myOrders = [];
						let _data = _json.data;
						_that.myOrders = _that.myOrders.concat(_data);
						// _that.page++;
						if (_that.myOrders.length < 1) {
							_that.noData = true;
							_that.onoff = true;
							return;
						} else {
							_that.noData = false;
						}
						if (_that.myOrders.length == _json.total) {
							_that.loadingStatus = 'noMore';
							_that.onoff = true;
							return;
						}
					},
					fail: function(e) {
						wx.showToast({
							title: _that.$t('server_error'), //"服务器异常了",
							icon: 'none',
							duration: 2000
						});
					}
				}, this.myOrders.length == 0);
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