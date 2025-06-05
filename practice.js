// -word vs keyword ✔
chacha = leo; // it is word No meaning brother 
for (let i = 0; i < 10; i++) {
    console.log(i);
} // as for loop has Meaning in js so keyword


// var and constant
// note they both are english wORDS means that
// var store value can be changed 
// const store value can not be changed
var leo = "value of pie os "; 
var leo = "value of pie is now ";
const pi = 3.14;

console.log(leo + " = " + pi);

// undifed and not deffined Meaning 
console.log(b) // not defined exist hi nahi karta asa kuch
console.log(a) // undefiened chiz toh hai per uski koy value nahi hai 
var a ; // per ye line to define nahi thi na Line number 3 tak so they have to Give undefine Yes but its Answer is hoisting in which 
var b; // this auto matic pins top if you write var b = 12; then it will be hoisted to the top of the file
b = 12;


// primitive & reference
//primitive = number , string , null , undefined , boolean 
// reference =  [] , () , {}
// main context = asi koy bhi value jisko copy karne per main value copy na ho uska refernce copy ho jaye use reference kehte hai , aur jiska value copy ho jaye use primitive kehte hai
var a = 10;
var b = a; // primitive copy do changes in b will not affect a
b = b +2 ;

var c = [1,2,3]; //array do changes in d will affect c also will become same
var d = c;
d.pop();
