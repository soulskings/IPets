<!-- 搜索结果页 -->
<template>
	<view class="search-result">
		<view class="tag-box">
			<c-tag class="tag-item" :class="{'tag-active': tag.id === current}" 
			v-for="(tag,index) in tagList" :key="index" :label="tag.id" :value="tag.name" @click="tabClick"></c-tag>
		<uni-pad dsf ></uni-pad>
		</view>
	</view>
</template>

<script>
	import cTag from '@/components/common/cTag.vue'
	export default {
		components: {
			cTag
		},
		data() {
			return {
				activeColor: '#eeeb2b',
				list: [
					{
						id: 1,
						name: 'sdfs'
					},
					{
						id: 2,
						name: '地方斯蒂芬'
					}
				],
				tagList: [
					{
						id: 1,
						name: '宠物'
					},
					{
						id: 2,
						name: '攻略'
					}
				],
				items: ['宠物','攻略'],
				current: -1
			};
		},
		mounted() {
			
		},
		methods: {
			tabClick(val) {
				let valNum = Number(val);
				if (this.current === valNum) {
					this.current = '';
				} else {
					this.current = valNum;
				}
			},
			onClickItem(e) {
				console.log(e)
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				} else {
					this.current = -1;
				}
			}
		}
	}
</script>

<style lang="scss">
	.search-result{
		margin-top: 20rpx;
	}
	.tag-box{ 
		display: flex;
		flex-wrap: wrap;
	}
	.tag-item {
		margin-right: 20rpx;
	}
	
</style>