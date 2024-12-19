<template>
  <view>
    <view v-if="noData==false">
      <view v-for="(item,index) in myOrders" :key="index" class="bg-white margin-top margin-right-xs radius margin-left-xs padding">
        <view class="flex padding-bottom-xs solid-bottom justify-between">
          <view>{{item.repairId}}</view>
          <view class="text-gray">{{item.tel}}</view>
        </view>
        <view class="flex margin-top justify-between">
          <!-- 报修类型 -->
          <view class="text-gray">{{ $t('repair_type') }}</view>
          <view class="text-gray">{{item.repairTypeName}}</view>
        </view>
        <view class="flex margin-top-xs justify-between">
          <!-- 报修人 -->
          <view class="text-gray">{{ $t('reporter') }}</view>
          <view class="text-gray">{{item.repairName}}</view>
        </view>
        <view class="flex margin-top-xs justify-between">
          <!-- 位置 -->
          <view class="text-gray">{{ $t('location') }}</view>
          <view class="text-gray">{{item.repairObjName}}</view>
        </view>
        <view class="flex margin-top-xs justify-between">
          <!-- 预约时间 -->
          <view class="text-gray">{{ $t('appointment_time') }}</view>
          <view class="text-gray">{{item.appointmentTime }}</view>
        </view>
        <view class="flex margin-top-xs justify-between">
          <!-- 状态 -->
          <view class="text-gray">{{ $t('status') }}</view>
          <view class="text-gray">{{item.stateName}}</view>
        </view>
        <view class="flex margin-top-xs justify-between">
          <!-- 报修内容 -->
          <view class="text-gray">{{ $t('repair_content') }}</view>
          <view class="text-gray">{{item.context}}</view>
        </view>
        <view class="solid-top flex justify-end margin-top padding-top-sm ">
          <!-- 详情 -->
          <button class="cu-btn sm line-gray" @click="repairDetail(item)">{{ $t('details') }}</button>
        </view>
      </view>
      <uni-load-more :status="loadingStatus" :content-text="loadingContentText" />
    </view>
    <view v-else>
      <no-data-page></no-data-page>
    </view>
  </view>
</template>

<script>
import noDataPage from '@/components/no-data-page/no-data-page.vue'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import url from '../../constant/url.js'
import {getCurrentCommunity} from '../../api/community/community.js'
export default {
  data() {
    const translate = (key) => {
      return this.$t(key);
    };
    return {
      orderImg: url.baseUrl + 'img/order.png',
      myOrders: [],
      orders: [],
      storeId: '',
      noData: false,
      page: 1,
      loadingStatus: 'loading',
      loadingContentText: {
        contentdown: translate('pull_up_to_load_more'),
        contentrefresh: translate('loading'),
        contentnomore: translate('no_more')
      },
    }
  },
  components: {
    noDataPage,
    uniLoadMore
  },
  onLoad() {
    this.java110Context.onLoad();
    let _userInfo = this.java110Context.getUserInfo();
    let _storeId = _userInfo.storeId;
    this.storeId = _storeId;
    this._loadMyModify();
  },
  onReachBottom: function () {
    if (this.loadingStatus == 'noMore') {
      return;
    }
    this._loadMyModify();
  },
  methods: {
    _loadMyModify: function () {
      this.loadingStatus = 'more';
      let _that = this;
      let _userInfo = this.java110Context.getUserInfo();
      let storeId = _userInfo.storeId;
      let _objData = {
        page: this.page,
        row: 15,
        userId: _userInfo.userId,
        communityId: getCurrentCommunity().communityId
      };

      this.java110Context.request({
        url: url.listStaffFinishRepairs,
        header: _that.java110Context.getHeaders(),
        method: "GET",
        data: _objData, //动态数据
        success: function (res) {
          let _json = res.data;
          if (_json.code != 0) {
            uni.showToast({
              icon: 'none',
              title: _json.msg
            });
            return;
          }

          let _data = _json.data;
          _data.forEach(function (item) {
            let dateStr = item.appointmentTime;
            let _date = new Date(dateStr.replace(/-/g, "/"));
            item.appointmentTime = (_date.getMonth() + 1) + '-' + _date.getDate();
          });
          _that.myOrders = _that.myOrders.concat(_data);
          _that.page++;

          if (_that.myOrders.length < 1) {
            _that.noData = true;
            return;
          }
          if (_that.myOrders.length == _json.total) {
            _that.loadingStatus = 'noMore';
            return;
          }
        },
        fail: function (e) {
          wx.showToast({
            title: _that.$t('server_error'),// "服务器异常了",
            icon: 'none',
            duration: 2000
          });
        }
      }, this.myOrders.length == 0);
    },
    repairDetail: function (_item) {
      console.log('_item', _item);
      //wx.setStorageSync("_toModifyComplaint_"+_item.complaintId, _item);
      uni.navigateTo({
        url: "/pages/repairDetail/repairDetail?repairId=" + _item.repairId + '&storeId=' + this.storeId

      });
    }
  }
}
</script>

<style>
</style>
