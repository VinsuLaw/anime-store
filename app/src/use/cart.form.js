import { useField, useForm } from 'vee-validate'
import { computed, watch } from 'vue'
import * as yup from 'yup'

export default function (submit) {
    const { handleSubmit, isSubmitting, submitCount } = useForm()

    const {
        value: name,
        errorMessage: nError,
        handleBlur: nBlur,
    } = useField('name', yup.string().required('Please enter your name'))

    const {
        value: phone,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField('phone', (value) => {
        if (!value) {
            return 'Please enter your telephone'
        }

        if (value.length < 6) {
            return 'Please enter valid phone'
        }

        return true
    })

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
        value: city,
        errorMessage: cError,
        handleBlur: cBlur,
    } = useField('city', yup.string().required('Please enter your city'))

    const onSubmit = handleSubmit((values) => {
        submit(values)
    })

    const isTooManyAttempts = computed(() => submitCount.value > 5)

    watch(isTooManyAttempts, (value) => {
        if (value) {
            setTimeout(() => (submitCount.value = 0), 30000)
        }
    })

    return {
        onSubmit,
        isSubmitting,
        isTooManyAttempts,

        name,
        nError,
        nBlur,

        phone,
        pError,
        pBlur,

        email,
        eError,
        eBlur,

        city,
        cError,
        cBlur,
    }
}
