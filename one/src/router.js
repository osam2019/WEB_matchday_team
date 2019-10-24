import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	 {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mygame',
      name: 'mygame',
      component: () => import(/* webpackChunkName: "about" */ './views/Mygame.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: '/hostgame',
      name: 'hostgame',
      component: () => import(/* webpackChunkName: "about" */ './views/Hostgame.vue')
    },
	{
      path: '/showgame',
      name: 'showgame',
      component: () => import(/* webpackChunkName: "about" */ './views/Showgame.vue')
    },
	{
      path: '/showendgame',
      name: 'showendgame',
      component: () => import(/* webpackChunkName: "about" */ './views/Showendgame.vue')
    },
  ]
})
