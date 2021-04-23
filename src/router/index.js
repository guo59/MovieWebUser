import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/Login')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Mine = () => import('../views/profile/Mine')
const Editname = () => import('../views/profile/EditName')
const Comment = () => import('../views/profile/Comment')
const MovieDetail = () => import('../views/movie/MovieDetail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home/:userId',
    component: Home
  },
  {
    path: '/profile/:userId',
    component: Profile,
    children: [
      {
        path: '',
        redirect: '/profile/:userId/mine'
      },
      {
        path: '/profile/:userId/mine',
        component: Mine
      },
      {
        path: '/profile/:userId/editname',
        component: Editname
      },
      {
        path: '/profile/:userId/comment',
        component: Comment
      }
    ]
  },
  {
    path: '/moviedetail/:movieId',
    component: MovieDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
