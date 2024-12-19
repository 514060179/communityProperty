import url from '../../constant/url.js'

import dateObj from '../../lib/com/newland/property/utils/date.js'
/**
 * 查询费用信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function loadFees(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listFee,
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

export function toPayOweFee(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.toQrOweFeePay,
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
 * 查询缴费历史
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryFeeDetail(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryFeeDetail,
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
 * 查询欠费信息
 * @param {Object} _objData 欠费对象
 */
export function getRoomOweFees(_that,_objData, isShowLoad) {
	return new Promise((resolve, reject) => {
		_that.context.get({
			url: url.listOweFees,
			data: _objData, //动态数据
			success: function(res) {
				if (res.statusCode == 200) {
					//成功情况下跳转
					const _roomFees = res.data.data;
					if (_roomFees.length < 1) {
						//_that.noData = true;
						reject();
					}
					 _roomFees.forEach(function(_roomFee) {
					 	_roomFee.endTime = dateObj.dateTimeStringToDateString(_roomFee.endTime);		 	
						_roomFee.deadlineTime = dateObj.dateTimeStringToDateString(_roomFee.deadlineTime);	
					 });
					resolve(_roomFees);
					return;
				}
				reject();
			},
			fail: function(e) {
				reject();
			}
		}, isShowLoad);
	})
}

/**
 * 查询缴费历史
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listFeeDetail(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listFeeDetail,
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

export function saveRoomCreateFee(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.saveRoomCreateFee,
			data:_data,
			success: function(res) {
				reslove(res.data);
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
