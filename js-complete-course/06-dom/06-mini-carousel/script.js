/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let firstImage = document.getElementsByTagName("img");
    var i=0;


        function nextPic() { //scrolls through the index of the gallery array.
            i += 1;
            if (i > gallery.length - 1) {
                i = 0;
            }
            firstImage.src = gallery[i];
            return gallery[i];
            //make sure to return this, otherwise the source for the next picture gets confused.
        }

    document.getElementById("next").addEventListener("click", function (){
        firstImage[0].setAttribute("src", nextPic()); //assigns the index number.
    });

})();
