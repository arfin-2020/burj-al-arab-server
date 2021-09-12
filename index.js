const express = require('express')
const app = express()
const port = 5000;
const { MongoClient } = require('mongodb');
require('dotenv').config()

var cors = require('cors')
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r5j5a.mongodb.net/burjAlarab1?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const ProductCollection = client.db("burjAlarab1").collection("bookings");
//   console.log('Db connection Successfully............')
        console.log(uri)
    //POST Methods 
    app.post('/addBooking',(req,res)=>{
        const newBooking = req.body;
        console.log(newBooking);
        res.send(newBooking)
    })
});

app.listen(port)