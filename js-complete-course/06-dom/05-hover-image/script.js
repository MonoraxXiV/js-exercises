/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   let Image=document.getElementsByTagName("img");
    //get tag makes it into an array so we use [0] to choose an image.
    let sourceImage= Image[0].src;
    let hoverImage = document.getElementsByTagName("img")[0].getAttribute("data-hover");
   console.log(sourceImage);

    Image[0].addEventListener("mouseover", function(  ) {
        Image[0].setAttribute("src",hoverImage)

    })
    Image[0].addEventListener("mouseout", function(  ) {
        Image[0].setAttribute("src",sourceImage);

    })

})();
