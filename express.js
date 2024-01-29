const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/")
app.use(bodyParser.json())
const schema =  mongoose.Schema({id: {type: String, required: true}, student: {type: String, required: true}})
const workshop = mongoose.model('workshop', schema)


app.get('/', (req, res) => {
  res.send(req)
})

app.get('/connexion', (req, res) => {
    workshop.find()
    .then((p) => {return res.status(200).json(p)})
    .catch((error) => {return res.status(400).json({error})})
    console.log("sur la page de co")
})

app.listen(port, () => {
    console.log("server ki tourn")
})