/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

//use fetch to find the data
//use REST architecture to retrieve the data.
//then use REST to show the data
//display data in console log.

(() => {
   let run = document.getElementById("run")

   run.addEventListener("click", function () {
      fetch('http://localhost:3000/heroes');
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", 'http://localhost:3000/heroes', true);
      xhttp.send();

      let response= xhttp.responseText;
      console.log(response);
   })

})();
