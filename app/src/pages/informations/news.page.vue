<template>
    <div class="container mt-4">
        <h1 class="title">News</h1>

        <div class="news__container mt-5">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>

        <div class="mt-100"></div>
    </div>
</template>

<script>
import NewsItem from '../../components/ui/news.component.vue'

export default {
    components: { NewsItem },
}
</script>

<style>
</style>