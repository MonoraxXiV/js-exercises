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
            .then(data=> document.getElementById("target").innerHTML =data)


        function getTemplate (){
             document.getElementById("tpl-hero");

        }

    })
})();
