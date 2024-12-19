import url from '../../constant/url.js'
/**
 * 查询工作流
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryStartWork(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryStartWork,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 查询工作流
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryWorkType(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkType,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 起草申请
 * @param {Object} _that
 * @param {Object} _data
 */
export function saveWorkPool(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		uni.showLoading({
		  title: '提交中...',
		});
		_that.context.post({
			url: url.saveWorkPool,
			data:_data,
			success: function(res) {
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
				if(res.data.code == 0){
					reslove(res.data);
					return;
				}
				
			},
			fail: function(e) {
				uni.hideLoading();
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

export function updateWorkPool(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		uni.showLoading({
		  title: '提交中...',
		});
		_that.context.post({
			url: url.updateWorkPool,
			data:_data,
			success: function(res) {
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
				if(res.data.code == 0){
					reslove(res.data);
					return;
				}
				
			},
			fail: function(e) {
				uni.hideLoading();
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function deleteWorkPool(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		uni.showLoading({
		  title: '提交中...',
		});
		_that.context.post({
			url: url.deleteWorkPool,
			data:_data,
			success: function(res) {
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
				if(res.data.code == 0){
					reslove(res.data);
					return;
				}
				
			},
			fail: function(e) {
				uni.hideLoading();
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function getWorkTask(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkTask,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

export function getWorkPool(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkPool,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function getWorkEvent(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkEvent,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function getWorkPoolFile(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkPoolFile,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function getWorkCopy(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkCopy,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}


export function getWorkCycle(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listWorkCycle,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}
export function getTaskWork(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryTaskWork,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 起草申请
 * @param {Object} _that
 * @param {Object} _data
 */
export function finishWorkTask(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		uni.showLoading({
		  title: '提交中...',
		});
		_that.context.post({
			url: url.finishWorkTask,
			data:_data,
			success: function(res) {
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
				if(res.data.code == 0){
					reslove(res.data);
					return;
				}
				
			},
			fail: function(e) {
				uni.hideLoading();
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

export function getCopyWork(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryCopyWork,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}


export function finishWorkCopy(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		uni.showLoading({
		  title: '提交中...',
		});
		_that.context.post({
			url: url.finishWorkCopy,
			data:_data,
			success: function(res) {
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
				if(res.data.code == 0){
					reslove(res.data);
					return;
				}
				
			},
			fail: function(e) {
				uni.hideLoading();
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}