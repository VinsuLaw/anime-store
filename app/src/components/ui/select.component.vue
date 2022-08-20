<template>
    <div class="select">
        <h4 class="select_label">{{ label }}</h4>

        <div
            :class="['select__wrap', { active: isExpanded }]"
            @click="handleExpand"
        >
            <div class="row">
                <div class="select_default" v-show="!selected">Select</div>
                <div class="select_default-selected" v-show="selected">
                    <div class="new-selected">{{ selected }}</div>
                    <div class="x-dot__container">
                        <div class="x-dot__content">
                            <div class="x-dot" @click.stop="handleUnselect">
                                &#10006;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select_expand">
                    <span class="material-icons"> expand_more </span>
                </div>
            </div>
            <ul class="select__menu" v-show="isExpanded">
                <li
                    class="select_item"
                    v-for="item in data"
                    :key="item"
                    @click="handleSelect(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    props: ['label'],
    emits: ['select:selected'],

    setup(_, { emit }) {
        const data = ref(['New', 'Price', 'Popular'])
        const isExpanded = ref(false)
        const selected = ref(null)

        const $store = useStore()

        const handleExpand = () => {
            isExpanded.value = !isExpanded.value
        }

        const handleSelect = (item) => {
            selected.value = item
            emit('select:selected', item)
        }

        const handleUnselect = () => {
            selected.value = null
            emit('select:selected', null)
        }

        watch(
            () => $store.state.closeSelects,
            (value) => {
                if (value === true) {
                    isExpanded.value = false
                }
            }
        )

        return {
            data,
            isExpanded,
            handleExpand,
            handleSelect,
            selected,
            handleUnselect,
        }
    },
}
</script>

<style>
</style>