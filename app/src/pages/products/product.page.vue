<template>
    <div class="container mt-5">
        <h1 class="title">Kagamine Rin</h1>
        <div class="rating__preview">
            <span class="material-icons active"> star_rate </span>
            <span class="material-icons"> star_rate </span>
            <span class="material-icons"> star_rate </span>
            <span class="material-icons"> star_rate </span>
            <span class="material-icons"> star_rate </span>
        </div>

        <div class="product-item mt-2">
            <div class="product-item_img">
                <img src="../../assets/product-item-1.jpeg" alt="" />
            </div>
            <div class="product-item__buy">
                <div class="price">
                    <div class="title">Price</div>
                    <div class="value">29.99 $</div>
                </div>
                <button>Add to cart</button>
                <button class="added" v-if="false">Added to cart</button>
            </div>
        </div>

        <div class="product-item_description mt-5">
            <h2 class="title">Description</h2>

            <p class="mt-1">
                Nendoroid Natsumi Koshigaya, также известной как «Nattsun», из
                комедийного аниме «Non Non Biyori»! У нее три лицевых панели,
                включая стандартное, улыбающееся и подмигивающее выражение
                лица.Она идет в комплекте со своей школьной сумкой и «Hikarimono
                Boss», «хозяином» пруда, пойманным Natsumi во время рыбалки.
                Natsumi также может быть изображена в очках своего старшего
                брата Suguru, что придает ей озорной вид. Обязательно добавьте
                её в свою коллекцию!
            </p>
        </div>

        <div class="product-item__reviews mt-5">
            <h1 class="title">Reviews</h1>

            <div class="mt-2">
                <CreateReview />
            </div>

            <div class="mt-2">
                <Review />
            </div>
        </div>
    </div>

    <div class="mt-100"></div>
</template>

<script>
import CreateReview from '../../components/ui/my-review.vue'
import Review from '../../components/ui/review.component.vue'

export default {
    components: { CreateReview, Review },

    setup() {
        document.title = 'Kagamine Rin - GaruDemo store'
        window.scrollTo(0, 0)
    },
}
</script>

<style>
</style>