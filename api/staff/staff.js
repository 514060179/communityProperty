import url from '../../constant/url.js';
import java110Config from '@/lib/com/newland/property/Java110Config.js';
import {isNull} from '@/lib/com/newland/property/utils/StringUtil.js';
import {desDecrypt} from '@/lib/com/newland/property/utils/DesUtil.js';

/**
 * 查询楼栋信息
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryStaffInfos(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryStaffInfos,
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
 * 查询员工
 */
export function getStaff(){
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

export function getStaffId(){
	return getStaff().userId;
}

export function getStaffName(){
	return getStaff().userName;
}

export function getStaffTel(){
	return getStaff().tel;
}


/**
 * 查询员工考勤
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function queryAttendanceClassesTask(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryAttendanceClassesTask,
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