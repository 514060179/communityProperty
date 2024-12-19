<template>
	<view>
		<view class="cu-list menu margin-top">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<!-- 报修ID -->
					<text class="text-grey">{{$t('repair_id')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairId}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-ticket text-blue"></text>
					<!-- 报修类型 -->
					<text class="text-grey">{{$t('repair_type')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairTypeName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-profile text-blue"></text>
					<!-- 报修人 -->
					<text class="text-grey">{{$t('repairer')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-phone text-blue"></text>
					<!-- 联系方式 -->
					<text class="text-grey">{{$t('contact_information')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.tel}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-footprint text-blue"></text>
					<!-- 报修位置 -->
					<text class="text-grey">{{$t('repair_location')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.repairObjName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 预约时间 -->
					<text class="text-grey">{{$t('appointment_time')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.appointmentTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 状态 -->
					<text class="text-grey">{{$t('status')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.stateName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<!-- 报修内容 -->
					<text class="text-grey">{{$t('repair_content')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{repairDetailInfo.context}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.repairPhotos&& repairDetailInfo.repairPhotos.length > 0">
				<view class="content">
					<text class="cuIcon-pic text-blue"></text>
					<!-- 业主报修图片 -->
					<text class="text-grey">{{$t('owner_repair_images')}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.repairPhotos&&repairDetailInfo.repairPhotos.length > 0">
				<!-- <view class="repair-img-title">业主报修图片</view> -->
				<view class="margin-top grid text-center col-4 grid-square">
					<view class="" v-for="(_item,index) in repairDetailInfo.repairPhotos" :key="index">
						<image mode="widthFix" :data-url="_item.url" :src="_item.url" @tap="preview"></image>
					</view>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.beforePhotos&&repairDetailInfo.beforePhotos.length > 0">
				<view class="content">
					<text class="cuIcon-pic text-blue"></text>
					<!-- 维修前图片 -->
					<text class="text-grey">{{$t('maintenance_before_images')}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.beforePhotos&&repairDetailInfo.beforePhotos.length > 0">
				<!-- <view class="repair-img-title">维修前图片</view> -->
				<view class="margin-top grid text-center col-4 grid-square">
					<view class="" v-for="(_item,index) in repairDetailInfo.beforePhotos" :key="index">
						<image mode="widthFix" :data-url="_item.url" :src="_item.url" @tap="preview"></image>
					</view>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.afterPhotos&&repairDetailInfo.afterPhotos.length > 0">
				<view class="content">
					<text class="cuIcon-pic text-blue"></text>
					<!-- 维修后图片 -->
					<text class="text-grey">{{$t('maintenance_after_images')}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="repairDetailInfo.afterPhotos&&repairDetailInfo.afterPhotos.length > 0">
				<!-- <view class="repair-img-title">维修后图片</view> -->
				<view class="margin-top grid text-center col-4 grid-square">
					<view class="" v-for="(_item,index) in repairDetailInfo.afterPhotos" :key="index">
						<image mode="widthFix" :data-url="_item.url" :src="_item.url" @tap="preview"></image>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-timeline margin-top">
			<!-- 工单 -->
			<view class="cu-time">{{$t('work_order')}}</view>
			<view class="cu-item " v-for="(item,index) in staffs" :key="index">
				<view class="bg-cyan content">
					<!-- 到达 -工位-->
					<text>{{item.startTime}} </text> {{$t('arrive')}} {{item.staffName}} {{$t('workstation')}} -
					{{item.stateName}}
				</view>
				<view class="bg-cyan content" v-if="item.endTime != undefined">
					<!-- 处理意见 -->
					<text>{{$t('handling_comments')}}：</text> {{item.context}}
					<block v-if="item.state == '12000' && item.payTypeName != undefined">
						({{item.payTypeName}})
					</block>
				</view>
				<!-- 待支付状态 - 详情描述 -->
				<view class="bg-cyan content" v-if="item.state == '10009'">
					<!-- 处理意见 -->
					<text>{{$t('handling_comments')}}：</text> {{item.context}}
					<block v-if="item.payTypeName != undefined">({{item.payTypeName}})</block>
				</view>
				<view v-if="item.state == '10007'" class="flex justify-between margin-top-sm">
					<view></view>
					<!-- 回复 -->
					<view class="rob-order text-df text-white bg-blue text-center" @click="_replyRepairAppraise(item)">
						{{$t('reply')}}
					</view>
				</view>
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
	import url from '../../constant/url.js'
	import api from "@/lib/com/newland/property/utils/request.js";
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	export default {
		data() {
			return {
				viewImage: false,
				viewImageSrc: '',
				repairDetailInfo: {},
				storeId: '',
				repairId: '',
				staffs: [],
				srcPath: ''
			}
		},
		onLoad(options) {
			this.java110Context.onLoad();
			this.storeId = options.storeId;
			this.repairId = options.repairId;
			console.log('options', options);
			this.srcPath = url.hcBaseUrl;
			this._queryRepairDetail();
			//加载报修类型
			this._loadRepairStaffs();
		},
		methods: {
			_loadModfiyHistoryOrder: function() {
				//
				this.modifyComplaint = wx.getStorageSync("_toModifyComplaint_" + this.complaintId);

			},
			_loadRepairStaffs: function() {
				let _communityInfo = getCurrentCommunity();
				let _that = this;
				let dataObj = {
					page: 1,
					row: 50,
					communityId: _communityInfo.communityId,
					repairId: this.repairId
				};

				api
					.get('app/ownerRepair.listRepairStaffs', dataObj, this.java110Context.getHeaders(), this.staffs.length == 0) // 使用封装的 post 方法
					.then((data) => {
						if (data.code == 0) {
							_that.staffs = data.data;
						}
					})
					.catch((error) => {
						wx.showToast({
							title: _that.$t('server_error'), //"服务器异常了",
							icon: 'none',
							duration: 2000
						});
					});

				/*uni.request({
					url: url.listRepairStaffs,
					header: this.java110Context.getHeaders(),
					method: "GET",
					data: dataObj,
					//动态数据
					success: function(res) {
						let _json = res.data;
						if (_json.code == 0) {
							_that.staffs = _json.data;
						}
					},
					fail: function(e) {
						wx.showToast({
							title: _that.$t('server_error'), //"服务器异常了",
							icon: 'none',
							duration: 2000
						});
					}
				});*/
			},
			_queryRepairDetail: function() {
				let _that = this;
				let _objData = {
					page: 1,
					row: 1,
					storeId: _that.storeId,
					communityId: getCurrentCommunity().communityId,
					repairId: _that.repairId
				};
				this.java110Context.request({
					url: url.listOwnerRepairs,
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
							return;
						}
						let _data = _json.data;
						_that.repairDetailInfo = _data[0];
					},
					fail: function(e) {
						wx.showToast({
							title: _that.$t('server_error'), //"服务器异常了",
							icon: 'none',
							duration: 2000
						});
					}
				}, JSON.stringify(this.repairDetailInfo) == '{}');
			},
			preview: function(e) {
				console.log('图片地址', e);
				let _url = e.target.dataset.url;
				this.viewImageSrc = _url;
				this.viewImage = true;
			},
			closeViewImage: function() {
				this.viewImage = false;
			},
			_replyRepairAppraise: function(_repairUser) {
				uni.navigateTo({
					url: "/pages/repairOrder/replyRepairAppraise?ruId=" + _repairUser.ruId + '&repairId=' +
						_repairUser.repairId
				});
			}
		}
	}
</script>

<style>
	.rob-order {
		width: 80upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 10upx;
	}
</style>