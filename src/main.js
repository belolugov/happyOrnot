import Vue from 'vue'
import App from './App.vue'
import reviewPage from "./components/reviewPage";
import List from './components/List.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: List, meta: {
      title: "List of questions for customer review"
    }
  },
  { path: '/reviewPage/:text', component: reviewPage, name: 'review', meta: {
      title: "Review", props:true
    }
  },
   ]
const router = new VueRouter({
  routes:routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app')
