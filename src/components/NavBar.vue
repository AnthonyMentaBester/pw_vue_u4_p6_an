<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/EstudianteActualizar/vacio">Estudiante Actualizar</router-link>
    <router-link to="/EstudianteInsertar">Estudiante Crear</router-link>
    <router-link to="/EstudianteEliminar">Estudiante Borrar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div{
    padding: 20px 50px;
    background: #dbe0ff;
}

div a{
    margin: 0px 15px;
    padding: 5px 20px;
    background: #c2cbff;
    color: #35394d;
    border-radius: 5px;
    cursor: pointer;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    font-weight: 500px;
    box-shadow: 0 0 3px 0px #000;
    margin-top: 20px;
    margin-right: 10px;
    
}

</style>