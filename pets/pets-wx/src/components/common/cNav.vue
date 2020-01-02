<template>
	<view class="p-nav">
		<view class="nav-list" v-for="(item,index) in list" :key="index" 
		:class="{active: active === item.id}" @click="navClick(item)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				active: ''
			};
		},
		mounted() {
			
		},
		methods: {
			navClick(item) {
				this.active = item.id;
				this.$emit('click', item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-nav {
		display: flex;
		align-items: center;
		border-bottom: 1px solid $uni-border-color;
		.nav-list{
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			padding: 0 10rpx;
			box-sizing: border-box;
		}
		.nav-list.active{
			border-bottom: 4rpx solid $uni-main-color;
			color: $uni-main-color;
			cursor: pointer;
		}
	}
</style>
