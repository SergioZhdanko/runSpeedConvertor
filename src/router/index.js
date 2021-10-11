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
            path: '/about*', //* добавление * после about это шаблонный путь, чтобы теперь не писали в адресе после about будем попадат ьна about
            name: 'about',
            component: PageAbout
        },
        {
            path: '*', //позволяет отображать страницу 404 если в адресе набрана несуществующая билибирда
            name: 'not found',
            component: Page404
        },
    ]
});