// Dependencies
var express = require("express")
// An instance of express
var app = express()
// Port
var PORT = process.env.PORT || 7070;
// express bits for app to use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// links route api with express app
require("./routes/api")(app)
// links route html with express app
require("./routes/html")(app);
// console log to make sure port is listening on the correct port
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});