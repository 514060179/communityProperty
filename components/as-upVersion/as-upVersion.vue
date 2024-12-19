<template>
	<view>
		<umask :show="uploadPopShow" @click="" :duration="0">
			<view class="page-height">
				<view class="page-content">
					<view class="wrap">
						<view class="popup-bg">
							<view class="popup-content popup-content-show">
								<view class="update-wrap">
									<image src="./img/img.png" class="top-img">
									</image>
									<view class="content">
										<text class="title">{{$t('发现新版本')}}V{{newVision}}</text>
										<!-- 升级描述 -->
										<view class="title-sub" style="white-space: pre-line;" v-html="newDesc"></view>
										<!-- 升级按钮 -->
										<button class="btn" v-if="!pressShow"
											@click.stop="toUpLoad()">{{$t('立即升级')}}</button>
										<!-- 下载进度 -->
										<view class="sche-wrap" v-else>
											<!-- 更新包下载中 -->
											<view class="sche-bg">
												<view class="sche-bg-jindu" :style="{'width':pressValue+'%'}"></view>
											</view>
											<text
												class="down-text">下载进度:{{(downSize/1024/1024 ).toFixed(2)}}M/{{(fileSize/1024/1024).toFixed(2)}}M</text>
										</view>
									</view>
								</view>
								<image v-if="isForceUpdate" src="./img/close.png" class="close-ioc"
									@click.stop="closeUpdate()">
								</image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</umask>
	</view>
</template>

<script>
	import umask from "./u-mask/u-mask.vue"
	export default {
		name: "am-upVersion",
		components: {
			umask
		},
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				pressShow: false, //进度条显示
				downSize: null, //下载文件大小
				pressValue: null, //下载百分比
				fileSize: null, //文件总大小
				uploadPopShow: null,
				newVision: '',
				appStoreUrl: '',
				newDesc: '',
				upLoadUrl: '',
				isForceUpdate: false,
				paths: 'my'
			};
		},

		props: {
			// upLoadUrl: {
			// 	type: String,
			// 	default: "",
			// },
			// newVision: {
			// 	type: String,
			// 	default: "1.0.0",
			// },
			// newDesc: {
			// 	type: String,
			// 	default: '版本更新升級',
			// },
			// appStoreUrl: {
			// 	type: String,
			// 	default: "",
			// }
		},
		computed: {
			newDescComp() {}
		},
		watch: {
			newVision(newValue, oldValue) {
				let _that = this
				uni.getSystemInfo({
					success: function(res) {
						console.log(res)
						console.log("newValue:", newValue, "===appVersion:", res.appVersion, "===appWgtVersion:", res.appWgtVersion)
						if (newValue <= res.appVersion || newValue <= res.appWgtVersion) {
							if (_that.paths == 'my') {
								setTimeout(() => {
									uni.showToast({
										icon: 'none',
										title: _that.$t('当前是最新版本，无需更新') + '!'
									})
								}, 200)
								uni.navigateBack(-1)
							} else {
								uni.navigateBack(-1)
							}
						}
						// #ifdef H5
						if (newValue > res.appVersion) {
							_that.uploadPopShow = true
						} else {
							uni.navigateBack(-1)
						}

						// #endif
						// #ifdef APP-PLUS
						if (newValue > res.appWgtVersion) {
							_that.uploadPopShow = true
						} else {
							uni.navigateBack(-1)
						}
						// #endif
					}
				})
			}
		},
		onLoad(options) {
			this.java110Context.onLoad();
			console.log(JSON.parse(options.info));
			const objs = JSON.parse(options.info)
			this.newVision = objs.newVision
			this.appStoreUrl = objs.appStoreUrl
			this.newDesc = objs.newDesc
			this.upLoadUrl = objs.upLoadUrl
			this.isForceUpdate = objs.isForceUpdate == 0 ? true : false
			this.paths = objs.paths
			// #ifdef APP-PLUS 
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			let currentWebview = page.$getAppWebview()
			currentWebview.setStyle({
				popGesture: 'none'
			})
			// #endif
		},
		methods: {
			onBackPress(res) {
				// 【安卓】禁止左滑、物理返回
				return res.from === 'backbutton'
			},
			/**
			 * 下载升级
			 */
			toUpLoad() {
				if (!this.upLoadUrl) {
					let _that = this
					uni.showToast({
						title: _that.$t('未检测到下载地址'),
						icon: "none"
					})
					return
				}
				if (uni.getSystemInfoSync().platform === 'ios') {
					plus.runtime.launchApplication({
						action: this.appStoreUrl
					}, function(e) {
						console.log(e);
						console.log('Open system default browser failed: ' + e.message);
					});
					return
				}
				if (uni.getSystemInfoSync().platform === 'android') {
					console.log("android");
					plus.runtime.openURL(this.appStoreUrl)
					// plus.runtime.launchApplication({
					// 	action: this.playStoreUrl
					// }, function(e) {
					// 	console.log('Open Google Play Store app failed: ' + e.message + ', trying fallback URL.');
					// 	// 如果打开 Google Play 商店应用失败，则尝试打开网页版本
					// 	plus.runtime.openURL(this.appStoreUrl, function(e) {
					// 		console.log('Open fallback URL failed: ' + e.message);
					// 	});
					// });
					// uni.navigateTo({
					// 	url: '/pages/webview/webview?url=' + this.appStoreUrl
					// });
				}
				// let that = this
				// that.pressShow = true
				// that.downloadTask = uni.downloadFile({
				// 	url: that.upLoadUrl, //仅为示例，并非真实的资源
				// 	success: (res) => {
				// 		if (res.statusCode === 200) {
				// 			that.pressShow = false
				// 			that.uploadPopShow = false
				// 			// #ifdef APP-PLUS
				// 			plus.runtime.install(res.tempFilePath)
				// 			// #endif
				// 		} else {
				// 			uni.showToast({
				// 				title: "安装包下载失败!请联系管理员。",
				// 				icon: "none"
				// 			})
				// 		}
				// 	}
				// });

				// that.downloadTask.onProgressUpdate((res) => {
				// 	that.downSize = res.totalBytesWritten
				// 	that.fileSize = res.totalBytesExpectedToWrite
				// 	that.pressValue = res.progress
				// });
			},
			/**
			 * 关闭升级
			 */
			closeUpdate() {
				this.pressShow = false
				this.uploadPopShow = false
				this.$root.newVision = ""
				this.$root.newDesc = ""
				if (this.downloadTask) {
					this.downloadTask.abort()
				}
				uni.navigateBack(-1)
			}
		},

	}
