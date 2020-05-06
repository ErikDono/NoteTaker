var { noteData } = require("../data/data")
var fs = require("fs");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/notes.html", function (err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
            }
            else {
                var noteData = noteData += data
                app.get(noteData, function (req, res) {
                    var noteData = noteData += data
                    res.json(noteData

                    )
                })
                app.post("api/notes", function (req, res) {
                    noteData.push("../db/db.json")
                })

            }
        })
    })

}