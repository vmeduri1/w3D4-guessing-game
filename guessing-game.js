const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let secretNumber = 23;
askGuess();

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
};
