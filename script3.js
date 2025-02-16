console.log("Today I am learning loops in javascript........")

let a = 1;
/*console.log(a)
console.log(a+1)
console.log(a+2)*/

for (let i=0;i<100;i++){
    console.log(i)
}

let obj = {
    name:"Vishal Gupta",
    role:"Dealler",
    company:"Selling property"
}

for (const key in obj){
    const element = obj[key];
    console.log(element)
}

for (const c of "Vishal"){
    console.log(c)
}

let i = 0;
while(i<6){
    console.log(i)
    i++;
}