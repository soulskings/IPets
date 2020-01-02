<template>
	<view class="pet-choice page-padding" hover-class="none" hover-stop-propagation="false">
		<view class="category-box" hover-class="none" hover-stop-propagation="false">
			<text :class="{active: item.type == category}" selectable="false" space="false" decode="false" v-for="(item,index) in categoryList"
				:key="index" @click="categoryClick(item)">
				{{item.name}}
			</text>
		</view>
		<view class="pet-box" hover-class="none" hover-stop-propagation="false">
			<view class="classification-type" selectable="false" space="false" decode="false">
				热门宠物
			</view>
			<label v-for="(item, index) in petList" :key="index" class="pet-label" selectable="false" space="false" decode="false"
			 @click="petClick(item)">
				{{item.name}}
			</label>
			<view class="classification-type all-pet" selectable="false" space="false" decode="false">
				全部宠物
			</view>
			<label v-for="(item, index) in petList" :key="index" class="pet-label" selectable="false" space="false" decode="false"
			 @click="petClick(item)">
				{{item.name}}
			</label>
		</view>
	</view>
</template>

<script>
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
				petList: [{
						pid: 0,
						name: '十点多'
					},
					{
						pid: 1,
						name: '十点多dsf'
					}
				]
			};
		},
		methods: {
			// 种类切换方法
			categoryClick(e) {
				console.log(e)
				this.category = e.type;
			},
			// 宠物点击方法
			petClick(e) {
				console.log(e)
				uni.navigateTo({
					url: `/pages/petStrategyDetail/index?type=${e.pid}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.pet-choice {
		display: flex;
		border-top: 1px solid $uni-border-color;

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
			}
		}

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
				background-color: $uni-border-color;
				border-radius: 10rpx;
				padding: 0 10px;
				text-align: center;
				color: $uni-text-color;
				margin-right: 10rpx;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
</style>
