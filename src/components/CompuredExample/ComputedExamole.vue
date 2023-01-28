<template>
    <div>
        <h1>Example cadena invertida</h1>

        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h2>{{ reverse }}</h2>

    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue'

let message: Ref<string> = ref("")
const reverse = computed(() => message.value.split('').reverse().join(''))


</script>

<style scoped>

</style>