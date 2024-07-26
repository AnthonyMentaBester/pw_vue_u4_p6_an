import { createRouter, createWebHashHistory } from 'vue-router';
import EstudianteActualizar from '../pages/EstudianteActualizar.vue';
import EstudianteEliminar from '../pages/EstudianteEliminar.vue';
import EstudianteInsertar from '../pages/EstudianteInsertar.vue';
import BienvenidaPage from '../pages/BienvenidaPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
    {
        path: '/EstudianteActualizar/:cedula',
        component: EstudianteActualizar
    },
    {
        path: '/EstudianteEliminar',
        component: EstudianteEliminar
    },
    {
        path: '/EstudianteInsertar',
        component: EstudianteInsertar
    },
    {
        path: '/',
        component: BienvenidaPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router

