const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('whats up dawg')
})
//------------------------GREETING STRANGER!-----------------------------------------------
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})
app.get('/greeting/:data', (req, res) => {
    res.send(`whats gucci ${req.params.data}`)
})


//==========================TO-CHEAP-TO-TIP===================
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    const billTotal = (`${req.params.total}`) 
    const tipPercent = (`${req.params.tipPercentage}`)
    const tipAmount = (billTotal * (tipPercent / 100))
    const tipDeci = (tipPercent / 100)
    function bigBaller(tipDeci) {
        if (tipDeci < 0.12 && tipDeci > 0.0001) {
          res.send(`You tipped ${tipAmount}. You cheapppp!`);
        } else if (tipDeci >= 0.12 && tipDeci < 0.45) {
          res.send(`You tipped ${tipAmount}.`);
        } else if (tipDeci >= 0.45 && tipDeci < 1) {
          res.send(`You tipped ${tipAmount}. Big baller you!`);
        } else if (tipDeci >= 1) {
          res.send(`You tipped ${tipAmount}. SHEEEEESHHHHHHHHHHHHHHH!!`);
        } else if (tipDeci < 0.0001) {
          res.send(`Bruh, please don't eat out.`);
        }
      }
return bigBaller(tipDeci);
})

app.listen(3000, () => {
    console.log('Cortana checking in from port 3000')
})

console.log(9*0) 