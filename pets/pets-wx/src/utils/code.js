// 信息转换页
const resCode = {
  SUCCESS: '0000', // 业务成功
  NO_LOGIN: '0001', // 未登录
  LOGIN_FAILURE: '0002', // 登录失效
  ERROR_PARAMS: '0010', // 请求参数错误
  NO_FIND_PET: '0011', // 未找到宠物
  ERROR: '9999' // 业务异常码
}

const message = {
  SUCCESS: '成功' // 成功
}

module.exports = {
  resCode,
  message
}