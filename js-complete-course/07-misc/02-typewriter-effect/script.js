/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var text = document.getElementById("target");
    var typeWriter = Array.from(text.innerHTML);
    text.innerHTML = "";
    var interval = setInterval(Typing, 100);
    var i = 0;


    function Typing() {

        var spanWriter = document.createElement("span");
        spanWriter.innerText = typeWriter[i];
        document.getElementById("target").appendChild(spanWriter);
        i++
        if (i >= typeWriter.length){
            clearInterval(interval)
            //clears interval after the max length of typewriter has been reached.
        }

        //while loop, breaking, setTimeOut, error handling
    }




})();
