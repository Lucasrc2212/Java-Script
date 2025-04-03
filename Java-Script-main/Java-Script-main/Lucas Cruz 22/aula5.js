frutas = []

function addFruta(){
    fruta = document.getElementById('fruta').value
    document.getElementById('fruta').value = ""

    if(frutas.indexOf(fruta) != -1){
        alert("Essa fruta já está na lista!")
    }else if(fruta == ''){
        alert('O campo está vazio')
    }else{
        frutas.push(fruta)
    }

    
    carregarLista()

}

function deletarFruta(i){
    frutas.splice(i,1) /** n esquecer de por o ",1" para apagar apenas 1 item */
    carregarLista()
}  

function carregarLista(){
    document.getElementById('lista').innerHTML = ""
    frutas.sort()
    for(i=0; i<frutas.length; i++){
        document.getElementById('lista').innerHTML += '<li>'+frutas[i]+'  <button onclick="deletarFruta('+i+')">X</button></li>'
    }
    document.getElementById("b").innerHTML = frutas.length+' ITENS'
}

