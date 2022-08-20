<template>
    <div class="drop-info">
        <div class="drop-info_item" v-for="item in info" :key="item.title">
            <div class="drop-info_title" @click="handleDrop(item.title)">
                {{ item.title }}
            </div>
            <div class="drop-info_description" v-show="current === item.title">
                {{ item.desc }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['info'],

    setup(props) {
        const isDropped = ref(false)
        const current = ref(null)

        const handleDrop = (title) => {
            if (current.value === null) {
                current.value = title
                return
            }

            if (current.value) {
                if (current.value === title) {
                    current.value = null
                    return
                } else {
                    current.value = title
                }
            }
        }

        return {
            isDropped,
            handleDrop,
            current,
        }
    },
}
</script>

<style>
</style>