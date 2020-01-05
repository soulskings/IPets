<template>
	<view class="search-pets">
		<uni-swiper-dot :info="list" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" autoplay circular @change="change">
				<swiper-item v-for="(item ,index) in list" :key="index" @click="swiperClick(item)">
					<view class="swiper-item">
						<img class="swiper-img" :src="item.url" alt="" mode="widthFix">
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
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
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				current: 0,
				mode: 'default'
			};
		},
		methods: {
			/**
			 * 轮播图切换触发
			 * @param {Object} item
			 */
			change(e) {
				this.current = e.detail.current;
			},
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
	.swiper-item {
		.swiper-img {
			width: 100%;
		}
			
	}
}

</style>
