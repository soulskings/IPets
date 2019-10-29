import Loading from './loading.vue'
import Vue from 'vue'

let $vm
let timeout

const loading = {
  show (options = {}) {
    if (typeof window === 'undefined') {
      return false
    }
    if (!$vm) {
      const Load = Vue.extend(Loading)
      $vm = new Load({
        el: document.createElement('div')
      })
      $vm.$el.setAttribute('name', 'wk-elastic-frame')
      document.body.appendChild($vm.$el)
    }

    $vm.loading = {
      text: '正在加载中...',
      layer: false,
      type: 'wk'
    }

    if (typeof options === 'string') {
      $vm.loading.text = options
    } else if (typeof options === 'object') {
      $vm.loading = { ...$vm.loading, ...options }
    }

    $vm.show = true
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      $vm.show = false
    }, options.time || 8000)
  },

  hide () {
    if (typeof window === 'undefined') {
      return false
    }
    timeout && clearTimeout(timeout)
    $vm.show = false
    $vm = null
  }
}

export default loading
