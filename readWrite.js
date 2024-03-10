const fs = require('fs') // it is inbuilt module so there is no need to define the path 

/**
 * code to read the content from a file(both syncronously and asynchronously)
 */

/** 
fs.readFile('input.txt',(err,content) => {
    if(err){
        return console.log(err)
    }
    console.log("Read content is : " +content)
} )
*/

const content=fs.readFileSync('input.txt')
console.log("read content is: "+content)

console.log("hello from last")

//--------------------------------------------------------------------------------//

/**
 * code to write a content to the file
 */


fs.writeFile('output.txt',"Hello form Davv",err=>{
    if(err){
        return console.log(err)
    }
    console.log("Written Successfully...")
})

fs.writeFileSync('output1.txt',"hello i am learning nodejs")
console.log("hello from last")
