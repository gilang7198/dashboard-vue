import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
// import Axios from 'axios';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
// Vue.use(Axios);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
