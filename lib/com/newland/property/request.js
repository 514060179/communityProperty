import {
	hasSession
} from './api/Java110SessionApi.js'

import java110Config from './Java110Config.js'

import {
	wxuuid
} from './utils/SeqUtil.js'

import {
	getDateYYYYMMDDHHMISS
} from './utils/DateUtil.js'

import i18n from '@/lang/index.js'
export default {
	/**
	 * 请求
	 * @param {Object} _reqObj 请求内容
	 */
	request: function(_reqObj, isShowLoad) {
		if (isShowLoad) {
			uni.showLoading({
				title: "加载中...", // loading 提示
				mask: true, // 防止用户点击其他操作
			});
		}

		//检查是否登录成功
		hasSession()
			.then((_data) => {
				//重写token
				// #ifndef H5
				// _reqObj.header.cookie = uni.getStorageSync('token');;
				// #endif
				//console.log(_reqObj);

				const _success = _reqObj.success;
				const _fail = _reqObj.fail;
				//todo 拦截成功
				_reqObj.success = function(_res) {
					// 隐藏加载提示
                    uni.hideLoading();

					//console.log(_res);
					if (_res.data.code === 2000 || _res.data.code === 1996) {
						uni.showToast({
							title: i18n.t(_res.data.msg), //'您的账号已在别的设备登录，请重新登录',
							icon: 'none',
							duration: 2000
						})
						
						const _userLoginInfo = uni.getStorageSync(java110Config.USER_LOGIN_INFO);
						const _loginFlag = uni.getStorageSync(java110Config.LOGIN_FLAG);
						uni.clearStorageSync();
						uni.setStorageSync(java110Config.USER_LOGIN_INFO, _userLoginInfo);
						uni.setStorageSync(java110Config.LOGIN_FLAG, _loginFlag);
						uni.setStorageSync('agree', 1) // 设置缓存，下次进入应用不再弹出

						// 延迟2秒（2000毫秒）再跳转
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/login/login'
							});
						}, 2000);
						return;
					}

					if (_res.statusCode == 401) {
						uni.reLaunch({
							url: '/pages/login/login'
						});
						return;
					}
					if (!_success) {
						return;
					}
					_success(_res);
				}
				//todo 拦截失败
				_reqObj.fail = function(_res) {
					// 隐藏加载提示
                    uni.hideLoading();
					
					if (_res.statusCode == 401) {
						uni.reLaunch({
							url: '/pages/login/login'
						});
						return;
					}
					if (!_fail) {
						return;
					}
					_fail(_res);
				}

				uni.request(_reqObj);
			}, err => {
				// 隐藏加载提示
                uni.hideLoading();

				/*uni.showToast({
					title: i18n.t(err),
					icon: 'none',
					duration: 2000
				})*/

				//跳转至登录页面
				uni.reLaunch({
					url: '/pages/login/login'
				});
			})

	}
}

/**
 * 获取 header 
 */
export function getHeaders() {
	return {
		'app-id': java110Config.AppId,
		'transaction-id': wxuuid(),
		'req-time': getDateYYYYMMDDHHMISS(),
		'sign': '1234567',
		'user-id': '-1',
		'X-Requested-With': 'XMLHttpRequest',
		// #ifndef H5
		// cookie: uni.getStorageSync('token')
		// #endif
	};
}

export function requestNoAuth(_reqObj) {
	//这里判断只有在 post 方式时 放加载框
	if (_reqObj.hasOwnProperty('method') && 'POST' == _reqObj.method) {
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		_reqObj.complete = function() {
			uni.hideLoading();
		}
	}
	const _headers = getHeaders();
	if (_reqObj.hasOwnProperty('header')) {
		const _header = _reqObj.header;
		for (const key in _headers) {
			_header.key = _headers[key];
		}
	} else {
		_reqObj.header = _headers;
	}
	// #ifndef H5
	_reqObj.header.cookie = wx.getStorageSync('token');
	// #endif
	uni.request(_reqObj);
}