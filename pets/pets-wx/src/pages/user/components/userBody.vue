<template>
	<view>
		<!--列表-->
		<uni-list>
			 <uni-list-item title="我的收藏" @click="collectClick"></uni-list-item>
			 <uni-list-item title="隐私政策" @click="privacyClick"></uni-list-item>
		</uni-list>
		<!-- <view class="my-item">
			<navigator url="/pages/userCollection/index" hover-class="navigator-hover">我的收藏</navigator>
		</view>
		<view class="my-item">
			<navigator url="/pages/userPrivacy/index" hover-class="navigator-hover">隐私政策</navigator>
		</view> -->
		<view class="line"></view>
		<button class="exit" plain="true">退出账号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			collectClick() {
				uni.navigateTo({
					url: `/pages/userCollection/index`
				})
			},
			privacyClick() {
				uni.navigateTo({
					url: `/pages/userPrivacy/index`
				})
			}
		}
	}
</script>

<style lang="scss">
	.exit {
		margin-top: 60rpx;
		border: 1px solid $uni-border-color;
	}
</style>
