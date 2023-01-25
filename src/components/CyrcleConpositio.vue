<template>
    <div>
    <h2>ciclo de un componente con compositio api</h2>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, onUpdated} from 'vue'
onMounted(()=>{
    console.log('montando el componente')
})

onUpdated(() => {
    console.log('actaulizado el componente')

})
</script>

<style scoped>

</style>