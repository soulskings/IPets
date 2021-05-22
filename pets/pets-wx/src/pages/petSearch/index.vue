<!-- 搜索结果页 -->
<template>
	<view class="page-padding">
		<head-search></head-search>
		<search-type></search-type>
		<search-result></search-result>
	</view>
</template>

<script>
	import headSearch from './components/headSearch.vue'
	import searchType from './components/searchType.vue'
	import searchResult from './components/searchResult.vue'
	export default {
		components: {
			headSearch,
			searchType,
			searchResult
		},
		data() {
			return {
				activeColor: '#eeeb2b',
				items: ['选项卡1','选项卡2'],
				current: 0
			};
		},
		mounted() {
			
		},
		methods: {
			onClickItem(e) {
			            if (this.current !== e.currentIndex) {
			                this.current = e.currentIndex;
			            }
			        }
		}
	}
</script>

<style lang="scss">
	
</style>
