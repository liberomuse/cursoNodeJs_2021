//Objeto Json
const objeto_json = {
    key_1:"valor_1",
    key_2:1,
    key_3:3.1416,
    key_5:1,
}
const {key_1,key_5,msg ='No existo'} = objeto_json;
console.log(msg);


const paises = ['Mexico','U.S.A','Canada'];
console.log(paises[1])

const [mi_pais,pais_a_visitar,pais_mas_tranquilo] = paises;
console.log(mi_pais);

const [,,pais_seleccionado] = paises;
console.log(pais_seleccionado);

let a,b,c,resto;
[a,b,c] = [10,20,30];
let datos = [10,20,30,40,50,60];
[a,b,c,...resto] = datos;
console.log(resto);