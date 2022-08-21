<template>
    <div class="create-review">
        <div class="avatar">A</div>

        <form class="form-controlls">
            <div class="form-control">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                />
            </div>

            <div class="form-control">
                <textarea
                    rows="5"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                ></textarea>
            </div>

            <div class="create-review__rating__container">
                <div class="create-review__rating">
                    <div class="title">Your rate:&nbsp;</div>
                    <div class="create__reting-rate">
                        <span class="material-icons active"> star_rate </span>
                        <span class="material-icons"> star_rate </span>
                        <span class="material-icons"> star_rate </span>
                        <span class="material-icons"> star_rate </span>
                        <span class="material-icons"> star_rate </span>
                    </div>
                </div>

                <button class="create-review__submit">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>