/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", function () {
        let random = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
        document.getElementById("n-1").innerHTML = (random);
        console.log(random);
        //smallest number
        const minRan = Math.min(...random)

        document.getElementById("min").innerHTML = (minRan);
        // Biggest number
        const maxRan = Math.max(...random);
        document.getElementById("max").innerHTML = (maxRan);

        var sumRan = random.reduce(function (a, b) {

            return a + b;

        }, 0);
        document.getElementById("sum").innerHTML = (sumRan);

        //Average starts here
        var avRan=sumRan/random.length
        document.getElementById("average").innerHTML = (avRan);
    })


})();
