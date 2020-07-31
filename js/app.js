// declaração de função principal
function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    // variável dinâmica de saudações
    let saud = "Boa noite!"
// definição de horários e mudanças correspondentes
    if(hora >= 4 && hora < 12){
        img.src = "img/manha.png"
        document.body.style.background = "#c67a24"
        saud = "Bom dia!"
    }
    else if(hora >= 12 && hora < 18){
        img.src = "img/tarde.png"
        document.body.style.background = "#d95c00"
        saud = "Boa tarde!"
    }
    else{
        img.src = "img/noite.png"
        document.body.style.background = "#4c5a63"
    }

    msg.innerHTML = `${saud} Agora são ${hora} horas`
}