// 需要鉴权路由
const router = {
  quit: '/pets/quit', // 退出登录
  focuspets: '/pets/focuspets', // 宠物收藏列表
  focusarticle: '/pets/focusarticle', // 文章收藏列表
  focus: '/pets/focus', // 收藏接口
  canclefocus: '/pets/canclefocus', // 取消收藏接口
  petcheck: '/pets/petcheck' // 查询是否收藏过当前宠物
}

module.exports = router