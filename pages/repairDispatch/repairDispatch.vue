<template>
	<view>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<!-- 输入报修人 -->
				<input type="text" :placeholder="$t('enter_reporter')" v-model="repairName"
					confirm-type="search"></input>
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<picker :value="repairStatesIndex" :range="repairStates" :range-key="'name'"
					@change="repairStatesChange">
					<view>{{repairStates[repairStatesIndex].name}}</view>
				</picker>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-blue shadow-blur round"
					@tap="$preventClick(_searchRepair)">搜索</button>
			</view>
		</view>
		<view v-if="noData==false">
			<view v-for="(item,index) in myOrders" :key="index"
				class="bg-white margin-top margin-right-xs radius margin-left-xs padding">
				<view class="flex padding-bottom-xs solid-bottom justify-between">
					<view>{{item.repairId}}</view>
					<view class="text-gray">{{item.tel}}</view>
				</view>
				<view class="flex margin-top justify-between">
					<!-- 报修类型 -->
					<view class="text-gray">{{ $t('repair_type') }}</view>
					<view class="text-gray">{{item.repairTypeName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 报修人 -->
					<view class="text-gray">{{ $t('reporter') }}</view>
					<view class="text-gray">{{item.repairName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 位置 -->
					<view class="text-gray">{{ $t('location') }}</view>
					<view class="text-gray">{{item.repairObjName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 预约时间 -->
					<view class="text-gray">{{ $t('appointment_time') }}</view>
					<view class="text-gray">{{item.appointmentTime }}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 状态 -->
					<view class="text-gray">{{ $t('status') }}</view>
					<view class="text-gray"
						v-if="item.state == '1800' && (item.returnVisitFlag == '001' || item.returnVisitFlag == '002')">
						{{item.stateName}}(定时任务处理)</view>
					<view class="text-gray" v-else>{{item.stateName}}</view>
				</view>
				<view class="flex margin-top-xs justify-between">
					<!-- 报修内容 -->
					<view class="text-gray">{{ $t('repair_content') }}</view>
					<view class="text-gray">{{item.context}}</view>
				</view>
				<view class="solid-top flex justify-end margin-top padding-top-sm ">
					<!-- 詳情 -->
					<button class="cu-btn sm line-gray" @click="repairDetail(item)">{{ $t('details') }}</button>
					<view v-if="item.state == '2001'">
						<!-- 启动 -->
						<button class="cu-btn sm bg-blue margin-left"
							@click="startRepair(item)">{{ $t('start') }}</button>
					</view>
					<view v-else>
						<!-- 转单 -->
						<button class="cu-btn sm bg-orange margin-left"
							v-if="item.state == '1100' || item.state == '1200' ||item.state == '1300'"
							@click="dealRepair(item,'TRANSFER')">{{ $t('transfer_order') }}</button>
						<!-- 暂停 -->
						<button class="cu-btn sm bg-orange margin-left"
							v-if="item.state == '1100' || item.state == '1200' ||item.state == '1300'"
							@click="stopRepair(item)">{{ $t('pause') }}</button>
						<!-- 退单 -->
						<button class="cu-btn sm bg-red margin-left" v-if="item.preStaffId != '-1'"
							@click="dealRepair(item,'BACK')">{{ $t('chargeback') }}</button>
						<!-- 办结 -->
						<button class="cu-btn sm bg-blue margin-left"
							v-if="item.state == '1100' || item.state == '1200' ||item.state == '1300'"
							@click="dealRepair(item,'FINISH')">{{ $t('close_case') }}</button>
						<!-- 回访 -->
						<button class="cu-btn sm bg-blue margin-left"
							v-if="item.state == '1800' && item.returnVisitFlag == '003' && checkAuth('502021040151320003')"
							@click="dealAppraise(item)">{{ $t('return_visit') }}</button>
					</view>
				</view>
			</view>
			<uni-load-more :status="loadingStatus" :content-text="loadingContentText" />
		</view>
		<view v-else>
			<no-data-page></no-data-page>
		</view>
		<myModal :modalData='modal' @dataInput='dataInput'></myModal>
	</view>
</template>

<script>
	import noDataPage from '@/components/no-data-page/no-data-page.vue'
	import myModal from '@/components/modal/modal.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import url from '../../constant/url.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import {
		queryDictInfo,
		repairStart,
		repairStop
	} from '../../api/repair/repair.js'
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
					name: translate('please_select')
				}],
				repairStatesIndex: 0,
				repairState: '',
				repairName: '',
				modal: {
					showModal: false,
					title: translate('pause_reason'), //'暂停原因',
					text: translate('please_enter_pause_reason') //'请填写暂停原因'
				}
			}
		},
		components: {
			noDataPage,
			uniLoadMore,
			myModal
		},
		onLoad() {
			this.java110Context.onLoad()
			this.loadRepairState();
		},
		onShow() {
			let _userInfo = this.java110Context.getUserInfo();
			let _storeId = _userInfo.storeId;
			this.storeId = _storeId;
			this.myOrders = [];
			this.page = 1;
			this._loadMyModify();
		},
		onReachBottom: function() {
			if (this.loadingStatus == 'noMore') {
				return;
			}
			this._loadMyModify();
		},
		methods: {
			_searchRepair: function() {
				this.myOrders = [];
				this.page = 1;
				this._loadMyModify();
			},

			loadRepairState: function() {
				let _that = this;
				let _objData = {
					'name': "r_repair_pool",
					'type': "state",
				};
				queryDictInfo(this, _objData, this.repairStates.length == 0)
					.then(function(res) {
						_that.repairStates = _that.repairStates.concat(res);
					})
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

				this.java110Context.request({
					url: url.listStaffRepairs,
					header: _that.java110Context.getHeaders(),
					method: "GET",
					data: _objData, //动态数据
					success: function(res) {
						let _json = res.data;
						if (_json.code != 0) {
							uni.showToast({
								icon: 'none',
								title: _json.msg
							});
							_that.onoff = true;
							return;
						}

						let _data = _json.data;
						_that.myOrders = _that.myOrders.concat(_data);
						_that.page++;
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
							title: _that.$t('server_error'), // "服务器异常了",
							icon: 'none',
							duration: 2000
						});
					}
				}, this.myOrders.length == 0);
			},
			repairDetail: function(_item) {
				//wx.setStorageSync("_toModifyComplaint_"+_item.complaintId, _item);
				uni.navigateTo({
					url: "/pages/repairDetail/repairDetail?repairId=" +
						_item.repairId + '&storeId=' + this.storeId

				});
			},
			dealRepair: function(item, action) {
				console.log('item', item);
				uni.navigateTo({
					url: '/pages/repairHandle/repairHandle?action=' +
						action + "&repairId=" + item.repairId +
						"&repairType=" + item.repairType +
						"&preStaffId=" + item.preStaffId +
						"&preStaffName=" + item.preStaffName +
						"&repairObjType=" + item.repairObjType +
						"&publicArea=" + item.publicArea +
						"&repairChannel=" + item.repairChannel
				});
			},
			dealAppraise: function(item) {
				console.log(item);
				this.context.navigateTo({
					url: '/pages/appraiseRepair/appraiseRepair?' + "repairId=" + item.repairId +
						"&repairType=" + item.repairType +
						"&preStaffId=" + item.preStaffId +
						"&preStaffName=" + item.preStaffName +
						"&repairObjType=" + item.repairObjType +
						"&repairType=" + item.repairType +
						"&repairChannel=" + item.repairChannel +
						"&publicArea=" + item.publicArea +
						"&communityId=" + item.communityId
				})
			},

			startRepair: function(item) {
				let _that = this
				uni.showModal({
					title: '提示',
					content: _that.$t('confirm_start_repair'), //'确认启动报修',
					success: (res) => {
						if (res.confirm) {
							repairStart(this, item, true)
								.then((result) => {
									if (result.code == 0) {
										this.myOrders = [];
										this.page = 1;
										this._loadMyModify();
									}
									uni.showToast({
										title: result.msg
									})
								})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			stopRepair(item) {
				this.actItem = item;
				this.modal.showModal = true
			},

			// 组件中input中传过来的值
			dataInput(res) {
				let objData = {
					communityId: this.actItem.communityId,
					remark: res,
					repairId: this.actItem.repairId,
					repairType: this.actItem.repairType
				};
				repairStop(this, objData, true)
					.then((result) => {
						if (result.code == 0) {
							this.myOrders = [];
							this.page = 1;
							this._loadMyModify();
						}
						uni.showToast({
							title: result.msg
						})
					})
			}
		}
	}
</script>

<style>
</style>