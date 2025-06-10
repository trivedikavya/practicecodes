// differnce between Let , const , var ✔
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


// main logic -- WINDOW OBJECT ✔
// some feauther js doesn't have it use window (box of feathur) given by browser 
// eg alert , console , prmpt ( If want to know more that which are not the part of browser ) - right click - inspect - console - write(window) - enter ( You can see all the properties of window object ) which are given by browser
// line differnce --
// var itself add him in Window object , let & const are not added in window object

// live eg if you write var a = 10; in console and then write a it will give you 10 but if you write let b = 20; and then write b it will give you error because let is not added in window object
// browser context API  give 3 things windows , stack , heap memomry 

//basically Have theory che so a BOOK MA che CLEAN EXPLAINATION 

