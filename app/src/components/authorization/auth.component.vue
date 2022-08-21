<template>
    <form class="auth-form" @click.prevent="onSubmit">
        <h2>{{ type }}</h2>

        <div :class="['form-controll', { invalid: eError }]">
            <label for="email">E-mail</label>
            <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                @blur="eBlur"
            />
            <small class="error mt-8px" v-if="eError">{{ eError }}</small>
        </div>

        <div :class="['form-controll', { invalid: pError }]">
            <label for="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                @blur="pBlur"
            />
            <small class="error mt-8px" v-if="pError">{{ pError }}</small>
        </div>

        <button
            type="submit"
            v-if="type === 'Registration'"
            :disabled="eError || pError || isTooManyAttempts"
        >
            Registration
        </button>
        <button
            type="submit"
            v-if="type === 'Login'"
            :disabled="eError || pError || isTooManyAttempts"
        >
            Login
        </button>

        <small class="error mt-2" v-if="false">Invalid</small>
    </form>
</template>

<script>
import authForm from '../../use/auth.form'

export default {
    props: ['type'],

    setup(props) {
        const handleSubmitForm = (values) => {
            if (props.type === 'Registration') {
                console.log(values)
                return
            }

            if (props.type === 'Login') {
                console.log(values)
                return
            }
        }

        return {
            ...authForm(handleSubmitForm),
        }
    },
}
</script>

<style>
</style>