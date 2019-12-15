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
      token: '',
      headers
    }
    return template // 服务端接受格式要求
  }
const request = (url, options = {}) => {
    const {
        method = 'POST',
        exceptionHandle = {}
    } = options

    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            headers: options.headers ? options.headers : applyDataTemplate(),
            data: options.data,
            success: function(data) {
                const code = data.data.code
                const isSkippedCode = exceptionHandle === 'skip' || exceptionHandle[code] === 'skip'
                if (code === '000000') {
                    resolve(data.data.data)
                } else {
                    if (!isSkippedCode) {
                       // 公用逻辑：比如鉴权跳转
                        if (data.data.code === '000001' || data.data.code === '000002') {
                            // 跳转登录页
                        }
                    }
                    if (exceptionHandle === 'skip') {
                    } else if (~Object.keys(exceptionHandle).indexOf(code.toString())) {
                        if (data.data.code === '000001' || data.data.code === '000002') {
                            // 跳转登录页
                        }
                    }
                    reject(data.data)
                }
            },
            fail: function(err) {
                reject(err)
            },
            complete: function() {
            }
        })
    })
}

/**
 * Post请求
 * 返回数据格式经过to方法处理
 */
function requestPost (url, data, options = {}) {
    options.method = 'POST'
    options.data = data
    return request(url, options)
}

/**
 * Post请求
 * 返回数据格式经过to方法处理
 */
function requestGet(url, data, options = {}) {
    options.method = 'GET'
    options.data = data
    return request(url, options)
}

module.exports = {
    request,
    requestPost,
    requestGet
}