<template>
	<view class="head">
		<image class="photo" src="../../../static/images/8.jpg" mode=""></image>
		<input class="search-input" type="text" v-model="searchVal" placeholder="搜索宠物攻略" @focus="search"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: '',
				list:'',
			};
		},
		methods: {
			search() {
				uni.redirectTo({
					url: `/pages/petSearch/index`
				})
			}
		}
	}
</script>

<style lang="scss">
	.head{
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.photo{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
