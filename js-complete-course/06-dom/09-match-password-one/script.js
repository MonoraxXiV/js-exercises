/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */


(function () {
    let pass1 = document.getElementById("pass-one").value;
    let pass2 = document.getElementById("pass-two").value;


        if (pass1 === pass2) {
//once again remember to use multiple =='s to compare 1= is an assignment
        } else {
            document.getElementById('pass-one').style.borderColor = "red";
            document.getElementById('pass-two').style.borderColor = "red";
        }


})();
