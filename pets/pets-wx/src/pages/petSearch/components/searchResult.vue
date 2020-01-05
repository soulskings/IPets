<!-- 搜索结果页 -->
<template>
	<view class="search-result">
		<search-pets :list="petsList"></search-pets>
		<search-aticle :list="aticleList"></search-aticle>
	</view>
</template>

<script>
	import {
		requestGet
	} from '@/utils/request.js'
	import {
		petsCateUrl
	} from '@/utils/requesUrl.js'
	import {
		resCode
	} from '@/utils/code.js'
	import eventBus from '@/utils/eventBus.js' // 通过eventBus进行兄弟间通信
	import searchAticle from './searchAticle.vue'
	import searchPets from './searchPets.vue'
	export default {
		components: {
			searchAticle,
			searchPets,
		},
		data() {
			return {
				activeColor: '#eeeb2b',
				petsList: [
					{
						id: 1,
						url: '../../../static/images/8.jpg',
						name: 'sdfs水电费水电费水电费水电费发',
						dec: '描述'
					},
					{
						id: 2,
						name: '地方斯蒂芬',
						url: '../../../static/images/8.jpg',
						dec: 'sldfskdlfsldsldfskl绿山咖啡就考试了地方及时两地分居乐山大佛地方及时的方式来地方是登录父级老师的副驾驶两地分居萨菲罗斯'
					}
				],
				aticleList: [
					{
						id: 1,
						url: '../../../../../static/images/8.jpg',
						name: 'sdfs水电费水电费水电费水电费发',
						dec: '描述'
					},
					{
						id: 2,
						name: '地方斯蒂芬',
						url: '../../../../../static/images/8.jpg',
						dec: 'sldfskdlfsldsldfskl绿山咖啡就考试了地方及时两地分居乐山大佛地方及时的方式来地方是登录父级老师的副驾驶两地分居萨菲罗斯'
					}
				],
				paramData: {
					name: '',
					type: '',
					pageNo: 1,
					pageSize: 10,
				}
			};
		},
		created() {
			// 监听搜索框内容
			eventBus.$on('searchInputName', (data) => {
				this.paramData.name = data.name;
				this.init();
			})
			// 监听搜索类型
			eventBus.$on('searchType', (data) => {
				this.paramData.type = data.type;
				this.init();
			})
		},
		mounted() {
			
		},
		methods: {
			/**
			 * 初始化
			 * @param {Object}
			 */
			init() {
				if (this.paramData.type === '1') {
					this.getPetsData();
				} else if (this.paramData.type === '2') {
					this.getAticleList();
				} else {
					this.getPetsData();
					this.getAticleList();
				}
			},
			/**
			 * 轮播图切换触发
			 * @param {Object} item
			 */
			change(e) {
				this.current = e.detail.current;
			},
			/**
			 * 选中轮播图
			 * @param {Object} item
			 */
			swiperClick(item) {
				console.log(item)
			},
			/**
			 * 获取宠物列表轮播
			 */
			getPetsData() {
				let data = [];// 接口返回数据
				if (this.paramData.type === '1') {
					this.petsList = []
					this.aticleList = data
				} else {
					this.petsList = data
				}
				console.log(this.paramData,'请求参数')
			},
			/**
			 * 获取宠物文章列表
			 */
			getAticleList() {
				let data = []; // 接口返回数据
				this.aticleList = data;
				this.petsList = [];
				console.log(this.paramData,'请求参数')
			}
		}
	}
</script>

<style lang="scss">
	.search-result{
		margin-top: 20rpx;
		
	}
	
</style>