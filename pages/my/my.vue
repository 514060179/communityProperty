<template>
  <view class="vc-index">
    <view class="header-bg" :style="[styleObj]"></view>
    <view class="position-relative">
      <vc-tabbar :title="$t('artery')" @clickTitle="clickTitle">
        <template slot="tabbar-right" v-if="isLogin">
          <view class="tabbar-right" @tap="_viewUserQrCode">
            <!-- <image :src="qrcodeImg" /> -->
          </view>
        </template>
      </vc-tabbar>
      <view class="user-container bg-white flex flex-direction align-center">
        <!-- :style="'background-image:url('+staffInfo.img+');'" -->
        <view class="cu-avatar xl round lage-avatar" :style="{ backgroundImage: 'url(' + headerImg + ')' }"
          @click="chooseImg"></view>
        <view class="margin-top texts">
          <text>{{ staffInfo.name }}</text>
        </view>
      </view>
      <view class="margin-top card_warp">
        <view class="cu-list menu">
          <view class="cu-item arrow" @tap="_changeLang()">
            <view class="content">
              <text class="icon shezhi"></text>
              <!-- 切換語言 -->
              <text class="text-grey">{{ $t("my.card.lang") }}</text>
            </view>
            <view class="action">
              <text class="text-grey text-sm">{{
                lang == "zh-Hans" ? $t("zh_zh") : $t("tw_zh")
              }}</text>
            </view>

            <!-- <view class="content">
							<text class="lg text-gray icon shezhi"></text>
							<text class="text-grey">{{ $t('my.card.lang') }}</text>
						</view> -->
          </view>
          <view class="cu-item arrow" @tap="_changeCommunity()">
            <view class="content">
              <text class="icon qhxq"></text>
              <!-- 切換小區 -->
              <text class="text-grey">{{ $t("my.card.switching_cell") }}</text>
            </view>
            <view class="action">
              <text class="text-grey text-sm">{{ currentCommunityName }}</text>
            </view>
          </view>
          <view class="cu-item arrow" @tap="_userInfo()">
            <view class="content">
              <text class="lg text-gray icon grxx"></text>
              <!-- 個人信息 -->
              <text class="text-grey">{{
                $t("my.card.personal_information")
              }}</text>
            </view>
          </view>
          <view class="cu-item arrow" @tap="_repairFinish()">
            <view class="content">
              <text class="lg text-gray icon wxyb"></text>
              <!-- 維修已辦 -->
              <text class="text-grey">{{ $t("my.card.repair_done") }}</text>
            </view>
          </view>
          <view class="cu-item arrow" @tap="_complaintFinish()">
            <view class="content">
              <text class="lg text-gray icon tsyb"></text>
              <!-- 投訴已辦 -->
              <text class="text-grey">{{ $t("my.card.complaint_done") }}</text>
            </view>
          </view>
          <!-- 我的考勤 -->
          <view class="cu-item arrow" @tap="_myAttendance()">
            <view class="content">
              <text class="lg text-gray icon wdkq"></text>
              <text class="text-grey">{{ $t("my.card.my_attendance") }}</text>
            </view>
          </view>
          <view class="cu-item arrow" @tap="_changePwd()">
            <view class="content">
              <text class="lg text-gray icon xgmm"></text>
              <!-- 修改密碼 -->
              <text class="text-grey">{{ $t("my.card.change_password") }}</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <text class="lg text-gray icon xtbb"></text>
              <!-- 系統版本 -->
              <text class="text-grey settNum">{{
                $t("my.card.system_ersion")
              }}</text>
            </view>
            <view class="action" @click="checkVersion">
              <!-- <text class="text-grey text-sm" @tap="getAppInfo(1)">V0.0.1</text> -->
              <text class="text-grey text-sm">V{{ nowVersion }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="margin-top">
        <view class="cu-list menu">
          <view class="cu-item" @tap="_logout()">
            <view class="content text-center">
              <text class="text-red">退 出</text>
            </view>
          </view>
        </view>
      </view>

      <view class="cu-modal" :class="logoutUser == true ? 'show' : ''">
        <view class="cu-dialog">
          <view class="cu-bar bg-white justify-end">
            <view class="content">{{ $t("my.card.exit_system") }}</view>
            <view class="action" @tap="_cancleLogout()">
              <text class="cuIcon-close text-red"></text>
            </view>
          </view>
          <view class="padding-xl">
            {{ $t("my.card.exit_system_msg") }}
          </view>
          <view class="cu-bar bg-white justify-end">
            <view class="action margin-0 flex-sub solid-left" @tap="_cancleLogout()">
              {{ $t("dialog_cancel") }}
            </view>
            <view class="action margin-0 flex-sub text-blue solid-left" @tap="_doLogoutUser()">
              {{ $t("dialog_ok") }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- <upVersion :upLoadUrl="upLoadUrl" :newVision="newVision" :newDesc='newDesc' :appStoreUrl='appStoreUrl'>
		</upVersion> -->
  </view>
</template>

<script>
import { getCurrentCommunity } from "../../api/community/community.js";
import conf from "../../conf/config.js";
import url from "../../constant/url.js";
import i18n from "../../lang/index.js"; // 导入配置好的 i18n 实例

import vcTabbar from "@/components/vc-tabbar/vc-tabbar.vue";

import { hasSession } from "../../lib/com/newland/property/api/Java110SessionApi.js";

import context from "../../lib/com/newland/property/Java110Context.js";

import java110Config from "../../lib/com/newland/property/Java110Config.js";

import { checkUpdate } from "@/components/yzhua006-update/js/app-update-check.js";

import upVersion from "@/components/as-upVersion/as-upVersion.vue";

import { getAppVersion } from "@/api/getVersion/getVersion.js";

import { getUserInfo } from "@/api/uploadUserPhoto/uploadUserPhoto.js";
export default {
  data() {
    return {
      staffInfo: {
        img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
        name: "一纸荒年",
      },
      lang: uni.getStorageSync("lang") || "zh-Hant",
      currentCommunityName: "",
      logoutUser: false,
      isLogin: false,
      nowVersion: "0.0.0",
      qrcodeImg: require("../../static/img/my/qrcode.png"),
      upLoadUrl: "", // 安卓下载链接
      newVision: "", // 最新版本号
      newDesc: "", //最新更新描述
      appStoreUrl: "", // AppStore链接
      headerImg: "",
      isForceUpdate: false,
    };
  },
  components: {
    vcTabbar,
    upVersion,
  },
  onLoad() {
    // this.checkVersion()
    // this.getAppInfo(0); //获取线上APP版本信息  参数type 0自动检查  1手动检查（手动检查时，之前取消更新的版本也会提示出来）
    this.java110Context.onLoad();
    try {
      //TODO handle the exception
      //加载员工名称
      const _userInfo = this.java110Context.getUserInfo();
      console.log("_userInfo", _userInfo);
      this.staffInfo.name = _userInfo.userName;
      this.staffInfo.img = conf.baseUrl + "logo.png";
    } catch (e) { }
  },
  onShow() {
    const _communityInfo = getCurrentCommunity();
    console.log("_communityInfo", _communityInfo);
    this.currentCommunityName = _communityInfo.name;
    // 獲取用戶頭像
    this.getUserInfo();
    // this.isLogin = hasSession()
    // console.log(this.isLogin);
  },
  computed: {
    //状态栏高度
    statusHeight() {
      //#ifdef H5
      return 20;
      //#endif
      return uni.getSystemInfoSync().statusBarHeight || 10; //如果没有获取到高度，那么指定10px；
    },
    styleObj() {
      return {
        // #ifdef H5
        "--height": 0,
        // #endif
        "--height": (uni.getSystemInfoSync().statusBarHeight || 10) + "px",
      };
    },
  },
  watch: {
    nowVersion: {
      handler: function (val, old) {
        let _that = this;
        uni.getSystemInfo({
          success: function (res) {
            console.log(res);
            // console.log(res.appWgtVersion, 'APP版本号')
            // #ifdef H5
            _that.nowVersion = res.appVersion;
            // #endif

            // #ifdef APP-PLUS
            _that.nowVersion = res.appWgtVersion;
            // #endif
          },
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    /*
      第一种
      checkVersion ios跳转苹果商店下载更新
      安卓在线下载
      getAppInfo  
      第二种
      */
    checkVersion() {
      const system_info = uni.getSystemInfoSync();

      const os =
        system_info.platform === "ios"
          ? 0
          : system_info.platform === "android"
            ? 1
            : -1;
      const osType = os === 0 ? "appStore" : os === 1 ? "googleStore" : "";
      console.log(os);
      getAppVersion(this, {
        lang: this.lang,
        platform: os, //本机设备操作系统  （android 1 || ios 0）
        channel: osType,
      }, true).then((_data) => {
        console.log(_data);
        const { code, desc, updateTime, url, isForceUpdate } = _data.data.data;
        this.newVision = code;
        this.appStoreUrl = url;
        this.newDesc = desc;
        this.upLoadUrl = url;
        this.isForceUpdate = isForceUpdate;
        let objs = {
          newVision: this.newVision,
          appStoreUrl: this.appStoreUrl,
          newDesc: this.newDesc,
          upLoadUrl: this.upLoadUrl,
          isForceUpdate: this.isForceUpdate,
          paths: "my",
        };

        let _that = this
        uni.getSystemInfo({
          success: function (res) {
            console.log(res);

            // #ifdef H5
            if (_that.newVision > res.appVersion) {
              uni.navigateTo({
                url:
                  "/components/as-upVersion/as-upVersion?info=" +
                  JSON.stringify(objs),
              });
            } else {
              uni.showToast({
                icon: 'none',
                title: _that.$t("当前是最新版本，无需更新") + '!',
              })
            }
            // #endif
            
            // #ifdef APP-PLUS
            if (_that.newVision > res.appWgtVersion) {
              uni.navigateTo({
                url:
                  "/components/as-upVersion/as-upVersion?info=" +
                  JSON.stringify(objs),
              });
            } else {
              uni.showToast({
                icon: 'none',
                title: _that.$t("当前是最新版本，无需更新") + '!',
              })
            }
            // #endif
          },
        });
      });
    },
    //获取线上APP版本信息
    getAppInfo(type) {
      const system_info = uni.getSystemInfoSync();
      let params = {
        os: system_info.platform, //本机设备操作系统  （android || ios）
      };
      if (params.os != "ios" && params.os != "android") false; //如果不是安卓或ios 返回false

      //这里自行请求API获取版本信息 建议传入操作系统标识，返回本机对应的操作系统最新版本信息，也就是安卓的返回就是安卓的版本信息  ios返回就是ios的版本信息

      //请求获取最新版本
      setTimeout(() => {
        let update_info = {
          version: "1.0.2", //线上版本
          now_url:
            "https://dldir1.qq.com/weixin/android/weixin802android1860_arm64.apk", //更新链接
          silent: 0, //是否是静默更新
          force: 1, //是否是强制更新
          net_check: 1, //非WIfi是否提示
          note: "产品汪汪要改这个字的颜色", //更新内容
        };
        checkUpdate(update_info, type).then((res) => {
          if (res.msg) {
            plus.nativeUI.toast(res.msg);
          }
        }); ///检查更新
        //checkUpdate 这个方法会做什么？：线上版本号 与 本地版本号做对比 ，如果需要更新  根据静默，强制、wifi等信息执行静默更新或跳转到升级页面
        //跳转升级页面的前提是，需要新建并在pages.json中配置升级页面，配置方法请查看插件详情
      }, 200);
    },
    // 獲取用戶頭像
    getUserInfo() {
      let _that = this;
      getUserInfo(this, null, this.headerImg == "").then((res) => {
        console.log(res);
        const { url } = res.data;
        _that.headerImg = url;
      });
    },
    chooseImg() {
      // uni.chooseImage({
      // 	count: 1, //默认9
      // 	sizeType: ['compressed'], //压缩图
      // 	success: (res) => {
      // 		console.log(res);
      // 		// console.log(JSON.stringify(res.tempFilePaths));
      // 		// this.userpic = res.tempFilePaths
      // 	}
      // });
      this._userInfo();
    },
    //切换语言
    _changeLang: function () {
      const langStr = this.lang == "zh-Hans" ? "zh-Hant" : "zh-Hans";
      const mc = langStr == "zh-Hans" ? this.$t("zh_zh") : this.$t("tw_zh");
      uni.showModal({
        title: this.$t("my.card.lang"), //'切换语言',
        content: this.$t("is_choosezh_tw") + mc + this.$t("wz_ma"), //'是否切换语言为'
        success: (res) => {
          if (res.confirm) {
            // 更新 VueI18n 实例的语言
            this.$i18n.locale = langStr;
            this.lang = langStr;

            // 底部tabBar的国际化配置
            uni.setTabBarItem({
              index: 0,
              text: i18n.t('home_title')
            })
            uni.setTabBarItem({
              index: 1,
              text: i18n.t('work_title')
            })
            uni.setTabBarItem({
              index: 2,
              text: i18n.t('address_Book')
            })
            uni.setTabBarItem({
              index: 3,
              text: i18n.t('my_title')
            })

            //设置在缓存
            uni.setStorageSync("lang", langStr);
            uni.setLocale(langStr);
          }
        },
      });

      /*uni.navigateTo({
          url: '/pages/changeLangs/changeLangs'
        });*/
    },
    //切换小区
    _changeCommunity: function () {
      uni.navigateTo({
        url: "/pages/changeCommunity/changeCommunity",
      });
    },
    //用户信息
    _userInfo: function () {
      uni.navigateTo({
        url: "/pages/userInfo/userInfo",
      });
    },
    _repairFinish: function () {
      uni.navigateTo({
        url: "/pages/repairDispatchFinish/repairDispatchFinish",
      });
    },
    //投诉已办
    _complaintFinish: function () {
      this.context.navigateTo({
        url: "/pages/complaintFinish/complaintFinish",
      });
    },
    _myAttendance: function () {
      this.context.navigateTo({
        url: "/pages/my/staffDetailAttendance",
      });
    },
    //修改密码
    _changePwd: function () {
      uni.navigateTo({
        url: "/pages/changePwd/changePwd",
      });
    },
    //退出系统
    _logout: function () {
      uni.showModal({
        title: this.$t("my.card.exit_system"), //'退出系统',
        content: this.$t("my.card.exit_system_msg"), //'您确认退出系统吗？'
        showCancel: true,
        cancelText: '取消',
        confirmText: '退出',
        success: (res) => {
          if (res.confirm) {
            this._doLogoutUser();
          } else if (res.cancel) {
            console.log('取消退出');
          }
        },
      });
      //this.logoutUser = true;
    },
    _cancleLogout: function () {
      this.logoutUser = false;
    },
    _doLogoutUser: function () {
      const token = wx.getStorageSync("token");
      if (!token || token == "") {
        context.clearStorage([
          "agree",
          "userHeaderImg",
          "protocolChecked",
          "userLoginPhone",
          java110Config.LOGIN_FLAG
        ], true);
        uni.navigateTo({
          url: "/pages/login/login",
        });
        return;
      }
      const _data = {
        token: token,
      };
      this.java110Context.request({
        url: url.userLogout,
        header: this.java110Context.getHeaders(),
        method: "POST",
        data: _data,
        success: function (res) {
          if (res.statusCode != 200) {
            uni.showToast({
              icon: "none",
              title: res.data
            });
            /*uni.navigateTo({
              url: "/pages/login/login",
            });*/

            return;
          }
          context.clearStorage([
            "agree",
            "userHeaderImg",
            "protocolChecked",
            "userLoginPhone",
            java110Config.LOGIN_FLAG
          ], true);
          uni.setStorageSync("agree", 1); // 设置缓存，下次进入应用不再弹出
          uni.reLaunch({
            url: "/pages/login/login",
          });
        },
        fail: function (error) {
          // 调用服务端登录接口失败
          uni.showToast({
            title: "调用接口失败",
          });
          console.log(error);
        },
      }, true);
    },
    _viewUserQrCode: function () {
      this.vc.navigateTo({
        url: "/pages/my/userQrCode",
      });
    },
    // 点击标题切换环境  连续点击六次
    clickTitle() {
      console.log(66666);
      // #ifdef APP-PLUS
      if (!conf.isSwitch) return;

      clearTimeout(this.timer);

      this.clickNum = this.clickNum + 1;

      this.timer = setTimeout(() => {
        this.clickNum = 0;
        clearTimeout(this.timer);
      }, 500);

      if (this.clickNum >= 6) {
        this.clickNum = 0;
        uni.showModal({
          title: "切换环境",
          content: `当前环境是 ${conf.isPro ? "生产" : "测试"
            }, 切换到的环境是 ${conf.isPro ? "测试" : "生产"} , 确定切换吗？`,
          success: (res) => {
            if (res.confirm) {
              context.clearStorage([
                "agree",
                "userHeaderImg",
                "protocolChecked",
                "userLoginPhone",
                java110Config.LOGIN_FLAG
              ], false);
              uni.setStorageSync("evn", !conf.isPro);
              this.disagree();
            }
          },
        });
      }
      // #endif
    },
    disagree() {
      // #ifdef APP-PLUS
      let platform = uni.getSystemInfoSync().platform;
      if (platform == "ios") {
        plus.ios
          .import("UIApplication")
          .sharedApplication()
          .performSelector("exit");
      } else if (platform == "android") {
        plus.runtime.quit();
      }
      // #endif
    },
  },
};
</script>

<style lang="scss" scoped>
.vc-index {
  position: relative;
  padding: 100rpx 34rpx;
  background: #f8f9fa;
  overflow: hidden;

  .header-bg {
    position: absolute;
    // top: -250rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 1102rpx;
    // height: 598rpx;
    border-radius: 0 0 100% 100%;
    overflow: hidden;
  }

  .header-bg::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // height: 348rpx;
  }

  ::v-deep .header-bg {
    height: calc(400rpx + var(--height));
    top: 0;

    &::after {
      height: calc(400rpx + var(--height));
      background: linear-gradient(180deg, #606ef0 0%, #008cd7 100%);
    }
  }

  .tabbar-right {
    width: 48rpx;
    height: 48rpx;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    image {
      width: 48rpx;
      height: 48rpx;
    }
  }

  .position-relative {
    position: relative;
  }

  .user-container {
    padding: 30upx 0 40upx 0;
    background: none;
  }

  .lage-avatar {
    width: 140upx;
    height: 140upx;
    background: url("../../static/img/my/me.png") no-repeat;
    background-size: 100% 100%;
    z-index: 100;
  }

  .texts {
    font-family: Source Han Sans;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 36rpx;
    text-align: center;
    letter-spacing: 0px;
    margin-top: 34rpx;
    font-variation-settings: "opsz" auto;
    color: #ffffff;
  }

  .card_warp {
    margin-top: 50rpx;
  }

  /deep/ .menu {
    border-radius: 40rpx;

    .arrow {
      .content {
        display: flex !important;
        align-items: center;

        .text-grey,
        .settNum {
          padding-left: 30rpx;
          font-family: Source Han Sans;
          font-size: 24rpx;
          font-weight: 500;
          line-height: 26rpx;
          font-variation-settings: "opsz" auto;
          color: #2e3845;
        }
      }
    }
  }

  .icon {
    display: inline-block;
    width: 35rpx;
    height: 35rpx;
  }

  .shezhi {
    background: url("../../static/img/my/shezhi.png") no-repeat;
    background-size: 100% 100%;
  }

  .qhxq {
    background: url("../../static/img/my/qhxq.png") no-repeat;
    background-size: 100% 100%;
  }

  .grxx {
    background: url("../../static/img/my/grxx.png") no-repeat;
    background-size: 100% 100%;
  }

  .wxyb {
    background: url("../../static/img/my/wxyb.png") no-repeat;
    background-size: 100% 100%;
  }

  .tsyb {
    background: url("../../static/img/my/tsyb.png") no-repeat;
    background-size: 100% 100%;
  }

  .wdkq {
    background: url("../../static/img/my/wdkq.png") no-repeat;
    background-size: 100% 100%;
  }

  .xgmm {
    background: url("../../static/img/my/xgmm.png") no-repeat;
    background-size: 100% 100%;
  }

  .xtbb {
    background: url("../../static/img/my/xtbb.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>