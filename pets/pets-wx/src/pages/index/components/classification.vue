<template>
	<view class="classification" hover-class="none" hover-stop-propagation="false" v-if="srcList && srcList.length > 0">
		<text class='classification-type'>宠物分类</text>
		<view class="classification-box">
			<view class="fication" v-for="(item,index) in srcList" :key="index" @click="petClick(item)">
				<image class="fication-img" :src="item.img" mode="widthFix" />
				<text class='classification-name'>{{item.name}}</text>
			</view>
		</view>
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
	export default {
		data() {
			return {
				srcList: [{
						img: '/static/images/8.jpg',
						cid: '0',
						name: '狗'
					},
					{
						img: '/static/images/8.jpg',
						cid: '1',
						name: '猫'
					},
					{
						img: '/static/images/8.jpg',
						cid: '2',
						name: '兔子'
					},
					{
						img: '/static/images/8.jpg',
						cid: '3',
						name: '鼠'
					}
				]
			};
		},
		mounted() {
			this.getList();
		},
		methods: {
			// 点击宠物跳转
			petClick(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/petChoice/index?type=${item.cid}`
				})
			},
			// 获取宠物类型列表
			async getList() {
				// TODU 获取宠物类型列表接口
				console.log('获取宠物类型列表接口')
				const [resErr, resSuccess] = await requestGet(petsCateUrl);
				if (resSuccess && resSuccess.code === resCode.SUCCESS) {
					this.srcList = resSuccess && resSuccess.data;
				} else if (resSuccess && resSuccess.code === resCode.ERROR) {
					uni.showToast({
						title: '标题',
						duration: resSuccess.message
					})
				} else {
					this.srcList = [];
				}
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
			margin-bottom: 20rpx;

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
