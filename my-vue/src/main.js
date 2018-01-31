import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import FooterCom from './components/FooterCom'

Vue.component("FooterCom",FooterCom)

Vue.config.productionTip = false;
Vue.use(MintUI);

new Vue({
  el: '#app',
  router,
  MintUI,
  store,
  components: { App },
  template: '<App/>'
})
