import Vue from 'vue'
import Router from 'vue-router'


const Home = resolve => require(['../pages/Home'], resolve)
const News = resolve => require(['../pages/News'], resolve)
const About = resolve => require(['../pages/About'], resolve)
const NotFount = resolve => require(['../pages/notfoned'], resolve)
// const Home = resolve => require(['../'], resolve)
Vue.use(Router)

const originalPush = Router.prototype.push

// 解决报错 ： 避免到当前位置的冗余导航。
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    },
    {
      path: '*',
      meta: { requireAuth: true },
      component: NotFount
    }
  ],
  //跳转路由的时候，返回到页面的最顶部最左部
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
