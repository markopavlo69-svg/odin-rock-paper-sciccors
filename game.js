// INIT


//Variables
let cScore =0;
let hScore =0;



//functions
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    if(randomNumber === 0){
        choice = "rock"
    }
    else if (randomNumber === 1){
        choice = "paper";
    }
    else{
        choice = "sciccors";
    }
    return choice
}

 function getHumanChoice(){
    let hchoice = prompt("to play type rock, paper or sciccor");
    console.log(hchoice);
    return hchoice

}




