/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    let  name;
    let  gender;
    let  city;

    do {
        name = prompt (" What is your name?");
        gender = prompt ("What is your gender?");
        city = prompt ("which city you live in?");
    }

    while (!confirm(`Your age:${name} Your gender: ${gender} Your place: ${city}`));

    

})();
