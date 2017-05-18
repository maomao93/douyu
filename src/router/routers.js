import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import index1 from '@/components/index/index1'
import indexall from '@/components/index_list/index_all'
import hotsearch from '@/components/hotS/hotSearch'

Vue.use(Router)

const routes = [
  { path: '*', component: index },
  { path: '/index1', component: index1 },
  { path: '/indexall', component: indexall },
  { path: '/hotsearch', component: hotsearch }
]


const router = new Router({
	mode: 'history',
	routes
})

 export default router