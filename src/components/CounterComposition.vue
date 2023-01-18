<template>
    <h3> {{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
/* explicacion del setup */
//import { defineComponent,Ref ,ref} from 'vue';
/* export default defineComponent({
    name:'ComponetComposition',
    setup(){
        let counter:Ref= ref(0)
        const addCounter =():void =>{
            counter.value++
        }
        return {counter, addCounter}
    }

}) */
let counter: Ref = ref(0)
const addCounter = (): void => {
    counter.value++
}

</script>