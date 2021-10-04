const cards = document.querySelectorAll(".grid-item")

function flipCard(){
    
    
    this.classList.toggle("flip")
    setTimeout(() => {
        this.classList.remove('flip');
        
      }, 1500);

}

cards.forEach(card => card.addEventListener("click", flipCard))


