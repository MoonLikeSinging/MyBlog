import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './icons/iconfont.css'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import APlayer from '@moefe/vue-aplayer';

Vue.config.productionTip = false

Vue.use(
  VueLazyLoad, {
    preLoad: 1.3,
    error: require('./assets/img/loading.gif'),
    loading: require('./assets/img/loading.gif'),
    attempt: 1,
    lazyComponent: true
})

Vue.use(
  APlayer, {
  defaultCover: require('./assets/img/long.jpg'),
  productionTip: false,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')