<template>
	<view class="head">
		<input class="search-input" type="text" v-model="searchVal" placeholder="搜索宠物攻略" @blur="search"/>
		<button class="cancel-search" @click="cancel">取消</button>
	</view>
</template>

<script>
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	export default {
		data() {
			return {
				searchVal: '',
				repData: {
					name: ''
				}
			};
		},
		methods: {
			/**
			 * 输入框值传递
			 * @param {Object} e
			 */
			search(e) {
				this.repData.name = e.detail.value;
				this.searchInputNameBus();
			},
			cancel() {
				this.repData.name = this.searchVal = '';
				this.searchInputNameBus();
			},
			searchInputNameBus() {
				eventBus.$emit('searchInputName', this.repData)
			}
		}
	}
</script>

<style lang="scss">
	.head{
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
	}
	.cancel-search{
		background-color: $uni-bg-color-grey;
		width: 150rpx;
		height: 80rpx;
		line-height:80rpx;
		color: $uni-text-color;
		border-radius: 20rpx;
	}
</style>
