const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => { // this will create http server, but who gonna handle this server? 
const log = `${Date.now()}: New Request Received\n`; // this log will get appended in log file who requested the server and when
fs.appendFile("log.txt", log, (err, data) => {
    //console.log("New Request Received");
    //console.log(req);  // this will give the entire details of whom made the request
   res.end("Hello From Server, response end");
});
}); 
myServer.listen(8000, () => console.log("Server Started!"));