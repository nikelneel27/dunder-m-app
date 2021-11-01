import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import VTooltip from "v-tooltip";
import { store } from './store'


Vue.use(VTooltip);



Vue.use(ToggleButton)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
