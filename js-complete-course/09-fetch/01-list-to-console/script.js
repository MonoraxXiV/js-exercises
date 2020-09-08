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
      //fetch was correct
      fetch('http://localhost:3000/heroes')
          //fetch gives a promise, do not have ; behind that statement if you want to use a .then
          .then (resolve=> resolve.json())
          //gods knows where resolve.json is located, Kayalin does not.
          .then(data=>console.log(data))

   })

})();
