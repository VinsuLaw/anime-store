import { createStore } from 'vuex'
import authModule from './modules/auth.module'

export default createStore({
    state: {
        closeSelects: false,
        currentPage: null,
    },
    getters: {},
    mutations: {
        setCloseSelects(state, payload) {
            state.closeSelects = payload
        },

        setCurrentPage(state, payload) {
            state.currentPage = payload
        },
    },
    actions: {},
    modules: {
        authModule,
    },
})
