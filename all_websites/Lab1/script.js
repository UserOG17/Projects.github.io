//console.log("hello world")
function printHello(){
    console.log(userInput.value) 
}
function winner(){

    
    let userInput=document.getElementById("user-input")
    let winnerTag = document.getElementById("winner")
    let computer = document.getElementById("computer")

    let randomnumber=Math.random()
        randomnumber=randomnumber *(3-0) +0
        randomnumber=Math.floor(randomnumber)
        console.log(randomnumber)
    let moves = ["computer chose rock","computer chose paper","computer chose scissors"]
    let computer_moves= moves[randomnumber]
    
    console.log("computer move: " + computer_moves)
    console.log("player moves: " + userInput.value)
    
    let winnerText = ''

    if(userInput.value==computer_moves){
        
        winnerText = "Its a tie!"
    }
    
    if(userInput.value == "rock" && computer_moves=="computer chose paper"){
    
        winnerText = "You lost!"
    }
    if(userInput.value == "paper" && computer_moves == "computer chose scissors"){
    
        winnerText = "You lost!"
    }
    if(userInput.value == "scissors" && computer_moves == "computer chose rock"){
    
        winnerText = "You lost!"
    }
    if(userInput.value == "rock" && computer_moves == "computer chose scissors"){
    
        winnerText = "You won!"
    }
    if(userInput.value == "paper" && computer_moves== "computer chose rock"){
    
        winnerText = "You won!"
    }
    if(userInput.value == "scissors" && computer_moves== "computer chose paper"){
    
        winnerText = "You won!"
    }
    
    if(userInput.value == "rock" && computer_moves == "computer chose rock"){
    
        winnerText = "Its a tie!"
    }
    if(userInput.value == "paper" && computer_moves== "computer chose paper"){
    
        winnerText = "Its a tie!"
    }
    if(userInput.value == "scissors" && computer_moves== "computer chose scissors"){
    
        winnerText = "Its a tie!"
    }

    winnerTag.innerHTML = winnerText
    computer.innerHTML = computer_moves
   
}    

