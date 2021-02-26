// create an express app
const express = require("express")
const app = express()
//var redis = require("redis");

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/api", function (req, res) {
    let s = "{ \"api\" : \"0.0.1\" ,"
        + " \"host\" : \"" + req.headers.host + "\", "
  //      + " \"key\" : \"" + process.env.REDISCACHEKEY + "\", "
  //      + " \"host\" : \"" + process.env.REDISCACHEHOSTNAME + "\", "
        + "}";
    res.send(s)
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => {
        let client = redis.createClient(6380,
            process.env.REDISCACHEHOSTNAME,
            {
                auth_pass: process.env.REDISCACHEKEY,
                tls: { servername: process.env.REDISCACHEHOSTNAME }
            });
        console.log("redis client: ", client)
        console.log("Server is listening on port 3000 (possibly)...");
    }
);

/*
const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, trying to deploy from GitHub');
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
*/