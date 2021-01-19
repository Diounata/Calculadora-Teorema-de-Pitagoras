var formularios, resultado

formularios = document.querySelector(`div.formularios`)
resultado = document.querySelector(`div.resultado`)

// + Adicionar formulários

function button_cateto() {
    formularios.innerHTML = `
        <form>
        <div class="row">
            <div class="col">
                <input type="number" class="form-control input-cateto" placeholder="Cateto">
            </div>

            <div class="col">
                <input type="number" class="form-control input-hipotenusa" placeholder="Hipotenusa">
            </div>
        </div>

        <div class="my-3 text-center">
            <input type="button" value="Calcular" class="btn btn-primary px-3" onclick="calcular_cateto()">
            <button type="reset" class="btn btn-primary" onclick="resetar()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
            </button>
        </div>
        </form>
    `

    resultado.innerHTML = ``
}

function button_hipotenusa() {
    formularios.innerHTML = `
        <form>
        <div class="row">
            <div class="col">
                <input type="number" class="form-control input-cateto_1" placeholder="Cateto 1">
            </div>

            <div class="col">
                <input type="number" class="form-control input-cateto_2" placeholder="Cateto 2">
            </div>
        </div>

        <div class="my-3 mx-auto text-center">
            <input type="button" value="Calcular" class="btn btn-primary px-3" onclick="calcular_hipotenusa()">
            <button type="reset" class="btn btn-primary" onclick="resetar()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
            </button>
        </div>
        </form>
    `

    resultado.innerHTML = ``
}

// - Adicionar formulários

// + Calcular resultado

function calcular_cateto() {
    let valor

    valor = {
        cateto: document.querySelector(`input.input-cateto`).value,
        hipotenusa: document.querySelector(`input.input-hipotenusa`).value,
    }

    if (valor.cateto.length === 0 || valor.hipotenusa.length === 0) {
        resultado.innerHTML = `
            <div class="alert alert-danger py-2">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-exclamation-triangle-fill"
                     viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

                Os campos de formulário não foram preenchidos.
            </div>
        `
    } else {
        if (valor.hipotenusa < valor.cateto) {
            resultado.innerHTML = `
            <div class="alert alert-danger py-2">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-exclamation-triangle-fill"
                     viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

                Conta impossível de ser feita <br>
                • Motivo: valor da hipotenusa (${valor.hipotenusa}) menor que o valor do cateto (${valor.cateto})
            </div>
            `
        } else {
            resultado.innerHTML = `
                <div class="mb-2">
                    • ${valor.hipotenusa}² = ${valor.cateto}² + x² <br>
                    • ${valor.hipotenusa ** 2} = ${valor.cateto ** 2} + x² <br>
                    • x² = ${valor.hipotenusa ** 2} - ${valor.cateto ** 2} <br>
                    • x² = ${(valor.hipotenusa ** 2) - (valor.cateto ** 2)} <br>
                    • x = &Sqrt;${(valor.hipotenusa ** 2) - (valor.cateto ** 2)} <br>
                    • x = ${Math.sqrt((valor.hipotenusa ** 2) - (valor.cateto ** 2))}
                </div>

                <div>
                    Valor do cateto → ${Math.sqrt((valor.hipotenusa ** 2) - (valor.cateto ** 2))}
                </div>
            `
        }
    }
}

function calcular_hipotenusa() {
    let valor

    valor = {
        cateto_1: document.querySelector(`input.input-cateto_1`).value,
        cateto_2: document.querySelector(`input.input-cateto_2`).value,
    }

    if (valor.cateto_1.length === 0 || valor.cateto_2.length === 0) {
        resultado.innerHTML = `
            <div class="alert alert-danger py-2">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-exclamation-triangle-fill"
                     viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

                Os campos de formulário não foram preenchidos.
            </div>
        `
    } else {
        resultado.innerHTML = `
            <div class="mb-2">
                • x² = ${valor.cateto_1}² + ${valor.cateto_2}² <br>
                • x² = ${valor.cateto_1 ** 2} + ${valor.cateto_2 ** 2} <br>
                • x² = ${(valor.cateto_1 ** 2) + (valor.cateto_2 ** 2)} <br>
                • x = &Sqrt;${(valor.cateto_1 ** 2) + (valor.cateto_2 ** 2)} <br>
                • x = ${Math.sqrt((valor.cateto_1 ** 2) + (valor.cateto_2 ** 2))}
            </div>

            <div>
                Valor da hipotenusa → ${Math.sqrt((valor.cateto_1 ** 2) + (valor.cateto_2 ** 2))}
            </div>
        `
    }
}

// - Calcular resultado

// Botão de reset

function resetar() {
    resultado.innerHTML = ``
}
