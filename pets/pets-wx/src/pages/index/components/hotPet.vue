<template>
	<view class="hot-pet" hover-class="none" hover-stop-propagation="false">
		<text class='classification-type'>热门宠物攻略</text>
		<view class="pet-box" v-for="(item, index) in hotData" :key="index">
			<text class="label-type">狗：</text>
			<view>
				<text class="label-name" v-for="(sub, ind) in item" :key="ind" @click="goDetail(sub)">
					{{sub.name}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hot-pet',
		data() {
			return {
				hotData: [
					[{
							id: 1,
							name: 'ssfsf电饭锅电饭锅发的狗'
						},
						{
							id: 2,
							name: 'ssfsf狗'
						},
						{
							id: 3,
							name: 'ssfsf狗'
						},
						{
							id: 4,
							name: 'ssfsf狗'
						},
						{
							id: 5,
							name: 'ssfsf狗'
						}
					],
					[{
						id: 2,
						name: 'ssfsf猫'
					}]
				]
			};
		},
		methods: {
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/petStrategyDetail/index?id=${item.id}`
				})
			},
			/**
			 * 获取热门宠物数据接口
			 */
			getData() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hot-pet {
		.pet-box {
			display: flex;
			align-items: baseline;
		}

		.label-type {
			font-size: 36rpx;
		}

		.label-name {
			min-width: 120rpx;
			display: inline-block;
			background-color: $uni-main-color;
			text-align: center;
			padding: 10rpx 20rpx;
			margin:0 10rpx 20rpx;
			font-size: 32rpx;
			border-radius: 10rpx;
			color: $uni-text-color-inverse;
		}
	}
</style>
