//
document.addEventListener("DOMContentLoaded", function() {
  // Selecionar o formulário pelo ID
  const formulario = document.getElementById("form_register");
  // Adicionar um evento de envio ao formulário
  formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      // Exibir um alerta com uma mensagem
      alert("Cadastro realizado com sucesso!");
  });
});


function addProduct(){
  
}


