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


//------------------YOU=JUST=GOT=GOLDEN=RATIOED=BRO!------
//Tried to use a if statement using the formula for fibonacci to check if the number is a perfect squareroot but it still return even if there are decimal. 
//time crunch i want to think of a away  to make whole number true and numnber with decimal become false.
app.get('/Fibonnaci/:num', (req, res) => {
    const n = parseInt(req.params.num)

    function fibonnaciOrFugazi (n, res) {
        let a = 0 
        let b = 1

        while (b <= n) {
            if (b === n) {
                res.send('GOLDEN RATION BABYYYYYYYY')
                return;
            }
            const newNum = a
            a = b
            b = newNum + b
        }
        res.send("MAMA MIA!!! IT'S A FUGAZI")
    }
  fibonnaciOrFugazi(n, res)
})

app.listen(3000, () => {
    console.log('Cortana checking in from port 3000')
})

console.log(5*(2*2)-4) 