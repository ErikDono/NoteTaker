// Dependencies
var express = require("express")
var app = express()
require("./routes/api")(app)
require("./routes/html")(app);
var PORT = process.env.PORT || 7070
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
