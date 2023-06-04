//Assigning the HTML Elements
export default class cardPlayer {
  $ = {}
  constructor() {  
    this.$.menu = this.#qs('[data-id="menu"]')
    this.$.playerOne  = this.#qs('[data-id="player1"]')
    this.$.playerTwo = this.#qs('[data-id="player2"]')
    this.$.startGameOne = this.#qs('[data-id="startgameplayer1"]')
    this.$.drawCardOne = this.#qs('[data-id="drawcardsplayer1"]')
    this.$.endGameOne = this.#qs('[data-id="endgameplayer1"]')
    this.$.card1 = this.#qs('[data-id="card1"]')
    this.$.startGameTwo = this.#qs('[data-id="startgameplayer2"]')
    this.$.drawCardTwo = this.#qs('[data-id="drawcardsplayer2"]')
    this.$.endGameTwo = this.#qs('[data-id="endgameplayer2"]')
    this.$.card2 = this.#qs('[data-id="card2"]')
    this.$.winnerOne = this.#qs('[data-id="winner"]')
    this.$.winnerTwo = this.#qs('[data-id="winner2"]')
    this.$.images = this.#qs('[data-id="images"]')
    this.$.inputtext = this.#qs('[data-id="input-text"]')
    this.$.inputtext2 = this.#qs('[data-id="input-text2"]')
    this.$.enterbutton = this.#qs('[data-id="enter"]')
    this.$.enterbutton1 = this.#qs( '[data-id="enter1"]')
    this.$.sum1 = this.#qs('[data-id="sumOne"]')
    this.$.sum2 = this.#qs('[data-id="sumTwo"]')
    this.$.messages = this.#qs('[data-id="message"]')
    this.$.messagePlayer2 = this.#qs('[data-id="message2"]')
    this.$.span  = this.#qs('[data-id="span"]')
  }

//Targeting the HTML elements
  #qs(selector, parent) {

    const el = parent
    
    ? parent.querySelector(selector)
    : document.querySelector(selector)
  
    if(!el) throw new Error("Could not find elements")
  
    return el 
   }
}





//const InputNameTwo = document.getElementById("input-button2").value

add = 0
spade = []
sentence = ""
let hasPlayed = false
let hasWon = false
let hasNotWon =  false
//text for the buttons
enterbutton.textContent = `ENTER`
enterbutton1.textContent = `ENTER`
inputtext.textContent = `Player One Enter Your name here`
startGameOne.textContent = `START GAME`
drawCardOne.textContent= `DRAW MORE CARDS`
endGameOne.textContent = `END GAME`
inputtext2.textContent = `Player Two Enter Your name here`
startGameTwo.textContent = `START GAME`
drawCardTwo.textContent= `DRAW MORE CARDS`
endGameTwo.textContent = `END GAME`
span.textContent = `Collect Your winnings`


// function for the images
image = ["Qcards.jpg","cardimage.jpg","Acards.png","card4.jpg","Kcard.jpg","qcard.jpg"]
function imagesInput(){
  let img = ""
  for(let i = 0; i < image.length; i++ ){
    img += `<img alt ="card player" class="image1" src="${image[i]}"`
  } 
  images.innerHTML = img
}


//playerOne.textContent  = `Welcome to the Game ${playerOneName}`
//playerTwo.textContent = `Welcome to the Game ${playerTwoName}`

