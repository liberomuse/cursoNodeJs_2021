const objetoJson = {
    key_1:'valor_1',
    llave_2:'valor_2',
    objJson:{
        key_1:'valor n',
        valor_x:'soy una x'
    },
    foo:()=>console.log('Hola mudo'),
    listJson:[
        {                     //[0]
            name:'Jorge',
            edad:51
        },
        {                   //[1]
            name:'Maria',
            edad:40
        },
        {                   //[2]
            name:'pedro',
            edad:40
        }
    ]
}
//Jamas se va a ejecutar 
/*
console.log('Veo todo el objeto');
console.log(objetoJson);
*/


console.log('Veo un valor');
console.log(objetoJson.key_1);

console.log('Veo un valor');
console.log(objetoJson.objJson);
console.log(objetoJson.objJson.valor_x);

console.log('Veo un valor de lista');
console.log(objetoJson.listJson[1].name);