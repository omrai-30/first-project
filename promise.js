alert('vishal');
console.log("We study about the promise ........"); 
let prom1 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if (a<0.5){
        reject("no random number sopporting.......")
    }

    else{
        setTimeout(() => {
            console.log("Yes I am vishal")
            resolve("Vishal")
        },3000);
    }
    })

    let prom2 = new Promise((resolve, reject)=> {
        let a = Math.random();
        if (a<0.5){
            reject("no random number sopporting.......")
        }
    
        else{
            setTimeout(() => {
                console.log("Yes I am Disha .....")
                resolve("Vishal")
            },3000);
        }
        })


    
let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})