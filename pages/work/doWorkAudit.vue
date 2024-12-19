<template>
	<view>
		<view class="cu-form-group">
			<!-- 题目 -->
			<view class="title">{{$t('title')}}</view>
			<view>{{workName}}</view>
		</view>
		<view class="cu-form-group">
			<!-- 提交人 -->
			<view class="title">{{$t('submitter')}}</view>
			<view>{{createUserName}}</view>
		</view>

		<view class="cu-form-group margin-top-xs">
			<!-- 动作 -->
			<view class="title">{{$t('action')}}</view>
			<picker :value="actionIndex" :range="actions" range-key="name" @change="actionChange">
				<view class="picker">
					{{actions[actionIndex].name}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group arrow margin-top-xs" v-if="action == 'T'">
			<!-- 下一处理人 -->
			<view class="title">{{$t('next_processor')}}</view>
			<view>
				<text @click="_selectStaff">{{staffName || $t('please_select')}}</text>
				<text class='cuIcon-right'></text>
			</view>

		</view>
		<view class="cu-form-group margin-top-sm">
			<textarea v-model="content" :placeholder="$t('mandatory_enter_content')"></textarea>
		</view>
		<view class="margin-top-sm">
			<!-- <vc-upload-file ref="vcUploadFileRel" @uploadFile="uploadFile"></vc-upload-file> -->
			<!-- #ifdef H5 -->
			<!-- <vc-upload-file ref="vcUploadFileRel" @uploadFile="uploadFile"></vc-upload-file> -->
			<!-- #endif -->
			<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
			<upload-demo type="file" ref="vcUploadFileRel" @uploadFile="uploadFile"></upload-demo>
			<!-- <button @tap="onUpload">上传</button> -->
			<!-- #endif -->
		</view>

		<view class="flex flex-direction margin-top-lg">
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="submitWorkOrder">提交</button>
		</view>

		<select-one-staffs ref="selectOneStaffsRef" @getStaffs="getStaffs"></select-one-staffs>
	</view>
</template>

<script>
	import vcUploadFile from '@/components/vc-upload/vc-upload-file.vue';
	import selectOneStaffs from '../../components/select-staff/select-one-staffs.vue';
	import UploadDemo from '@/components/UploadDemo';
	import {
		finishWorkTask,
		getTaskWork
	} from '../../api/oa/workApi.js';
	export default {
		data() {
			return {
				actions: [{
					name: '办理',
					value: 'C'
				}, {
					name: '转单',
					value: 'T'
				}],
				actionIndex: 0,
				action: 'C',
				content: '',
				pathUrl: '',
				taskId: '',
				workId: '',
				staffId: '',
				staffName: '',
				workName: '',
				createUserName: ''
			}
		},
		components: {
			vcUploadFile,
			selectOneStaffs,
			UploadDemo
		},
		computed: {

		},
		onLoad(options) {
			this.taskId = options.taskId;
			this.workId = options.workId;
			this._loadWorkTask();
		},
		methods: {
			_loadWorkTask: function() {
				let _that = this;
				getTaskWork(this, {
					page: 1,
					row: 1,
					workId: this.workId,
					taskId: this.taskId,
				}, true).then(_data => {
					_that.workName = _data.data[0].workName;
					_that.createUserName = _data.data[0].createUserName;
				});
			},
			actionChange: function(e) {
				this.actionIndex = e.detail.value;
				this.action = this.actions[this.actionIndex].value;
			},
			uploadFile: function(_obj) {
				console.log(_obj);
				this.pathUrl = _obj.realFileName;
			},
			_selectStaff: function() {
				this.$refs.selectOneStaffsRef.switchShow();
			},
			getStaffs: function(data) {
				console.log(data);
				if (!data.staffId) {
					return;
				}
				this.staffId = data.staffId;
				this.staffName = data.staffName;
			},
			submitWorkOrder: function() {
				finishWorkTask(this, {
					taskId: this.taskId,
					auditCode: this.action,
					auditMessage: this.content,
					staffId: this.staffId,
					staffName: this.staffName,
					pathUrl: this.pathUrl,
				}, true).then(_data => {
					uni.navigateBack();
				})
			}
		}
	}
</script>

<style>

</style>