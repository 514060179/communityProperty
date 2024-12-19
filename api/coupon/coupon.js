import url from '../../constant/url.js'

import dateObj from '../../lib/com/newland/property/utils/date.js'
/**
 * 核销订单
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function writeOffCouponPropertyUser(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		// debugger
		_that.context.post({
			url: url.writeOffCouponPropertyUser,
			data:_data,
			success: function(res) {
				if (res.data.code == 0){
					reslove(res);
				}else {
					// debugger
					wx.showToast({
						title: '核销状态:' + res.data.msg,
						icon: 'none',
						duration: 3000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 3000
				})
			}
		}, isShowLoad)
	});
}

export function listCouponPropertyUserDetail(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listCouponPropertyUserDetail,
			data:_data,
			success: function(res) {
				if(res.data.code != 0){
					reject(res.data.msg);
					return ;
				}
				reslove(res.data);
			},
			fail: function(e) {
				reject(e);
			}
		}, isShowLoad)
	});
}

export function getIntegralSetting(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listIntegralSetting,
			data:_data,
			success: function(res) {
				if(res.data.code != 0){
					reject(res.data.msg);
					return ;
				}
				reslove(res.data);
			},
			fail: function(e) {
				reject(e);
			}
		}, isShowLoad)
	});
}

export function useIntegral(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		// debugger
		_that.context.post({
			url: url.useIntegral,
			data:_data,
			success: function(res) {
				if (res.data.code == 0){
					reslove(res);
				}else {
					// debugger
					wx.showToast({
						title: '核销状态:' + res.data.msg,
						icon: 'none',
						duration: 3000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 3000
				})
			}
		}, isShowLoad)
	});
}

export function getIntegralUserDetail(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listIntegralUserDetail,
			data:_data,
			success: function(res) {
				if(res.data.code != 0){
					reject(res.data.msg);
					return ;
				}
				reslove(res.data);
			},
			fail: function(e) {
				reject(e);
			}
		}, isShowLoad)
	});
}

export function getReserveGoodsConfirmOrder(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listReserveGoodsConfirmOrder,
			data:_data,
			success: function(res) {
				if(res.data.code != 0){
					reject(res.data.msg);
					return ;
				}
				reslove(res.data);
			},
			fail: function(e) {
				reject(e);
			}
		}, isShowLoad)
	});
}


export function saveReserveGoodsConfirmOrder(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		// debugger
		_that.context.post({
			url: url.saveReserveGoodsConfirmOrder,
			data:_data,
			success: function(res) {
				if (res.data.code == 0){
					reslove(res);
				}else {
					// debugger
					wx.showToast({
						title: '核销状态:' + res.data.msg,
						icon: 'none',
						duration: 3000
					})
				}
			},
			fail: function(e) {
				wx.showToast({
					title:i18n.t('server_error'),
					icon: 'none',
					duration: 3000
				})
			}
		}, isShowLoad)
	});
}
