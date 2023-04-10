import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import BlogHome from '../views/home/BlogHome.vue'
import BlogLogin from '../views/auth/BlogLogin.vue'
import BlogRegister from '../views/auth/BlogRegister.vue'
import ArticleDetail from '../views/articles/ArticleDetail.vue'
import BlogNewArticle from '../views/articles/BlogNewArticle.vue'
import BlogEditArticle from '../views/articles/BlogEditArticle.vue'
import store from '../store/index'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/login',
    name: 'login',
    component: BlogLogin
  },
  {
    path: '/register',
    name: 'register',
    component: BlogRegister
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: BlogHome
      },
      {
        path: '/articles/:slug?',
        name: 'articles-detail',
        component: ArticleDetail
      },
      {
        path: '/new-article',
        name: 'new-article',
        component: BlogNewArticle,
        beforeEnter: (to, from, next) => {
          console.log(store.state.auth);
          const checkLogin = localStorage.getItem('user')
          console.log(checkLogin);
          if (!checkLogin) {
            next({ path: '/login' })
          } else {
            next();
          }
        }
      },
      {
        path: '/edit-article/:slug?',
        name: 'edit-article',
        component: BlogEditArticle,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
