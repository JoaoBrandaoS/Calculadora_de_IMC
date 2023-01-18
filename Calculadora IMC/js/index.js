
function somar(){
    let num1 = document.getElementById("num1").value
    let idadehumana = (num1-2) * 4 + 21
    p = document.getElementsByTagName("p")[0].className="red"
    
    document.getElementsByTagName("p")[0].innerHTML=" A idade Do seu cachorro em idade humana é equivalente a " + idadehumana

}

function mudarjanela(){

}

function imc(){

    let altura = document.getElementById("alutra").value
    let peso = document.getElementById("peso").value

    let imc = peso/(altura*altura)
    let idex = document.getElementById("alerta")
 
    if(imc < 18.5){

        idex.className = "alert alert-danger aparece mt-3"
        idex.innerHTML = "Seu imc é " + imc + "<br>Classificação: Magreza"

    } else if(imc >= 18.5 && imc <= 24.9){
        idex.className = "alert alert-success aparece mt-3"
        idex.innerHTML = "Seu imc é " + imc + "<br>Classificação: normal"
        
    } else if (imc >= 25 && imc <= 29.9){
        idex.className = "alert alert-warning aparece mt-3"
        idex.innerHTML = "Seu imc é " + imc + "<br>Classificação: Sobrepeso"
        
    } else if (imc >= 30 && imc <= 39.9){
        idex.className = "alert alert-danger aparece mt-3"
        idex.innerHTML = "Seu imc é " + imc + "<br>Classificação: obesidade"
    
    } else if (imc >= 40){
        idex.className = "alert alert-danger aparece mt-3"
        idex.innerHTML = "Seu imc é " + imc + "<br>Classificação: Obesidade grave"
        
    }    
}

function limpar(){

    
     document.getElementById("alutra").value = null
    document.getElementById("peso").value = null
        
}
