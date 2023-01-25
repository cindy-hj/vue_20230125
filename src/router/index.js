import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataEx from '../views/DataEx.vue'
import IfShow from '../views/IfShow.vue'
import ListRender from '../views/ListRender.vue'
import EventEx from '../views/EventEx.vue'
import ComputedWatch from '../views/ComputedWatch.vue'
import ComponentsEx from '../views/ComponentsEx.vue'
// ./ 현재 위치에서 파일, 폴더를 찾아 경로 지정 
// ../ 현재 위치에서 나가서 파일, 폴더를 찾아 경로 지정

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about', // 페이지명
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'databinding',
    component: DataBinding
  },
  {
    path: '/data',
    name: 'data',
    component: DataEx
  },
  {
    path: '/ifshow',
    name: 'ifshow',
    component: IfShow
  },
  {
    path: '/listrender',
    name: 'listrender',
    component: ListRender
  },
  {
    path: '/event',
    name: 'event',
    component: EventEx
  },
  {
    path: '/computedwatch',
    name: 'computedwatch',
    component: ComputedWatch
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsEx
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
