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

    //you need the next value
    //activating the button.
    let run = document.getElementById("run");
    //when button is clicked then it will get the posts.
    run.addEventListener("click", getPosts);

    function getPosts() {
        //obtaining posts
        window.lib.getPosts(function (error, response) {
            //printing post in each array
            response.forEach(response =>
            {
                //prints the arrays
                console.log(response)
            })

        })

    }








})();
