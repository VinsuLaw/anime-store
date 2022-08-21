<template>
    <div class="container mt-4">
        <h1 class="title">About us</h1>

        <p class="info__about-text">
            Интернет-магазин аниме-товаров является фирменным магазином
            одноименного издательства манги и комиксов. Здесь вы сможете купить
            продукцию нашего издательства из первых рук по самым низким ценам и
            получить ее в самые кратчайшие сроки.
        </p>

        <h2 class="title mt-2">
            В нашем интернет-магазине доступны следующие товары:
        </h2>

        <div class="payment__info_items mt-1">
            <p>1. Manga</p>
            <p>2. Ranobe</p>
            <p>3. Anime figures</p>
        </div>
    </div>

    <div class="mt-100"></div>
</template>

<script>
export default {
    setup() {
        document.title = 'About - GaruDemo store'
        window.scrollTo(0, 0)
    },
}
</script>

<style>
</style>