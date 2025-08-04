const express = require('express')
const app = express()
const parser = require('body-parser')
const fs = require('fs')

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    res.render('main')
})


app.route('/temp')
    .post((req,res) => {
        const nomeArquivo = 'dados/'+req.body.name + '.txt'

        fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))

        res.render('sucess')
    })

app.listen(8080)
console.log("http://localhost:8080")