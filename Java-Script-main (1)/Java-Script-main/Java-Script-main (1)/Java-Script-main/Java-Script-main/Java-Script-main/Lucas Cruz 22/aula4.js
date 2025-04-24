frutas = []

function clicar(){

    nomes = document.getElementById('texto').value 
    frutas.push(nomes)
    document.getElementById('lista').innerHTML += '<li>'+nomes+'</li>'
    document.getElementById('contagem').innerHTML = "Sua lista tem "+frutas.lenght()+" frutas"

}

