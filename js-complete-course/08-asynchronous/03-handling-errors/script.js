/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run");
    //when button is clicked then it will get the posts.
    run.addEventListener("click", getPersons);

    function getPersons() {
        //obtaining posts
        window.lib.getPersons(function (error, response) {
            if (error) {
                console.error("error");
            } else

                response.forEach(response => {

                    console.log(response)
                })

        })

    }
})();
