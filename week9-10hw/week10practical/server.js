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

app.get('/items', async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})




//NEW

// GET /items/:id: Get an item by id
app.get('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the item by id
      const item = await Item.findById(id);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

//DELETE


//UPDATE
app.put('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
  
      // Find the item by id and update its name and price
      const updatedItem = await Item.findByIdAndUpdate(id, { name, price }, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // DELETE /items/:id: Delete an item by id
  app.delete('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the item by id and delete it
      const deletedItem = await Item.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(deletedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
 


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
