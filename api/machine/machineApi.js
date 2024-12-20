import url from '../../constant/url.js'

import dateObj from '../../lib/java110/utils/date.js'


/**
 * 查询设备
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listMachines(_that,_data){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listMachines,
			data:_data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: "服务器异常了",
					icon: 'none',
					duration: 2000
				})
			}
		})
	});
}
/**
 * 查询开门记录
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listMachineRecords(_that,_data){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listMachineRecords,
			data:_data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: "服务器异常了",
					icon: 'none',
					duration: 2000
				})
			}
		})
	});
}

/**
 * 查询充电桩
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listChargeMachine(_that,_data){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listChargeMachine,
			data:_data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: "服务器异常了",
					icon: 'none',
					duration: 2000
				})
			}
		})
	});
}
/**
 * 查询充电桩订单
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function listChargeMachineOrder(_that,_data){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.listChargeMachineOrder,
			data:_data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: "服务器异常了",
					icon: 'none',
					duration: 2000
				})
			}
		})
	});
}

/**
 * 查询充电桩订单
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function getIotOpenApi(_that,_data){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.getIotOpenApi,
			data:_data,
			success: function(res) {
				reslove(res.data);
			},
			fail: function(e) {
				wx.showToast({
					title: "服务器异常了",
					icon: 'none',
					duration: 2000
				})
			}
		})
	});
}

 /**
  * 审核
  * @param {Object} _that
  * @param {Object} _data
  */
 export function postIotOpenApi(_that,_data){
 	return new Promise(function(reslove,reject){
 		_that.context.post({
 			url: url.postIotOpenApi,
 			data:_data,
 			success: function(res) {
 				reslove(res.data);
 			},
 			fail: function(e) {
 				wx.showToast({
 					title: "服务器异常了",
 					icon: 'none',
 					duration: 2000
 				})
 			}
 		})
 	});
 }


