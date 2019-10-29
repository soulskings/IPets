
import { stringify } from 'qs'

/**
 * 禁止body滚动，解决弹出蒙层滑动穿透问题
 * @returns {{actionForbid: actionForbid}}
 */
export const forbidBodyScroll = (isForbid) => {
  let scrollTop = 0
  const bodyClass = 'body-modal-open'
  const afterOpen = () => {
    scrollTop = document.scrollingElement.scrollTop
    document.body.classList.add(bodyClass)
    document.body.style.top = `-${scrollTop}px`
  }
  const beforeClose = () => {
    document.body.classList.remove(bodyClass)
    document.scrollingElement.scrollTop = scrollTop
  }

  isForbid ? afterOpen() : beforeClose()
}


/**
 * 获取数据类型，string，object，number，null，undefined
 * @param value
 */
export const getType = (value) => {
  const typer = Object.prototype.toString
  var typeStr = typer.call(value)

  typeStr = typeStr.replace(/.*\s(\w+)\]/g, '$1')
  return typeStr.toLowerCase()
}

/**
 * 判断所有数据类型是否为空
 * @param value
 */
export const isEmpty = (value) => {
  const type = getType(value)

  if (type === 'object') {
    return Object.keys(value).length === 0
  } else if (type === 'array') {
    return value.length === 0
  } else if (type === 'number') {
    return !isNaN(value)
  } else {
    return !!value
  }
}

/**
 * 判断是否是微信
 *
 */
export const isWeiXin = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}
/**
 * 判断是否是支付宝
 *
 */
export const isAliPay = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/Alipay/i) === 'alipay') {
    return true
  } else {
    return false
  }
}

/**
 * 手机号验证
 *
 */
export const mobileCheck = (vlue) => {
  const r = /^\d{11}$/
  if (!r.test(vlue)) {
    return false
  } else {
    return true
  }
}

/**
 * 身份证号验证
 *
 */
export const isCardNo = (card) => {
  // 身份证号码18位，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  if (reg.test(card) === false) {
    return false
  } else {
    return true
  }
}

/**
 * 是否ios
 */
export const isIphone = () => {
  const ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('macintosh') > -1) {
    return true
  } else {
    return false
  }
}

// 判断是否含有class
export const hasClass = (el, cls) => {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

// 添加Class
export const addClass = (el, cls) => {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// 移除Class
export const removeClass = (el, cls) => {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

// 去除class空格
export const trim = (string) => {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

// 手机号去除空格
export function trimNum (value) {
  if (!value) { return null }
  const newValue = value.replace(/\s+/g, '')
  return newValue
}

// 获取页面可视高度
export const getPageViewHeight = () => {
  const d = document
  const a = d.compatMode === 'BackCompat' ? d.body : d.documentElement
  return a.clientHeight
}

/**
 * 手机号脱敏
 * @param str 手机号
 * @returns {string}
 */
export const phoneStar = (str) => {
  const len = str && str.length
  if (len && len > 4) {
    return str.substring(0, 3) + '****' + str.substring(len - 4, len)
  }
}

/**
 * 跳转登录
 * rd
 */
export const rd = () => {
  return `?rd=${encodeURIComponent(location.pathname.replace('/weChat', ''))}`
}

/**
 * 微信Header设置标题
 * title 页面标题
 */
export const setTitle = (title) => {
  document.title = title || document.title
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger' && !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
    const iframe = document.createElement('iframe')
    iframe.src = '/favicon.ico'
    iframe.onload = () => {
      setTimeout(() => {
        iframe.remove()
      }, 0)
    }
    document.body.appendChild(iframe)
  }
}

/**
 * 获取Url参数
 * @param name 参数名称
 * @param url 链接地址（默认为本页面地址）
 * @returns {string}
 */
export const getQueryParam = (name, url) => {
  if (!url) {
    url = window.location.href
  }
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let value = null
  const arrSearch = url.substr(1).split('?')
  const hrefstr = arrSearch

  for (let i = 0; i < hrefstr.length; i++) {
    const r = hrefstr[i].match(reg)
    if (r !== null && r[2]) {
      value = r[2]
      value = decodeURIComponent(value)
      break
    }
  }
  return value
}

/**
 * 高清方案下 viewport 不缩放、适配iPhone X 场景使用 rem转px
 * @param rem
 * @returns {number}
 */
export const rem2px = (rem) => {
  const fontSize = document.documentElement.style.fontSize.split('p')[0]
  const dpr = document.documentElement.dataset.dpr || 1
  let val = parseFloat(rem) * fontSize / dpr
  if (typeof d === 'string' && rem.match(/rem$/)) {
    val += 'px'
  }
  return val
}

/**
 * 高清方案下 viewport 缩放场景使用 rem转px
 * @param rem
 * @returns {number}
 */
export const viewRem2px = (rem) => {
  const fontSize = document.documentElement.style.fontSize.split('p')[0]
  let val = parseFloat(rem) * fontSize
  if (typeof d === 'string' && rem.match(/rem$/)) {
    val += 'px'
  }
  return val
}

/**
 * 获取随机字符串
 * @param length
 * @returns {string}
 */
export const hashString = (length = 10) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')

  if (!length) {
    length = Math.floor(Math.random() * chars.length)
  }

  let str = ''
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}
// 跳转html5
export const pushBowserPage = (url, query = {}) => {
  const qs = stringify(query)
  const ext = url.indexOf('?') > -1 ? '&' : '?'
  if (qs) {
    window.location.href = `${url}${ext}${qs}`
  } else {
    window.location.href = url
  }
}


