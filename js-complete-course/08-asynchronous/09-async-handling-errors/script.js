/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run= document.getElementById("run")

    run.addEventListener("click", function() {


        async function resolveHandler(resolve) {
           await console.log("success");
            resolve.forEach(resolve => {
                console.log(resolve)
            })
        }

        async function rejectHandler(reject) {
            await console.error("You had a 50% chance and rolled badly");
        }

        //getPosts need parameters reject and resolve.
        //As the promise was already made in promises.js, so no new one was needed.
        window.lib.getPersons().then(resolveHandler, rejectHandler);
    })
    })();
