<template>
	<view>
		<c-nav :list="list" :activeDef="active"></c-nav>
	</view>
</template>

<script>
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
		}
	}
</script>

<style lang="scss">

</style>
