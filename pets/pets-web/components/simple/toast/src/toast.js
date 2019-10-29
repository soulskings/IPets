import Vue from 'vue'
import toast from './toast.vue'

const ToastConstructor = Vue.extend(toast)
const removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}

const Toast = (options = {}) => {
  const message = typeof options === 'string' ? options : options.message
  if (typeof window === 'undefined') {
    return console.log('toast发出的消息：' + message)
  }
  const instance = new ToastConstructor().$mount(document.createElement('div'))
  const duration = options.duration || 2000
  instance.message = typeof options === 'string' ? options : options.message
  instance.theme = options.theme || 'black'
  instance.position = options.position || 'middle'
  instance.className = options.className || ''
  instance.icon = options.icon || ''
  // 防止DOM重复添加
  if (document.body.getElementsByClassName('nb-toast-main').length === 0) {
    instance.$el.setAttribute('name', 'wk-elastic-frame')
    document.body.appendChild(instance.$el)
  }

  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    ~duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return
      document.body.removeChild(instance.$el)
      instance.close()
    }, duration))
  })
  return instance
}

export default Toast
