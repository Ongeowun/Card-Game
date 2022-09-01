//Assigning the HTML Elements
const playerOne  = document.getElementById("player1")
const playerTwo = document.getElementById("player2")
const startGameOne = document.getElementById("startgameplayer1")
const drawCardOne = document.getElementById("drawcardsplayer1")
const endGameOne = document.getElementById("endgameplayer1")
const card1 = document.getElementById("card1")
const startGameTwo = document.getElementById("startgameplayer2")
const drawCardTwo = document.getElementById("drawcardsplayer2")
const endGameTwo = document.getElementById("endgameplayer2")
const card2 = document.getElementById("card2")
const winnerOne = document.getElementById("winner")
const winnerTwo = document.getElementById("winner2")
const images = document.getElementById("images")
const inputtext = document.getElementById("input-text")
const inputtext2 = document.getElementById("input-text2")
const enterbutton = document.getElementById("enter")
const enterbutton1 = document.getElementById("enter1")
const sum1 = document.getElementById("sumOne")
//const InputNameTwo = document.getElementById("input-button2").value


let hasWon = true
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
//let sentencePlayerOne = `${playerOneName} You have lost the Game`
let sentencePlayerOnewin = `Player One has won the game`
//let drawMoreCardSentence = `Do you want to draw more cards ${playerOneName}`

//let playerOneName = "Player One"
//let playerTwoName = "Player Two"

// function for the images
image = ["Qcards.jpg","cardimage.jpg","Acards.png","card4.jpg","Kcard.jpg","qcard.jpg"]
function imagesInput(){
  let img = ""
  for(let i = 0; i < image.length; i++ ){
    img += `<img alt ="" class="image1" src="${image[i]}"`
  } 
  images.innerHTML = img
}


//playerOne.textContent  = `Welcome to the Game ${playerOneName}`
//playerTwo.textContent = `Welcome to the Game ${playerTwoName}`

//start Game Button for Player 1
let startGame1 = startGameOne.addEventListener("click", function startOne(){
  let cardPicked1 = Math.floor(Math.random() * 13) + 1
  card1.textContent += cardPicked1
  startGameOne.disabled = true
  if(cardPicked1 === 1){
    return 11
  } if (cardPicked1 > 10 ){
    return 10
  } else{
    return cardPicked1
  }

})
//Start Game button for Player 2
startGameTwo.addEventListener("click", function startTwo(){
    let cardPicked2 = Math.floor(Math.random() * 13) + 1
    card2.textContent += cardPicked2
    startGameTwo.disabled = true
    if(cardPicked2 === 1){
      return 11
    } if (cardPicked2 > 10 ){
      return 10
    } else{
      return cardPicked2
    }
  })
  //Draw the Second Card for player 0ne
  let secondCard = drawCardOne.addEventListener("click", function drawCard1(){
    sum()
    let cardDrawn1 = Math.floor(Math.random() * 13) + 1
    draw1.textContent += cardDrawn1 + " ";
    
    //if(startGameOne < 21){
      //winner.textContent = cardDrawn1 + " "
    //} else if (startGameOne > 21){
    //  winner.textContent = `${sentencePlayerOne}`
    //} else if(startGameOne === 21){
      //winner.textContent = `${sentencePlayerOnewin}`
    //}
  })

//Draw the Second card for player Two
drawCardTwo.addEventListener("click", function drawCard2(){
  let cardDrawn2 = Math.floor(Math.random()*13) + 1
  draw2.textContent += cardDrawn2 + " "
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
  let Name = document.getElementById("input-button").value
  playerOne.textContent  = `Welcome to the Game ${Name}`
    enterbutton.disabled = true
})
//Welcoming message player2
enterbutton1.addEventListener("click", function welcomeButton2(){
  let Name2 = document.getElementById("input-button2").value
  playerTwo.textContent  = `Welcome to the Game ${Name2}`
    enterbutton1.disabled = true
})
//Adding the First card and the second card
let CardSum1 = [card1.textContent, draw1.textContent]
console.log(CardSum1)
function sum(){
sum1.textContent = `Sum: ${CardSum1[0]} + ${CardSum1[1]}`
}
//function for the number f visitors to the site
function NoofVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

let total = 0, count = 1

while (count <= 10) {
  total += count
  count += 1
}
console.log(total)