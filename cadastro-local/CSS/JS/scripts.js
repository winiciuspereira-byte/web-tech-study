const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#btnSalvar")
const listaValores = document.querySelector("#listaValores")
const storageKey = "cadastroLocalValores"

function getValoresSalvos() {
    const stored = localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : []
}

function salvarValores(valores) {
    localStorage.setItem(storageKey, JSON.stringify(valores))
}

function renderizarLista() {
    const valores = getValoresSalvos()
    listaValores.innerHTML = ""

    if (valores.length === 0) {
        const vazio = document.createElement("li")
        vazio.textContent = "Nenhum valor salvo"
        listaValores.appendChild(vazio)
        return
    }

    valores.forEach((valor) => {
        const li = document.createElement("li")
        li.textContent = valor
        listaValores.appendChild(li)
    })
}

salvarBtn.addEventListener("click", function (event) {
    event.preventDefault()
    const valor = campo.value.trim()

    if (valor === "") {
        campo.focus()
        return
    }

    const valores = getValoresSalvos()
    valores.push(valor)
    salvarValores(valores)
    renderizarLista()
    campo.value = ""
    campo.focus()
})

window.addEventListener("DOMContentLoaded", renderizarLista)
