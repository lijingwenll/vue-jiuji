import Vue from 'vue'
import Router from 'vue-router'
import HeaderCom from '@/components/HeaderCom'
import Classification from '@/components/Classification'

Vue.use(Router)

export default new Router({
	mode: "hash",
  routes: [
    {
      path: '/',
      name: 'HeaderCom',
      component: HeaderCom
    },
    {
    	path: '/class',
    	name: 'Classification',
    	component: Classification
    },
  ]
})
