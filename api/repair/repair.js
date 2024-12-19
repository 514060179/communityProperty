import url from '../../constant/url.js'
import {
	getCurrentCommunity
} from '../community/community.js'

import i18n from '../../lang/index.js'
/**
 * 查询报修信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryRepairInfo(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.queryRepairInfo,
			data: _data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: '',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 查询商品类型下的商品列表
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryResourceStoreResName(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.queryResourceStoreResName,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 查询报修师傅
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function loadRepairStaff(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.listRepairTypeUsers,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 转单和退单
 * @param {Object} _that 上下文对象
 * @param {Object} _data 数据处理
 */
export function dispatchRepair(_that, isShowLoad) {
	return new Promise(function(reslove, reject) {
		const _data = {
			'staffId': _that.staffId,
			'staffName': _that.staffName,
			'context': _that.content,
			'repairId': _that.repairId,
			'repairType': _that.repairType,
			'action': _that.action,
			'communityId': getCurrentCommunity().communityId,
			'photos': [],
			'userId': _that.userId,
			'userName': _that.userName
		}
		const _photos = _that.photos;
		_photos.forEach(function(_item) {
			_data.photos.push({
				'photo': _item
			});
		});
		let msg = '';
		if (_data.context == '') {
			msg = i18n.t('please_enter_handling_comments') //'请填写处理意见';
		} else if (_data.staffId == '') {
			msg = i18n.t('qtxsf1') //'请填写师傅';
		} else if (_data.staffName == '') {
			msg = i18n.t('qtxsf1') //'请填写师傅';
		} else if (_data.repairId == '') {
			msg = i18n.t('errorData') //'数据错误';
		} else if (_data.action == 'TRANSFER' && _data.userId == _data.staffId) {
			msg = i18n.t('bnzdgzj') // '不能转单给自己';
		}
		if (msg != '') {
			wx.showToast({
				title: msg,
				icon: 'none',
				duration: 2000
			});
			return;
		}
		_that.context.post({
			url: url.repairDispatch,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 办结
 * @param {Object} _that 上下文对象
 * @param {Object} _data 数据处理
 */
export function finishRepair(_that, isShowLoad) {


	return new Promise(function(reslove, reject) {
		const _data = {
			'feeFlag': _that.feeFlag,
			'context': _that.content,
			'repairId': _that.repairId,
			'repairChannel': _that.repairChannel,
			'publicArea': _that.publicArea,
			'maintenanceType': _that.feeFlag,
			'repairType': _that.repairType,
			'action': _that.action,
			'communityId': getCurrentCommunity().communityId,
			'beforeRepairPhotos': [],
			'afterRepairPhotos': [],
			'repairObjType': _that.repairObjType,
			'userId': _that.userId,
			'userName': _that.userName,
			'storeId': _that.storeId,
			'choosedGoodsList': _that.resourceStoreInfo,
			'totalPrice': _that.amount,
			'payType': _that.payType
		}
		const _beforeRepairPhotos = _that.beforeRepairPhotos;
		_beforeRepairPhotos.forEach(function(_item) {
			_data.beforeRepairPhotos.push({
				'photo': _item
			});
		});
		const _afterRepairPhotos = _that.afterRepairPhotos;
		_afterRepairPhotos.forEach(function(_item) {
			_data.afterRepairPhotos.push({
				'photo': _item
			});
		});
		let msg = '';
		if (!_data.feeFlag) {
			msg = i18n.t('qxzlxx') //'請選擇類型';
		} else if (_data.context == '') {
			msg = i18n.t('please_enter_handling_comments') //'請填寫處理意見';
		} else if (_data.beforeRepairPhotos.length <= 0 || _data.afterRepairPhotos.length <= 0) {
			msg = i18n.t('qsctptt') //'請上傳圖片';
		} else if (_data.repairId == '') {
			msg = i18n.t('errorData') //'数据错误';
		} else if ((_data.maintenanceType == '1001' || _data.maintenanceType == '1003') && _data
			.choosedGoodsList.length < 1) {
			msg = i18n.t('qxzwppp') //'请选择物品';
		} else if (_data.maintenanceType == '1001' && _data.payType == '') {
			msg = i18n.t('qxzzffssss') //'请选择支付方式';
		} else if ((_data.maintenanceType == '1001' || _data.maintenanceType == '1003') && _data
			.choosedGoodsList.length >= 1) {
			_data.choosedGoodsList.forEach((good) => {
				if (!good.useNumber || good.useNumber < 1) {
					msg = i18n.t('spslywww') //'商品数量有误';
				}
				if (_data.maintenanceType == '1001' && (!good.price || good.price < 0)) {
					msg = i18n.t('spjgywww') //'商品价格有误';
				}
			})
		}
		if (msg != '') {
			wx.showToast({
				title: msg,
				icon: 'none',
				duration: 2000
			});
			_that.onoff = true;
			return;
		}
		// 无偿/不用料 商品数量为零
		if (_data.maintenanceType == '1002' || _data.maintenanceType == '1004') {
			_data.useNumber = 0;
			_data.choosedGoodsList = [];
		}
		_that.context.post({
			url: url.repairFinish,
			data: _data,
			success: function(res) {
				_that.onoff = true;
				reslove(res);
			},
			fail: function(e) {
				_that.onoff = true;
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 办结
 * @param {Object} _that 上下文对象
 * @param {Object} _data 数据处理
 */
export function appraiseRepair(_that, isShowLoad) {
	return new Promise(function(reslove, reject) {
		if (_that.remark == '') {
			uni.showToast({
				title: i18n.t('qtxpjnrs'), //'请填写评价内容',
				icon: 'none'
			});
			return;
		}
		if (_that.repairId == '') {
			uni.showToast({
				title: i18n.t('wbhbxxxx'), //'未包含报修信息',
				icon: 'none'
			});
			return;
		}

		const _data = {
			// "appraiseScore": _that.curAppraise,
			// "appraiseType": "10001",
			// "appraiseUserId": _that.userId,
			// "appraiseUserName": _that.userName,
			// "objType": "10001",
			'repairId': _that.repairId,
			'repairType': _that.repairType,
			'repairChannel': _that.repairChannel,
			'publicArea': _that.publicArea,
			'communityId': _that.communityId,
			'context': _that.remark,
		};

		_that.context.post({
			url: url.appraiseRepairNew,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 查询字典表
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryDictInfo(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.queryDictInfo,
			data: _data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 维修任务暂停
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function repairStop(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.post({
			url: url.repairStop,
			data: _data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 维修任务开始
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function repairStart(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.post({
			url: url.repairStart,
			data: _data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}

/**
 * 回复评价
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function replyRepairAppraise(_data, _that, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.post({
			url: url.replyRepairAppraise,
			data: _data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'), //'服务器异常了',
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
	});
}