const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.listen(8080, ()=>{
    console.log('Servidor ejecutando en el puerto: 8080')
})

