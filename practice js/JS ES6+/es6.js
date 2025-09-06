// //1st Let & Const

// const { functions } = require("lodash");
// const { console } = require("node:inspector");

// // CHANGE 
// let a = 23 ;
// const w = 45;
// a = 34;
//  // w = 7; 
// // soo Now we can change the Value to Let , but we cannnot change the Value Of Const , If we do Its an Error

// // DECLARE 
// let u;
// // we can Do like this Put Let Just assisgined No give value but 
// // const b;
// // this is an Error Because if we decalre const so WE have to assign value , bECAUE BAADME HUM BADAL NAHI SAKTE 

// //SIMILARITES 
// // let and const dono - Window Obj mein apne ap ko add karte hai 
// // Block maj Access kari Sako If U declare It in Block ( braces Scope ) 


// //2nd Arrow Function
// // In old Js It have 3 types OF functions :- 
// // Function Staments - Function(){} - Diract Declare Kariye a ( + point Can Hoist(phela Bi Declare Kari sAKO )) 
// // Function Expression - const a = function(){} (vARIABLE Declare Karine Bi declare Kari sako )
// // anonymos Function - settimeout(){} , clartimeout(){}

// // In NEW js Ek type Ka Function Aur add Huva Hai Which has 3 rups ( 3 rip hai uske)- Arrow Function it is 
// // basic arrow function ( can say Fat ARROW function)
// var fnc = () => {

// };
// //arrow Function With One parameter
// //note Barcaket are the Fats 
// // and If U are sending Or setting only One value SO u can remove that Fat it mean like this -- var leo = a =>{};
// var func1 = (a , b) => {
// console.log(a , "*" ,b)
// };
// // arrow Function with Implicit Return
// // implicit ka matlab Humne jab Kudse return na lika Ho tab bhi return Ho jaye 
// var func2 = (a , b) => a * b ; 
// // ama {} andi jarur nathi U just have to write What to do With Return Keyword Te output api de


// //3rd templete literal 
// // problem is expaline in old js mein hum string ko + se jodte the -- Full well explain In learning Diary 
// // So to solve that Problem we use template literals
// var namm = "KAVYA Legend";
// console.log(`hello ${2+2} is 4 heyy i am ${namm}`); // a type ni vastu o mate apde a use kariye ( akhe akho code Print karavo Hoye toh bi aj use kariye )

// // 4th Default Parameter
// function df(parm){
//     console.log(parm)
// };
// df(23); // toh 23 print 
// //122 mukish Toh 122 avse but 
// df(); // only run karayish // toh undefined avse
// // toh to solve this problem we use default parameter jema function df(parm=0){}; apvanu
// // so Pachi undefine nahi ave 0 avse because apde deafult parameter 0 set kariyu che 


// //5th Rest AND Spread
// // sprad use For Copy elements ( Array or obj) in which we use ... Through that we can copy all elemenst 
// var c = [2,3,5,7];
// var t =[...c];
// //rest use hota hai when u have to put bacha huve var put in one variable
// function leoo(a,s,...d){
//     console.log(a,s, d);
// };
// leoo(1,2,3,4,5); // as U can see 1 , 2  func will take as A , s Is parameter But it will not take 3,4,5
// //there we will use Rest in parameter We do ...d , then In print we Put d to see Other values
// // ... Yahi spread hai and yahi Rest hai ( But kam Alag Alag Hai )
// // as like + ka sign add karne keliye In int , But in string use to concatinate 

// //6th destructuring 
// //on array
// var a = [1,2,3,4,5]; // Now U want a[0] to a[3] value In Joyiye Toh how Will u take var a[0] = b like that U will store Long Process so To solve that 
// var [b,c,d] = a; // we use destructuring ( B c d ) means array na 0 , 1 ,2 elemt na var B c d che jema a mathi ani value lase
// console.log(b,c,d);
// // now if U want 1 , 4 th element which means 0th and 3rdso
// var[x,,,y] =a;
// console.log(x,y); // so U can do this 


// // on Object 
// var obj ={namm: "legend bahii" , age:19}; // now u don't want to Do obj.name to acces So U will Do 
// var {age} = obj; //like this Now u can access Direactly 

//7th promisses
// future mein Hone Vali Chiz ( Ya toh Hogi -respo , Ya toh nahi hogi -req) agar Ho gayi toh .then , nahi huvi toh catch
// pending - resolve - reject
// var a = 69;
// var fpromo = new Promise((res , rej) => {
//     if(a<70){
//         return res();
//     }
//     else{
//         return rej();
//     }
// });
// fpromo
// .then(function(){
// console.log("Oh yess"); // Multi Promise Karvi Hoye means ( Ek promise Aju so ) ani Nicha New promise kar.. , and ane If then And ctach state Ma run karvi hOye So Naam Avu Padce like var Leo = fpromo.then(...) pachi leo.then()
// })
// .catch(function(){
//     console.log("ohh no");
// })


//8th try and catch
// Js is iNterpreted Language Means Line by Line Run hoti Hai 
// so it May Happn thta First Line run 2nd line have error and 3rd line works Perfact
// console.log("helloij")
// console.log(helloij)
// console.log("helloij")
// so we want like this that I don't Know Error Ayega ya NAHI AYE GA But agge KA code run kardena Per chala dena
console.log("heloooooo")
try{
    console.log(heloooooo)

}
catch(err){
    console.log("error Hai Bhai" , err)
}
console.log("heloooooo")







