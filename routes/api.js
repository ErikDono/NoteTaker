const fs = require("fs").promises;
const crypto = require("crypto")

const id = crypto.randomBytes(16).toString("hex");


const getItem = () => {
    return fs.readFile("db/db.json", "utf8")
}


// allows routes to pull from express 
module.exports = function (app) {
    // getting current database items
    app.get("/api/notes", async (req, res) => {
        // read the database
        const items = await getItem()
        // 
        // return res.json(JSON.parse(items))
        res.json(JSON.parse(items))

    });
    // Posts new note onto db and html
    app.post("/api/notes", async (req, res) => {
        // reads the current db
        let db = await getItem()
        // makes an object
        db = JSON.parse(db)
        // new note becomes the info taken in from the user
        const newNote = req.body
        // adds 1 to the new items id
        req.body.id = id
        // pushes note into the database
        db.push(newNote)
        // re-writes the database into the database file
        fs.writeFile("db/db.json", JSON.stringify(db))
        // makes sure db is current
        console.log({ db })
        // sends the re-written db to the page
        // return res.send(db)
        res.send(db)



    })

    // this will delete a text object  
    app.post("/api/notes/:id", async (req, res) => {
        //reads current database
        let db = await getItem()
        // makes the array into an object
        db = JSON.parse(db)
        // set id to the paramater to be deleted
        let delItem = req.params.id
        // filters and deletes item by delItem 
        let editDb = db.filter(element => element.id !== delItem)
        console.log(editDb, "this is the new db")
        // rewrites database file
        fs.writeFile("db/db.json", JSON.stringify(editDb))
        // console logs new database
        // sends info to the page to display 
        res.send(editDb)

    })
}

