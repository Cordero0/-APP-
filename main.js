import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'
import uView from "uview-ui"

Vue.use(uView);
Vue.config.productionTip = false
// 数据请求,参数为对象
Vue.prototype.$myRequest = myRequest

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
