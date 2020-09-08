/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let run = document.getElementById("run")

    run.addEventListener("click", function () {

        //await the steps in the other functions
        async function resolveHandler(resolve) {
           await resolve.forEach(resolve => {
                console.log(resolve)
            })
        }

        async function rejectHandler(reject) {
           await console.error("error");
        }

        //getPosts need parameters reject and resolve.
        //As the promise was already made in promises.js, so no new one was needed.
        //don't await the function that calls the other functions
            window.lib.getPosts().then(resolveHandler, rejectHandler);







    })

})();
