// Função que mostra ou oculta as opções de acessibilidade
function acessibilidade() {
  var opcoes = document.querySelector(".opcoes-acessibilidade");
  opcoes.style.display = opcoes.style.display === "block" ? "none" : "block";
}

// Função que aplica o tamanho da fonte salvo no localStorage ao carregar a página
function aplicarFonteSalva() {
  var tamanhoSalvo = localStorage.getItem("tamanhoFonte");
  if (tamanhoSalvo) {
    document.querySelector("body").style.fontSize = tamanhoSalvo + "px";
  }
}

// Função que aumenta a fonte do site
function aumentarFonte() {
  var body = document.querySelector("body");
  var currentSize = window.getComputedStyle(body).fontSize;
  var newSize = parseFloat(currentSize) * 1.2; // Aumenta o tamanho da fonte em 20%
  body.style.fontSize = newSize + "px";
  localStorage.setItem("tamanhoFonte", newSize); // Salva o novo tamanho no localStorage
}

// Função que diminui a fonte do site
function diminuirFonte() {
  var body = document.querySelector("body");
  var currentSize = window.getComputedStyle(body).fontSize;
  var newSize = parseFloat(currentSize) * 0.8; // Diminui o tamanho da fonte em 20%
  body.style.fontSize = newSize + "px";
  localStorage.setItem("tamanhoFonte", newSize); // Salva o novo tamanho no localStorage
}

// Aplica o tamanho da fonte salvo ao carregar a página
document.addEventListener("DOMContentLoaded", aplicarFonteSalva);

// Função que mostra ou oculta o menu do site
function menuToggle() {
  var menu = document.querySelector(".menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    document.querySelector("span.burger").innerHTML = "menu";
  } else {
    menu.style.display = "flex";
    document.querySelector("span.burger").innerHTML = "close";
  }
}

// Função que arruma os bugs ao redimensionar a janela
function mudouTamanhoJanela() {
  const itens = document.querySelector(".menu");
  const burger = document.querySelector(".burger");
  if (window.innerWidth >= 768) {
    itens.style.display = "flex";
  } else {
    itens.style.display = "none";
    burger.innerHTML = "menu";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Sistema de Compartilhamento
  const shareBtn = document.getElementById("share");
  if (shareBtn) {
    shareBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      // Tenta compartilhar o arquivo PNG
      if (navigator.canShare && window.fetch) {
        try {
          const response = await fetch(shareBtn.href);
          const blob = await response.blob();
          const file = new File([blob], "qrcode.png", { type: "image/png" });

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "QR Code",
              text: "Veja este QR Code!",
            });
            return; // Sucesso ao compartilhar o arquivo, não faz mais nada
          }
        } catch (err) {
          // Se falhar, cai para o fallback abaixo
        }
      }
      // Fallback: compartilha o link
      if (navigator.share) {
        navigator
          .share({
            title: "QR Code",
            text: "Veja este QR Code!",
            url: shareBtn.href,
          })
          .catch(() => {
            // Usuário cancelou ou não compartilhou
          });
      } else {
        alert("O compartilhamento não é suportado neste navegador.");
      }
    });
  }

  // Adiciona o rodapé à todas as páginas
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <div class="acessibilidade">
      <button id="acessibilidade" onclick="acessibilidade()">
        <span class="material-symbols-outlined"> accessibility_new </span>
      </button>
      <div class="opcoes-acessibilidade">
        <button id="aumentar-fonte" onclick="aumentarFonte()">A +</button>
        <button id="diminuir-fonte" onclick="diminuirFonte()">A -</button>
      </div>
    </div>
    <p>&copy; 2025 <br> Projeto desenvolvido pelos alunos das turmas 3º A e 3º B do Colégio Adolpho</p>
  `;
});
