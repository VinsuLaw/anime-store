<template>
    <AppHeader />
    <AppHeaderNav />

    <router-view></router-view>

    <AppFooter />
</template>

<script>
import AppFooter from './components/main/footer.component.vue'
import AppHeaderNav from './components/main/header-nav.component.vue'
import AppHeader from './components/main/header.component.vue'

export default {
    components: { AppHeader, AppHeaderNav, AppFooter },
}
</script>

<style>
</style>