function pintarCaixa(cor){
    document.getElementById("caixa").style.backgroundColor = cor
}

function colorirCaixa(){
    cor = document.getElementById("codigoCor").value
    document.getElementById("caixa").style.backgroundColor = cor
}

function redimensionarCaixa(){
    altura = document.getElementById("altura").value
    largura = document.getElementById("largura").value
    document.getElementById("caixa").style.height = altura+'px'
    document.getElementById("caixa").style.width = largura+'px'
}

function mudarBorda(){
    espessura = document.getElementById("espessuraBorda").value
    estilo = document.getElementById("estiloBorda").value
    cor = document.getElementById("corBorda").value
    document.getElementById("caixa").style.border = espessura+'px '+estilo+' '+cor
}