const state = {
	token: '',
	userInfo: {

	}
}

const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token;
	},
	SET_USER_INFO: (state, obj) => {
		state.userInfo = obj || {};
	},
	REMOVE_TOKEN: (state) => {
		state.token = '';
	}
}
const getters = {
	userInfo: state => state.userInfo,
	token: state => state.token
}
const actions = {
	setToken({
		commit
	}, str) {
		commit('SET_TOKEN', str);
	},
	removeToken({commit}) { // 清空token
		commit('REMOVE_TOKEN');
	},
	setUserInfo({
		commit
	}, obj) {
		commit('SET_USER_INFO', obj);
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
};
