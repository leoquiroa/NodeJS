let promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Run before"),1000)
});

promise1.then(
    result=>{
        console.log("OK")
        console.log(result)
    },
    error=>console.log(error)
)

let promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("Whoops")),1000)
});

promise2.then(
    result=>console.log(result),
    error=>{
        console.log("ER")
        console.log(error)
    }
)