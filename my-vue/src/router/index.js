import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classification from '@/components/Classification'

Vue.use(Router)

export default new Router({
		mode: "hash",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/class',
    	name: 'Classification',
    	component: Classification
    },
  ]
})
