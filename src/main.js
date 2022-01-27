import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
Vue.use(ElementUI);
import router from './router'
Vue.config.productionTip = false
import store from './store'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
