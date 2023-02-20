//Variables
//window.alert("Javascript funcionando correctamente")
let variableSinValor
let booleano1 = true
let booleano2 = false
const PI = 3.14837
const TAU = 2 * PI
const miNombre = 'Gonzalo Martí'
const miNumeroFav = 10
console.log(typeof miNumeroFav)
let booleano = true
console.log(miNombre.length)
console.log(typeof miNumeroFav)
console.log("Mi nombre es " + miNombre + " y mi numero favorito es el " + miNumeroFav)
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase())
console.log("Hola soy un crack".substr(0, 5))
let miNumeroFavstring = miNumeroFav.toString()
console.log(typeof miNumeroFavstring)
let clase = 23
cosa = (`mi numero es ${clase}`)
console.log(cosa = (`mi numero es ${clase}`))
console.log(PI.toFixed(2))


//ARRAYS
let arrayVacio = []
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let arrayNumerosPares = [0, 2, 4, 6, 8]
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
let holaMundo = ["Hola" + "Mundo"]
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(loGuardoTodo.length)
arrayDeArrays.push(743, 'calle')
console.log(arrayDeArrays)
console.log(typeof 'que')
loGuardoTodo.push('Euralio')
console.log(loGuardoTodo)


//OBJETOS
const coche = {
    marca: "kia",
    modelo: "ceed",
    matrícula: "3465DNB",
}

//CASA
var casa = {
    codPotal: 46182,
    calle: "calle la Safor",
    portal: 10,
    piso: 3,
}

//FULLSTACK
var FullStackDeveloper = {
    arrayLenguajes: ["javascript", "php", "etc"],
    arrayProyectos: ["mi pagina", "personal", "etc"],
}

//PERRO
const perro = {
    nombre: "Travis",
    raza: "mestizo",
    color: "negro",
    edad: "2",
}


//NOTICIA
var noticia = {
    titular: "Se acaba el mundo",
    cuerpo: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt"
}


//PERSONA
var persona={
    nombre:"Gonzalo",
    apellidos:"Martí Peirats",
    edad: 26,
}
console.log(persona)


//MOSTRAR EL LENGUAJE JAVASCRIPT
console.log(FullStackDeveloper.arrayLenguajes[0])

//PORTATIL
var portatil={
    marca: "dell",
}
console.log(portatil.marca)

//CONCIERTO
const concierto={
    grupos:["rolling stones", "beatles", "theWho"],
    fecha:'12 de Junio, 2023'
}
console.log(concierto)

//LED
const led={
    lampara1:"rojo",
    lampara2:"verde",
    lampara3:"azul",
}
let arrayRGB=["Rojo", "Verde", "Azul"]
console.log(arrayRGB)

//ERROR
var O_Error={
    código:"error",
}
console.log(O_Error)


//GRUPO

const grupo={
    integrantes:[12, 3, 5],
}
var integrantes=[12 , 3, 5]
console.log(integrantes[0])


//IMPRESORA
let Impresora = {
    tinta: {
        rojo: "rojo",
        verde: "verde",
        azul: "azul",
    }
}
let nivelesTinta = Object.values(Impresora.tinta)
console.log(nivelesTinta)


//MOVIL
const movil={
    especificaciones:"memoria de 128Gb"
}
let especificaciones="memoria de 128Gb"
console.log(especificaciones)


//PoRTATIL
portatil.marca="msi"
console.log(portatil)

//CONCIERTOO
concierto.grupos.push('Guns N Roses'),
console.log(concierto.grupos)

//FECHA CONCIERTO
const fecha= new Date('20 Febrero, 2023')
console.log(fecha)

//INTEGRANTES
grupo.integrantes.pop([2])
console.log(grupo.integrantes.length)
