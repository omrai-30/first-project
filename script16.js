function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 40000);
    })
}

console.log("Loading modules")
console.log("Do something else")
console.log("load Data")

let data = getData()
data.then((v)=> {


console.log(data)
console.log("Process data")
console.log("Task 2")

})