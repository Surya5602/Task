const fs = require('fs');
const http = require('http');
const server =  http.createServer((req, res)=>{
       res.end("Hello from the server!");
});
server.listen(8080, '0.0.0.0',()=>{
    console.log("listening to request on port 8080");
    

})





