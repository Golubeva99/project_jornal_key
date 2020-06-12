import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Reports from './views/reports.vue'
import Journal from './views/journal.vue'
import Keys from './components/keys'
import Change from './components/change'
import Journal_Report from './components/journal_report'
import Solve from './components/solve'
import Home from './views/home.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/reports',
            name:'reports',
            component: Reports
        },
        {
            path:'/journal',
            name:'journal',
            component: Journal
        },
        {
            path:'/keys',
            name:'keys',
            component: Keys
        },
        {
            path:'/change',
            name:'change',
            component: Change
        },
        {
            path:'/solve',
            name:'solve',
            component: Solve
        },
        {
            path:'/journal_report',
            name:'journal_report',
            component: Journal_Report
        },
    ],
    mode: 'history'
})