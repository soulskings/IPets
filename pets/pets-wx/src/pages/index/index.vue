<template>
	<view class="home page-padding" hover-class="none" hover-stop-propagation="false">
	    <head-search></head-search>
	    <classification></classification>
	    <hot-pet></hot-pet>
	</view>
</template>

<script>
	import headSearch from "./components/head.vue";
	import classification from "./components/classification.vue";
    import hotPet from "./components/hotPet.vue";
	// import { requestPost } from '../../utils/request'
	// import { replaceToken } from '../../utils/requesUrl'
	export default {
		components: {
			headSearch,
			classification,
			hotPet
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
