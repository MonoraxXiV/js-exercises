/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // for each textfield randomize number between min-max value. Each second.
    //call on id value

    //setInterval (1000) for each textfield

    // then activate stop.
    var buttons = document.querySelectorAll("button");
    var textfields = document.querySelectorAll("input");
    var intervals=[];


    //attempting to generate a random integer between the values
    textfields.forEach((textfield)=>{

        var interval = setInterval(function(){ slotsMachine(textfield)}, 1000);
        //added anonimous function https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions
        //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
        intervals.push(interval);
    })
    function slotsMachine(target) {

        var number = Math.floor(Math.random() * (parseInt(target.dataset.max) -parseInt(target.dataset.min))) + parseInt(target.dataset.min);
        //random number generated between the min-max of textfields.
        target.value=number;

    }


})();
