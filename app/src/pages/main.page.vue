<template>
    <div class="container mt-4">
        <AppSlider />

        <div class="mt-100"></div>
        <ProductsShowcase title="Manga" />

        <div class="mt-5"></div>
        <ProductsShowcase title="Anime figures" />

        <div class="mt-5"></div>
        <ProductsShowcase title="Ranobe" />

        <div class="mt-100"></div>
    </div>
</template>

<script>
import AppSlider from '../components/ui/slider.component.vue'
import ProductsShowcase from '../components/ui/products.showcase.vue'

export default {
    components: { AppSlider, ProductsShowcase },
}
</script>

<style>
</style>