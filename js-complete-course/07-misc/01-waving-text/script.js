/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
 var text =document.getElementById("target").innerHTML=("In monochrome memories, our tears are painted in red");

 // split the string into parts, these parts we will have to change
 var res = text.split(" ");
 console.log(res);

 for (i=1; i<res.length; i++){
  document.getElementById("res")[i].style.fontSize= "20px"+i;
 }



})();
