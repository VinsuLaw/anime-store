import { useField, useForm } from 'vee-validate'
import { computed, watch } from 'vue'
import * as yup from 'yup'

export default function (submit) {
    const { handleSubmit, isSubmitting, submitCount } = useForm()

    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur,
    } = useField(
        'email',
        yup
            .string()
            .required('Please enter your email')
            .email('Please enter valid email')
    )

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField(
        'password',
        yup
            .string()
            .required('Please enter your password')
            .min(6, 'Password is must be at least 6 characters')
    )

    const onSubmit = handleSubmit((values) => {
        submit(values)
    })

    const isTooManyAttempts = computed(() => submitCount.value > 5)

    watch(isTooManyAttempts, (value) => {
        if (value) {
            setTimeout(() => (submitCount.value = 0), 60000)
        }
    })

    return {
        onSubmit,
        isSubmitting,
        isTooManyAttempts,

        email,
        eError,
        eBlur,

        password,
        pError,
        pBlur,
    }
}
