/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var newImage= document.createElement("img");
    let ImageSrc = document.getElementById("source").getAttribute("data-image");

    newImage.src=ImageSrc;
    console.log(newImage.src);
//source path finally is correct, tried a few ways, like newImage.src, but forgot to get attribute.
    let target = document.getElementById("target").appendChild(newImage);
    // AppendChild information:https://www.w3schools.com/jsref/met_node_appendchild.asp
    //from my understanding changes the content of target to the newImage and it's attributes
    //shows random kitties now so seems correct.

    let element = document.getElementById("source").remove(); //removing the old source








})();
