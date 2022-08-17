<template>
    <footer>
        <div class="footer__container container">
            <div class="row space-beetwen">
                <div class="footer__contact">
                    <h2>+1 (111) 000-00-00</h2>
                    <div class="footer__socials">
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
                </div>
                <div class="footer__banks">
                    <div class="item">
                        <img src="../../assets/visa-icon.svg" alt="" />
                    </div>
                    <div class="item">
                        <img src="../../assets/mastercard-icon.svg" alt="" />
                    </div>
                    <div class="item">
                        <img src="../../assets/kassa-icon.svg" alt="" />
                    </div>
                </div>
            </div>

            <div class="row space-beetwen mt-2">
                <div class="rights-reserved">
                    © Anime online store GaruDemo 2005-2022. All rights
                    reserved.
                </div>

                <div class="footer__policy">
                    <router-link to="/privacy-policy">
                        Privacy policy
                    </router-link>
                    <router-link to="/user-agreement">
                        User agreement
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style>
</style>