<template>
    <div class="news__item">
        <router-link to="/news/35435" class="news__item-title"
            >Japanese tsuya!</router-link
        >
        <p class="news__item-date">20.09.2022</p>

        <div class="news__item_img-container">
            <router-link
                to="/news/35435"
                :style="cssProps"
                class="news__item-img"
            >
                <!--<img src="../../assets/news-1.png" alt="" />
            -->
            </router-link>
        </div>

        <p class="news__item-desc">
            С 10 по 12 июня включительно, успейте порадовать себя новенькими
            книгами и фигурками со скидками до 15%*
        </p>

        <router-link to="/news/35435" class="news__item-btn">
            More
        </router-link>
    </div>
</template>

<script>
export default {
    setup() {
        return {
            cssProps: {
                backgroundImage: `url(${require('@/assets/news-2.png')})`,
                display: 'block',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            },
        }
    },
}
</script>

<style>
</style>