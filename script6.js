console.log("Here we discuss about the exercise which is faulty calculator .....!")
let random = Math.random()
let a = prompt("Enter the first number:")
let b = prompt("Enter the second number:")
let c = prompt("Enter the 3rd number:")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random > 0.1){
   alert('The result is ${eval(`${a} ${c} ${b}`)')
}
else{
    c = obc[c]
    alert('The result is ${eval(`${a} ${c} ${b}`)')
}