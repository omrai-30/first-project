/*function factorial(n){
    let result = 1;
    for(let i = 1;i<=n;i++){
       result *= i;
    }
    return result;
}
console.log(factorial(5));*/

function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));