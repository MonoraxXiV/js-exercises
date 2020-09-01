/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
password = document.getElementById("pass-one");
(function() {



    function passLength(input){

        if(input.length > 10) {return false;}
        else {return true;}

    }

    function counter(input){
        let i = input.length;
        document.getElementById("counter").innerHTML = i + "/10";
    }
    password.onkeyup = function() {

        if (!passLength(this.value)) password.value = password.value.substr(0, 10);
        counter(this.value);
    }


})();
