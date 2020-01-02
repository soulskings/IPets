<template>
	<view class="head">
		<input class="search-input" type="text" v-model="searchVal" placeholder="搜索宠物攻略" @focus="search"/>
		<button class="cancel-search">取消</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.head{
		display: flex;
		justify-content: space-between;
	}
	.cancel-search{
		background-color: $uni-bg-color-grey;
		width: 150rpx;
		height: 80rpx;
		line-height:80rpx;
		color: $uni-text-color;
		border-radius: 20rpx;
	}
</style>
