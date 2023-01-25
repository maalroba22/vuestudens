<template>
    <div class="post">
        <h3> {{props.title}}</h3>
        <p>{{props.content}}</p>
    </div>
</template>

<script lang="ts" >

import { defineComponent } from 'vue'
export default defineComponent({

    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: "Post sin contenido"

        }

    },
    setup(props){
        return {props}
    }


})

</script>

<style scoped>
.post {
    width: 300px;
    height: 250px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>