function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}

function ex2(){
    num1 = parseInt(document.getElementById('ex2-num').value)
    num2 = parseInt(document.getElementById('ex2-num2').value)
    document.getElementById('ex2-resultado').innerHTML = num1 + num2
}

function ex3(){
    num = document.getElementById('num').value
    if(num > 0){
        document.getElementById('ex3-saida').innerHTML= 'Seu número é positivo'
    }
    else if(num < 0){
        document.getElementById('ex3-saida').innerHTML= 'Seu número é negativo'
    }
    else{
        document.getElementById('ex3-saida').innerHTML= 'Seu número é 0'
    }


}

function ex4(){
    caracteres = document.getElementById('frase').value.length
    document.getElementById('ex4-saida').innerHTML = caracteres
}

function ex5(){
    número = document.getElementById('ex5-num').value
    
    for(i=0; i < número; i++){
        document.getElementById('ex5-saida').innerHTML += ' '+i
    }
}

function ex6(){
    cor_escolhida = document.getElementById('cor').value
    document.getElementById('caixa').style.backgroundColor = cor_escolhida
}

function ex7(){
    num_aleatório = Math.floor(Math.random() * (100 - 0)) 
    document.getElementById('num_sorteado').innerHTML = num_aleatório
}

sacola = []

function ex8(){
    elemento = document.getElementById('num_list').value
    sacola.unshift(elemento)
    document.getElementById('lista').innerHTML = sacola

}


caixa = []
function ex9(){
    elemento9 = document.getElementById('lista9').value
    caixa.unshift(elemento9)
    document.getElementById('info').innerHTML = caixa

}