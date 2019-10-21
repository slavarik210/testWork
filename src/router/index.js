import Vue from 'vue'
import VueRouter from 'vue-router'
import Green from '../views/Green.vue'
import Yellow from '../views/Yellow.vue'
import Red from '../views/Red.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/green',
    name: 'green',
    component: Green,
    props: true
  },
  {
    path: '/red',
    name: 'red',
    component: Red,
    props: true
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
