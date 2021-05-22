/**
 * 前端请求接口方法定义
 */
import requesUrl from './requesUrl.js'
import {
	requestPost
} from './request.js'

/**
 * 获取token接口
 */
export function replaceToken(data) {
	return requestPost(requesUrl.replaceToken, data);
}
/**
 * 退出登录接口
 */
export function petsQuit(data) {
	return requestPost(requesUrl.petsQuit, data);
}
/**
 * 宠物种类列表接口
 */
export function getPetsCate() {
	return requestPost(requesUrl.petsCate);
}
/**
 * 全部宠物列表接口
 */
export function getPetsList(data, showLoading) {
	return requestPost(requesUrl.petsList, data, {
		showLoading: showLoading
	});
}
/**
 * 热门宠物列表接口
 */
export function getPetsHot(data) {
	return requestPost(requesUrl.petsHot, data);
}
/**
 * 宠物详情接口
 */
export function getPetsDetailt(data) {
	return requestPost(requesUrl.petsDetail, data);
}
/**
 * 文章接口
 */
export function getPetsArticleDetail(data) {
	return requestPost(requesUrl.petsArticleDetail, data);
}
/**
 * 热搜接口
 */
export function getPetsHotSearch(data) {
	return requestPost(requesUrl.petsHotSearch, data);
}
/**
 * 搜索宠物列表接口
 */
export function getPetsSearchPetList(data, showLoading = true) {
	return requestPost(requesUrl.petsSearchPetList, data, {
		showLoading: showLoading
	});
}
/**
 * 搜索文章列表接口
 */
export function getPetsSearchArticle(data, showLoading = true) {
	return requestPost(requesUrl.petsSearchArticle, data, {
		showLoading: showLoading
	});
}
/**
 * 收藏列表接口
 */
export function getPetsFocuspets(data) {
	return requestPost(requesUrl.petsFocuspets, data);
}
/**
 * 收藏文章列表接口
 */
export function getPetsFocusarticle(data) {
	return requestPost(requesUrl.petsFocusarticle, data);
}
/**
 * 收藏接口
 */
export function getPetsFocus(data) {
	return requestPost(requesUrl.petsFocus, data, {
		// exceptionHandle: {
		// 	'0001': 'skip'
		// }
	});
}
/**
 * 取消收藏接口
 */
export function getPetsCanclefocus(data) {
	return requestPost(requesUrl.petsCanclefocus, data);
}

/**
 * 查询宠物收藏状态
 */
export function getPetsPetcheck(data) {
	return requestPost(requesUrl.petsPetcheck, data, {
		exceptionHandle: {
			'0001': 'skip'
		}
	});
}