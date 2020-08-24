/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function(operation) {
        switch (operation){
            case 'addition':
                var x= parseInt(document.getElementById("op-one").value);
                var y= parseInt(document.getElementById("op-two").value);
                var resultadd= x+y;
                alert("the result is "+resultadd);

            break;

            case 'substraction':
                var x= parseInt(document.getElementById("op-one").value);
                var y= parseInt(document.getElementById("op-two").value);
                var resultsub= x-y;
                alert("the result is "+resultsub);
                break;
            case 'multiplication':
                var x= parseInt(document.getElementById("op-one").value);
                var y= parseInt(document.getElementById("op-two").value);
                var resultmul= x*y;
                alert("the result is "+resultmul);
                break;
                case 'division':
                    var x= parseInt(document.getElementById("op-one").value);
                    var y= parseInt(document.getElementById("op-two").value);
                    var resultdiv= x/y;
                    alert("the result is "+resultdiv);
                    break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
