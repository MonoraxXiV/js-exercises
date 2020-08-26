/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var button = document.getElementById("red");
    button.onclick = function(){
        document.body.style.backgroundColor = "red";
    };
    var button = document.getElementById("green");
    button.onclick = function(){
        document.body.style.backgroundColor = "green";
    };

    var button = document.getElementById("blue");
    button.onclick = function(){
        document.body.style.backgroundColor = "blue";
    };
    var button = document.getElementById("yellow");
    button.onclick = function(){
        document.body.style.backgroundColor = "yellow";
    };


})();
