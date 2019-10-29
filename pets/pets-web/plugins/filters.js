import Vue from 'vue'

// 时间格式化
export function formatDate (time, flag, noYear) {
  if (time === 0) {
    return ''
  } else {
    var date = new Date(time)
    if (flag) {
      let _date = date.toLocaleDateString()
      let dateStrAry = []
      dateStrAry = _date.split('/')
      if (noYear) {
        _date = `${dateStrAry[1]}月${dateStrAry[2]}日`
      } else {
        _date = `${dateStrAry[0]}年${dateStrAry[1]}月${dateStrAry[2]}日`
      }
      return _date
    } else {
      var fmt = ''
      if (/(y+)/.test('yyyy-MM-dd hh:mm:ss')) {
        fmt = 'yyyy/MM/dd hh:mm:ss'.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          const str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
        }
      }
      return fmt
    }
  }
}

// 数值为整补零，保留1-2位小数
export function numberTofixed (value) {
  let num = Number(value)
  num = Number.isNaN(num) ? 0 : num

  // 判断是否为整数
  if (Number.isInteger(num)) {
    return num + '.0'
  } else {
    const floatPart = num.toFixed(2)
    const floatEnd = String(floatPart).split('.')[1]

    if (floatEnd.slice(1) === '0') {
      return num.toFixed(1)
    } else {
      return floatPart
    }
  }
}

/**
 * 金额格式化: 2333 -> 2,333.00
 */
export const formatAmount = (val) => {
  if (!val && typeof val !== 'number') {
    return '----'
  } else if (isNaN(Number(val))) {
    return val
  } else {
    return (+val).toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
  }
}

const filters = {
  formatDate,
  numberTofixed
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
