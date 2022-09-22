import Home from '@/views/Home/Home'
import Contacts from '@/views/Contacts/Contacts'
import Jobs from '@/views/Jobs/Jobs'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/contacts',
        component: Contacts,
    },
    {
        path: '/jobs',
        component: Jobs,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

export default router
