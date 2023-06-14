const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({ //  Schema how to present a data and how it take data  for example the strings
    name: { type: String, require: true }, // 
    price: { type: String, require: true },
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item