<template>
	<view>
		<view class="block__title">{{inspectionName}}{{$t('巡检')}}</view>
		<form>
			<view class="" v-for="(item,index) in titles" :key="index">
				<view class="block__title">{{item.itemTitle}}</view>
				<radio-group class="block" @change="radioChange($event,item)" v-if="item.titleType == '1001'">
					<view class="cu-form-group" v-for="(valueItem,valueIndex) in item.inspectionItemTitleValueDtos"
						:key="valueIndex">
						<view class="title">{{valueItem.itemValue}}</view>
						<radio :class="item.radio==valueItem.itemValue?'checked':''"
							:checked="item.radio==valueItem.itemValue?true:false" :value="valueItem.itemValue">
						</radio>
					</view>
				</radio-group>
				<checkbox-group class="block" @change="checkboxChange($event,item)"
					v-else-if="item.titleType == '2002'">
					<view class="cu-form-group " v-for="(valueItem,valueIndex) in item.inspectionItemTitleValueDtos">
						<view class="title">{{valueItem.itemValue}}</view>
						<checkbox :class="item.radio[valueIndex].selected == '1'?'checked':''"
							:checked="item.radio[valueIndex].selected == '1'?true:false" :value="valueItem.itemValue">
						</checkbox>
					</view>
					<!--:checked="item.radio[valueIndex].checked?true:false"-->
				</checkbox-group>
				<view v-else>
					<view class="cu-form-group ">
						<textarea maxlength="512" v-model="item.radio" :placeholder="$t('请回答')"></textarea>
					</view>
				</view>
			</view>

			<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :sourceType="sourceType"
				:maxPhotoNum="uploadImage.maxPhotoNum" :canEdit="uploadImage.canEdit" :title="uploadImage.imgTitle"
				@sendImagesData="sendImagesData" style="margin-top: 30rpx;"></uploadImageAsync>

			<view class="cu-form-group margin-top" v-if="mapKey">
				<view class="title">{{$t('当前位置')}}</view>
				<input type="text" v-model="reverseGeocoderSimplify" disabled="disabled" />
			</view>
		</form>

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg"
				@tap="$preventClick(_submitExcuteInspection)">{{$t('提交')}}</button>
		</view>

	</view>
</template>

