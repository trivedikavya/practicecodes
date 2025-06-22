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
