
function promedioJugadores(goles, partidos){
    return goles / partidos
} 

let jugador

let cantGoles

let cantPartidos

let promedioTotal

do{
    jugador = prompt("Ingrese el nombre del jugador" + "\n" + 'Si desea finalizar con el simulador ingrese "F"' ).toUpperCase()

    if(jugador != "F"){

    cantGoles = parseInt(prompt(`Ingrese la cantidad de goles de ${jugador}`))

    while(isNaN(cantGoles)){
        cantGoles = parseInt(prompt(`Por favor, ingrese la cantidad de goles de ${jugador} como valor numérico`))
    }

    cantPartidos = parseInt(prompt(`Ingrese la cantidad de partidos de ${jugador}`))

    while(isNaN(cantPartidos)){
        cantPartidos = parseInt(prompt(`Por favor, ingrese la cantidad de partidos de ${jugador} como valor numérico`))
    }

    promedioTotal = promedioJugadores(cantGoles, cantPartidos)

    alert(`El promedio de gol de ${jugador} es de ${promedioTotal} por partido`)

    }

}while(jugador != "F"){
    alert("Gracias por usar nuestra aplicación")
}

