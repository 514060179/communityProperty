<template>
	<view>
		<view class="cu-bar bg-white search myfixed">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" :placeholder="$t('writeHomeCode')" v-model="roomNum" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-blue shadow-blur round" @tap="_searchMeter()">搜索</button>
				<!-- 开始抄表 -->
				<button class="cu-btn bg-gradual-orange shadow-blur round"
					@tap="_addMeter()">{{$t('start_meter_reading')}}</button>
			</view>
		</view>
		<view class="margin-top mytop">
			<view class="cu-list menu sm-border" v-for="(item,index) in meterReads" :key="index">
				<view class="cu-item">
					<view class="content">
						<view class="text-black text-xs">
							<text class="cuIcon-homefill text-blue "></text> {{item.objName}}
						</view>
						<!-- 本期读数 -->
						<view class="text-gray text-sm">
							<text>{{$t('current_reading')}}:</text> {{item.curDegrees}}
							<!-- 时间 -->
							<text style="margin-left: 7px;">{{$t('time')}}:</text> {{item.curReadingTime}}
						</view>
					</view>
					<view class="action">
						<text
							class="text-grey text-sm">{{item.meterType == 1010 ? $t('electric_meter'):$t('utilities')}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import noDataPage from '@/components/no-data-page/no-data-page.vue'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import url from '../../constant/url.js'
	export default {
		data() {
			return {
				orderImg: url.baseUrl + 'img/order.png',
				meterReads: [],
				roomNum: '',
			}
		},
		components: {
			noDataPage
		},
		computed: {
			getHomeCode() {
				return this.$t('writeHomeCode')
			}
		},
		onLoad() {
			this.java110Context.onLoad();
			let _userInfo = this.java110Context.getUserInfo();

			let _storeId = _userInfo.storeId;

			this.storeId = _storeId;
			this._loadMeterWaters();
		},
		onShow() {

		},
		methods: {
			_loadMeterWaters: function() {
				let _that = this;
				let _userInfo = this.java110Context.getUserInfo();
				let storeId = _userInfo.storeId;
				let _objData = {
					page: 1,
					row: 15,
					storeId: storeId,
					userId: _userInfo.userId,
					communityId: getCurrentCommunity().communityId,
					roomNum: _that.roomNum
				};
				this.java110Context.request({
					url: url.listMeterWaters,
					header: _that.java110Context.getHeaders(),
					method: "GET",
					data: _objData, //动态数据
					success: function(res) {
						console.log("请求返回信息：", res);
						let _json = res.data;
						if (_json.code != 0) {
							uni.showToast({
								icon: 'none',
								title: _json.msg
							});
							return;
						}
						let _data = _json.data;
						_that.meterReads = _data;
						_that.meterReads.forEach(function(item) {
							let dateStr = item.appointmentTime;
							console.log(dateStr);
							let _date = new Date(dateStr);
							item.appointmentTime = (_date.getMonth() + 1) + '-' + _date.getDate();
						});
					},
					fail: function(e) {
						wx.showToast({
							title: $t('server_error'),
							icon: 'none',
							duration: 2000
						});
					}
				}, this.meterReads.length == 0);
			},
			_searchMeter: function() {
				this._loadMeterWaters();
			},
			_addMeter: function() {
				uni.navigateTo({
					url: '/pages/addmeter/addmeter'
				});
			}

		}
	}
</script>

<style>
	.cu-list.menu-avatar>.cu-item .content-left {
		left: 30upx;
	}

	.cu-list+.cu-list {
		margin-top: 20upx;
	}


	.myfixed {
		position: fixed;
		z-index: 99;
		width: 100%;
		height: 30px;
		margin-top: -14px;
	}

	.mytop {
		padding-top: 35px;
	}
</style>