import axios from 'axios'

axios.defaults.timeout = 8000

// 应用请求参数模板，适用于post请求
function applyDataTemplate (headers = {}) {
  const template = {
    token: '',
    platform: 'h5'
  }
  return template // 服务端接受格式要求
}

/**
 * 基于axios的请求方法封装
 * 默认: 使用POST请求方式、套用参数模板格式、统一拦截处理异常code
 *
 * @param {string} url 接口
 * @param {object} options 配置
 * @param {string} [options.method] - 请求方式，默认post
 * @param {object} [options.params] - 请求params参数
 * @param {object} [options.data] - 请求data参数
 * @param {object} [options.headers] - 请求头配置
 * @param {object} [options.responseType] - 请求返回数据的格式
 * @param {boolean} [options.useDataTemplate] - 套用请求参数模板
 * @param {object|string} [options.exceptionHandle] - 异常code码拦截配置: 'skip'-全部不统一拦截处理，'silent'-全部静默无需处理，对象格式配置见下方example
 *
 * @returns {Promise<any>}
 *
 * @example
 * request('/data/api/path', {
 *   data: {},
 *   useDataTemplate: false,
 *   exceptionHandle: {
 *       8801: 'messageBox', // 使用messageBox提示
 *       8802: 'skip',       // 不拦截处理8802
 *       2023: 'silent'      // 静默无需处理
 *   }
 * })
 */
function request (url, options = {}) {
  const {
    method = 'POST',
    exceptionHandle = {}
  } = options

  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      responseType: options.responseType || 'json',
      headers: options.headers ? options.headers : applyDataTemplate(),
      params: options.params,
      data: options.data
    })
      .then(response => {
        const code = response.data.code

        /**
         * 自动隐藏loading规则
         * 配置项exceptionHandle里，设置为允许通过的异常code，则不自动隐藏，交由业务场景控制
         */
        const isSkippedCode = exceptionHandle === 'skip' || exceptionHandle[code] === 'skip'
        if (!isSkippedCode || code === '000' || code === '1000') {
        }

        if (code === '000' || code === '1000') {
          /**
           * 请求正常
           */
          if (response.data.model || response.data.data) {
            resolve(response.data.model || response.data.data)
          } else {
          }
        } else if (exceptionHandle === 'skip') {
          /**
           * 允许所有异常code通过:
           * exceptionHandle: 'skip'
           */
          reject(response.data)
        } else if (exceptionHandle === 'silent') {
          /**
           * 所有异常code静默:
           * exceptionHandle: 'silent'
           */
          console.log(`[request] 已配置所有异常code静默 ${code}: ${response.data.message}`)
          return false
        } else if (~Object.keys(exceptionHandle).indexOf(code.toString())) {
          /**
           * 单个异常code的配置:
           * exceptionHandle: {
           *     9999: 'messageBox', // 使用messageBox弹窗提示
           *     8888: 'skip',       // 不拦截处理
           *     7777: 'silent'      // 静默无需处理
           * }
           */
          if (exceptionHandle[code] === 'messageBox') {
          } else if (exceptionHandle[code] === 'skip') {
            reject(response.data)
          } else if (exceptionHandle[code] === 'silent') {
            console.log(`[request] 已配置当前code静默 ${code}: ${response.data.message}`)
            return false
          }
        } else if (code === '2023' || code === '2030') {
          /**
           * 统一处理账号超时、被踢
           *  2023-您的登录信息已过期，请重新登录
           *  2030-账号在另一个设备上进行登录
           */
        } else {
          /**
           * 通用异常处理方式：toast提示
           */
        }
      })
      .catch(error => {
        const message = error.response && error.response.status === 404 ? '服务异常请稍后再试！' : '网络异常请稍后再试！'

        if (exceptionHandle === 'skip') {
          reject({ code: -999, message }) // eslint-disable-line
        } else if (exceptionHandle === 'silent') {
          console.log(`[request] 已配置所有异常静默 -999: ${message}`)
        } else {
        }
      })
  })
}

/**
 * https://github.com/scopsy/await-to-js
 * 包装请求请求promise返回数据的格式：[正常数据，异常数据]
 * 适用于async/await形式的写法，可以避免使用try catch处理异常返回的数据
 * @param promise
 * @returns {Q.Promise<*[]>}
 */
const to = (promise) => {
  return promise
    .then(data => [data, null])
    .catch(err => [undefined, err])
}

/**
 * Post请求
 * 返回数据格式经过to方法处理
 */
function fetch (url, options = {}) {
  return to(request(url, options))
}

/**
 * Get请求
 * 返回数据格式经过to方法处理
 */
function fetchGet (url, params, options = {}) {
  options.method = 'GET'
  options.params = params
  return to(request(url, options))
}

/**
 * Post请求
 * 返回数据格式经过to方法处理
 */
function fetchPost (url, data, options = {}) {
  options.method = 'POST'
  options.data = data
  return to(request(url, options))
}

/**
 * Post请求
 * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
 */
function rawFetch (url, options = {}) {
  return request(url, options)
}

/**
 * Get请求
 * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
 */
function rawFetchGet (url, params, options = {}) {
  options.method = 'GET'
  options.params = params
  return request(url, options)
}

/**
 * Post请求
 * 适用于Promise().then().catch()形式的写法、以及用于Promise.all()
 */
function rawFetchPost (url, data, options = {}) {
  options.method = 'POST'
  options.data = data
  return request(url, options)
}

export default { 
  fetch,
  fetchGet,
  fetchPost,
  rawFetch,
  rawFetchGet,
  rawFetchPost
}
