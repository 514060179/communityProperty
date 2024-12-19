<template>
	<view>
		<view class="cu-list menu margin-top">
			<view class="cu-item arrow" @click="showRenovationRecord()">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 装修跟踪记录 -->
					<text class="text-grey">{{$t('renovation_tracking_record')}}</text>
				</view>
				<view class="action">
					<!-- 查看 -->
					<text class="text-grey text-sm">{{$t('view')}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 申请房间 -->
					<text class="cuIcon-time text-blue"></text>
					<text class="text-grey">{{$t('application_room')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.roomName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-profile text-blue"></text>
					<!-- 申请人 -->
					<text class="text-grey">{{$t('applicant')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.personName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-phone text-blue"></text>
					<!-- 联系方式 -->
					<text class="text-grey">{{$t('contact_information')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.personTel}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 开始时间 -->
					<text class="text-grey">{{$t('start_time')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.startTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- /结束时间 -->
					<text class="text-grey">{{$t('end_time')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.endTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-service text-blue"></text>
					<!-- 装修单位 -->
					<text class="text-grey">{{$t('renovation_company')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.renovationCompany}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-profile text-blue"></text>
					<!-- 装修负责人 -->
					<text class="text-grey">{{$t('renovation_manager')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.personMain}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-phone text-blue"></text>
					<!-- 负责人电话 -->
					<text class="text-grey">{{$t('manager_phone')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.personMainTel}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 是否延期 -->
					<text class="text-grey">{{$t('is_delayed')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.isPostpone == 'N' ? '否' : '是'}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="renovationInfo.isPostpone == 'Y'">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 延期日期 -->
					<text class="text-grey">{{$t('delay_date')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.postponeTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-footprint text-blue"></text>
					<!-- 申请备注 -->
					<text class="text-grey">{{$t('application_remark')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.remark}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 当前状态 -->
					<text class="text-grey">{{$t('current_status')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{renovationInfo.stateName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<!-- 审核 -->
				<button class="btn-check"
					v-if="renovationInfo.state == 1000 && renovationInfo.isViolation == 'N' && this.java110Context.hasPrivilege('502021031698730003')"
					@click="switchShowModel()">{{$t('review')}}</button>
				<!-- 验收 -->
				<button class="btn-check"
					v-if="renovationInfo.state == 4000 && renovationInfo.isViolation == 'N' && this.java110Context.hasPrivilege('502021012701630060')"
					@click="switchShowModel()">{{$t('acceptance')}}</button>
				<!-- 装修完成 -->
				<button class="btn-check" v-if="renovationInfo.state == 3000 && renovationInfo.isViolation == 'N'"
					@click="renovationComplete()">{{$t('renovation_completed')}}</button>
			</view>
		</view>
		<!-- 编辑模态框 -->
		<view class="pop-bg" @click="switchShowModel()" v-show="errorSwitch">
			<view class="pop-box" @click.stop="empty">
				<view class="pop-title">{{renovationInfo.state == 1000 ? "审核" : "验收"}}</view>
				<view class="cu-list menu margin-top" v-if="renovationInfo.state == 1000">
					<!-- 审核状态 -->
					<view class="cu-item arrow">
						<view class="content">
							<text class="cuIcon-time text-blue"></text>
							<!-- 审核状态 -->
							<text class="text-grey">{{$t('review_status')}}</text>
						</view>
						<picker mode="selector" :value="checkState.state" :range="checkStateRange" range-key="name"
							@change="checkStateRangeChange">
							<view class="picker">
								{{checkState.name?checkState.name:"请选择"}}
							</view>
						</picker>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="cuIcon-time text-blue"></text>
							<!-- 审核备注 -->
							<text class="text-grey">{{$t('review_remark')}}</text>
						</view>
						<input type="text" v-model="checkRemark" @blur="onBlur()">
					</view>
				</view>
				<view class="cu-list menu margin-top" v-if="renovationInfo.state == 4000">
					<view class="cu-item arrow">
						<view class="content">
							<text class="cuIcon-time text-blue"></text>
							<!-- 验收状态 -->
							<text class="text-grey">{{$t('acceptance_status')}}</text>
						</view>
						<picker mode="selector" :value="reviewState.state" :range="reviewStateRange" range-key="name"
							@change="reviewStateRangeChange">
							<view class="picker">
								{{reviewState.name?reviewState.name:"请选择"}}
							</view>
						</picker>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="cuIcon-time text-blue"></text>
							<!-- 验收备注 -->
							<text class="text-grey">{{$t('acceptance_remark')}}</text>
						</view>
						<input type="text" v-model="reviewRemark" @blur="onBlur()">
					</view>
				</view>
				<view class="pop-bottom">
					<view class="btn-box">
						<view class="cancel" @click="switchShowModel()">取消</view>
						<view class="confirm" @click="submit()">保存</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// const factory = context.factory;
	import dateUtil from '../../lib/com/newland/property/utils/date.js'
	import {
		updateRoomToExamine,
		saveRoomRenovationDetail,
		updateRoomRenovationState
	} from '../../api/renovation/renovation.js'
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				renovationInfo: {},
				errorSwitch: false,
				checkStateRange: [{
					'state': 3000,
					'name': translate('review_passed') //'审核通过'
				}, {
					'state': 2000,
					'name': translate('review_failed') //'审核不通过'
				}],
				reviewStateRange: [{
					'state': 5000,
					'name': translate('acceptance_passed') //'验收通过'
				}, {
					'state': 6000,
					'name': translate('acceptance_failed') //'验收不通过'
				}],
				checkState: {}, // 选中的审核状态
				reviewState: {}, // 选中的验收状态
				checkRemark: '', // 审核备注
				reviewRemark: '', // 验收备注
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.java110Context.onLoad();
			let _that = this;
			_that.renovationInfo = JSON.parse(options.apply);
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		methods: {

			/**
			 * 失去焦点
			 */
			onBlur: function() {
				uni.pageScrollTo({
					scrollTop: 0
				});
			},

			/**
			 * 关闭弹窗
			 */
			switchShowModel: function() {
				this.errorSwitch = this.errorSwitch ? false : true;
			},

			/**
			 * 修改审核状态
			 */
			checkStateRangeChange: function(e) {
				let index = e.detail.value;
				this.checkState = this.checkStateRange[index];
				this.checkRemark = this.checkState.name;
			},

			/**
			 * 修改验收状态
			 */
			reviewStateRangeChange: function(e) {
				let index = e.detail.value;
				this.reviewState = this.reviewStateRange[index];
				this.reviewRemark = this.reviewState.name;
			},

			/**
			 * 保存修改
			 */
			submit: function() {
				let _that = this;
				uni.showLoading({
					title: _that.$t('please_wait') + '...'
				})

				// 公共参数
				let params = {
					communityId: this.renovationInfo.communityId,
					rId: this.renovationInfo.rId,
					roomId: this.renovationInfo.roomId,
					roomName: this.renovationInfo.roomName,
					userId: this.renovationInfo.userId,
					startTime: this.renovationInfo.startTime,
					endTime: this.renovationInfo.endTime,
					remark: this.renovationInfo.remark,
					detailType: '1001'
				};
				if (this.renovationInfo.state == 1000) {
					// 审核提交
					let state = this.checkState.state;
					if (state == null || !state) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('please_select_review_status') //'请选择审核状态'
						});
						return;
					}
					let checkRemark = _that.checkRemark;
					if (checkRemark == '' || !checkRemark) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('please_enter_review_remark') //'请填写审核备注'
						});
						return;
					}
					params.state = state;
					params.examineRemark = checkRemark;
					updateRoomToExamine(this, params, true).then(function(res) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('save_successful') //"保存成功"
						})
						setTimeout(() => {
							uni.navigateBack({})
						}, 1000)
					});
				} else {
					// 验收提交
					let state = this.reviewState.state;
					if (state == null || !state) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('please_select_acceptance_status') //'请选择验收状态'
						});
						return;
					}
					let reviewRemark = this.reviewRemark;
					if (reviewRemark == '' || !reviewRemark) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('please_enter_acceptance_remark') //'请填写验收备注'
						});
						return;
					}
					params.state = state;
					params.examineRemark = reviewRemark;
					saveRoomRenovationDetail(this, params, true).then(function(res) {
						uni.hideLoading();
						uni.showToast({
							title: _that.$t('save_successful') // "保存成功"
						})
						setTimeout(() => {
							_that.goBack();
							// uni.navigateBack({})
						}, 1000)
					});
				}
			},

			/**
			 * 装修完成
			 */
			renovationComplete: function() {
				let _that = this;
				uni.showModal({
					cancelText: _that.$t('cancel'), //"取消", // 取消按钮的文字  
					confirmText: _that.$t('confirm'), //"确认", // 确认按钮文字 
					title: _that.$t('confirm_operation'), //'确认操作',
					content: _that.$t('is_house_renovation_completed'), //'是否完成房屋装修?',
					confirmColor: '#3B8BFF',
					cancelColor: '#222222',
					success: res => {
						if (res.confirm) {
							updateRoomRenovationState(_that, _that.renovationInfo, true)
								.then(function(res) {
									if (res.code == 0) {
										uni.navigateBack({
											delta: 1
										})
									}
								})
						} else if (res.cancel) {
							console.log('cancel')
						}
					}
				});
			},

			goBack: function() {
				// #ifdef H5  
				let canBack = true
				const pages = getCurrentPages()
				// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
				if (pages.length > 1) {
					uni.navigateBack(1)
					return;
				}
				// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
				let a = this.$router.go(-1)
				// router.go失败之后则重定向到首页  
				if (a == undefined) {
					uni.reLaunch({
						url: "/pages/applyRoom/applyRoom"
					})
				}
				return;
				// #endif  
				uni.navigateBack(1)
			},

			/**
			 * 查看跟踪记录
			 */
			showRenovationRecord: function() {
				uni.navigateTo({
					url: '/pages/roomRenovationRecord/roomRenovationRecord?apply=' + JSON.stringify(this
						.renovationInfo)
				});
			},

			empty: function() {}
		}
	};
</script>

<style>
	.btn-check {
		width: 50%;
		margin: 30rpx auto;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background-color: #00AA00;
		border-radius: 15rpx;
		color: #fff;
		font-size: 32rpx;
	}

	/* 弹出框 */
	.pop-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.pop-box {
		position: relative;
		width: 85%;
		height: 700rpx;
		background-color: #fff;
		border-radius: 15rpx;
	}

	.pop-title {
		padding: 30rpx 0;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
	}

	.pop-bottom {
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.btn-box {
		width: 90%;
		margin: 0 auto;
		border-top: 1px solid #F6F6F8;
		display: flex;

	}

	.cancel,
	.confirm {
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 40rpx;
		font-weight: 400;
	}

	.cancel {
		color: #999999;
	}

	.confirm {
		color: #3488FE;
	}
</style>