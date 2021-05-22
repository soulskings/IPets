<template>
	<view class="search-pets">
		<c-swiper :list = "list" @click="swiperClick"></c-swiper>
	</view>
</template>

<script>
	import cSwiper from '@/components/common/cSwiper.vue'
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	export default {
		components: {
			cSwiper
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
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
