//console.log("hello world")
function printHello(){
    console.log(userInput.value) 
}

userInput=document.getElementById("user-input")

let randomnumber=Math.random()
    randomnumber=randomnumber *(3-0) +0
    randomnumber=Math.floor(randomnumber)
    console.log(randomnumber)
let moves = ["rock","paper","scissors"]
let computer_moves= moves[randomnumber]
