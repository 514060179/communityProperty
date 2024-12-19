<template>
  <view>
    <view class="content">
      <view class="langTile">{{ $t('my.lang') }}</view>
      <view class="lang-c">
        <view class="zyjz">
          <view class="yy" @click="changLang('zh-Hans', $t('zh_zh'))">
            <image class="images1" src="../../static/lang/china.png"></image>
            <view class="wisFont">{{$t('zh_zh')}}</view>
            <view class="xuanze">
              <image class="jbiao" src="../../static/lang/right.png"></image>
            </view>
          </view>
          <view class="yy" @click="changLang('zh-Hant', $t('tw_zh'))">
            <image class="images1" src="../../static/lang/china.png"></image>
            <view class="wisFont">{{$t('tw_zh')}}</view>
            <view class="xuanze">
              <image class="jbiao" src="../../static/lang/right.png"></image>
            </view>
          </view>
          <!-- <view class="yy" @click="changLang('en', 'English')">
            <image class="images1" src="../../static/lang/english.png"></image>
            <view class="wisFont2">English</view>
            <view class="xuanze">
              <image class="jbiao" src="../../static/lang/right.png"></image>
            </view>
          </view> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import i18n from '../../lang/index.js'; // 导入配置好的 i18n 实例
export default {

  data() {
    return {

    }
  },
  created() { },
  onShow() { },
  onLoad() {

  },
  methods: {
    changLang(lang, mc) {
      const _this = this
      uni.showModal({
        title: _this.$t('my.card.lang'), //'切换语言',
        content: _this.$t('is_choosezh_tw') + mc + _this.$t('wz_ma'), //'是否切换语言为'
        success: function (res) {
          if (res.confirm) {
            // 更新 VueI18n 实例的语言
            _this.$i18n.locale = lang;

            //设置在缓存
            uni.setStorageSync('lang', lang);
            uni.setLocale(lang)

            // 返回上一页
            uni.navigateBack()
          }
        }
      })

    },
  }
}
</script>

<style>
.content {
  margin-top: 100rpx;
  margin: 0 auto;
}

.langTile {
  margin-left: 20rpx;
  font-size: 50rpx;
}

.lang-c {
  margin: 0 auto;
  margin-top: 50rpx;
  width: 90%;
  border-bottom: 1rpx #d6d6d6 solid;
}

.images1 {
  width: 80rpx;
  height: 60rpx;
  float: left;
  margin-top: 15rpx;
}

.viewImg {
  width: 120rpx;
}

.yy {
  border-top: 1rpx #d6d6d6 solid;
  font-size: 35rpx;
  font-weight: 500;
  height: 83rpx;
  line-height: 80rpx;
  position: relative;
}

.xuanze {
  float: right;
  font-size: 50rpx;
  font-weight: 500;
  line-height: 80rpx;
  margin-right: 10rpx;
}

.wisFont {
  width: 90rpx;
  float: left;
  text-align: right;
}

.wisFont2 {
  width: 140rpx;
  float: left;
  text-align: right;
}

.jbiao {
  width: 30rpx;
  height: 30rpx;
  margin-top: 30rpx;
  margin-right: 10rpx;
  float: right;
}
</style>