const alumnos = [
    {
        id:1,
        nombre:'Jorge'
    },
    {
        id:2,
        nombre:'Fernando'
    },
    {
        id:3,
        nombre:'Rosa'
    },
    {
        id:4,
        nombre:'Anahi'
    }
];

const calificaciones = [
    {
        id:1,
        calif:10
    },
    {
        id:2,
        calif:9
    },
    {
        id:3,
        calif:8
    },
];

const edad = [
    {
        id:1,
        edad:30
    },
    {
        id:2,
        edad:25
    },
    {
        id:3,
        edad:20
    },
    {
        id:4,
        edad:15
    }
];

const getNameUserById = (id) =>{
    return new Promise((resolve,reject)=>{
        const resultado = alumnos.find(x => x.id===id)?.nombre;
        if(resultado){
            resolve(resultado);
        }else{
            reject('No se encontro el alumno con el id: '+id);
        }
    });
}

const getCalificacionUserById = (id) =>{
    return new Promise((resolucion,error)=>{
        const resultado = calificaciones.find(res => res.id===id)?.calif;
        //Lo siguiente es un if simplificado
        (resultado) ? resolucion(resultado) : error(`El usuario con id: ${id} no tiene calificacion`);
    });  
}

const getEdadUserById = (id) =>{
    return new Promise((resolve,reject)=>{
        const resultado = edad.find(res => res.id===id)?.edad;
        //Lo siguiente es un if simplificado
        (resultado) ? resolve(resultado) : reject(`El usuario con id: ${id} no tiene dato de edad`);
    });  
}

/**
 * Aqui uso todas las funciones
 */
const id = 4;

getNameUserById(id)
.then((result)=>{
    //console.log(result);
    nombre = result;
    return getCalificacionUserById(id);
})
.then((calificacion)=>{
    //console.log(`El usuario ${nombre} tiene una calificacion de: ${calificacion}`);
    calf = calificacion;
    return getEdadUserById(id);
})
.then((edad)=>{
    console.log(`El usuario ${nombre} tiene una calificacion de: ${calf} y una edad: ${edad}`);
})
.catch(function(error){
    console.log(error);
})