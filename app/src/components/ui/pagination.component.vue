<template>
    <div class="pagination">
        <div class="pagination__items">
            <div
                :class="['pagination_item', { active: pag === currentPage }]"
                v-for="(pag, idx) in currentPaginations"
                :key="pag"
                @click="handlePaginate(pag, idx)"
                v-show="pag > 0"
            >
                {{ pag }}
            </div>
            <div class="pagination_item-stub">...</div>
            <div class="pagination_item unpaginatable">{{ productsCount }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        const productsCount = ref(99)

        const paginationPages = ref(productsCount.value / 3)
        const currentPaginationPage = ref(1)
        const currentPaginations = ref([])
        const currentPage = ref(1)

        onMounted(() => {
            getPaginationPage(currentPaginationPage.value)
        })

        const getPaginationPage = (currentPage) => {
            currentPaginations.value = []
            let offset = currentPage * 3
            for (let i = offset; i > offset - 4; i--) {
                currentPaginations.value.push(i)
            }
            currentPaginations.value = currentPaginations.value.reverse()
        }

        const handlePaginate = (to, idx) => {
            if (idx === 3) {
                if (currentPaginationPage.value < paginationPages.value) {
                    currentPaginationPage.value++
                    getPaginationPage(currentPaginationPage.value)
                }
            } else if (idx === 0) {
                currentPaginationPage.value--
                getPaginationPage(currentPaginationPage.value)
            }

            currentPage.value = to
        }

        return {
            productsCount,
            paginationPages,

            currentPaginations,
            currentPage,

            handlePaginate,
        }
    },
}
</script>

<style>
</style>