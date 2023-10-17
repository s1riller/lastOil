
import { createApp } from 'vue'
import App from '/App.vue'
import router from "/router/index.js";




import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

import components from '/components/index.js';



const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})




app

  .use(router)
  .mount('#app');
