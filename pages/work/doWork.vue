<template>
	<view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<!-- 待处理 -->
				<view class="cu-item flex-sub" :class="active==0?'text-blue cur':''" @tap="tabSelect(0)">
					{{$t('pending')}}
				</view>
				<!-- 已处理 -->
				<view class="cu-item flex-sub" :class="active==1?'text-blue cur':''" @tap="tabSelect(1)">
					{{$t('processed')}}
				</view>
			</view>
		</scroll-view>

		<view class="q-query flex justify-start flex-wrap margin-top-sm">
			<view class="q-item">
				<input type="text" class="q-input" :placeholder="$t('title')" v-model="workNameLike"></input>
			</view>
			<view class="q-item">
				<input type="text" class="q-input" :placeholder="$t('processor')" v-model="staffNameLike"></input>
			</view>
			<view class="q-item-btn">
				<!-- 搜索 -->
				<button class="cu-btn  line-blue round q-input" @click="_loadStartWork">{{$t('search')}}</button>
			</view>
		</view>
		<view class="margin-top" v-if="works.length > 0">
			<view class="bg-white margin-bottom padding-sm margin-sm radius-sm" v-for="(work,index) in works"
				:key="index">
				<view class="apply-title flex justify-between">
					<view>
						<text class="text-bold">{{work.workId}}({{work.stateName}})</text>
					</view>
					<view class="flex justify-start">
						<!-- 办理 -->
						<button class="cu-btn round sm line-black margin-left-sm" v-if="work.state == 'W'"
							@tap="_todoWorkTask(work)">{{$t('handlse')}}</button>
						<!-- 详情 -->
						<button class="cu-btn round sm line-black margin-left-sm"
							@tap="_toWorkDetail(work)">{{$t('btn_details')}}</button>
					</view>
				</view>
				<view class="apply-content flex justify-start flex-wrap">
					<view class="item">
						<!-- 题目 -->
						<text>{{$t('title')}}:</text>
						<text class="margin-left-sm">{{work.workName}}</text>
					</view>
					<view class="item-half">
						<!-- 标识 -->
						<text>{{$t('identifier')}}:</text>
						<text
							class="margin-left-sm">{{work.workCycle == '1001'? $t('one_time_work_order'):$t('periodic_work_order')}}</text>
					</view>
					<view class="item-half">
						<!-- 处理人 -->
						<text>{{$t('processor')}}:</text>
						<!-- <text class="margin-left-sm">{{work.staffName || '-'}}</text> -->
						<text class="margin-left-sm">{{work.curStaffName || '-'}}</text>
					</view>
					<view class="item">
						<!-- 创建时间 -->
						<text>{{$t('creation_time')}}:</text>
						<text class="margin-left-sm">{{work.createTime}}</text>
					</view>
					<view class="item">
						<!-- 有效期 -->
						<text>{{$t('validity_period')}}:</text>
						<text class="margin-left-sm">{{work.startTime}}~{{work.endTime}}</text>
					</view>

				</view>
			</view>
		</view>
		<view v-else>
			<no-data-page></no-data-page>
		</view>

	</view>
</template>

<script>
	import noDataPage from '@/components/no-data-page/no-data-page.vue';
	import {
		getTaskWork
	} from '../../api/oa/workApi.js';
	import {
		getStaffId
	} from '../../api/staff/staff.js';
	export default {
		data() {

			return {
				workNameLike: '',
				staffNameLike: '',
				works: [],
				staffId: '',
				active: 0
			}
		},
		computed: {},
		onLoad() {
			this.staffId = getStaffId();

		},
		onShow() {
			this._loadWork();
		},

		created() {},
		methods: {
			_loadWork: function() {
				let _that = this;
				let _state = 'W';
				if (this.active == 1) {
					_state = 'C';
				}
				getTaskWork(this, {
					page: 1,
					row: 100,
					state: _state,
					workNameLike: this.workNameLike,
					staffNameLike: this.staffNameLike
				}, this.works.length == 0).then(_data => {
					_that.works = _data.data;
				});
			},
			_toWorkDetail: function(_work) {
				uni.navigateTo({
					url: '/pages/work/workDetail?workId=' + _work.workId + "&taskId=" + _work.taskId
				})

			},
			tabSelect: function(_active) {
				this.active = _active;
				let _that = this;
				this.works = [];
				this._loadWork();
			},
			_loadStartWork: function() {
				this._loadWork();
			},
			_todoWorkTask: function(_work) {
				uni.navigateTo({
					url: '/pages/work/doWorkAudit?workId=' + _work.workId + '&taskId=' + _work.taskId
				})
			}
		}
	}
</script>

<style lang="scss">
	.q-query {
		background-color: #FFF;
		padding: 15upx;

		.q-item {
			width: 30%;
			margin-right: 15upx;
			padding: 10upx 15upx;
			border-radius: 15upx;
			background-color: #f1f1f1;

			.q-input {
				height: 40upx;
			}

		}

		.q-item-btn {
			width: 30%;
			margin-left: 15upx;

			.q-input {
				height: 60upx;
			}
		}
	}

	.apply-title {
		height: 60upx;
		line-height: 50upx;
		border-bottom: 1upx solid #F1F1F1;
	}

	.apply-content {
		.item-half {
			width: 50%;
			margin-top: 20upx;
		}

		.item {
			width: 100%;
			margin-top: 20upx;
		}

	}

	.radius-sm {
		border-radius: 16upx;
	}
</style>