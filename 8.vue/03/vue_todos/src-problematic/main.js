import Vue from 'vue'
import App  from './App'
import './styles/common.css'
Vue.config.productionTip = false

new Vue({
  render:(h)=>h(App)
}).$mount('#app')