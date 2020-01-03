<!-- 搜索结果页 -->
<template>
	<view class="search-result">
		<view class="tag-box">
			<c-tag class="tag-item" :class="{'tag-active': tag.id === current}" 
			v-for="(tag,index) in tagList" :key="index" :label="tag.id" :value="tag.name" @click="tabClick"></c-tag>
		</view>
		<view class="card-box">
			<c-card class="card-item" v-for="(item,index) in list" :key="index" :dataObj='item' @click="cardClick"></c-card>
		</view>
	</view>
</template>

<script>
	import cTag from '@/components/common/cTag.vue'
	import cCard from '@/components/service/cCard.vue'
	export default {
		components: {
			cTag,
			cCard
		},
		data() {
			return {
				activeColor: '#eeeb2b',
				list: [
					{
						id: 1,
						url: '../../static/images/8.jpg',
						name: 'sdfs水电费水电费水电费水电费发',
						dec: '描述'
					},
					{
						id: 2,
						name: '地方斯蒂芬',
						url: '../../static/images/8.jpg',
						dec: 'sldfskdlfsldsldfskl绿山咖啡就考试了地方及时两地分居乐山大佛地方及时的方式来地方是登录父级老师的副驾驶两地分居萨菲罗斯'
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
			// 
			tabClick(val) {
				let valNum = Number(val);
				if (this.current === valNum) {
					this.current = '';
				} else {
					this.current = valNum;
				}
			},
			// 某条记录点击事件
			cardClick(data) {
				console.log(data)
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
		.tag-box{
			display: flex;
			flex-wrap: wrap;
		}
		.tag-item {
			margin-right: 20rpx;
		}
		.card-box {
			margin-top: 20rpx;
			.card-item{
				display: block;
				border-bottom: 1rpx solid $uni-border-color;
				margin-bottom: 20rpx;
			}
		}
	}
	
</style>