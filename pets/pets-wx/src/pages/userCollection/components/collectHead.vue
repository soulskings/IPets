<template>
	<view>
		<c-nav :list="list" :activeDef="active" @click="navClick"></c-nav>
	</view>
</template>

<script>
	import eventBus from '@/utils/eventBus.js'
	import cNav from '@/components/common/cNav.vue'
	export default {
		components: {
			cNav
		},
		data() {
			return {
				list: [
					{
						id: '1',
						name: '宠物'
					},
					{
						id: '2',
						name: '攻略'
					}
				],
				active: '1'
			};
		},
		methods: {
			navClick(data) {
				eventBus.$emit('navTabClick', data)
			}
		}
	}
</script>

<style lang="scss">

</style>
