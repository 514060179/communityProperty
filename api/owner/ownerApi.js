/**
 * 业主相关 数据封装API
 * 
 */

import {
	request
} from '@/lib/com/newland/property/request.js';
import
url
from '../../constant/url.js';

import mapping from '../../constant/MappingConstant.js';

/**
 * 查询当前业主信息
 * 
 * return {
	 memberId:'',
	 ownerName:'',
	 ownerId:'',
	 ownerTel:''
 }
 */
export function getCurOwner() {
	return new Promise((resolve, reject) => {
		let _ownerInfo = uni.getStorageSync(mapping.OWNER_INFO);
		console.log(_ownerInfo);
		resolve(_ownerInfo);
	});
}