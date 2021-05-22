import Vue from 'vue'
import App from './App'
import store from './store'
import {
	uniList,
	uniListItem,
	uniSegmentedControl,
	uniSwiperDot 
} from "@dcloudio/uni-ui"
Vue.component('uni-list',uniList)
Vue.component('uni-list-item',uniListItem)
Vue.component('uni-segmented-control',uniSegmentedControl)
Vue.component('uni-swiper-dot',uniSwiperDot )

Vue.prototype.$store = store 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
