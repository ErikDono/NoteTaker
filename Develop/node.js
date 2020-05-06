// Dependencies
var http = require("http");
var express = require("express")
var app = express()
require("./routes/apiRoutes")(app)
var fs = require("fs");
var PORT = process.env.PORT || 7070
var server = http.createServer(handleRequest)

});
app.get()


// fs.readFile(__dirname + "/notes.html", function (err, data) {
//     if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
//     }
//     else {
//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     }
// });
// }

// Starts our server.
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
