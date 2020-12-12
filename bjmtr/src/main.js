import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import qs from 'qs'

axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.prototype.axios = axios;
Vue.prototype.moment = moment;
Vue.prototype.qs=qs;
Vue.config.productionTip = false

//导入Mint模块
import MintUi from "mint-ui";
//导入样式文件
import "mint-ui/lib/style.min.css";
Vue.use(MintUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
