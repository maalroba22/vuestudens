<template>
    <h2>Ejemplo del V-For con Array</h2>

    <ul>
        <li v-for="Element in countries" v-bind:key="Element">{{ Element }}</li>
    </ul>

    <h2>Ejemplo del V-For con Array de Objetos</h2>

    <ul>
        <li v-for="per in persona" :key="per.id">{{ per.name }}</li>
    </ul>

</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'

let countries:Ref<Array<string>> = ref([
                    'España',
                    'Colombia',
                    'brazil',
                    'venezuela',
                    'Agentina'
])

interface Ipersona{
    id:number,
    name:string
}

let persona:Ref<Array<Ipersona>> = ref([
    { id:1, name:'Manuel'},
    { id:2, name:'Inelsa'},
    { id:3, name:'Ximena'},
    { id:4, name:'Emanuel'},
    { id:5, name:'Robert'},
])


</script>

<style scoped>

</style>