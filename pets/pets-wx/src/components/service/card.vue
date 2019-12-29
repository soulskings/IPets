<template>
	<view class="" hover-class="none" hover-stop-propagation="false" @click = "cardClick">
	    {{result.pid}}-------{{result.name}}
	</view>
</template>

<script>
	export default {
		props: {
			config: {
				type: Object,
				value: {
					cencelCollectBtn: {
						type: Boolean,
						value: false
					}
				}
			},
			dataObj: { // 属性名
				type: Object,
				value: {}
			}
		},
		data() {
			return {
				result: {
			            pid: '',
			            name: ''
			        }	
			};
		},
		mounted () {
			this.init();
		},
		methods: {
			// 初始化数据
			init(obj) {
				Object.keys(this.result).forEach((key) => {
					this.result[key] = this.dataObj[key];
				})
				this.setData({
					result: this.result
				})
				console.log(this.result)
			},
			cardClick(e) {
				this.triggerEvent('click', e.currentTarget.dataset.result)
			}
		}
	}
</script>

<style lang="scss">

</style>
