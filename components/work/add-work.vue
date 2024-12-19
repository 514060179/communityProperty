<template>
	<view>
		<l-file ref="lFile" @up-success="onSuccess"></l-file>
		<view class="cu-form-group margin-top">
			<!-- 标题 -->
			<view class="title">{{$t('titles')}}</view>
			<input v-model="workName" class="text-right" :placeholder="$t('mandatory_enter_title')"></input>
		</view>
		<view class="cu-form-group">
			<!-- 工作单类型 -->
			<view class="title">{{$t('work_order_type')}}</view>
			<picker :value="workTypeIndex" :range="workTypes" range-key="typeName" @change="workTypeChange">
				<view class="picker">
					{{workTypeIndex == -1? $t('please_select'):workTypes[workTypeIndex].typeName}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group margin-top">
			<!-- 处理人 -->
			<view class="title">{{$t('processor')}}</view>
			<view class="text-right" v-if="staffs && staffs.length >0" @click="selectStaffs">
				<text v-for="(staff,index) in staffs" :key="index">{{staff.staffName}}</text>
			</view>
			<view class="text-right" v-else @click="selectStaffs">
				<!-- 请选择 -->
				<text>{{$t('please_select')}}</text>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<!-- 抄送人 -->
			<view class="title">{{$t('cc_person')}}</view>
			<view class="text-right" v-if="copyStaffs && copyStaffs.length >0" @click="selectCopyStaffs">
				<text v-for="(staff,index) in copyStaffs" :key="index">{{staff.staffName}}</text>
			</view>
			<view class="text-right" v-else @click="selectCopyStaffs">
				<!-- 请选择 -->
				<text>{{$t('please_select')}}</text>
			</view>
		</view>
		<view class="cu-form-group arrow  margin-top">
			<!-- 完成日期 -->
			<view class="title">{{$t('completion_date')}}</view>
			<picker mode="date" :value="endTime" start="2020-09-01" end="2050-09-01" @change="dateChange">
				<view class="picker">
					{{endTime || $t('please_select')}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<!-- 工单标识 -->
			<view class="title">{{$t('work_order_identifier')}}</view>
			<picker :value="workCycleIndex" :range="workCycles" range-key="name" @change="workCycleChange">
				<view class="picker">
					{{workCycles[workCycleIndex].name}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group " v-if="workCycle == '2002'">
			<!-- 完成小时 -->
			<view class="title">{{$t('completion_hours')}}</view>
			<!-- 小时内完成 -->
			<input v-model="hours" class="text-right"></input>{{$t('completed_within_hours')}}
		</view>

		<view class="cu-form-group " v-if="workCycle == '2002'">
			<!-- 周期 -->
			<view class="title">{{$t('cycle')}}</view>
			<picker :value="periodIndex" :range="periods" range-key="name" @change="periodChange">
				<view class="picker">
					{{periods[periodIndex].name}}
				</view>
			</picker>
		</view>
		<view class="bg-white padding-lr" v-if="workCycle == '2002' && period=='2020022'">
			<!-- 月 -->
			<view class="title">{{$t('month')}}</view>
			<checkbox-group class="flex justify-start flex-wrap" @change="_changeMonths">
				<view class="margin-xs" v-for="index in 12">
					<checkbox class="" :value="index+''"></checkbox> {{index}}
				</view>
			</checkbox-group>
		</view>
		<view class="bg-white padding-lr" v-if="workCycle == '2002' && period=='2020022'">
			<!-- 日 -->
			<view class="title">{{$t('day')}}</view>
			<checkbox-group class="flex justify-start flex-wrap " @change="_changeDays">
				<view class="margin-xs" v-for="index in 31">
					<checkbox class="" :value="index+''"></checkbox> {{index}}
				</view>
			</checkbox-group>
		</view>
		<view class="bg-white padding-lr" v-if="workCycle == '2002' && period=='2020023'">
			<!-- 周 -->
			<view class="title">{{$t('week')}}</view>
			<checkbox-group class="flex justify-start flex-wrap " @change="_changeWorkDays">
				<view class="margin-xs" v-for="index in 7">
					<!-- 周 -->
					<checkbox class="" :value="index+''"></checkbox> {{$t('week')}}{{index == 7 ?'日':index}}
				</view>
			</checkbox-group>
		</view>

		<view class="cu-form-group margin-top">
			<textarea v-model="content" :placeholder="$t('mandatory_enter_content')"></textarea>
		</view>

		<view class="margin-top">
			<!-- #ifdef H5 -->
			<!-- <vc-upload-file ref="vcUploadFileRel" @uploadFile="uploadFile"></vc-upload-file> -->
			<!-- #endif -->
			<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
			<upload-demo :type="filetype" ref="vcUploadFileRel" @uploadFile="uploadFile"></upload-demo>
			<!-- <button @tap="onUpload">上传</button> -->
			<!-- #endif -->
		</view>

		<view class="flex flex-direction margin-top-lg">
			<!-- 提交 -->
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="submitWorkOrder">{{$t('submit')}}</button>
		</view>

		<select-muti-staffs ref="selectMutiStaffsRel" @getStaffs="getStaffs"></select-muti-staffs>
	</view>
</template>

<script>
	import selectMutiStaffs from '../select-staff/select-muti-staffs.vue';

	import UploadDemo from '@/components/UploadDemo';
	import {
		queryWorkType,
		saveWorkPool
	} from '@/api/oa/workApi.js';
	import {
		getCommunityId
	} from '../../api/community/community.js';
	import {
		formatTime
	} from '../../lib/com/newland/property/utils/DateUtil.js';
	import vcUploadFile from '../vc-upload/vc-upload-file.vue'
	import {
		getHeaders
	} from '../../lib/com/newland/property/api/SystemApi.js'

	export default {
		name: "addWork",
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				workName: '',
				workTypes: [],
				workTypeIndex: -1,
				wtId: '',
				workCycles: [{
					name: translate('one_time_work_order'), //'一次性工单',
					value: '1001'
				}, {
					name: translate('periodic_work_order'), //'周期性工单',
					value: '2002'
				}],
				workCycleIndex: 0,
				workCycle: '1001',
				startTime: '',
				endTime: '',
				staffs: [],
				copyStaffs: [],
				pathUrl: '',
				content: '',
				period: '2020022',
				periodIndex: 0,
				periods: [{
					name: '月/天',
					value: '2020022'
				}, {
					name: '按周',
					value: '2020023'
				}],
				months: [],
				days: [],
				workdays: [],
				hours: '24',
				communityId: '',
				staffFlag: '',
				filetype: 'image'
			};
		},
		computed: {},
		components: {
			selectMutiStaffs,
			vcUploadFile,
			UploadDemo
		},
		mounted() {
			this._loadWorkTypes();
			this.filetype = uni.getSystemInfoSync().platform == "ios" ? 'image' : 'file'
		},
		methods: {
			workTypeChange: function(e) {
				this.workTypeIndex = e.detail.value;
				this.wtId = this.workTypes[this.workTypeIndex].wtId;
			},
			workCycleChange: function(e) {
				this.workCycleIndex = e.detail.value;
				this.workCycle = this.workCycles[this.workCycleIndex].value;
			},
			dateChange: function(e) {
				this.endTime = e.detail.value;
			},
			periodChange: function(e) {
				this.periodIndex = e.detail.value;
				this.period = this.periods[this.periodIndex].value;
			},
			_changeMonths: function(e) {
				this.months = e.detail.value;
			},
			_changeDays: function(e) {
				this.days = e.detail.value;
			},
			_changeWorkDays: function(e) {
				this.workdays = e.detail.value;
			},
			submitWorkOrder: function() {
				let _that = this;
				saveWorkPool(this, {
					workName: this.workName,
					wtId: this.wtId,
					workCycle: this.workCycle,
					startTime: formatTime(new Date()),
					endTime: this.endTime,
					staffs: this.staffs,
					copyStaffs: this.copyStaffs,
					pathUrl: this.pathUrl,
					content: this.content,
					period: this.period,
					months: this.months,
					days: this.days,
					workdays: this.workdays,
					hours: this.hours,
					communityId: getCommunityId(),
				}, true).then(_data => {
					this._initAddWork();
					_that.$emit('tabSelect', 0);
				})
			},
			selectStaffs: function() {
				let _selectStaffIds = [];
				this.staffs.forEach(_staff => {
					_selectStaffIds.push(_staff.staffId);
				});
				this.staffFlag = 'staff';
				this.$refs.selectMutiStaffsRel.switchShow(_selectStaffIds);

			},
			selectCopyStaffs: function() {
				let _selectStaffIds = [];
				this.copyStaffs.forEach(_staff => {
					_selectStaffIds.push(_staff.staffId);
				});
				this.staffFlag = 'copyStaff';
				this.$refs.selectMutiStaffsRel.switchShow(_selectStaffIds);

			},
			getStaffs: function(staffs) {

				if (this.staffFlag == 'staff') {
					this.staffs = staffs;
					return;
				}
				this.copyStaffs = staffs;

			},
			uploadFile: function(_obj) {
				console.log(_obj);
				this.pathUrl = _obj.realFileName;
			},
			_loadWorkTypes: function() {
				let _that = this;
				queryWorkType(this, {
					page: 1,
					row: 100
				}, this.workTypes.length == 0).then(_data => {
					_that.workTypes = _data.data;
				})
			},
			_initAddWork: function() {
				this.workName = '';
				this.wtId = '';
				this.workCycle = '1001';
				this.startTime = '';
				this.endTime = '';
				this.staffs = [];
				this.copyStaffs = [];
				this.pathUrl = '';
				this.content = '';
				this.period = '2020022';
				this.months = [];
				this.days = [];
				this.workdays = [];
				this.hours = '24';
				this.staffFlag = '';
			},
			/* 上传 */
			onUpload() {
				/**
				 * url：上传接口地址
				 * name：附件key,服务端根据key值获取文件流，默认file,上传文件的key
				 * header: 上传接口请求头
				 */
				console.log(getHeaders());
				this.$refs.lFile.upload({
					// currentWebview: this.$mp.page.$getAppWebview(),
					//替换为你的上传接口地址
					url: 'https://192.168.8.213:8008/callComponent/upload/uploadVedio/upload',
					// 服务端接收附件的key
					name: 'uploadFile',
					//根据你接口需求自定义 (优先不传content-type,安卓端无法收到参数再传)
					header: {
						// 'Access-Control-Allow-Origin': '*',
						// 'content-type': 'multipart/form-data',
						...getHeaders()
					},
					// withCredentials: true
					// 限制选择附件的大小上限，默认10M
					// maxSize: 20,

					// 若需要在body单独添加附件名或附件大小如下方式传入组件：
					// addName: '后端要的附件名称字段key,此处请勿写name的同值如(file)，会覆盖name',
					// addSize: '后端要的附件大小字段key'

					// body参数直接写key,value,如：
					// date: '2020-1-1',
					// key2: 'value2',
				});
			},

			onSuccess(res) {
				console.log('上传成功回调', JSON.stringify(res));
				uni.showToast({
					title: JSON.stringify(res),
					icon: 'none'
				})
			}
		}
	}
</script>

<style>

</style>