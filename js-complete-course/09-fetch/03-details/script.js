/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")



    run.addEventListener("click", function () {
        //fetch was correct
        fetch('http://localhost:3000/heroes')
            .then (resolve=> resolve.json())
            //pass data to the function as parameter
            .then(data=> showAllData(data))


        //assuming a loop will be involved to put all the x-men into a template.
        //
        function showAllData(heroes) {
            heroes.forEach(xmen=> {
                let input = document.getElementById('hero-id').value



                let templateNode = document.getElementById('tpl-hero').content.cloneNode(true);
                //comparing id to input to make sure the correct one is shown
                if (xmen.id==input){
                templateNode.querySelector('.name').innerText = xmen.name;
                templateNode.querySelector('.alter-ego').innerText = xmen.alterEgo;
                templateNode.querySelector(".powers").innerText=xmen.abilities;
                //won't be visible without appending it to target
                    document.getElementById("target").appendChild(templateNode);
                }

            })



        }


    })

})();
