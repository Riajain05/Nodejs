const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url=='/hello'){
        res.end("Hello World")
    }
    else if (req.url == '/welcome'){
        res.end("Welcome Everyone")
    }
    else {
        res.writeHead(404)
        res.end("you are trying to hit a wrong URL")
    }
});

server.listen(8000,()=>{
    console.log("server started successfully")
})