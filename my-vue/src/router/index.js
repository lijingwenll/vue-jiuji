import Vue from 'vue'
import Router from 'vue-router'
import HeaderCom from '@/components/HeaderCom'
import Classification from '@/components/Classification'
import Detail from '@/components/Detail'
import MineCom from '@/components/MineCom'
import Register from '@/components/Register'
import Login from '@/components/Login'

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
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
    	path: '/class',
    	name: 'Classification',
    	component: Classification
    },
    {
      path: '/mine',
      name: 'MineCom',
      component: MineCom
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
