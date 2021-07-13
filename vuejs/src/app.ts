import { createApp, defineComponent } from 'vue';

const RootComponent = defineComponent({
  // type inference enabled
  /* options */
})


const app = createApp(RootComponent)
const vm = app.mount('#app')
