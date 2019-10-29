import Vue from 'vue'
import Toast from '../components/simple/toast'
import MessageBox from '../components/simple/message-box'
import Loading from '../components/simple/loading'

const components = {
  install (Vue) {
    Vue.prototype.$toast = Toast
    Vue.prototype.$messageBox = MessageBox
    Vue.prototype.$loading = Loading
  }
}

Vue.use(components)

export default ({ app }, inject) => {
  app.$toast = Toast
  app.$messageBox = MessageBox
  app.$loading = Loading
}


