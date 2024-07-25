<template>
    <h1>Actualizar estudiante</h1>
    <Estudiante />
    <Boton />
    
</template>

<script>
import Formulario from '../components/Formulario.vue'
import Boton from '../components/Boton.vue'
import Estudiante from '@/components/Estudiante.vue';

export default {

    components: {
        Estudiante,
        Boton
    }
}

</script>

<style></style>