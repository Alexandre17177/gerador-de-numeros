    function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let até = parseInt(document.getElementById('ate').value);


    let sorteados = [];
    if (quantidade > (até-de + 1)) {
        alert ("erro")
        console.log (quantidade, de, até);
        return;
    }
    for (let i = 0;i < quantidade; i++) {
        let numero = gerarNumeroAleatorio(de, até);
        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, até);
            console.log("gerando numero");
        }
        sorteados.push(numero);
        console.log (sorteados)
    }
    if (de < até) {
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotão();
    } else {
        alert ("erro: insira um numero minimo menor que o numero maximo!");
    }
}
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotão() {
    let botão = document.getElementById('btn-reiniciar');
    if (botão.classList.contains("container__botao-desabilitado")) {
        botão.classList.remove("container__botao-desabilitado");
        botão.classList.add("container__botao");
    }
}
function reiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao')) {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}