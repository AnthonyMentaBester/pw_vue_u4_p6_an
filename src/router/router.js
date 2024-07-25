import { createRouter, createWebHashHistory } from 'vue-router';
import EstudianteActualizar from '../pages/EstudianteActualizar.vue';
import EstudianteEliminar from '../pages/EstudianteEliminar.vue';
import EstudianteInsertar from '../pages/EstudianteInsertar.vue';
import BienvenidaPage from '../pages/BienvenidaPage.vue';

const routes = [
    {
        path: '/EstudianteActualizar',
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
        path: '/BienvenidaPage',
        component: BienvenidaPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router

