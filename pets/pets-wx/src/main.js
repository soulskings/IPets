import Vue from 'vue'
import App from './App'
import {
	uniList,
	uniListItem
} from "@dcloudio/uni-ui"
Vue.component('uni-list',uniList)
Vue.component('uni-list-item',uniListItem)
// Vue.use(uniList);
// Vue.use(uniListItem);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
