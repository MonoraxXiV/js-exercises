/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //add two callback parameters to window.lib.getposts
    // one error, one array
    //call button listener
    //on call use getPosts
    // show results in console.log
    let posts= [];
    let nextpost= document.getElementById("utils.generatePost()");

    //callbacks can be found under _shared then callbacks.js.
   /* function postError(){
        if (error){

        }
        else{
            console.log("no error, carry on")
        }
    }
*/
    //you need the next value
    document.getElementById("run").addEventListener("click", function() {

        function gettingPost() {

            posts = window.lib.getPosts(error,response);
            console.log (posts)

        }


        /*
        async function asyncCall() {
            const postContent= fetch (gettingPost());
            const result = await postContent;


            console.log(posts);

        }
        */


    })



})();
