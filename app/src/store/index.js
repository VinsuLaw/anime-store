import { createStore } from 'vuex'
import authModule from './modules/auth.module'

export default createStore({
    state: {
        closeSelects: false,
    },
    getters: {},
    mutations: {
        setCloseSelects(state, payload) {
            state.closeSelects = payload
        },
    },
    actions: {},
    modules: {
        authModule,
    },
})
