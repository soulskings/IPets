<template>
	<view class="c-item">
		<text class="label-name" :style="{'background-color': setStyle.bgColor,'color': setStyle.color,'border-color': setStyle.bgColor}" 
			@click="go(item)">
			{{item[labelName]}}
		</text>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => {}
			},
			setStyle: {
				type: Object,
				default: null
			},
			labelName: {
				type: String,
				default: 'name'
			}
		},
		data() {
			return {
				styleDef: {
					bgColor: '',
					color: ''
				}
			};
		},
		created() {
			this.setStyle ? Object.keys(this.setStyle).forEach((key) => {
				this.styleDef[key] = this.setStyle[key];
			}): '';
		},
		methods: {
			/**
			 * 触发点击事件
			 * @param {Object} item
			 */
			go(item) {
				this.$emit('click', item)
			}
		},
		destroyed() {
			this.list = [];
		}
	}
</script>

<style lang="scss">
.c-item {
	height: 100%;
	.label-name {
		margin-bottom: 20rpx;
		width: calc(100% - 40rpx);
		height: calc(100% - 40rpx);
		display: flex;
		background-color: $uni-main-color;
		padding: 10rpx 20rpx;
		font-size: 32rpx;
		border-radius: 10rpx;
		color: $uni-text-color-inverse;
		align-items: center;
	}
}
</style>
