console.log("solve the Exercises........")
//let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    //let val1 = Math.ceil(0 + Math.random()*255);
    //let val2 = Math.ceil(0 + Math.random()*255);
    //let val3 = Math.ceil(0 + Math.random()*255);
    let val1 = Math.random();
    let val2 = 124;
    let val3 = 111;
    return `rgb(${val1},${val2},${val3})`
}
//console.log(boxes)
Array.from(boxes).forEach(e=>{
   //e.computedStyleMap.backgroundColor = getRandomColor()
   //e.computedStyleMap.color = getRandomColor()
   e.computedStyleMap.backgroundColor = getRandomColor()
   e.computedStyleMap.color = getRandomColor()
})