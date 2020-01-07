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
export function getPetsList(data) {
	return requestPost(requesUrl.petsList, data);
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
export function getPetsSearchPetList(data) {
	return requestPost(requesUrl.petsSearchPetList, data);
}
/**
 * 搜索文章列表接口
 */
export function getPetsSearchArticle(data) {
	return requestPost(requesUrl.petsSearchArticle, data);
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
	return requestPost(requesUrl.petsFocus, data);
}
/**
 * 取消收藏接口
 */
export function getPetsCanclefocus(data) {
	return requestPost(requesUrl.petsCanclefocus, data);
}
