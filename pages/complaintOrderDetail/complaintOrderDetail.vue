<template>
	<view>
		<view class="padding margin-top">
			<!-- 订单信息 -->
			<text>{{ $t('order_information') }}</text>
		</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<!-- 投诉编码 -->
					<text class="text-grey">{{ $t('complainant_code') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.complaintId }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-ticket text-blue"></text>
					<!-- 房屋编码 -->
					<text class="text-grey">{{ $t('house_code') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.roomName }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-footprint text-blue"></text>
					<!-- 类型 -->
					<text class="text-grey">{{ $t('type') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.typeName }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-profile text-blue"></text>
					<!-- 投诉人 -->
					<text class="text-grey">{{ $t('complainant') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.complaintName }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-phone text-blue"></text>
					<!-- 投诉电话 -->
					<text class="text-grey">{{ $t('complainant_phone') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.tel }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 投诉时间 -->
					<text class="text-grey">{{ $t('complainant_time') }}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{ auditHistoryOrder.createTime }}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content padding-tb-sm">
					<view>
						<!-- 投诉内容 -->
						<text class="cuIcon-comment text-blue margin-right-xs"></text>{{ $t('complainant_content') }}
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-infofill margin-right-xs"></text>{{ auditHistoryOrder.context }}
					</view>
				</view>
			</view>
		</view>

		<view class="cu-timeline margin-top">
			<!-- 工单 -->
			<view class="cu-time">{{ $t('work_order') }}</view>
			<view class="cu-item " v-for="(item,index) in audits" :key="index">
				<view class="bg-cyan content" v-if="item.eventType == '1000'">
					<!-- 投诉 -->
					<text>{{ item.createUserName }} 于</text> {{ item.createTime }} {{ $t('complain') }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '1001'">
					<!-- 处理 -->
					<text>{{ item.createUserName }} 于</text> {{ item.createTime }}{{ $t('handle') }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '1001'">
					<!-- 处理意见 -->
					<text>{{ $t('handling_uggestion') }}：</text> {{ item.remark }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '2002'">
					<!-- 评价 -->
					<text>{{ item.createUserName }} 于</text> {{ item.createTime }}{{ $t('evaluate') }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '2002'">
					<!-- 评价内容 -->
					<text>{{ $t('evaluation_content') }}：</text> {{ item.remark }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '3003'">
					<!-- 回复 -->
					<text>{{ item.createUserName }} 于</text> {{ item.createTime }}{{ $t('recover') }}
				</view>
				<view class="bg-cyan content" v-if="item.eventType == '3003'">
					<!-- 回复内容 -->
					<text>{{ $t('recover_content') }}：</text> {{ item.remark }}
				</view>
			</view>

		</view>

		<view class="margin-top bg-white padding" v-for="(item,index) in appraise" :key="index">
			<view class="flex justify-between">
				<!-- 工单评价 -->
				<view>{{ $t('work_order_evaluation') }}</view>
				<view>
					<!-- 回复 -->
					<button class="cu-btn sm bg-blue  margin-left" v-if="item.state == 'W'"
						@click="replyAppraise(item)">{{ $t('recover') }}</button>
				</view>
			</view>
			<view class="margin-top">
				<!-- 评价内容 -->
				<text>{{ $t('evaluation_content') }}：</text>
				<text>{{ item.context }}</text>
			</view>
			<view class="margin-top">
				<!-- 评价分数 -->
				<text>{{ $t('evaluation_score') }}：</text>
				<text>{{ item.score }}</text>
			</view>
			<view class="margin-top" v-if="item.state == 'C'">
				<!-- 回复内容 -->
				<text>{{ $t('recover_content') }}：</text>
				<text>{{ item.replyContext }}</text>
			</view>
		</view>
		<view class="cu-modal" :class="viewImage?'show':''">
			<view class="cu-dialog">
				<view class="bg-img" :style="'background-image: url('+ viewImageSrc +');height:800rpx;'">
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="closeViewImage()">
							<text class="cuIcon-close "></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getComplaintEvent,
		getComplaintAppraise
	} from '../../api/complaint/complaint.js';
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	export default {
		data() {
			return {
				complaintId: '',
				auditHistoryOrder: {},
				audits: [],
				appraise: [],
				srcPath: '',
				viewImage: false,
				viewImageSrc: '',
			}
		},
		onLoad(options) {
			this.java110Context.onLoad();
			const _complaintId = options.complaintId;

			console.log('options', options);
			this.complaintId = _complaintId;
			this.srcPath = this.url.hcBaseUrl;

		},
		onShow() {
			this._loadComplaintHistoryOrder();
			this._listWorkflowAuditInfo();
			this._listComplaintAppraise();
		},
		methods: {
			_loadComplaintHistoryOrder: function() {
				//
				this.auditHistoryOrder = wx.getStorageSync('_complaintOrderDetail_' + this.complaintId);

			},
			_listWorkflowAuditInfo: function(_active) {
				const _that = this;
				getComplaintEvent({
					complaintId: _that.complaintId,
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId
				}, this, this.audits.length == 0).then(_data => {
					_that.audits = _data.data;
				})
			},
			_listComplaintAppraise: function() {
				const _that = this;
				getComplaintAppraise({
					complaintId: _that.complaintId,
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId
				}, this, this.appraise.length == 0).then(_data => {
					_that.appraise = _data.data;
				})
			},

			preview: function(e) {
				console.log('图片地址', e);
				const _url = e.target.dataset.url;
				this.viewImageSrc = _url;
				this.viewImage = true;
			},
			closeViewImage: function() {
				this.viewImage = false;
			},
			replyAppraise: function(_appraise) {
				uni.navigateTo({
					url: '/pages/complaintOrderDetail/replyComplainAppraise?appraiseId=' + _appraise
						.appraiseId + '&communityId=' + getCurrentCommunity().communityId
				})
			}
		}
	}
</script>

<style>

</style>