/**
 * 后台接口配置文件
 */
// import env from './env.js'
let requesUrl = {
	/**
	 * 获取token接口
	 */
	replaceToken: 'pets/replace-token',
	/**
	 * 退出登录接口
	 */
  petsQuit : 'pets/quit',
	/**
	 * 宠物种类列表接口
	 */
	petsCate : 'pets/cate',
	/**
	 * 全部宠物列表接口
	 */
	petsList : 'pets/list',
	/**
	 * 热门宠物列表接口
	 */
	petsHot : 'pets/hot',
	/**
	 * 宠物详情接口
	 */
	petsDetail : 'pets/detail',
	/**
	 * 文章接口
	 */
	petsArticleDetail : 'pets/articleDetail',
	/**
	 * 热搜接口
	 */
	petsHotSearch : 'pets/hotsearch',
	/**
	 * 搜索宠物列表接口
	 */
	petsSearchPetList : 'pets/searchpetlist',
	/**
	 * 搜索文章列表接口
	 */
	petsSearchArticle : 'pets/searcharticle',
	/**
	 * 收藏列表接口
	 */
	petsFocuspets : 'pets/focuspets',
	/**
	 * 收藏文章列表接口
	 */
	petsFocusarticle : 'pets/focusarticle',
	/**
	 * 收藏接口
	 */
	petsFocus : 'pets/focus',
	/**
	 * 取消收藏接口
	 */
	petsCanclefocus : 'pets/canclefocus',
	/**
	 * 查询宠物收藏状态
	 */
  petsPetcheck : 'pets/petcheck'
}

export default requesUrl;