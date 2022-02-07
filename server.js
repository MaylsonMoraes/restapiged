const express = require("express")
const mongo = require("mongodb").MongoClient

const app = express()
app.use(express.json())

app.post("/Documento", (req, res) => {
    const name = req.body.name
    Documentos.insertOne({ name: name }, (err, result) => {
        if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
        }
        console.log(result)
        res.status(200).json({ ok: true })
    })
  })
  app.get("/Documentos", (req, res) => {
    Documentos.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ Documentos: items })
    })
  })
  app.post("/expense", (req, res) => {
    /* */
  })
  app.get("/expenses", (req, res) => {
    /* */
  })

  app.listen(3000, () => console.log("Server ready"))
  const url = "mongodb://localhost:27017"

  let db, Documentos, expenses

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("tripcost")
    Documentos = db.collection("Documentos")
    expenses = db.collection("expenses")
  }
)