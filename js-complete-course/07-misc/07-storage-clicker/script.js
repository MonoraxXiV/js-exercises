/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // 1. click the button increases the number
    //2. number updates
    //3. save the number in local storage
    //4. get it out of storage then display


    // don't declare getCounter as 0 in the start, was a bad idea when you want to reload and keep adding

    let target= document.getElementById("target")
    let getCounter=localStorage.getItem("counter") //4

    //4.updates the target upon page load
    target.innerHTML=getCounter;
    // 1.button function increases counter per click
    document.getElementById("increment").addEventListener("click", function(){
        getCounter++;
        //3.sets the counter as a locally saved item
        localStorage.setItem("counter", getCounter);
        //2.updates the target upon click
        target.innerHTML=getCounter;

    })


})();
