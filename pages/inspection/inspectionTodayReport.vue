<template>
	<view>
		<!-- 今日巡检统计 -->
		<view class="block__title">{{$t('today_inspection_statistics')}}</view>
		<view class="cu-form-group arrow">
			<!-- 查询日期 -->
			<view class="title">{{$t('query_date')}}</view>
			<picker mode="date" :value="bindDate" start="2020-09-01" end="2050-09-01" @change="dateChange">
				<view class="picker">
					{{bindDate}}
				</view>
			</picker>
		</view>
		<view class="cu-list menu margin-top" v-if="inpections && inpections.length > 0"
			v-for="(inspection, idx) in inpections" :key="idx" :data-item="inspection" @click="gotoDetail(inspection)">
			<view class="cu-item arrow">
				<view class="content padding-tb-sm">
					<view>
						<view class="text-cut" style="width:85%;">{{inspection.staffName}}</view>
					</view>
					<view class="text-gray text-sm">
						<!-- 已巡检 -->
						<!-- 未巡检 -->
						<text class="margin-right-xs">{{$t('inspected')}}:</text> {{inspection.finishCount}} ;
						{{$t('not_inspected')}}:{{inspection.waitCount}}
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
	import {
		formatDate
	} from '@/lib/com/newland/property/utils/DateUtil.js';
	import {
		queryReportStaffInspection
	} from '@/api/inspection/inspection.js';
	import noDataPage from '@/components/no-data-page/no-data-page.vue'


	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};

			return {
				inpections: [],
				bindDate: translate('please_select') //'请选择',
			}
		},
		components: {
			noDataPage
		},
		onLoad(options) {
			this.bindDate = formatDate(new Date());
			this._loadTodayInspectionReport();

		},
		methods: {

			_loadTodayInspectionReport: function() {
				let _that = this;
				queryReportStaffInspection(this, {
					communityId: getCurrentCommunity().communityId,
					queryTime: this.bindDate
				}, this.inpections.length == 0).then(_data => {
					_that.inpections = _data.data;
				})
			},
			dateChange: function(e) {
				this.bindDate = e.detail.value;
				this._loadTodayInspectionReport();
			},
			gotoDetail: function(_inpection) {
				uni.navigateTo({
					url: '/pages/inspection/staffNoInspection?staffId=' + _inpection.staffId + "&staffName=" +
						_inpection.staffName + "&queryTime=" + this.bindDate
				})
			}

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