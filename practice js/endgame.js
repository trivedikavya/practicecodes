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
