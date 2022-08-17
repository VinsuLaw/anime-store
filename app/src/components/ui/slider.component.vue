<template>
    <div class="slider">
        <div class="slider__content">
            <div
                :class="[
                    'item',
                    { 'animate-right': toWhere === 'next' },
                    { 'animate-left': toWhere === 'prev' },
                ]"
                v-show="current === 1"
            >
                <img src="../../assets/slider/slider-1.png" alt="" />
            </div>

            <div
                :class="[
                    'item',
                    { 'animate-right': toWhere === 'next' },
                    { 'animate-left': toWhere === 'prev' },
                ]"
                v-show="current === 2"
            >
                <img src="../../assets/slider/slider-2.png" alt="" />
            </div>

            <div
                :class="[
                    'item',
                    { 'animate-right': toWhere === 'next' },
                    { 'animate-left': toWhere === 'prev' },
                ]"
                v-show="current === 3"
            >
                <img src="../../assets/slider/slider-3.png" alt="" />
            </div>

            <div
                :class="[
                    'item',
                    { 'animate-right': toWhere === 'next' },
                    { 'animate-left': toWhere === 'prev' },
                ]"
                v-show="current === 4"
            >
                <img src="../../assets/slider/slider-4.png" alt="" />
            </div>

            <div
                :class="[
                    'item',
                    { 'animate-right': toWhere === 'next' },
                    { 'animate-left': toWhere === 'prev' },
                ]"
                v-show="current === 5"
            >
                <img src="../../assets/slider/slider-5.png" alt="" />
            </div>
        </div>

        <span class="slider__control-prev material-icons" @click="handlePrev">
            chevron_left
        </span>
        <span class="slider__control-next material-icons" @click="handleNext">
            chevron_right
        </span>
    </div>
    <div class="slider__pagination">
        <div class="slider__pagination_container">
            <div
                :class="['dot', { active: current === i }]"
                v-for="i in count"
                :key="i"
                @click="handlePaginate(i)"
            >
                &#9679;
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const current = ref(1)
        const count = ref(5)
        const toWhere = ref('')

        const handleNext = () => {
            toWhere.value = 'next'
            if (current.value === 5) {
                current.value = 1
            } else {
                current.value++
            }
        }

        const handlePrev = () => {
            toWhere.value = 'prev'
            if (current.value === 1) {
                current.value = 5
            } else {
                current.value--
            }
        }

        const handlePaginate = (i) => {
            if (current.value < i) {
                toWhere.value = 'next'
                current.value = i
            } else {
                toWhere.value = 'prev'
                current.value = i
            }
        }

        return {
            count,
            current,
            handleNext,
            handlePrev,
            toWhere,
            handlePaginate,
        }
    },
}
</script>

<style>
</style>