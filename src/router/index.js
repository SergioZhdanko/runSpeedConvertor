import Vue from 'vue';
import Router from 'vue-router';

import PageDashBoard from "../page/PageDashBoard.vue";
import PageAbout from "../page/PageAbout.vue";
import Page404 from "../page/Page404.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashBoard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/404',
            name: 'not found',
            component: Page404
        },
    ]
});