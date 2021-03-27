const PORT = 3000

let app = require("express")()
let data = require("./data")
let icon = require("./icon")

app.post("/settings", (req, res) => {
    
})

app.post("/save", (req, res) => {

})

app.get("/fetch", (req, res) => {

})

app.get("/query", (req, res) => {

})

app.get("/pipes", (req, res) => {
    
})

app.get("/render", (req, res) => {
    
})

app.get("/icon", (req, res) => {
    let type = req.header("Icon-Type")
    let name = req.header("Icon-Name")
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Access-Control-Allow-Headers', 'Icon-Type, Icon-Name');
    res.setHeader('Access-Control-Request-Method', 'GET');
    res.setHeader('Origin', 'http://127.0.0.1:3000');
    res.sendFile(icon.fetchIcon(type, name));
})

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})
