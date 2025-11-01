//ch-3 dairy and learning start operators

// arithmetic , comparison , logical , assigment , unary , ternary

// arithmatic are - , = , * , ** , / , % , +
//+ addition do this things 
// 1 + 2 = 3 // add karta hai 
// "kavy" + "a" = "kavya" // string ko concatenate karta hai 

// - subraction 
// / div
// * muli
// % modulas reminder deta hai 
// ** power 2**4 

// comparision 
// = value dalna  assigment oprator 
// == comparision ye property check nahi karta ye just value check karta hai 12 == "12" ye true dega but ye false dega 3 equal to hoga so vo data type bhi check karega 
// ===
// != not equal to so ye karo ( same problem value chcek kare not check type ) we can say not strict so we use !== so type bi check kare  
// !== 
// <=
// >=
// >
// <

// logical 
// && || !

// && and dono true hone chahiye 
// || or ek true ho jaye chal jata hai 
// ! not true ko false false ko true kar deta hai ( if 2 is not 4 so ye condition

// here u undersatnd that topic called truethy and falsey vala that !! yekyu kaam kar raha that 
// !12 so ye true ka fale kardega if 2 times so original de dega 


// assignment oprator 
// which has = only but its combination atle hai isme  
// +=
// -=
// *=
// /=
// %=
// *=
// a += b  means a = a + b aj variable ma a vastu update kari save karo
let a = 19;
a += 3; // a = a + 3
// like that all other oprators jode 

//unary op
// jo single value pe apply ho
//++ -- + - ! typeof()
// ++3 means aj line per 3 + kari de , pre incre
// 3++ a line pachi 3 + kari de post incre
// if you have a string jo number mein convert ho sakti hai toh vo number mein convert ho jayigi , if nahi toh vo NAN return karega 
let e = +"5";
console.log(typeof(e)); // 5 number avse if te covert thayi sake to , if not to NAN
///! ka uper logical mein deh likya 
//++a means preincrement means phela incre
//a++ post incre baad mein incre karo same gos with -- 

// ternary oprators 
//?: 
// condition ? true nu vastu : false thaye to a vastu 
console.log( 3>2 ? true : false);


//typeof , and instanceof
//typeof je apde vachiyu aj che 
//quircks are
//typeof null -- obj ata hai jo ki galat hai
//typeof [] -- obj deta hai jo galat hai 
//typeof NAN -- number deta hai jo galat hai

// instance matlab juda huva ( matlab vansaj kon hai )
//typeof we use in Primitive data type 
//instanceof is not work on primitive data type
// instanceof we use in refernce or non primitive data type {} , [] , function()
let h = {};
console.log("hu ayiyachu",h instanceof Array);

// && - 2 true toj agad 
// || ek true toh leo 
// 0 - false , 1 - true 
// a rite ternary op check thaye , or a rite bi work kari sakaye , or if else thi bi work tahye 
let grade = 34;
let leo = grade >=45 ? "ha 45 se bada hai" : grade >=32 ? "ha 32 se bada hai" : "fail";
console.log(leo);

// urany opp 
let v = 4;
let r = v++; // akhini line sudi v ni value 4 aj che a line pachi vadhse 91 per 4 , 92 per 5 ne ++v hot toh aj line per vadhi jaat 
console.log( v , r);

let m = 8; // note that ye logic ishime lagta hai baki olu next line vaduj concept che
let bill = m++ + ++m; // 1st m++ ma a phela 8 ave line ma agad jase toh + thayi 9 , then + che 2nd ++m toh 9 + 1 toh 10 means 10 + 8 = 18
console.log(bill);
