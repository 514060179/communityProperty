/**
 * 回话管理 接口类
 */

import conf from '@/conf/config.js'
import api from "../utils/request.js";

import {
	getHeaders
} from './SystemApi.js'

import {
	desDecrypt,
	desEncrypt
} from '../utils/DesUtil.js'

import java110Config from '../Java110Config.js'

import date from '../utils/date.js'

import {
	isNull
} from '../utils/StringUtil.js'

const loginUrl = conf.baseUrl + 'app/loginProperty'


/**
 * 登录处理
 */
export function login(userName, passwd, areaItem) {
	
	const userInfo = {
		username: userName,
		password: passwd,
		areaCode: areaItem.title
	}
  return api
    .post("app/loginProperty", userInfo, getHeaders(), true) // 使用封装的 post 方法
    .then((data) => {
      // 检查返回的数据，是否登录成功
      if (data.code != 0) {
        uni.showToast({
          icon: "none",
          title: data.msg,
        });
        reject(data.msg);
        return;
      }

      const _tmpUserInfo = data.userInfo;
      _tmpUserInfo["password"] = passwd;
      _tmpUserInfo["username"] = userName;
      const _userInfo = desEncrypt(JSON.stringify(_tmpUserInfo));
      uni.setStorageSync(java110Config.USER_INFO, _userInfo);

	  _tmpUserInfo["areaitem"] = areaItem;
	  uni.setStorageSync(java110Config.USER_LOGIN_INFO, _tmpUserInfo);

      uni.setStorageSync(java110Config.TOKEN, data.token);
      const afterOneHourDate = date.addHour(new Date(), 1);
      //let afterOneHourDate = date.addMinutes(new Date(), 1);
      wx.setStorageSync(java110Config.LOGIN_FLAG, {
        sessionKey: _tmpUserInfo.userName,
        expireTime: afterOneHourDate.getTime(),
        createTime: new Date().getTime(),
      });
      
      return data;
    })
    .catch((error) => {
      // 统一处理登录失败的情况
      uni.showToast({
        icon: "none",
        title: "登录失败，请稍后重试",
      });
      throw error; // 将错误继续抛出以便在调用处捕获
    });

	/*return new Promise((resolve, reject) => {
		uni.request({
			url: loginUrl,
			header: getHeaders(),
			method: 'POST',
			data: userInfo,
			success: function(res) {
				const data = res.data;
				if (data.code != 0) {
					uni.showToast({
						icon: 'none',
						title: data.msg
					})
					reject(data.msg);
					return;
				}

				const _tmpUserInfo = data.userInfo;
				_tmpUserInfo['password'] = passwd;
				_tmpUserInfo['username'] = userName;
				const _userInfo = desEncrypt(JSON.stringify(_tmpUserInfo));
				uni.setStorageSync(java110Config.USER_INFO, _userInfo);
				uni.setStorageSync(java110Config.TOKEN, data.token);
				const afterOneHourDate = date.addHour(new Date(), 1);
				//let afterOneHourDate = date.addMinutes(new Date(), 1);
				wx.setStorageSync(java110Config.LOGIN_FLAG, {
					sessionKey: _tmpUserInfo.userName,
					expireTime: afterOneHourDate.getTime(),
					createTime: new Date().getTime()
				});
				resolve();
			},
			fail: function(error) {
				// 调用服务端登录接口失败
				reject(error);
			}
		});
	});*/
}

export function reLogin() {
	const userInfo = uni.getStorageSync(java110Config.USER_INFO);

	if (isNull(userInfo)) {
		return;
	}
	const _userInfo = JSON.parse(desDecrypt(userInfo));
	const userLoginInfo = uni.getStorageSync(java110Config.USER_LOGIN_INFO);
	//重新登录
	login(_userInfo.username, _userInfo.password, userLoginInfo.areaitem)
		.then((res) => {
			uni.reLaunch({
				url: '/pages/index/index'
			})
		}, err => {
			return;
		})
}

export function hasSession() {
	return new Promise((resolve, reject) => {
		const loginFlag = uni.getStorageSync(java110Config.LOGIN_FLAG);
		const nowDate = new Date();
		if (loginFlag && loginFlag.expireTime > nowDate.getTime()) {
			resolve();
			return;
		}
		reject('会话已失效');
	})

}

export function getLoginFlag() {
	return uni.getStorageSync(java110Config.LOGIN_FLAG);
}

/**
 * 查询用户信息
 */
export function getUserInfo() {
	const userInfo = uni.getStorageSync(java110Config.USER_INFO);
	if (isNull(userInfo)) {
		uni.redirectTo({
			url: '/pages/login/login'
		});
		return;
	}
	const _userInfo = JSON.parse(desDecrypt(userInfo));
	if (isNull(_userInfo)) {
		uni.redirectTo({
			url: '/pages/login/login'
		});
		return;
	}
	return _userInfo;
}