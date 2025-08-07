

function contagem(){
    numero = parseInt(document.getElementById("numero").value)
    document.getElementById("retorno").innerHTML = ""
    for(i=0; i<=numero; i++){
        document.getElementById("retorno").innerHTML += i+' '
    }
}

vogais = "AEIOUÁÂÃÉÊÍÎÓÕÔÚÛ"

texto = 'SUPER GEEKS'

function leitura(){
    texto = document.getElementById('texto').value
    letra = document.getElementById('letra2').value
    contLetra = 0
    contVogal = 0
    
    for(i=0; i<texto.length; i++){
        if(texto[i] == letra){
            contLetra++
        }

        if(vogais.indexOf(texto[i].toUpperCase()) != -1 ){
            contVogal++
        }
        }



        document.getElementById("retorno2").innerHTML =
        'No texto "'+texto+'" tem a letra "'+letra+'" '+contLetra+'x e tem '+contVogal+' vogais'
    }

