<template>
    <h3>{{ counter}} </h3>
    <button @click="addCounter">Incrementar</button>
    <button @click="susCounter">Decrement</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'CounterOption',
    components:{},
    data(){
        let counter =0
        return {counter}
    },
    methods:{
        addCounter(){
            this.counter++
        },
        susCounter(){
            if(this.counter === 0){
                alert('no se pude segir quitando')
                return
            }
            this.counter--
        }
    }
})
    
</script>

<style>
</style>