import Vue from 'vue'
import Router from 'vue-router'
import shoppingcart from '@/components/shoppingcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingcart',
      component: shoppingcart
    }
  ]
})
