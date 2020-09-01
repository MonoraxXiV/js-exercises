/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    /*Inside the element with id "target", create an HTML table with 1 column and 10 rows.

     */

    var table = document.createElement('table');

    for(i=1; i<=10; i++) {
       var row= table.insertRow();
        for (j = 1; j <= 1; j++) {
            var cell = row.insertCell(j - 1);

        }
    }
    document.getElementById("target").appendChild(table);
})();
