import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home';
import News from '../pages/News'
import About from '../pages/About'


// const Home = resolve => require(['../'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  //跳转路由的时候，返回到页面的最顶部最左部
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
