let num1 = parseInt( prompt("Ingrese los invitados mayores de edad"));
let num2 = parseInt( prompt("Ingrese los invitados menores de edad"));

let mensaje;

function verificador (num1, num2){
    if(!isNaN(num1) && !isNaN(num2)){
        if(num1 < num2){
        mensaje=alert("La fiesta en su mayoria va a ser para menores de edad")
        }
        if(num1 > num2) {
            mensaje=alert("La fiesta en su mayoria va a ser para mayores de edad")
        }
        if(num == num2){
            mensaje=alert("En la fiesta va a ser para todas las edades")
        }

    }else{
        mensaje=alert("Solo puedes ingresar numeros")
        num1=parseInt(prompt("ingrese algo"))
        num1=parseInt(prompt("Ingrese otra cosa"))
        verificador(num1, num2)
    }
}

verificador(num1, num2)

const lugar = (num1, num2) =>{
    if(num1+num2 <= 20){
        mensaje=alert("se necesitara un lugar chico")
    }else if(num1+num2 >= 20){
        mensaje=alert("Se necesita un lugar grande")
    }
}

lugar(num1, num2)