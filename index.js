const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index',{
        precio: 1230,
        user: "Fernando Hugo Alvarez"
    })
})

app.listen(3000, ()=>{
    console.log('Servidor ejecutando en el puerto: 3000')
})

