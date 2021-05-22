// 自定义错误类（基类为node默认Error类）
class CustomError extends Error{
  constructor (errorObj = {}) {
    super()
    this.errorObj = {
      code: errorObj.code || '999999',
      data: errorObj.data || null,
      message: errorObj.message || '网络异常',
    }
  }

  getCode () {
    return this.errorObj.code
  }

  getMessage () {
    return this.errorObj.message
  }

  getData () {
    return this.errorObj.data
  }
}

module.exports = CustomError