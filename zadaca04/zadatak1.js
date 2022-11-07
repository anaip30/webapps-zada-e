import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())
var jebemTiMater = []

app.get("/vratiObavjesti", (req, res) => {
    var ne=[]
    jebemTiMater.forEach(jebemTiMater => {
        ne.push(
            { "naziv": jebemTiMater.naziv, "datum": jebemTiMater.datum
            }
        )
    })
    res.send(ne)
})

app.post("/dodajObavijest", (req, res) => {
    var data = req.body
    console.log(data)

    data = {... data, "id":uuidv4(),"datum": new Date()}
    console.log(data)
    jebemTiMater.push(data)
    res.send(jebemTiMater)
})


app.get("/vratiObavijest/:id", (req, res) => {
    var { id } = req.params
    var mama = jebemTiMater.find((x) => x.id  == id)
    res.send(mama)
    
}) 

app.patch("/izmjeniObavjest/:id", (req, res) => {
    var { id } = req.params
    var { sadrzaj } = req.body;
    res.send(id);
    var user = jebemTiMater.find((x) => x.id  == id)

    user.sadrzaj = sadrzaj
    console.log(user)

    res.send(jebemTiMater)

})


app.listen(port, () => console.log(`Works on port ${port}`))