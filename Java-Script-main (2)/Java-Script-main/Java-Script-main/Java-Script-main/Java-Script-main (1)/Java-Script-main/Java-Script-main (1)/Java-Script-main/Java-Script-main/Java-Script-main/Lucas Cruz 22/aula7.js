function conta(){
    numero = parseFloat(document.getElementById("escolha").value)
    document.getElementById("retorno").innerHTML = ""
    for(i=0; i<=10; i++){
        document.getElementById("retorno").innerHTML += numero+' x '+i+' = '+(numero * i)+' <br>'
    }
} 

function sorteador(){
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)
    ps = num2 - num1 + 1
    ns = Math.floor(Math.random() * ps )+num1
    document.getElementById('sorteado').innerHTML = ns

    if(ns == num1){
        document.getElementById('sorteado').innerHTML += " azarado"
    }else if(ns == num2){
        document.getElementById('sorteado').innerHTML += " sortudo"
    }
}