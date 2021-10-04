const cards = document.querySelectorAll(".grid-item")

function flipCard(){
    
    
    this.classList.toggle("flip")
}

cards.forEach(card => card.addEventListener("click", flipCard))