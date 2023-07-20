//algoritmo de ciclo 

const primerNumero = parseInt(prompt("Hola soy tu calculadora interactiva! Ademas de escuchar tus cuentos favoritos, La Tía Botas te ayudará con el maravilloso mundo de las matemáticas.  INGRESA CUALQUIER NUMERO"));
const operacion = prompt("Ahora solo escribe la operacion que deseas (sumar, restar, multiplicar, dividir)");
const segundoNumero = parseInt(prompt("Finalmente ingresa otro numero"));

function calculadora() {
let resultado = 0;
    switch (operacion) {
        case "sumar":
            resultado = primerNumero + segundoNumero;
            alert(resultado);
            break;
        case "restar":
            resultado = primerNumero - segundoNumero;
            alert(resultado);
            break;
        case "dividir":
            resultado = primerNumero / segundoNumero;
            alert(resultado);
            break;
        case "multiplicar":
            resultado = primerNumero * segundoNumero;
            alert(resultado);
            break;
        default:
            alert("Ups! Hay un pequeño problemita, revisa bien mayusculas y minusculas y vuelve a intentar");
            break;
    }
}

for(let i = 0;i < 3; i++){
    const respuestaDelUsuario = prompt("Escribe la operacion que deseas (sumar, restar, multiplicar, dividir");
    calculadora(respuestaDelUsuario, primerNumero, segundoNumero);
}

//algoritmo condicional

let genero = prompt("Bienvenido al Reproductor Intercativo de la Tía Botas. Escribe tu género favorito: aventuras o risas o fantasias")

let personaje = prompt("Escribe tu personaje favorito: unicornio o astronauta o dinosaurio")

let lugar = prompt("Escribe tu lugar favorito: bosque o espacio o castillo")

let elemento = prompt("Por último elijamos el elemento para tus historias entre: varita o bicicleta o cohete")

if(genero == "aventuras" && personaje == "dinosaurio" && lugar == "castillo" && elemento == "varita"){
    alert("estas a punto de escuchar el cuento numero cero que se llama:  aventurasDinosaurioCastilloVarita")
}
else{
    alert("No está listo lo demás... pero puede elejir aventuras y dinosaurio y castillo y varita, para probar lo que si está listo")
}
