const http = require("http");
const server = http.createServer((req, res)=>{
    console.log("Server is created");


    res.setHeader("Content-Type", "text/html");
    if (req.url=='/home'){
        res.statusCode = 200; //ok
        res.end("<h1>Welcome home</h1>");
    }
    if (req.url=='/about'){
        res.statusCode = 200; //ok
        res.end("<h1>Welcome to About Us</h1>");
    }
    if (req.url=='/node'){
        res.statusCode = 200; //ok
        res.end("<h1>Welcome to my Node Js project</h1>");
    }

    else{
        res.statusCode = 404; //not found
        res.end("<h1>Page not found</h1>");
    }
})


let port = 4000;
server.listen(port,()=>{
    console.log("Server is running");
})