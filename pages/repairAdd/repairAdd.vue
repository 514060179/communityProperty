<template>
	<view>
		<!-- 、房屋信息 -->
		<view class="block__title">{{$t('house_information')}}</view>
		<view class="cu-form-group">
			<!-- 位置 -->
			<view class="title">{{$t('location')}}</view>
			<picker bindchange="PickerChange" :value="repairScopeIndex" :range="repairScopes" :range-key="'name'"
				@change="repairScopeChange">
				<view class="picker">
					{{repairScopes[repairScopeIndex].name}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group arrow"
			v-if="repairObjType == '002' || repairObjType =='003' || repairObjType == '004'" @tap="chooseFloor">
			<!-- 楼栋 -->
			<view class="title">{{$t('building')}}</view>
			<input required readonly label="楼栋" v-model="floorNum" class="text-right"
				:placeholder="$t('select_building')" name="floorNum" icon="arrow"></input>
			<text class='cuIcon-right'></text>
		</view>
		<view class="cu-form-group arrow" v-if="repairObjType =='003' || repairObjType == '004'" @tap="chooseUnit">
			<!-- 单元 -->
			<view class="title">{{$t('unit')}}</view>
			<input v-model="unitNum" :placeholder="$t('select_unit')" class="text-right"></input>
			<text class='cuIcon-right'></text>
		</view>
		<view class="cu-form-group" v-if="repairObjType == '004'" @tap="chooseRoom">
			<!-- 房屋信息 -->
			<view class="title">{{$t('house_information')}}</view>
			<input v-model="roomNum" :placeholder="$t('select_house')" class="text-right"></input>
			<text class='cuIcon-right'></text>
		</view>
		<!-- 报修信息 -->
		<view class="block__title">{{$t('repair_information')}}</view>
		<view class="cu-form-group">
			<!-- 报修类型 -->
			<view class="title">{{$t('repair_type')}}</view>
			<picker id="complaintType" bindchange="PickerChange" :value="repairTypeIndex" :range-key="'repairTypeName'"
				:range="repairTypes" @change="repairTypeChange">
				<view class="picker">
					{{repairTypes.length==0 ? $t('please_select') : repairTypes[repairTypeIndex].repairTypeName}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-if="priceScope !=''">
			<!-- 收费标准 -->
			<view class="title">{{$t('charge_standard')}}</view>
			<input disabled="disable" v-model="priceScope" class="text-right"></input>
		</view>
		<view class="cu-form-group">
			<!-- 报修人 -->
			<view class="title">{{$t('reporter')}}</view>
			<input v-model="bindRepairName" :placeholder="$t('enter_reporter')" class="text-right"></input>
		</view>
		<view class="cu-form-group">
			<!-- 手机号 -->
			<view class="title">{{$t('phone_number')}}</view>
			<view class="phone-input">
				<input v-model="bindTel" :placeholder="$t('enter_phone_number')" class="text-right"></input>
				<picker mode="selector" :range="areaCodes" @change="onPickerChange">
					<view class="picker">
						{{ areaCode }}
					</view>
				</picker>
			</view>
		</view>
		<view class="cu-form-group arrow">
			<!-- 预约日期 -->
			<view class="title">{{$t('appointment_date')}}</view>
			<picker mode="date" :value="bindDate" start="2020-09-01" end="2050-09-01" @change="dateChange">
				<view class="picker">
					{{bindDate}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group arrow">
			<!-- 预约时间 -->
			<view class="title">{{$t('appointment_time')}}</view>
			<picker mode="time" :value="bindTime" start="08:30" end="22:00" @change="timeChange">
				<view class="picker">
					{{bindTime}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group margin-top">
			<textarea v-model="context" :placeholder="$t('enter_repair_content')"></textarea>
		</view>
		<!-- 相关图片 -->
		<view class="block__title">{{$t('related_images')}}</view>
		<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :maxPhotoNum="uploadImage.maxPhotoNum"
			:canEdit="uploadImage.canEdit" :title="uploadImage.imgTitle" @sendImagesData="sendImagesData">
		</uploadImageAsync>

		<view class="button_up_blank"></view>
		<view class="flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="$preventClick(submitRepair)">提交</button>
		</view>

	</view>
</template>

<script>
	// pages/enterCommunity/enterCommunity.js
	import * as TanslateImage from '../../lib/com/newland/property/utils/translate-image.js';
	import {
		preventClick
	} from '../../lib/com/newland/property/utils/common.js';
	import Vue from 'vue'
	Vue.prototype.$preventClick = preventClick;
	import stringUtil from '../../lib/com/newland/property/utils/StringUtil.js';
	import {
		getCurrentCommunity
	} from '../../api/community/community.js';
	import url from '../../constant/url.js';
	import uploadImageAsync from "../../components/vc-upload-async/vc-upload-async.vue";

	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				onoff: true,
				minDate: new Date().getTime(),
				bindDate: translate('please_select'), //'请选择',
				bindTime: translate('please_select'), //'请选择',
				roomCloums: [],
				roomIdArr: [],
				roomName: "",
				roomId: '',
				roomShow: false,
				typeName: '',
				repairType: '',
				typeShow: false,
				timeShow: false,
				imgList: [],
				bindTel: '',
				context: '',
				bindRepairName: '',
				photos: [],
				communityId: "",
				communityName: "",
				complaintIndex: 0,
				index: 0,
				repairScopes: [{
						id: '001',
						name: translate('community'), //'小区'
					},
					{
						id: '002',
						name: translate('building'), //'楼栋'
					},
					{
						id: '003',
						name: translate('unit'), //'单元'
					},
					{
						id: '004',
						name: translate('house'), //'房屋'
					}
				],
				repairTypes: [],
				repairTypeIndex: 0,
				repairScopeIndex: 0,
				repairObjType: '001',
				repairObjId: '',
				repairObjName: '',
				floorNum: '',
				floorId: '',
				unitNum: '',
				unitId: '',
				roomNum: '',
				roomId: '',
				priceScope: '',
				uploadImage: {
					maxPhotoNum: 4,
					imgTitle: translate('image_upload'), //'图片上传',
					canEdit: true
				},
				areaCodes: ['+86', '+852', '+853'],
				areaCode: '+86'
			};
		},

		components: {
			uploadImageAsync
		},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.java110Context.onLoad();
			let _userInfo = this.java110Context.getUserInfo();
			this.communityId = getCurrentCommunity().communityId;
			this.communityName = getCurrentCommunity().name;
			//加载报修类型
			this._loadRepairTypes();
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			let _floor = uni.getStorageSync("_selectFloor");
			if (this.util.isNotNull(_floor)) {
				this.floorNum = _floor.floorNum + this.$t('building_block') //"栋";
				this.floorId = _floor.floorId;
			}
			let _unit = uni.getStorageSync("_selectUnit");
			if (this.util.isNotNull(_unit)) {
				this.unitNum = _unit.unitNum + this.$t('unit') //"单元";
				this.unitId = _unit.unitId;
			}
			let _room = uni.getStorageSync("_selectRoom");
			if (this.util.isNotNull(_room)) {
				this.roomNum = _room.roomNum + this.$t('room') //"室";
				this.roomId = _room.roomId;
			}
		},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {
			//清理楼栋和单元
			uni.removeStorageSync("_selectFloor");
			uni.removeStorageSync("_selectUnit");
			uni.removeStorageSync("_selectRoom");
		},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			// 手机号选择
			onPickerChange(e) {
				this.areaCode = this.areaCodes[e.detail.value];
			},
			sendImagesData: function(e) {
				this.photos = [];
				if (e.length > 0) {
					e.forEach((img) => {
						this.photos.push(img.fileId);
					})
				}
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`;
				} else if (type === 'month') {
					return `${value}月`;
				} else if (type === 'day') {
					return `${value}日`;
				}
				return value;
			},

			_loadRepairTypes: function() {
				let _that = this;
				// 公共区域标识
				let publicArea = _that.repairObjType == '004' ? 'F' : 'T';
				// 默认选择第一个
				_that.repairTypeIndex = 0;
				let _objData = {
					page: 1,
					row: 50,
					communityId: _that.communityId,
					publicArea: publicArea
				};
				this.java110Context.request({
					url: url.listRepairSettings,
					header: _that.java110Context.getHeaders(),
					method: "GET",
					data: _objData, //动态数据
					success: function(res) {
						let _json = res.data;
						if (_json.code == 0) {
							_that.repairTypes = _json.data;

							let selected = _that.repairTypes[_that.repairTypeIndex] //获取选中的数组
							_that.repairType = selected.repairType //选中的id
							let _payFeeFlag = selected.payFeeFlag;

							if (_payFeeFlag == 'T') {
								_that.priceScope = selected.priceScope;
							} else {
								_that.priceScope = '';
							}
						}
					},
					fail: function(e) {
						wx.showToast({
							title: _that.$t('server_error'), //"服务器异常了",
							icon: 'none',
							duration: 2000
						});
					}
				}, this.repairTypes.length == 0);
			},

			submitRepair: function(e) {

				let _that = this;
				// uni.showLoading({
				// 	title: _that.$t('please_wait'), //'请稍后...'
				// })

				let obj = {
					"repairName": this.bindRepairName,
					"repairType": this.repairType,
					"appointmentTime": this.bindDate + " " + this.bindTime + ":00",
					"tel": this.bindTel,
					"roomId": this.roomId,
					"photos": this.photos,
					"context": this.context,
					"communityId": this.communityId,
					"bindDate": this.bindDate,
					"bindTime": this.bindTime,
					"repairObjType": this.repairObjType,
					"repairChannel": 'D',
					areaCode: this.areaCode
				}

				if (this.repairObjType == '001') {
					obj.repairObjId = this.communityId;
					obj.repairObjName = this.communityName;
				} else if (this.repairObjType == '002') {
					obj.repairObjId = this.floorId;
					obj.repairObjName = this.floorNum;
				} else if (this.repairObjType == '003') {
					obj.repairObjId = this.unitId;
					obj.repairObjName = this.floorNum + this.unitNum;
				} else {
					obj.repairObjId = this.roomId;
					obj.repairObjName = this.floorNum + this.unitNum + this.roomNum;
				}

				let msg = "";
				if (obj.repairType == "") {
					msg = _that.$t('select_repair_type'); //"请选择报修类型";
				} else if (obj.repairName == "") {
					msg = _that.$t('fill_in_reporter'); //"请填写报修人";
				} else if (obj.tel == "") {
					msg = _that.$t('fill_in_phone_number'); //"请填写手机号";
				} else if (!stringUtil.checkPhoneNumber(obj.tel, _that.areaCode)) {
					// msg = "手机号有误";
					msg = _that.$t('please_input_phone'); //"請輸入正確的手機號"
				} else if (obj.bindDate == _that.$t('please_select')) {
					msg = _that.$t('select_appointment_date'); // "请选择预约日期";
				} else if (obj.bindTime == _that.$t('please_select')) {
					msg = _that.$t('select_appointment_time'); //"请选择预约时间";
				} else if (obj.context == "") {
					msg = _that.$t('fill_in_repair_content'); // "请填写报修内容";
				} else if (obj.repairObjId == '') {
					msg = _that.$t('select_repair_location'); //"请选择报修位置";
				}

				if (msg != "") {
					_that.onoff = true;
					uni.hideLoading();
					uni.showToast({
						title: msg,
						icon: 'none',
						duration: 2000
					});
				} else {
					_that.java110Context.request({
						url: url.saveHelpOwnerRepair,
						header: _that.java110Context.getHeaders(),
						method: "POST",
						data: obj, //动态数据
						success: function(res) {
							_that.onoff = true;
							let _json = res.data;
							if (_json.code == 0) {
								uni.redirectTo({
									url: '/pages/repairOrder/repairOrder',
								});
								return;
							}
							uni.hideLoading();
							uni.showToast({
								title: _json.msg,
								icon: 'none',
								duration: 2000
							})
						},
						fail: function(e) {
							_that.onoff = true;
							uni.hideLoading();
							uni.showToast({
								title: _that.$t('server_error'), //"服务器异常了",
								icon: 'none',
								duration: 2000
							});
						}
					}, true);
				}
			},

			chooseFloor: function(e) {
				uni.removeStorageSync("_selectFloor");
				this.floorNum = '';
				this.floorId = '';
				uni.removeStorageSync("_selectUnit");
				this.unitNum = '';
				this.unitId = '';
				uni.removeStorageSync("_selectRoom");
				this.roomNum = '';
				this.roomId = '';
				uni.navigateTo({
					url: '/pages/selectFloor/selectFloor'
				});
			},
			chooseUnit: function(e) {
				if (this.floorId == null || this.floorId == '') {
					uni.showToast({
						title: this.$t('select_building_first') // "请先选择楼栋"
					});
					return;
				}
				uni.removeStorageSync("_selectUnit");
				this.unitNum = '';
				this.unitId = '';
				uni.removeStorageSync("_selectRoom");
				this.roomNum = '';
				this.roomId = '';
				uni.navigateTo({
					url: '/pages/selectUnit/selectUnit?floorId=' + this.floorId
				});
			},

			chooseRoom: function(e) {
				if (this.unitId == null || this.unitId == '') {
					uni.showToast({
						title: this.$t('select_unit_first') //"请先选择单元"
					});
					return;
				}
				uni.removeStorageSync("_selectRoom");
				this.roomNum = '';
				this.roomId = '';
				uni.navigateTo({
					url: '/pages/selectRoom/selectRoom?floorId=' + this.floorId + "&unitId=" + this.unitId
				});
			},
			repairScopeChange: function(e) {
				this.repairScopeIndex = e.target.value //取其下标
				let selected = this.repairScopes[this.repairScopeIndex] //获取选中的数组
				this.repairObjType = selected.id //选中的id
				this._loadRepairTypes();
			},
			repairTypeChange: function(e) {
				this.repairTypeIndex = e.target.value //取其下标
				let selected = this.repairTypes[this.repairTypeIndex] //获取选中的数组
				if (selected == undefined) {
					return;
				}
				this.repairType = selected.repairType //选中的id
				let _payFeeFlag = selected.payFeeFlag;

				if (_payFeeFlag == 'T') {
					this.priceScope = selected.priceScope;
				} else {
					this.priceScope = '';
				}

			},
			dateChange: function(e) {
				this.bindDate = e.detail.value;
			},
			timeChange: function(e) {
				this.bindTime = e.detail.value;
			},

		}
	};
</script>
<style scoped lang="less">
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

	// .phone-input {
	// 	display: flex;
	// 	align-items: center;

	// 	.picker {
	// 		// border: 1px solid #ccc;
	// 		margin-right: 50px;
	// 	}

	// 	.text-right {
	// 		flex-grow: 1;
	// 	}
	// }

	/deep/ .phone-input {
		display: flex;
		align-items: center;

		.picker {}

		.text-right {}

		uni-picker {
			flex: none !important;
		}
	}
</style>