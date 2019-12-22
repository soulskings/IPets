const axios = require('axios')

/**
 * 基于request的请求方法封装
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
const applyDataTemplate = (headers = {}) => {
  const template = {
    headers
  }
  return template // 服务端接受格式要求
}
const fetch = (url, options = {}) => {
  const {
      method = 'POST',
      exceptionHandle = {}
  } = options

  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      headers: options.headers ? options.headers : applyDataTemplate(),
      params: options.params,
      data: options.data,
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error.data)
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
 * Get请求
 * 返回数据格式经过to方法处理
 */
function fetchGet (url, params, options = {}) {
  options.method = 'GET'
  options.params = params
  return to(fetch(url, options))
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

module.exports = {
  fetch,
  fetchPost,
  fetchGet
}