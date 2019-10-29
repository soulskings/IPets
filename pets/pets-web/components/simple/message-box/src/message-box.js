import Vue from 'vue'
import msgBox from './message-box.vue'

const MessageBoxConstructor = Vue.extend(msgBox)

const defaults = {
  title: '',
  message: '',
  showOkBtn: true,
  okText: '确定',
  cancelText: '',
  okClass: '',
  cancelClass: '',
  visible: true,
  ok: () => {},
  cancel: () => {}
}

let instance

const merge = function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i]
    for (const prop in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
}

const MessageBox = (options) => {
  if (!instance) {
    initInstance()
  }
  const opts = merge({}, defaults, options)
  for (const prop in opts) {
    // eslint-disable-next-line no-prototype-builtins
    if (instance.hasOwnProperty(prop)) {
      instance.$set(instance, prop, opts[prop])
    }
  }

  instance.$el.setAttribute('name', 'wk-elastic-frame')
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
    instance.lockState = true
  })
  return instance
}

export default MessageBox
