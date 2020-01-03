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
	.page-padding {
		padding: 0 20rpx;
	}
	.classification-type {
		font-size: 36rpx;
		color: $uni-text-color-title;
		display: block;
		height: 80rpx;
		line-height: 80rpx;
	}
	.search-input{
		display: inline-block;
		width: calc(100% - 152rpx);
		text-align: center;
		padding: 19rpx 0;
		border:1rpx solid $uni-border-color;
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
