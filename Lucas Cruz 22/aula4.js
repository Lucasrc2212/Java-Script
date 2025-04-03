frutas = []

function clicar(){

    nomes = document.getElementById('texto').value 
    frutas.push(nomes)
    document.getElementById('lista').innerHTML += '<li>'+nomes+'</li>'
    quantidade = frutas.length().value
    document.getElementById('contador').innerHTML = `A lista tem ${quantidade} frutas`

}
