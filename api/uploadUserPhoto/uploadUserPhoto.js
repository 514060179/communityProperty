import url from '../../constant/url.js'
import i18n from '../../lang/index.js'
import {
	getHeaders
} from '@/lib/com/newland/property/api/SystemApi.js'
import java110Config from '@/lib/com/newland/property/Java110Config.js'
/**
 * 查询楼栋信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function uploadUserPhoto(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.post({
			url: url.uploadUserPhoto,
			data: _data,
			success: function(res) {
				reslove(res);
				return
			},
			fail: function(e) {
				uni.showToast({
					title: i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			}
		}, isShowLoad)
		// console.log()
		// uni.request({
		// 	url: url.uploadUserPhoto,
		// 	header: {
		// 		...getHeaders(),
		// 		// 'app-id': JSON.parse(uni.getStorageSync(java110Config.USER_INFO)).userId
		// 	},
		// 	method: 'POST',
		// 	data: _data,
		// 	success: (res => {
		// 		console.log(res);
		// 	})
		// })
	});
}

export function getUserInfo(_that, _data, isShowLoad) {
	return new Promise(function(reslove, reject) {
		_that.context.get({
			url: url.getUserInfo,
			data: _data,
			success: function(res) {
				reslove(res);
			},
			fail: function(e) {
				uni.showToast({
					title: i18n.t('server_error'),
					icon: 'none',
					duration: 2000
				})
			},
		}, isShowLoad)
	});
}