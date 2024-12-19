<template>
	<view>
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
						<!-- 一次性工单 周期性工单 -->
						<text
							class="margin-left-sm">{{work.workCycle == '1001'?$t('one_time_work_order'):$t('periodic_work_order')}}</text>
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
	import noDataPage from '../no-data-page/no-data-page.vue';
	import {
		queryStartWork
	} from '../../api/oa/workApi.js';
	export default {
		name: "myWork",
		data() {
			return {
				workNameLike: '',
				staffNameLike: '',
				works: []
			};
		},
		computed: {},
		created() {
			this._loadStartWork();
		},
		components: {
			noDataPage
		},
		methods: {
			_loadStartWork: function() {
				let _that = this;
				queryStartWork(this, {
					page: 1,
					row: 100,
					workNameLike: this.workNameLike,
					staffNameLike: this.staffNameLike
				}, this.works.length == 0).then(_data => {
					_that.works = _data.data;
				});
			},
			_toWorkDetail: function(_work) {

				uni.navigateTo({
					url: '/pages/work/workTask?workId=' + _work.workId
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