var resultado = document.getElementById('resultado')

function button_hipotenusa() {
    var cateto_1 = Number(prompt(`Cateto 1: `))
    var cateto_2 = Number(prompt(`Cateto 2: `))
    var hipotenusa_resposta = ((cateto_1 ** 2) + (cateto_2 ** 2))

    resultado.style.textAlign = `left`

    resultado.innerHTML = `<p><b> • Valor da hipotenusa: ${Math.sqrt(hipotenusa_resposta).toFixed(1).replace('.', ',')} metro(s) </b>`
    resultado.innerHTML += `• Cateto (1): ${cateto_1.toFixed(1).replace('.', ',')} metro(s) </p>`
    resultado.innerHTML += `<p> • Cateto (2): ${cateto_2.toFixed(1).replace('.', ',')} metro(s) </p>`

    resultado.innerHTML += `<p>h² = ${cateto_1}² + ${cateto_2}² <br>`
    resultado.innerHTML += `h² = ${cateto_1 ** 2} + ${cateto_2 ** 2} <br>`
    resultado.innerHTML += `h² = ${hipotenusa_resposta} <br>`
    resultado.innerHTML += `h = &Sqrt;${hipotenusa_resposta} <br>`
    resultado.innerHTML += `<span id="resultado-div"><b>h = ${Math.sqrt(hipotenusa_resposta)}</b></span></p>`
}


function button_cateto() {
    var hipotenusa = Number(prompt(`Hipotenusa: `))
    var cateto = Number(prompt(`Cateto: `))
    var cateto_resposta = ((hipotenusa ** 2) - (cateto ** 2))

    resultado.style.textAlign = `left`

    resultado.innerHTML = `<p> • Hipotenusa: ${hipotenusa.toFixed(1).replace('.', ',')} metro(s) <br>`
    resultado.innerHTML += `• Cateto (1): ${cateto.toFixed(1).replace('.', ',')} metro(s) </p>`
    resultado.innerHTML += `<p><b> • Cateto (2): ${Math.sqrt(cateto_resposta).toFixed(1).replace('.', ',')} metro(s)</b> </p>`

    resultado.innerHTML += `<p>${hipotenusa}² = ${cateto}² + c² <br>`
    resultado.innerHTML += `${hipotenusa ** 2} = ${cateto ** 2} + c² <br>`
    resultado.innerHTML += `c² = ${hipotenusa ** 2} - ${cateto ** 2} <br>`
    resultado.innerHTML += `c² = ${cateto_resposta} <br>`
    resultado.innerHTML += `c = &Sqrt;${cateto_resposta} <br>`
    resultado.innerHTML += `<span id="resultado-div"><b>c = ${Math.sqrt(cateto_resposta)}</b></span></p>`
}