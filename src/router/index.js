import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Page/Login.vue'
import Registration from '../components/Page/Registration.vue'
import Home from '../components/Page/Home.vue'
import addProduct from '../components/Page/addProduct.vue'
import firebase from 'firebase/app'
Vue.use(Router)


const router = new Router({
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                layout: 'empty',
            }
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration,
            meta: {
                layout: 'empty',
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                layout: 'main',
                auth: true
            }
        },
        {
            path: '/addProduct',
            name: 'add Product',
            component: addProduct,
            meta: {
                layout: 'main',
                auth: true
            }
        },
        {
            path: '*',
            component: Login
        }
    ],
    mode: 'history',
    base: process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)
  
    if (requireAuth && !currentUser) {
      next('/login?message=login')
    } else {
      next()
    }
  })
export default router;