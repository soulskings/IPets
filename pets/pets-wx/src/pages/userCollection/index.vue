<template>
	<view class="page-padding">
		<collect-head></collect-head>
		<collect-body></collect-body>
	</view>
</template>

<script>
	import collectHead from './components/collectHead.vue'
	import collectBody from './components/collectBody.vue'
	export default {
		name: 'collect-header',
		components: {
			collectHead,
			collectBody
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
