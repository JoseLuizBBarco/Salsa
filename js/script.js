const estagios = [
    { emoji: "🌰", texto: "1. Semente — A salsa começa como uma pequena semente marrom." },
    { emoji: "🌱", texto: "2. Germinação — A semente brota e surge o primeiro brotinho." },
    { emoji: "🌿", texto: "3. Plântula — Pequenas folhas aparecem, é o começo da salsa." },
    { emoji: "🌾", texto: "4. Crescimento — As folhas se desenvolvem e crescem rapidamente." },
    { emoji: "🌸", texto: "5. Floração — A salsa floresce para formar novas sementes." }
  ];

  let indice = 0;

  function proximoEstagio() {
    indice = (indice + 1) % estagios.length;
    document.getElementById("imagem").innerText = estagios[indice].emoji;
    document.getElementById("descricao").innerText = estagios[indice].texto;
  }