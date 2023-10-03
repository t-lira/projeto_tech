//Alert envio de formulário
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


// Função para rolar até o topo da página
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.addEventListener('scroll', toggleGoToTopButton);

document.getElementById('goToTopButton').addEventListener('click', scrollToTop);






