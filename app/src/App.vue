<template>
    <AppHeader />
    <AppHeaderNav />

    <router-view></router-view>

    <AppFooter />
</template>

<script>
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import AppFooter from './components/main/footer.component.vue'
import AppHeaderNav from './components/main/header-nav.component.vue'
import AppHeader from './components/main/header.component.vue'

export default {
    components: { AppHeader, AppHeaderNav, AppFooter },

    setup() {
        const $store = useStore()

        onMounted(() => {
            document.onclick = ($event) => {
                if (!$event.target.closest('.select')) {
                    $store.commit('setCloseSelects', true)

                    setTimeout(() => {
                        $store.commit('setCloseSelects', false)
                    }, 900)
                }
            }
        })

        onUnmounted(() => {
            document.onclick = null
        })
    },
}
</script>

<style>
</style>