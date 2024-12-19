<template>
	<view>
		<!-- 基本信息 -->
		<view class="block__title">{{$t('basic_information')}}</view>
		<view class="cu-form-group">
			<!-- 姓名 -->
			<view class="title">{{$t('name')}}</view>
			<input v-model="name" :placeholder="$t('mandatory_enter_member_name')"></input>
		</view>
		<view class="cu-form-group">
			<!-- 身份证 -->
			<view class="title">{{$t('ID_card')}}</view>
			<input v-model="idCard" :placeholder="$t('optional_enter_ID_card')"></input>
		</view>
		<view class="cu-form-group">
			<!-- 性别 -->
			<view class="title">{{$t('gender')}}</view>
			<picker bindchange="PickerChange" :value="index" :range="sexArr" @change="sexChange">
				<view class="picker">
					{{sex == '0'? $t('male'):$t('female')}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<!-- 人员类型 -->
			<view class="title">{{$t('personnel_type')}}</view>
			<picker :value="typeCdIndex" :range="typeCds" range-key="name" @change="_changeTypeCd">
				<view class="picker">
					{{typeCdIndex == -1 ?$t('please_select'):typeCds[typeCdIndex].name}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<!-- 房屋 -->
			<view class="title">{{$t('house')}}</view>
			<input v-model="roomName" :placeholder="$t('mandatory_enter_building_unit_house')"></input>
		</view>
		<view class="cu-form-group">
			<!-- 家庭住址 -->
			<view class="title">{{$t('home_address')}}</view>
			<input type="text" v-model="address" :placeholder="$t('optional_enter_home_address')"></input>
		</view>

		<!-- 联系信息 -->
		<view class="block__title">{{$t('contact_information')}}</view>
		<view class="cu-form-group">
			<!-- 手机号 -->
			<view class="title" style="white-space: nowrap;">{{$t('phone_number')}}</view>
			<view class="phone-input">
				<input v-model="link" :placeholder="$t('mandatory_enter_phone_number')" class="text-right"></input>
				<picker mode="selector" :range="areaCodes" @change="onPickerChange">
					<view class="picker">
						{{ areaCode }}
					</view>
				</picker>
			</view>
		</view>

		<!-- 相关图片 -->
		<view class="block__title">{{$t('related_images')}}</view>
		<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :maxPhotoNum="uploadImage.maxPhotoNum"
			:canEdit="uploadImage.canEdit" :title="uploadImage.imgTitle" @sendImagesData="sendImagesData">
		</uploadImageAsync>


		<view class="cu-form-group margin-top">
			<textarea v-model="remark" :placeholder="$t('optional_enter_remark')"></textarea>
		</view>

		<view class="flex flex-direction margin-top margin-bottom">
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="_submitOwnerMember()">提交</button>
		</view>
	</view>
</template>

<script>
	// pages/enterCommunity/enterCommunity.js
	import {
		isIDCard,
		checkPhoneNumber,
		idCardInfoExt
	} from '../../lib/com/newland/property/utils/StringUtil.js'
	import uploadImageAsync from "../../components/vc-upload-async/vc-upload-async.vue";
	import {
		saveRoomOwner
	} from '../../api/owner/owner.js';

	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				name: "",
				sexArr: ["男", "女"],
				index: 0,
				sex: "0",
				link: "",
				remark: "",
				typeCds: [{
						value: '1001',
						name: translate('owner') //'业主'
					},
					{
						value: '1002',
						name: translate('family_member') //'家庭成员'
					},
					{
						value: '1003',
						name: translate('tenant') // '租客'
					},
					{
						value: '1005',
						name: translate('other') //'其他'
					}
				],
				typeCdIndex: -1,
				ownerTypeCd: "",
				idCard: "",
				address: "",
				roomName: "",
				communityId: '',
				photos: [],
				uploadImage: {
					maxPhotoNum: 1,
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
			this.communityId = this.getCommunityId();
		},
		methods: {
			// 手机号选择
			onPickerChange(e) {
				this.areaCode = this.areaCodes[e.detail.value];
			},
			sendImagesData: function(e) {
				this.photos = e[0].fileId
			},
			sexChange: function(e) {
				this.sex = e.detail.value;
			},
			_submitOwnerMember: function(e) {
				let _that = this
				let obj = {
					"name": this.name,
					"link": this.link,
					"remark": this.remark,
					"ownerTypeCd": this.ownerTypeCd,
					"roomName": this.roomName,
					"communityId": this.getCommunityId(),
					"idCard": this.idCard,
					"address": this.address,
					sex: this.sex,
					"ownerPhoto": this.photos,
					areaCode: this.areaCode
				}

				let msg = "";
				if (obj.ownerId == "") {
					msg = this.$t('please_enter_owner') //"请填写业主";
				} else if (obj.name == "") {
					msg = this.$t('please_enter_name') // "请填写姓名";
				} else if (obj.link == "") {
					msg = this.$t('please_enter_phone_number') //"请填写手机号";
				} else if (!checkPhoneNumber(obj.link, _that.areaCode)) {
					// msg = this.$t('incorrect_phone_number') //"手机号有误";
					msg = _that.$t('please_input_phone'); //"請輸入正確的手機號"
				}
				if (msg != "") {
					uni.showToast({
						title: msg,
						icon: 'none',
						duration: 2000
					});
					return;
				}
				saveRoomOwner(this, obj, true).then(_data => {
					if (_data.code != 0) {
						uni.showToast({
							icon: 'none',
							title: _data.msg
						});
						return;
					}
					uni.navigateBack()
				})
			},
			_changeTypeCd: function(e) {
				this.typeCdIndex = e.detail.value;
				this.ownerTypeCd = this.typeCds[this.typeCdIndex].value;
			},
		}
	};
</script>
<style lang="less" scoped>
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