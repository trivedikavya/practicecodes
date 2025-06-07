// -word vs keyword ✔
chacha = leo; // it is word No meaning brother 
for (let i = 0; i < 10; i++) {
    console.log(i);
} // as for loop has Meaning in js so keyword


// var , let and constant ✔
// Feature	var	             let	         const
// Scope	Function-scoped	Block-scoped	Block-scoped
// note they both are english wORDS means that
// var store value can be changed 
// const store value can not be changed
var leo = "value of pie os "; 
var leo = "value of pie is now ";
const pi = 3.14;

console.log(leo + " = " + pi);

// undifed and not deffined Meaning ✔
console.log(b) // not defined exist hi nahi karta asa kuch
console.log(a) // undefiened chiz toh hai per uski koy value nahi hai 
var a ; // per ye line to define nahi thi na Line number 3 tak so they have to Give undefine Yes but its Answer is hoisting✔ in which a top per define kari de 
var b; // this auto matic pins top if you write var b = 12; then it will be hoisted to the top of the file
b = 12;


// primitive & reference✔
//primitive = number , string , null , undefined , boolean 
// reference =  [] , () , {}
// main context = asi koy bhi value jisko copy karne per main value copy na ho uska refernce copy ho jaye use reference kehte hai , aur jiska value copy ho jaye use primitive kehte hai
var a = 10;
var b = a; // primitive copy do changes in b will not affect a
b = b +2 ;

var c = [1,2,3]; //array do changes in d will affect c also will become same
var d = c;
d.pop();

// conditional statemenst ✔
if(true) {
// you can make it a condition like 8<0 , 9==9 , etc to make statement true or false
}else{
//if false so this part will run 
}

//there is one more nested -conditional statement if else if 
if(true){

}else if(true){ // if one part will work then the loop is over

}else{

}

//loops  for , while repeatetation work in Any differnent sene 
//1111
//1234 both are loop 
//we have two types of loops for and while 
for( let i; i<=11; i+2){ //start end change 
    console.log(i);
}
for( let i; i<=11; i+2){
    console.log(1);
}

let k = 0;
while(k<=10){
    cosole.log(k);
    k++;
}

//functions ✔
// a block of code you didn't have to write and Run put you make it for sepecific purpose or a task
// when you want to reuse the code 
//when you want to Run same process with differnet data
// optimize karne keliye bi kaam ata hai
function add(a, b) { // a and b are var parameters✔
    // a and b are parameters ✔
    return a + b;
}
function helo(){
    console.log("hello duniya");
}
helo();

console.log(add(2, 3)); // 5 ( 2 and 3 will go in function ) 2 , and 3 are arguments ✔
//arguments are the values you pass to the function when you call it
