
function teste(){
    nome = document.getElementById('nome').value
    alert('Olá '+nome)
}

function soma(){
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)
    //alert('A some deu '+(n1+n2))
    document.getElementById('resultado').innerHTML = 'A soma deu '+(n1+n2)
}

function avaliar(){
    note = parseFloat(document.getElementById('nota').value)

    if(note>=0 && note<=10){
        if(note>=7){
            alert('Aprovado')
        }else if(note>=5){
            alert('Recuperação')
        }else{
            alert('Reprovado')
        }
    }else{
        alert('Valor inválido (deve ser entre 0 e 10)!')
    }

    
}

function mensagem(){
    
    for(i=0; i<5; i++){
       document.getElementById('mensagem').innerHTML += i+' '
    }

}

function pronto(){
    palavra = document.getElementById('teste').value
    if(palavra == 'super'){
        document.getElementById('texto').innerHTML += '<div class="especial">'+palavra+'</div>'
    }else{
        document.getElementById('texto').innerHTML += '<div>'+palavra+'</div>'
    }
    palavra = document.getElementById('teste').value = ''

}