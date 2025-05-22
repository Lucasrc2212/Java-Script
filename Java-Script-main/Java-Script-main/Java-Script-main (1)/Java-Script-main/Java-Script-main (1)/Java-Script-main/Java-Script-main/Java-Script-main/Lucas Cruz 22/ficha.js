function enviarFicha(){
    nome = document.getElementById('nome').value 
    forca = parseInt(document.getElementById('forca').value)
    destreza = parseInt(document.getElementById('destreza').value)
    constituicao = parseInt(document.getElementById('constituicao').value)
    inteligencia = parseInt(document.getElementById('inteligencia').value)
    carisma = parseInt(document.getElementById('carisma').value)
    arma = document.getElementById('arma').value
    foto = document.getElementById('foto').value

    fichaValida = true

    if( nome.length < 2 || nome.length > 10 ){
        alert('Nome invalido (entre 2 a 10 caracteres)')
        fichaValida = False
    }
    if( isNaN(forca) || isNaN(destreza) || isNaN(constituicao) || isNaN(inteligencia) || isNaN(carisma)){
        alert('Preencha TODOS os atributos')
        fichaValida = false 
    }

    somaAtributos = forca + destreza + constituicao + inteligencia + carisma
    if(somaAtributos > 8){
        alert("Você ultrapassou o limite de 8 pontos, colocando "+somaAtributos+" pontos")
        fichaValida = false
    }

    if(fichaValida == true ){
        
        document.getElementById('ficha').innerHTML = ''
        document.getElementById('ficha').innerHTML += '<div class"perfil"><img src="'+foto+'"><h2>'+nome+'</h2></div>'
        document.getElementById('ficha').innerHTML += ''

    }
}