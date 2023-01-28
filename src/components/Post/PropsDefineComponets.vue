<template>
    <div class="post">
        <h3> {{props.title}}</h3>
        <p>{{props.content}}</p>
        <input type="text" v-model="message"/>
        <button @click="handleClickSaludar">Saludar</button>
    </div>
</template>

<script lang="ts" >

import { defineComponent,Ref,ref } from 'vue'
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

    emits:['soyhai'],
    setup(props,{emit}){
        const handleClickSaludar =()=>{
           emit("soyhai",message.value)
        }

        let message:Ref<string> = ref("")
        return {props,message,handleClickSaludar}
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