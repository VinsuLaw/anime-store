<template>
    <div class="modal-overlay" @click="$emit('modal:close')">
        <div class="modal_wrap">
            <div class="modal" @click.stop="">
                <div class="modal__content">
                    <h2 class="modal-title">{{ title }}</h2>
                    <h3 class="modal-body" v-if="body">{{ body }}</h3>

                    <div class="btns">
                        <button
                            class="btn"
                            @click.stop.prevent="$emit('modal:close')"
                        >
                            Cancel
                        </button>
                        <button
                            class="btn danger"
                            @click.stop.prevent="$emit('modal:action')"
                        >
                            {{ action }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'body', 'action'],
    emits: ['modal:close', 'modal:action'],
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/_mixins.scss';

.modal-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 9999;
}
.modal_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.modal {
    background-color: white;
    border-radius: 3px;
    @include undoSelection();
}
.modal__content {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
}
.modal-title {
    color: $font-primary-color;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
}
.modal-body {
    color: $icons-color;
    font-size: 14px;
    font-weight: 400;
}
.btns {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .btn {
        margin-right: 10px;
        &:last-child {
            margin-right: 0px;
        }
        border: 1px solid $border-card;
        border-radius: 3px;
        background-color: $border-card;
        outline: none;
        font-weight: 500;
        font-size: 13px;
        cursor: pointer;
        color: $font-primary-color;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 8px;
        padding-bottom: 8px;
        &:hover {
            border: 1px solid $font-primary-color;
        }
    }
    .danger {
        border: none;
        color: white;
        background-color: $app-theme-color;
        transition: background-color 0.1s ease;
        &:hover {
            border: none;
            background-color: $hover-btn;
            transition: background-color 0.1s ease;
        }
    }
}
</style>