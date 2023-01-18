<template>
    <div class="post_card">
        <h3>Tutulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias quis inventore itaque! Nobis
            provident commodi fuga corrupti doloremque labore rerum culpa adipisci perspiciatis debitis? Rerum natus at
            id accusamus!</p>
            <PostBotton/>
    </div>
</template>

<script lang="ts" setup>
import PostBotton from './PostBotton.vue';
</script>

<style scoped>
.post_card {
    border-radius: 16px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>