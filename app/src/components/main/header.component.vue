<template>
    <header class="header">
        <div class="header__container container">
            <ul class="header__nav">
                <li>
                    <router-link to="/manga">Manga</router-link>
                </li>
                <li>
                    <router-link to="/ranobe">Ranobe</router-link>
                </li>
                <li>
                    <router-link to="/figures">Anime figures</router-link>
                </li>
            </ul>
            <div class="header__search_container">
                <input type="text" class="header__search" />
                <span class="material-icons">search</span>
            </div>

            <div class="header__buttons">
                <div class="header__buttons_container">
                    <router-link to="/cart" class="header_btn">
                        <span class="material-icons">shopping_cart</span>
                    </router-link>
                    <router-link to="/favorites" class="header_btn">
                        <span class="material-icons">favorite_border</span>
                    </router-link>
                </div>

                <div class="header__authorization-btns">
                    <router-link to="/registration">Registration</router-link>
                    <router-link to="/login">Login</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style>
</style>