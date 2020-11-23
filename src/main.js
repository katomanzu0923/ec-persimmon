import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Top from './components/Top.vue'
import Buy from './components/Buy.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false
Vue.component("Header", Header)
Vue.component("Top", Top)
Vue.component("Buy", Buy)
Vue.component("About", About)
Vue.component("Contact", Contact)


new Vue({
  render: h => h(App),
}).$mount('#app')
