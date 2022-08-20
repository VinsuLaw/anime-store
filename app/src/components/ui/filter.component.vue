<template>
    <div class="range">
        <h4 class="range_label">{{ label }}</h4>

        <div class="range__container">
            <div class="range__slider">
                <div
                    class="progress"
                    :style="{
                        left: progressMin ? progressMin + '%' : '5%',
                        right: progressMax ? progressMax + '%' : '5%',
                    }"
                ></div>
            </div>

            <div class="range__input">
                <input
                    ref="minBtn"
                    data-range="min"
                    type="range"
                    class="range-min"
                    min="0"
                    max="4000"
                    value="1"
                    @input="handleRange"
                />
                <input
                    ref="maxBtn"
                    data-range="max"
                    type="range"
                    class="range-max"
                    min="2500"
                    max="5000"
                    value="5000"
                    @input="handleRange"
                />
            </div>
        </div>

        <div class="range__counts">
            <div class="range__count">{{ minPrice }}$</div>
            <div class="range__count">{{ maxPrice }}$</div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    props: ['label'],
    emits: ['filter:price'],

    setup(_, { emit }) {
        const progressMin = ref('5')
        const progressMax = ref('5')
        const maxBtn = ref(null)
        const minBtn = ref(null)

        const minPrice = ref(0)
        const maxPrice = ref(5000)

        const handleRange = ($event) => {
            if ($event.target.dataset.range === 'min') {
                let minVal = parseInt($event.target.value)
                progressMin.value = (minVal / $event.target.max) * 100
                minPrice.value = minVal
                emit('filter:price', { min: minPrice.value })
            } else if ($event.target.dataset.range === 'max') {
                let maxVal = parseInt($event.target.value)
                progressMax.value = 100 - (maxVal / $event.target.max) * 100
                progressMax.value = progressMax.value * 2
                maxPrice.value = maxVal
                emit('filter:price', { max: maxPrice.value })
            }
        }

        return {
            handleRange,
            progressMin,
            progressMax,

            maxBtn,
            minBtn,

            maxPrice,
            minPrice,
        }
    },
}
</script>

<style>
</style>