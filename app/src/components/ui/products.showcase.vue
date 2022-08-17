<template>
    <div class="showcase">
        <h1 class="title">{{ title }}</h1>

        <div class="showcase__container">
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
            <router-link to="/manga" class="showcase_btn">
                View all products
            </router-link>
        </div>
    </div>
</template>

<script>
import ProductCard from './product.card.vue'

export default {
    props: ['title'],
    components: { ProductCard },

    setup(props) {},
}
</script>

<style>
</style>