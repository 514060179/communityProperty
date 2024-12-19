import url from '../../constant/url.js'
/**
 * 查询楼栋信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function loadRooms(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryRooms,
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

export function loadRoomAndOwner(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url:url.listRoomAndOwner,
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
	})
}