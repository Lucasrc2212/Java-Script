function enviarFicha(){
    nome = document.getElementById('nome').value 
    forca = parseInt(document.getElementById('forca').value)
    destreza = parseInt(document.getElementById('destreza').value)
    constituicao = parseInt(document.getElementById('constituicao').value)
    inteligencia = parseInt(document.getElementById('inteligencia').value)
    carisma = parseInt(document.getElementById('carisma').value)
    arma = document.getElementById('arma').value
    foto = document.getElementById('foto').value

    nivel = 1
    vida = 10 + nivel + (constituicao*5)
    armadura = 10 + nivel + destreza

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
        document.getElementById('ficha').style.display = 'none'
        document.getElementById('fichapronta').style.display = 'block'
        
        document.getElementById('nomeficha').innerHTML = nome
        document.getElementById('infoficha').innerHTML = 'Arma: '+arma+'<br>Vida: '+vida+'<br>Armadura: '+armadura
        document.getElementById('fotoficha').src = foto
        document.getElementById('atributosficha').innerHTML = 'Força: '+forca+' | Destreza: '+destreza+' | Constituição: '+constituicao+' | Inteligência: '+inteligencia+' | Carisma: '+carisma
        
    }
}