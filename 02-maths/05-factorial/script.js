/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        var inputnum = document.getElementById("number").value;
    
    for(var i = inputnum - 1; i >= 1; i--){
        var inputnum=inputnum*i;
        
            };
document.write(inputnum);
    
});

})();


