<template>
	<view>

		<view class="cu-form-group margin-top">
			<textarea v-model="content" :placeholder="$t('please_enter_handling_comments')"></textarea>
		</view>
		<view class="cu-form-group margin-top">
			<picker :value="violationIndex" :range="violations" :range-key="'name'" @change="violationChange">
				<view>{{violations[violationIndex].name}}</view>
			</picker>
		</view>
		<!-- 相关图片 -->
		<view class="block__title">{{$t('related_images')}}</view>
		<uploadImageAsync ref="vcUploadRef" :communityId="communityId" :maxPhotoNum="uploadImage.maxPhotoNum"
			:canEdit="uploadImage.canEdit" :title="uploadImage.imgTitle" @sendImagesData="sendImagesData">
		</uploadImageAsync>

		<view class="flex flex-direction margin-top">
			<button class="cu-btn bg-blue margin-tb-sm lg" @click="_dispatchRecord()">提交</button>
		</view>

	</view>
</template>

<script>
	import {
		updateRoomDecorationRecord,
		uploadVideo
	} from '../../api/renovation/renovation.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	import uploadImageAsync from "../../components/vc-upload-async/vc-upload-async.vue";
	export default {
		data() {
			const translate = (key) => {
				return this.$t(key);
			};

			return {
				renovationInfo: [],
				imgList: [],
				photos: [],
				videoName: '',
				tempFilePath: '',
				content: '',
				communityId: '',
				violations: [{
						name: translate('please_select_if_violation'), //'请选择是否违规'
					},
					{
						name: translate('yes'), //'是',
						value: "true"
					},
					{
						name: translate('no'), //'否',
						value: "false"
					},
				],
				violationIndex: 0,
				violation: '',
				uploadImage: {
					maxPhotoNum: 4,
					imgTitle: translate('image_upload'), //'图片上传',
					canEdit: true
				}
			}
		},

		components: {
			uploadImageAsync
		},

		onLoad(options) {
			this.java110Context.onLoad();
			let _that = this;
			this.communityId = getCurrentCommunity().communityId;
			_that.renovationInfo = JSON.parse(options.apply);
		},
		methods: {
			sendImagesData: function(e) {
				this.photos = [];
				if (e.length > 0) {
					e.forEach((img) => {
						this.photos.push(img.fileId);
					})
				}
			},
			violationChange: function(e) {
				this.violationIndex = e.target.value;
				if (this.violationIndex == 0) {
					this.violation = '';
					return;
				}
				let selected = this.violations[this.violationIndex];
				this.violation = selected.value;
			},

			_dispatchRecord: function() {
				let _that = this
				uni.showLoading({
					title: _that.$t('uploading') + '...' //"上传中..."
				})
				let params = {
					rId: this.renovationInfo.rId,
					roomId: this.renovationInfo.roomId,
					roomName: this.renovationInfo.roomName,
					state: this.renovationInfo.state,
					stateName: this.renovationInfo.stateName,
					photos: this.photos,
					videoName: '',
					remark: this.content,
					detailType: '1001',
					communityId: this.communityId,
					examineRemark: '',
					isTrue: this.violation
				};
				let msg = '';
				if (params.remark == '') {
					msg = _that.$t('please_enter_handling_comments') //"请填写处理意见";
				} else if (params.isTrue == '') {
					msg = _that.$t('please_select_if_violation') //"请选择是否违规";
				}
				if (msg != '') {
					uni.showToast({
						title: msg,
						icon: 'none'
					});
					return;
				}
				updateRoomDecorationRecord(this, params, true)
					.then(function() {
						uni.showToast({
							title: _that.$t('save_successful') //"保存成功"
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						}, 1000);
					});
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