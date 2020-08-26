/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;

        var today = new Date(); // i.e wed 04 may 2016 15:12:09 GMT

        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDate = today.getDate();

        var yearsDiff = todayYear - year;
        var age;

        if ( todayMonth < month )
        {
            age = yearsDiff - 1;
        }
        else if ( todayMonth > month )
        {
            age = yearsDiff ;
        }

        else //if today month = dob month
        { if ( todayDate < day )
        {
            age = yearsDiff - 1;
        }
        else
        {
            age = yearsDiff;
        }
        }
        alert("You are "+age+ " years old");


    })
})();
