import Vue from 'vue'
import Router from 'vue-router'
import MatchHistory from '@/components/MatchHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MatchHistory',
      component: MatchHistory
    }
  ]
})
