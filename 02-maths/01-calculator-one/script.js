/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    


    document.getElementById('addition').addEventListener('click', function () {
        const num = document.getElementById('op-one').value;
        const num1 = document.getElementById('op-two').value;
        document.write(parseInt(num1) + parseInt(num))
    });

    document.getElementById("substraction").addEventListener("click", function() {
        const num = document.getElementById('op-one').value;
        const num1 = document.getElementById('op-two').value;
        document.write(parseInt(num1) - parseInt(num))
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        const num = document.getElementById('op-one').value;
        const num1 = document.getElementById('op-two').value;
        document.write(parseInt(num1) * parseInt(num))
    });

    document.getElementById("division").addEventListener("click", function() {
        const num = document.getElementById('op-one').value;
        const num1 = document.getElementById('op-two').value;
        document.write(parseInt(num1) / parseInt(num))
    });

    

})();
