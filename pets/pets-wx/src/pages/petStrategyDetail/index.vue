<template>
	<view class="page-padding pet-strate">
		<head-top :params="params"></head-top>
		<body-main :params="params"></body-main>
		<foot></foot>
	</view>
</template>

<script>
	import headTop from './components/head.vue'
	import bodyMain from './components/body.vue'
	import foot from './components/foot.vue'
	export default {
		components: {
			headTop,
			bodyMain,
			foot
		},
		data() {
			return {
				params: {}
			};
		},
		onLoad (option) { //option为object类型，会序列化上个页面传递的参数
			this.params = option;
			console.log(option); //打印出上个页面传递的参数。
		}
	}
</script>

<style lang="scss">
.pet-strate {
	padding-bottom: 100rpx;
}
</style>
