let opscr = document.getElementById("op_scr");
/* let allows you to declare variables that are limited to the scope of a 
block statement, or expression on which it is used*/

function display(num){
    opscr.value+=num;   
}
function squarefn(){
    opscr.value= Math.pow(opscr.value,2)
}
function Calculate(){
    try{
        opscr.value=eval(opscr.value);
    }
    catch(error){
        alert("Invalid");
    }
}
function Clear(){
    opscr.value="";
}
function Del(){
    opscr.value= opscr.value.slice(0,-1);
}
/*A JavaScript function is a block of code designed to perform a particular task*/