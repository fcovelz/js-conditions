/*Parte 1 PopCat*/
var estado = 0;

function popcat(){

    var imagenpop = document.getElementById("popcat")

    /* Otra forma de realizarlo con toggle =>
    imagenpop.classList.toggle("borderpop")
    */

    

    if (estado == 0){
        imagenpop.style.border = "2px solid red"
        imagenpop.src = "img/popcatopen.jpg"
        estado = 1;
    }else {
        imagenpop.style.border = ""
        imagenpop.src = "img/popcatclose.jpg"
        estado = 0;
    }
}

/*Fin Parte 1*/

/*Parte 2 */

function verificar (){

    var numb1 = document.getElementById("stick1").value
    var numb2 = document.getElementById("stick2").value
    var numb3 = document.getElementById("stick3").value

    var number1 = parseInt(numb1)
    var number2 = parseInt(numb2)
    var number3 = parseInt(numb3)

    var cantidad = document.getElementById("cant")


    var resultado = number1+number2+number3

    if (resultado > 10){

        cantidad.innerHTML= "Llevas demasiados stickers"

    }else if (resultado >= 0 && resultado <= 10 ){
        cantidad.innerHTML= "Llevas "+ resultado + " stickers"
    }else{
        cantidad.innerHTML= "Debes llevar de los 3 stickers"
    }

}

/*Fin Parte 2*/

/* Parte 3 */

function ingreso(){
    var selector1 = document.getElementById("sele1").value
    var selector2 = document.getElementById("sele2").value
    var selector3 = document.getElementById("sele3").value

    var numer1 = parseInt(selector1)
    var numer2 = parseInt(selector2)
    var numer3 = parseInt(selector3)

    var texto1 = document.getElementById("mensaje")

    if (numer1 === 9 && numer2 === 1 && numer3 === 1) {

        texto1.innerHTML = "Password 1 correcto"

    }else if (numer1 === 7 && numer2 === 1 && numer3 === 4) {

        texto1.innerHTML = "Password 2 correcto"
    }else{

        texto1.innerHTML = "Password incorrecto"
    }
}