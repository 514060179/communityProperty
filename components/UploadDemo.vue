<template>
	<view>
		<view class="upload-wrap">
			<view class="btn-click mgb-16 upload-btn" @click="handleUploadClick" v-show="!disabled">
				<image :src="icons.upload" mode="aspectFill" class="upload-icon" />
				<text class="upload-text">上传{{ title[type] }}</text>
			</view>
			<view class="mgb-16 file-wrap" v-for="(item, index) in fileList" :key="index">
				<view class="btn-click file-line" @click="handlePreview(item)">
					<!-- <view class="btn-click file-line" @click="handleUploadFile(item)"> -->
					<view class="file-info">
						<image :src="icons[item.fileType || 'file']" mode="aspectFill" class="file-icon" />
						<text class="file-name">{{ item.name || title[type] }}</text>
					</view>
					<image :src="icons.close" mode="aspectFill" class="file-icon" v-if="!disabled"
						@click.stop="handleDeleteFile(index)" />
				</view>
			</view>
			<view class="mgb-16 file-wrap" v-if="fileList.length === 0 && disabled">
				<view class="file-line">
					<text class="file-empty">{{$t('not_data')}}</text>
				</view>
			</view>
		</view>
		<xe-upload ref="XeUpload" :options="uploadOptions" @callback="handleUploadCallback"></xe-upload>
	</view>
</template>

<script>
	import {
		getHeaders
	} from '../lib/com/newland/property/api/SystemApi.js'
	import conf from '../conf/config.js'
	export default {
		name: 'UploadDemo',
		components: {},
		props: {
			type: {
				default: 'image', // image, video, file
				type: String,
			},
			list: {
				default: () => ([]),
				type: Array,
			},
			disabled: {
				default: false,
				type: Boolean,
			},
		},
		data() {
			const translate = () => {
				console.log(conf.baseUrl);
			};
			return {
				// uploadOptions 参数跟uni.uploadFile的参数是一样的（除了类型为Function的属性）
				uploadOptions: {
					url: conf.baseUrl + 'callComponent/upload/uploadVedio/upload', // 不传入上传地址则返回本地链接
					name: 'uploadFile',
					header: getHeaders(),
				},
				fileList: [],
				title: {
					image: '图片',
					video: '视频',
					file: '文件',
				},
				icons: {
					upload: '/static/upload/icon_upload.png',
					close: '/static/upload/icon_close.png',
					image: '/static/upload/icon_image.png',
					video: '/static/upload/icon_video.png',
					file: '/static/upload/icon_file.png',
				},
			};
		},
		watch: {
			list: {
				handler(val) {
					console.log(val);
					this.fileList = val || [];
				},
				immediate: true,
				deep: true,
			},
		},
		methods: {

			handleUploadClick() {
				// 使用默认配置则不需要传入第二个参数
				// App、H5 文件拓展名过滤 { extension: ['.doc', '.docx'] } 或者 { extension: '.doc, .docx' }
				// this.$refs.XeUpload.upload(this.type);
				// 可以根据当前的平台，传入选择文件的参数，例如
				// 注意 当chooseMedia可用时，会优先使用chooseMedia
				// // uni.chooseImage
				// this.$refs.XeUpload.upload(type, {
				// 	count: 6,
				// 	sizeType: ['original', 'compressed'],
				// 	sourceType: ['album'],
				// });
				// // uni.chooseVideo
				// this.$refs.XeUpload.upload(type, {
				// 	sourceType: ['camera', 'album'],
				// });
				// // uni.chooseMedia (微信小程序2.10.0+;抖音小程序、飞书小程序;京东小程序支持)
				// this.$refs.XeUpload.upload(type, {
				// 	count: 9,
				// 	sourceType: ['album', 'camera'],
				// });
				// 使用方法
				let _this = this

				uni.getSystemInfo({
					success: function(res) {
						console.log(res.platform); // res.platform 可以是 'ios' 或 'android'
						if (res.platform === 'ios') {
							console.log('当前设备是 iOS');
							_this.$refs.XeUpload.upload(_this.type);
						} else if (res.platform === 'android') {
							console.log('当前设备是 Android');
							_this.$refs.XeUpload.upload(_this.type);
						} else {
							console.log('当前设备不是 iOS 或 Android');
						}
					}
				});

			},
			handleUploadCallback(e) {
				console.log('UploadCallback', e);
				if (['choose', 'success'].includes(e.type)) {
					let obj = {
						"fileName": e.data[0].response.fileName,
						"realFileName": e.data[0].response.realFileName
					}
					this.$emit('uploadFile', obj);
					// 根据接口返回修改对应的response相关的逻辑
					const tmpFiles = (e.data || []).map(({
						response,
						tempFilePath,
						name,
						fileType
					}) => {
						// 当前测试服务返回的数据结构如下
						// {
						//   "result": {
						//       "fileName": "fileName",
						//       "filePath": `http://192.168.1.121:3000/static/xxxxx.png`,
						//   },
						//   "success": true,
						// }
						const res = response?.result || {};
						const tmpUrl = res.filePath ?? tempFilePath;
						const tmpName = res.fileName ?? name;
						return {
							...res,
							url: tmpUrl,
							name: tmpName,
							fileType,
						};
					});
					this.fileList.push(...tmpFiles);

				}
			},
			// 自定义上传
			handleUploadFile({
				url
			}) {
				console.log('UploadFile', url);
				uni.uploadFile({
					// url: 'http://192.168.31.185:3000/api/upload',
					name: 'uploadFile',
					url: conf.baseUrl + 'callComponent/upload/uploadVedio/upload', // 不传入上传地址则返回本地链接
					header: getHeaders(),
					filePath: url,
					success: (res) => {
						console.log('handleUpload success', res);
						const tmpData = JSON.parse(res.data);
						uni.showToast({
							title: tmpData.success ? '上传成功' : '上传失败',
							icon: 'none'
						});

					},
					fail: (err) => {
						console.log('handleUpload fail', err);
						uni.showToast({
							title: '出错啦',
							icon: 'none'
						});
					},
				});
			},
			// 预览


			handlePreview({
				url
			}) {
				console.log('PreviewFile', url);
				const fileType = this.getFileType(url);
				if (fileType === 'image') {
					return uni.previewImage({
						current: url,
						urls: [url],
					});
				}
				// #ifndef H5
				if (fileType === 'office') {
					return uni.openDocument({
						filePath: url,
						fail: (err) => {
							console.log(err);
							uni.showToast({
								icon: 'none',
								title: '文件预览失败'
							});
						},
					});
				}
				// #endif
				uni.showModal({
					title: '提示',
					content: url,
					showCancel: false,
				});
			},
			handleDeleteFile(index) {
				this.fileList.splice(index, 1);
			},
			/**
			 * 获取文件类型
			 * @param {String} fileName 文件链接
			 * @returns {String} fileType => '', image, video, audio, office, unknown
			 */
			getFileType(fileName = '') {
				const flieArr = fileName.split('.');
				let suffix = flieArr[flieArr.length - 1];
				if (!suffix) return '';
				suffix = suffix.toLocaleLowerCase();
				const image = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp'];
				if (image.includes(suffix)) return 'image';
				const video = ['mp4', 'm4v'];
				if (video.includes(suffix)) return 'video';
				const audio = ['mp3', 'm4a', 'wav', 'aac'];
				if (audio.includes(suffix)) return 'audio';
				const office = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'plain'];
				if (office.includes(suffix)) return 'office';
				return 'unknown';
			},
		},
	};
