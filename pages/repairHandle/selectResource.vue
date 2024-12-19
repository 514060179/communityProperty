<template>
	<view>
		<view class="cu-bar bg-white ">
			<view class="action">
				<!-- 选择物品 -->
				<text class="cuIcon-title text-orange "></text>{{$t('choose_item')}}
			</view>
			<view class="action">
			</view>
		</view>
		<view class="select-single-resource">
			<view>
				<view class="cu-form-group margin-top">
					<!-- 商品类型 -->
					<view class="title">{{$t('item_type')}}</view>
					<picker :value="goodsTypeIndex" :range="goodsTypeCloums" :range-key="'name'"
						@change="goodsParentTypeChange">
						<view class="picker">
							{{goodsTypeCloums[goodsTypeIndex].name}}
						</view>
					</picker>
				</view>
				<view v-if="isCustom">
					<view class="cu-form-group margin-top">
						<!-- 商品名 -->
						<view class="title">{{$t('item_name')}}</view>
						<!-- 请输入商品名 -->
						<input v-model="customGoodsName" :placeholder="$t('enter_item_name')"></input>
					</view>
					<view class="cu-form-group margin-top" v-show="feeFlag == '1001'">
						<!-- 自定义价格 -->
						<view class="title">{{$t('pricess')}}</view>
						<!-- 请输入自定义价格 -->
						<input type="number" v-model="singlePrice" :placeholder="$t('please_pricess')"></input>
					</view>
				</view>
				<view v-else>
					<view class="cu-form-group margin-top">
						<!-- 二级分类 -->
						<view class="title">{{$t('secondary_category')}}</view>
						<picker :value="goodsSonTypeIndex" :range="goodsSonTypeCloums" :range-key="'name'"
							@change="goodsTypeChange">
							<view class="picker">
								{{goodsSonTypeCloums[goodsSonTypeIndex].name}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group margin-top" v-if="rstId!=''">
						<!-- 商品 -->
						<view class="title">{{$t('item')}}</view>
						<picker :value="goodsIndex" :range="goodsCloums" :range-key="'resName'" @change="goodsChange">
							<view class="picker">
								{{goodsCloums[goodsIndex].resName}}
							</view>
						</picker>
					</view>
					<view v-if="goodsIndex!=0">
						<view class="cu-form-group margin-top" v-show="feeFlag == '1001'">
							<!-- 单价 -->
							<view class="title">{{$t('unit_price')}}</view>
							<!-- 请输入单价 -->
							<input type="number" v-model="singlePrice" :disabled="disabledPrice"
								placeholder="$t('enter_unit_price')"></input>
						</view>
						<view v-show="feeFlag == '1001'">
							<!-- 价格 -->
							<view class="text-right text-grey" v-if="goods.outHighPrice == goods.outLowPrice">
								{{$t('price')}}:{{goods.outLowPrice}}
							</view>
							<!-- 价格范围 -->
							<view class="text-right text-grey" v-else>
								{{$t('price_range')}}{{goods.outLowPrice}}-{{goods.outHighPrice}}
							</view>
						</view>
						<view class="cu-form-group margin-top">
							<!-- 规格 -->
							<view class="title">{{$t('specification')}}</view>
							<input type="text" v-model="goods.specName" disabled="disabled"></input>
						</view>
					</view>
				</view>
				<view class="cu-form-group margin-top">
					<!-- 数量 -->
					<view class="title">{{$t('quantity')}}</view>
					<view class="use-num-container">
						<view class="dec" @tap="numDec">-</view>
						<input class="use-num-input" v-model="useNumber" disabled="disabled"
							@input="goodsNumChange"></input>
						<view class="inc" @tap="numInc">+</view>
					</view>
				</view>
				<view class="flex flex-direction margin-top">
					<!-- 确定 -->
					<button class="cu-btn bg-blue margin-tb-sm lg" @click="_save()">{{$t('confirm')}}</button>
				</view>
				<view class="flex flex-direction margin-top">
					<button class="cu-btn bg-red margin-tb-sm lg" @click="_canel()">取消</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		loadRepairStaff,
		dispatchRepair,
		finishRepair,
		queryResourceStoreResName,
		queryRepairInfo
	} from '../../api/repair/repair.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'

	export default {
		components: {},
		data() {
			const translate = (key) => {
				return this.$t(key);
			};
			return {
				showModel: false,
				amount: '',
				singlePrice: '',
				useNumber: 1,
				disabledPrice: false,
				goodsTypeCloums: [{
					name: translate('please_choose_item_type'), // '请选择商品类型'
				}],
				goodsTypeIndex: 0,
				parentRstId: '',
				goodsSonTypeCloums: [{
					name: translate('please_choose_item_type') //'请选择商品类型'
				}],
				goodsSonTypeIndex: 0,
				rstId: '',
				goodsCloums: [{
					resName: translate('please_choose_item') //'请选择商品'
				}],
				goodsIndex: 0,
				goods: {
					"resId": "",
					"outLowPrice": "",
					"outHighPrice": "",
				},
				isCustom: false,
				customGoodsName: '',
				resourceStoreInfo: [],
				feeFlag: '',
			}
		},
		onLoad(options) {
			this.resetData();
			this.feeFlag = options.feeFlag
		},
		methods: {
			switchShow: function() {

				this.showModel = !this.showModel;
			},
			resetData: function() {
				let _that = this;
				let initData = {
					amount: '',
					singlePrice: '',
					useNumber: 1,
					disabledPrice: false,
					goodsTypeCloums: [{
						name: _that.$t('please_choose_item_type') //'请选择商品类型'
					}],
					goodsTypeIndex: 0,
					parentRstId: '',
					goodsSonTypeCloums: [{
						name: _that.$t('please_choose_item_type') //''请选择商品类型'
					}],
					goodsSonTypeIndex: 0,
					rstId: '',
					goodsCloums: [{
						resName: _that.$t('please_choose_item') //''请选择商品'
					}],
					goodsIndex: 0,
					goods: {
						"resId": "",
						"outLowPrice": "",
						"outHighPrice": "",
					},
					isCustom: false,
					customGoodsName: '',
					resourceStoreInfo: [],
				};
				this.copyObject(initData, _that);
				this._loadRepairGoodsType();
			},

			copyObject: function(org, dst) {
				for (let key in dst) {
					if (org.hasOwnProperty(key)) {
						dst[key] = org[key]
					}
				}
			},

			_loadRepairGoodsType: function() {
				let _that = this;
				let _data = {
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId,
					giveType: 1,
					parentId: '0'
				};
				queryRepairInfo(this, _data, this.goodsSonTypeCloums.length == 0)
					.then(function(res) {
						_that.goodsTypeCloums = _that.goodsTypeCloums.concat(res.data);
						_that._appendCustomResourceStoreType();
					});
			},

			// 追加自定义类
			_appendCustomResourceStoreType: function() {
				let customeType = {
					rstId: 'custom',
					name: this.$t('custom') //'自定义'
				};
				this.goodsTypeCloums.push(customeType);
			},

			_loadRepairGoods: function() {
				let _that = this;
				let _data = {
					resId: "",
					rstId: this.rstId,
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId,
					giveType: 1,
					flag: 1
				};
				queryResourceStoreResName(this, _data, this.goodsCloums.length == 0)
					.then(function(res) {
						let _json = res.data;
						if (_json.total < 1) {
							uni.showToast({
								icon: 'none',
								title: _that.$t('no_items') //'暂无商品'
							});
							return;
						}
						let _data = _json.data;
						_that.goodsCloums = [{
							resName: _that.$t('please_choose_item') //'请选择商品'
						}]
						_that.goodsIndex = 0;
						_that.goods = '';
						_that.amount = '';
						if (_data.length < 1) {
							return;
						}
						_that.goodsCloums = _that.goodsCloums.concat(_data);
					});
			},

			// 父分类change
			goodsParentTypeChange: function(e) {
				// 清空二级分类
				this.goodsSonTypeCloums = [{
					name: this.$t('please_choose_item_type') //'请选择商品类型'
				}];
				this.goodsSonTypeIndex = 0;
				this.rstId = '';
				//取其下标
				this.goodsTypeIndex = e.target.value
				if (this.goodsTypeIndex == 0) {
					this.parentRstId = ''
					return;
				}
				let selected = this.goodsTypeCloums[this.goodsTypeIndex] //获取选中的数组
				if (selected.rstId == 'custom') {
					this.isCustom = true;
					return;
				} else {
					this.isCustom = false;
				}
				this.parentRstId = selected.rstId //选中的id
				this._loadSonGoodsTypes();
			},
			// 查询子分类
			_loadSonGoodsTypes: function() {
				let _that = this;
				let _data = {
					page: 1,
					row: 100,
					communityId: getCurrentCommunity().communityId,
					parentId: this.parentRstId
				};
				queryRepairInfo(this, _data, this.goodsSonTypeCloums.length == 0)
					.then(function(res) {
						_that.goodsSonTypeCloums = [{
							name: this.$t('please_choose_item_type') //'请选择商品类型'
						}];
						_that.goodsSonTypeCloums = _that.goodsSonTypeCloums.concat(res.data);
					});
			},
			// 子分类change
			goodsTypeChange: function(e) {
				this.goodsSonTypeIndex = e.target.value //取其下标
				if (this.goodsSonTypeIndex == 0) {
					this.rstId = ''
					return;
				}
				let selected = this.goodsSonTypeCloums[this.goodsSonTypeIndex] //获取选中的数组
				this.rstId = selected.rstId //选中的id
				this._loadRepairGoods();
			},

			goodsChange: function(e) {
				this.goodsIndex = e.target.value //取其下标
				if (this.goodsIndex == 0) {
					this.goods = ''
					return;
				}
				let selected = this.goodsCloums[this.goodsIndex] //获取选中的数组
				this.goods = selected
				if (selected.outLowPrice == selected.outHighPrice) {
					this.singlePrice = selected.outLowPrice;
					this.disabledPrice = true;
				} else {
					this.singlePrice = '';
					this.disabledPrice = false;
				}
			},

			numDec: function() {
				if (this.useNumber <= 1) {
					uni.showToast({
						title: this.$t('cannot_reduce_further'), //'不能再减少了',
						icon: 'none'
					})
					return;
				}
				this.useNumber -= 1;
			},

			numInc: function() {
				this.useNumber += 1;
			},

			_save: function() {
				// 验证必填项
				let msg = '';
				if (this.isCustom) {
					if (!this.customGoodsName) {
						msg = this.$t('enter_item_name') //'请输入商品名';
					} else if (this.feeFlag == '1001' && !this.singlePrice) {
						msg = this.$t('enter_valid_amount') //'请输入有效金额';
					}
				} else {
					if (this.rstId == '') {
						msg = this.$t('please_choose_item_type') //"请选择商品类型";
					} else if (this.useNumber < 1) {
						msg = this.$t('item_quantity_cannot_be_zero') //"商品数量不能为零";
					} else if (!this.goods) {
						msg = this.$t('please_choose_item') //"请选择商品";
					} else if (this.feeFlag == '1001' && !this.singlePrice) {
						msg = this.$t('enter_valid_amount') //"请输入有效金额";
					}
				}
				if (msg != '') {
					wx.showToast({
						title: msg,
						icon: 'none'
					})
					return;
				}
				let chooseResource = this.goods;
				chooseResource.price = this.singlePrice;
				chooseResource.useNumber = this.useNumber;
				chooseResource.isCustom = this.isCustom;
				chooseResource.customGoodsName = this.customGoodsName;
				if (this.isCustom) {
					chooseResource.goodsTypeName = this.$t('custom') //'自定义';
				}
				chooseResource = JSON.stringify(chooseResource);
				uni.$emit('getResourceInfo', chooseResource)
				uni.navigateBack({
					delta: 1,
				})
			},

			_canel: function() {
				uni.navigateBack({
					delta: 1,
				})
			}
		}
	}
</script>

<style>
	.select-single-resource {
		position: fixed;
		top: 100rpx;
		left: 0;
		background-color: #fff;
		width: 100%;
		height: 100%;
	}

	.use-num-container {
		display: flex;
		flex-direction: row;
	}

	.use-num-input {
		width: 100rpx;
		text-align: center;
		padding: 0;
	}

	.inc,
	.dec {
		border: 1px solid #000;
		border-radius: 50%;
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
	}
</style>