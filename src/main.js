import Vue from 'vue'
import App from './App.vue'
import VueScrollmagic from 'vue-scrollmagic'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vuescroll from 'vuescroll';

Vue.use(Buefy)
Vue.use(VueScrollmagic)
Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: 'App' // customize component name, default -> vueScroll
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
