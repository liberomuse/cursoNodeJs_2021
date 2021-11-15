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

const getNameUserById = (id,callback) =>{
    const resultado = alumnos.find(x => x.id===id)?.nombre;
    if(resultado){
        callback(null,resultado);
    }else{
        callback('El usuario con el id: '+id+' no existe',null);
    }  
}

const getCalificacionUserById = (id,funcionQueRegresa) =>{
    const resultado = calificaciones.find(res => res.id===id)?.calif;
    if(resultado){
        funcionQueRegresa(null,resultado);
    }else{
        funcionQueRegresa('El usuario con el id: '+id+' no tiene calificacion',null);
    }  
}

/**
 * Aqui mandamos a llamar nuestras funciones
*/
const id = 4;
getNameUserById(id,(error,result)=>{
    if(error){
        console.log(error);
    }else{
        getCalificacionUserById(id,(err,calificacion)=>{
            if(err){
                console.log(`El estudiante ${result} si existe`); 
                console.log(err)
            }else{
                console.log(`El estudiante ${result} si existe`); 
                console.log(`El estudiante tiene una calificacion: ${calificacion}`); 
            }
        }) 
    }
});