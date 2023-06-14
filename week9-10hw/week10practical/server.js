require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const Item = require('./models/item')
const PORT = process.env.PORT || 3000

app.use(express.json())

//using curl http://localhost:3000/ in another terminal tab while having the local server running will check if we get the line 'we are in Neo' at the '/' page.
mongoose.connect(process.env.MONGO_URI)  // we created a var in .env called MONGO_URI TO CONNECT OUR DATA
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})


app.get('/', (req, res) => {
    res.send('We are in Neo') 
})
let items = [];

//INDEX

app.get('/items', (req, res) => {
    try {
        res.json(items);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})


//NEW


//DELETE


//UPDATE


//CREATE
app.post('/items', async (req, res) => {
    try {
      const newItem = await Item.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
//EDIT






























app.listen(PORT, () => {
    console.log(`meeeehhh whats up doc ${PORT}`)
})