<script>
	import conf from '../../conf/config.js'
	import {
		preventClick
	} from '../../lib/com/newland/property/utils/common.js';
	import {
		queryDictInfo,
		queryInspectionItemTitle
	} from '../../api/inspection/inspection.js';
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import url from '../../constant/url.js'
	import uploadImageAsync from "../../components/vc-upload-async/vc-upload-async.vue";
	import Vue from 'vue'
	Vue.prototype.$preventClick = preventClick;
	import QQMapWX from '@/lib/qqmap-wx-jssdk.min.js';
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				onoff: true,
				taskId: '',
				taskDetailId: '',
				inspectionId: '',
				inspectionName: '',
				pointStartTime: '',
				pointEndTime: '',
				patrolTypes: [{
					name: translate('请选择')
				}],
				patrolIndex: 0,
				patrolType: '10001',
				patrolTypeName: translate('请选择'),
				description: '',
				photos: [],
				imgList: [],
				communityId: '',
				userId: '',
				userName: '',
				latitude: '',
				longitude: '',
				location: '',
				reverseGeocoderSimplify: translate('正在获取'),
				titles: [],
				itemId: '',
				mapKey: '',
				uploadImage: {
					maxPhotoNum: 4,
					imgTitle: translate('巡检图片'),
					canEdit: true
				},
				sourceType: ['camera'],
				fromPage: ''
			}
		},

		components: {
			uploadImageAsync
		},
		onLoad(option) {
			this.java110Context.onLoad();
			let that = this;
			this.mapKey = conf.QQMapKey;
			// #ifdef MP-WEIXIN || H5
			uni.getLocation({
				type: 'gcj02',
				success: (res) => {
					console.log(res);
					this.latitude = res.latitude;
					this.longitude = res.longitude;
					// #ifdef H5
					that.getCurrentLocation();
					// #endif
					// #ifdef MP-WEIXIN
					that.getMiniWechatLocation();
					// #endif
				}
			});
			// #endif
			// #ifdef APP-PLUS
			plus.geolocation.getCurrentPosition(function(position) {
				console.log(position);
				var latitude = position.coords.latitude;
				var longitude = position.coords.longitude;
				console.log('经度: ' + longitude + ', 纬度: ' + latitude);

				// 使用腾讯地图API进行反向地理编码
				that.wgs84Togcj02(latitude, longitude);
			}, function(error) {
				console.error('获取位置失败: ' + error.message);
			});
			// #endif
			this.taskDetailId = option.taskDetailId;
			this.taskId = option.taskId;
			this.inspectionId = option.inspectionId;
			this.inspectionName = option.inspectionName;
			this.itemId = option.itemId;
			this.fromPage = option.fromPage

			this.communityId = getCurrentCommunity().communityId;
			let _userInfo = this.java110Context.getUserInfo();
			this.userName = _userInfo.userName;
			this.userId = _userInfo.userId;
			this._loadPatrolTypesList();
			this._loadInspectionItem();
		},
		methods: {
			sendImagesData: function(e) {
				this.photos = [];
				if (e.length > 0) {
					e.forEach((img) => {
						this.photos.push(img.fileId);
					})
				}
			},
			_loadInspectionItem: function() {
				let that = this;
				queryInspectionItemTitle(this, {
						communityId: that.communityId,
						itemId: that.itemId,
						page: 1,
						row: 100
					}, this.titles.length == 0)
					.then(_data => {
						_data.data.forEach(item => {
							if (item.titleType == '1001') {
								item.radio = ''
							} else if (item.titleType == '2002') {
								// checked: false
								item.radio = [];
								item.inspectionItemTitleValueDtos.forEach(value => {
									item.radio.push({
										checked: false,
										itemValue: value.itemValue,
										selected: '0'
									})
								})
							} else {
								item.radio = ''
							}
						})
						that.titles = _data.data;
					})
			},
			// 因为当前plus段获取的经纬度是wgs84 要转换位gcj02
			wgs84Togcj02(lat, lng) {
				let locationObj = lat + ',' + lng;
				let _that = this
				const urls =
					`https://apis.map.qq.com/ws/coord/v1/translate?locations=${locationObj}&key=${this.mapKey}&type=1`
				uni.request({
					url: urls,
					success: res => {
						console.log(res);
						const {
							lat,
							lng
						} = res.data.locations[0]
						// app端获取位置
						_that.getLocationApp(lat, lng)
					}
				});
			},
			// app端获取位置
			getLocationApp(lat, lng) {
				console.log(this.mapKey);
				let locationObj = lat + ',' + lng;
				const urls =
					`https://apis.map.qq.com/ws/geocoder/v1/?location=${locationObj}&key=${this.mapKey}&get_poi=1&poi_options=page_size=1;page_index=1`
				uni.request({
					url: urls,
					success: res => {
						console.log(res);
						this.reverseGeocoderSimplify = res.data.result.address;
					}
				});
			},
			getMiniWechatLocation: function() {
				let qqmapsdk = new QQMapWX({
					key: this.mapKey
				});
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: this.latitude,
						longitude: this.longitude
					},
					success: (locaRes) => {
						console.log(locaRes);
						this.reverseGeocoderSimplify = locaRes.result.address
					},
					fail: (err) => {}
				})

			},
			// 地址逆解析
			getCurrentLocation: function() {
				let locationObj = this.latitude + ',' + this.longitude;
				let url =
					'https://apis.map.qq.com/ws/geocoder/v1?coord_type=5&get_poi=1&output=jsonp&poi_options=page_size=1;page_index=1';
				this.$jsonp(url, {
						key: this.mapKey,
						location: locationObj
					})
					.then(res => {
						console.log(res);
						this.reverseGeocoderSimplify = res.result.address;
					})
					.catch(err => {
						console.log(err);
					});

			},
			// 查询字典表 信息
			_loadPatrolTypesList: function() {
				let _that = this;
				let _objData = {
					'name': "inspection_task_detail",
					'type': "patrol_type",
				};
				queryDictInfo(this, _objData, this.patrolTypes.length == 0)
					.then(function(res) {
						_that.patrolTypes = _that.patrolTypes.concat(res);
					})
			},
			patrolChange: function(e) {
				this.patrolIndex = e.target.value //取其下标

				if (this.patrolIndex == 0) {
					this.patrolTypeName = '';
					this.patrolType = '';
					return;
				}
				let selected = this.patrolTypes[this.patrolIndex]
				this.patrolTypeName = selected.name;
				this.patrolType = selected.statusCd;
			},

			_submitExcuteInspection: function() {
				let _that = this;
				uni.showLoading({
					title: _that.$t('please_wait')
				});
				this.description = '';
				this.titles.forEach(item => {
					let _itemValue = ''
					if (item.titleType == '2002') {
						item.radio.forEach(_radio => {
							if (_radio.selected == '1') {
								_itemValue += (_radio.itemValue + ',')
							}
						})
						this.description += (item.itemTitle + ':' + _itemValue + ';')
					} else {
						this.description += (item.itemTitle + ':' + item.radio + ';')
					}
				})
				let obj = {
					"taskId": this.taskId,
					"taskDetailId": this.taskDetailId,
					"inspectionId": this.inspectionId,
					"inspectionName": this.inspectionName,
					"communityId": this.communityId,
					"patrolType": this.patrolType,
					"description": this.description,
					"photos": this.photos,
					"userId": this.userId,
					"userName": this.userName,
					"latitude": this.latitude,
					"longitude": this.longitude
				}

				let msg = "";
				if (obj.taskId == "") {
					msg = _that.$t('数据异常，巡检任务为空');
				} else if (obj.taskDetailId == "") {
					msg = _that.$t('数据异常，巡检任务详情为空');
				} else if (obj.inspectionId == "") {
					msg = _that.$t('巡检点不能为空');
				} else if (obj.inspectionName == "") {
					msg = _that.$t('巡检点名称不能为空');
				} else if (obj.patrolType == "") {
					msg = _that.$t('巡检情况不能为空');
				}
				// else if (obj.description == "") {
				// 	msg = _that.$t('巡检说明不能为空');
				// } 
				else if (obj.userId == "") {
					msg = _that.$t('数据异常，巡检人为空');
				} else if (obj.photos.length <= 0) {
					msg = _that.$t('请上传巡检图片');
				}
				console.log(obj);

				if (msg != "") {
					_that.onoff = true;
					wx.showToast({
						title: msg,
						icon: 'none',
						duration: 2000
					});
					uni.hideLoading();
				} else {
					this.java110Context.request({
						url: url
							.updateInspectionTaskDetail, //  http://hc.demo.winqi.cn:8012/appApi/ownerRepair.saveOwnerRepair 
						header: this.java110Context.getHeaders(),
						method: "POST",
						data: obj, //动态数据
						success: function(res) {
							_that.onoff = true;
							if (res.statusCode == 200) {
								if (_that.fromPage == 'QrCode') {
									uni.navigateTo({
										url: '/pages/inspection/inspection'
									});
									return;
								}
								uni.navigateBack({
									delta: 1
								})
								return;
							}
							uni.hideLoading();
							wx.showToast({
								title: "服务器异常了",
								icon: 'none',
								duration: 2000
							})
						},
						fail: function(e) {
							_that.onoff = true;
							uni.hideLoading();
							wx.showToast({
								title: "服务器异常了",
								icon: 'none',
								duration: 2000
							})
						}
					}, true);
				}
			},
			radioChange: function(e, item) {
				console.log(e, item)
				item.radio = e.detail.value;
				console.log('item.radio', item.radio, e)

			},
			checkboxChange: function(e, item) {
				item.radio.forEach(value => {
					value.selected = '0';
					value.checked = false;
				})

				item.radio.forEach(value => {
					e.detail.value.forEach(_dValue => {
						if (value.itemValue == _dValue) {
							if (value.selected == '0') {
								value.selected = '1';
								value.checked = true;
							}
						}
					})
				})

				console.log('item.radio', item.radio, e)
			},

		}
	}
</script>

<style>
	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}
</style>