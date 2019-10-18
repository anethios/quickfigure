import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCurrencyFilter from 'vue-currency-filter'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

Vue.use(BootstrapVue)
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.'
  })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
