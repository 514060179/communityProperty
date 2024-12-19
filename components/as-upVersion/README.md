## 使用说明
```
<template>
	<view class="content">
		<view @click="checkVersion">检测更新</view>

		<upVersion :upLoadUrl="upLoadUrl" :newVision="newVision" :appStoreUrl='appStoreUrl'></upVersion>
	</view>
</template>

<script>
	import upVersion from "@/components/as-upVersion/as-upVersion.vue"
	export default {
		components: {
			upVersion
		},
		data() {
			return {
				upLoadUrl: "", // 安卓下载链接
				newVision: "", // 最新版本号
				appStoreUrl: '' // AppStore链接
			}
		},
		onReady() {
			this.checkVersion()
		},
		methods: {
			checkVersion() {
				uni.request({
					url: 'https://mock.apifox.cn/m1/1822165-0-default/getVersion', //仅为示例，并非真实接口地址。
					success: (res) => {
						//此处调用后端接口返回当前版本号和下载地址
						//回调赋值
						this.newVision = res.data.newVision
						this.appStoreUrl = res.data.appStoreUrl
						this.upLoadUrl = res.data.upLoadUrl
					}
				});
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>


```