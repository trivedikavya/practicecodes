// Day - 1 
// sync and async 
// syncronous -- ek ke baad hi dusra Hoga  ( ek kam complete thaye Pachi Biju kam  Chalu thaye ane kevaye sync
// async -- start ek sath jiska ans phela a jaye Ans de dena  ( start ek sath karna hai jiska response phela a jaye Vo batadena Toh vo end kar denge 

//eg :- a - 5 sec to complete task 
//       b - 2 , c - 3 , d - 10 
// if U use Sync then - 5 + 2 + 3 + 10 =   , but if u use Async then 5 + 5 = 10 ( Because at inital 5 - 2 will done 3 -- will done , and 10-5 will done so thats why 10)

// js Both asyc bi and sync bi
// asyn kya hai ..?
// asyn use karvama Ave tyare jyare appe Response No time Khaber na Hoye like U are using API and u don't know that A server thi answer Kyare avse Then A task Complte kari so ANi mate a Async use thaye 
// why Imp -- Like You have to ( Like u and ur frd in room Ur frd need Water and want to go to house  U go To talk but He gone to his House To Drink water , meins 2 events 1st water 2nd frd gone to house , 1st huvi nahi 2nd Run ho gayi Ye type Rokne keliye Asyn use karte hai like Mein pani lake na a javu tab tak Jana mat  )
//eg 
// One exectute The respons come then Other exicute 

// Day -2
//eg :- 
// note that Set time out ma 2 vastu mange Callback , and time ( Callback -- Function ) , & time in milli sec 
//  code --
// console.log('Heloooo')
// setTimeout(function(){
// console.log("Leooooo 2 sec baad")
// },2000)

// js is Not async -3 ( Whole code )
// Main stack -- Running 
// sidestack -- Behind the scen the processing Go on 
// sync code -- always mainstack
// Note that Jab Main stack Khatam Then only we Go to side stack -- Then It ask Is any event complete in side stack if se toh aja 
// side stack and main stack ke Bichmein Baat cheet Event loop se Hoti hai 
//eg :- 
// console.log("Hello 1 "); // mainstack
// console.log("Hello 2 "); // mainstack 
// setTimeout(function(){ console.log("Hello 3 chu hu ")} , 0);  // a side-stack ma hase ( 0SEC che PACHI bi)
// console.log("Hello 4 "); // mainstack
// 0 sec Hova Chata A last maj chalese Best Eg of MAIN STACK and Sidestack


// single threding and multitherding 
// JS is Single threded 
// ek kam ek time per ek var compute kare -- ek Time per ek Run thase But The Swiching chalu rehse 

// Call back :- 
// promises , settimout , setinterval , promiseis , featch , axios 
// this Will send REQest ( asyc code) 
// jab kam complete ho jaye Toh kya ..? -- then we use 
// asyc await , callback , then catch ( ans chalava)

// callback Function tyarej chale jyare ( Async Code req complet thaye best eg ( settimeout ( Calllback , 2000) 2 sec Ho gaye  ab kya chalna hai function ))

// fetch(``) // ani under Url Mukvano hoye ani ander Ek req jaye tamare systeam thi ek req jaye 
// Day - 3 
// promises 
// theory :- 
// let take random number to do that 
var randomly = Math.random(); // if u need 0- 9 so *10
console.log(randomly);
// promise always Accepts the Function
// new likhna padta hai Because it is Construture Function 
var pro = new Promise((res , rej) => { // pro name no var 
    if(randomly>0.5){ // Promise ni ander 2 parameter ave that is resolve and reject , means You have to Declare that kaya Parameter per Resolve chalse , and kaya parameter per reject , as U can see i make a small eg on that ( If - else Is logic and Then Return that If resolve so Olo function run , if Not toh rej )
        return res(); // if randomly 0.5 this Motu toh -- then
    }
    else{
        return rej();
    }
})
pro
.then(function(){ // resolve toh then part chalse leoo
    console.log("mein 0.5 se bada hu babay ")
})

.catch(function(){ // if Not resolve So 
    console.log("Mane chota hu 0.5 se ")
})

// random number -- then promise -- 2 parameter ( ahiy aDeclare Karisu ke kaya parameter per kayo function run thase ( Resolve and reject ) - if y toh res function resturn mein -- .then will work (if  Resolve ) , if nOt toh rej sunction means reject a sema Mukvno catcah ma 

// Promise Basicas Done
// Multipal Task In promise Ek by ek kam karvu hoye ( Async ni ander async task)
// tasks are -- Collage -- then lalDarvaja --( 42 -- Toh ghare -- 72 -- toh devbhomi ) -- catch Now no chance 72 is from lal 
var busno = 72;
var Collage = "y";
var bus = new Promise( (res , rej) => { // Normal Function ( Function(){...} ) , ( Arrow () => {...} )) u can Use any
    if(Collage=="y"){
         return res();
    }
    else{
        return rej();
    }
   
})
// First promise na Parameters Clear no apde anu Resolve then vadu Leo ma store kariyu -- have ani Ander Ek promise Biji return kari and ani ander bijo logic use kariyo -- pachi ane leo.then and leo.catch thi chalayo 
var leo = bus.then(function(){
    console.log("hu lal darvaja");
    return new Promise ( (reso , rejj) => {
        if(busno==72){
            
            return reso();
        }
        else if(busno==42){
            
            return rejj();
        }
    } )
})
leo
.then(function()
            {console.log("devbhomi yaar")

            })
.catch(function(){
                console.log("Yo Bor the Golden Bus is here")
            })
