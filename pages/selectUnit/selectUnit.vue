<template>
	<view>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchValue" data-name="searchValue" name="searchValue" @focus="onChange"
					@blur="onSearch" :adjust-position="false" :placeholder="$t('please_enter_the_unit_number')"
					confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow-blur round" @tap="onSearch">搜索</button>
			</view>
		</view>
		<view class="cu-list menu margin-top">
			<view class="cu-item" v-for="(unit, idx) in units" :key="idx" :label="unit.unitId">
				<view class="content padding-tb-sm" is-link @click="chooseUnit(unit)">
					<view>
						<text class="cuIcon-clothesfill text-blue margin-right-xs"></text>
						{{unit.unitNum}}{{$t('unit')}}
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-infofill margin-right-xs"></text> {{unit.unitId}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		loadUnits
	} from '../../api/unit/unit.js'
	import {
		getCurrentCommunity
	} from '../../api/community/community.js'
	export default {
		data() {
			return {
				appUserName: '',
				areaCode: '',
				searchValue: '',
				unitName: "",
				units: [],
				floorId: ''
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.java110Context.onLoad();

			let _floorId = options.floorId;
			this.floorId = _floorId;
			this.loadUnit();
		},
		methods: {
			onChange() {},
			onSearch() {
				this.loadUnit();
			},

			onClick() {
				this.loadUnit();
			},
			chooseUnit: function(_unit) {
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2];
				uni.setStorageSync("_selectUnit", _unit);
				prevPage.unitName = _unit.name;
				//console.log(e);
				wx.navigateBack({
					delta: 1
				});
			},
			loadUnit: function() {
				let _that = this;
				let dataObj = {
					page: 1,
					row: 15,
					communityId: getCurrentCommunity().communityId,
					unitNum: this.searchValue,
					floorId: this.floorId
				};
				loadUnits(this, dataObj, this.units.length == 0)
					.then(function(res) {
						if (res.statusCode == 200) {
							let _units = res.data;
							_that.units = _units;
						}
					})
			}
		}
	}
</script>

<style>

</style>