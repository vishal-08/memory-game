const cards = document.querySelectorAll(".grid-item")
const scoreEl = document.getElementById("score")
const failedEl = document.getElementById("failed-el")
let score = 0
let failed = 0
//first card is not flipped
let isFirstCardFlipped = false;
let freezeCards = false
let firstCard
let secondCard


function flipCard(){
    if(freezeCards) return
    if(firstCard === this) return

    this.classList.add("flip")
   
    if(!isFirstCardFlipped)
    {
      firstCard = this
      isFirstCardFlipped = true

      return
    }
    
    secondCard = this
    
      
    cardMatches()
}

function cardMatches(){
  if(firstCard.dataset.avengers === secondCard.dataset.avengers)
    {
      disableCards()
      score += 10
      scoreEl.innerHTML = `Score : ${score}`
      
    }
    else
    {
      reFlipCard()
      failed += 1
      if(failed<10)
      {
        failedEl.innerHTML = `Failed Attempt : 0${failed}`
      }
      else
      {
        failedEl.innerHTML = `Failed Attempt : ${failed}`
      }
      
    }
    
}

function reFlipCard()
{

  freezeCards = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')

    resetCards()
  },1500)
  
 
}


function disableCards()
{
  firstCard.removeEventListener("click", flipCard)
  secondCard.removeEventListener("click", flipCard)
  resetCards()
  
}

function shuffle() {
  cards.forEach(card => {
    let suffleCards = Math.floor(Math.random() * 12)+1;
    card.style.order = suffleCards;
  });
}


function resetCards(){
  isFirstCardFlipped = false
  freezeCards = false
  firstCard = null
  secondCard = null
}

shuffle()




cards.forEach(card => card.addEventListener("click", flipCard))


