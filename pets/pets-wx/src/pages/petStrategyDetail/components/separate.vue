<template>
	<view class="separate">
		<text class='classification-type'>{{listName}}</text>
		<view class="separate-box">
			<view class="item-name" v-for="(item, ind) in list" :key="ind" @click="goDetail(item)">
				<c-item :item="item" :labelName="labelName" :setStyle="setStyle"></c-item>
			</view>
		</view>
	</view>
</template>

<script>
	import cItem from '@/components/common/cItem.vue'
	import getColor from '@/utils/style.js'
	export default {
		name: 'separate',
		components: {
			cItem
		},
		props: {
			labelName: {
				type: String,
				default: 'name'
			},
			listName: {
				type: String,
				default: '宠物概况'
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				setStyle: {
					bgColor: getColor.grayColor,
					color: getColor.color666
				},
			};
		},
		methods: {
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/article/index?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.separate {
		.separate-box {
			display: flex;
			flex-flow: wrap;
			justify-content: space-between;
			align-items: stretch;

			.item-name {
				width: calc(50% - 20rpx);
			}
		}
	}
</style>
