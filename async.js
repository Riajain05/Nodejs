console.log("hello everyone")

function callback(){
    console.log("hello again from callback")
}

setTimeout(callback,2000); //async

console.log("hello from last line")