
import PostDetails from './PostDetails.vue';

<template>
    <div class="container">
        <PostDetails v-for="el in info" :key="el.title" :title="el.title" :content="el.content" @soyhai="showAlert" />
       
    </div>

</template>

<script lang="ts" setup>
import PostDetails from './PostDetails.vue';


interface Ipost {
    title:string,
    content:string
}

let info:Array<Ipost> = [
    {
        title: 'Post 1',
        content: 'Texto de Ejemplo 1'
    },
    {
        title: 'Post 2',
        content: 'Texto de Ejemplo 2'
    },
    {
        title: 'Post 3',
        content: 'Texto de Ejemplo 3'
    },
    {
        title: 'Post 4',
        content: 'Texto de Ejemplo 4'
    },
    {
        title: 'Post 5',
        content: 'Texto de Ejemplo 5'
    }

]

function showAlert(msg:string){
    alert(msg)
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

}
</style>