/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var myDate = new Date();
    var hrs = myDate.getHours();
    var minutes = myDate.getMinutes();
    var total=hrs+minutes;


    if (total > 1730) {
        document.getElementById("target").innerHTML = "Good evening";
    }
    else{
        document.getElementById("target").innerHTML = "hello";
    }
})();
