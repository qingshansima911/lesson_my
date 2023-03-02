import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

// console.log(store.state.count, '/////');
// store.state = { a: 2 };
const app = createApp(App)
app
    .use(store)
    .mount('#app')
