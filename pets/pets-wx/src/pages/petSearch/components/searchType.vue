<template>
	<view class="tag-box">
		<c-tag class="tag-item" :class="{'tag-active': tag.id === current}" v-for="(tag,index) in tagList" :key="index"
		 :label="tag.id" :value="tag.name" @click="tabClick"></c-tag>
	</view>
</template>

<script>
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	import cTag from '@/components/common/cTag.vue'
	export default {
		components: {
			cTag
		},
		data() {
			return {
				tagList: [{
						id: '1',
						name: '宠物'
					},
					{
						id: '2',
						name: '攻略'
					}
				],
				current: '-1'
			};
		},
		methods: {
			// 标签切换方法
			tabClick(val) {
				// let valNum = Number(val);
				if (this.current === val) {
					this.current = '';
				} else {
					this.current = val;
				}
				eventBus.$emit('searchType', {
					type: this.current
				})
			}
		}
	}
</script>

<style lang="scss">
	.tag-box {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.tag-item {
		margin-right: 20rpx;
	}
</style>
