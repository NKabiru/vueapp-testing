import Vue from 'vue'
import Router from 'vue-router'

//Components
import Home from '@/components/Home'
import Employee from '@/components/Employee'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/employee',
            name: 'Employee',
            component: Employee
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})
