/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    /*
    An exercise in creating the worst possible user interface for dialing a phone number:


     use the value of the slider to show the phone number (with a leading 0) in the target paragraph
     (target)

      (from 0460000000 to 0499999999).
     */

    var input= document.getElementById("slider")

    input.addEventListener("change",getValue)

    function getValue(e){
        var value= e.target.valueAsNumber;
        console.log(value);
        document.getElementById("target").innerHTML="0"+value;
    }

})();
