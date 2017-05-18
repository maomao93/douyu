// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/routers'
import vueAxios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {reset} from '@/assets/css/reset.css'
import {iconfont} from '@/assets/font/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  error: "",//没加载出来显示图片
  loading: '',//loading
  try: 5 // default 1
})

Vue.prototype.$http = vueAxios
/* eslint-disable no-new */
new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
