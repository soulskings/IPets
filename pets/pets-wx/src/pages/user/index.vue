<template>
	<view class="user page-padding" hover-class="none" hover-stop-propagation="false">
		<!-- 头像-->
		<user-head></user-head>
		<!--列表-->
		<user-body></user-body>
	</view>
</template>

<script>
	import userHead from 'pages/user/components/userHead'
	import userBody from 'pages/user/components/userBody'
	export default {
		components:{
			userBody,
			userHead
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.line {
	  width: 100%;
	  height: 20rpx;
	  background-color: $uni-bg-color-grey;
	}
</style>
