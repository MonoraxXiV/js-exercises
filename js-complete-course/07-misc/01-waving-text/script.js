/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var text = document.getElementById("target");
    var res = Array.from(text.innerHTML);
    text.innerHTML="";
    let wave=[2,3,4,5,6,5,4,3,2];
    // split the string into parts, these parts we will have to change
    var j=0;
    console.log(res);



    for (var i = 0; i < res.length; i++) {
        var spanWords = document.createElement("span");
        spanWords.innerText = res[i];
        if (j >= wave.length){
            j=0;
        }
        spanWords.style.fontSize = wave[j]+"rem";
        document.getElementById("target").appendChild(spanWords);
        j++;

    }



})();
