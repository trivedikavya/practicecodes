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
