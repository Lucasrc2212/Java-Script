lista = []

function addItem(){
    item = document.getElementById('item').value.trim()
    // item = item.toLowerCase()
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    document.getElementById('item').value = ''
    
    if(item == ''){
        alert("O campo está vazio.")
        
    } else if(lista.indexOf(item) != -1){
        alert('Esse item já está na lista')
    }else{
        lista.push(item)
    }

    
    carregarLista()
}

function removerItem(i){
    lista.splice(i,1)
    carregarLista()
}

function carregarLista(){
    document.getElementById('listadecompras').innerHTML = ''
    for( i=0; i<lista.length; i++ ){
        document.getElementById('listadecompras').innerHTML += 
        '<div>'+lista[i]+' <button onclick="removerItem('+i+')">X</button> <button onclick="descerItem('+i+')">▼</button> </div>'
    }
    document.getElementById('quantidade').innerHTML = lista.length
}

function limparLista(){
    lista = []
    carregarLista()
}

function descerItem(i){

}
