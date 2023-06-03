const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('whats up dawg')
})

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})
app.get('/greeting/:data', (req, res) => {
    res.send(`whats gucci ${req.params.data}`)
})


app.listen(3000, () => {
    console.log('Cortana checking in from port 3000')
})
