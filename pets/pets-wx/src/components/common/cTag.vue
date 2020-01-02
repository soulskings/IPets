<template>
	<view class="box1111">
		<view class="c-tag" @click="tagClick">
			<text>{{value}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'c-tag',
		props: {
			label: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: '标签'
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
			
		},
		methods: {
			tagClick() {
				this.$emit('click', this.label)
			}
		}
	}
</script>

<style lang="scss">
	.c-tag {
		display: inline-block;
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
		text-align: center;
		border: 1rpx solid $uni-border-color;
		color: $uni-text-color;
	}
</style>
