// Always Note that first i wil Commit the Topic , then Code , so On first Commit U will Find what U want On second Comit It will be errors 
// Topic wise $ to $
//And make index.html , and script.js - then Connect them ( and then start learning topic wise)

// words Vs Keywords ( Theory )
// word - Which have or not have meaning in Real world But ( Not have mean i JS)
// Keyword - which have meaning in js ( Eg Let , const , var) 

// // $ 1st Variables Declarations 
// // Var , Let , Const
// // var Old
// var a= 12;
// var username = "Leo"; 
// // So yE machine Yaad Rakhe ga Ki Username Ye hai Jab tak Ye program khatam nahi hota
// //tarike Likhne ke uper ke do nicha ke 3-4
// c = 12; // ye this can be ( But Not recomemded)
// let a;
// a = 23; // can change 
// const f = 34; // can't change We can't do that const f; then f=45; error Becuase It is constant so u have to give value at the time of declaration

//$ declaration and initialization
// var a; // declartion kehvaye 
// var q = 34; // decalration + initialization kehvaye
// // Var Has some issue
// // - Func scope {} , it as in window addon , it can redeclare with same name But different value it will not give error  
// var q = 3.14; // as we already Declare the var q but again so see
// console.log(q);
// if u do in let it see error thats Why we use let ( Declarartion one time only useage according to our )
// let a = 3;
// let a = 4; // error - we cannt do that 
//In const u can't change the value 
// const pi = 3.14; // u know that Yaha pe value chaneg karne ki zarurat nahi hai 

//$ scope ( global , block , func) 
// var a = 12; // global scope - pure code mein 
// // as var is functional scope so 
// {
//     var e = 34; // block scope hota hai But var Issat nahi karta blocks Ki vo kahibhi chalsakta hai 
// }
// //but 
// {
//     let d = 69; // ye let block scope Hota hai So ye isski issat karega will use in that Brackets Only
// }
// function leo(){ // ye function scope hai so calega
//     var i = 4;
// }
// now question arrise that So var a = 12; kehse chal raha hai ..? vo toh koye function ke ander nahi hai 
// run karte time vo ek function mein jayega javascript ka engine use Bhajta hai 
//Global - ( PUree code mein) , Block means ({}) iske ander , Functional means Functional ke ander

// //$ Reasssignment and redeclaration 
// //re-assign means - var ma decalre che varible and given value , one more tile u are just Update like this 
// var a = 12; //initailization
// a = 34; // re assigne
// var a = 45; //redeclartaion

// let b = 23; // amathi tame reaasign kari sako but re redeclare ma error alse
// b =24; // this is valid in Letbu redeclareation is not

// //$TDZ temporal dead zone - utna area jitne mein js ko pata toh hai ki variable exist karta hai but vo usko use nahi kar sakta 
//  console.log(a); // read 1st see thi

//  console.log(b); //read 2nd see this error so B ka TDZ 62 tak hai uske agge vo dekh sakta hai per access nahi kar sakta
//  let b=45;

// //BC alag hai Js ko pata hai next line mein bn declare hai but vo access nahi kar sakta That is TDZ

// //var Mein Vo chiz Undefine Milagi it donesn't have Problem( sometime Be Let not Var ) 

// //$Hoisting impact per type - jab ap ek variable banate ho vo 2 part mein toot jata hai declare and initailization , declare part by default top pe and initalization wala part nicha reh jata hai 
// //that Why in below eg u are seeing undefine 
// // var a = 12; as in above TDZ we talked about var give undefine Why due to this // Break in var a = undefine; , then console , then a = 12
// // when in TDZ u written var a = 12; vo line 2 parts Mein break down Huvi hogi
// //1st
// var a;
// console.log(a);
// a = 34;
// //2nd
// //when U write console.. , then let a = 23; , Vo 2 mein Tut chuka hoga let a = undefine; top pe , and a = 34; console ke nicha hoga , 
// console.log(a);
// let a = 34; // Break top-declare and nich-initiazation hoisting in all ( let a = undef; , conso.. a=34;)
// //thats Why error Says that inialzation se phela Mein use Nahi kar sakta 
// // var -- Hoist hota hai -- undefined value
// //let -- hoist hota hai -- value set nahi hoti Declare huva hota hai ( reference err ata hai vo)
// // in const same as Let

//$common confusion:
//In book bro
// var x = 4; // var - functional scope
// {
//  var x = 3;// var issat nahi karta {block ki} so Value overwrite leo
// }
// console.log(x); // op-3
// // let ma A alag alag Avse 
// // var if ki respect nahi karta , for ki bhi nahi karta , function ki hi karta hai
// // now Talk about const that 
// //2
// const leo = { name: "leo"};
// leo.name = "leonardi"; // we can do this ( because humne Update kiya it allowed) ( objects Na updated kari sakiye) 
// leo ={
// }; // we can assigne new object or value in const we can Update in const

// //3
// //there one more topic called Object free janthi A object change na thayi sake
// Object.freeze(leo); // This will freeze the object, now you can't modify its properties
// leo.name = "changed"; // This will not change the name property
// console.log(leo); // Output: { name: "leonardi" }
// leo.newProp = "test"; // Adding new properties will not work
// console.log(leo); // Output: { name: "leonardi" }

// //Mindset 
// // word - char grop - string
// // number- 23
// //boolean - true
// //2 types privetive and non privetive
// //prive( bracket binake) - string , number , boolean , undefined , null , symbol , bigInt // can copy direactly
// //non privetive ( can say reference) - object ( array , func , object) - Can't copy diractly









