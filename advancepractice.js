// differnce between Let , const , var 
var a = 9; // function scope 
// in es-5 ( var) and in es-6 ( let , const ) 
function varl(){
    for(var i  = 0 ; i<5; i++){
        console.log(i);
    }
    console.log(i); // 5
}
// varl(); it works 
function letl(){
    for(let i  = 0 ; i<5; i++){
        console.log(i);
    }
    console.log(i); // 5
}
letl(); // ReferenceError: i is not defined
