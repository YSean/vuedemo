import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'

//import './styles/index.scss'
import './common/style.css' // 这里需要引入基本的样式
import './styles/index.css' // 这里需要引入基本的样式
import './base/keyboard/cc-sk-2.5.0.css'
// /* eslint-disable no-unused-vars */  // 这一句必须写，用来规避ES6的语法检测
// import vConsole from 'vconsole'  // 针对手机网页的前端 console 调试面板
// console.log('test')
Vue.use(MintUI)
Vue.config.devtools = true; //打开vue-devtools
Vue.use(VueLazyLoad, {
  loading: require('./assets/lazy.png')
})

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
var VueDemo = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
