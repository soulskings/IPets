<template>
	<view class="hot-pet" hover-class="none" hover-stop-propagation="false">
	    <text class='classification-type'>热门宠物攻略</text>
	    <view class="pet-box" v-for="(item, index) in hotData" :key="index">
	        <text class="label-type">狗：</text>
	        <view>
	            <text class="label-name" v-for="(sub, ind) in item" :key="ind">
	                {{sub.name}}
	            </text>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotData: [
				            [
				                {
				                    id: 1,
				                    name: 'ssfsf电饭锅电饭锅发的狗'
				                },
				                {
				                    id: 2,
				                    name: 'ssfsf狗'
				                },
				                {
				                    id: 3,
				                    name: 'ssfsf狗'
				                },
				                {
				                    id: 4,
				                    name: 'ssfsf狗'
				                },
				                {
				                    id: 5,
				                    name: 'ssfsf狗'
				                }
				            ],
				            [
				                {
				                    id: 2,
				                    name: 'ssfsf猫'
				                }
				            ]
				        ]
			};
		}
	}
</script>

<style lang="scss" scoped>
.hot-pet {
    .pet-box{
        display: flex;
    }
    .label-type{
        margin-top: 20rpx;
    }
    .label-name{
        min-width: 120rpx;
        height: 80rpx;
        display: inline-block;
        background-color: $uni-bg-color-grey;
        text-align: center;
        padding: 0 10rpx;
        margin: 5rpx 10rpx;
        line-height: 80rpx;
        font-size: 30rpx;
        border-radius: 10rpx;
    }
}
</style>
