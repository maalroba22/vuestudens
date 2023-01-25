<template>
    <div>
            <h2>hola </h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"cyrcleOption",
    
    created(){
        console.log('creado')
    },
    mounted(){
        console.log('montado')
    },
    updated(){
    console.log('update')
    }
    
})

</script>

<style>

</style>