/*
      criando variáveis
*/
 
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");    
 
/*
      criando função
*/
 
button.addEventListener("click", function(event)  {
        event.preventDefault();  
        const inputValue = nome.value;
        const templateHTML = `<li>${inputValue}</li>`;
        console.log(inputValue);
 
        // Incluir itens no HTML
        lista.innerHTML += `<li>${nome.value}</li>`;
 
        // Limpando campo
        nome.value = "";
 
    });
   
 