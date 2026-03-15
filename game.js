// INIT
playRound();
console.log( "computer:",getComputerChoice());
console.log( "human",getComputerChoice());
//Variables
let computerScore =0;
let humanScore =0;



//functions
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if(randomNumber === 0){
        computerChoice = "rock"
    }
    else if (randomNumber === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "sciccors";
    }
    return computerChoice
}

 function getHumanChoice(){
    let humanChoice = prompt("to play type rock, paper or sciccor");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;

}

function playRound(humanChoice, computerChoice){
    getHumanChoice();
    getComputerChoice();
    

    if(humanChoice === "rock" && computerChoice === "paper" ){
        console.log("computer wins")
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "sciccor"){
        console.log("you win")
        humanScore++
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("you win");
        humanScore++;
    }
       else if(humanChoice === "paper" && computerChoice === "sciccor"){
        console.log("computer wins");
        computerScore++;
    }
       else if(humanChoice === "sciccor" && computerChoice === "rock"){
        console.log("computer wins");
        computerScore++;
    }
       else if(humanChoice === "sciccor" && computerChoice === "paper"){
        console.log("you win");
        humanScore++;
    }
    else{
        console.log("tie")
    }

}




