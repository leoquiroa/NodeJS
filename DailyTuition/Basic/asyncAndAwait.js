function Clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('🤡')
        },2000)
    })
}

function msg0(){
    const msg = Clown()
    console.log("Message: ", msg)
}

async function msg1(){
    const msg = await Clown()
    console.log("Message: ", msg)
}

async function msg2(callback){
    const msg = await Clown()
    console.log("Message: ", msg)
    callback()
}

function getResult(){
    console.log("I am the last line")
}

//pending
msg0()
//addig async and await reserved keywords
msg1()
//
msg2(getResult)