const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000
const { MongoClient } = require('mongodb');
app.use(cors())
app.use(bodyParser.json())
const uri = "mongodb+srv://Sayel:Sayel@cluster0.d8lte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Vol").collection("Vol1");
  app.post('/addBooking',(req,res)=>{
    const product = req.body;
    console.log(product)
    collection.insertOne(product)
  })
  app.get('/Booking',(req,res)=>{
    console.log(req.query.email)
    collection.find({email: req.query.email})
    .toArray((err,document)=>{
      res.send(document)
    })
  })

 
});


app.listen(port)