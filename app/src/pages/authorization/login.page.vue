<template>
    <div class="auth">
        <AuthComponent type="Login" />
    </div>
</template>

<script>
import AuthComponent from '../../components/authorization/auth.component.vue'

export default {
    components: { AuthComponent },

    setup() {
        document.title = 'Login - GaruDemo store'
        window.scrollTo(0, 0)
    },
}
</script>

<style>
</style>