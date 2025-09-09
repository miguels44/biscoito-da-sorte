const sortes = [
    "Sua gentileza encontrará novos lares este ano.",
    "Sua gentileza dará força aos outros.",
    "Você tem uma personalidade vibrante.",
    "Grandes oportunidades virão quando você menos esperar.",
    "A sorte favorece os corajosos.",
    "Seu sorriso pode mudar o dia de alguém hoje.",
    "Confie no tempo — ele está preparando algo especial.",
    "A resposta que você procura está no silêncio.",
    "Hoje é um bom dia para começar algo novo.",
    "A vida retribui em dobro a gentileza que você espalha.",
    "O que parece um fim pode ser um novo começo disfarçado.",
    "Você é mais forte do que imagina.",
    "Uma surpresa positiva está a caminho.",
    "Se alguém está tão cansado que não<br> possa te dar um sorriso,<br> então deixa-lhe o teu."
]

function gerarSortes(){
    const randomFrases = Math.floor(Math.random() * (sortes.length))
    document.getElementById('sortesDisplay').innerHTML = sortes[randomFrases]
}

function openCoockie(){
    document.getElementById('principal').style.display= 'none'
    document.getElementById('secundaria').style.display = 'block'
    gerarSortes()
}

document.getElementById('voltar').onclick = function(e){
    e.preventDefault()
    document.getElementById('secundaria').style.display = 'none'
    document.getElementById('principal').style.display = 'block'
}
