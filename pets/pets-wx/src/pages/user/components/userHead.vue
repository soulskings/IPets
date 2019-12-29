<template>
	<view>
		<!--头像-->
		<view v-if="false" class="user-info">
			<image class="head-sculpture" src="../../../static/images/8.jpg" background-size="cover"></image>
			<text class="user-name">本人名称</text>
		</view>
		<view v-else class="user-info">
			<image class="head-sculpture" src="../../../static/images/8.jpg" background-size="cover"></image>
			<button class="weui-btn mini-btn" plain="true" size="mini" @click="login">点击登录账户</button>
		</view>
	</view>
</template>

<script>
	import { requestPost } from '@/utils/request.js'
	import { replaceToken } from '@/utils/requesUrl.js'
	export default {
		data() {
			return {

			};
		},
		methods:{
			login() {
				console.log(111)
				 requestPost(replaceToken,{code:1})
				        .then((res) => {
				            
				        })
				        .catch(() => {
				
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
