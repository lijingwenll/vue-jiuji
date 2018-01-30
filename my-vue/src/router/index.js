import Vue from 'vue'
import Router from 'vue-router'
import Classification from '@/components/Classification'

Vue.use(Router)

export default new Router({
		mode: "hash",
  routes: [
   
    {
    	path: '/class',
    	name: 'Classification',
    	component: Classification
    },
  ]
})
