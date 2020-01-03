<template>
	<view class="collect-header">
		<view class="card-box">
			<c-card class="card-item" v-for="(item,index) in list" :key="index" :dataObj='item' @click="cardClick" @cancelBtn="cancelBtn"></c-card>
		</view>
	</view>
</template>

<script>
	import eventBus from '@/utils/eventBus.js'// 通过eventBus进行兄弟间通信
	import cCard from '@/components/service/cCard.vue'
	export default {
		name: 'collect-header',
		components: {
			cCard
		},
		data() {
			return {
				petType: '',
				list: [{
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
			};
		},
		created() {
			eventBus.$on('navTabClick', (data) => {
				this.navClickOn(data);
			})
		},
		methods: {
			// 某条记录点击事件
			cardClick(data) {
				console.log(data)
			},
			// 取消收藏点击事件
			cancelBtn(data) {
				console.log(data)
			},
			// 切换栏回调
			navClickOn(data) {
				this.petType = data.id;
				console.log(data)
			}
		}
	}
</script>

<style lang="scss">
	.collect-header {
		margin-top: 20rpx;

		.tag-box {
			display: flex;
			flex-wrap: wrap;
		}

		.tag-item {
			margin-right: 20rpx;
		}

		.card-box {
			margin-top: 20rpx;

			.card-item {
				display: block;
				border-bottom: 1rpx solid $uni-border-color;
				padding: 10rpx 0;
			}
		}
	}
</style>
