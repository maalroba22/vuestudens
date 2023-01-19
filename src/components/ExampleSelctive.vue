<template>
    <h2>Ejemplo uso V-if </h2>
    <h1 v-if="age > 18">Eres mayor de edad</h1>
    <h1 v-else >Eres menor de Edad</h1>

    <!-- v-show -->
    <h2>Ejemplo uso V-Show </h2>
    <h1 v-show="age > 18">Eres mayor de edad</h1>
    <h1 v-show="age < 18">Eres menor de edad</h1>

</template>

<script lang="ts" setup>
let age = 14;
</script>


<style scoped>

</style>