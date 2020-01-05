<template>
	<view class="c-swiper">
		<swiper class="swiper-box" autoplay circular next-margin="30rpx">
			<swiper-item v-for="(item ,index) in list" :key="index" @click="swiperClick(item)">
				<view class="swiper-item">
					<img class="swiper-img" :src="item.url" alt="" mode="widthFix">
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				mode: 'default'
			};
		},
		methods: {
			/**
			 * 选中轮播图
			 * @param {Object} item
			 */
			swiperClick(item) {
				this.$emit('click', item)
			}
		}
	}
</script>

<style lang="scss">
.c-swiper {
	swiper-item {
		border-radius: 20rpx;
		overflow: hidden;
		.swiper-img {
			width: 100%;
		}
			
	}
}

</style>
