import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'index',
            path: '/:short?/:slug?',
            component: () => import('@/Views/Index')
        }
    ]
});

export default router;
