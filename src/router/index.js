import Home from '@/views/Home/Home'
import Contacts from '@/views/Contacts/Contacts'
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
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

export default router
