/* function validar(){
    let eNombre = document.getElementById("nombre") //Recupera el elemento
    let vNombre = eNombre.value //Recupera el valor del input, solo con input
    let eErrorNombre = document.getElementById("errorNombre")

    if(vNombre.length == 0){
        console.log("Debes completar este campo")
        eErrorNombre.innerText = "" //Borra el error almacenado en el error
        eNombre.style.backgroundColor ="green" //Agrega stylos css a un elemento recuperado con |let eNombre = document.getElementById("nombre")|
        eNombre.style.color = "white"
    }
    else if(vNombre.length >= 3){
        console.log("Cumple")
        eErrorNombre.innerText = "" //Borra el error almacenado en el error
        eNombre.style.backgroundColor ="green" //Agrega stylos css a un elemento recuperado con |let eNombre = document.getElementById("nombre")|
        eNombre.style.color = "white"
    }
    else{
        console.log("Error, pocos caracteres")
        alert("Debees ingresar al menos 3 cracteres")
        eErrorNombre.innerText = "Debes ingresar 3 caracteres como minimo como minimo!" //Almacena el error con HTML y lo muestra en pantalla
        eNombre.style.backgroundColor = "red" //Agrega stylos css a un elemento recuperado con |let eNombre = document.getElementById("nombre")|
        eNombre.style.color = "white"
    }


    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    if(vApellido.length >= 3){
        eErrorApellido.innerText = ""
        eApellido.style.backgroundColor = "green"
        eApellido.style.color = "white"
    }
    else{
        eErrorApellido.innerText = "Debes ingresar 3 caracteres!"
        eApellido.style.backgroundColor = "red"
        eApellido.style.color = "white"

    }
} 
*/


let personas = [] //Arreglo vacio que guarda datos



function validar(){  //Mejora y reduce el codigo a uno mas pequeño y fluido
    let eNombre = document.getElementById("nombre") //Recupera el elemento
    let vNombre = eNombre.value //Recupera el valor del input, solo con input
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")

    let vlmNombre = validarLargoMinimo(eNombre,vNombre,eErrorNombre) // vlm = validar largo minimo
    let vlmApellido = validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(vlmNombre == true && vlmApellido == true){ 
    /* no necesariamente se puede escribir este if de esta manera, 
    se puede ser hacer un:
    if(vlmNombre && vlmApellido){ */
        let persona = {
            nombre : vNombre,
            apellido : vApellido
        }
        personas.push(persona) //Almacea una persona
        eNombre.value = ""     //Limpia los campos del elemento
        eApellido.value = ""
        console.log(personas)
        cargarTabla()
    }
} 


function validarLargoMinimo(elemento,valor,eError){
    if(valor.length >= 3){
        eError.innerText = "" //muestra un texto literalmente
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        console.log(valor,"Datos correctos")
        return true //true es que funciono
    }
    else{
        eError.innerText = "Debes ingresar 3 caracteres como minimo!"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        console.log(valor,"incorreto")
        return false //falso e que no funciona
    }
}



function cargarTabla(){
    let tablaPersonas = document.getElementById("tablaPersonas")  //recupera el elemento del id
    let personasMap = personas.map((p)=>{ //concatena los datos con un str
        return "<tr><td>"+p.nombre+"</td>"+
                "<td>"+p.apellido+"</td></tr>"
    })
    console.log("Convertiendo...")
    console.log(personasMap)
    let personasStr = personasMap.join("") //genera un str
    tablaPersonas.innerHTML = personasStr //ingresa el str en el HTML
}




//[].push() agrega al final del arreglo
//[].unshift() agrega al principop del arreglo
//[].pop() saca el ultimo
//[].shift() saca el ultimo y lo lleva al final
//[].filter() busca elemento por conincidencia
//SE USAN PARA CICLOS FOR

/*[].map( () => ) recore un array y que retorna segun 
() para convertir valores  || es igual a for x in element  */ 
//[].join("-") convierte una lista a un string uniendolos
//[].concat([]) agreaga una concatenacion
/*[[]].flat() aplana y reduce a una dimesnion, por ejemplo 
dos listado en una lista*/
//[].slice(1,2)  agarra los items de una lista como una rebanada de pastel