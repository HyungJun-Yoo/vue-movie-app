import { createApp } from 'vue'
import App from './App.vue'
/* index.js 생략 가능 */
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

/* .use() 특정한 플러그인 연결 */
createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')