//Generating Random cards
function generateRandomCard() {
  let randomCard = Math.floor(Math.random() * 15) + 1
  if(randomCard === 1){
    return 15 && 1
  } if (randomCard > 10 ){
    return 10
  } else{
    return randomCard
  }  

}
/*function computermessage(){
  if(sum1 < 21 && sum2 > 21){
     hasWon = true
  }
}*/
//Messages, 
function message(){
  for(let i = 0; i < add.length; i++){
    sum1 = add[i] + spade
}
  let Name = document.getElementById("username").value
  //let Name2 = document.getElementById("name").value//
    if(add === 21){
      sentence = `${Name} has won the Game`
         hasWon = true
    } else if (add < 21){
       sentence = `${Name} Do you want to draw another card`
    } else {
      sentence = `${Name} You are out of the game`
      //sentence2 = `Computer has won the game`
      hasNotWon = false
    }
    
    messages.textContent = sentence
    //sentences.textContent = sentence2
}
function messagePlayerTwo(){
  for(let i = 0; i < add.length; i++){
      sum2 = add[i] + spade
  }

  let Name2 = document.getElementById("name").value
    if(add === 21){
         sentence = `${Name2} has won the Game`
         hasWon = true
    } else if (add < 21){
       sentence = `${Name2} Do you want to draw another card`
       hasPlayed = true
    } else {
      sentence = `${Name2} You are out of the game`
      //sentence2 = `Computer has won the game`
      hasNotWon = false
      //console.log(sentence2)
    } 
    messagePlayer2.textContent = sentence
    //sentences.textContent = sentence2
}
//start Game Button for Player 1
startGameOne.addEventListener("click", function startOne(){
  hasNotWon = true
  let cardOne =  generateRandomCard()
  let cardDrawn1 = generateRandomCard()
  spade = [cardOne, cardDrawn1]
   add = cardOne + cardDrawn1
   card1.textContent += `${cardOne}  ${cardDrawn1}`
  hasPlayed = true
  startGameOne.disabled = true
})
//Start Game button for Player 2
startGameTwo.addEventListener("click", function startTwo(){
  hasNotWon = true
  let cardTwo =  generateRandomCard()
  let cardDrawn2 = generateRandomCard()
  spade  = [cardTwo, cardDrawn2]
  add = cardTwo + cardDrawn2
  startGameTwo.disabled = true
  card2.textContent += `${cardTwo} ${cardDrawn2}`
  })
  //Draw the Second Card for player 0ne
  drawCardOne.addEventListener("click", function drawCard1(){
    
    if(hasWon === false && hasNotWon === true){
      let secondCard = generateRandomCard()
      draw1.textContent += secondCard + " "
      add += secondCard
      spade.push(secondCard)
      sum1.textContent =`Sum: ${add}`
      localStorage.setItem("spade", JSON.stringify(spade))
      localStorage.getItem("spade")
      message()
    }
  })

//Draw the Second card for player Two
drawCardTwo.addEventListener("click", function drawCard2(){
  if(hasWon === false && hasNotWon === true){
    let secondCard2 = generateRandomCard()
    draw2.textContent += secondCard2 + " "
    add += secondCard2
    spade.push(secondCard2)
    sum2.textContent = `Sum: ${add}`
    //let spade = spade
    localStorage.setItem("spade2", JSON.stringify(spade))
    localStorage.getItem("spade2")
    messagePlayerTwo()
  }
  
})
//End game button for player One
endGameOne.addEventListener("click", function Endbutton1(){
  card1.textContent  = " "
  draw1.textContent = " "
})
//End game button for player Two
endGameTwo.addEventListener("click", function Endbutton2(){
  card2.textContent = " "
  draw2.textContent = " "
})
//Welcoming message player1 
enterbutton.addEventListener("click", function welcomeButton1(){
  let Name = document.getElementById("username").value
  playerOne.textContent  = `Welcome to the Game ${Name}`
    enterbutton.disabled = true
})
//Welcoming message player2
enterbutton1.addEventListener("click", function welcomeButton2(){
  let Name2 = document.getElementById("name").value
  playerTwo.textContent  = `Welcome to the Game ${Name2}`
    enterbutton1.disabled = true
})


//function for the number of visitors to the site
function noOfVisits(response) {
  document.querySelector("#visit").textContent = response.value;

  let total = 0, count = 1

while (count <= 10) {
  total += count
  count += 1
}
console.log(count)

}
//Winner
span.addEventListener("click", function winnerMessage(){
  window.location.reload()
})


