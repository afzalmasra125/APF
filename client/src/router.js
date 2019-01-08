import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import LogOut from './components/LogOut.vue'
import HomePage from './components/HomePage.vue'
import EmployeeIndexPage from './components/Employee.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", component: Login },
    { path: "/home", component: HomePage },
    { path: "/signup", component: SignUp },
    { path: "/logout", component: LogOut },
    { path: "/employees", component: EmployeeIndexPage},
    // { path: "/employees/:id", component: ReviewShowPage},
    // { path: "/reviews/new", component: ReviewsNewPage },
    // { path: "/reviews/pending", component: ReviewsPending }
  ]
})