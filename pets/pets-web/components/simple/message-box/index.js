import MessageBox from './src/message-box.js'


// 弹窗
const messageBox = (payload) => {
  return new Promise((resolve, reject) => {
    if (typeof payload === 'string') {
      MessageBox({
        message: payload,
        cancel: () => {
          reject(payload)
        },
        ok: () => {
          resolve(payload)
        }
      })
    } else if (typeof payload === 'object' && Object.prototype.hasOwnProperty.call(payload, 'object')) {
      MessageBox(Object.assign({}, payload, {
        cancel: () => {
          reject(payload)
        },
        ok: () => {
          resolve(payload)
        },
        showCancelBtn: payload.cancelText
      }))
    }
  })
}

export default messageBox
