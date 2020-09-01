/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let target = document.getElementById("target");
    var table = document.createElement("table");


    for ( r = 1; r <= 10; r++) {
        var row = document.createElement("tr");
        for (c = 1; c <= 10; c++){
            var column = document.createElement("td");
            var i=1;
            column.textContent=  r*c; //don't do +1, c++ is already doing that
            row.appendChild(column);}
        table.appendChild(row);
    }
    target.appendChild(table);
})();
