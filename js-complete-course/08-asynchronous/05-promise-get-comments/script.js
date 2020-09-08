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
    let array;
        function resolveHandler(resolve){
            console.log("success");
            resolve.forEach(post => {
                //.then creates infinite loop, .finally loses resolve as a defined object ->proved false
                //original had post.id
                //infinite looping was being caused by calling resolveHandler, within resolveHandler
                //solution: Make separate function to avoid this ^
                window.lib.getComments(post.id).then(resolve2Handler,rejectHandler);
                //made array to contain post then add comments to it.
                array=post;
            })
        }

        //made seperate function to avoid calling a function within said function.
        function resolve2Handler(comments){
            //here we add comments to array, displaying it.
            array.comment=comments;
            console.log(array);
        }
        function rejectHandler(){
            console.error("error");
        }

        //getPosts need parameters reject and resolve.
        //As the promise was already made in promises.js, so no new one was needed.
        window.lib.getPosts().then(resolveHandler,rejectHandler);


    })
})();
