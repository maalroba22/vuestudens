import { createApp } from 'vue'
import App from './App.vue'


/* createApp(App).mount('#app') -> original  */

/* montando directivas personalizadas */
 const app = createApp(App)

 app.directive('font-size',{
    beforeMount: (el,binding)=>{

    }
    
 })
 
 app.mount('#app') 

