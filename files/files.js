const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    res.render('main')
})


app.route('/temp')
    .post((req,res) => {

    })

app.listen(8080)
console.log("http://localhost:8080")