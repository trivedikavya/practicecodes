// higher order  function ( jo function accept kare parameter ke tor par aur function return kare)
// parameter ma Function accept kar ea 1st type 
function leo(){

}

leo(function chanlee(){})
// 2nd higher order functions ola Je return bi function aj kare
function snaxx(val){
    return function(){
        console.log("Hello " + val);
    }
}
// 3rd Ola foreach vada 
// in short je functions functions ni ander functions accept kare or return kare o higher order functions


// construre function ( a Traye use kariye jyare tamare ek jevi Property ane method ni jarur hoye)
// je function No ek Ackkho prakar ready Kare then You can use it and fORM instance of it 
// basic 
function sachha(){
    this.name = "sachha";
    this.color = "red";
    this.taste = "sweet";
}
 var bs1 = new sachha();
 var bs2 = new sachha();
// if Inputs ma cutamize Value levi hoye Toh 

// a Adnvance use of constructor function is to create multiple objects with similar properties and methods
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// method to display person information
var p1 = new Person("John", 30);
var p2 = new Person("John", 35);
var p3 = new Person("John", 36);
var p4 = new Person("John", 38);

// first class functions
// theroritical concept 
// how it is possible to pass Function in function it is Due to first class func 
// eg :- 

function abcd(){

}
abcd(function(){}) // How this is Possible 
setInterval(function(){}) // kari rite possible It is Due to first class function


// new keyword 
// new keyword is a keyword which create new object for constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}   
var p1 = new Person("John", 30);


//iife - imediatly invoked function expression 
// jquery , angular js , have Already used this concept
// function ko turat chalane ki kala , in that way that we can make private variable
// like this - gasp , $()
// sytax make a function without name then Cover it with parenthesis and then call it at the end 
//ye Private variable hai - sytax 
(function(){


})() // this is iife
// private Function ave tyare ani ander no variable Access denia kari nakhe 
// note Let ni value change thayi sake ( Means let age = 12; so Can age =13)
// const can Never be changed
// now check that Leo is private variable below
var ans = (function(){ // given the name to the private function
    var leo = 12;
// we are returning an object 
    return {
        getter: function(){ // acess karvi Hoye toh value so ( 1. Ans ( func name) then 2. ans.getter() )
            console.log(leo);
        },
        setter: function(value){ // set karvi Hoye toh value so ( 1. Ans ( func name) then 2. ans.setter(12) )
            leo = value;
        }
    }
})() // This last bractes is calling the function immediately
// 


// protoype 
// its is basically a property which Js by default it give to a object when it created ( Made by js Createors , and developers )
var leo = {
    name: "legend"
}
// above i explane In dairy You can check 
// dev.console ma ja Then leo. check then write leo and enter then you can see protoype property
//best eg 
var arr = [1,2,3]; // this U created 
arr.length // but this is not created by you , Like that Protoype is a property which is given by js to a object when it created


//protype inheritance
// je baap ma Che a chkrama Toh avej and AMa advance Bi kayik hoye 
// code ma rite 
var human = {
    canhavesex: true,
    canhavelegs: true,
    canhavehands: true,
    havethreehearts: false,     
}

var kavya = {
    __proto__: human,
    name: "kavya",
    canmakewebsite: true,
    canmakeapp: true,
}
// My guide note 
// Deploye Guide : Html , css , js -- Netlify 
// Deploye Guide : Html , css , js, reactjs , nextjs -- vercel
// Deploye Guide : fullstack -- railway.com 

// protoype 
// its is basically a property which Js by default it give to a object when it created ( Made by js Createors , and developers )
var leo = {
    name: "legend"
}
// above i explane In dairy You can check 
// dev.console ma ja Then leo. check then write leo and enter then you can see protoype property
//best eg 
var arr = [1,2,3]; // this U created 
arr.length // but this is not created by you , Like that Protoype is a property which is given by js to a object when it created


//protype inheritance
// je baap ma Che a chkrama Toh avej and AMa advance Bi kayik hoye 
// code ma rite 
var human = {
    canhavesex: true,
    canhavelegs: true,
    canhavehands: true,
    havethreehearts: false,     
}

