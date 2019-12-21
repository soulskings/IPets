const resCode = {
  SUCCESS: '000000', // 业务成功
  NO_LOGIN: '000001', // 未登录
  LOGIN_FAILURE: '000002', // 登录失效
  ERROR_PARAMS: '000010', // 请求参数错误
  ERROR: '999999' // 业务异常码
}

const template = {
  // 网络异常
  netError: {
    code: resCode.ERROR,
    data: null,
    message: '网络异常'
  }
}

module.exports = {
  resCode,
  template
}