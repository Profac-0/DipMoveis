const express = require('express')
const app = express()
const parser = require('body-parser')


app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')

})
app.get('/soma', (req, res) => {
    var n1 = (req.query.n1-0)*2
    var name = req.query.name

    var phrase = "Hello there " + name + " the double of your number is " + n1

    res.render('calk', {phrase})

})



app.listen(8080)
console.log("servidor rodando em: http://localhost:8080/?")
