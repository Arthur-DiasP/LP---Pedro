// Referência aos elementos
const card2 = document.querySelector('.card-2');
const popup = document.getElementById('popup');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupBtn = document.getElementById('close-popup-btn');
const menu = document.querySelector('.menu');  // Seleciona o menu

// Ao clicar no card-2, mostra o pop-up e o overlay e esconde o menu
card2.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupOverlay.style.display = 'block';
    menu.style.display = 'none';  // Esconde o menu
});

// Ao clicar no botão de fechar, oculta o pop-up, o overlay e mostra o menu novamente
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
    menu.style.display = 'flex';  // Exibe o menu novamente
});

// Ao clicar no overlay (fundo escuro), também fecha o pop-up e mostra o menu novamente
popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
    menu.style.display = 'flex';  // Exibe o menu novamente
});

// Seleção dos elementos para o segundo pop-up
const card3 = document.querySelector('.card-3');
const popup2 = document.getElementById('popup-2');
const overlay2 = document.getElementById('popup-overlay-2');
const closePopup2Btn = document.getElementById('close-popup-btn-2');

// Função para abrir o pop-up 2
card3.addEventListener('click', () => {
    popup2.style.display = 'block';
    overlay2.style.display = 'block';
    menu.style.display = 'none';  // Esconde o menu
});

// Função para fechar o pop-up 2
closePopup2Btn.addEventListener('click', () => {
    popup2.style.display = 'none';
    overlay2.style.display = 'none';
    menu.style.display = 'flex';  // Exibe o menu novamente
});

// Fechar o pop-up ao clicar no overlay
overlay2.addEventListener('click', () => {
    popup2.style.display = 'none';
    overlay2.style.display = 'none';
    menu.style.display = 'flex';  // Exibe o menu novamente
});




// JavaScript para controlar a exibição das imagens e o título
let currentImageIndex = 0;
const images = document.querySelectorAll("#popup-2 .popup-images img"); // Todas as imagens
const titles = ["Resultado 1", "Resultado 2", "Resultado 3"]; // Títulos que correspondem às imagens

// Função para atualizar a imagem e o título
function changeImage() {
  // Esconde todas as imagens
  images.forEach(img => img.classList.remove("active"));

  // Atualiza o título
  const titleElement = document.querySelector("#popup-2 .popup-images h2");
  titleElement.textContent = titles[currentImageIndex]; // Altera o texto do título

  // Exibe a imagem atual
  images[currentImageIndex].classList.add("active");

  // Atualiza o índice da imagem para a próxima
  currentImageIndex = (currentImageIndex + 1) % images.length; // Volta ao início após a última imagem
}

// Configura a troca automática das imagens a cada 8 segundos
setInterval(changeImage, 8000);

// Inicializa a primeira imagem e título quando o pop-up é mostrado
function showPopup() {
  document.querySelector("#popup-2").style.display = "block";
  changeImage(); // Mostra a primeira imagem e título ao abrir o pop-up
}

// Função para fechar o pop-up
function closePopup() {
  document.querySelector("#popup-2").style.display = "none";
}

// Exemplo de ativação do pop-up (pode ser vinculado a eventos de clique, por exemplo)
document.querySelector("#open-popup-btn").addEventListener("click", showPopup);
document.querySelector("#popup-2 .close-popup").addEventListener("click", closePopup);
