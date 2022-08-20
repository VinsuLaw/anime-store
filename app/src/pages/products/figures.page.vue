<template>
    <div class="container mt-4">
        <h1 class="title">Anime figures</h1>

        <div class="mt-2"></div>
        <AppSelect label="Sorting" @select:selected="handleSort" />

        <div class="row mt-2">
            <FilterPrice label="Price" @filter:price="handleFilterPrice" />

            <div class="width-420 row ml-3 space-beetwen">
                <AppSelect label="Manufacturer" @select:selected="handleSort" />
                <AppSelect label="Series" @select:selected="handleSort" />
            </div>
        </div>

        <div class="products_view__container mt-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

        <div class="mt-5">
            <Pagination />
        </div>

        <div class="mt-100"></div>
    </div>
</template>

<script>
import AppSelect from '../../components/ui/select.component.vue'
import FilterPrice from '../../components/ui/filter.component.vue'
import ProductCard from '../../components/ui/product.card.vue'
import Pagination from '../../components/ui/pagination.component.vue'

export default {
    components: { AppSelect, FilterPrice, ProductCard, Pagination },

    setup() {
        const handleSort = (sort) => {}

        const handleFilterPrice = ({ min, max }) => {}

        return {
            handleSort,
            handleFilterPrice,
        }
    },
}
</script>

<style>
</style>