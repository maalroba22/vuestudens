<template>
    <div>
        <p v-custon-size:sm>Example cadena invertida</p>

        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h2 v-custon-size:xl >{{ reverse }}</h2>

    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue'

let message: Ref<string> = ref("")
const reverse = computed(() => message.value.split('').reverse().join(''))


</script>

<style scoped>

</style>