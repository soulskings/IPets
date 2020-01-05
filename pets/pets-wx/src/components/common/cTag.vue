<template>
	<view class="c-tag">
		<view class="box" :style="{'background-color': setStyle.bgColor,'color': setStyle.color,'border-color': setStyle.bgColor}" @click="tagClick">
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
			},
			setStyle: {
				type: Object,
				default: () => {
					return {
						bgColor: {
							type: String,
							default: ''
						},
						color: {
							type: String,
							default: ''
						}
					}
				}
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
		width: 100%;

		.box {
			display: inline-block;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
			text-align: center;
			border: 1rpx solid $uni-border-color;
			color: $uni-text-color;
		}
	}
</style>
