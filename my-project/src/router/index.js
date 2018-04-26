import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
