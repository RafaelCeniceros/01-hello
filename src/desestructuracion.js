// Desestructuración ( Destructuring assignment )
/*
 Es una expresión de JS que permite desempacar
 valores de arrefglos o propiedades de objetos
 en distintas variables.

 La desestructuración hace el código más limpio
 y legible al permitir extraer solo la información
 necesaria.

*/

let a = 10;
let b = 20;

// Pasar el valor de 'b->a' y el valor de 'a->b'
let temp_v = a;
a = b;
b = temp_v;

console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);

//con desestructuracion seria:
//[b,a]=[a,b];

//----------//
const myArray = ["azul","rojo","verde","morado"];
//guardar en la variable colorA y colorB, el indice 0 y 2
//const colorA= myArray[0];
 //const colorB= myArray[2];
 const [colorA, ,colorB]=myArray;
console.log(`color a: ${colorA} , color b: ${colorB}`);

//Desestructurar un objeto
const myObj ={
    name:"Rafael",
    lastname:"Ceniceros",
    age:23
}

// asignar a una variable name y lastname el valor de las propiedades del obj myObj

//const myname = myObj.name;
//const lastname = myObj.lastname;
const{ name:myName , lastname}=myObj;
console.log(`nombre: ${myName} , apellido: ${lastname}`);

//----------------------------------------------//
const prop = {
    title:"Pokemon",
    src: "https://ca0b.jpg" ,
    href:"https://pokemon_Wiki",         
    description:'Toma la "pokebola"',
    type:"animal"
 }

//usando desestructuracion

const{title,description}=prop;
console.log(`El ${title} es ${description}`);

valoresSinDesestructuracion( prop );
valoresDesestructurados( prop );

function valoresSinDesestructuracion( myObj ){
    console.log(`La url de ${myObj.title} es ${myObj.src}`);
}

function valoresDesestructurados( {title, src} ){
    console.log(`La url de ${title} es ${src}`);
}

const myStyle = {
    virtual: {
        color:"orange",
        fontSize: 18,
        fontFamily: "Arial"
    } ,
    real: {
        color:"maroon",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };

 //crear una funcion que lea el color y el fonssize del objeto virtual
 //imprimir"para los objetos virtuales el color es green y el tamaño 18"

 function estilosDesestructurados( {virtual:{color,fontSize}} ){
    console.log(`Para los objetos virtuales el color es ${color} y el tamaño ${fontSize}`);
}

estilosDesestructurados(myStyle);
