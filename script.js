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


// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(nome, preco) {
  const carrinho = document.getElementById('lista-de-compras');

  // Criar um novo elemento de lista para o item
  const itemLista = document.createElement('li');
  itemLista.innerHTML = `${nome} - $${preco.toFixed(2)}`;

  // Adicionar o item à lista do carrinho
  carrinho.appendChild(itemLista);
}

// Adicionar um evento de clique para cada botão "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll('.adicionar-ao-carrinho');
botoesAdicionar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));
    adicionarItemAoCarrinho(nome, preco);
  });
});



