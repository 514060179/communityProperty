/**
 * HC掌上物业配置文件
 * 
 * 本项目只有这里修改相应配置信息，如果不是二次开发 请不要修改其他文件内容
 * 
 * @website http://www.homecommunity.cn/
 * @author 吴学文
 * @QQ 928255095
 */

/**
 * @description 是否是生产，用于打包切换环境切换 true: 生产包  false: 测试或开发包
 * @param {Boolean}
 */
// 是否可切环境
const isSwitch = false

// 是否生产环境
let isRelease = true


// 获取用户手动设置的环境
const evn = uni.getStorageSync('evn') || ''
if (evn) isRelease = evn

console.log(evn, '000000000000')
console.log(isRelease, '9999999999999999')



let _systemConfig = uni.getStorageSync('java110SystemConfig');


let baseUrl = ''


// 腾讯地图Key, h5使用
let QQMapKey = 'YJXBZ-UES3J-BVSFR-XO372-4KVBO-XLB6C';
// 不区分端
let commonBaseUrl = 'https://newland-property.oss-cn-hangzhou.aliyuncs.com/'

/**
 * 判断环境
 */
if (isRelease) {
	// 生产
	// #ifdef H5
	baseUrl = '/'
	// #endif

	// #ifdef APP
	baseUrl = 'http://property.hoiba.tech/'
	// #endif

} else { // 测试、开发
	// #ifdef H5 
	baseUrl = '/'
	// #endif

	// #ifdef APP
	// TODO： 待替换
	baseUrl = 'http://property.hoiba.tech/'
	// baseUrl = 'http://192.168.8.213:8008/'
	// #endif
}

//app支付时这里需要填写支付秘钥
let appPayKey = "";

let logLevel = "DEBUG"; // 日志级别

let systemName = "物业版";

if (_systemConfig) {
	QQMapKey = QQMapKey;
	commonBaseUrl = _systemConfig.imgUrl;
	systemName = _systemConfig.propertyTitle;
}

export default {
	baseUrl: baseUrl,
	logLevel: logLevel,
	appPayKey: appPayKey,
	commonBaseUrl: commonBaseUrl,
	QQMapKey: QQMapKey,
	imgUrl: commonBaseUrl,
	systemName: systemName,
	isPro: isRelease,
	isSwitch: isSwitch
}