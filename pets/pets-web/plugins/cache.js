/* eslint-disable no-useless-constructor,no-eval, no-useless-escape */
/**
 * 存储cookie
 */
export const setCookie = (name, value) => {
  document.cookie = `${name}=${encodeURI(value)};Path=${encodeURI('/')};`
}

/**
 * 获取cookie
 */
export const getCookie = (name) => {
  const arrCookie = decodeURIComponent(document.cookie).split(';')
  let str = null
  arrCookie.forEach((item, index) => {
    const itemArr = item.trim().split('=')
    if (name === itemArr[0]) {
      str = itemArr[1]
    }
  })
  return str
}

/**
 * 删除单个cookie
 */
export const removeCookie = (name) => {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(name)
  if (cval !== null) {
    document.cookie = name + '=; expires=' + exp.toGMTString() + ';path=/'
  }
}

/**
 * 删除全部cookie
 */
export const removeAllCookie = () => {
  const cookies = document.cookie.split(';')
  cookies.map((arr) => {
    removeCookie(arr.split('=')[0])
  })
}


/**
 * localStorage.setItem(key, value)
 */
export const setStorage = (key, value) => {
  const data = _setBefore(value)
  if (window.localStorage) {
    localStorage.setItem(key, data)
  } else {
    setCookie(key, data)
  }
}

/**
 * localStorage.getItem(key)
 */
export const getStorage = (key) => {
  if (window.localStorage) {
    const data = localStorage.getItem(key) || '{"_type":"_null"}'
    return _getAfter(data)
  } else {
    return getCookie(key)
  }
}

/**
 * localStorage.removeItem(key)
 */
export const removeStorage = (key) => {
  if (window.localStorage) {
    localStorage.removeItem(key)
  } else {
    removeCookie(key)
  }
}

/**
 * localStorage.removeItem(key)
 */
export const clearStorage = () => {
  if (window.localStorage) {
    localStorage.clear()
  } else {
    removeAllCookie()
  }
}

/**
 * 获取对应本地缓存做类型转换
 * @param op
 * @returns {*}
 * @private
 */
export const _getAfter = (op) => {
  op = JSON.parse(op)
  const cs = {
    _string (val) {
      return val
    },
    _number (val) {
      return +val
    },
    _boolean (val) {
      return val === 'true'
    },
    _undefined (val) {
      return undefined
    },
    _object (val) {
      return JSON.parse(val)
    },
    _function (val) {
      return eval('(' + val + ')')
    },
    _array (val) {
      return JSON.parse(val)
    },
    _date (val) {
      return new Date(val)
    },
    _regexp (val) {
      return new RegExp(val)
    },
    _null (val) {
      return null
    }
  }

  if (op._type) { // 兼容之前存储无type类型
    return cs[op._type](op.value)
  } else {
    return op
  }
}

/**
 * 设置缓存之前转换为字符串形式
 * @param obj
 * @returns {*}
 * @private
 */
export const _setBefore = (obj = undefined) => {
  const type = '_' + Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

  return ((v, t) => {
    const sz = {
      _string (val) {
        return val
      },
      _number (val) {
        return val
      },
      _boolean (val) {
        return val ? 'true' : 'false'
      },
      _undefined (val) {
        return 'undefined'
      },
      _object (val) {
        return JSON.stringify(val)
      },
      _function (val) {
        return val.toString()
      },
      _array (val) {
        return JSON.stringify(val)
      },
      _date (val) {
        return val.getTime()
      },
      _regexp (val) {
        return val.toString().replace(/[(^\/)|($\/)]/g, '')
      },
      _null (val) {
        return 'null'
      }
    }

    return JSON.stringify({
      _type: type,
      value: sz[t](v)
    })
  })(obj, type)
}



