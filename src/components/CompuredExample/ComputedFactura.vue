<template>
    <div>
    <h1 v-custon-size:xl>Facturas usando Computed</h1>

    <input type="number" name="" id="" v-model="subTotal">
   <h2 v-custon-font.blue>Total Iva :{{ totalIva }}  ({{ iva }}%)</h2>
    </div>
</template>

<script lang="ts" setup>

import {ref,Ref,computed} from 'vue'

const iva = 19
let subTotal:Ref<number> =ref(0)

const totalIva =computed(()=> (iva * subTotal.value)/100)

</script>

<style scoped>

</style>