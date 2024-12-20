<template>
  <view class="vc-index">
    <view class="header-bg"></view>
    <view>
      <vc-tabbar :title="$t('artery')" />
      <indexHeader :undo="undo" :key="indexHeaderKey"></indexHeader>
      <!-- 工作待办-->
      <view class="margin-top">
        <!-- <indexUndo :undo="undo" :key="indexUndoKey"></indexUndo> -->
      </view>
      <!-- 工作单-->
      <view class="margin-top">
        <indexUndoWork :undo="undo" :key="indexUndoWorkKey"></indexUndoWork>
      </view>
      <!-- oa待办 -->
      <view class="margin-top">
        <indexUndoOa />
      </view>
    </view>
    <!-- <upVersion :upLoadUrl="upLoadUrl" :newVision="newVision" :newDesc='newDesc' :appStoreUrl='appStoreUrl'> -->
    <!-- </upVersion> -->
  </view>
</template>

<script>
import indexHeader from "@/components/vc-index/index-header.vue";
import indexUndo from "@/components/vc-index/index-undo.vue";
import indexUndoWork from "@/components/vc-index/index-undo-work.vue";
import indexUndoOa from "@/components/vc-index/index-undo-oa.vue";

import vcTabbar from "@/components/vc-tabbar/vc-tabbar.vue";
import upVersion from "@/components/as-upVersion/as-upVersion.vue";
import { queryUndoCount } from "@/api/index/index.js";
import { getCurrentCommunity } from "../../api/community/community.js";
import { getAppVersion } from "@/api/getVersion/getVersion.js";

export default {
  data() {
    return {
      upLoadUrl: "", // 安卓下载链接 ,
      newVision: "", // 最新版本号
      newDesc: "", //最新更新描述
      appStoreUrl: "", // AppStore链接
      isForceUpdate: false,
      headerImg: "",
      indexHeaderKey: 0,
      indexUndoKey: 0,
      indexUndoWorkKey: 0,
      undo: {
        allocation: "0",
        collection: "0",
        complaint: "0",
        contractApply: "0",
        contractChange: "0",
        inspectionTaskCount: 0,
        itemReleaseCount: 0,
        maintainanceTaskCount: 0,
        ownerSettledApplyCount: 0,
        purchase: "0",
        repair: "0",
        visitUndoCount: 0,
        workSendCount: 0,
        workUndDoCount: 0,
        workUndoCopyCount: 0,
      },
    };
  },
  components: {
    indexHeader,
    indexUndo,
    indexUndoOa,
    indexUndoWork,
    vcTabbar,
    upVersion,
  },
  onLoad() {
    this.java110Context.onLoad();
    this.checkVersion();
  },
  onShow() {
    this._loadUndoData();
  },

  methods: {
    _loadUndoData: function () {
      const _that = this;
      queryUndoCount(this, {
        communityId: getCurrentCommunity().communityId,
        page: 1,
        row: 10,
      }, false).then((_data) => {
        _that.undo = _data.data;
        _that.indexHeaderKey = _that.indexHeaderKey + 1;
        _that.indexUndoKey = _that.indexUndoKey + 1;
        _that.indexUndoWorkKey = _that.indexUndoWorkKey + 1;
      });
    },
    checkVersion() {
      const system_info = uni.getSystemInfoSync();

      const os =
        system_info.platform === "ios"
          ? 0
          : system_info.platform === "android"
            ? 1
            : -1;
      const osType = os === 0 ? "appStore" : os === 1 ? "googleStore" : "";
      getAppVersion(this, {
        lang: uni.getStorageSync("lang") || "zh-Hant",
        platform: os, //本机设备操作系统  （android 1 || ios 0）
        channel: osType,
      }, false).then((_data) => {
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
          paths: "index",
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
              // uni.hideTabBar(); // 隐藏底部导航菜单
            }
            // #endif

            // #ifdef APP-PLUS
            if (_that.newVision > res.appWgtVersion) {
              uni.navigateTo({
                url:
                  "/components/as-upVersion/as-upVersion?info=" +
                  JSON.stringify(objs),
              });
              // uni.hideTabBar(); // 隐藏底部导航菜单
            }
            // #endif
          },
        });
      });
    },
  },
};
</script>

<style lang="scss">
.vc-index {
  position: relative;
  padding: 100rpx 34rpx;
  background: #f8f9fa;
  overflow: hidden;

  .header-bg {
    position: absolute;
    top: -250rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 1102rpx;
    height: 598rpx;
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
    height: 100%;
    background: linear-gradient(180deg, #2fab81 0%, #39bbd2 99%);
  }
}
</style>