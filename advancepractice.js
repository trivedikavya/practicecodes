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


// execution context meaning that It will create a imagenary container that Includes 
// the variables , 
// functions defined in the code block  
// lexical enviroment of that Function .( it is an enviroment hich tells that Which things you can access and which Can't
function aka() {
    var a=12;
    function leo() {
        var b = 69;

    }
}
// aka can acess --a and can acess leo but can't acces b due to lexical enviroment ( var can only be accessed in the block it is defined in or nearest parent block)


// how can you copy the refernce value 
// oli bhai basic js ma non primitive value array copy but if you chnage a so B ma je t ea ni copy value hoye te bi change 
// a bav mathi tu koybi change kare toh a chnge thatye So how we can copy that 
// by using spread operator
const a = [1, 2, 3, 4, 5];
// three dots are the spread operator 
const b = [...a]; // This creates a shallow copy of the array 'a'
//lets change the value of b
b.pop(); // This removes the last element from array 'b'
console.log(a); // Output: [1, 2, 3, 4, 5] // b ma Output: [1, 2, 3, 4]

// same you can do with object 
const obj = { name: "Oli", age: 25 };
const objCopy = { ...obj }; // This creates a shallow copy of the object 'obj'
//lets change the value of objCopy
objCopy.age = 26; // This changes the age property in the copied object

// js mein kuch bhi likho wo mainly that mainly have 2 types but it belongs to one type
// truthy and Falsy are differnt then true and fales
// falsy vlaues are = 0 , false , undefine , null , NaN , document.all rather than that are Truethy
// if you convert them so always false come 
// i written Leo ---- then it belong to either truthy or falsy
if(7){
    console.log("7 is truthy");
}
else{
    console.log("7 is falsy");
}

// switch case
let a = 7;
switch(a){
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    case 4:
        console.log("a is 4");
        break;
    case 5:
        console.log("a is 5");
        break;
    default:
        console.log("a is not between 1 and 5");
}


//foreach 
// when ever you have array to use So you can use (array Foreach) ( jab apko har element mein kuch add karna ho )

const array1 = [1, 2, 3, 4, 5];
array1.forEach(function (leo) {
  console.log(leo+2);
});
// note foreach never change the original array

//forin
// for in loop is used to iterate over the properties of an (object-- forin)
const person = {
  name: "John",
  age: 30,
  city: "New York"
}
for(var chacha in person){
    console.log(chacha , person[chacha]);
}

// do while loop a case in which you have to ustilize that loop once no matter the Condition 
 let a = 9;
 do{
        console.log("je match nahi ho raha",a);
        a++;
 } while(a < 5);


// callback functions 
// a functions in whhich we give req then vo req jayegi vo server ya app ke pass then vo req full fill hoke vapish aye gi it take time toh kitna time lagega uske liye hum callback function ka use karte hai
// aisa code jo baadmein chalega jab vo complete ho jaye tab dena 
setTimeout(function(){
     console.log("This is a callback function - it runs after 2 seconds");
}, 2000);

// first class functions 
// mean you can give var name to functions that  can pass around like you can decelare a varaible to a Function 
// var a = function() {
//     console.log("Hello from a");
// };
// function(as name)-- pachi ander nu leo
calll(function(){console.log("Hello from leo");})

function calll(leo){
    leo();
}

// how arrays are made behind the scenes
var a = [1, 2, 3, 4, 5]; // ye Object hai not array 
// do you know you can add negative index in array 
a[-1] = 6; // ye bhi chalega in other it wil work in JS only 

// update and delete properties in an object
var oba = {
    name : "leo" ,
    age : 18,
}

oba.name = 'Kevin';//upade
delete oba.age;//delete
