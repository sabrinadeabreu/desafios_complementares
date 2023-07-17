let xhr = new XMLHttpRequest();
let elementoparabandeira = document.getElementById("paises")

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil')

xhr.send()

xhr.onload = function () {
    resposta = JSON.parse(xhr.responseText)
    let bandeira = resposta[0].flags.png
    
    elementoparabandeira.innerHTML = "<img src='" + bandeira + "'alt='bandeira'></img>"

}


