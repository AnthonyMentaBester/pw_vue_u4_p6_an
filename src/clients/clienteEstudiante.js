import axios from "axios"

//METODOS DE CONSUMO DEL API 
const obtenerPorCedula = async(cedula) =>{

    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;



}

const obtenerPorCedulaAxios = async(cedula) =>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r=>r.data)
    console.log(data);
    return data;

}

const guardar = async(estudianteBody)=>{
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,estudianteBody).then(r=>r.data);
    console.log(data);
    return data;
}

const actualizar = async(estudianteBody,cedula)=>{
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,estudianteBody).then(r=>r.data);
    console.log(data);
    return data;
}


const eliminar = async(cedula)=>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async(estudianteBody,cedula)=>{
    const data = axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,estudianteBody).then(r=>r.data);
    console.log(data);
    return data;
}



//METODOS DE FACHADA 

export const obtenerPorCedulaFachada = async(cedula) =>{
    return await obtenerPorCedula(cedula);

}

export const obtenerPorCedulaAxiosFachada = async(cedula) =>{
    return await obtenerPorCedulaAxios(cedula);

}

export const guardarFachada = async(estudianteBody)=>{
    return await guardar(estudianteBody);
}

export const actualizarFachada = async(estudianteBody,cedula)=>{
    return await actualizar(estudianteBody,cedula);
    
}

export const actualizarParcialFachada = async(estudianteBody,cedula)=>{
    return await actualizarParcial(estudianteBody,cedula);
}

export const eliminarFachada = async(cedula)=>{
    return await eliminar(cedula);
}
