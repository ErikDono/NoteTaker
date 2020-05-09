const fs = require("fs").promises;

const getItem = () => {
    return fs.readFile("db/db.json", "utf8")
}


module.exports = function (app) {
    app.get("/api/notes", async (req, res) => {
        const items = await getItem()
        // JSON.parse(items)
        res.json(JSON.parse(items))
        console.log(JSON.parse(items))
    });
    app.post("/api/notes", async (req, res) => {
        let db = await getItem()
        db = JSON.parse(db)
        let newNote = req.body
        req.body.id = db.length + 1
        db.push(newNote)
        fs.writeFile("db/db.json", JSON.stringify(db))
        res.json(JSON.parse(db))


    })

    app.post("/api/notes/:id", async (req, res) => {
        let db = await getItem()
        db = JSON.parse(db)
        let editDb = db.splice(db.findIndex(element => element.id !== req.params.id))
        db.push(editDb)
        fs.writeFile("db/db.json", JSON.stringify(db))
        res.json(JSON.parse(db))
    })
}

