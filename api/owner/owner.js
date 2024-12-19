import url from '../../constant/url.js';
export function queryOwners(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOwners,
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
export function queryOwnerAccount(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOwnerAccount,
			data:_data,
			success: function(res) {
				if(res.data.code == 0){
					reslove(res.data);
				}else{
					wx.showToast({
						title:i18n.t('server_error'),
						icon: 'none',
						duration: 2000
					})
				}
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



export function queryOwnerAndMembers(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.get({
			url: url.queryOwnerAndMembers,
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

export function saveRoomOwner(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.saveRoomOwner,
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

export function deleteOwner(_that,_data, isShowLoad) {
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.deleteOwner,
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
/**
 * 修改业主
 * @param {Object} _that 当前对象
 * @param {Object} _data数据
 */
export function updateRoomOwner(_that,_data, isShowLoad){
	return new Promise(function(reslove,reject){
		_that.context.post({
			url: url.editOwner,
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