<template>
	<view class="pet-choice page-padding" hover-class="none" hover-stop-propagation="false">
		<petType></petType>
		<petList></petList>
	</view>
</template>

<script>
	import petType from './components/petType.vue'
	import petList from './components/petList.vue'
	export default {
		components: {
			petType,
			petList
		},
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.pet-choice {
		display: flex;
	}
</style>
