/*
texto = 'Boa tarde'

alert(texto.length)


 * length = tamanho da string 
 

alert(texto.charAt(1)) /* caractere no indice x 

alert(texto[texto.length-1])

texto.indexOf('i') /* indice do caractere 

frase = 'Eu adoro comer laranjeiras'

alert(frase.slice(3,19)) /* retorna um intervalo de caracteres 

paragrafo = 'Eu ODEIO comer laranjeiras'

alert(paragrafo.toLowerCase()) /* transforma o texto em letras maiusculas 
alert(paragrafo.toUpperCase()) /* transforma o texto em letras minusculas 

paragrafo = paragrafo.toUpperCase()
alert(paragrafo)

letras = 'LucAS CRuZ'

alert(letras.charAt(0).toUpperCase() + letras.slice(1).toLowerCase())

texto1 = ' lucas'

alert(texto1.trim())  Tira todos os espaços do inicio e do fim 

texto2 = 'limões são verdes e bananas são amarelas'

alert(texto2.split('e'))  separa a frase de acordo com a letra escolhida 

texto3 = alert(texto2.split(' '))
alert(texto3.length())
alert(texto3[2])
*/


function enviar(){
    primeiro = document.getElementById('texto').value.charAt(0).toUpperCase() + texto.slice

    document.getElementById('final').innerHTML = 'O texto '+primeiro+' tem'
}



