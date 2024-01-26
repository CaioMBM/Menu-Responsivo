// function para corrigir um erro que tava dando.
// Erro: Em telas pequenas quando abria e depois fechava o menu, quando ia para tela maiores, os itens ficavam sumiam.
function mudouTamanho(){
    /* Se a tela tiver 768px de largura ou mais, irá mostrar os itens do menu.
    Caso tenha menos de 768px de largura, os itens irão sumir. */
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}

// function para ocultar e mostrar os itens
function clickMenu(){
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}