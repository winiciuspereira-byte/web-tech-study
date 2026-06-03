const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", function(event) {
    event.preventDefault();

    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        telefone.value.trim() === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    lista.innerHTML += `
        <li>
            <strong>Nome:</strong> ${nome.value}<br>
            <strong>Email:</strong> ${email.value}<br>
            <strong>Telefone:</strong> ${telefone.value}
        </li>
    `;

    nome.value = "";
    email.value = "";
    telefone.value = "";
});