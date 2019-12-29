<template>
	<view class="head">
		<image class="photo" src="../../../static/images/8.jpg" mode=""></image>
		<input class="search-input" type="text" value="" placeholder="搜索宠物攻略"/>
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
	.photo{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
