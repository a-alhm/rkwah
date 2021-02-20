import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main.vue'
import talent from '../components/talent.vue'
import expert from '../components/expert.vue'
import investor from '../components/investor.vue'
import options from '../components/options.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:"*",
    redirect: "/"
  },
  {
    path:"/options",
    name: 'options',
    component: options
  },
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/talent',
    name: 'talent',
    component: talent
  },
  {
    path: '/expert',
    name: 'expert',
    component: expert
  },
  {
    path: '/Investor',
    name: 'Investor',
    component: investor

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
