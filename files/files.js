const express = require('express')
const app = express()
const parser = require('body-parser')
const fs = require('fs')

app.use(express.static("css"));
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
        const mailLocation = 'emails/'+req.body.name + '.txt'

        fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))
        fs.writeFileSync(mailLocation, JSON.stringify(req.body.mail))
        //fs.appendFileSync('dados/log.txt', JSON.stringify(req.body))
        

        

        res.render('sucess')
    })

app.route('/search')
    .get((req,res) =>{
        res.render('log')
    })
    .post((req,res) => {
        const nomeArquivo = 'dados/'+req.body.name + '.txt'

        var mail = []
        mail = fs.readFileSync('emails/')
        const results = mail.toString();
        res.render('log', {results})



        /*if (fs.existsSync(nomeArquivo)) {
            const leArquivoBuffer = fs.readFileSync(nomeArquivo);
            console.log(leArquivoBuffer);

            const leArquivoString = leArquivoBuffer.toString();
            console.log(leArquivoString);

            
            const jason13 = JSON.parse(leArquivoString);
            console.log(jason13);

            const result = leArquivoString
            res.render('log', {x:result})
            } else
            res.render('log', { x: 'Arquivo não encontrado: '+req.body.name })
            */
    
    })




app.listen(8080)
console.log("http://localhost:8080")