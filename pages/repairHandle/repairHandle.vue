<template>
	<view>
		<view v-if="action != 'FINISH'">
			<view class="cu-form-group margin-top" v-if="action == 'BACK'">
				<!-- 维修师傅 -->
				<view class="title">{{$t('maintenance_staff')}}</view>
				<input v-model="staffName" disabled="disabled" :placeholder="$t('please_enter_repairer')"></input>
			</view>
			<view class="cu-form-group margin-top" v-else>
				<!-- 维修师傅 -->
				<view class="title">{{$t('maintenance_staff')}}</view>
				<picker :value="repairStaffIndex" :range="staffCloums" :range-key="'staffName'" @change="staffChange">
					<view class="picker">
						{{staffCloums[repairStaffIndex].staffName}}
					</view>
				</picker>
			</view>
		</view>
		<view v-else>
			<view class="cu-form-group margin-top" v-if="repairObjType!='004'">
				<!-- 是否用料 -->
				<view class="title">{{$t('need_materials')}}</view>
				<picker :value="feeIndex" :range="feeCloums" :range-key="'name'" @change="feeChange">
					<view class="picker">
						{{feeCloums[feeIndex].name}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top" v-if="repairObjType=='004'">
				<!-- 维修类型 -->
				<view class="title">{{$t('maintenance_type')}}</view>
				<picker :value="feeIndex" :range="feeCloums" :range-key="'name'" @change="feeChange">
					<view class="picker">
						{{feeCloums[feeIndex].name}}
					</view>
				</picker>
			</view>
			<view v-if="feeFlag=='1001' || feeFlag=='1003'" class="flex flex-direction margin-top">
				<!-- 选择商品 -->
				<button class="cu-btn bg-blue margin-tb-sm lg"
					@click="_openSelectResourceModel()">{{$t('select_product')}}</button>
			</view>
			<view v-if="(feeFlag=='1001' || feeFlag=='1003') && resourceStoreInfo.length > 0">
				<view class="row">
					<!-- 商品 -->
					<view class="item-t text-bold">{{$t('product')}}</view>
					<!-- 价格 -->
					<view class="item-t text-bold" v-show="feeFlag=='1001'">{{$t('price')}}MOP</view>
					<!-- 数量 -->
					<view class="item-t text-bold">{{$t('quantity')}}</view>
					<!-- 操作 -->
					<view class="item-t text-bold">{{$t('operation')}}</view>
				</view>
				<view class="resource-item text-grey" v-for="(item, index) in resourceStoreInfo">
					<view class="row">
						<view class="item-t" v-if="!item.isCustom">
							{{item.resName}}({{item.specName ? item.specName : '-'}})
						</view>
						<view class="item-t" v-else>{{item.customGoodsName}}</view>
						<view class="item-t" v-show="feeFlag=='1001'">
							<input type="number" v-model="item.price" class="inline-input text-grey bg-white"
								@input="_updateTotalPrice()"
								:disabled="!item.isCustom && item.outHighPrice == item.outLowPrice" />
						</view>
						<view class="item-t">
							<text class="cuIcon-move text-black padding-right-sm padding-left-sm"
								@click="userNumberChange(index, 'dec')"></text>
							<input type="number" v-model="item.useNumber" class="inline-input text-grey bg-white"
								@input="_updateTotalPrice()" />
							<text class="cuIcon-add text-black padding-right-sm padding-left-sm"
								@click="userNumberChange(index, 'inc')"></text>
						</view>
						<view class="item-t">
							<!-- 移除 -->
							<text class="t-remove" @click="_removeResourceItem(index)">{{$t('remove')}}</text>
						</view>
					</view>
					<view class="row"
						v-show="feeFlag == '1001' && !item.isCustom && item.outHighPrice != item.outLowPrice">
						<!-- <view class="item-t text-grey text-sm"> -->
						<!-- 价格范围 -->
						{{$t('price_range')}}({{item.outLowPrice}} - {{item.outHighPrice}})
						<!-- </view> -->
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top" v-if="feeFlag=='1001'">
				<!-- 总计 -->
				<view class="title">{{$t('total')}}MOP</view>
				<input v-model="amount" disabled="disabled"></input>
			</view>
		</view>

		<view class="cu-form-group margin-top" v-if="feeFlag=='1001'">
			<!-- 支付方式 -->
			<view class="title">{{$t('payment_method')}}</view>
			<picker :value="payTypeIndex" :range="payTypes" :range-key="'name'" @change="payTypeChange">
				<view class="picker">
					{{payTypes[payTypeIndex].name}}
				</view>
			</picker>
		</view>

		<view class="cu-form-group margin-top">
			<textarea v-model="content" :placeholder="$t('please_enter_handling_comments')"></textarea>
		</view>

		<view v-if="action == 'FINISH'">
			<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :maxPhotoNum="uploadImageBefore.maxPhotoNum"
				:canEdit="uploadImageBefore.canEdit" :title="uploadImageBefore.imgTitle"
				@sendImagesData="sendImagesDataBefore" style="margin-top:30upx"></uploadImageAsync>
			<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :maxPhotoNum="uploadImageAfter.maxPhotoNum"
				:canEdit="uploadImageAfter.canEdit" :title="uploadImageAfter.imgTitle"
				@sendImagesData="sendImagesDataAfter" style="margin-top:30upx"></uploadImageAsync>
		</view>
		<view v-else>
			<!-- 派单、转单、退单 操作 去掉图片上传 -->
		</view>

		<view v-if="action=='FINISH'" class="flex flex-direction margin-top">
			<!-- 办结 -->
			<button class="cu-btn bg-blue margin-tb-sm lg"
				@click="$preventClick(_finishRepair)">{{$t('complete')}}</button>
		</view>
		<view v-else class="flex flex-direction margin-top">
			<!-- 提交 -->
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="_dispatchRepair()">提交</button>
		</view>
		<!-- <select-single-resource @getResourceInfo="_getResourceInfo" ref="selectsingleresource" :feeFlag="feeFlag"></select-single-resource> -->
	</view>
</template>

<script>
	import {
		loadRepairStaff,
		dispatchRepair,
		finishRepair,
		queryResourceStoreResName,
		queryRepairInfo,
		queryDictInfo
	} from '../../api/repair/repair.js'
	import {
		preventClick
	} from '../../lib/com/newland/property/utils/common.js';
	import Vue from 'vue'
	Vue.prototype.$preventClick = preventClick;
	// import selectSingleResource from '../../components/select-single-resource/select-single-resource.vue'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import uploadImageAsync from "../../components/vc-upload-async/vc-upload-async.vue";
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				onoff: true,
				staffCloums: [{
					staffName: translate('please_select_employee') //'请选择员工'
				}],
				action: '',
				repairId: '',
				publicArea: '',
				repairType: '',
				repairChannel: '',
				imgList: [],
				photos: [],
				beforeRepairImgList: [],
				afterRepairImgList: [],
				beforeRepairPhotos: [],
				afterRepairPhotos: [],
				repairStaffIndex: 0,
				staffId: '',
				staffName: '',
				content: '',
				userId: '',
				userName: '',
				feeFlag: '',
				amount: 0,
				feeCloums: [{
					id: "",
					name: translate('please_select') //'请选择'
				}],
				feeIndex: 0,
				repairObjType: '',
				storeId: '',
				resourceStoreInfo: [],
				payTypes: [{
					statusCd: "",
					name: translate('please_select')
				}],
				payTypeIndex: 0,
				payType: '',
				communityId: '',
				uploadImageBefore: {
					maxPhotoNum: 4,
					imgTitle: translate('upload_before_maintenance_image'), // '维修前图片上传',
					canEdit: true
				},
				uploadImageAfter: {
					maxPhotoNum: 4,
					imgTitle: translate('upload_after_maintenance_image'), //'维修后图片上传',
					canEdit: true
				}
			}
		},
		components: {
			uploadImageAsync
			//selectSingleResource
		},
		onLoad(options) {
			let _that = this;
			this.communityId = getCurrentCommunity().communityId;
			this.java110Context.onLoad();
			this.publicArea = options.publicArea;
			this.action = options.action;
			this.repairId = options.repairId;
			this.repairType = options.repairType;
			this.repairObjType = options.repairObjType;
			this.repairChannel = options.repairChannel;
			let _userInfo = this.java110Context.getUserInfo();
			this.userId = _userInfo.userId;
			this.storeId = _userInfo.storeId
			this.userName = _userInfo.userName;
			if (this.action == 'BACK') {
				this.staffId = options.preStaffId
				this.staffName = options.preStaffName
			}
			if (this.repairObjType == '004') {
				this.feeCloums.push({
					id: "1001",
					name: _that.$t('paid_service') //'有偿服务'
				}, {
					id: "1002",
					name: _that.$t('free_service') //'无偿服务'
				});
			} else {
				this.feeCloums.push({
					id: "1003",
					name: _that.$t('need_materials') //'需要用料'
				}, {
					id: "1004",
					name: _that.$t('no_need_materials') //'无需用料'
				});
			}
			this._loadRepairStaff();
			this._loadPayTypes();
			uni.$on('getResourceInfo', function(_data) {
				console.log(_data)
				_that._getResourceInfo(_data);
			});
		},
		onUnload() {
			uni.$off('getResourceInfo');
		},
		methods: {
			sendImagesDataBefore: function(e) {
				console.log('before', e);
				this.beforeRepairPhotos = [];
				if (e.length > 0) {
					e.forEach((img) => {
						this.beforeRepairPhotos.push(img.fileId);
					})
				}
			},
			sendImagesDataAfter: function(e) {
				console.log('after', e);
				this.afterRepairPhotos = [];
				if (e.length > 0) {
					e.forEach((img) => {
						this.afterRepairPhotos.push(img.fileId);
					})
				}
			},
			_loadPayTypes: function() {
				let _that = this;
				let _objData = {
					'name': "r_repair_pool",
					'type': "pay_type",
				};
				queryDictInfo(this, _objData, this.payTypes.length == 0)
					.then(function(res) {
						_that.payTypes = _that.payTypes.concat(res);
					})
			},
			payTypeChange: function(e) {
				this.payTypeIndex = e.target.value; //取其下标
				if (this.payTypeIndex == 0) {
					this.payType = '';
					return;
				}
				let selected = this.payTypes[this.payTypeIndex]; //获取选中的数组

				this.payType = selected.statusCd;
			},
			// 接收所选择物品信息
			_getResourceInfo: function(data) {
				data = JSON.parse(data);
				this.resourceStoreInfo.push(data);
				this._updateTotalPrice();
			},
			userNumberChange: function(index, action) {
				if (action == 'inc') {
					this.resourceStoreInfo[index].useNumber = parseFloat(this.resourceStoreInfo[index].useNumber) + 1;
				} else {
					if (this.resourceStoreInfo[index].useNumber <= 1) {
						uni.showToast({
							title: this.$t('cannot_reduce_further'), //'不能再减少啦',
							icon: 'none'
						});
						return;
					}
					this.resourceStoreInfo[index].useNumber -= 1;
				}
				this._updateTotalPrice();
			},
			_updateTotalPrice: function() {
				this.amount = 0;
				this.resourceStoreInfo.forEach((item) => {
					let num = parseFloat(item.useNumber);
					let price = parseFloat(item.price);
					if (!isNaN(num) && !isNaN(price)) {
						this.amount += num * price;
					}
				})
			},
			_removeResourceItem: function(index) {
				this.resourceStoreInfo.splice(index, 1);
				this._updateTotalPrice();
			},
			_openSelectResourceModel: function() {
				//this.$refs.selectsingleresource.switchShow();
				uni.navigateTo({
					url: '/pages/repairHandle/selectResource?feeFlag=' + this.feeFlag
				})
			},
			_loadRepairStaff: function() {
				let _that = this;
				let _data = {
					repairType: this.repairType,
					communtiyId: getCurrentCommunity().communityId,
					page: 1,
					row: 50,
					state: '9999'
				};
				loadRepairStaff(this, _data, this.staffCloums.length == 0)
					.then(function(res) {
						let _json = res.data;
						if (_json.code != 0) {
							uni.showToast({
								icon: 'none',
								title: _json.msg
							});
							return;
						}
						let _data = _json.data;
						_that.staffCloums = _that.staffCloums.concat(_data);
					});
			},

			staffChange: function(e) {
				this.repairStaffIndex = e.target.value //取其下标
				if (this.repairStaffIndex == 0) {
					this.staffId = '' //选中的id
					this.staffName = ''
					return;
				}
				let selected = this.staffCloums[this.repairStaffIndex] //获取选中的数组

				this.staffId = selected.staffId //选中的id
				this.staffName = selected.staffName
			},
			feeChange: function(e) {
				this.feeIndex = e.target.value //取其下标
				if (this.feeIndex == 0) {
					this.feeFlag = '' //未选择
					return;
				}
				let selected = this.feeCloums[this.feeIndex] //获取选中的数组
				this.feeFlag = selected.id //选中的id
			},

			_dispatchRepair: function(e) {
				let _that = this;
				dispatchRepair(this, true)
					.then(function(res) {
						let _json = res.data;
						if (_json.code == 0) {
							if (_that.action == 'DISPATCH') {
								uni.navigateTo({
									url: '/pages/repairOrder/repairOrder'
								})
								return;
							}
							uni.navigateTo({
								url: '/pages/repairDispatch/repairDispatch'
							})
							return;
						}
						wx.showToast({
							title: _json.msg,
							icon: 'none',
							duration: 2000
						})
					});
			},
			_finishRepair: function() {
				let _that = this;
				uni.showLoading({
					title: this.$t('chulizhong') //"处理中..."
				})
				finishRepair(this, true)
					.then(function(res) {
						let _json = res.data;
						if (_json.code == 0) {
							uni.navigateTo({
								url: '/pages/repairDispatch/repairDispatch'
							})
							return;
						}
						uni.showToast({
							title: _json.msg,
							icon: 'none',
							duration: 2000
						})
					});
				uni.hideLoading();
			}

		}
	}
</script>

<style>
	.use-num-container {
		display: flex;
		flex-direction: row;
	}

	.use-num-input {
		width: 100rpx;
		text-align: center;
		padding: 0;
	}

	.inc,
	.dec {
		border: 1px solid #000;
		border-radius: 50%;
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
	}

	.resource-item {}

	.row {
		width: 95%;
		margin: 0 auto;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.item-t {
		display: inline-block;
		text-align: center;
	}

	.inline-input {
		display: inline-block;
		width: 100rpx;
		vertical-align: middle;
		border-radius: 15rpx;
	}

	.t-remove {
		color: #0081FF;
		text-decoration: underline;
	}
</style>