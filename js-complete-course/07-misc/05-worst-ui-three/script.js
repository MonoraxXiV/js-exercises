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
    var target= document.getElementById("target");
    target.innerHTML="";



    //attempting to generate a random integer between the values
    textfields.forEach((textfield)=>{

        var interval = setInterval(function(){ slotsMachine(textfield)}, 1000);
        //added anonimous function https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions
        //https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
        intervals.push(interval);
    })
    function slotsMachine(target) {
        //random number generated between the min-max of textfields.
        var number = Math.floor(Math.random() * (parseInt(target.dataset.max) -parseInt(target.dataset.min))) + parseInt(target.dataset.min);

        target.value=number;
        //adding 0 to numbers lower to 10.
        if (number <10){
            target.value="0"+number;
        }

    }
    buttons.forEach((button,index)=>{
        //Create spans inside your function, cause you need them here.
        var span =document.createElement("SPAN");
        //adding class due to having another span in html, you want the ones you made, not ones that are already there.
        span.classList.add("telephone");
        //Set to min as starting value, looks cleaner otherwise it starts with random values.
        span.innerHTML=textfields[index].dataset.min;
        target.appendChild(span);

        button.addEventListener("click",function(){
            //stops interval when you press the button, used an array to keep index, as to not stop all intervals at once.
            clearInterval(intervals[index]);
            //calls upon the values of span, who share the class tag telephone.
            var spans= document.getElementsByClassName("telephone");
            //assigning values to the correct span.
            spans[index].innerHTML=textfields[index].value;

        })
    })

})();