var kavya = {
    __proto__: human, // protoype inheritance
    name: "kavya",
    canmakewebsite: true,
    canmakeapp: true,
}
// My guide note 
// Deploye Guide : Html , css , js -- Netlify 
// Deploye Guide : Html , css , js, reactjs , nextjs -- vercel
// Deploye Guide : fullstack -- railway.com 


// so Questions copy then Copy different ..? notification ..? 


 //  this call apply bind 
 //this
 // gobal scope ( {} a bracket ni bar , a bracket in ander toh private or local scope )
 //eg 
 var a = 12; // global che bhai a 
 function leo(){
    var b = 13; // this is a local scope
 }

 // now come to topic 
 console.log(this); // this is a global object in browser a print kare ( Window)

 // diff between Func and method ( Func which are in object that Is method)

 var a = {
    likho: function(){
        console.log(this); // ye obj retrn karega
    } // this is a method
 }
 // concution 
 // gobal - this - value - window
 // local same as above 
 // method - this - value - object
 // in dom -- it refer to before event listener
 var butto = document.querySelector("button");
 butto.addEventListener("click", function(){
    console.log(this); // this is a button element
 });

  var buttoo = document.querySelector("button");
 buttoo.addEventListener("click", function(){
    this.style.color ="red"; // this is a button element 
 });

 // A kem janvu joyiye this use thaye toh tane khaber padvi joyiye 

 //call
    // call is a method which is used to call a function with a specific context
    function slayy(){
        console.log(this.name); // this is a global object
    }
    var n = {name: "legend"};
    slayy.call(n); // this will print "legend" because we are passing n as the context ( Atle have window no jagiyaye N object return karse and apde have ani ander thi value layisu)
    // if parameters hoye toh slayy.call(n,1,2,3); // this will print "legend" and pass 1,2,3 as parameters to the function

    // call and apply are same but apply takes an array as a second argument
    function slayy2(a,b,c){
        console.log(this.name, a, b, c); // this is a global object
    }

    var obj = {name: "legend"};
    // you have to pass 2 arguments to the function
    slayy2.apply(obj, [1, 2, 3]); // this will print "legend 1 2 3" because we are passing obj as the context and [1, 2, 3] as the parameters

    // bind 
    // bind is a method which is used to create a new function with a specific context
    function slayy(){
        console.log(this.name); // this is a global object
    }
    var n = {name: "legend"};
    slayy.bind(n); // this will return a new function with n as the context
    var newFunc = slayy.bind(n); // this will return a new function with n
// this is very useful in react use when U have to run a function onclick or onsubmit
    newFunc(); // this will print "legend" because we are passing n as the context

    // pure and impure functions
    // pure 
    //2 things ( Not chaneg any Global variable , and same i/p give same o/p )
    // pure function is a function which always returns the same output for the same input and does not have any side effects
    function add(a, b){
        return a + b; // this is a pure function because it always returns the same output for the same input
    }
    add(1, 2); // this will return 3

    //not this ( This is not a pure function because it changes the global variable c , and not always returns the same output for the same input)
    var c= 10; // this is a global variable
    function add(a, b){
        c = 12;
        return Math.random*b+a+c; // this is a pure function because it always returns the same output for the same input
    }
    add(1, 2); 

// clouser 
//it is like a memory ek time per Ek vaat pati gayi hoye pn pachi bi ane Juni vaat yaad hoye
function createthings() {
    let secreats = [];
    return function (secreat) {
        secreats.push(secreat);
        console.log(secreats);
    };
} 
let addsecreat = createthings(); // this will return a function which will add the secreat to the secreats array
addsecreat("heloo ji");
addsecreat("kya haal hai"); // this will add the secreat to the secreats array
addsecreat("arre baate chodo Luv U ji"); // this will add the secreat to the secreats array

// let , const and var
const rollno = 12937; // this is a constant variable which cannot be changed , block function je block ma hoye aj block ma access
let subject = "maths"; // this is a block scoped variable which can be changed , Block function , "block ma hoye aj block ma access"
subject = "english"; // this will change the value of subject
var name = "legend"; // this is a function scoped variable which can be changed , any one can access it
