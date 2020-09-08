/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById("run")

    run.addEventListener("click", function () {
        let array;
        async function resolveHandler(resolve){

            await resolve.forEach(post => {
                window.lib.getComments(post.id).then(resolve2Handler,rejectHandler);
                array=post;
            })
        }
        //this one we do not await on as he is already part of the await in resolve.
      function resolve2Handler(comments){
           array.comment=comments;
             console.log(array);
        }

       async function rejectHandler(){
            await console.error("error");
        }

        window.lib.getPosts().then(resolveHandler,rejectHandler);


    })
})();
