let db = require("../db/db.json")


module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        res.json({ db })
    });
    app.post("/api/notes", (req, res) => {
        req.body.id = db.length
        db = db.push(req.body)
        res.json({ db })
    })

    app.post("/api/delete", (req, res) => {
        db = db.filter(element => element.id !== req.body.id)
        res.json({ db })
    })
}