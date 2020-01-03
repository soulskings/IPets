<template>
	<view class="c-card" hover-class="none" hover-stop-propagation="false" @click = "cardClick">
		<img class="card-img" :src="result.url" alt="">
		<view class="card-content">
			<text class="card-title">{{result.name}}</text>
			<text class="card-dec">{{result.dec}}</text>
			<button class="cancel-btn .btn" v-if="configDef.cencelCollectBtn" @click.stop = "cancelBtnClick">取消收藏</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'c-card',
		props: {
			config: {
				type: Object,
				default: null
			},
			options: {
				type: Object,
				default: null
			},
			dataObj: { // 属性名
				type: Object,
				default: null
			}
		},
		data() {
			return {
				configDef: {
					cencelCollectBtn: false, // 取消按钮
					isItemData: false // 是否返回当前行的所有数据
				},
				optionsDef: { // 默认字段key
					id: 'pid',
					name: 'name',
					dec: 'dec',
					url: 'url'
				},
				result: {} // 数据显示
			};
		},
		mounted () {
			this.init();
		},
		methods: {
			// 初始化数据
			init() {
				this.options ? Object.keys(this.options).forEach((key) => {
					this.optionsDef[key] = this.options[key];
				}): '';
				Object.keys(this.optionsDef).forEach((key) => {
					this.$set(this.result,key,this.dataObj[key])
					// this.result[key] = this.dataObj[key];
				})
			},
			// 点击触发事件
			cardClick() {
				this.$emit('click', this.isItemDataFn())
			},
			// 取消收藏按钮
			cancelBtnClick() {
				this.$emit('cancelBtn', this.isItemDataFn())
			},
			isItemDataFn() {
				this.config ? Object.keys(this.config).forEach((key) => {
					this.configDef[key] = this.config[key];
				}): '';
				return this.configDef && this.configDef.isItemData ? this.dataObj : this.result.id;
			},
		}
	}
</script>

<style lang="scss">
.c-card-box {
	display: block;
}
.c-card{
	display: flex;
	justify-content: center;
	align-items: center;
	.card-img{
		width: 160rpx;
		height: 120rpx;
		margin-right: 20rpx;
	}
	.card-content{
		flex: 1;
		padding: 10rpx;
		position: relative;
	}
	.card-title{
		display: block;
		color: $uni-text-color-title;
		font-size: 32rpx;
		width: 200rpx;
		height: 32rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height:32rpx;
	}
	.card-dec{
		display: block;
		margin-top: 10rpx;
		color: $uni-text-color;
		font-size: 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.cancel-btn{
		position: absolute;
		top: 10rpx;
		right: 30rpx;
	}
}
</style>
