import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import HomePage from './components/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", component: Login },
    { path: "/home", component: HomePage },
    { path: "/signup", component: SignUp },
    // { path: "/logout", component: LogoutPage },
    // { path: "/employees", component: EmployeeIndexPage},
    // { path: "/employees/:id", component: ReviewShowPage},
    // { path: "/reviews/new", component: ReviewsNewPage },
    // { path: "/logout", component: LogoutPage },
    // { path: "/reviews/pending", component: ReviewsPending }
  ]
})