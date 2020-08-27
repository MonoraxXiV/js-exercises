/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //loop for the month to change?
// function will have to check all 13th days of the month to check if that day was a friday
    // to find the friday you'd have to use getday(4)
    // if date=13 && day=4?
    // your code here


    var year = document.getElementById("year").value;


    for (i = 0; i < 12; i++) {
        var d = new Date(year, i, 13);
        if (d.getDay() === 5) {
            console.log(d.getMonth())
            alert(d.toLocaleString('default', {month: 'long'}));
        }
    }

})();
