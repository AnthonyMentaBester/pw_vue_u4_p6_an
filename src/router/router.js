import { createRouter, createWebHashHistory } from 'vue-router';
import EstudianteActualizar from '../pages/EstudianteActualizar.vue';
import EstudianteEliminar from '../pages/EstudianteEliminar.vue';
import EstudianteInsertar from '../pages/EstudianteInsertar.vue';
import BienvenidaPage from '../pages/BienvenidaPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import BloqueadoPage from '@/pages/BloqueadoPage.vue';

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
        path: '/EstudianteInsertar/:cedula',
        name: 'EstudianteInsertar',
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
    {
        path: '/Bloqueo',
        name: 'bloqueado',
        component: BloqueadoPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

//programa guardianes 
router.beforeEach((to, from ,next)=>{

    //
    console.log('Guardianes');
    console.log(to);
    console.log(from);
    console.log(next);
    let usuario = 'anthony';
    let resultado = true;
    const random = Math.random()*100;

    if(random > 50){
        console.log('si tiene acceso a esa pagina')
        next();
    }else{
        console.log('acceso bloqueado');
        next({name: 'bloqueado'})
    }
    
})
export default router

