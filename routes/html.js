
var path = require("path");

// brings in app from express
module.exports = function (app) {
    // directs users to note html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
    // directs users to index page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}