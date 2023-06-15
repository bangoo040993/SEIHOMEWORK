const express = require('express');
const jsxEngine = require('jsx-view-engine')
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes1');
const app = express();
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(express.urlencoded({ extended: true }))


app.use(express.json());
app.use(morgan('combined'));
app.use('/todos', todoRoutes);

module.exports = app;
