import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import Home from "@/views/Home.vue";
import MainLayout from "@/layout/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                layout: AuthLayout,
                requiresAuth: false
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                layout: MainLayout,
                requiresAuth: true
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: "/home",
        }
    ]
})


router.beforeEach((to, from) => {

  if (to.meta.requiresAuth && !localStorage.getItem('logged') == true) {
    return {
      path: '/login',
      query: {redirect: to.fullPath},
    }
  }

})

export default router
