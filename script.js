function evaluar1() {

    let edad = document.getElementById("edad").value  

    let respuesta = document.getElementById("respuesta")

    if(edad <= 12){
        respuesta.textContent = "Casablanca"

    }else{
        if(edad <= 16 ){
            respuesta.textContent = "The Shawshank Redemption"

        }else {
            respuesta.textContent = "Taxi Driver"
    }
}


}

function evaluar2() {

    let edad = document.getElementById("edad").value  

    let respuesta = document.getElementById("respuesta")

    if(edad <= 12){
        respuesta.textContent = "Back to the Future"

    }else{
        if(edad <= 16 ){
            respuesta.textContent = "The Truman Show"

        }else {
            respuesta.textContent = "The Wolf of Wall Street"
    }
}


}

function evaluar3() {

    let edad = document.getElementById("edad").value  

    let respuesta = document.getElementById("respuesta")

    if(edad <= 12){
        respuesta.textContent = "La La Land"

    }else{
        if(edad <= 16 ){
            respuesta.textContent = "Les Miserables"

        }else {
            respuesta.textContent = "The Rocky Horror Picture Show"
    }
}


}

function evaluar4() {

    let edad = document.getElementById("edad").value  

    let respuesta = document.getElementById("respuesta")

    if(edad <= 12){
        respuesta.textContent = "No hay opciones para esta edad"

    }else{
        if(edad <= 16 ){
            respuesta.textContent = "El secreto de sus ojos"

        }else {
            respuesta.textContent = "The Godfather"
    }
}


}