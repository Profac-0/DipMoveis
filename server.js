const express = require('express')
const app = express()
const parser = require('body-parser')


app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')

})
app.get('/calc', (req, res) => {
    var frequency = req.query.n1-0
    var work = req.query.n2-0
    const planek = 6.62*10**-34

    var energy = planek*frequency-work

    res.send(energy)
    

})


app.listen(8080)
console.log("servidor rodando em: http://localhost:8080/?")
