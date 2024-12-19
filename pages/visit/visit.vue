<template>
  <view>
    <scroll-view scroll-x class="bg-white nav">
      <view class="flex text-center">
        <!-- 	待办 -->
        <view class="cu-item flex-sub" :class="active==1?'text-blue cur':''" @tap="tabSelect(1)">
          {{$t('todo')}}
        </view>
        <!-- 已办 -->
        <view class="cu-item flex-sub" :class="active==2?'text-blue cur':''" @tap="tabSelect(2)">
          {{$t('done')}}
        </view>
      </view>
    </scroll-view>
    <view v-if="active == 1">
      <view class="cu-list menu-avatar margin-top">
        <template v-if="oaWorkflowFlows.length>0">
          <view class="cu-item arrow" v-for="(item,index) in oaWorkflowFlows" :key="index" @click="_todoUndo(item)">
            <view class="content" style="left: 10upx;">
              <view class="text-grey">
                <!-- 访问 -->
                <text class="ellip">{{item.vName}} {{$t('visit')}}{{item.ownerName}}</text>
              </view>
              <!-- 访问时间 -->
              <view class="text-gray text-sm flex">
                <view class="text-cut">
                  {{$t('visit_time')}}：{{item.visitTime}}
                </view>
              </view>
            </view>
            <view class="action">
              <view class="text-grey text-xs">{{item.stateName}}
                <text class="lg text-gray cuIcon-right margin-left-xs"></text>
              </view>
            </view>
          </view>
        </template>
        <view v-else>
          <no-data-page></no-data-page>
        </view>
      </view>
    </view>
    <view v-if="active == 2">
      <view class="cu-list menu-avatar margin-top">
        <template v-if="oaWorkflowFlows.length>0">
          <view class="cu-item arrow" v-for="(item,index) in oaWorkflowFlows" :key="index" @click="_todoFinish(item)">
            <view class="content" style="left: 10upx;">
              <view class="text-grey">
                <!-- 访问 -->
                <text class="ellip">{{item.vName}} {{$t('visit')}}{{item.ownerName}}</text>
              </view>
              <view class="text-gray text-sm flex">
                <!-- 访问时间 -->
                <view class="text-cut">
                  {{$t('visit_time')}}：{{item.visitTime}}
                </view>
              </view>
            </view>
            <view class="action">
              <view class="text-grey text-xs">{{item.stateName}}
                <text class="lg text-gray cuIcon-right margin-left-xs"></text>
              </view>
            </view>
          </view>
        </template>
        <view v-else>
          <no-data-page></no-data-page>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {
  queryUndoVisit,
  queryFinishVisit
} from '../../api/visit/visitApi.js'
export default {
  data() {
    return {
      active: 1,
      oaWorkflowFlows: []
    }
  },
  onLoad() {
    this.java110Context.onLoad()
    this.tabSelect(1);
  },
  methods: {
    tabSelect: function (_active) {
      this.active = _active;
      this._queryOaWorkFlow(_active);
    },
    _queryOaWorkFlow: function (_active) {
      let _that = this;
      if (_active == 1) {
        queryUndoVisit(this, {
          page: 1,
          row: 100,
        }, this.oaWorkflowFlows.length == 0).then(_data => {
          _that.oaWorkflowFlows = _data.data;
        })
      } else {
        queryFinishVisit(this, {
          page: 1,
          row: 100,
        }, this.oaWorkflowFlows.length == 0).then(_data => {
          _that.oaWorkflowFlows = _data.data;
        })
      }

    },
    _todoUndo: function (_undo) {
      uni.navigateTo({
        url: '/pages/visit/visitDetail?vId=' + _undo.vId +
          "&flowId=" + _undo.flowId +
          "&action=Audit" +
          "&taskId=" + _undo.taskId
      })
    },
    _todoFinish: function (_undo) {
      uni.navigateTo({
        url: '/pages/visit/visitDetail?vId=' + _undo.vId +
          "&flowId=" + _undo.flowId
      })
    }
  }
}
</script>

<style>
</style>