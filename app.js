// Main Function Structure
// function greeting(){
//     alert("Hello Rehan")
// }
// greeting();

// Function with parameters & arrguments
// function add(a,b,c){
//     alert(a+b+c)
// }
// add(10,8,5); // 10,8,5 are called arguments

// Return arguments sai value return krta hai
// function add(a,b,c){
//     var z = a+b+c
//     return z;
// }
// var g = add(10,8,5);
// alert(g)

// Function with globel & local scope
var f = 10; // this is globel scope
function add(a,b,c){
    alert(f)
    var d = 99; // this is local scope
    alert(d)
    var z = a+b+c
    return z;
}
var g = add(10,8,5);
alert(g)
