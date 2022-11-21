import express from "express"
import bodyParser from "body-parser"
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://1234:1234@vjezba.dfqmtgo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("test")
const oba = database.collection("test0")
const cursor = oba.find()
const nee = await cursor.toArray()

const app = express()
const port = 3000

app.use(bodyParser.json())
var jebemTiMater = []

app.get("/vratiObavjesti", (req, res) => {
    var ne=[]
    nee.forEach(jebemTiMater => {
        ne.push(
            { "naziv": jebemTiMater.naziv, "datum": jebemTiMater.datum
            }
        )
    })
    res.send(ne)
})

app.post("/dodajObavijest", async (req, res) => {
    var data = req.body
    data.datum= new Date()

    oba 
    .insertOne(data)
    .then(result=>{
    res.status(201).json(result)
    })
    .catch(error=>{
        res.send(500).json({error: "error"})
    })
    
})


app.get("/vratiObavijest/:id",async (req, res) => {
    var t = []
    var { _id } = req.params
    var mama = nee.find((x) => x.id  == _id)
    t.push(mama.naziv,mama.sadrzaj,mama.datum)
    res.send(mama)
    
}) 

app.patch("/izmjeniObavjest/:id", async (req, res) => {
    var { id } = req.params
    var { sadrzaj } = req.body;
    res.send(id);
    var user = jebemTiMater.find((x) => x.id  == id)

    user.sadrzaj = sadrzaj
    console.log(user)

    res.send(jebemTiMater)

})


app.listen(port, () => console.log(`Works on port ${port}`))