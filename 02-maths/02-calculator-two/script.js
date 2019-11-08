/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*function test(a,b) {
    if (a+b);
    return true;
}

(function() {
    return true;
})();
*/



const num = parseInt(document.getElementById('op-one').value);
const num1 = parseInt(document.getElementById('op-two').value);
const opr = document.querySelectorAll('button');

function cal (){

    var num = parseInt(document.getElementById('op-one').value);
    var num1 = parseInt(document.getElementById('op-two').value);
    var opr = document.getElementById("actions").click();
    
        switch (opr) {
            
            case  "addition" : alert( num + "+" + num1 + "=" + (num+num1));
            break;
    
            case  "-" : alert ( num + "-" + num1 + "=" + (num-num1));
            break;
    
            case  "*" : alert( num + "*" + num1 + "=" + (num*num1));
            break;
    
            case  "-" : alert( num + "/" + num1 + "=" + (num/num1));
            break;
    
            default : alert("wrong input");
            break;
                
        };
    };


