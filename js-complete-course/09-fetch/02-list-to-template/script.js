/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // use fetch to obtain the data
    // display it in the target id
    // cloneNode, see https://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element under html templates.
    let run = document.getElementById("run")



    run.addEventListener("click", function () {
        //fetch was correct
        fetch('http://localhost:3000/heroes')
            .then (resolve=> resolve.json())
            .then(xmenAmount=> showAllData())


        //assuming a loop will be involved to put all the x-men into a template.
        function showAllData(xmenAmount) {
            //currently using 5 instead of something.length
            for (let i = 0; i < 5; i++) {
                //looping for each of the xmen
                let listOfXmen= xmenAmount[i];
                //when using document we can call upon the queryselector to specify what we seek.
                let xmen = document.getElementById('tpl-hero').content.cloneNode(true);
                //selector apparently wants a dot, otherwise it complains
                xmen.querySelector('.name').innerText=listOfXmen.name;


            }
        }

    })
})();
