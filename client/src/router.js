import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import LogOut from './components/LogOut.vue'
import HomePage from './components/HomePage.vue'
import EmployeeIndexPage from './components/Employee.vue'
import PendingReviewPage from './components/PendingReview.vue'
import ReviewsNewPage from './components/CreateReview.vue'
import ReviewShowPage from './components/ReviewShowPage.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    { path: "/", component: Login },

    { path: "/home", component: HomePage, meta: { requiresAuth: true } },
    { path: "/signup", component: SignUp },
    { path: "/logout", component: LogOut },
    { path: "/employees", component: EmployeeIndexPage, meta: { requiresAuth: true }},
    { path: "/employees/:id", component: ReviewShowPage, meta: { requiresAuth: true }},
    { path: "/reviews/pending", component: PendingReviewPage , meta: { requiresAuth: true }},
    { path: "/reviews/new", component: ReviewsNewPage , meta: { requiresAuth: true }},
  ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router


