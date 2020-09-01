/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
/* check how many characters more than 8 ===okay
* Check the amount of numbers inside >2 ===okay.*/

var password = document.getElementById("pass-one");



    function passLength(input){
        var numberCheck = input.match(/\d/g);
        if(input.length >= 8 && numberCheck.length>=2) {return true;}
        else {return false;}

    }
    password.onkeyup = function() {

        if (passLength(this.value)){
            document.getElementById("validity").innerHTML ="ok";
        }
        else {
            document.getElementById("validity").innerHTML =" Not ok";
        }
    }

})();
