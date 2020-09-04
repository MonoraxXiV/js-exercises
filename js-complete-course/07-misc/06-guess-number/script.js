/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // 1 page get loaded, random number between 0 and 100 is generated.
    // 2. prompts user for a number.
    // 3.compares guess with number -> responds higher or lower or that's it if correct.
    // 4. add counter for Y, where Y is the amount of guesses.
    //5. When number is guessed show how many guesses it took.

    var guessCount = 0;

    function guessGame() {
        var randomNumber = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
        console.log(randomNumber) //for now keep for debug reasons, remove later.
        do {
            var guess = prompt("Please enter a number");


            if (guess > randomNumber) {
                alert("lower");
                guessCount++;


            } else if (guess < randomNumber) {
                alert("higher");
                guessCount++;


            } else if (guess == randomNumber) {
                guessCount++
                alert("that's it, you needed " + guessCount + " tries to find it.");
            } else {
                alert("this is not a valid number");

            }
        } while (guess != randomNumber);
    }

    guessGame();
})();
