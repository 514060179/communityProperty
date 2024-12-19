<template>
	<view>
		<form>

			<view class="cu-form-group margin-top">
				<!-- 密码 -->
				<view class="title">{{$t('password')}}</view>
				<input :placeholder="$t('enter_password')" type="password" name="input" v-model="oldPwd"></input>
			</view>
			<view class="cu-form-group ">
				<!-- 新密码 -->
				<view class="title">{{$t('new_password')}}</view>
				<input :placeholder="$t('enter_new_password')" type="password" name="input" v-model="pwd"></input>
			</view>
			<view class="cu-form-group ">
				<!-- 确认密码 -->
				<view class="title">{{$t('confirm_password')}}</view>
				<input :placeholder="$t('enter_confirm_password')" type="password" name="input"
					v-model="newPwd"></input>
			</view>
		</form>

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg" @tap="_doChangePwd()">提交</button>
		</view>

	</view>
</template>

<script>
	import {
		isNull
	} from '../../lib/com/newland/property/utils/StringUtil.js'
	import url from '../../constant/url.js'
	export default {
		data() {
			return {
				oldPwd: '',
				pwd: '',
				newPwd: ''
			}
		},
		onLoad() {
			this.java110Context.onLoad();

		},
		methods: {
			_doChangePwd: function() {
				let _that = this
				if (isNull(this.oldPwd)) {
					uni.showToast({
						icon: 'none',
						title: _that.$t('password_cannot_be_empty') //'密码不能为空'
					});
					return;
				}

				if (isNull(this.pwd)) {
					uni.showToast({
						icon: 'none',
						title: _that.$t('new_password_cannot_be_empty') //'新密码不能为空'
					});
					return;
				}

				if (isNull(this.newPwd)) {
					uni.showToast({
						icon: 'none',
						title: _that.$t('confirm_password_cannot_be_empty') //'确认密码不能为空'
					});
					return;
				}

				if (this.newPwd != this.pwd) {
					uni.showToast({
						icon: 'none',
						title: _that.$t('confirm_password_not_match') //'确认密码和新密码不一致'
					});
					return;
				}

				let _userInfo = {
					userId: this.java110Context.getUserInfo().userId,
					oldPwd: this.oldPwd,
					newPwd: this.newPwd
				};

				this.java110Context.request({
					url: url.changeStaffPwd,
					header: this.java110Context.getHeaders(),
					method: "POST",
					data: _userInfo,
					success: function(res) {
						console.log(res);
						if (res.statusCode != 200) {
							uni.showToast({
								icon:"none",
								title: res.data
							});
							/*uni.navigateTo({
								url: '/pages/login/login'
							})*/
							return;
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 1500
							});
						}
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							});
						}, 1000)

					},
					fail: function(error) {
						// 调用服务端登录接口失败
						uni.showToast({
							title: '调用接口失败'
						});
						console.log(error);
					}
				}, true);


			}

		}
	}
</script>

<style>
</style>