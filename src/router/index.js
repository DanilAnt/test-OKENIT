import VueRouter from 'vue-router'
 import Home from '../views/Home.vue';
import PostView from '../views/PostView.vue';
// import AddTodo from '../views/AddTodo.vue';
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path : '/',
    name : 'home',
    component : Home
  },
//   {
//     path : '/add',
//     name : 'add',
//     component : AddTodo
//   },
  {
    path : '/posts/:id',
    name : 'posts',
    component : PostView
  }
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})


export default router
