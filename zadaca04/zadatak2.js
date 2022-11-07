import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())
var jebemTiMater = []




app.get("/vratiAutore", (req , res) => {
  res.send(jebemTiMater)
})

app.post("/dodajAutora", (req, res) => {
    var da = req.body
    var a = "Error: 'Krivi kljucevi'"
    if (!da.naziv && !da.djela) {
        res.send(a)
      } else  {
        for (i in da.djela) {
            if (da.djela[i].length > 20) {
              res.send({Error: "Djelo " + da.djela[i] + " ima vise od 20 znakova" })
      } 
    }
}
    da = {... data, "id":uuidv4(),"datum": new Date()}
    jebemTiMater.push(da)
    res.send(jebemTiMater)
})


app.delete("izbrisiDjeloAutora/:djelo", (req , res ) => {
    var { djelo } = req.params 
    var { id } = req.params

    for(let i; i<jebemTiMater.length; i++){
        if (jebemTiMater[i].id == id) { jebemTiMater[i].djela.filter((x) => x.djelo == djelo) }
    }
    res.send(jebemTiMater)
})

app.listen(port, () => console.log(`Works on port ${port}`))
