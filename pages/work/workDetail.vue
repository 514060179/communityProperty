<template>

	<view>
		<l-file ref="lFile" @up-success="onSuccess"></l-file>
		<view class="flex justify-between">
			<!-- 工作单详情 -->
			<view class="block__title">{{$t('work_order_details')}}</view>
			<view class="" style="padding: 32rpx 30rpx 20rpx;" v-if="staffId == workTaskDetailInfo.createUserId">
				<!-- 修改 -->
				<button class="cu-btn round sm line-blue margin-left-sm" @tap="_toEditWork()">{{$t('edit')}}</button>
				<!-- 删除 -->
				<button class="cu-btn round sm line-red margin-left-sm"
					@tap="_openDeleteWork()">{{$t('delete')}}</button>
			</view>
		</view>
		<view class="cu-list menu ">
			<view class="cu-item">
				<view class="content">
					<!-- 工单编号 -->
					<text class="text-grey">{{$t('work_order_number')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.workId}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 工单名称 -->
					<text class="text-grey">{{$t('work_order_name')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.workName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 类型名称 -->
					<text class="text-grey">{{$t('type_name')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.typeName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 标识 -->
					<text class="text-grey">{{$t('identifier')}}</text>
				</view>
				<view class="action">
					<!-- '一次性工单':'周期性工单' -->
					<text
						class="text-grey text-sm">{{workTaskDetailInfo.workCycle == '1001'?$t('one_time_work_order'):$t('periodic_work_order')}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 时间段 -->
					<text class="text-grey">{{$t('time_period')}}</text>
				</view>
				<view class="action">
					<text
						class="text-grey text-sm">{{workTaskDetailInfo.startTime}}~{{workTaskDetailInfo.endTime}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 发起人 -->
					<text class="text-grey">{{$t('initiator')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.createUserName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 处理人 -->
					<text class="text-grey">{{$t('processor')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.curStaffName || '-'}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 抄送人 -->
					<text class="text-grey">{{$t('cc_person')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.curCopyName || '-'}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 状态 -->
					<text class="text-grey">{{$t('status')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.stateName}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<!-- 创建时间 -->
					<text class="text-grey">{{$t('creation_time')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.createTime}}</text>
				</view>
			</view>
			<!-- 附件 -->
			<!-- 下载 -->
			<!-- <view class="cu-item" v-if="workTaskDetailInfo.pathUrl">
				<view class="content">
					<text class="text-grey">{{$t('attachments')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm"
						@click="_downloadFile(workTaskDetailInfo.pathUrl)">{{$t('download')}}</text>
				</view>
			</view> -->
			<view class="cu-item">
				<view class="content">
					<!-- 内容 -->
					<text class="text-grey">{{$t('content')}}</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">{{workTaskDetailInfo.content}}</text>
				</view>
			</view>
		</view>

		<view class="cu-timeline margin-top" v-if="events && events.length>0">
			<!-- 流转 -->
			<view class="cu-time">{{$t('circulation')}}</view>
			<view class="cu-item " v-for="(item,index) in events" :key="index">
				<!-- 处理任务 -->
				<view class="bg-cyan content">
					<text>{{item.staffName}} </text> 在 {{item.createTime}} {{$t('task_processing')}}
				</view>
				<view class="bg-cyan content">
					<!-- 处理意见 -->
					<text>{{$t('processing_opinion')}}：</text> {{item.remark}}
				</view>
			</view>
		</view>

		<view v-if="files && files.length>0">
			<!-- 附件 -->
			<view class="block__title">{{$t('attachments')}}</view>
			<view class="cu-list menu ">
				<view class="cu-item" v-for="(file,index) in files" :key="index">
					<view class="content">
						<text class="text-grey">{{file.staffName}}</text>
					</view>
					<view class="action" v-if="file.pathUrl">
						<!-- 下载 -->
						<text class="text-grey text-sm" @click="downloadImg(file.pathUrl)">{{$t('download')}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="delWorkDetailFlag==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<!-- 温馨提示 -->
					<view class="content">{{$t('warm_prompt')}}</view>
					<view class="action" @tap="_cancleCall()">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<!-- 您确认删除工作单 -->
				<view class="padding-xl">

					{{$t('confirm_delete_work_order')}}？
				</view>
				<view class="cu-bar bg-white justify-end">
					<!-- 取消 -->
					<view class="action margin-0 flex-sub  solid-left" @tap="_cancleDelete()">{{$t('dialog_cancel')}}
					</view>
					<!-- 确认 -->
					<view class="action margin-0 flex-sub text-blue solid-left" @tap="_doDeleteWork()">
						{{$t('dialog_ok')}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import url from '../../constant/url.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js';
	import {
		getStaffId
	} from '@/api/staff/staff.js'
	import {
		getWorkPool,
		getWorkEvent,
		getWorkPoolFile,
		deleteWorkPool
	} from '@/api/oa/workApi.js';
	export default {
		data() {
			return {
				viewImage: false,
				viewImageSrc: '',
				workTaskDetailInfo: {},
				workId: '',
				taskId: '',
				events: [],
				files: [],
				delWorkDetailFlag: false,
				staffId: '',

			}
		},
		onLoad(options) {
			this.java110Context.onLoad();
			this.workId = options.workId;
			this.taskId = options.taskId;
			this.srcPath = url.hcBaseUrl;
			this.staffId = getStaffId();
			this._queryWorkDetail();
			this._queryWorkEvent();
			this._queryWorkFiles();
		},
		methods: {
			_queryWorkDetail: function() {
				let _that = this;
				getWorkPool(this, {
					page: 1,
					row: 1,
					workId: this.workId,
					taskId: this.taskId
				}, JSON.stringify(this.workTaskDetailInfo) == '{}').then(_data => {
					_that.workTaskDetailInfo = _data.data[0];
				})
			},
			_queryWorkEvent: function() {
				let _that = this;
				getWorkEvent(this, {
					page: 1,
					row: 100,
					workId: this.workId,
					taskId: this.taskId
				}, this.events.length == 0).then(_data => {
					_that.events = _data.data;
				})
			},
			_queryWorkFiles: function() {
				let _that = this;
				getWorkPoolFile(this, {
					page: 1,
					row: 100,
					workId: this.workId,
					taskId: this.taskId
				}, this.files.length == 0).then(_data => {
					_that.files = _data.data;
				})
			},
			_toEditWork: function() {
				uni.navigateTo({
					url: '/pages/work/editWrok?workId=' + this.workId
				});
			},
			_openDeleteWork: function() {
				this.delWorkDetailFlag = true;
			},
			_doDeleteWork: function() {
				let _that = this;
				deleteWorkPool(this, {
					workId: this.workId,
				}, true).then(_data => {
					uni.navigateBack({
						delta: 2
					});
				})
			},
			_cancleDelete: function() {
				this.delWorkDetailFlag = false;
			},
			_downloadFile: function(_url) {
				let _this = this
				uni.downloadFile({
					url: _url, //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {

							let tempFile = res.tempFilePath;
							// const arrayBuffer = new Uint8Array(tempFile); //先将本地图片路径转换成array类型 
							// const base64Img = uni.arrayBufferToBase64(arrayBuffer); //再转换成base64类型
							// console.log(base64Img);

							uni.saveFile({
								tempFilePath: tempFile,
								success: function(res) {
									// var savedFilePath = res.savedFilePath;
									uni.showToast({
										icon: 'none',
										title: _this.$t('save_successful')
									})
								}
							});
							uni.openDocument({
								filePath: tempFile,
								showMenu: true,
								success: function(res) {
									console.log('打开文档成功');
								}
							});
						}
					}
				});
			},
			onSuccess(res) {
				console.log('上传成功回调', JSON.stringify(res));
				uni.showToast({
					title: JSON.stringify(res),
					icon: 'none'
				})
			},
			downloadFileAndo(url) {
				console.log("開始下載", url);
				// 获取文件扩展名
				const fileExtension = url.substring(url.lastIndexOf('.') + 1);

				// 定义保存文件路径
				const fileName = `${new Date().getTime()}.${fileExtension}`;
				const downloadPath = `_downloads/${fileName}`;
				console.log("下載", downloadPath);
				// 创建下载任务
				const dtask = plus.downloader.createDownload(url, {
					filename: downloadPath
				}, function(download, status) {
					if (status === 200) {
						// 下载成功
						plus.nativeUI.toast("下载成功: " + download.filename);

						// 获取真实文件路径
						plus.io.resolveLocalFileSystemURL(download.filename, function(entry) {
							// 打开文件
							plus.runtime.openFile(entry.fullPath, {}, function(e) {
								plus.nativeUI.toast("打开失败: " + e.message);
							});
						}, function(e) {
							plus.nativeUI.toast("文件路径解析失败: " + e.message);
						});

					} else {
						// 下载失败
						plus.nativeUI.toast("下载失败");
					}
				});

				// 启动下载任务
				dtask.start();
			},
			downloadFileIos(url) {
				// 获取文件扩展名
				const fileExtension = url.substring(url.lastIndexOf('.') + 1);
				// 定义保存文件名
				const fileName = `${new Date().getTime()}.${fileExtension}`;

				// 获取保存目录
				plus.io.resolveLocalFileSystemURL('_downloads/', function(entry) {
					// 构造文件路径
					const filePath = entry.fullPath + fileName;

					// 创建下载任务
					const dtask = plus.downloader.createDownload(url, {
						filename: filePath
					}, function(download, status) {
						if (status === 200) {
							// 下载成功
							plus.nativeUI.toast("下载成功: " + download.filename);
							// 打开文件
							plus.io.resolveLocalFileSystemURL(download.filename, function(fileEntry) {
								plus.runtime.openFile(fileEntry.toLocalURL(), {}, function(e) {
									plus.nativeUI.toast("打开失败ios: " + e.message);
								});
							}, function(e) {
								plus.nativeUI.toast("文件路径解析失败: " + e.message);
							});
						} else {
							// 下载失败
							plus.nativeUI.toast("下载失败");
						}
					});

					// 启动下载任务
					dtask.start();
				}, function(e) {
					plus.nativeUI.toast("获取下载目录失败: " + e.message);
				});
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
			getExtension(url) {
				// 使用split方法分割字符串，并获取最后一个部分
				const parts = url.split('.');
				const extension = parts[parts.length - 1];
				return extension;
			},
			downloadImg(_url) {
				let _this = this
				uni.showLoading({
					title: '加载中...'
				});

				const fileType = _this.getFileType(_url);
				// 如果是office类型文件
				if (fileType === 'office') {
					console.log(_url);
					// 使用方法
					uni.getSystemInfo({
						success: function(res) {
							console.log(res.platform); // res.platform 可以是 'ios' 或 'android'
							if (res.platform === 'ios') {
								console.log('当前设备是 iOS');
								_this.downloadFileIos(_url);
							} else if (res.platform === 'android') {
								console.log('当前设备是 Android');
								_this.downloadFileAndo(_url);
							} else {
								console.log('当前设备不是 iOS 或 Android');
								// uni.saveFile(_url)
								_this._downloadFile(_url)
							}
						}
					});
					// _this.$refs.lFile.download({
					// 		url: _url, //必填，附件网络地址
					// 		type: 'save', //选填，非save为临时下载
					// 		customName: '附件.' + _this.getExtension(_url),
					// 		//...DownloadOptions直接写key:value 
					// 		method: 'GET'
					// 	})
					// 	.then(path => {
					// 		console.log(path);
					// 		// _this.localPath = path;
					// 		// plus.runtime.openFile(path)
					// 		// _this.$refs.lFile.open(path);
					// 	});

					uni.hideLoading(); //隐藏 loading 提示框
				}
				// 如果是图片类型文件
				if (fileType === 'image') {
					//wx.downloadFile方法：下载文件资源到本地
					uni.downloadFile({
						url: _url, //图片地址
						success: function(res) {
							let tempFile = res.tempFilePath;
							//wx.saveImageToPhotosAlbum方法：保存图片到系统相册
							uni.saveImageToPhotosAlbum({
								filePath: tempFile, //图片文件路径
								success: function(data) {
									uni.hideLoading(); //隐藏 loading 提示框
									uni.showModal({
										title: '提示',
										content: _this.$t('save_successful'),
										modalType: false,
									})
								},
								// 接口调用失败的回调函数
								fail: function(err) {
									if (err.errMsg ===
										"saveImageToPhotosAlbum:fail:auth denied" ||
										err
										.errMsg ===
										"saveImageToPhotosAlbum:fail auth deny" || err
										.errMsg ===
										"saveImageToPhotosAlbum:fail authorize no response"
									) {
										uni.showModal({
											title: '提示',
											content: '需要您授权保存相册',
											modalType: false,
											success: modalSuccess => {
												uni.openSetting({
													success(
														settingdata
													) {
														console
															.log(
																"settingdata",
																settingdata
															)
														if (settingdata
															.authSetting[
																'scope.writePhotosAlbum'
															]) {
															uni.showModal({
																title: '提示',
																content: '获取权限成功,再次点击图片即可保存',
																modalType: false,
															})
														} else {
															uni.showModal({
																title: '提示',
																content: '获取权限失败，将无法保存到相册哦~',
																modalType: false,
															})
														}
													},
													fail(
														failData) {
														console
															.log(
																"failData",
																failData
															)
													},
													complete(
														finishData
													) {
														console
															.log(
																"finishData",
																finishData
															)
													}
												})
											}
										})
									}
								},
								complete(res) {
									uni.hideLoading(); //隐藏 loading 提示框
								}
							})
						}
					})
				}
			},
			saveEwm() {
				//获取相册授权
				uni.getSetting({
					success: (res) => {
						if (!res.authSetting['scope.writePhotosAlbum']) {
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success: () => {
									//这里是用户同意授权后的回调
									this.save();
								},
								fail: () => { //这里是用户拒绝授权后的回调
								}
							})
						} else { //用户已经授权过了
							this.save();
						}
					}

				})

			},

		}
	}
</script>

<style lang="scss">
	.block__title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, .6);
		padding: 40rpx 30rpx 20rpx;
	}
</style>