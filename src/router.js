import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main';
import Admin from './components/Admin';
import Contato from './components/Contato';
import LogAdm from './components/LogAdm';
import Planos from './components/Planos';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Main
        },
        {
            path:'/Admin',
            name: Admin,
            component: Admin
        },
        {
            path:'/contato',
            name: Contato,
            component: Contato,
        },
        {
            path: '/LogAdm',
            name: LogAdm,
            component: LogAdm
        },
        {
            path: '/Planos',
            name: Planos,
            component: Planos
        }
    ]
});