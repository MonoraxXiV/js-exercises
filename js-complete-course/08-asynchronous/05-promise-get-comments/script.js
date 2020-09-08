/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //Like in 04, promise is included in the functions you call from promises.js
    //getting the posts are the same as in 04, you might need to loop inside them again
    let run = document.getElementById("run")

    run.addEventListener("click", function () {

        function resolveHandler(resolve){
            console.log("success");
            resolve.forEach(post => {
                //.then creates infinite loop, .finally loses resolve as a defined object
                //original had post.id
                window.lib.getComments().finally(post.id,resolveHandler,rejectHandler);
                console.log(post);
            })
        }

        function rejectHandler(){
            console.error("error");
        }

        //getPosts need parameters reject and resolve.
        //As the promise was already made in promises.js, so no new one was needed.
        window.lib.getPosts().then(resolveHandler,rejectHandler);


    })
})();
