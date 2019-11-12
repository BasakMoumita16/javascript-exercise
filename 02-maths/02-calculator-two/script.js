

const input1 = Number(document.querySelector("#op-one").value); 
const input2 = Number(document.querySelector("#op-two").value);
const operators = document.querySelectorAll(".operator");


operators.forEach(function(btn){
    
    btn.addEventListener("click", function(e){
        switch  (e.target.id) {

            case  "addition" : alert(input1+input2);
            break;
    
            case  "substraction" : alert (input1 -input2);
            break;
    
            case  "multiplication" : alert (input1*input2);
            break;
    
            case  "division" : alert(input1/input2);
            break;
    
            default : //alert("wrong input");
            break;
            
        };
    });
});

