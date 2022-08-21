<template>
    <AppModal
        title="Attention"
        body="Are you sure you want to empty the cart?"
        action="Yes"
        v-if="isClearingModal"
        @modal:close="handleConfirmClear"
        @modal:action="handleClearCart"
    />

    <AppModal
        title="Success"
        body="The order has been successfully placed."
        action="Ok"
        v-if="isOrderDone"
        @modal:close="handleConfirmClear"
        @modal:action="handleClearCart"
    />

    <div class="container mt-4">
        <div class="row space-beetwen">
            <h1 class="title">Cart</h1>
            <div class="cart-clear_btn" @click="handleConfirmClear">
                Clear cart
            </div>
        </div>

        <div class="cart__items mt-2">
            <div class="cart_item">
                <div class="cart_item__main">
                    <div class="cart_item-img">
                        <img src="../../assets/product-2.jpeg" alt="" />
                    </div>
                    <router-link to="/product/213" class="cart_item-title"
                        >Holo figure</router-link
                    >
                </div>
                <div class="cart_item__second">
                    <div class="cart_item-price">29.99 $</div>
                    <div class="cart_item-delete">
                        <span class="material-icons"> delete_outline </span>
                    </div>
                </div>
            </div>

            <div class="cart_item">
                <div class="cart_item__main">
                    <div class="cart_item-img">
                        <img src="../../assets/product-1.jpeg" alt="" />
                    </div>
                    <router-link to="/product/213" class="cart_item-title"
                        >Holo figure</router-link
                    >
                </div>
                <div class="cart_item__second">
                    <div class="cart_item-price">29.99 $</div>
                    <div class="cart_item-delete">
                        <span class="material-icons"> delete_outline </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-2">
            <div class="cart_total">
                Total:&nbsp;
                <div class="bold">78.88 $</div>
            </div>
        </div>

        <div class="horizon-center mt-1">
            <a href="#checkout" class="cart__items-btn">Place an order</a>
        </div>

        <div id="checkout" class="mt-5">
            <h1 class="title">Contact information</h1>

            <div class="form-controlls mt-2">
                <div :class="['form-controll', { invalid: nError }]">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        v-model="name"
                        @blur="nBlur"
                    />
                    <small class="error" v-if="nError">{{ nError }}</small>
                </div>

                <div :class="['form-controll', { invalid: pError }]">
                    <label for="phone">Telephone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone"
                        v-model="phone"
                        @blur="pBlur"
                    />
                    <small class="error" v-if="pError">{{ pError }}</small>
                </div>

                <div :class="['form-controll', { invalid: eError }]">
                    <label for="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        v-model="email"
                        @blur="eBlur"
                    />
                    <small class="error" v-if="eError">{{ eError }}</small>
                </div>
            </div>
        </div>

        <div id="checkout" class="mt-5">
            <h1 class="title">Delivery</h1>

            <div :class="['form-controll', 'mt-2', { invalid: cError }]">
                <div class="form-controll">
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter your city"
                        v-model="city"
                        @blur="cBlur"
                    />
                    <small class="error" v-if="cError">{{ cError }}</small>
                </div>
            </div>
        </div>

        <div class="cart__confirm mt-5">
            <h1 class="title">Confirmation</h1>

            <div class="cart__confirm-price">
                Total:&nbsp;
                <div class="bold">78.88 $</div>
            </div>

            <button
                class="cart__confirm-btn"
                type="submit"
                @click="onSubmit"
                :disabled="
                    nError ||
                    pError ||
                    eError ||
                    cError ||
                    isTooManyAttempts ||
                    !agreed
                "
            >
                Confirm the order
            </button>

            <div class="cart__confirm-checkbox">
                <input
                    type="checkbox"
                    id="rules"
                    name="rules"
                    v-model="agreed"
                />
                <label for="rules">Agree with rules</label>
            </div>

            <small class="error d-block mt-2" v-if="isTooManyAttempts">
                You are sending requests too often.
            </small>
        </div>
    </div>

    <div class="mt-100"></div>
</template>

<script>
import { ref } from '@vue/reactivity'
import AppModal from '../../components/ui/modal.component.vue'
import cartForm from '../../use/cart.form'
import { watch } from '@vue/runtime-core'

export default {
    components: { AppModal },

    setup() {
        document.title = 'Your cart - GaruDemo store'
        window.scrollTo(0, 0)

        const isClearingModal = ref(false)
        const agreed = ref(false)
        const isOrderDone = ref(false)

        const handleConfirmClear = () => {
            isClearingModal.value = !isClearingModal.value
        }

        const handleClearCart = () => {
            isClearingModal.value = false
        }

        const handleSubmitForm = (values) => {
            isOrderDone.value = true
        }

        return {
            handleConfirmClear,
            isClearingModal,
            handleClearCart,

            ...cartForm(handleSubmitForm),
            agreed,
            isOrderDone,
        }
    },
}
</script>

<style>
</style>