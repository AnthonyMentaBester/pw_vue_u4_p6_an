<template>
    <div class="container">
        <h1>Estudiantes</h1>
        <div class="estudiante-container">


            <form class="form" >

                <div>
                    <label for="cedula">Cédula:</label>
                    <input type="text" v-model="estudiante.cedula" id="cedula" required />
                </div>
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" v-model="estudiante.nombre" id="nombre" required />
                </div>
                <div>
                    <label for="apellido">Apellido:</label>
                    <input type="text" v-model="estudiante.apellido" id="apellido" required />
                </div>
                <div>
                    <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                    <input type="date" v-model="estudiante.fechaNacimiento" id="fechaNacimiento" required />
                </div>
                <div class="genero">
                    <label for="genero">Género:</label>
                    <select v-model="estudiante.genero" id="genero" required>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" @click="consultar">Consultar</button>
                <button type="button" @click="">Eliminar</button>
            </form>
            <div v-if="mensaje">
                <p>{{ mensaje }}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import {obtenerPorCedulaAxiosFachada,actualizarFachada} from '../clients/clienteEstudiante.js'
  export default {
    data() {
      return {
        estudiante: {
          cedula: null,
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          genero: ''
        },
        mensaje: ''
      };
    },
    methods: {
      async consultar() {
        // Lógica para guardar el estudiante
        console.log(this.estudiante.cedula);
        const data = await obtenerPorCedulaAxiosFachada(this.estudiante.cedula);
        this.mensaje = 'Estudiante guardado con éxito';
      },
      handleUpdate() {
        // Lógica para actualizar el estudiante
        this.mensaje = 'Estudiante actualizado con éxito';
      },
      handleDelete() {
        // Lógica para eliminar el estudiante
        this.mensaje = 'Estudiante eliminado con éxito';
      }
    }
  };
  </script>
  
  <style scoped>

.estudiante-container {

    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}


h1{
    text-align: center;
    padding: 30px;
}

p:before{
    content: attr(type);
    display: block;
    margin: 2px 1px;
    color: #000;
}

input{
    width: 300px;
    border: none;
    border-bottom: 2px solid #494848;
    background: none;
    margin-top: 25px;
}

input:focus {
    outline: none;
    border-bottom: 2px solid #7c7171;
}
.genero{
    width: 300px;
    background: none;
    margin-top: 25px;

}

.container{
    background: #e0e5ff;
    border-radius: 5px;
    padding: 25px 35px;
    box-shadow: 0 0 10px 0px #c2cbff;
}
.form{
    width: 350px;
    height: 380px;
    background: #e0e5ff;
    border-radius: 5px;
    padding: 25px 35px;
    box-shadow: 0 0 10px 0px #c2cbff;

}

body{
    background: #1b1f36;
}


button{
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
  