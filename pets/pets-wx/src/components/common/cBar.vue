<template>
	<view class="c-bar">
		<view class="bar-item" v-for="(item,index) in list" :key="index" @click="barClick(item)">
			<icon class="icon-box" :type="item.icon"></icon>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id: 1,
						icon: 'download',
						name: '收藏'
					},
					{
						id: 2,
						icon: 'download',
						name: '分享'
					}
				]
			};
		},
		methods: {
			barClick(item) {
				this.$emit('click', item)
			}
		}
	}
</script>

<style lang="scss">
.c-bar {
	display: flex;
	align-items: center;
	height: 100%;
	.bar-item {
		flex: 1;
		border-right: 1rpx solid $uni-border-color;
		text-align: center;
		&:last-child{
			border-right: none;
		}
	}
	.icon-box {
		display: block;
		text-align: center;
	}
}
</style>
