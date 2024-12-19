import url from '../../constant/url.js'
import i18n from '../../lang/index.js'
/**
 * 查询楼栋信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function getAppVersion(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.getAppVersion,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				wx.showToast({
					title: i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
				reject(e)
			}
		}, isShowLoad)
	});
}