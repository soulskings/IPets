<template>
	<view class="foot">
		<c-bar @click="btnClick"></c-bar>
	</view>
</template>

<script>
	import cBar from '@/components/common/cBar.vue'
	export default {
		components: {
			cBar
		},
		data() {
			return {
				
			};
		},
		methods: {
			btnClick(item) {
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
.foot {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 99rpx;
	background-color: $uni-bg-color;
	border-top: 1rpx solid $uni-border-color;
}
</style>
