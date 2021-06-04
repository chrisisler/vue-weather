import Vue from 'vue'
import Toasted from 'vue-toasted';

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 4000,
  singleton: true
});