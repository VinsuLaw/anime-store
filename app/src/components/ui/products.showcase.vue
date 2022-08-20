<template>
    <div class="showcase">
        <h1 class="title">{{ title }}</h1>

        <div class="products_view__container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

        <div class="horizon-center mt-2">
            <router-link :to="moreLink" class="showcase_btn">
                View all products
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ProductCard from './product.card.vue'

export default {
    props: ['title'],
    components: { ProductCard },

    setup(props) {
        const moreLink = ref('')

        if (props.title === 'Manga') {
            moreLink.value = '/manga'
        } else if (props.title === 'Anime figures') {
            moreLink.value = '/figures'
        } else if (props.title === 'Ranobe') {
            moreLink.value = '/ranobe'
        }

        return {
            moreLink,
        }
    },
}
</script>

<style>
</style>