</script>

<style lang="scss">
	.page-height {
		// height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba($color: #000000, $alpha: .7);
	}

	.popup-bg {
		// margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 750rpx;
	}

	.popup-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.popup-content-show {
		animation: mymove 300ms;
		transform: scale(1);
	}

	@keyframes mymove {
		0% {
			transform: scale(0);
			/*开始为原始大小*/
		}

		100% {
			transform: scale(1);
		}

	}

	.update-wrap {
		width: 580rpx;
		border-radius: 18rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		padding: 170rpx 30rpx 0;

		.top-img {
			position: absolute;
			left: 0;
			width: 100%;
			height: 256rpx;
			top: -128rpx;
		}

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 40rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;
				color: #6526f3;
			}

			.title-sub {
				text-align: left;
				font-size: 24rpx;
				color: #666666;
				padding: 30rpx 0;
			}

			.btn {
				width: 460rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				font-size: 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 100px;
				background-color: #6526f3;
				margin-top: 20rpx;
			}
		}
	}

	.close-ioc {
		width: 70rpx;
		height: 70rpx;
		margin-top: 30rpx;
	}

	.sche-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		padding: 10rpx 50rpx 0;

		.sche-wrap-text {
			font-size: 24rpx;
			color: #666;
			margin-bottom: 20rpx;
		}

		.sche-bg {
			position: relative;
			background-color: #cccccc;
			height: 30rpx;
			border-radius: 100px;
			width: 480rpx;
			display: flex;
			align-items: center;

			.sche-bg-jindu {
				position: absolute;
				left: 0;
				top: 0;
				height: 30rpx;
				min-width: 40rpx;
				border-radius: 100px;
				background: url(./img/round.png) #5775e7 center right 4rpx no-repeat;
				background-size: 26rpx 26rpx;
			}
		}

		.down-text {
			font-size: 24rpx;
			color: #5674e5;
			margin-top: 16rpx;
		}
	}
</style>