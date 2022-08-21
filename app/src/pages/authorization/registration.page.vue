<template>
    <div class="auth">
        <AuthComponent type="Registration" />
    </div>
</template>

<script>
import AuthComponent from '../../components/authorization/auth.component.vue'

export default {
    components: { AuthComponent },

    setup() {
        document.title = 'Registration - GaruDemo store'
        window.scrollTo(0, 0)
    },
}
</script>

<style>
</style>