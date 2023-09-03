let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10); // function to return a random integer between 0 and 9.


//function to accept three variables as parameters: human guess, computer guess
// and the secret target. it returns true if human wins and false if computer wins.
function compareGuesses (human, computer, secret){
    const humandiff = Math.abs(secret - human); // calculate the difference between the human guess and the real target.
    const computerdiff = Math.abs(secret - computer); // calculate the difference between the computer guess and the real target.

    if(humandiff < computerdiff){
        return true;
    } else if(computerdiff < humandiff){
        return false;
    }else{
        return true;
    }
}

const updateScore = winner => {
    winner === 'human' ? humanScore += 1 : computerScore += 1;
}

function advanceRound () {
    currentRoundNumber += 1;
    return currentRoundNumber;
}

for(var i; i < 10; i++) {
let winner = compareGuesses(7, 3, generateTarget());
if (winner === true){
    winner = 'human';
}else{
    winner = 'computer';
}

updateScore(winner);
let round = advanceRound();
console.log(round);
console.log(`winner of the ${currentRoundNumber} round is ${winner}`);
console.log(`secret number is ${generateTarget()}`);
}
