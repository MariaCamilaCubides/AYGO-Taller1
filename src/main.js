import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
