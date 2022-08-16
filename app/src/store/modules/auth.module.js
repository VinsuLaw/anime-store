import $router from '../../router'

export default {
    namespaced: true,
    state: {
        accessToken: localStorage.getItem('accessKey'),
    },
    getters: {
        getToken(state) {
            return state.accessToken
        },

        isAuthenticated(state) {
            return !!state.accessToken
        },
    },
    mutations: {
        setToken(state, token, redirect = false) {
            state.accessToken = token
            localStorage.setItem('accessKey', token)

            if (redirect) {
                $router.push('/')
            }
        },

        unsetToken(state, redirect = false) {
            state.accessToken = null
            localStorage.removeItem('accessKey')

            if (redirect) {
                $router.push('/')
            }
        },
    },
}
