<template>
	<view>
		<!--头像-->
		<view v-if="userInfo.nickName && token" class="user-info">
			<image class="head-sculpture" :src="userInfo.avatarUrl" background-size="cover"></image>
			<text class="user-name">{{userInfo.nickName}}</text>
		</view>
		<view v-else class="user-info">
			<image class="head-sculpture" src="../../../static/images/8.jpg" background-size="cover"></image>
			<button v-show="!isAuthorize" @getuserinfo="authorizeFn" class="weui-btn mini-btn" plain="true" size="mini" open-type="getUserInfo">去授权</button>
			<button v-show="isAuthorize" class="weui-btn mini-btn" plain="true" size="mini" @click="login">点击登录账户</button>
		</view>
		<!-- <view class="authorizeModal" v-if="!isAuthorize">
			<button class="weui-btn mini-btn" plain="true" size="mini" open-type="getUserInfo" @click="authorizeFn">去授权</button>
		</view> -->
	</view>
</template>

<script>
	import { replaceToken } from '@/http/index.js'
	import { resCode } from '@/utils/code.js'
	import {
		mapActions,
		mapGetters
	} from "vuex";
	export default {
		data() {
			return {
				isAuthorize: true
			};
		},
		mounted() {
			this.getSetting();
		},
		methods: {
			...mapActions("user", {
				setToken: 'setToken',
				setUserInfo: 'setUserInfo'
			}),
			...mapGetters("user",[
				'userInfo',
				'token'
			]),
			authorizeFn(res) {
				console.log(res)
				if (res && res.detail && res.detail.errMsg === 'getUserInfo:ok') {
					this.isAuthorize = true;
					this.setUserInfo(JSON.parse(res.detail.rawData))
				} 
			},
			// 判断用户是否授权
			getSetting() {
				uni.getSetting({ // 授权
					success: (res) => {
						if (!res.authSetting['scope.userInfo']) {
							this.isAuthorize = false;
						} else {
							this.isAuthorize = true;
							this.infoFn();
						}
					}
				})
			},
			async login() {
				const [err, success] = await uni.login();
				
				// 取值 this.$store.state.user
				const [tokenErr, tokenSuccess] = await replaceToken({
					code: (success && success.code) || ''
				})
				console.log(tokenSuccess)
				if (tokenSuccess.code === resCode.SUCCESS) {
					this.setToken(tokenSuccess && tokenSuccess.data && tokenSuccess.data.token)
				} else if (tokenSuccess.code === resCode.ERROR) {
					uni.showToast({
						title: '标题',
						duration: tokenSuccess.message
					})
				}
			},
			// 获取用户信息
			infoFn() {
				uni.getUserInfo({
					success: res => {
						console.log(res)
						this.setUserInfo(JSON.parse(res.rawData))
					},
					fail: rej => {
						console.log(rej)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.user-info {
		padding: 50rpx 0;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
	}

	.head-sculpture {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin: 0 60rpx 0 60rpx;
	}
</style>
