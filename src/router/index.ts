import Vue from 'vue';
import VueRouter from 'vue-router';

import CadastroPage from '@/views/Portal/CadastroPage.vue';
import PortalMainPage from '@/views/Portal/PortalMainPage.vue';
import AprendaBrincando from '@/views/Portal/AprendaBrincando.vue';
import AprendendoSobreTransito from '@/views/Portal/AprendendoSobreTransito.vue';

import LoginPage from '@/views/Admin/LoginPage.vue';
import DashboardPage from '@/views/Admin/DashboardPage.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: { name: 'aprendabricando' },
            component: PortalMainPage,
            children: [
                {
                    path: 'aprendabricando',
                    name: 'aprendabricando',
                    component: AprendaBrincando
                },
                {
                    path: '/prendendosobretransito',
                    name: 'aprendendosobretransito',
                    component: AprendendoSobreTransito
                },
            ]
        },
        {
            path: '/admin',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: CadastroPage
        },
        
    ]
});

export default router;
