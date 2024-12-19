<!--
 * @Author: jiatonglin
 * @Date: 2024-05-14 15:50:05
 * @LastEditors: jiatonglin
 * @LastEditTime: 2024-05-23 18:34:27
 * @FilePath: changeCommunity.vue
 * Copyright 2024 Marvin, All Rights Reserved. 
 * 2024-05-14 15:50:05
-->
<template>
  <view>
    <view class="cu-bar bg-white search ">
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input type="text" :placeholder="$t('enter_name_cell_search')" v-model="communityName" confirm-type="search"></input>
      </view>
      <view class="action">
        <button class="cu-btn bg-gradual-blue shadow-blur round" @tap="_searchCommunity()">搜索</button>
      </view>
    </view>

    <view>
      <view class="padding">{{ $t('cell_info') }}</view>
      <view class="cu-list menu ">
        <view class="cu-item" v-for="(item,sub) in communitys" :key="sub" @tap="_doChangeCommunity(item)">
          <view class="content padding-tb-sm">
            <view>
              <text class="lg  cuIcon-homefill text-blue margin-right-xs"></text> {{item.name}}
            </view>
            <view class="text-gray text-sm">
              <text class="lg text-gray cuIcon-location margin-right-xs"></text> {{item.address}}
            </view>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
import {
  getCommunity
} from '../../api/community/community.js'
import mapping from '../../constant/mapping.js'
export default {
  data() {
    return {
      communityName: '',
      communitys: []
    }
  },
  onLoad() {
    this.java110Context.onLoad();
    this._loadCommunitys();
  },
  methods: {
    _loadCommunitys: function () {
      let _that = this;
      let _condition = {
        name: this.communityName
      }
      getCommunity(true, _condition, _that.communitys.count == 0)
        .then(_communitys => {
          _that.communitys = _communitys;
          console.log('_communitys', _communitys);

        });
    },
    _searchCommunity: function () {
      this._loadCommunitys();
    },
    _doChangeCommunity: function (_community) {
      uni.setStorageSync(mapping.CURRENT_COMMUNITY_INFO, JSON.stringify(_community));
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style>
</style>
