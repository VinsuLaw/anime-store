<template>
    <div class="product-card">
        <div class="product-card_img">
            <router-link to="/product/5454">
                <img src="../../assets/product-2.jpeg" alt="" />
            </router-link>
        </div>
        <router-link to="/product/5454" class="product-card_name">
            Моб Психо 100. Том 2.
        </router-link>

        <div class="row mt-2 space-beetwen">
            <div class="product-card_price">
                <p>Price</p>
                <div>
                    <span>20</span>
                    <span> $</span>
                </div>
            </div>

            <button class="product-card_btn">Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>