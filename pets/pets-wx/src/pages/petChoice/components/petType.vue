<template>
	<view class="category-box" hover-class="none" hover-stop-propagation="false">
		<text :class="{active: item.type == category}" selectable="false" space="false" decode="false" v-for="(item,index) in categoryList"
		 :key="index" @click="categoryClick(item)">
			{{item.name}}
		</text>
	</view>
</template>

<script>
	import {
		getPetsCate
	} from '@/http/index.js'
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	export default {
		data() {
			return {
				category: '1',
				categoryList: [{
						type: '0',
						name: '说sddfsd'
					},
					{
						type: '1',
						name: '说沙芬是'
					}
				],
			};
		},
		mounted() {
			this.getData()
		},
		methods: {
			// 种类切换方法
			categoryClick(item) {
				this.category = item.type;
				eventBus.$emit('petData', {
					type: this.category
				})
			},
			async getData() {
				const [err, success] = await getPetsCate({
					code: ''
				})
			}
		}
	}
</script>

<style lang="scss">
	.category-box {
		width: 200rpx;
		background-color: $uni-bg-color-grey;
		height: 100vh;

		text {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			display: block;
			text-align: center;
		}

		text.active {
			background-color: $uni-bg-color;
			color: $uni-main-color;
		}
	}
</style>
