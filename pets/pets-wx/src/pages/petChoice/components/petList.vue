<template>
	<view class="pet-box" hover-class="none" hover-stop-propagation="false">
		<view class="classification-type" selectable="false" space="false" decode="false">
			热门宠物
		</view>
		<label v-for="(item, index) in hotPetsList" :key="index" class="pet-label" selectable="false" space="false" decode="false"
		 @click="petClick(item)">
			{{item.name}}
		</label>
		<view class="classification-type all-pet" selectable="false" space="false" decode="false">
			全部宠物
		</view>
		<label v-for="(item, index) in allPetsList" :key="index" class="pet-label" selectable="false" space="false" decode="false"
		 @click="petClick(item)">
			{{item.name}}
		</label>
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
		data() {
			return {
				hotPetsList: [{
						pid: 0,
						name: '十点多'
					},
					{
						pid: 1,
						name: '十点多dsf'
					}
				],
				allPetsList: [{
						pid: 0,
						name: 'sdfsdf'
					},
					{
						pid: 1,
						name: '十点多胜多负少的'
					}
				]
			};
		},
		created() {
			eventBus.$on('petData', (data) => {
				this.init(data);
			})
		},
		methods: {
			// 初始化数据
			init(data) {
				console.log(data)
				this.getHotData(data.type);
				this.getAllData(data.type);
			},
			// 宠物点击方法
			petClick(e) {
				console.log(e)
				uni.navigateTo({
					url: `/pages/petStrategyDetail/index?type=${e.pid}`
				})
			},
			/**
			 * 获取热门宠物数据
			 */
			getHotData() {
				// TODU热门宠物接口
				console.log('热门宠物接口')
			},
			/**
			 * 获取全部宠物数据
			 */
			getAllData() {
				// TODU全部宠物接口
				console.log('全部宠物接口')
			}
		}
	}
</script>

<style lang="scss">
	.pet-box {
		margin-left: 20rpx;
		flex: 1;

		.all-pet {
			margin-top: 30rpx;
		}

		.pet-label {
			display: inline-block;
			min-width: 120rpx;
			height: 60rpx;
			line-height: 60rpx;
			background-color: $uni-main-color;
			border-radius: 10rpx;
			padding: 0 10px;
			text-align: center;
			color: $uni-text-color-inverse;
			margin-right: 10rpx;

			&:last-child {
				margin-right: 0;
			}
		}
	}
</style>
