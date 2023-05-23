const btnTrailer = document.querySelector(".btn-trailer")
const modal = document.querySelector(".modal")
const fecharModalPeloBtn = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkDoVideo = video.src
const btnDetalhes = document.querySelector(".detalhe")
const fecharDetalhe = document.querySelector(".modal-detalhes .fechar-modal")
const modalDetalhe = document.querySelector(".modal-detalhes")
const imagemDoHeroi = document.querySelectorAll(".imagem-heroi")
const fecharherois = document.querySelector(".modal-herois .fechar-modal")
const modalherois = document.querySelector(".modal-herois")
const btnHerois = document.querySelector(".herois")
const iconesDoMenuHeroi = document.querySelectorAll(".menu-icone")


btnTrailer.addEventListener("click",() => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

fecharModalPeloBtn.addEventListener("click", () => {
    alternarModal()
    fecharVideo()
})

btnDetalhes.addEventListener("click", () => {
    alternarDetalhe()
})

fecharDetalhe.addEventListener("click", () => {
    alternarDetalhe()
})

btnHerois.addEventListener("click", () => {
    alternarheroi()
})

fecharherois.addEventListener("click", () => {
    alternarheroi()
})


imagemDoHeroi.forEach(heroi  => {
    heroi.addEventListener("mouseenter", () => {
    
        const nomeDoHeroi = document.querySelectorAll(".none-do-heroi")
        nomeDoHeroi.forEach(nome =>  {

            if(nome.classList.contains("mouse")){
                nome.classList.toggle("mouse")
            }

            const removerONomeDoHeroi = document.querySelector(".modal-herois")
            removerONomeDoHeroi.addEventListener("mouseover", () => {
                if(nome.classList.contains("mouse")){
                    nome.classList.remove("mouse")
                }
            })
        })      
       const idDoheroi = `nome-${heroi.id}`
       const idDoNomeDoHeroi = document.getElementById(idDoheroi)
       idDoNomeDoHeroi.classList.add("mouse")

    })
})

iconesDoMenuHeroi.forEach(icone => {
    icone.addEventListener("click", () => {
        if(icone.classList.contains("selecionado")){
            return
        }

        const iconeAtiva = document.querySelector(".menu-icone.selecionado")
        iconeAtiva.classList.remove("selecionado")

        const removerAtributo = document.querySelector(".atributos.selecionado")
        removerAtributo.classList.remove("selecionado")

        const idDoatributo = `atributo-${icone.id}`
        idDoatributoDoHeroi = document.getElementById(idDoatributo)
        idDoatributoDoHeroi.classList.add("selecionado")

        icone.classList.add("selecionado")
        
    })
    
})



function alternarheroi(){
    modalherois.classList.toggle("ativo")
}

function alternarDetalhe(){
    modalDetalhe.classList.toggle("ativo")
}



function fecharVideo() {
    video.setAttribute("src", "")
}

function alternarModal() {
    modal.classList.toggle("aberto")
}