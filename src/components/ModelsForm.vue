<template> 
<h1> Formulario</h1>
<form action="">
    <input type="text" name="dato" id="dato" v-model="inputText">
    <h3>{{ inputText }}</h3>
    <input type="checkbox" name="terminos" id="terminos" v-model="acepto">Acepto los Terminos y Condiciones
    <select name="pais" id="pais" v-model="pais ">
        <option value="col">Colombia</option>
        <option value="arg">Argentina</option>
        <option value="per">Peru</option>
    </select>
</form>
</template>

<script lang="ts" setup>
import {ref ,Ref}from 'vue'
    let inputText:Ref<string> = ref('')
    let acepto = ref(true)
    let pais = ref('col')
</script>

<style scoped></style>