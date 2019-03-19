import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'index',
            alias: '',
            path: '/:short?/:slug?',
            component: () => import('@/Views/Index')
        }
    ]
});

export default router;
