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
// var f = 10; // this is globel scope
// function add(a,b,c){
//     alert(f)
//     var d = 99; // this is local scope
//     alert(d)
//     var z = a+b+c
//     return z;
// }
// var g = add(10,8,5);
// alert(g)



// agar variable globel hai to uski value change kr skte hai aur globel variable ko function ka andher aur bahir dono tarikoon sai check kar sakta haan
// var a = "Rehan";
// function foo(){
//      a = "Ali"
// }
// // foo();
// console.log(a);



// agar variable local hai to uski value change nhi kr skte hai aur local variable ko function call kar ka check kar sakta hai
// var a = "Rehan";
// function foo(){
//      a = "Ali"

// }
// foo();
// console.log(a);


// function oppreter
function calc(num1,opt,num2){
    if (opt === "+"){
        return num1 + num2
    }
    else if (opt === "-"){
        return num1 - num2
    }
    else if (opt === "*"){
        return num1 * num2
    }
    else if (opt === "/"){
        return num1 / num2
    }
    else{
        return "Invalid Operator!"
    }
}
var result1 = calc(10,"-",5)
var result2 = calc(10,"+",5)
var result3 = calc(10,"*",5)
var result4 = calc(10,"/",5)
var result5 = calc(10,"$",5)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)