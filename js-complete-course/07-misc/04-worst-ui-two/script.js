/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var target= document.getElementById("target");
    target.innerHTML="";
    var buttons = document.querySelectorAll("button");
    buttons.forEach((button,index) => {

        var span =document.createElement("SPAN");
        span.classList.add("telephone");
        span.innerHTML=button.innerHTML;
        target.appendChild(span);

        button.addEventListener("click", function () {
            var spans= document.getElementsByClassName("telephone");
            var val = parseInt(this.innerHTML); //no value tag so we use innerHTML
            if (val >= this.dataset.min && val <= this.dataset.max) {

                val = val + 1;
                console.log(val);
                this.innerHTML = val;
                spans[index].innerHTML=val;
                if (val <10){
                    this.innerHTML="0"+val;
                    spans[index].innerHTML="0"+val;


                }

            //still an error on max values, use min-max, reset if hits above max.

            }

        })

    })


})();
