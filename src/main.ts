import { createApp } from 'vue'
import App from './App.vue'


/* createApp(App).mount('#app') -> original  */

/* montando directivas personalizadas */
const app = createApp(App)

app.directive('font-size', {
   beforeMount: (el, binding) => {
      el.style.fontSize = "50px"
   }

})

app.directive('custon-size', {
   beforeMount(el, binding) {
      //el.style.fontSize = binding.value + "px" // recibiendo un paramtro
      /* recibiendo argumentos */
      let size = 18
      switch (binding.arg) {
         case 'sm':
            size = 20
            break;
         case 'md':
            size = 25
            break;
         case 'lg':
            size = 30
            break;
         case 'xl':
            size = 40
            break;
         case 'xxl':
            size = 125
            break;
      }
      el.style.fontSize = size + "px"
   }

})


/* modificadores */

app.directive('custon-font', {

   beforeMount(el, binding) {
      let size = 18
      if (binding.modifiers.sm) {
         size = 10
      } else if (binding.modifiers.xl) {
         size = 25
      } else if (binding.modifiers.xxl) {
         size = 40
      }

         el.style.fontSize = size + "px"

      if (binding.modifiers.red) {
         el.style.color = "red"
      }
      if (binding.modifiers.blue) {
         el.style.color = "blue"
      }
      if (binding.modifiers.green) {
         el.style.color = "green"
      }

   }
})

app.mount('#app')

