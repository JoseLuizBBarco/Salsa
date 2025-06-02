function acessibilidade() {
    var opcoes = document.querySelector('.opcoes-acessibilidade');
    opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
};

function aumentarFonte() {
    var body = document.querySelector('body');
    var currentSize = window.getComputedStyle(body).fontSize;
    var newSize = parseFloat(currentSize) * 1.2; // Aumenta o tamanho da fonte em 20%
    body.style.fontSize = newSize + 'px';
}

function diminuirFonte() {
    var body = document.querySelector('body');
    var currentSize = window.getComputedStyle(body).fontSize;
    var newSize = parseFloat(currentSize) * 0.8; // Diminui o tamanho da fonte em 20%
    body.style.fontSize = newSize + 'px';
}