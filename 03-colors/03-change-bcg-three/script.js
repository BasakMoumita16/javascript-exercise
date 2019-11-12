/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



let btn = document.getElementById("run").addEventListener('click', function(){
        let  color =
        r= Math.floor(Math.random() * 16).toString(16);
        g= Math.floor(Math.random() * 16).toString(16);
        b= Math.floor(Math.random() * 16).toString(16);
        
        color = `#${r}${g}${b}`;

        document.body.style.backgroundColor = color;
});