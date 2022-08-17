<template>
    <div class="header-nav container">
        <router-link to="/">
            <img src="../../assets/store.png" class="header-nav_logo" />
        </router-link>
        <ul class="header-nav__navigation">
            <li><router-link to="/news">News</router-link></li>
            <li>
                <router-link to="/payment">Payment and delivery</router-link>
            </li>
            <li>
                <router-link to="/refund">Refund and warranty</router-link>
            </li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
        </ul>
        <div class="header-nav__socials">
            <a href="#">
                <img src="../../assets/vk-icon.svg" alt="" />
            </a>
            <a href="#">
                <img src="../../assets/telegram-icon.svg" alt="" />
            </a>
            <a href="#">
                <img src="../../assets/tiktok-icon.png" alt="" />
            </a>
        </div>
        <div class="header-nav__calling">
            <span>Calls 9:00-18:00 (TKY)</span>
            <h3>+1 (111) 000-00-00</h3>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>