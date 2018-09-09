/*global Vue:true*/
/*eslint no-undef: "error"*/
import Router from 'vue-router'
import IndexVue from '@/pageview/pc/index'
import GroupBuyingVue from '@/pageview/pc/group_shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'IndexVue',
      component: IndexVue
    }, {
      path: '/group_buy',
      name: 'GroupBuyingVue',
      component: GroupBuyingVue
    }
  ]
})
