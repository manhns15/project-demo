import authService from '@/service/auth.service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return authService.login(user).then(
                user => {
                    commit('login success', user);
                    return Promise.resolve(user)
                },
                error => {
                    commit('login false')
                    return Promise.reject(error)
                }
            )
        },
        logout({ commit }) {
            authService.logout();
            commit('logout')
        },
        register({ commit }, user) {
            return authService.register(user).then(res => {
                commit('register success');
                return Promise.resolve(res.data)

            },
                error => {
                    commit('register false')
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
