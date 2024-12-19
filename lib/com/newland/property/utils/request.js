// request.js

import conf from "@/conf/config.js";

// 请求中的数量，防止重复关闭 loading
let requestCount = 0;

// 显示 loading
const showLoading = () => {
  if (requestCount === 0) {
    uni.showLoading({
      title: "加载中...", // loading 提示
      mask: true, // 防止用户点击其他操作
    });
  }
  requestCount++;
};

// 隐藏 loading
const hideLoading = () => {
  requestCount--;
  if (requestCount === 0) {
    uni.hideLoading();
  }
};

// 请求拦截器
const requestInterceptor = (options) => {
  if (options.isShowLoad) {
    // 显示全局 loading
    showLoading();
  }

  // 如果有 token，可在这里添加到请求头
  const token = uni.getStorageSync("token");
  if (token) {
    options.header = {
      ...options.header,
      Authorization: `Bearer ${token}`,
    };
  }

  // 统一增加公共参数或 header
  options.header = {
    ...options.header,
    "Content-Type": "application/json",
  };

  return options;
};

// 响应拦截器
const responseInterceptor = (response) => {
  // 隐藏 loading
  hideLoading();
  // 处理响应
  if (response.statusCode === 200) {
    if (response.data.code === 2000 || response.data.code === 1996) {
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
    return response.data;
  } else {
    // 针对不同错误状态码做处理
    switch (response.statusCode) { 
      case 401:
        // 401 未授权，跳转登录
        uni.showToast({
          title: "请先登录",
          icon: "none",
        });
        uni.navigateTo({
          url: "/pages/login/login",
        });
        break;
      case 500:
        uni.showToast({
          title: "服务器错误",
          icon: "none",
        });
        break;
      default:
        uni.showToast({
          title: response.data.message || "请求错误",
          icon: "none",
        });
        break;
    }
    return Promise.reject(response.data);
  }
};

// 请求失败处理
const requestFail = (error) => {
  // 隐藏 loading
  hideLoading();

  // 网络或服务器错误
  uni.showToast({
    title: "网络请求失败，请稍后重试",
    icon: "none",
  });

  return Promise.reject(error);
};

// 通用请求函数
const request = (options) => {
  // 执行请求拦截器
  options = requestInterceptor(options);

  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      url: conf.baseUrl + options.url,
      success: (response) => {
        // 执行响应拦截器
        resolve(responseInterceptor(response));
      },
      fail: (error) => {
        // 处理请求失败
        reject(requestFail(error));
      },
    });
  });
};

// GET 请求
const get = (url, data, header = {}, isShowLoad) => {
  return request({
    url,
    method: "GET",
    data,
    header,
    isShowLoad
  });
};

// POST 请求
const post = (url, data, header = {}, isShowLoad) => {
  return request({
    url,
    method: "POST",
    data,
    header,
    isShowLoad
  });
};

// PUT 请求
const put = (url, data, header = {}, isShowLoad) => {
  return request({
    url,
    method: "PUT",
    data,
    header,
    isShowLoad
  });
};

// DELETE 请求
const del = (url, data, header = {}, isShowLoad) => {
  return request({
    url,
    method: "DELETE",
    data,
    header,
    isShowLoad
  });
};

// 导出 API 方法
export default {
  get,
  post,
  put,
  del,
};
