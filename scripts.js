let botaoPergunta = document.querySelector(".btn-pergunta")
let menu = document.querySelector(".pergunta")
let imagemPergunta = document.querySelector("#img-X")
const tradução = document.querySelector("#idiomas")



const pergunta = () => {

    if(menu.style.display === "none"){
        menu.style.display = "block" // displayd e origem, torna a aparecer
        imagemPergunta.id = "img-rotação"
    } else {
        menu.style.display = "none"
        imagemPergunta.id = "img-X"
    }
    
}


function traduzir() {
    
    
} 

tradução.addEventListener("change", traduzir)
botaoPergunta.addEventListener("click", pergunta)