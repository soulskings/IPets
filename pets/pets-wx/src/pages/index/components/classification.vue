<template>
	<view class="classification" hover-class="none" hover-stop-propagation="false">
		<text class='classification-type'>宠物分类</text>
		<view class="classification-box">
			<view class="fication" v-for="(item,index) in srcList" :key="index" @click="petClick(item)">
				<image class="fication-img" :src="item.url" />
				<text class='classification-name'>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				srcList: [{
						url: '/static/images/8.jpg',
						type: '0',
						name: '狗'
					},
					{
						url: '/static/images/8.jpg',
						type: '1',
						name: '猫'
					},
					{
						url: '/static/images/8.jpg',
						type: '2',
						name: '兔子'
					},
					{
						url: '/static/images/8.jpg',
						type: '3',
						name: '鼠'
					}
				]
			};
		},
		methods: {
			petClick(e) {
				uni.navigateTo({
					url: `/pages/petChoice/index?type=${e.type}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.classification-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.fication {
			.fication-img {
				width: 350rpx;
				height: 262.5rpx;
			}
			.classification-name {
				display: block;
				text-align: center;
			}
		}
	}
</style>
