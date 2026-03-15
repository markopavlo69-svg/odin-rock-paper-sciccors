Setup
===================
create html DONE
link js DONE
game will be only played in console!

PHASE 1
============================== DONE
function getComputerChoice is needed
this function will return rock paper or sciccor as string randomly
no arrays needed
test function output before continueing


PHASE 2
============================
create function getHumanChoice
returns strings of rock paper or sciccor depending what is choosen
use prompt
test with console.log

PHASE 3
==========================
player score variables
humanScore and computerScore
starting value is 0

PHASE 4
=======================
create function playRound
two parameters humanChoice and computerChoice
make humanchoice case-insensitive so player can say rock Rock ROCK etc...
increment winner

PHASE 5 
========================
create function playGame
playRound should run inside playGame
play 5 rounds

PSEUDOCODE
==========================
SEQUENCE 
create variable inside that stores random number from 1-3
IF THEN ELSE
depending on the number it will output a string rock paper or sciccor
test with console.log
SEQUENCE
create function getHumanChoice
create variable that prompts the user for a choice
depending on the user input there will be a different return value
test with calling the function and console log
SEQUENCE
create variable cScore value 0
create variable hScore value 0
SEQUENCE
create function playRound
function has two parameters humanChoice and computer Choice
use the toLowerCase function to make human choice case insensitive in the function getHumanchoice
IF ELSE THEN
make every comparrision where one wins over the another and an else block for all ties
log the winner and increment score
test with console log
if else logic:
human rock computer rock tie
human rock computer paper computer wins DONE
human rock computer sciccor human wins DONE
human paper computer Rock human wins DONE
human paper computer paper TIE
human paper computer Sciccor Computer WINS DONE
human sciccor computer rock computer wins DONE
human sciccor computer paper human wins DONE
human sciccor computer sciccor TIE
