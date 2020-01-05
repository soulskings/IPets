<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/static/scss/common.scss';
	/*每个页面公共css */
	page{
		font-family: 'weiruanyahei';
		font-size: 28rpx;
	}
	.page-padding {
		padding: 0 30rpx;
	}
	.classification-type {
		font-size: 40rpx;
		color: $uni-text-color-title;
		display: block;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: 500;
	}
	.search-input{
		display: inline-block;
		width: calc(100% - 152rpx);
		text-align: center;
		padding: 19rpx 0;
		border:1rpx solid $uni-border-color;
		border-radius: 10rpx;
	}
	.main-color{
		background-color: $uni-main-color
	}
	.btn{
		min-width: 120rpx;
		height: 60rpx;
		font-size: 30rpx;
		text-align: center;
		line-height: 60rpx;
		
	}
</style>
