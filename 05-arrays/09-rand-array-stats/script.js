/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.






document.getElementById("run").addEventListener("click", function () {

 // random number//

let tds = document.querySelectorAll('td');
tds.forEach(td => {
    var getrandom = Math.floor((Math.random () * 100) +1 );
        td.innerHTML= getrandom;
        
})
});

// Smallest num//

var newarr = [];

newarr = newarr.push(getrandom);
console.log(newarr);
