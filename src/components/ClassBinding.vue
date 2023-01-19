<template>
    <div>
        <h2>Bindeo de clases</h2>
        <p v-bind:class="{ 'error': hasError }">El mensage se ha enviado satifactoriamente</p>
    
        <h2>Bindeo de Style</h2>
        <p v-bind:class="{ 'error': hasError }">El mensage se ha enviado satifactoriamente</p>
    
    
    </div>
</template>
<script lang="ts" setup>
let hasError = true
</script>

<style scoped>
.error {
     color: red;
 }

 .succes {
     color: chartreuse;
 }
</style>