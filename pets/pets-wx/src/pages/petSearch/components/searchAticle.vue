<template>
	<view class="card-box">
		<text class='classification-type' v-if="list.length > 0">文章精选</text>
		<c-card class="card-item" v-for="(item,index) in list" :key="index" :dataObj='item' @click="cardClick"></c-card>
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
	import cCard from '@/components/service/cCard.vue'
	export default {
		components: {
			cCard
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				activeColor: '#eeeb2b'
			};
		},
		methods: {
			// 某条记录点击事件
			cardClick(data) {
				console.log(data)
			},
		}
	}
</script>

<style lang="scss">
	.card-box {
		margin-top: 20rpx;

		.card-item {
			display: block;
			border-bottom: 1rpx solid $uni-border-color;
			padding: 20rpx 0;
		}
	}
</style>
