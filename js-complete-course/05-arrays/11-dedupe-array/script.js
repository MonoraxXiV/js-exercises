/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", function () {
        function getUnique(array){

            var difFruit = [];



            // Loop through array values

            for(i=0; i < array.length; i++){

                if(difFruit.indexOf(array[i]) === -1) {

                    difFruit.push(array[i]);

                }

            }

            return difFruit;

        }

        var difFruit = getUnique(fruits);

        console.log(difFruit);


    })
})();
