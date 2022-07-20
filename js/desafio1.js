let clave = prompt("Ingrese clave para inciar")

while(clave === "5"){
    let numero = prompt("Ingrese un numero")
    let multiplicador = prompt("Ingrese por que numero quiere multiplicar el primer numero ingresado")
    let veces = prompt("Ingrese la cantidad de veces que desea realizar la operacion")
    console.log("Iniciando programa...")
    for(let i = 0; i < veces; i++){
        operacion = numero * multiplicador
        console.log("Resultado" + " " + operacion)
        numero = operacion
    }
    clave = prompt("Ingrese de nuevo la clave para volver a comenzar, indique una clave erronea para finalizar")
 }
 
