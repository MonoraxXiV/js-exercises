/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var d = new Date();
    var todayYear = d.getFullYear();
    var todayMonth = d.getMonth();
    var todayDate = d.getDate();
    var todayHour= d.getHours();
    var todayMin= d.getMinutes();

    const event = new Date(d);

    console.log(event.toString());


    document.getElementById("target").innerHTML = (event.toDateString()+", "+ todayHour+"h"+todayMin);


})();
