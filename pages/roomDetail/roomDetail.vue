<template>
  <view>
    <!-- 查询条件 -->
    <view class="block__title">{{$t('query_conditions')}}</view>
    <view class="cu-form-group arrow" @tap="chooseFloor">
      <!-- 楼栋 -->
      <view class="title">{{$t('building')}}</view>
      <input required readonly label="楼栋" v-model="floorNum" :placeholder="getBuilding" name="floorNum" icon="arrow"></input>
      <text class='cuIcon-right'></text>
    </view>
    <view class="cu-form-group arrow" @tap="chooseUnit">
      <!-- 单元 -->
      <view class="title">{{$t('unit')}}</view>
      <input v-model="unitNum" :placeholder="getUnit"></input>
      <text class='cuIcon-right'></text>
    </view>
    <view class="cu-form-group arrow" @tap="chooseRoom">
      <!-- 房屋 -->
      <view class="title">{{$t('house')}}</view>
      <input v-model="roomNum" :placeholder="getHouse"></input>
      <text class='cuIcon-right'></text>
    </view>

    <view v-if="roomId != ''">
      <!-- 房屋信息 -->
      <view class="block__title">{{$t('house_information')}}</view>
      <view class="cu-form-group">
        <!-- 房屋编号 -->
        <view class="title">{{$t('house_number')}}</view>
        <!-- 栋 单元 室-->
        {{roomInfo.floorNum}}{{$t('building_block')}}{{roomInfo.unitNum}}{{$t('unit')}}{{roomInfo.roomNum}}{{$t('room')}}
      </view>
      <view class="cu-form-group">
        <!-- 楼层 -->
        <view class="title">{{$t('floor')}}</view>
        {{roomInfo.layer+$t('level')}}
      </view>
      <view class="cu-form-group">
        <!-- 房间数 -->
        <view class="title">{{$t('number_of_rooms')}}</view>
        {{roomInfo.section}}{{$t('unit_count')}}
      </view>
      <view class="cu-form-group">
        <!-- 户型 -->
        <view class="title">{{$t('house_type')}}</view>
        {{roomInfo.apartmentName}}
      </view>
      <view class="cu-form-group">
        <!-- 建筑面积 -->
        <view class="title">{{$t('building_area')}}</view>
        <!-- 尺 -->
        {{roomInfo.builtUpArea+'尺'}}
      </view>
      <!-- <view class="cu-form-group">
				<view class="title">单价</view>
				{{roomInfo.unitPrice+'MOP/尺'}}
			</view> -->
      <!-- 业主信息 -->
      <view class="block__title">{{$t('owner_information')}}</view>
      <view class="cu-form-group">
        <!-- 名称 -->
        <view class="title">{{$t('name')}}</view>
        {{roomInfo.ownerName}}
      </view>
      <view class="cu-form-group">
        <!-- 身份证 -->
        <view class="title">{{$t('id_card')}}</view>
        {{roomInfo.idCard}}
      </view>
      <view class="cu-form-group">
        <!-- 联系方式 -->
        <view class="title">{{$t('contact_information')}}</view>
        {{roomInfo.link}}
      </view>

      <!-- 费用信息 -->
      <view class="block__title">{{$t('cost_information')}}</view>
      <view class="cu-list menu-avatar ">
        <view class="cu-item arrow" v-for="(item,index) in fees" :key="index" @tap="_toFeeDetail(item)">
          <view class="content content-left">
            <view class="text-grey">
              {{item.feeName}}
            </view>
            <view class="text-gray text-sm flex">
              <view class="text-cut">
                <!-- 费用状态 -->
                {{$t('cost_status')}}：{{item.stateName}}
              </view>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">{{item.newEndTime}}
              <text class="lg text-gray cuIcon-right margin-left-xs"></text>
            </view>

          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {
  loadRooms,
  loadRoomAndOwner
} from '../../api/room/room.js';
import {
  loadFees
} from '../../api/fee/fee.js';
import {
  getCurrentCommunity
} from '../../api/community/community.js'
export default {
  data() {
    return {
      floorNum: '',
      floorId: '',
      unitNum: '',
      unitId: '',
      roomNum: '',
      roomId: '',
      roomInfo: {},
      fees: []
    }
  },
  computed: {
    getBuilding() {
      return this.$t('please_select_building')
    },
    getUnit() {
      return this.$t('please_select_unit')
    },
    getHouse() {
      return this.$t('please_select_house')
    },
    getBuildingFirst() {
      return this.$t('please_select_building_first')
    },
    getUnitFirst() {
      return this.$t('please_select_unit_first')
    },
  },
  onLoad() {
    this.java110Context.onLoad();
  },
  onShow() {
    let _floor = uni.getStorageSync("_selectFloor");
    if (this.util.isNotNull(_floor)) {
      this.floorNum = _floor.floorNum + "栋";
      this.floorId = _floor.floorId;
    }
    let _unit = uni.getStorageSync("_selectUnit");
    if (this.util.isNotNull(_unit)) {
      this.unitNum = _unit.unitNum + "单元";
      this.unitId = _unit.unitId;
    }
    let _room = uni.getStorageSync("_selectRoom");
    if (this.util.isNotNull(_room)) {
      this.roomNum = _room.roomNum + "室";
      this.roomId = _room.roomId;
      //查询房屋信息
      this._loadRoomInfo();
      //查询费用信息
      this._loadFees();
    }
  },
  onUnload() {
    uni.removeStorageSync("_selectFloor");
    uni.removeStorageSync("_selectUnit");
    uni.removeStorageSync("_selectRoom");
  },
  methods: {
    chooseFloor: function (e) {
      uni.removeStorageSync("_selectFloor");
      this.floorNum = '';
      this.floorId = '';
      uni.removeStorageSync("_selectUnit");
      this.unitNum = '';
      this.unitId = '';
      uni.removeStorageSync("_selectRoom");
      this.roomNum = '';
      this.roomId = '';
      this.context.navigateTo({
        url: '/pages/selectFloor/selectFloor'
      });
    },
    chooseUnit: function (e) {
      if (this.floorId == null || this.floorId == '') {
        uni.showToast({
          title: this.$t('please_select_building_first')
        });
        return;
      }
      uni.removeStorageSync("_selectUnit");
      this.unitNum = '';
      this.unitId = '';
      uni.removeStorageSync("_selectRoom");
      this.roomNum = '';
      this.roomId = '';
      this.context.navigateTo({
        url: '/pages/selectUnit/selectUnit?floorId=' + this.floorId
      });
    },

    chooseRoom: function (e) {
      if (this.unitId == null || this.unitId == '') {
        uni.showToast({
          title: this.$t('please_select_unit_first')
        });
        return;
      }
      uni.removeStorageSync("_selectRoom");
      this.roomNum = '';
      this.roomId = '';
      this.context.navigateTo({
        url: '/pages/selectRoom/selectRoom?floorId=' + this.floorId + "&unitId=" + this.unitId
      });
    },
    /**
     * 查询房屋信息
     */
    _loadRoomInfo: function () {
      let _that = this;
      let _data = {
        page: 1,
        row: 1,
        communityId: getCurrentCommunity().communityId,
        roomId: this.roomId
      }
      loadRoomAndOwner(this, _data, JSON.stringify(this.roomInfo) == '{}')
        .then(function (res) {
          if (res.statusCode == 200) {
            let _rooms = res.data.rooms;
            _that.roomInfo = _rooms[0];
          }
        })

    },
    _loadFees: function () {
      let _that = this;
      let _data = {
        page: 1,
        row: 100,
        communityId: getCurrentCommunity().communityId,
        payerObjId: this.roomId
      }
      loadFees(this, _data, this.fees.length == 0)
        .then(function (res) {
          if (res.statusCode != 200) {
            return;
          }
          let _fees = res.data.fees;
          _that.fees = _fees;

          _that.fees.forEach(function (item) {
            let dateStr = item.endTime;
            let _date = new Date(dateStr.replace(/-/g, "/"));
            item.newEndTime = (_date.getMonth() + 1) + '/' + _date.getDate();
          });

        })
    },
    _toFeeDetail: function (_fee) {
      this.context.navigateTo({
        url: '/pages/feeDetail/feeDetail?feeId=' + _fee.feeId
      });
    }
  }
}
</script>

<style>
.block__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 40rpx 30rpx 20rpx;
}

.button_up_blank {
  height: 40rpx;
}

.cu-list.menu-avatar > .cu-item .content-left {
  left: 30upx;
}

.cu-list + .cu-list {
  margin-top: 20upx;
}
</style>