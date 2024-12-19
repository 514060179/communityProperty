/*
 * @Author: jiatonglin
 * @Date: 2024-05-14 15:50:05
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-16 11:51:50
 * @FilePath: appointment.js
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-14 15:50:05
 */
import url from '../../constant/url.js'

/**
 * 核销订单
 * @param {Object} _that 上下文对象
 * @param {Object} _data 请求报文
 */
export function saveCommunitySpaceConfirmOrder(_that, _data, isShowLoad) {
    return new Promise(function (reslove, reject) {
        // debugger
        _that.context.post({
            url: url.saveCommunitySpaceConfirmOrder,
            data: _data,
            success: function (res) {
                if (res.data.code == 0) {
                    // debugger
                    reslove(res);
                } else {
                    // debugger
                    wx.showToast({
                        title: '核销状态:' + res.data.msg,
                        icon: 'none',
                        duration: 3000
                    })
                }
            },
            fail: function (e) {
                wx.showToast({
                    title:i18n.t('server_error'),
                    icon: 'none',
                    duration: 3000
                })
            }
        }, isShowLoad)
    });
}