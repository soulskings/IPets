import Toast from './src/toast.js'

// 吐司
const toast = (payload) => {
  if (typeof payload === 'string') {
    Toast({
      message: payload
    })
  } else if (typeof payload === 'object' && Object.prototype.hasOwnProperty.call(payload, 'message')) {
    Toast(payload)
  }
}

// 注入vue
export default toast
