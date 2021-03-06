import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 登陆注册
    {
      path: '/',
      redirect: '/HomePage'
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        isLogin: false
      },
      component: () => import('../view/Land')
    },
    {
      path: '/RegiSter',
      name: 'RegiSter',
      meta: {
        isLogin: false
      },
      component: () => import('../view/RegiSter')
    },

    // 首页
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../view/HomePage')
    },
    {
      path: '/Information',
      name: 'Information',
      component: () => import('../view/Information')
    },
    {
      path: '/TobeDeveloped',
      name: 'TobeDeveloped',
      component: () => import('../components/TobeDeveloped')
    },

    // 导航
    {
      path: '/CommodityDetails/:list',
      name: 'CommodityDetails',
      component: () => import('../view/Navigation/CommodityDetails.vue')
    },
      // 分类页
    {
      path: '/ClassificationPage',
      name: 'ClassificationPage',
      component: () => import('../view/Navigation/ClassificationPage.vue')
    },
    {
      path: '/SecondHand',
      name: 'SecondHand',
      component: () => import('../view/Navigation/SecondHand.vue')
    },
    {
      path: '/Losthome',
      name: 'Losthome',
      component: () => import('../view/LostandFound/Losthome.vue')
    },
    {
      path: '/addviews',
      name: 'addviews',
      component: () => import('../view/LostandFound/AddViews.vue')
    },
      // 资讯更多页面
    {
      path: '/CampusInformation',
      name: 'CampusInformation',
      meta: {
        isLogin: false
      },
      component: () => import('../view/CampusInformation')
    },
    // 发现
    {
      path: '/Find',
      name: 'Find',
      component: () => import('../view/Find')
    },
    {
      path: '/DynamicPublishing',
      name: 'DynamicPublishing',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Dynamic/DynamicPublishing.vue')
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Dynamic/Dynamic.vue')
    },
    // 我的
    {
      path: '/MyHome',
      name: 'MyHome',
      component: () => import('../view/MyHome.vue')

    },
    {
      path: '/aaa',
      name: 'aaa',
      meta: {
        isLogin: true
      },
      component: () => import('@/components/aaa')
    },
    {
      path: '/help',
      name: 'Help',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Myhome/Help')
    },
    {
      path: '/MyDynamic',
      name: 'MyDynamic',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Dynamic/MyDynamic.vue')
    },
    {
      path: '/setup',
      name: 'Setup',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Myhome/Set/Setup')
    },
    {
      path: '/CurrentVersion',
      name: 'CurrentVersion',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Myhome/Set/CurrentVersion')
    },
    {
      path: '/myviews',
      name: 'myviews',
      meta: {
        isLogin: true
      },
      component: () => import('../view/Myviews')
    }
  ]
})
