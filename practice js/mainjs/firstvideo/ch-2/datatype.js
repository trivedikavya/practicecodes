// Ch-2 part 2 same Parttern $topics , and diary

//Topics

// //$1 datatypes
// // data can be 12 "der" Truue etc etc 

// //$ main CATEGOARY  , reference data type and primitive data type
// //primitive -- that value that inko copy karne per apko real value milage
// // mari gadi tara jevi che pn mari gadi alag che tari gadi alag che
// // meri value alag tumhari value alag like a = b karish b ma chaneges karish toh aa chnages b maj rehse
// //in this string , num , boolean , null( jan ke value khali chodi hai but want to give null ye ap dete ho) , undefined ( by default value ye milti hai ) , bigint ( max number value thi moti value so bigint on console if u write Number.MAX_SAFE_INTEGER u will find this 9007199254740991 ani uper number na lakhi sakaye agar lakhvo hoye to last ma n lagavo pade to a bigint thaye jaye pachi ma number add bi karvo hoye toh ama bi n lagavo pade eg ( a + 2n) ) , symbol ( unique immutable value create karta hai ( same same chize change na karni ho toh us keliye hum symbols use karte hai unique value mate ( symbol("") this use kariye abpe)) kahipe phor use use karsakte hai)

// let a = 19;
// let b = a;

// console.log(b + 3);
// console.log(a);
// // reference -- function() , arry [], obj {}
// //meri value ajse tumari bhi hai
// // like a Value api dase means a = b karish ama atle b na changes a ma reflact thase

// c = [2,3,4,3];
// let d = c;
// d.push(8); // as u can see d ma chnages to b ma bi changes 
// console.log(d);
// console.log(c);
// //strings
// // '' , "" , `` ( kuch bi likhde sakte hai isme )
// //num
// //23.3,4,455
// // boolean
// //true , false
// // symbol
// // unique immutable value create karta hai ( same same chize change na karni ho toh us keliye hum symbols use karte hai unique value mate ( symbol("") this use kariye abpe)) kahipe phor use use karsakte hai
// let obj = {
//     uid: 34,
//     name: "koe"
// };
// Symbol("uid");
// // bigint - aaniuper no number
// let e = 9007199254740991n; // bigint che a ama oprations karava hoye toh
// console.log(e + 2n); // avi rite ane add karva vada Number mabi n lagavano

// // reference - mari gadi ajthi tari 
// let d1 = [23,43,45]; // array 
// let d2 = {
//     name: "leo",
//     uid: 124,
// };
// // write and learn and understand things then code so u will never forget


//$Dynamic typing Day-3
// js ma static typing nathi  , it has dynamic typing
// in other languages 
// int a = 23;
// a = "leo"; ap ye nahi kar sakte vo language s mein because vo error Dega ( because u fix that It is int static hai change nahi hoga type)
// js dymaic why
let a = 34;
a = true;
a = "leo"; // due to this u can check at initial it was num , then we chaneg it to bool , then string so we didn't fix the state thats Why it is Dynamic typing
//note je last chaneg kariyu hase le rehse

//type of quirks eg ( typeoff , null === , )
// u can check type of variable
console.log(typeof (a)); // it will give u the last type of a which is string
//quirks hai ye sab
// null ka type object hota hai
//NAN ka type number hai
// [] + [] = "" empty string
// .1 + .1 = 0.2
// but .1 + .2 = 0.30000000000000004 
// Nan === nan is false

//type coercion 
// ek type jis type automatic convert ho gaya 
// in js + -- 2 works jodna , and concatinate karna
//eg 
let g = "3" + 2;
console.log(g); // it will give 32 because it convert 2 to string and concatinate
// ab now question if it convert 2 in str why he didn't cont 3 in num because + finds str if it find str in any side it concatinate convert all in str and concatinate
let h = "3" - 2;
console.log(h); // it will give 1 because - ekhi kaam karta hai subract karna so it convert str to num and then subract 

// truely and falsy values 
if(12){ //yaha pe vo auto nauture ke hisab se check karke declare
    // ya condition ati hai per apne number likh diya So ya Js ke pass ek vlue distrbution
}
// that 0 , "" , null , undefined , Nan , document.all ye 5 falsy values hai baki sab truely hai
// value check karta !!then-number so u can check it is true or false
//true -- 1
//false -- 0
// null -- 0
// why nan is a number ...? ( bcause in js it is failed number opration)


