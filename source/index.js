const fs = require('fs');
const http = require('http');
const url = require('url');
const server =  http.createServer((req, res)=>{
    const pathName = req.url;
    if(pathName==='/')
    {
        res.end("Hello from the server!")

    }
    else if(pathName==='/html'){
        res.end("hi iam from html page")
    }
    else  if(pathName==='/html1'){
        res.end("hi iam from html1 page")
    }
    else if (pathName ==='/nykaa')
    {
        res.writeHead(200,{
            'Content-type':'text/html'
            
        });
        const html = fs.readFileSync('index.html');
        console.log(html)
        res.end(html)

    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html'
        });
        res.end('<h1>page not found!</h1>');

    }
});

server.listen(8080, '0.0.0.0',()=>{
    console.log("listening to request on port 8080");
    

})





