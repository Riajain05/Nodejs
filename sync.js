function greet(){
    return function(){
        console.log("welcome all")
    }
}

const result = greet();

result();