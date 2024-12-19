/**
 * 上下文对象,再其他文件调用常量 方法 时间工具类时 只引入上下文文件
 * 
 * add by wuxw 2019-12-27
 * 
 * the source opened https://gitee.com/java110/WechatOwnerService
 */
const constant = require("@/constant/index.js");

// const util = require("../utils/index.js");

const Base64Factory = require("@/utils/Base64Factory.js");


import {
	getCurOwner
} from '@/api/owner/ownerApi.js';


import java110Config, {
	AppId
} from './Java110Config.js'

import {
	wxuuid
} from './utils/SeqUtil.js'

import {
	getDateYYYYMMDDHHMISS
} from './utils/DateUtil.js'

import {
	getHeaders
} from './api/SystemApi.js'

import {
	isNotNull
} from './utils/StringUtil.js'

import {
	desDecrypt,
	desEncrypt
} from './utils/DesUtil.js'


import request from './request.js'

import {
	getUserInfo,
	getLoginFlag
} from './api/Java110SessionApi.js'

import {
	onLoad
} from './init/Java110Init.js'

/**
 * 获取请后台服务时的头信息
 */


/**
 * 获取位置
 * add by wuxw 2019-12-28
 */
const getLocation = function() {
	return uni.getStorageSync('location');
};

const getCurrentLocation = function() {
	return uni.getStorageSync('currentLocation');
};

const setJson = function(key, value) {
	const jsonString = JSON.stringify(value);
	try {
		uni.setStorageSync(key, jsonString);
	} catch (e) {
		// error
	}
};
const setData = function(key, value) {
	try {
		uni.setStorageSync(key, value);
	} catch (e) {
		// error
	}
};
const getData = function(key) {
	try {
		const value = uni.getStorageSync(key);
		if (value) {
			return value;
		}
	} catch (e) {
		// error
	}

};
const getJson = function(key) {
	try {
		const value = uni.getStorageSync(key);
		if (value) {
			return JSON.parse(value);
		}
	} catch (e) {
		// error
	}

};

/**
 * 删除所有的缓存
 * @param String[] _unClearList 
 * @description _unClearList 需要保留的列表
 */
const clearStorage = function(_unClearList, _isClearPassword) {

	let data = {}
	if (_unClearList.length) {
		// 取出要过滤的值
		for (let i = 0; i < _unClearList.length; i++) {
			data[_unClearList[i]] = uni.getStorageSync(_unClearList[i]) || ''
		}
	}
	const _userLoginInfo = uni.getStorageSync(java110Config.USER_LOGIN_INFO);

	// 清除所有缓存
	uni.clearStorageSync()

	// 设置要过滤的值
	if (_unClearList.length) {
		for (var key in data) {
			uni.setStorageSync(key, data[key])
		}
	}
	if (_isClearPassword) {
		_userLoginInfo["password"] = '';
	}
	uni.setStorageSync(java110Config.USER_LOGIN_INFO, _userLoginInfo);
}
const clear = function() {
	uni.clearStorage();
};
const get = function(key) { //获取队列里面全部的数据
	const data = this.getJson(key);
	if (data instanceof Array) {
		return data;
	}
	return [];
};

const setParam = function(key, value) {
	setJson(key, value);
};

const getParam = function(key) {
	try {
		const value = uni.getStorageSync(key);
		if (value) {
			uni.removeStorageSync(key)
			return JSON.parse(value);
		}
	} catch (e) {
		// error
	}
};

const hasPrivilege = function(_privalege) {
	let _staffPrivilege = JSON.parse(uni.getStorageSync('hc_staff_privilege'));
	if (_staffPrivilege == null) {
		_staffPrivilege = [];
	}

	return _staffPrivilege.includes(_privalege);
};

const getOwner = function(callBack = _ownerInfo => {}) {
	// 从硬盘中获取 业主信息
	getCurOwner()
		.then((_owner) => {
			callBack(_owner);
		})
};


module.exports = {
	getHeaders: getHeaders,
	getLocation: getLocation,
	getUserInfo: getUserInfo,
	getLoginFlag: getLoginFlag,
	getCurrentLocation: getCurrentLocation,
	request: request.request,
	setJson: setJson,
	setData: setData,
	getData: getData,
	getJson: getJson,
	clear: clear,
	get: get,
	setParam: setParam,
	getParam: getParam,
	hasPrivilege: hasPrivilege,
	onLoad: onLoad,
	clearStorage: clearStorage,
	constant: constant,
	Base64Factory: Base64Factory,
	getOwner: getOwner
};