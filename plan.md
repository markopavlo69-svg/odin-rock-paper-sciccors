Setup
===================
create html DONE
link js DONE
game will be only played in console!

PHASE 1
==============================
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

create function getComputerChoice
use match.random to get a number between 0 and 3 save this to a var

IF ELSE THEN
0 is rock 1 is paper 2 is sciccor

SEQUENCE
test
==========================================================================