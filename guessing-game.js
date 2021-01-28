const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkGuess(num) {
    if (num > secretNumber) {
        console.log('Too high');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function askGuess() {
    rl.question('Enter a guess: ', (answer) => {
        if (Number(answer) === secretNumber) {
            console.log("You win!");
            rl.close;
        } else {
            checkGuess(answer);
            askGuess();
        }
      });
}

function randomInRange (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function askRange() {
    rl.question("Enter a max number: ", (max) => {
        rl.question("Enter a min number: ", (min) => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`)
            secretNumber = randomInRange(Number(min),Number(max));
            askGuess();
        })
    })
}

askRange();

