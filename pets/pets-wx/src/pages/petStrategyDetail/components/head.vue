<template>
	<view class="search-pets">
		<c-swiper :list = "list" @click="swiperClick"></c-swiper>
	</view>
</template>

<script>
	import cSwiper from '@/components/common/cSwiper.vue'
	import {
		requestGet
	} from '@/utils/request.js'
	import {
		petsCateUrl
	} from '@/utils/requesUrl.js'
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	export default {
		components: {
			cSwiper
		},
		data() {
			return {
				list: [
					{
						id: 1,
						url: '../../../../../static/images/8.jpg',
						name: 'sdfs水电费水电费水电费水电费发',
						dec: '描述'
					},
					{
						id: 2,
						name: '地方斯蒂芬',
						url: '../../../../../static/images/8.jpg',
						dec: 'sldfskdlfsldsldfskl绿山咖啡就考试了地方及时两地分居乐山大佛地方及时的方式来地方是登录父级老师的副驾驶两地分居萨菲罗斯'
					}
				],
			};
		},
		methods: {
			/**
			 * 选中轮播图
			 * @param {Object} item
			 */
			swiperClick(item) {
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
.search-pets {
	margin-top: 20rpx;
	// swiper {
	// 	border-radius: 20rpx;
	// 	overflow: hidden;
	// }
	swiper-item {
		border-radius: 20rpx;
		overflow: hidden;
		.swiper-img {
			width: 100%;
			
		}
			
	}
}

</style>
