
import App from './App.vue'
import router from "@/router/";
import { createApp } from 'vue'



import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

import components from '@/components/';



const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})




app

  .use(router)
  .mount('#app');
