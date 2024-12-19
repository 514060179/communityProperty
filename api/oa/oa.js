import url from '../../constant/url.js'
/**
 * 查询工作流
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryOaWorkflow(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflow,
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
 * 查询表单
 * @param {Object} _that
 * @param {Object} _data
 */
export function queryOaWorkflowForm(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflowForm,
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
export function saveOaWorkflowFormData(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.saveOaWorkflowFormData,
			data:_data,
			success: function(res) {
				reslove(res);
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
 * 编辑申请
 * @param {Object} _that
 * @param {Object} _data
 */
export function updateOaWorkflowFormData(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.updateOaWorkflowFormData,
			data:_data,
			success: function(res) {
				reslove(res);
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
 * 审核
 * @param {Object} _that
 * @param {Object} _data
 */
export function auditOaWorkflow(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.auditOaWorkflow,
			data:_data,
			success: function(res) {
				reslove(res);
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
 * 审核
 * @param {Object} _that
 * @param {Object} _data
 */
export function auditUndo(_that,_url,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: _url,
			data:_data,
			success: function(res) {
				reslove(res);
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
 * 查询完成工作流
 * /oaWorkflow/queryOaWorkflowUserHisTaskFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryOaWorkflowUserTaskFormData(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflowUserTaskFormData,
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
 * 查询完成工作流
 * /oaWorkflow/queryOaWorkflowUserHisTaskFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryOaWorkflowUserHisTaskFormData(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflowUserHisTaskFormData,
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
 * 查询单子
 * /oaWorkflow/queryOaWorkflowFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryOaWorkflowFormData(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflowFormData,
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
 * 查询工单流转
 * /oaWorkflow/queryOaWorkflowFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryOaWorkflowUser(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOaWorkflowUser,
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
 * 查询工单流转
 * /oaWorkflow/queryOaWorkflowFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listRunWorkflowImage(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listRunWorkflowImage,
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
 * 查询下一处理人
 * /oaWorkflow/queryOaWorkflowFormData
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function getNextTask(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.getNextTask,
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

 export function queryNextDealUser(_that,dataObj, isShowLoad) {
 	return new Promise(
 		(resolve, reject) => {
 			_that.context.get({
 				url: url.queryNextDealUser,
 				data: dataObj,
 				//动态数据
 				success: function(res) {
 					if (res.data.code == 0) {
 						const _data = res.data.data;
 						resolve(_data);
 						return ;
 					}
 					reject('未包含数据');
 				},
 				fail: function(e) {
 					reject(e);
 				}
 			}, isShowLoad);
 		})
 }

