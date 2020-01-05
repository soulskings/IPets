<template>
	<view class="hot-pet" hover-class="none" hover-stop-propagation="false">
		<text class='classification-type'>热门宠物攻略</text>
		<view class="pet-box" v-for="(item, index) in hotData" :key="index">
			<text class="label-type">狗：</text>
			<view class="label-box">
				<!-- <text class="label-name" v-for="(sub, ind) in item" :key="ind" @click="goDetail(sub)">
					{{sub.name}}
				</text> -->
				<view class="item-name" v-for="(sub, ind) in item" :key="ind" @click="goDetail(sub)">
					<c-tag :label="sub.id" :value="sub.name" :setStyle="setStyle"></c-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cTag from '@/components/common/cTag.vue'
	import getColor from '@/utils/style.js'
	export default {
		name: 'hot-pet',
		components: {
			cTag
		},
		data() {
			return {
				setStyle: {
					bgColor: getColor.mainColor,
					color: getColor.whiteColor,
				},
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
		.label-box {
			display: flex;
			align-items: baseline;
			flex-wrap: wrap;
			.item-name {
				margin:0 10rpx 20rpx;
			}
		}
	}
</style>
