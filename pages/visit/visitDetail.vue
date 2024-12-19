<template>
	<view>
		<!-- 基础信息 -->
		<view class="block__title">{{$t('basic_info')}}</view>
		<view class="cu-form-group">
			<!-- 访客 -->
			<view class="title">{{$t('visitor')}}</view>
			<view>{{order.vName}}({{order.phoneNumber}})</view>
		</view>
		<view class="cu-form-group">
			<!-- 随行人员 -->
			<view class="title">{{$t('companions')}}</view>
			<view>{{order.entourage}}</view>
		</view>
		<view class="cu-form-group">
			<!-- 业主 -->
			<view class="title">{{$t('owner')}}</view>
			<view>{{order.ownerName}}({{order.ownerTel}})</view>
		</view>
		<view class="cu-form-group">
			<!-- 状态 -->
			<view class="title">{{$t('status')}}</view>
			<view>{{order.stateName}}</view>
		</view>
		<view class="cu-form-group">
			<!-- 车牌号 -->
			<view class="title">{{$t('license_plate')}}</view>
			<view>{{order.carNum}}</view>
		</view>
		<view class="cu-form-group arrow">
			<!-- 拜访时间 -->
			<view class="title">{{$t('visit_time')}}</view>
			<view>{{order.visitTime}}</view>
		</view>
		<view class="cu-form-group arrow">
			<!-- 离开时间 -->
			<view class="title">{{$t('leave_time')}}</view>
			<view>{{order.departureTime}}</view>
		</view>
		<view class="cu-form-group arrow">
			<!-- 访客说明 -->
			<view class="title">{{$t('visitor_description')}}</view>
			<view>{{order.visitCase}}</view>
		</view>
		<view class="cu-form-group arrow">
			<!-- 访客照片 -->
			<view class="title">{{$t('visitor_photo')}}</view>
			<view class="padding-sm">
				<image :src="order.url" style="height: 200upx;width: 200upx;"></image>
			</view>
		</view>

		<!-- 审批流程 -->
		<view class="block__title">{{$t('approval_process')}}</view>
		<view class="cu-form-group arrow" v-for="(item,index) in comments">
			<view class="title">{{item.staffName}}</view>
			<view class="">
				<!-- 处理完成 -->
				<text v-if="item.endTime">{{$t('processing_completed')}}</text>
				<!-- 正在处理 -->
				<text v-else>{{$t('processing')}}</text>
				<text v-if="item.context">({{item.context}})</text>
			</view>
		</view>
		<view v-show="action && action == 'Audit'">
			<audit-visit ref="auditVisitRef"></audit-visit>
		</view>
	</view>
</template>

<script>
	import {
		getVisit,
		getVisitRes,
		queryOaWorkflowUser
	} from '../../api/visit/visitApi.js';
	import {
		getCurrentCommunity
	} from '../../api/community/community.js';
	import auditVisit from '../../components/audit/audit-visit.vue';
	export default {
		data() {
			return {
				order: {

				},
				resNames: [],
				vId: '',
				comments: [],
				flowId: '',
				action: '',
				taskId: '',
				audit: {
					auditCode: '1100',
					auditMessage: '',
					staffId: '',
					staffName: '',
					taskId: ''
				},
				nextAudit: {},
			}
		},
		onLoad(options) {
			this.vId = options.vId;
			this.flowId = options.flowId;
			this.action = options.action;
			this.taskId = options.taskId;
			this._loadDetail();
			let _that = this;
		},
		components: {
			auditVisit
		},
		methods: {
			_loadDetail: function() {
				let _that = this;
				getVisit(this, {
					page: 1,
					row: 1,
					vId: this.vId,
					communityId: getCurrentCommunity().communityId
				}, JSON.stringify(this.order) == '').then(_data => {
					_that.order = _data[0];
					_that._loadComment();
				}).then(() => {
					if (_that.action && _that.action == 'Audit') {
						_that.$refs.auditVisitRef.initAuditVisit({
							taskId: _that.taskId,
							flowId: _that.flowId,
							vId: _that.vId,
							startUserId: _that.order.createUserId
						});
					}

				})
			},
			_loadComment: function() {
				let _that = this;
				queryOaWorkflowUser(this, {
					page: 1,
					row: 100,
					id: this.vId,
					communityId: getCurrentCommunity().communityId,
					flowId: this.order.flowId
				}, this.comments.length == 0).then(_data => {
					_that.comments = _data;
				})
			}
		}
	}
</script>

<style lang="scss">
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
</style>