</script>

<style lang="scss" scoped>
	view {
		box-sizing: border-box;
	}

	.btn-click {
		transition: all 0.3s;
		opacity: 1;
	}

	.btn-click:active {
		opacity: 0.5;
	}

	.mgb-16 {
		margin-bottom: 16rpx;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.upload-wrap {
		width: 100%;
		border-radius: 16rpx;
		background: white;
		padding: 32rpx;

		.upload-btn {
			width: 100%;
			height: 176rpx;
			border: 2rpx dashed #AAAAAA;
			background: #FAFAFA;
			border-radius: 16rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.upload-icon {
				width: 48rpx;
				height: 48rpx;
				margin-bottom: 8rpx;
			}

			.upload-text {
				font-size: 26rpx;
				color: #9E9E9E;
				line-height: 40rpx;
			}
		}

		.file-wrap {
			.file-line {
				width: 100%;
				background: #F5F5F5;
				border-radius: 8rpx;
				padding: 16rpx;
				font-size: 26rpx;
				color: #1A1A1A;
				line-height: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.file-info {
					width: 90%;
					display: flex;
					align-items: center;

					.file-name {
						max-width: 80%;
						padding-left: 16rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.file-icon {
					width: 40rpx;
					height: 40rpx;
					flex-shrink: 0;
				}

				.file-empty {
					color: #999999;
				}
			}
		}
	}
</style>