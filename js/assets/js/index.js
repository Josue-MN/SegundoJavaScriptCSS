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


function validar(){  //Mejora y reduce el codigo a uno mas pequeño y fluido
    let eNombre = document.getElementById("nombre") //Recupera el elemento
    let vNombre = eNombre.value //Recupera el valor del input, solo con input
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")

    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)
        
} 


function validarLargoMinimo(elemento,valor,eError){
    if(valor.length >= 3){
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }
    else{
        eError.innerText = "Debes ingresar 3 caracteres como minimo!"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"

    }
}