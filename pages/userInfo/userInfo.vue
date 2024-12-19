<template>
	<view>
		<view>
			<!-- 商户信息 -->
			<view class="padding">{{ $t('merchant_information') }}</view>
			<view class="cu-list menu ">
				<view class="cu-item">
					<view class="content">
						<text class="lg cuIcon-service text-blue margin-right-xs"></text>
						<!-- 商户名称 -->
						<text class="text-grey">{{ $t('name_of_merchant') }}</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{storeName}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="lg cuIcon-new text-blue margin-right-xs"></text>
						<!-- 商户类型 -->
						<text class="text-grey">{{ $t('name_of_type') }}</text>
					</view>
					<view class="action">
						<!-- 物业 -->
						<text class="text-grey text-sm">{{ $t('property') }}</text>
					</view>

				</view>
				<view class="cu-item">
					<view class="content">
						<text class="lg cuIcon-cascades text-blue margin-right-xs"></text>
						<!-- 商户编码 -->
						<text class="text-grey">{{ $t('merchant_code') }}</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{storeId}}</text>
					</view>

				</view>
			</view>

			<!-- 员工信息 -->
			<view class="padding">{{ $t('employee_information') }}</view>
			<view class="cu-list menu ">
				<view class="cu-item arrow" @click="settingHeadImg()">
					<view class="content">
						<text class="lg cuIcon-emoji text-blue margin-right-xs"></text>
						<!-- 员工頭像 -->
						<text class="text-grey">{{ $t('员工头像') }}</text>
					</view>
					<view class="action">
						<view class="cu-avatar round" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></view>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="lg cuIcon-profile text-blue margin-right-xs"></text>
						<!-- 员工名称 -->
						<text class="text-grey">{{ $t('name_of_employee') }}</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{userName}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="lg cuIcon-cascades text-blue margin-right-xs"></text>
						<!-- 员工编号 -->
						<text class="text-grey">{{ $t('employee_number') }}</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{userId}}</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import * as TanslateImage from '@/lib/com/newland/property/utils/translate-image.js';
	import conf from '@/conf/config.js'
	import context from '../../lib/com/newland/property/Java110Context.js'
	import {
		uploadUserPhoto,
		getUserInfo
	} from '@/api/uploadUserPhoto/uploadUserPhoto.js'

	import AppConstant from '@/constant/AppConstant.js'
	import {
		getCurrentCommunity
	} from '@/api/community/community.js';
	const constant = context.constant
	const Base64Factory = context.Base64Factory
	export default {
		data() {
			return {
				storeName: '',
				storeId: '',
				userName: '',
				userId: '',
				headerImg: conf.imgUrl + '/h5/images/serve/head.png',

			}
		},
		onLoad() {
			this.java110Context.onLoad();
			let _userInfo = this.java110Context.getUserInfo();

			console.log('_userInfo', _userInfo);

			this.storeName = _userInfo.storeName;
			this.storeId = _userInfo.storeId;
			this.userName = _userInfo.userName;
			this.userId = _userInfo.userId;
			// 獲取用戶頭像
			this.getUserInfo()

		},
		methods: {
			settingHeadImg: function() {
				var _that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
            uni.showLoading({
              title: _that.$t('正在上传')
            })
						var tempFilePaths = res.tempFilePaths
						// #ifdef H5            
						TanslateImage.translate(tempFilePaths, _baseInfo => {
							_that._uploadOwnerHeaderImg(_baseInfo)
						})
						// #endif
						// #ifdef APP
						Base64Factory.urlTobase64(tempFilePaths[0]).then(function(_baseInfo) {
							_that._uploadOwnerHeaderImg(_baseInfo);
						});
						// #endif
					}
				})
			},
			async _uploadOwnerHeaderImg (_baseInfo) {
        try {
          const obj = {
          	userId: this.java110Context.getUserInfo().userId,
          	communityId: getCurrentCommunity().communityId,
          	photo: _baseInfo
          }
          const _data = await uploadUserPhoto(this, obj, true)
          if (_data.statusCode == 200 && _data.data.code == 0) {
          	uni.showToast({
          		title: this.$t('头像上传成功'),
          		icon: 'success',
          		duration: 2000
          	})
          	this.getUserInfo()
          } else {
          	uni.showToast({
          		title: _data.data.msg || this.$t('上传失败'),
          		icon: 'none',
          		duration: 2000
          	})
          }
        } catch (e) {
          uni.showToast({
          	title: e || this.$t('上传失败'),
          	icon: 'none',
          	duration: 2000
          })
        } finally {
          uni.hideLoading()
        }
			},
			// 獲取用戶頭像
			getUserInfo() {
				let _that = this
				getUserInfo(this, null, this.headerImg == "").then(res => {
					console.log(res);
					const {
						url
					} = res.data
					_that.headerImg = url
				})
			}
		}
	}
</script>

<style>
</style>